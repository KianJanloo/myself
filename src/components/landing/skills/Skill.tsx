import React, { useRef, useCallback } from 'react'
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
    languages: 'from-amber-500 to-yellow-600',
    frontend: 'from-amber-600 to-orange-500',
    backend: 'from-yellow-500 to-amber-600',
  }
  return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'
}

const Skill: React.FC<ISkill> = ({ name, idx, category = 'frontend' }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }, [])

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
      className='group w-full perspective-1000'
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
      >
        <div className='relative rounded-2xl overflow-hidden'>
          {/* Gradient border on hover */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getCategoryColor(category)} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

          <div className='relative bg-card-bg/80 backdrop-blur-sm rounded-2xl p-5 border border-card-border group-hover:border-accent/30 transition-all duration-500'>
            <div className='flex items-center gap-3'>
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center text-xl shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300'
                style={{
                  background: `linear-gradient(135deg, var(--skill-dot-start), var(--skill-dot-end))`
                }}
              >
                {getCategoryIcon(category)}
              </div>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-bold text-text-primary group-hover:text-accent transition-colors duration-300 truncate'>
                  {name}
                </p>
                <p className='text-[10px] text-text-muted capitalize'>
                  {category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skill
