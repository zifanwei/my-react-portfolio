import React, { useState } from 'react';
import '../../style/ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [buttonText, setButtonText] = useState('Send');

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        setButtonText('Sending...');

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setButtonText('Message Sent!');
                    setTimeout(() => {
                        setButtonText('Send');
                        setIsSubmitting(false);
                    }, 2000);
                },
                (error) => {
                    setButtonText('Error! Try Again');
                    setTimeout(() => {
                        setButtonText('Send');
                        setIsSubmitting(false);
                    }, 2000);
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
                        {buttonText}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
