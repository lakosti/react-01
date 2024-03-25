import { useEffect, useState } from "react";
import MailBox from "../components/MailBox";
import ProductGallery from "../components/ProductGallery/ProductGallery.jsx";

import productData from "../productData.json";
import ClickCounter from "../components/ClickCounter.jsx";
import { nanoid } from "nanoid";
import MailBoxForm from "../components/MailBoxForm/MailBoxForm.jsx";
import MailBoxForm2 from "../components/MailBoxForm/MailBoxForm2.jsx";
import MailBoxForm3 from "../components/MailBoxForm/MailBoxForm3.jsx";

const emailsData = [
  {
    id: "1",
    email: "alex@example.com",
    userName: "Arab",
    preferredColor: null,
    subscription: "standart",
  },
  {
    id: "2",
    email: "oleg@example.com",
    userName: "Alex",
    preferredColor: null,
    subscription: "vip",
  },
  {
    id: "3",
    email: "igor@example.com",
    userName: "Igor",
    preferredColor: null,
    subscription: "premium",
  },
];

function MailBoxPages() {
  //*  гетер(ініціазізуємо)  сетер(функція -- встановлюємо/оновлюємо)
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState(0);
  //*показувати чи ховати розмітку
  const [showMailBox, setshowMailBox] = useState(false);

  //? РОБОТА ЗІ СХОВИЩЕМ (ОТРИМАННЯ З) + ВИДАЛЕННЯ
  const [emails, setEmails] = useState(() => {
    const stringifiedEmail = localStorage.getItem("emails");
    if (!stringifiedEmail) return emailsData; // якщо нічого немає поверни об'єкт
    const parsedEmails = JSON.parse(stringifiedEmail); //! ЗІ СТРОКИ В ОБ'ЄКТ
    return parsedEmails;
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
    console.log("Email was sent");
  };
  const deleteById = (id) => {
    //*ВИДАЛЕННЯ ЕЛЕМЕНТА

    setEmails((prevState) => prevState.filter((email) => email.id !== id));
  };
  //*ДОДАВАННЯ ЕЛЕМЕНТА
  const onAddNewEmailData = (mailData) => {
    const newEmail = {
      ...mailData,
      id: nanoid(),
    };

    setEmails((prevState) => [...prevState, newEmail]);
  };

  //*показувати чи ховати розмітку
  const handleShowMail = () => {
    setshowMailBox((prevState) => !prevState);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />

      <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>
      <h1> Email counter: {counter}</h1>

      <MailBoxForm addNewData={onAddNewEmailData} />
      <MailBoxForm2 addNewData={onAddNewEmailData} />
      <MailBoxForm3 addNewData={onAddNewEmailData} />

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
    </div>
  );
}

export default MailBoxPages;
