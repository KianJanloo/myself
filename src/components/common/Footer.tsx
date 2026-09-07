import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from "react-icons/fa"
import { siteConfig } from "@/config/siteConfig"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, href: siteConfig.social.github, color: "hover:text-accent" },
    { name: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" />, href: siteConfig.social.linkedin, color: "hover:text-blue-400" },
    { name: "Email", icon: <FaEnvelope className="w-5 h-5" />, href: siteConfig.social.email, color: "hover:text-red-400" },
  ]

  return (
    <footer className="bg-gradient-to-r from-secondary/50 to-background/50 border-t border-white/10 mt-8 sm:mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">{siteConfig.name}</h3>
            <p className="text-text-muted leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies and clean code.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-text-muted transition-colors duration-300 ${link.color} p-2.5 min-w-11 min-h-11 flex items-center justify-center rounded-lg`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">Quick Links</h4>
            <div className="flex flex-wrap gap-3">
              {siteConfig.navItems.map((link) => (
                <a key={link.href} href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-text-muted break-all text-sm sm:text-base">
                <FaEnvelope className="inline w-4 h-4 mr-2" />
                {siteConfig.email}
              </p>
              <a
                href={`${siteConfig.social.github}/myself`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-gold-light transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                View source on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span>&copy; {currentYear} {siteConfig.name}. Made with</span>
            <FaHeart className="w-4 h-4 text-red-500" />
            <span>and</span>
            <FaCode className="w-4 h-4 text-accent" />
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-muted">
            <span>Built with React & TypeScript</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
