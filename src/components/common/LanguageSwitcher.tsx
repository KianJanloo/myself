import { motion } from "framer-motion"
import { useLanguage } from "@/i18n/LanguageContext"

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-accent/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 text-xs font-bold"
      aria-label={language === "en" ? "Switch to Farsi" : "Switch to English"}
    >
      <motion.span
        key={language}
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-accent"
      >
        {language === "en" ? "FA" : "EN"}
      </motion.span>
    </button>
  )
}

export default LanguageSwitcher
