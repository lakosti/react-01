// import picture from "./public/vite.svg";
import css from "./ProductCard.module.css";

//створення компонента -- rafce (сніпет)
const ProductCard = ({ img, title, price, text, hasDiscount = false }) => {
  //інлайн стилі + трошки дж (використ для якогось руху( карточок) не бажано так )
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    border: hasDiscount ? "2px solid green" : "2px solid black",
    borderRadius: "20px",
    padding: "20px",
  };

  return (
    <div style={cardStyle}>
      {/* <img src={picture} alt="" /> */}
      <img className={css.cardImg} src={img} alt="" width={400} />
      <h3 className={css.cardTitle}>
        {title} {hasDiscount ? <span> BIG SALE</span> : null}
        {/* {props.hasDiscount && <span> BIG SALE</span>} */}
      </h3>
      <p className={css.cardPrice}>Price: {price}</p>
      <p className={css.cardDesc}>{text}</p>
      <div className={css.wrapperBtn}>
        <button className={css.cardAddToCardBtn} type="button">
          Add to card
        </button>
        <button className={css.cardRemoveBtn} type="button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

// props.hasDiscount ? <span> BIG SALE</span> : null; // якщо є знижка (true) то показуй спан з розміткою, в іншому випадку  нічого
// {props.hasDiscount && <span> BIG SALE</span>} // якщо hasDiscount = true то повертаємо SALE

// Є ТРИ ВИДИ СТИЛІВ:
// 1. INLINE
// 2. Ванільний CSS
// 3. Moдульний CSS
