import { useEffect, useState } from "react";
import MailBox from "./components/MailBox";
import ProductGallery from "./components/ProductGallery/ProductGallery";

import productData from "./productData"; // json object
import ClickCounter from "./components/ClickCounter";

//компонент певний шаблон з даними який може бути перевикористаний
// синтаксис XML розмітка JSX
const emailsData = [
  { id: "1", email: "alex@example.com" },
  { id: "2", email: "oleg@example.com" },
  { id: "3", email: "igor@example.com" },
];

function App() {
  //*  гетер(ініціазізуємо)  сетер(функція -- встановлюємо/оновлюємо)
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState(0);
  //*показувати чи ховати розмітку
  const [showMailBox, setshowMailBox] = useState(false);

  //? РОБОТА ЗІ СХОВИЩЕМ (ОТРИМАННЯ З)
  const [emails, setEmails] = useState(() => {
    const stringifiedEmail = localStorage.getItem("emails");
    if (!stringifiedEmail) return emailsData; // якщо нічого немає поверни об'єкт
    const parsedEmails = JSON.parse(stringifiedEmail); //! ЗІ СТРОКИ В ОБ'ЄКТ
    return parsedEmails;

    //коротший запис
    // const stringifiedEmail = localStorage.getItem("emails");
    // const parsedEmails = JSON.parse(stringifiedEmail ?? []);
    // return parsedEmails;
  });
  //? РОБОТА ЗІ СХОВИЩЕМ (ВСТАНОВЛЕННЯ В)
  useEffect(() => {
    localStorage.setItem("emails", JSON.stringify(emails)); //! З ОБ'ЄКТА В СТРОКУ
  }, [emails]);

  useEffect(() => {
    if (counter === 0) return;
    console.log("Count this email = ", counter);
  }, [counter]); //!слідкуємо за зміною лічильника

  const onLogEmail = () => {
    console.log("Email was sent"); // ФУНКЦІЇ ЗВОРОТНЬОГО ВИКЛИКУ
    // setCounter(counter + 1);
    setCounter((prevState) => prevState + 1);
  };
  const deleteById = (id) => {
    //*ВИДАЛЕННЯ ЕЛЕМЕНТА
    // setEmails(emails.filter((email) => email.id !== id));
    setEmails((prevState) => prevState.filter((email) => email.id !== id));
  };
  //*ДОДАВАННЯ ЕЛЕМЕНТА
  // const addElement = (el = {
  //   id: "123", email:"elex.com"}) =>{
  //   setEmails(prevState => [...prevState, el])
  // };
  //*показувати чи ховати розмітку
  const handleShowMail = () => {
    setshowMailBox((prevState) => !prevState);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    //повертаєм лише один елемент (один загальний контейнер) якщо не потрібен дів то просто ставимо пустий тег (реакт фрагмент)
    <div>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />

      <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>

      <h1> Email counter: {counter}</h1>

      <button onClick={handleShowMail}>{showMailBox ? "Hide" : "Show"} MailBox</button>

      {showMailBox ? (
        <MailBox
          onClose={handleShowMail}
          emails={emails}
          emailCounter={counter}
          onLogEmail={onLogEmail}
          onDeleteEmail={deleteById}
        />
      ) : null}

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
