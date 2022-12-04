import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const  ErrorNameMessage = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
const ErrorNumberMessage = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
const Regex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/

const schema = Yup.object().shape({
  name: Yup.string()
  .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, ErrorNameMessage)
  .required(),
  number: Yup.string()
.matches(Regex, ErrorNumberMessage)
  .required()
});


 const Basic = ({setNewContact}) => (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={ (values, {resetForm}) => {
      setNewContact({id: nanoid(), ...values});
    
      resetForm()
        }}

        validationSchema={schema}
     
      >
        <Form autoComplete='off'>
          <label htmlFor="name">First Name</label>
          <Field id="name" name="name" />
          <ErrorMessage name="name"  component="div"/>
          <label htmlFor="number">Number</label>
          <Field id="number" name="number" type="tel"  />   
          <ErrorMessage name="number" component="div"/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );

 export default Basic;


//

