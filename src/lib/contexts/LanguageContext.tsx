"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T extends Record<string, any>>(
    obj: T,
    path: string
  ) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage === "en" || savedLanguage === "tr") {
      setLanguageState(savedLanguage);
      if (typeof document !== "undefined") {
        document.documentElement.lang = savedLanguage;
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Update html lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    // Only save to localStorage after mount
    if (mounted) {
      localStorage.setItem("language", lang);
    }
  };

  const t = <T extends Record<string, any>>(
    obj: T,
    path: string
  ): any => {
    const translation = getNestedValue(translations[language], path);
    if (translation !== undefined) return translation;
    const fallback = getNestedValue(obj, path);
    if (fallback !== undefined) return fallback;
    return path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

