import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLanguage, FaLaptopCode, FaPaintBrush, FaDatabase, FaShieldAlt, FaCloud, FaTools } from 'react-icons/fa'

interface SkillsFilterProps {
  onFilterChange: (filter: string) => void
}

const SkillsFilter = ({ onFilterChange }: SkillsFilterProps) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'languages', label: 'Languages', icon: <FaLanguage /> },
    { key: 'frontend', label: 'Frontend', icon: <FaPaintBrush /> },
    { key: 'backend', label: 'Backend', icon: <FaLaptopCode /> },
    { key: 'databases', label: 'Databases', icon: <FaDatabase /> },
    { key: 'auth', label: 'Auth', icon: <FaShieldAlt /> },
    { key: 'devops', label: 'DevOps', icon: <FaCloud /> },
    { key: 'tools', label: 'Tools', icon: <FaTools /> },
  ]

  const handleFilter = (filter: string) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <motion.div
      className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.key}
          onClick={() => handleFilter(category.key)}
          className={`px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
            activeFilter === category.key
              ? 'bg-gradient-to-r from-accent to-accent-secondary text-white shadow-xl shadow-accent/25'
              : 'bg-white/10 text-text-muted hover:bg-white/20 hover:text-text-primary hover:shadow-lg'
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="text-sm sm:text-lg">{category.icon}</span>
          <span>{category.label}</span>
        </motion.button>
      ))}
    </motion.div>
  )
}

export default SkillsFilter
