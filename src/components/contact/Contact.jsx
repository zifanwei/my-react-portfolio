import React from 'react';
import '../../style/Contact.css';
import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';

const Contact = () => {
  return (
    <div className="contact-section">
        <div className='contact-form'>
          <ContactForm />
        </div>
        <div className='card-with-shadow'>
          <ContactDetail />
        </div>
    </div>
  );
};

export default Contact;
