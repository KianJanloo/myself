import kian from "@/assets/Kian.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import TypingAnimation from "@/components/ui/TypingAnimation";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TITLES = [
  "Full-Stack Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Node.js Engineer",
];

const Summary = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="summary"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      <FloatingShapes />

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-md:text-center relative z-10"
      >
        <div className="flex max-lg:flex-col flex-row-reverse justify-center gap-12 max-lg:gap-16 items-center max-w-6xl mx-auto">
          <BlurFade inView delay={0.2} direction="left">
            <div className="perspective-1000">
              <div
                className="relative group preserve-3d"
                onMouseMove={(e) => {
                  const el = e.currentTarget
                  const rect = el.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  const rotateX = ((y - centerY) / centerY) * -8
                  const rotateY = ((x - centerX) / centerX) * 8
                  el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                }}
                style={{
                  transition: "transform 0.2s ease-out",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-accent via-gold-light to-accent-secondary rounded-full opacity-60 group-hover:opacity-100 transition duration-700 blur-sm" />
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full opacity-40 group-hover:opacity-80 transition duration-700" />
                <div className="relative">
                  <img
                    src={kian || " "}
                    alt="Kian Janloo - Full Stack Developer"
                    className="w-72 h-72 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-accent/30 shadow-2xl transition-transform duration-500"
                    style={{ transform: "translateZ(30px)" }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.4} direction="right" className="max-w-2xl">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h1 className="text-5xl lg:text-6xl max-md:text-4xl font-bold mb-4">
                  <span className="gradient-text">Hi, I'm Kian</span>
                  <br />
                  <span className="text-white whitespace-nowrap">
                    <TypingAnimation
                      strings={TITLES}
                      speed={70}
                      deleteSpeed={40}
                      pauseDuration={2000}
                      className="text-text-primary"
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-xl text-text-primary font-medium leading-relaxed">
                  A Full-Stack Developer passionate about building modern,
                  responsive, and user-centric web apps with{" "}
                  <span className="gradient-text font-bold">React</span>,{" "}
                  <span className="gradient-text font-bold">Next.js</span> and{" "}
                  <span className="gradient-text font-bold">Node.js</span>.
                </p>

                <p className="text-lg text-text-muted leading-relaxed">
                  I focus on performance, accessibility, and pixel-perfect
                  design to deliver products that delight users and drive
                  business growth.
                </p>

                <p className="text-lg text-text-muted leading-relaxed">
                  Always eager to learn new technologies, tackle challenging
                  problems, and collaborate with creative teams to turn ideas
                  into reality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex max-md:justify-center whitespace-nowrap flex-wrap gap-4 pt-6"
              >
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary text-background font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-background transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </motion.div>
    </section>
  );
};

export default Summary;
