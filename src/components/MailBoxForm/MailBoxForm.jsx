//?ЧОМУ САБМІТ ВІШАЄМО НА ФОРМУ:
//* вспливання подій
//* збір даних з інтутів(неконтр форма)
//* сабміт по ентеру

import { MdOutlinePersonAdd } from "react-icons/md";
import css from "./MailBoxForm.module.css";

//!НЕКОНТРОЛЬОВАНА ФОРМА -- дані потрібні тільки під час сабміту
const MailBoxForm = ({ addNewData }) => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    //*витягуємо дані з форми
    // const { userName, email } = evt.currentTarget.elements; //? input
    // const formData = {
    //   userName: userName.value, //? value
    //   email: email.value,
    // };

    //? second variat
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
      <h2 className={css.title}>UNCONTROLL FORM</h2>
      <label className={css.labelForm}>
        <span>Enter your name: </span>
        <input
          className={css.input}
          placeholder="Alex Igorov"
          type="text"
          name="userName"
          required
        />
      </label>
      <label className={css.labelForm}>
        <span>Enter your email: </span>
        <input
          className={css.input}
          placeholder="alex.igorov@gmail.com"
          type="email"
          name="email"
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

export default MailBoxForm;
