import kian from "@/assets/Kian.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

const Summary = () => {
  return (
    <section
      id="summary"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-md:text-center">
        <div className="flex max-lg:flex-col flex-row-reverse justify-center gap-12 max-lg:gap-16 items-center max-w-6xl mx-auto">
          <BlurFade inView delay={0.2} direction="left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-accent-secondary rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <div className="relative">
                <img
                  src={kian || " "}
                  alt="Kian Janloo - Full Stack Developer"
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                  <span className="text-white whitespace-nowrap">Front-End Developer</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-xl text-text-primary font-medium leading-relaxed">
                  A Front-End Developer passionate about building modern,
                  responsive, and user-centric web apps with{" "}
                  <span className="gradient-text font-bold">React</span> ,{" "}
                  <span className="gradient-text font-bold">Next.js</span> and{" "}
                  <span className="gradient-text font-bold">Node.js</span>.
                </p>

                <p className="text-lg text-text-muted  leading-relaxed">
                  With 4+ years of experience, I focus on performance,
                  accessibility, and pixel-perfect design to deliver products
                  that delight users and drive business growth.
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
                  className="px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Summary;
