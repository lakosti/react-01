/*
!Реакція на монтування компоненти:
  *1. Надсилати мережеві запити, коли компонента відмалювалася.
  *2. Вішати глобальні слухачі події(addEventListener) та setTimeout|setInterval.
  *3. Зчитати, а краще синхронізувати дані з localStorage.

 !Реакція на ДЕмонтування компоненти(clean up function):
  *1. Відхиляються мережеві запити, перед тим, як компонента зникне.
  *2. Прибираються глобальні слухачі події(removeEventListener) та clearTimeout|clearInterval.
 
 !Реакція на оновлення компоненти(синхронізація):
  *1. Надсилаються мережеві запити з актуальними данними.
  *2. Синхронізуються дані з localStorage.
*/

//?СИНТЕТИЧНА ПОДІЯ (evt) - ЩОБ РЕАКТ ПРАЦЮВАВ У ВСІХ БРАУЗЕРАХ ОДНАКОВО(кросбраузерність)

import { useEffect } from "react";

const MailBox = ({ onClose, emails, onLogEmail, onDeleteEmail, emailCounter }) => {
  // const handleClick = (evt) => {
  //   console.log(evt);
  //   console.log("Email has been successfully sent");
  // };

  // const deleteById = (id) => {
  //   console.log(id);
  // };

  useEffect(() => {
    const onMouseMove = () => {
      console.log("mouseMove");
    };
    const onKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousemove", onMouseMove); //!додавання слухача
    console.log("Element has been mounted"); //! МОНТУВАННЯ

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousemove", onMouseMove); //!видалення слухача
      console.log("Element has been UNmounted"); //! ДЕМОНТУВАННЯ
    };
  }, [onClose]); //*слідкує за цими змінами/даними/залежностями (зовнішні дані)

  return (
    <div>
      <h2>MailBox: {emailCounter}</h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>
            {email.email}
            <button onClick={() => onDeleteEmail(email.id)}>&times;</button>
          </li>
        ))}
        {/* <li>
          Mail 1 <button onClick={() => onDeleteEmail(1)}>&times;</button>
        </li>
        <li>
          Mail 2 <button onClick={() => onDeleteEmail(2)}>&times;</button>
        </li>
        <li>
          Mail 3 <button onClick={() => onDeleteEmail(3)}>&times;</button>
        </li> */}
      </ul>
      <button onClick={onLogEmail} type="button">
        Send mail
      </button>
    </div>
  );
};

export default MailBox;
