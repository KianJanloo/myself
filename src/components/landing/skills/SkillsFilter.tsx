import { useState } from 'react'
import { motion } from 'framer-motion'

interface SkillsFilterProps {
  onFilterChange: (filter: string) => void
}

const SkillsFilter = ({ onFilterChange }: SkillsFilterProps) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'tools', label: 'Tools' },
  ]

  const handleFilter = (filter: string) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <motion.div
      className="flex flex-wrap gap-3 mb-12 justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.key}
          onClick={() => handleFilter(category.key)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeFilter === category.key
              ? 'bg-gradient-to-r from-accent to-accent-secondary text-white shadow-lg'
              : 'bg-white/10 text-text-muted hover:bg-white/20 hover:text-text-primary'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default SkillsFilter
