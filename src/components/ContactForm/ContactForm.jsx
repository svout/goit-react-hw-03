import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import './ContactForm.css'; 

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Це поле обов\'язкове для заповнення')
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів'),
    number: Yup.string()
      .required('Це поле обов\'язкове для заповнення')
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Ім'я:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="number">Номер:</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" className="error-message" />
          </div>
          <button type="submit" className="submit-btn">Додати контакт</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
