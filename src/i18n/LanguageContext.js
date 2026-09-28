import React, { createContext, useContext, useEffect, useState } from "react";

import content from "./content";

const STORAGE_KEY = "idioma";

const LanguageContext = createContext(null);

// Primeiro vale a escolha salva; sem ela, o idioma do navegador.
const initialLanguage = () => {
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "pt" || saved === "en") {
            return saved;
        }
    } catch (error) {
        // Sem acesso ao localStorage (janela anônima, por exemplo): segue pelo navegador.
    }
    const browserLanguage = (window.navigator.language || "").toLowerCase();
    return browserLanguage.startsWith("pt") ? "pt" : "en";
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(initialLanguage);

    useEffect(() => {
        document.documentElement.lang = content[language].htmlLang;
        document.title = content[language].pageTitle;
        try {
            window.localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {
            // A escolha só não fica salva para a próxima visita.
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: content[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
