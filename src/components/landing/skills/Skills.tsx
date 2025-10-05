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
    <div className="w-full">
      <SkillsFilter onFilterChange={setFilter} />
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6'
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.02,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="w-full"
            >
              <Skill {...skill} idx={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Skills count indicator */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm text-text-muted">
          Showing {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''}
          {filter !== 'all' && ` in ${filter}`}
        </p>
      </motion.div>
    </div>
  )
}

export default Skills
