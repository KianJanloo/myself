import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { translations, type Language, type TranslationKey } from "./translations"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem("portfolio-language") as Language | null
  if (stored && (stored === "en" || stored === "fa")) return stored
  return "en"
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    setLanguage(getInitialLanguage())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr"
    localStorage.setItem("portfolio-language", language)
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"))
  }, [])

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[language][key] as string
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}
