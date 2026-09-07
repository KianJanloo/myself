import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-background flex items-center justify-center z-50"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <h2 className="text-2xl font-bold gradient-text">Kian Janloo</h2>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
