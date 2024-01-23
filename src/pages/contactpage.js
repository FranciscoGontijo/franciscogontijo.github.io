import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import "./contactpage.css";

//import icons from react icons
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const ContactPage = () => {
    const [display, setDisplay] = useState('form');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cvb99jc', 'template_njellqm', form.current, 'TyySgO-tzk-6JjuUI')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setDisplay('message')

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact-page">
            <div className="contact-info-container">
                <div className="contact-title-container">
                    <h3>Contact</h3>
                    <div className="bar-type-2"></div>
                </div>
                <i></i><p>Belo Horizonte, MG, Brazil</p>
                <i></i><p>+55 (37) 99139-7356</p>
                <i></i><p>franciscoacmg@gmail.com</p>
                <div className="bar-type-3"></div>
                <div className="social-logos-container">
                    <nav className="social-nav">
                        <a href="https://www.linkedin.com/in/francisco-gontijo-5a469b239/"
                            rel="noreferrer" target="_blank">
                            <FaLinkedinIn className="social-icon" />
                        </a>
                        <a href="https://github.com/FranciscoGontijo" rel="noreferrer" target="_blank">
                            <FaGithub className="social-icon" />
                        </a>
                    </nav>
                </div>
                <div className="bar-type-4"></div>
            </div>
            {display === 'form' && <div className="form-container">
                <h2>Get in touch</h2>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" className="name-input" placeholder="Name" name="user_name" required />
                    <input type="email" className="email-input" placeholder="Email" name="user_email" required />
                    <textarea type="text" className="message-input" placeholder="Message" name="message" required />
                    <button type="submit" value="Send" className="form-send-button">SEND MESSAGE</button>
                </form>
            </div>}
            {display === 'message' && <div className="success-message-container">
                <h1>Message sent successfully</h1>
                <p>Thank you for getting in touch, as soon as possible I will respond to your message. Cheers</p>
                <button onClick={() => setDisplay('form')}>Back</button>
            </div>}
        </section>
    )
};

export default ContactPage;