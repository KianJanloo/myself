import React from 'react'
import type { ISkill } from '../../../types/skill-type/skill-type'
import { BlurFade } from '@/components/ui/blur-fade'
import { motion } from 'framer-motion'

const Skill: React.FC<ISkill> = ({ name, rate, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: idx * 0.02 }}
      viewport={{ once: true }}
      className='group w-full'
    >
      <div className='glass rounded-2xl p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group-hover:scale-105'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <div 
              className='w-3 h-3 rounded-full shadow-lg group-hover:animate-pulse'
              style={{
                background: `linear-gradient(135deg, var(--skill-dot-start), var(--skill-dot-end))`
              }}
            ></div>
            <p className='text-lg font-semibold text-text-primary group-hover:gradient-text transition-all duration-300'>
              {name}
            </p>
          </div>
          <span className='text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full'>
            {rate}%
          </span>
        </div>
        
        <BlurFade delay={idx * 0.1} 
          className='w-full h-3 rounded-full overflow-hidden shadow-inner bg-skill-bar-bg relative'
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${rate}%` }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
            className='h-full rounded-full relative'
            style={{ 
              background: `linear-gradient(135deg, var(--skill-dot-start), var(--skill-dot-end))`,
              boxShadow: '0 0 20px var(--skill-bar-glow)'
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse'></div>
          </motion.div>
        </BlurFade>
        
        <div className='mt-3 flex justify-between text-xs text-text-muted'>
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Skill
