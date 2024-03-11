import { MdOutlinePersonAdd } from "react-icons/md";
import css from "./MailBoxForm.module.css";
import { useState } from "react";

//!КОНТРОЛЬОВАНА ФОРМА
const MailBoxForm2 = ({ addNewData }) => {
  //* створюємо стейст для відображення інтерактивності у формі (контрольована форма)
  //   const [userName, setUserName] = useState("");
  //   const [email, setEmail] = useState("");

  //? ЗБЕРІГАЄМО СТЕЙТ В ОБ'ЄКТІ (ВИКОРИСТ КОЛИ БАГАТО ПОЛІВ)
  const [values, setValues] = useState({
    userName: "",
    email: "",
  });

  //*привязуємо дані які ввели в інтуп щоб відображалися у стейт
  const handleChange = (evt) => {
    //     if (evt.target.name === "userName") {
    //   setUserName(evt.target.value);
    //     } else if (evt.target.name === "email") {
    //      setEmail(evt.target.value);
    //     }
    //? пишемо іншу логіку для стейта в об'єкті
    const key = evt.target.name;
    const value = evt.target.value;

    setValues({
      ...values, // * копіювання попереднього стейту
      [key]: value,
    });
  };
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    //* тепер отримуємо дані зі стейту
    const formData = {
      userName: values.userName,
      email: values.email,
    };

    //* викликаємо функцію додавання поля
    addNewData(formData);

    //* тепер очищаємо форму через стейти (бо через reset працює лише для DOM)
    // setValues.email("");
    // setValues.userName("");

    //? для стейту в об'єкту використовуємо пустий об'єкт
    setValues({
      userName: "",
      email: "",
    });
  };
  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <h2 className={css.title}>CONTROLL FORM</h2>
      <label className={css.labelForm}>
        <span>Enter your name: </span>
        <input
          onChange={handleChange} //? ВІШАЄМО ОБРОБНИК НА ІНПУТ
          className={css.input}
          placeholder="Alex Igorov"
          type="text"
          name="userName"
          value={values.userName} //? ЗВЯЗУЄМО ІНПУТ І СТЕЙТ (value)
          required
        />
      </label>
      <label className={css.labelForm}>
        <span>Enter your email: </span>
        <input
          onChange={handleChange} //? ВІШАЄМО ОБРОБНИК НА ІНПУТ
          className={css.input}
          placeholder="alex.igorov@gmail.com"
          type="email"
          name="email"
          value={values.email}
          required
        />
      </label>
      {/* // * ДОДАЄМО ІНТЕРАКТИВНІСТЬ (ПРОМОКОД)  */}
      {values.userName === "slava2024" && (
        <p> Congratulations! You`re winner! Your promo: winner_4587</p>
      )}
      <button
        className={css.btn}
        type="submit"
        aria-label="Add new mailBox"
        title="Click to save new mailbox"
      >
        <MdOutlinePersonAdd />
      </button>
    </form>
  );
};

export default MailBoxForm2;
