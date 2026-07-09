import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaEye } from "react-icons/fa"
import { useLanguage } from "@/i18n/LanguageContext"

const VisitorCounter = () => {
  const [count, setCount] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const key = "portfolio-visits"
    const current = parseInt(localStorage.getItem(key) || "0", 10)
    const next = current + 1
    localStorage.setItem(key, next.toString())
    setCount(next)
  }, [])

  if (count === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs text-text-muted"
    >
      <FaEye className="w-3 h-3 text-accent" />
      <span>
        {t("footer.visitor")} #{count.toLocaleString()}
      </span>
    </motion.div>
  )
}

export default VisitorCounter
