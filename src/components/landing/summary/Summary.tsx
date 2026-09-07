import kian from "@/assets/Kian.jpg"
import { BlurFade } from "@/components/ui/blur-fade"
import TypingAnimation from "@/components/ui/TypingAnimation"
import FloatingShapes from "@/components/ui/FloatingShapes"
import Reveal from "@/components/ui/Reveal"
import { siteConfig } from "@/config/siteConfig"
import { FaDownload } from "react-icons/fa"

const titles = ["Full-Stack Developer", "React Specialist", "UI/UX Enthusiast", "Node.js Engineer"]

const Summary = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = siteConfig.resumePath
    link.download = siteConfig.resumeFilename
    link.click()
  }

  return (
    <section
      id="summary"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 relative overflow-hidden scroll-mt-20"
    >
      <FloatingShapes />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-md:text-center relative z-10">
        <div className="flex max-lg:flex-col flex-row-reverse justify-center gap-4 sm:gap-8 md:gap-16 items-center max-w-6xl mx-auto">
          <BlurFade inView delay={0.2} direction="left">
            <div className="relative hero-photo-glow">
              <img
                src={kian}
                alt="Kian Janloo - Full Stack Developer"
                width={320}
                height={320}
                decoding="async"
                className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-accent/30 shadow-xl"
              />
            </div>
          </BlurFade>

          <BlurFade inView delay={0.4} direction="right" className="max-w-2xl">
            <div className="space-y-6">
              <Reveal delay={100}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                  <span className="gradient-text">Hi, I'm Kian</span>
                  <br />
                  <span className="text-text-primary block min-h-[1.2em] sm:min-h-[1.15em] md:min-h-[1.1em]">
                    <TypingAnimation strings={titles} className="text-text-primary" />
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <div className="space-y-4">
                  <p className="text-sm sm:text-lg md:text-xl text-text-primary font-medium leading-relaxed">
                    A Full-Stack Developer passionate about building modern, responsive, and user-centric web apps
                    with <span className="gradient-text font-bold">React</span>,{" "}
                    <span className="gradient-text font-bold">Next.js</span> and{" "}
                    <span className="gradient-text font-bold">Node.js</span>.
                  </p>
                  <p className="text-xs sm:text-base md:text-lg text-text-muted leading-relaxed">
                    I focus on performance, accessibility, and pixel-perfect design to deliver products that delight
                    users and drive business growth.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row max-md:items-stretch gap-3 sm:gap-4 pt-4 w-full max-w-md sm:max-w-none mx-auto sm:mx-0">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center min-h-11 px-6 sm:px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary text-background font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-shadow text-sm sm:text-base"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center min-h-11 px-6 sm:px-8 py-3 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-background transition-colors text-sm sm:text-base"
                  >
                    Get In Touch
                  </a>
                  <button
                    onClick={handleDownloadResume}
                    className="inline-flex items-center justify-center min-h-11 gap-2 px-6 sm:px-8 py-3 border border-white/20 text-text-primary font-semibold rounded-full hover:border-accent hover:text-accent transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <FaDownload className="w-4 h-4" />
                    Download CV
                  </button>
                </div>
              </Reveal>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}

export default Summary
