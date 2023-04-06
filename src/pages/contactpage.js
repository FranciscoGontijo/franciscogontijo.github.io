import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import "./contactpage.css";

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cvb99jc', 'template_njellqm', form.current, 'TyySgO-tzk-6JjuUI')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                e.target.reset();
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
                <i></i><p>Sydney, NSW, Australia</p>
                <i></i><p>+61 (410)-281-008</p>
                <i></i><p>francisco@gmail.com</p>
                <div className="bar-type-3"></div>
                <div className="social-logos-container">
                    <nav className="hero-nav">
                        <a href="https://www.facebook.com/tatiko.gontijo" rel="noreferrer" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/tatikogontijo/" rel="noreferrer" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/francisco-alexandre-cardoso-melo-gontijo-5a469b239/"
                            rel="noreferrer" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/FranciscoGontijo" rel="noreferrer" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </nav>
                </div>
                <div className="bar-type-4"></div>
            </div>
            <div className="form-container">
                <h2>Get in touch</h2>
                <form  ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" className="name-input" placeholder="Name" name="user_name" required />
                    <input type="email" className="email-input" placeholder="Email" name="user_email" required />
                    <textarea type="text" className="message-input" placeholder="Message" name="message" required />
                    <button type="submit" value="Send" className="form-send-button">SEND MESSAGE</button>
                </form>
            </div>
        </section>
    )
};

export default ContactPage;