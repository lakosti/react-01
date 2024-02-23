import "./App.css";
import ProductCard from "./components/ProductCard";
import MailBox from "./components/MailBox";

// const productData = [
//   {
//     id: "1",
//     img: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=1320&height=850&fit=crop&format=pjpg&auto=webp",
//     title: "Taco Black",
//     price: 10.99,
//     hasDiscount: true,
//     text: "Cum obcaecati eaque fugiat, ipsum officiis, cupiditate voluptatem ipsa nostrum nulla deleniti, sit mollitia nam explicabo id minus.",
//   },
//   {
//     id: "2",
//     img: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg",
//     title: "Taco XL",
//     price: 7.99,
//     hasDiscount: false,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium nisi corrupti cum obcaecati eaque fugiat, ipsum officiis, cupiditate voluptatem ipsa nostrum nulla deleniti, sit mollitia nam explicabo id minus.",
//   },
//   {
//     id: "3",
//     img: "https://cdn.pixabay.com/photo/2024/01/30/12/49/sunset-8541936_1280.jpg",
//     title: "BIG MAK",
//     price: 4.59,
//     hasDiscount: false,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium nisi corrupt",
//   },
// ];
//компонент певний шаблон з даними який може бути перевикористаний
// синтаксис XML розмітка JSX
function App() {
  return (
    //повертаєм лише один елемент (один загальний контейнер) якщо не потрібен дів то просто ставимо пустий тег (реакт фрагмент)
    <div>
      {/* РОБОТА З КОЛЕКЦІЄЮ */}

      {/* {productData.map((item) => {
        return (
          <ProductCard
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            hasDiscount={item.hasDiscount}
            text={item.text}
          />
        );
      })} */}
      <MailBox />
      <ProductCard
        img="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=1320&height=850&fit=crop&format=pjpg&auto=webp"
        title="Taco Black"
        price={10.99}
        hasDiscount={true}
        text="Cum obcaecati eaque fugiat, ipsum officiis, cupiditate voluptatem ipsa nostrum nulla deleniti, sit mollitia nam explicabo id minus."
      />
      <ProductCard
        img="https://cdn.pixabay.com/photo/2024/01/30/12/49/sunset-8541936_1280.jpg"
        title="Taco Vega"
        price={7.99}
        hasDiscount={false}
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium nisi corrupt"
      />
      <ProductCard
        img="https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg"
        title="Taco XL"
        price={5.99}
        // hasDiscount={false} -- якщо пропс не переданий, передаємо значення за замовчуванням
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium nisi corrupti cum obcaecati eaque fugiat, ipsum officiis, cupiditate voluptatem ipsa nostrum nulla deleniti, sit mollitia nam explicabo id minus."
      />
    </div>
  );
}

export default App;
