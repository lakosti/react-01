import { useState } from "react";
import Gallery from "../ExampleHttps/Gallery.jsx";
import { BulletList } from "react-content-loader";
import { fetchArticlesWithTopic } from "../../services/articles-api.js";
import { SearchInput } from "../ExampleHttps/SearchInput/SearchInput.jsx";
// const MyBulletListLoader = () => <BulletList />;

const AppExampleHttps = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //     //*ВІДРАЗУ ВІДОБРАЖАЄ РОЗМІТКУ
  //   useEffect(() => {
  //     async function fetchArticles() {
  //       try {
  //         setLoading(true);
  //         const data = await fetchArticlesWithTopic("react");
  //         setArticles(data);
  //       } catch (error) {
  //         //якщо є помилка true -- то рендириться параграф
  //         setError(true);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     fetchArticles();
  //   }, []);

  //*РОЗМІТКА РЕНДЕРИТЬСЯ ПО КЛЮЧОВОМУ СЛОВУ
  const handleSearch = async (topic) => {
    try {
      setArticles([]); // скидання перед новим запитом
      setError(false); // скидання помилки якщо була
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      {loading && <BulletList />}
      {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
      {articles.length > 0 && <Gallery items={articles} />}
    </div>
  );
};

export default AppExampleHttps;
