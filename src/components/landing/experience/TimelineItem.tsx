import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"

interface TimelineItemProps {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  index: number
}

const TimelineItem = ({ company, role, period, location, bullets, index }: TimelineItemProps) => {
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex items-start md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex-1 md:ml-0"
      >
        <div className="glass rounded-2xl p-4 sm:p-6 border border-card-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
          <div className="flex max-md:flex-col gap-3 items-start md:items-center justify-between mb-3">
            <h3 className="text-base sm:text-xl font-bold text-text-primary">{role}</h3>
            <span className="text-xs text-accent bg-accent/10 whitespace-nowrap px-3 py-1 rounded-full font-medium flex items-center gap-1">
              <FaCalendarAlt className="w-3 h-3" />
              {period}
            </span>
          </div>

          <div className="text-sm sm:text-lg font-semibold text-accent mb-2">{company}</div>

          <div className="flex items-center gap-2 text-text-muted mb-4">
            <FaMapMarkerAlt className="w-3.5 h-3.5" />
            <span className="text-sm">{location}</span>
          </div>

          <ul className="space-y-2">
            {bullets.map((bullet, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 text-text-primary text-xs sm:text-sm leading-relaxed"
              >
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Timeline dot — hidden on mobile */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-shrink-0 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 mt-6 shadow-lg shadow-accent/30"
      />

      {/* Spacer for the other side */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}

export default TimelineItem
