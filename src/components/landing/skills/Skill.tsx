import React from 'react'
import type { ISkill } from '../../../types/skill-type/skill-type'
import { motion } from 'framer-motion'
import { FaLanguage, FaLaptopCode, FaPaintBrush } from 'react-icons/fa'

const getCategoryIcon = (category: string) => {
  const icons = {
    languages: <FaLanguage />,
    frontend: <FaPaintBrush />,
    backend: <FaLaptopCode />,
  }
  return icons[category as keyof typeof icons] || '💡'
}

const getCategoryColor = (category: string) => {
  const colors = {
    languages: 'from-purple-500 to-pink-600',
    frontend: 'from-blue-500 to-purple-600',
    backend: 'from-green-500 to-teal-600',
  }
  return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'
}

const Skill: React.FC<ISkill> = ({ name, idx, category = 'frontend' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: idx * 0.03,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      className='group w-full'
    >
      <motion.div 
        className='glass rounded-2xl p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1 relative overflow-hidden'
        whileHover={{ 
          boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)'
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
        
        <div className='flex items-center gap-4'>
          <motion.div 
            className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300'
            style={{
              background: `linear-gradient(135deg, var(--skill-dot-start), var(--skill-dot-end))`
            }}
            whileHover={{ rotate: 5 }}
          >
            {getCategoryIcon(category)}
          </motion.div>
          <div className='flex-1'>
            <p className='text-lg font-bold text-text-primary group-hover:gradient-text transition-all duration-300'>
              {name}
            </p>
            <p className='text-xs text-text-muted capitalize group-hover:text-text-secondary transition-colors duration-300'>
              {category}
            </p>
          </div>
        </div>

        <motion.div 
          className='absolute top-2 right-2 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300'
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Skill
