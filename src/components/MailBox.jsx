import { useEffect } from "react";
import css from "./MailBox.module.css";
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

const MailBox = ({ onClose, emails, onLogEmail, onDeleteEmail, emailCounter }) => {
  // const handleClick = (evt) => {
  //   console.log(evt);
  //   console.log("Email has been successfully sent");
  // };

  // const deleteById = (id) => {
  //   console.log(id);
  // };

  useEffect(() => {
    //*ПОДІЯ МИШІ
    // const onMouseMove = () => {
    //   console.log("mouseMove");
    // };
    const onKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    // window.addEventListener("mousemove", onMouseMove); //!додавання слухача
    console.log("Element has been mounted"); //! МОНТУВАННЯ

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      // window.removeEventListener("mousemove", onMouseMove); //!видалення слухача
      console.log("Element has been UNmounted"); //! ДЕМОНТУВАННЯ
    };
  }, [onClose]); //*слідкує за цими змінами/даними/залежностями (зовнішні дані)
  return (
    <div>
      <h2>MailBox: {emailCounter}</h2>
      <ul>
        {emails.map((email) => {
          //*якщо колір не нал тоді відображаємо цей колір, інакше відображаємо сірий
          const userPreferredColor = email.preferredColor !== null ? email.preferredColor : "grey";

          return (
            <li key={email.id}>
              <p>
                User email: <b>{email.email}</b>
              </p>
              <p>
                User name:{" "}
                <span
                  style={{
                    backgroundColor: userPreferredColor,
                  }}
                  className={css.itemColor}
                ></span>{" "}
                <b>{email.userName}</b>
              </p>
              <p>
                Type of subscription: {'"'}
                {email.subscription}
                {'"'}
              </p>
              <button onClick={() => onDeleteEmail(email.id)}>&times;</button>
            </li>
          );
        })}
      </ul>
      <button onClick={onLogEmail} type="button">
        Send mail
      </button>
    </div>
  );
};

export default MailBox;
