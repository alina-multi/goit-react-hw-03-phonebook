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


 const FormField = ({setNewContact}) => (
    <div className='max-w-sm mx-auto  bg-slate-300 p-4'>
      <h1 className='text-lg text-center pb-2 underline'>Sign Up</h1>
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
        <Form autoComplete='off'  className='flex flex-col items-center'>

          <label htmlFor="name" className='block text-center mb-2' >First Name</label>
          <Field id="name" name="name" type="text" className="form-input px-4 py-3 rounded-full block mb-2"/>
          <ErrorMessage name="name"  component="p" className='text-red-600 text-center'/>

          <label htmlFor="number" className=''>Number</label>
          <Field id="number" name="number" type="tel" className="form-input px-4 py-3 rounded-full block mb-2"  />  
          <ErrorMessage name="number" component="p" className='text-red-600 text-center mb-2'/>

          <button type="submit" className='bg-cyan-300  box-border block w-10 h-4 rounded-full p-2'>Submit</button>

        </Form>
      </Formik>
    </div>
  );

 export default FormField;


//

