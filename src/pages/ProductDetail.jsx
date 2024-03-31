import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { requestProductById } from "../services/api";
import Loader from "../components/HTTPS/Loader/Loader";
import ErrorMessage from "../components/HTTPS/ErrorMessage/ErrorMessage";
import Comments from "../components/Comments";

const ProductDetail = () => {
  //*ДОСТУП ДО АЙДІ через useParams
  const { productId } = useParams();
  const location = useLocation();
  //? збереження значення сторінки звідки ми прийшли
  const backLinkRef = useRef(location.state ?? "/search");

  const [seeMore, setSeeMore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //* робиться перший раз запит коли користувач тільки відкрив сторінку
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await requestProductById(productId);
        console.log(data);
        setSeeMore(data);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [productId]);
  return (
    <>
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
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default ProductDetail;
