import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = ({ items = null }) => {
  return (
    <ul>
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
