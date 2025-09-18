import { useState } from 'react'
import Skill from './Skill'
import SkillsFilter from './SkillsFilter'
import { skills } from '../../../utils/service/skills/skills'
import { motion, AnimatePresence } from 'framer-motion'

const Skills = () => {
  const [filter, setFilter] = useState('all')

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter)

  return (
    <div>
      <SkillsFilter onFilterChange={setFilter} />
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        layout
      >
        <AnimatePresence mode="wait">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15, delay: index * 0.02 }}
            >
              <Skill {...skill} idx={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Skills
