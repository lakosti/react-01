import MailBox from "./components/MailBox";
import ProductGallery from "./components/ProductGallery/ProductGallery";

import productData from "./productData"; // json object

//компонент певний шаблон з даними який може бути перевикористаний
// синтаксис XML розмітка JSX
function App() {
  return (
    //повертаєм лише один елемент (один загальний контейнер) якщо не потрібен дів то просто ставимо пустий тег (реакт фрагмент)
    <div>
      <MailBox />
      <ProductGallery productData={productData} />
      {/* 
      <ProductCard
        img="https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg"
        title="Taco XL"
        price={5.99}
        // hasDiscount={false} -- якщо пропс не переданий, передаємо значення за замовчуванням
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium nisi corrupti cum obcaecati eaque fugiat, ipsum officiis, cupiditate voluptatem ipsa nostrum nulla deleniti, sit mollitia nam explicabo id minus."
      /> */}
    </div>
  );
}

export default App;
