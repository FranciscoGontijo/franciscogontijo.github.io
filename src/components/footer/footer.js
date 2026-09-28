import React from "react";

import "./footer.css";

import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <section className="footer-container">
            <span>{t.footer}</span>
        </section>
    )
};

export default Footer;
