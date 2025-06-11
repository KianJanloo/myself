import Skill from './Skill'
import { skills } from '../../../utils/service/skills/skills'

const Skills = () => {
  return (
    <div className='grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8'>
      {skills.map((skill, index) => (
        <Skill key={index} {...skill} idx={index} />
      ))}
    </div>
  )
}

export default Skills
