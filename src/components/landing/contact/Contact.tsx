import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="space-y-16">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
        <ContactCard 
          icon={<FaLinkedin />} 
          title="LinkedIn" 
          value='Connect with me on LinkedIn for professional networking and collaboration opportunities.' 
          link="https://www.linkedin.com/in/kian-janloo-6b7473344/" 
        />
        <ContactCard 
          icon={<FaGithub />} 
          title="GitHub" 
          value='Explore my repositories and contributions to open source projects.' 
          link="https://github.com/KianJanloo" 
        />
        <ContactCard 
          icon={<FaEnvelope />} 
          title="Email" 
          value='Get in touch directly for project inquiries and collaboration opportunities.' 
          link="mailto:KianJanloo10@gmail.com" 
        />
      </div>

      <ContactForm />
    </div>
  )
}

export default Contact

