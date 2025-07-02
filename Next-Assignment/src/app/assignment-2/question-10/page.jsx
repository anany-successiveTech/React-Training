"use client";

import React, { useContext } from "react";
import { LanguageProvider, LanguageContext } from "@/context/LanguageProvider";
import "@/app/styles/lang.css";

const translations = {
  en: {
    title: "Enter Something",
    paragraph:
      "Develop a language switcher application using the useContext hook. Use the buttons below to switch languages.",
  },
  es: {
    title: "Ingresa algo",
    paragraph:
      "Desarrolla una aplicación de cambio de idioma usando el hook useContext. Usa los botones abajo para cambiar el idioma.",
  },
};

const PageContent = () => {
  const { language, switchLanguage } = useContext(LanguageContext);
  const text = translations[language];
  console.log(text);

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem 2rem 6rem 2rem" }}>
        10. Develop a language switcher application using the useContext hook.
        Create a context to manage the current language (e.g., English or
        Spanish). Provide buttons to switch between languages. Use the
        useContext hook to access the current language value. Display different
        language versions of the application's content.
      </p>
      <p className="text-center margin-2rem">{text.paragraph}</p>

      <div className="button-group">
        <button
          onClick={() => switchLanguage("en")}
          disabled={language === "en"}
        >
          English
        </button>
        <button
          onClick={() => switchLanguage("es")}
          disabled={language === "es"}
        >
          Español
        </button>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
};

export default Page;
