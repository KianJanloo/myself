import { motion } from 'framer-motion';
import resumeImage from "@/assets/Resume.png"
import resume from "/Resume.pdf"
import { FaDownload, FaFileAlt } from 'react-icons/fa'

const ResumeBox = () => {
  return (
    <section className="py-20" aria-label="Resume">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Main card */}
          <div className="relative glass rounded-3xl border border-white/10 group-hover:border-accent/30 transition-all duration-500 overflow-hidden">
            {/* Header */}
            <div className="p-8 pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl group-hover:from-accent/30 group-hover:to-accent-secondary/30 transition-all duration-300">
                    <FaFileAlt className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
                      Resume
                    </h2>
                    <p className="text-sm text-text-muted">
                      Full-Stack Developer with 4+ years of experience
                    </p>
                  </div>
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={resume}
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-accent/30 transition-all duration-300 cursor-pointer"
                >
                  <FaDownload className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">Download</span>
                </motion.a>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="p-8">
              <div className="relative w-full h-[500px] max-md:h-[300px] max-sm:h-[200px] rounded-2xl overflow-hidden bg-black/20 border border-white/5">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  src={resumeImage}
                  alt="Resume Preview"
                  className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-80" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Bottom CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={resume}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    <FaDownload className="w-4 h-4" />
                    Download Full Resume
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="px-8 pb-8">
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4+</div>
                  <div className="text-sm text-text-muted">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-text-muted">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-text-muted">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeBox;
