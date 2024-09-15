import React, { useState } from 'react';
import '../../style/ContactForm.css';
import emailjs from '@emailjs/browser';
import * as EmailConfig from '../constants/EmailConfig';

const ContactForm = () => {


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
            .sendForm(
                EmailConfig.REACT_APP_SERVICE_ID,
                EmailConfig.REACT_APP_TEMPLATE_ID,
                e.target,
                EmailConfig.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                }
            );

        // Clears the form after sending the email
        e.target.reset();
    };
    return (
        <div className="contact-form-container">
            <form className='contact-form' onSubmit={sendEmail}>
                <div className='contact-form-info'>
                    <div className="form-group">
                        <label htmlFor="from_name">Name</label>
                        <input type="text" id="from_name" name="from_name" className="from_name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="from_email">Email</label>
                        <input type="email" id="from_email" name="from_email" className='from_email' required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className='message' required />
                </div>
                <div className="form-actions">
                    <button type="submit" disabled={isSubmitting} className="submit-button">
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                    {stateMessage && <p className={`form-message ${stateMessage.includes('Sent') ? 'success' : 'error'}`}>{stateMessage}</p>}
                </div>
            </form>
        </div>
    );
};
export default ContactForm;
