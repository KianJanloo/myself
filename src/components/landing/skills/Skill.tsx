import React from 'react'
import type { ISkill } from '../../../types/skill-type/skill-type'
import { BlurFade } from '@/components/ui/blur-fade'

const Skill: React.FC<ISkill> = ({ name, rate, idx }) => {
  return (
    <div className='flex flex-col gap-2 group w-full'>
      <div className='flex items-center gap-3'>
        <div 
          className='w-4 h-4 rounded-full shadow-lg group-hover:animate-pulse'
          style={{
            background: `linear-gradient(to right, var(--skill-dot-start), var(--skill-dot-end))`
          }}
        ></div>
        <p 
          className='text-sm font-medium transition-colors duration-300 text-skill-text'
        >{name}</p>
      </div>
      <BlurFade inView delay={idx * 0.1} 
        className='w-full h-2.5 rounded-full overflow-hidden shadow-inner bg-skill-bar-bg'
      >
        <div 
          className='h-full rounded-full transition-all duration-500 ease-out'
          style={{ 
            width: `${rate}%`,
            background: `linear-gradient(to right, var(--skill-dot-start), var(--skill-dot-end))`,
            boxShadow: '0 0 10px var(--skill-bar-glow)'
          }}
        ></div>
      </BlurFade>
    </div>
  )
}

export default Skill
