import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"

const ResumeDownload = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.a
        href="/Resume.pdf"
        download="Kian_Janloo_Resume.pdf"
        className="bg-gradient-to-r from-accent to-accent-secondary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
        <span className="hidden sm:block font-medium">Resume</span>
      </motion.a>
    </motion.div>
  )
}

export default ResumeDownload
