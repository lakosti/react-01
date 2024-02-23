// import picture from "./public/vite.svg";

//створення компонента -- rafce (сніпет)
const ProductCard = ({ img, title, price, text, hasDiscount = false }) => {
  return (
    <div>
      {/* <img src={picture} alt="" /> */}

      <img src={img} alt="" width={400} />
      <h3>
        {title} {hasDiscount ? <span> BIG SALE</span> : null}
        {/* {props.hasDiscount && <span> BIG SALE</span>} */}
      </h3>
      <p>Price: {price}</p>
      <p>{text}</p>
      <button type="button">Add to card</button>
      <button type="button">Remove</button>
    </div>
  );
};

export default ProductCard;

// props.hasDiscount ? <span> BIG SALE</span> : null; // якщо є знижка (true) то показуй спан з розміткою, в іншому випадку  нічого
// {props.hasDiscount && <span> BIG SALE</span>} // якщо hasDiscount = true то повертаємо SALE
