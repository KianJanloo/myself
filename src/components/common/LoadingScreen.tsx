import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="text-center perspective-2000">
            {/* 3D rotating ring */}
            <motion.div
              className="relative w-24 h-24 mx-auto mb-8"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
              <div className="absolute inset-0 rounded-full border-2 border-accent border-t-transparent animate-spin" />
              <div className="absolute inset-2 rounded-full border border-accent-secondary/20" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-accent-secondary/20" />
            </motion.div>

            <motion.h2
              className="text-4xl font-bold gradient-text mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Kian Janloo
            </motion.h2>
            <motion.p
              className="text-text-muted text-lg tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Full Stack Developer
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-8 w-48 h-0.5 bg-secondary/50 rounded-full mx-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
