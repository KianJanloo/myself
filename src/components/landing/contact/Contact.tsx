import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion'
const Contact = () => {

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      description: "Connect professionally",
      link: "https://www.linkedin.com/in/kian-janloo/",
      color: "from-blue-500/20 to-blue-600/20",
      hoverColor: "group-hover:from-blue-500/30 group-hover:to-blue-600/30",
      iconColor: "text-blue-400 group-hover:text-blue-300"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      description: "View my code",
      link: "https://github.com/KianJanloo",
      color: "from-gray-500/20 to-gray-600/20",
      hoverColor: "group-hover:from-gray-500/30 group-hover:to-gray-600/30",
      iconColor: "text-gray-300 group-hover:text-white"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "Send a message",
      link: "mailto:KianJanloo10@gmail.com",
      color: "from-accent/20 to-accent-secondary/20",
      hoverColor: "group-hover:from-accent/30 group-hover:to-accent-secondary/30",
      iconColor: "text-accent group-hover:text-gold-light"
    }
  ]

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Social Links - Horizontal Bar */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.title}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gradient-to-br ${social.color} ${social.hoverColor} border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 backdrop-blur-sm`}
          >
            <div className={`text-2xl ${social.iconColor} transition-colors duration-300`}>
              {social.icon}
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
                {social.title}
              </h3>
              <p className="text-sm text-text-muted group-hover:text-text-primary/80 transition-colors duration-300">
                {social.description}
              </p>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-text-muted group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}

export default Contact
