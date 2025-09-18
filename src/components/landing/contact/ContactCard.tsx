import React from 'react'
import type { IContactCard } from '../../../types/contact-card-type/contact-card-type'
import { motion } from 'framer-motion'

const ContactCard: React.FC<IContactCard> = ({ icon, title, value, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <a 
        href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className='block h-full'
      >
        <div className='glass rounded-2xl p-8 h-full flex flex-col items-center text-center hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 group-hover:scale-105 group-hover:border-accent/50 border border-white/10'>
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
