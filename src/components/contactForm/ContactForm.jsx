import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as yup from "yup";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    phone: "",
  };

  const contactShema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: yup
      .string()
      .min(7, "Too short")
      .max(13, "Too long")
      .required("Required"),
  });

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.phone,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactShema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={nameFieldId}
        ></Field>
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field
          className={css.field}
          type="phone"
          name="phone"
          id={phoneFieldId}
        ></Field>
        <ErrorMessage className={css.error} name="phone" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
