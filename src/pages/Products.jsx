import { useState } from "react";
import { useEffect } from "react";
import ErrorMessage from "../components/HTTPS/ErrorMessage/ErrorMessage.jsx";
import Loader from "../components/HTTPS/Loader/Loader.jsx";
import ProductList from "../components/HTTPS/ProductList/ProductList.jsx";
import { requestProducts } from "../services/api.js";

const Products = () => {
  //* дані які прийшли з бекенду збергіаємо в  state,коли даних немає це - null
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState(false); //текс помилки

  //* робиться перший раз запит коли користувач тільки відкрив сторінку
  useEffect(() => {
    async function fetchData() {
      try {
        //*відображаємо лоадер перед запитом
        setIsLoading(true);
        //щоб випадково не висвітилася помилка
        setIsError(false);

        const data = await requestProducts();
        //* записали у стейст(items) дані з запиту
        setItems(data.products);
      } catch (err) {
        setIsError(true);
        setErrMsg(err.message);
      } finally {
        //* вимкнули лоадер
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Convenience store</h1>
      {isError && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <Loader />}
      {/* //*передаємо дані зі стейту */}
      <ProductList items={items} />
    </div>
  );
};

export default Products;
