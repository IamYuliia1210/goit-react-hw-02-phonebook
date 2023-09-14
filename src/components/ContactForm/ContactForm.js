import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name cannot contain numbers')
    .required(),
  number: yup
    .string()
    .min(6, 'Too short  phone number')
    .max(12, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
  contacts: yup.array(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const handleSumbit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSumbit}
        validationSchema={schema}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
          <label htmlFor="tel">Number</label>
          <Field
            type="tel"
            name="number"
            placeholder="Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
