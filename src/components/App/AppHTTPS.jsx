import { useState } from "react";
import { useEffect } from "react";
import ErrorMessage from "../HTTPS/ErrorMessage/ErrorMessage";
import Loader from "../HTTPS/Loader/Loader";
import ProductList from "../HTTPS/ProductList/ProductList";
import { requestProducts, requestProductsByQuery } from "../../services/api";
import SearchFrom from "../SearchForm/SearchFrom";

const AppHTTPS = () => {
  //* дані які прийшли з бекенду збергіаємо в  state,коли даних немає це - null
  const [searchQuery, SetSearchQuery] = useState(null);
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

  //*слідкуємо за пошукаовим запитом перемалювуємо розмітку
  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await requestProductsByQuery(searchQuery);
        setItems(data.products);
      } catch (err) {
        setIsError(true);
        setErrMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByQuery(); // якщо нічого не введено - виходь
  }, [searchQuery]);
  const onSetSearchQuery = (query) => {
    SetSearchQuery(query);
  };
  return (
    <div>
      <h1>Convenience store</h1>
      <SearchFrom onSetSearchQuery={onSetSearchQuery} />
      {isError && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <Loader />}
      {/* //*передаємо дані зі стейту */}
      <ProductList items={items} />
    </div>
  );
};

export default AppHTTPS;
