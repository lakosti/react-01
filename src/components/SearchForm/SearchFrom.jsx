import { Field, Form, Formik } from "formik";

const SearchFrom = ({ onSetSearchQuery }) => {
  const handleSubmit = (values, actions) => {
    onSetSearchQuery(values.query);
    actions.resetForm(); //скидання форми
  };

  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field placeholder="Iphone" type="text" name="query" />
        <button type="submit">Seacrh</button>
      </Form>
    </Formik>
  );
};

export default SearchFrom;
