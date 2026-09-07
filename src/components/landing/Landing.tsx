import { useState, useCallback, useEffect, lazy, Suspense } from "react"
import Container from "../container/Container"
import Contact from "./contact/Contact"
import Experience from "./experience/Experience"
import Projects from "./projects/Projects"
import Skills from "./skills/Skills"
import ResumeBox from "./resume-box/ResumeBox"
import Summary from "./summary/Summary"
import ThemeSwitcher from "../common/ThemeSwitcher"
import ViewModeToggle from "../common/ViewModeToggle"
import { siteConfig } from "@/config/siteConfig"
import { useActiveSection } from "@/hooks/useActiveSection"
import { PageSectionHeader } from "@/components/ui/PageSectionHeader"

const Preview3D = lazy(() => import("./preview3d/Preview3D"))

const Preview3DFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
)

const sectionClass = "section-block scroll-mt-20 py-8 sm:py-16 md:py-20"
const sectionInnerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

const Landing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [is3DMode, setIs3DMode] = useState(false)
  const activeSection = useActiveSection()

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleHashChange = () => setIsMobileMenuOpen(false)
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  useEffect(() => {
    const handleToggle3D = () => setIs3DMode((p) => !p)
    window.addEventListener("toggle-3d-mode", handleToggle3D)
    return () => window.removeEventListener("toggle-3d-mode", handleToggle3D)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest("nav")) closeMobileMenu()
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu()
    }

    document.addEventListener("click", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isMobileMenuOpen, closeMobileMenu])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href")
      if (href?.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
        closeMobileMenu()
      }
    },
    [closeMobileMenu]
  )

  const navLinkClass = (id: string) =>
    `transition-colors duration-300 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-accent/50 rounded px-2 py-1 ${
      activeSection === id && !is3DMode
        ? "text-accent"
        : "text-text-muted hover:text-accent"
    }`

  return (
    <Container overflowVisible={is3DMode}>
      <div className="flex flex-col">
        {isMobileMenuOpen && (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          />
        )}

        <nav
          className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-white/10 safe-top"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-3 py-3 sm:py-4">
              <a
                href="#summary"
                className="min-w-0 truncate text-lg sm:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Go to top"
              >
                {siteConfig.name}
              </a>
              <div className="hidden md:flex items-center space-x-4 lg:space-x-6" role="menubar">
                {siteConfig.navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={navLinkClass(item.id)}
                    role="menuitem"
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <ViewModeToggle isRoadmap={is3DMode} onToggle={() => setIs3DMode((p) => !p)} />
                <ThemeSwitcher />
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 md:hidden shrink-0">
                <ViewModeToggle isRoadmap={is3DMode} onToggle={() => setIs3DMode((p) => !p)} />
                <ThemeSwitcher />
                <button
                  className="text-text-muted hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded min-w-11 min-h-11 flex items-center justify-center"
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
                </button>
              </div>
            </div>

            {isMobileMenuOpen && (
              <div
                id="mobile-menu"
                className="md:hidden mt-2 pb-4 border-t border-white/10 max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
                role="menu"
              >
                <div className="flex flex-col pt-3">
                  {siteConfig.navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className={`min-h-11 flex items-center py-2.5 font-medium focus:outline-none focus:ring-2 focus:ring-accent/50 rounded px-2 ${
                        activeSection === item.id ? "text-accent" : "text-text-muted hover:text-accent"
                      }`}
                      role="menuitem"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="pt-20">
          {is3DMode ? (
            <Suspense fallback={<Preview3DFallback />}>
              <Preview3D />
            </Suspense>
          ) : (
            <div>
                <Summary />

                <section id="skills" className={sectionClass} aria-label="Skills">
                  <div className={sectionInnerClass}>
                    <PageSectionHeader
                      title="Skills"
                      description="Technologies and tools I work with"
                      className="mb-8 sm:mb-10 md:mb-12"
                    />
                    <Skills />
                  </div>
                </section>

                <section id="experiences" className={sectionClass} aria-label="Work Experience">
                  <div className={sectionInnerClass}>
                    <PageSectionHeader
                      title="Experience"
                      description="My professional journey and the companies I've had the privilege to work with"
                    />
                    <Experience />
                  </div>
                </section>

                <section
                  id="projects"
                  className={`${sectionClass} bg-gradient-to-r from-transparent via-secondary/30 to-transparent`}
                  aria-label="Projects Portfolio"
                >
                  <div className={sectionInnerClass}>
                    <PageSectionHeader
                      title="Projects"
                      description="A showcase of my recent work and personal projects"
                    />
                    <Projects />
                  </div>
                </section>

                <section
                  id="contact"
                  className={`${sectionClass} bg-gradient-to-r from-transparent via-secondary/30 to-transparent`}
                  aria-label="Contact Information"
                >
                  <div className={sectionInnerClass}>
                    <PageSectionHeader
                      title="Contact"
                      description="Let's connect and discuss how we can work together"
                    />
                    <Contact />
                  </div>
                </section>

                <ResumeBox />
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Landing
