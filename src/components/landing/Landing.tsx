import { useState, useMemo, useCallback, useEffect } from "react"
import Container from "../container/Container"
import { FlipText } from "../ui/flip-text"
import Contact from "./contact/Contact"
import Experience from "./experience/Experience"
import Projects from "./projects/Projects"
import ResumeBox from "./resume-box/ResumeBox"
import Skills from "./skills/Skills"
import Summary from "./summary/Summary"
import { motion, AnimatePresence } from "framer-motion"

const NAV_ITEMS = [
  { name: "About", href: "#summary" },
  { name: "Experience", href: "#experiences" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
] as const

const Landing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    const handleHashChange = () => {
      setIsMobileMenuOpen(false)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('nav')) {
        closeMobileMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen, closeMobileMenu])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        closeMobileMenu()
      }
    }
  }, [closeMobileMenu])

  const navItemsMemo = useMemo(() => NAV_ITEMS, [])

  return (
    <Container>
      <div className="flex flex-col">
        {/* Navigation */}
        <nav 
          className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-white/10"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.a
                href="#summary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Go to top"
              >
                Kian Janloo
              </motion.a>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex items-center space-x-8"
                role="menubar"
              >
                {navItemsMemo.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className="text-text-muted hover:text-accent transition-colors duration-300 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-accent/50 rounded px-2 py-1"
                    role="menuitem"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
              
              {/* Mobile menu button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:hidden text-text-muted hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded p-2"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
            
            {/* Mobile menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 pb-4 border-t border-white/10 overflow-hidden"
                  role="menu"
                  aria-label="Mobile navigation menu"
                >
                  <div className="flex flex-col space-y-4 pt-4">
                    {navItemsMemo.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={handleNavClick}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-text-muted hover:text-accent transition-colors duration-300 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded px-2"
                        role="menuitem"
                        aria-label={`Navigate to ${item.name} section`}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20">
          <Summary />
          
          <section id="experiences" className="py-20" aria-label="Work Experience">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <FlipText className="font-bold text-5xl tracking-tight gradient-text mb-4">
                  Experience
                </FlipText>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                  My professional journey and the companies I've had the privilege to work with
                </p>
              </motion.header>
              <Experience />
            </div>
          </section>

          <section id="projects" className="py-20 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" aria-label="Projects Portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <FlipText className="font-bold text-5xl tracking-tight gradient-text mb-4">
                  Projects
                </FlipText>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                  A showcase of my recent work and personal projects
                </p>
              </motion.header>
              <Projects />
            </div>
          </section>

          <section id="skills" className="py-20" aria-label="Technical Skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <FlipText className="font-bold text-5xl tracking-tight gradient-text mb-4">
                  Skills
                </FlipText>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                  Technologies and tools I work with to bring ideas to life
                </p>
              </motion.header>
              <Skills />
            </div>
          </section>

          <section id="contact" className="py-20 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" aria-label="Contact Information">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <FlipText className="font-bold text-5xl tracking-tight gradient-text mb-4">
                  Contact
                </FlipText>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                  Let's connect and discuss how we can work together
                </p>
              </motion.header>
              <Contact />
            </div>
          </section>

          <ResumeBox />
        </div>
      </div>
    </Container>
  )
}

export default Landing