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
});

//* гарною практикою є винесення це у змінну
const INITIAL_FROM_DATA = {
  userName: "",
  email: "",
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
