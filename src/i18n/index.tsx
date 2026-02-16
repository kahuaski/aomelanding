"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import es from "./locales/es";
import en from "./locales/en";
import fr from "./locales/fr";
import hi from "./locales/hi";
import ja from "./locales/ja";
import zh from "./locales/zh";

export type Locale = "es" | "en" | "fr" | "hi" | "ja" | "zh";

type Translations = typeof es;

const translations: Record<Locale, Translations> = { es, en, fr, hi, ja, zh };

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("es");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const toggleLocale = useCallback(() => {
    const order: Locale[] = ["es", "en", "fr", "hi", "ja", "zh"];
    const currentIndex = order.indexOf(locale);
    const next = order[(currentIndex + 1) % order.length];
    setLocale(next);
  }, [locale, setLocale]);

  const t = useMemo(() => translations[locale], [locale]);

  const value = useMemo(
    () => ({ locale, t, setLocale, toggleLocale }),
    [locale, t, setLocale, toggleLocale]
  );

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
};
