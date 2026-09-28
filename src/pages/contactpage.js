import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import "./contactpage.css";

import { useLanguage } from "../i18n/LanguageContext";

//import icons from react icons
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const ContactPage = () => {
    const { t } = useLanguage();
    const [display, setDisplay] = useState('form');
    const [status, setStatus] = useState('idle');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm('service_cvb99jc', 'template_njellqm', form.current, 'TyySgO-tzk-6JjuUI')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setStatus('idle');
                setDisplay('message');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section className="contact-page">
            <div className="contact-info-container">
                <div className="contact-title-container">
                    <h3>{t.contact.title}</h3>
                    <div className="bar-type-2"></div>
                </div>
                <p><FaMapMarkerAlt className="contact-icon" />{t.contact.location}</p>
                <p><FaPhoneAlt className="contact-icon" /><a href="tel:+5537991397356">+55 (37) 99139-7356</a></p>
                <p><FaEnvelope className="contact-icon" /><a href="mailto:franciscoacmg@gmail.com">franciscoacmg@gmail.com</a></p>
                <div className="bar-type-3"></div>
                <div className="social-logos-container">
                    <nav className="social-nav">
                        <a href="https://www.linkedin.com/in/franciscogontijo/"
                            rel="noreferrer" target="_blank" aria-label="LinkedIn">
                            <FaLinkedinIn className="social-icon" />
                        </a>
                        <a href="https://github.com/FranciscoGontijo" rel="noreferrer" target="_blank" aria-label="GitHub">
                            <FaGithub className="social-icon" />
                        </a>
                    </nav>
                </div>
                <div className="bar-type-4"></div>
            </div>
            {display === 'form' && <div className="form-container">
                <h2>{t.contact.formTitle}</h2>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" className="name-input" placeholder={t.contact.name} aria-label={t.contact.name} name="user_name" required />
                    <input type="email" className="email-input" placeholder={t.contact.email} aria-label={t.contact.email} name="user_email" required />
                    <textarea className="message-input" placeholder={t.contact.message} aria-label={t.contact.message} name="message" required />
                    <button type="submit" value="Send" className="form-send-button" disabled={status === 'sending'}>
                        {status === 'sending' ? t.contact.sending : t.contact.send}
                    </button>
                    {status === 'error' && <p className="form-error" role="alert">{t.contact.error}</p>}
                </form>
            </div>}
            {display === 'message' && <div className="success-message-container">
                <h1>{t.contact.successTitle}</h1>
                <p>{t.contact.successText}</p>
                <button onClick={() => setDisplay('form')}>{t.contact.back}</button>
            </div>}
        </section>
    )
};

export default ContactPage;
