const ProductListItem = ({ item }) => {
  return (
    <>
      <h3>{item.title}</h3>
      <img width={300} src={item.thumbnail} alt={item.title} />
      <p>{item.description}</p>
      <div>
        <p>Brand: {item.brand}</p>
        <p>Price: {item.price}</p>
      </div>
    </>
  );
};

export default ProductListItem;
