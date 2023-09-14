import * as yup from 'yup';
import { Formik } from 'formik';
import { User, Label, StyledField, Button, ErrMsg } from './ContactForm.styled';

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

export const ContactForm = ({ handleSubmit }) => {
  const handleSumbit = (values, { resetForm }) => {
    handleSubmit({ ...values });
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSumbit}
        validationSchema={schema}
      >
        <User>
          <Label htmlFor="name">Name</Label>
          <StyledField
            type="text"
            name="name"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrMsg name="name" component="div" />
          <Label htmlFor="tel">Number</Label>
          <StyledField
            type="tel"
            name="number"
            placeholder="Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrMsg name="number" component="div" />
          <Button type="submit">Add contact</Button>
        </User>
      </Formik>
    </div>
  );
};
