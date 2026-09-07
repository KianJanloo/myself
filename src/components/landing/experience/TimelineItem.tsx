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

  const card = (
    <div className="rounded-2xl p-4 sm:p-6 border border-card-border glass-perf hover:border-accent/40 transition-colors duration-200">
      <div className="flex max-md:flex-col gap-3 items-start md:items-center justify-between mb-3">
        <h3 className="text-base sm:text-xl font-bold text-text-primary">{role}</h3>
        <span className="text-xs sm:text-sm text-accent bg-accent/10 px-3 py-1 rounded-full font-medium flex items-center gap-1 shrink-0">
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
          <li
            key={idx}
            className="flex items-start gap-2 text-text-primary text-xs sm:text-sm leading-relaxed"
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className={`relative flex items-start md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex-1 md:ml-0"
      >
        {card}
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-shrink-0 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 mt-6"
      />

      <div className="hidden md:block flex-1" />
    </div>
  )
}

export default TimelineItem
