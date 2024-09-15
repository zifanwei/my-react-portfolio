import React from 'react';
import '../../style/Contact.css';
import useFetchData from "../hooks/useFetchData";
import Tooltip from '../utils/Tooltip';
import ContactForm from './ContactForm';

const Contact = () => {
  const { data } = useFetchData('/data/contact.json');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="contact-section">
        <div className='contact-left'>
          <div className='contact-methods'>
            <div className='profile-title'>
              <h1>Get in touch <span className="arrow">➔</span></h1>
            </div>
            {data && data['contact-info'].map((contact, index) => (
              <div key={index} className='contact-info'>
                <div className='info-title'>{contact.name}</div>
                <div className="info-wrapper">
                  <Tooltip tip="Click to copy" copyTip="Copied to clipboard!">
                    <button
                      className='copy-btn'
                      onClick={() => copyToClipboard(contact.value)}>
                      {contact.value}
                    </button>
                  </Tooltip>
                </div>
              </div>
            ))}
            <div className="social-icons">
              {data && data['social'].map((social, index) => (
                <div key={index} className='social-icon'>
                  {social.icon}
                  <a href={social.value} target="_blank" rel="noopener noreferrer">
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <ContactForm />
        </div>
    </div>
  );
};

export default Contact;
