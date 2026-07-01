import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import { useCallback, useRef } from "react"

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()
  const isAnimating = useRef(false)

  const handleToggle = useCallback(() => {
    if (isAnimating.current) return
    isAnimating.current = true

    document.documentElement.classList.add("transitioning")
    toggleTheme()

    setTimeout(() => {
      document.documentElement.classList.remove("transitioning")
      isAnimating.current = false
    }, 500)
  }, [toggleTheme])

  return (
    <button
      onClick={handleToggle}
      className="relative w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-accent/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sun className="w-5 h-5 text-accent" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Moon className="w-5 h-5 text-accent" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default ThemeSwitcher
