import { Field, Form, Formik } from "formik";

const SearchFrom = ({ onSetSearchQuery, searchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values.query);
    // actions.resetForm(); //скидання форми
  };

  return (
    //* підставляємо у форму те що вводимо (якщо там буде нал або андефінед то пустий рядок)
    <Formik initialValues={{ query: searchQuery ?? "" }} onSubmit={handleSubmit}>
      <Form>
        <Field placeholder="Iphone" type="text" name="query" />
        <button type="submit">Seacrh</button>
      </Form>
    </Formik>
  );
};

export default SearchFrom;
