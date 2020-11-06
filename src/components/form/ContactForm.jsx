import React from 'react';
import { Formik, Field, Form } from 'formik';
import './contactForm.scss';

const ContactForm = () => (
  <div className='contactsection-wrapper'>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className='form-wrapper'>
          <div className='input-field input-items'>
            <label htmlFor="firstName">Imię</label>
            <Field id="firstName" name="firstName" placeholder="Twoje imię" className="input" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="email@email.com"
              className="input"
            />
          </div>
          <div className='input-field input-items'>
            <div>
              <label htmlFor="lastName">Nazwisko</label>
              <Field id="lastName" name="lastName" placeholder="Twoje nazwisko" className="input" />
            </div>
            <div>
              <label htmlFor="email">Telefon</label>
              <Field
                id="phone"
                name="phone"
                placeholder="+48#########"
                className="input"
              />
            </div>
          </div>
          <div className='input-field'>
          <label htmlFor="email">Wiadomość</label>
          <Field
            id="message"
            name="email"
            as="textarea"
            rows='7'
            placeholder="Wiadomość"
            className="message"
          />
          </div>
          <button type="submit" className='btn-submit '>WYŚLIJ WIADOMOŚĆ</button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default ContactForm;

