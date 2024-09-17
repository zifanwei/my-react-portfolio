import React, { useEffect, useState } from 'react';
import '../../style/ContactDetail.css';
import useFetchData from "../hooks/useFetchData";
import Tooltip from '../utils/Tooltip';

const ContactDetail = () => {
    const { data } = useFetchData('/data/contact.json');
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setIsDarkMode(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);
        
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className='contact-detail'>
            <div className='contact-methods'>
                {data && data['contact-info'].map((contact, index) => (
                    <div key={index} className='contact-info'>
                        <img 
                            src={process.env.PUBLIC_URL + (isDarkMode ? contact.darkIcon : contact.icon)} 
                            alt=""
                            className='img-icon'
                        />
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
            </div>
            <div className="social-icons">
                {data && data['social'].map((social, index) => (
                    <div key={index} className='social-icon'>
                        <img 
                            src={process.env.PUBLIC_URL + (isDarkMode ? social.darkIcon : social.icon)} 
                            alt=""
                            className='img-icon'
                        />
                        <a href={social.value} target="_blank" rel="noopener noreferrer">
                            {social.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactDetail;
