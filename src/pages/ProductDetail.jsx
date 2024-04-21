import { Suspense, lazy, useEffect, useRef } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { requestProductById } from "../services/api";
import Loader from "../components/HTTPS/Loader/Loader";
import ErrorMessage from "../components/HTTPS/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { setIsError, setIsLoading, setSeeMore } from "../redux/productDetailReducer";
import ReduxCounter from "../components/ReduxCounter/ReduxCounter";

const Comments = lazy(() => import("../components/Comments"));

const ProductDetail = () => {
  //*ДОСТУП ДО АЙДІ через useParams
  const { productId } = useParams();
  const location = useLocation();
  //? збереження значення сторінки звідки ми прийшли
  const backLinkRef = useRef(location.state ?? "/search");
  // const [seeMore, setSeeMore] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  //!ВИТЯГУЄМО ДАНІ ІЗ ГЛОБАЛЬНОГО СХОВИЩА ЯКЕ СТВОРИЛИ
  const dispatch = useDispatch();
  const seeMore = useSelector((state) => state.productDetails.seeMore);
  const isLoading = useSelector((state) => state.productDetails.isLoading);
  const isError = useSelector((state) => state.productDetails.isError);
  console.log("seeMore: ", seeMore);
  console.log("isLoading: ", isLoading);
  console.log("isError: ", isError);

  //* робиться перший раз запит коли користувач тільки відкрив сторінку
  useEffect(() => {
    async function fetchData() {
      try {
        //! loading
        // setIsLoading(true);
        //*старий приклад
        // const loadingEnableAction = {
        //   type: "details/setIsLoading",
        //   payload: true,
        // };
        // dispatch(loadingEnableAction);
        // //!action creaters
        // dispatch(setIsLoading(true));

        dispatch(setIsLoading(true));
        //! error
        // setIsError(false);
        dispatch(setIsError(false));
        const data = await requestProductById(productId);
        //! data
        // setSeeMore(data);

        // const setSeeMoreAction = {
        //   type: "details/setSeeMore",
        //   payload: data,
        // };
        // dispatch(setSeeMoreAction);

        dispatch(setSeeMore(data));
      } catch (err) {
        // setIsError(true);

        dispatch(setIsError(true));
      } finally {
        // setIsLoading(false);

        dispatch(setIsLoading(false));
      }
    }
    fetchData();
  }, [productId, dispatch]);
  return (
    <>
      <ReduxCounter />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {seeMore !== null && (
        <div>
          <Link to={backLinkRef.current}>Go back</Link>
          <h3>Details for products</h3>
          <h4>{seeMore.title}</h4>
          <p>Price: {seeMore.price}</p>
          <p>{seeMore.description}</p>
          <p>Rating: {seeMore.rating}</p>
          <ul>
            {seeMore.images.map((img) => (
              <li key={seeMore.id}>
                <img src={img} alt={seeMore.title} width={300} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <Link to="comments">Comments</Link>
      </div>
      <Suspense>
        <Routes>
          <Route path="comments" element={<Comments />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default ProductDetail;
