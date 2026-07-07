import { motion } from "framer-motion"

interface ViewModeToggleProps {
  isRoadmap: boolean
  onToggle: () => void
}

const ViewModeToggle = ({ isRoadmap, onToggle }: ViewModeToggleProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      onClick={onToggle}
      className="relative group flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 hover:border-accent/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
      aria-label={isRoadmap ? "Switch to standard view" : "Switch to 3D preview"}
    >
      <span className="relative z-10 text-xs font-medium text-text-muted group-hover:text-accent transition-colors">
        Roadmap
      </span>
      <div className="relative w-8 h-4 rounded-full bg-secondary/80 border border-white/10 overflow-hidden">
        <motion.div
          className="absolute top-0.5 w-3 h-3 rounded-full bg-gradient-to-br from-accent to-accent-secondary"
          animate={{ x: isRoadmap ? 16 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </motion.button>
  )
}

export default ViewModeToggle
