import { Link, useLocation } from "react-router-dom";

const ProductListItem = ({ item }) => {
  const location = useLocation();
  return (
    <>
      <h3>{item.title}</h3>
      <img width={300} src={item.thumbnail} alt={item.title} />
      <p>{item.description}</p>
      <div>
        <p>Brand: {item.brand}</p>
        <p>Price: {item.price}</p>
      </div>
      {/* //*ДОБАВЛЯЄМО УНІКАЛЬНИЙ АЙДІ КОЖНОМУ ЕЛЕМЕНТУ */}
      <Link state={location} to={`/products/${item.id}`}>
        See datails
      </Link>
    </>
  );
};

export default ProductListItem;
