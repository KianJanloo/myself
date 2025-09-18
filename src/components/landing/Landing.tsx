import Container from "../container/Container"
import { FlipText } from "../ui/flip-text"
import Contact from "./contact/Contact"
import Experience from "./experience/Experience"
import Projects from "./projects/Projects"
import ResumeBox from "./resume-box/ResumeBox"
import Skills from "./skills/Skills"
import Summary from "./summary/Summary"
import { motion } from "framer-motion"

const Landing = () => {
  return (
    <Container>
      <div className="flex flex-col">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold gradient-text"
              >
                Kian Janloo
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex items-center space-x-8"
              >
                {[
                  { name: "About", href: "#summary" },
                  { name: "Experience", href: "#experiences" },
                  { name: "Projects", href: "#projects" },
                  { name: "Skills", href: "#skills" },
                  { name: "Contact", href: "#contact" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-text-muted hover:text-accent transition-colors duration-300 font-medium text-sm lg:text-base"
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
                className="md:hidden text-text-muted hover:text-accent transition-colors duration-300"
                onClick={() => {
                  // Simple mobile menu toggle - you can enhance this later
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                  }
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
            
            {/* Mobile menu */}
            <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { name: "About", href: "#summary" },
                  { name: "Experience", href: "#experiences" },
                  { name: "Projects", href: "#projects" },
                  { name: "Skills", href: "#skills" },
                  { name: "Contact", href: "#contact" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-text-muted hover:text-accent transition-colors duration-300 font-medium py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20">
          <Summary />
          
          <section id="experiences" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
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
              </motion.div>
              <Experience />
            </div>
          </section>

          <section id="projects" className="py-20 bg-gradient-to-r from-transparent via-secondary/30 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
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
              </motion.div>
              <Projects />
            </div>
          </section>

          <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
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
              </motion.div>
              <Skills />
            </div>
          </section>

          <section id="contact" className="py-20 bg-gradient-to-r from-transparent via-secondary/30 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
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
              </motion.div>
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