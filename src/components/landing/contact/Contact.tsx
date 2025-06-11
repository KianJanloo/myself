import { FaGithub, FaLinkedin, FaMapMarker } from 'react-icons/fa'
import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-4'>
      <ContactCard icon={<FaLinkedin />} title="Linkedin" value='Kian Janloo' link="https://www.linkedin.com/in/kian-janloo-6b7473344/" />
      <ContactCard icon={<FaGithub />} title="Github" value='KianJanloo' link="https://github.com/KianJanloo" />
      <ContactCard icon={<FaMapMarker />} title="Email" value='KianJanloo10@gmail.com' link="mailto:KianJanloo10@gmail.com" />
    </div>
  )
}

export default Contact
