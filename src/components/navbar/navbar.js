import React from "react";
import { Link, useLocation } from "react-router-dom";

import './navbar.css';

import { useLanguage } from "../../i18n/LanguageContext";

const NavigationBar = () => {
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();

    return (
        <nav className="nav-bar">
            <div className="logo-container">
                <Link className="name-logo" to="/">Francisco Gontijo</Link>
            </div>
            <ul className="nav-bar-link-list">
                {location.pathname !== '/' && <li className="nav-link">
                    <Link className="link" to="/">{t.nav.home}</Link>
                </li>}
                {location.pathname !== '/about' && <li className="nav-link">
                    <Link className="link" to="/about">{t.nav.about}</Link>
                </li>}
                {location.pathname !== '/contact' && <li className="nav-link">
                    <Link className="link" to="/contact">{t.nav.contact}</Link>
                </li>}
                <li className="language-toggle" role="group" aria-label={t.nav.language}>
                    <button
                        className={language === 'pt' ? "active-language" : ""}
                        onClick={() => setLanguage('pt')}
                        aria-pressed={language === 'pt'}
                        lang="pt-BR"
                    >PT</button>
                    <button
                        className={language === 'en' ? "active-language" : ""}
                        onClick={() => setLanguage('en')}
                        aria-pressed={language === 'en'}
                        lang="en"
                    >EN</button>
                </li>
            </ul>
        </nav>
    )
};

export default NavigationBar;
