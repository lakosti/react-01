import { MdOutlinePersonAdd } from "react-icons/md";
import css from "./MailBoxForm.module.css";
// import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"; //! ВАЛІДАЦІЯ

//!СТВОРЕННЯ ФОРМИ ЧЕРЕЗ FORMIK(КОНТРОЛЬОВАНА ФОРМА) + валідація

const MailBoxSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!!")
    .required("User name is required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  preferredColor: Yup.string().oneOf(["red", "green", "blue"]).required("Color is required"),
  subscription: Yup.string()
    .oneOf(["standart", "vip", "premium"])
    .required("Subscription is required"),
});

//* гарною практикою є винесення це у змінну
const INITIAL_FROM_DATA = {
  userName: "",
  email: "",
  preferredColor: "",
  subscription: "",
};

const MailBoxForm3 = ({ addNewData }) => {
  const handleSubmit = (data, formActions) => {
    addNewData(data); //* додаємо дані які введені у форму
    formActions.resetForm(); //* очистка форми
  };
  return (
    <Formik
      validationSchema={MailBoxSchema}
      initialValues={INITIAL_FROM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.title}>FORMIK</h2>
        <label className={css.labelForm}>
          <span>Enter your name: </span>

          <Field className={css.input} placeholder="Alex Igorov" type="text" name="userName" />
          <ErrorMessage className={css.errorMsg} name="userName" component="span" />
        </label>
        <label className={css.labelForm}>
          <span>Enter your email: </span>

          <Field
            className={css.input}
            placeholder="alex.igorov@gmail.com"
            type="email"
            name="email"
          />
          <ErrorMessage className={css.errorMsg} name="email" component="p" />
        </label>
        <div>
          {/* //?ЩОБ ВИБИРАЛАСЬ ОДНА КНОПКА З БАГАТЬОХ ПОТРІБНО ОДИНАКОВИЙ NAME */}
          <label>
            <span>Red</span>
            <Field type="radio" value="red" name="preferredColor" />
          </label>
          <label>
            <span>Green</span>
            <Field type="radio" value="green" name="preferredColor" />
          </label>
          <label>
            <span>Blue</span>
            <Field type="radio" value="blue" name="preferredColor" />
          </label>
          <ErrorMessage className={css.errorMsg} name="preferredColor" component="p" />
        </div>
        <label>
          <span>Select user subscription: </span>
          <Field as="select" name="subscription">
            <option value="standart">standart</option>
            <option value="vip">vip</option>
            <option value="premium">premium</option>
            <ErrorMessage className={css.errorMsg} name="subscription" component="p" />
          </Field>
        </label>
        <button
          className={css.btn}
          type="submit"
          aria-label="Add new mailBox"
          title="Click to save new mailbox"
        >
          <MdOutlinePersonAdd />
        </button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm3;
