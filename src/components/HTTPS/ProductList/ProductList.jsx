import { useLocation } from "react-router-dom";
import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = ({ items = null }) => {
  const location = useLocation();
  return (
    <ul>
      {location.pathname === "/products" && <li>Hello from products</li>}
      {location.pathname === "/search" && <li>Hello from search</li>}
      {items !== null &&
        Array.isArray(items) &&
        items.map((item) => {
          return (
            <li key={item.id}>
              <ProductListItem item={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default ProductList;
