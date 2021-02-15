import React, { useState } from 'react';
import { Axios, db } from '../../firebase/firebaseConfig';
import './contactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({})
  const [messageSent, setMessageSent] = useState(false)

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = e => {
    e.preventDefault()
    sendEmail();
    setFormData({
      name: '',
      surname: '',
      phone: '',
      email: '',
      message: '',
    });
    setMessageSent(!messageSent);
  };

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-arado-a781e.cloudfunctions.net/submit',
      formData
    )
    .then(res => {
      db.collection('emails').add({
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        message: formData.message,
        phone: formData.phone,
        time: new Date(),
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
  <div className='contactsection-wrapper'>
    <form onSubmit={handleSubmit}>
        <div className='form-wrapper'>
          <div className='input-field input-items'>
            <label htmlFor="name">Imię</label>
            <input 
              type='text' 
              id="name" 
              name="name" 
              placeholder="Twoje imię" 
              className="input" 
              onChange={updateInput}
              value={formData.name || ''}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@email.com"
              className="input"
              onChange={updateInput}
              value={formData.email || ''}
            />
          </div>
          <div className='input-field input-items'>
            <div>
              <label htmlFor="surname">Nazwisko</label>
              <input 
                type= 'text'
                id="surname" 
                name="surname" 
                placeholder="Twoje nazwisko" 
                className="input"
                onChange={updateInput}
                value={formData.surname || ''} 
              />
            </div>
            <div>
              <label htmlFor="phone">Telefon</label>
              <input
                type='text'
                id="phone"
                name="phone"
                placeholder="+48#########"
                className="input"
                onChange={updateInput}
                value={formData.phone || ''} 
              />
            </div>
          </div>
          <div className='input-field'>
          <label htmlFor="message">Wiadomość</label>
          <textarea
            type='text'
            id="message"
            name="message"
            rows='7'
            placeholder="Wiadomość"
            className="message"
            onChange={updateInput}
            value={formData.message || ''} 
          />
          </div>
          <button type="submit" className='btn-submit'>WYŚLIJ WIADOMOŚĆ</button>
        </div>
    </form>
  </div>
  )};

export default ContactForm;

