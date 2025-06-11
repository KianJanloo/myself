import React from 'react'
import type { IContactCard } from '../../../types/contact-card-type/contact-card-type'
import { BlurFade } from '@/components/ui/blur-fade'

const ContactCard: React.FC<IContactCard> = ({ icon, title, value, link }) => {
  return (
    <BlurFade initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <a href={link} className='flex flex-col items-center p-6 rounded-xl shadow-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 group'>
        <span className='text-3xl text-accent mb-3'>{icon}</span>
        <div className='font-semibold text-lg text-white mb-2'>{title}</div>
        <span
          className='text-gray-300 hover:text-white transition-colors duration-200 text-center'
        >
          {value}
        </span>
      </a>
    </BlurFade>
  )
}

export default ContactCard
