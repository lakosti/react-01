import { useState } from "react";
import { useEffect } from "react";
import ErrorMessage from "../components/HTTPS/ErrorMessage/ErrorMessage.jsx";
import Loader from "../components/HTTPS/Loader/Loader.jsx";
import ProductList from "../components/HTTPS/ProductList/ProductList.jsx";
import { requestProductsByQuery } from "../services/api.js";
import SearchFrom from "../components/SearchForm/SearchFrom.jsx";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  //* дані які прийшли з бекенду збергіаємо в  state,коли даних немає це - null

  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState(false); //текс помилки
  //   const [searchQuery, SetSearchQuery] = useState(null);
  const [searchParams, SetSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query"); //? зчитує значення пошукового параметра по ключу query
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

    fetchDataByQuery();
  }, [searchQuery]);
  const onSetSearchQuery = (seacrhTerm) => {
    // SetSearchQuery(query);
    //*перевірка на пустий рядок
    if (seacrhTerm.length === 0) {
      alert("Please enter something");
      return;
    }
    SetSearchParams({ query: seacrhTerm });
  };
  return (
    <div>
      <h1>Find products</h1>
      <SearchFrom onSetSearchQuery={onSetSearchQuery} />
      {isError && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <Loader />}
      {/* //*передаємо дані зі стейту */}
      <ProductList items={items} />
    </div>
  );
};

export default SearchPage;
