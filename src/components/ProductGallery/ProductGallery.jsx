import css from "../../App.module.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGallery = ({ productData }) => {
  return (
    <div className={css.cardGrid}>
      {[...productData]
        .sort((a, b) => a.quantity - b.quantity)
        .map((item) => {
          const isPromotional = item.quantity <= 4;
          return (
            <ProductCard
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              hasDiscount={item.hasDiscount}
              text={item.text}
              quantity={item.quantity}
              promotional={isPromotional}
            />
          );
        })}
    </div>
  );
};

export default ProductGallery;
