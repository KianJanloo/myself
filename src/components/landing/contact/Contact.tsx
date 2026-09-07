import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt } from "react-icons/fa"
import ContactForm from "./ContactForm"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/siteConfig"

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      description: "Connect professionally",
      link: siteConfig.social.linkedin,
      color: "from-blue-500/20 to-blue-600/20",
      hoverColor: "group-hover:from-blue-500/30 group-hover:to-blue-600/30",
      iconColor: "text-blue-400 group-hover:text-blue-300",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      description: "View my code",
      link: siteConfig.social.github,
      color: "from-gray-500/20 to-gray-600/20",
      hoverColor: "group-hover:from-gray-500/30 group-hover:to-gray-600/30",
      iconColor: "text-gray-300 group-hover:text-text-primary",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "Send a message",
      link: siteConfig.social.email,
      color: "from-accent/20 to-accent-secondary/20",
      hoverColor: "group-hover:from-accent/30 group-hover:to-accent-secondary/30",
      iconColor: "text-accent group-hover:text-gold-light",
    },
  ]

  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
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
            className={`group relative flex items-center gap-3 sm:gap-4 w-full sm:w-auto sm:min-w-[220px] px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-br ${social.color} ${social.hoverColor} border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm min-h-11`}
          >
            <div className={`text-2xl ${social.iconColor} transition-colors duration-300`}>{social.icon}</div>
            <div className="text-left">
              <h3 className="font-semibold text-text-primary">{social.title}</h3>
              <p className="text-sm text-text-muted">{social.description}</p>
            </div>
          </motion.a>
        ))}

        {siteConfig.calendlyUrl && (
          <motion.a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex items-center gap-3 sm:gap-4 w-full sm:w-auto sm:min-w-[220px] px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-white/10 hover:border-white/20 transition-all duration-300 min-h-11"
          >
            <FaCalendarAlt className="text-2xl text-purple-400" />
            <div className="text-left">
              <h3 className="font-semibold text-text-primary">Schedule a Call</h3>
              <p className="text-sm text-text-muted">Book a 15-min intro</p>
            </div>
          </motion.a>
        )}
      </div>

      <ContactForm />
    </div>
  )
}

export default Contact
