import { MdOutlinePersonAdd } from "react-icons/md";
import css from "./MailBoxForm.module.css";
import { useState } from "react";

//!КОНТРОЛЬОВАНА ФОРМА
const MailBoxForm2 = ({ addNewData }) => {
  //* створюємо стейст для відображення інтерактивності у формі (контрольована форма)
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  //*привязуємо дані які ввели в інтуп щоб відображалися у стейт
  const handleChange = (evt) => {
    if (evt.target.name === "userName") {
      setUserName(evt.target.value);
    } else if (evt.target.name === "email") {
      setEmail(evt.target.value);
    }
  };
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    //*витягуємо дані з форми
    const elements = evt.currentTarget.elements;

    const userName = elements.userName.value;
    const email = elements.email.value;

    const formData = {
      userName,
      email,
    };

    //* викликаємо функцію додавання поля
    addNewData(formData);

    evt.currentTarget.reset();
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
          value={userName} //? ЗВЯЗУЄМО ІНПУТ І СТЕЙТ (value)
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
          value={email}
          required
        />
      </label>
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
