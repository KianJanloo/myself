import React, { useRef, useCallback } from 'react'
import type { IContactCard } from '../../../types/contact-card-type/contact-card-type'
import { motion } from 'framer-motion'

const ContactCard: React.FC<IContactCard> = ({ icon, title, value, link }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group perspective-1000"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className='block h-full'
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
          className='glass rounded-2xl p-8 h-full flex flex-col items-center text-center hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-500 group-hover:border-accent/50 border border-white/10'
        >
          <div className='text-5xl text-accent mb-4 group-hover:text-accent-secondary transition-colors duration-300 group-hover:scale-110'>
            {icon}
          </div>
          <h3 className='font-bold text-xl text-text-primary mb-3 group-hover:gradient-text transition-all duration-300'>
            {title}
          </h3>
          <p className='text-text-muted group-hover:text-text-primary transition-colors duration-300 text-sm leading-relaxed'>
            {value}
          </p>

          <div className="mt-6 w-full">
            <div className="h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default ContactCard
