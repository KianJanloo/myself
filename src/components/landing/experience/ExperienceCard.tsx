import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card"
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, location, bullets }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <MagicCard 
        gradientColor="rgba(99, 102, 241, 0.1)" 
        className="h-full border border-card-border rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group-hover:scale-105"
      >
        <BlurFade inView className="h-full flex flex-col p-6">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
                {role}
              </h3>
              <span className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                <FaCalendarAlt className="w-3 h-3" />
                {period}
              </span>
            </div>

            <div className="text-xl font-semibold text-accent mb-3 group-hover:text-accent-secondary transition-colors duration-300">
              {company}
            </div>

            <div className="flex items-center gap-2 text-text-muted mb-6">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>

            <ul className="space-y-3">
              {bullets.map((bullet, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-text-primary text-sm leading-relaxed"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:bg-accent-secondary transition-colors duration-300"></div>
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10 mt-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-accent-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-xs text-text-muted">Professional Experience</span>
            </div>
          </div>
        </BlurFade>
      </MagicCard>
    </motion.div>
  )
}

export default ExperienceCard
