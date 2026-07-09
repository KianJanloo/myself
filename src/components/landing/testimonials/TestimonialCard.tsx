import { motion } from "framer-motion"
import { FaQuoteLeft, FaStar } from "react-icons/fa"
import type { Testimonial } from "@/utils/service/testimonials/testimonials"

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden min-w-[300px] max-w-[400px] flex-shrink-0"
    >
      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-accent-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Quote icon */}
        <FaQuoteLeft className="w-8 h-8 text-accent/20 mb-4" />

        {/* Quote */}
        <p className="text-text-primary/90 text-sm leading-relaxed mb-6 italic">
          "{testimonial.quote}"
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <FaStar key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white text-sm font-bold">
            {testimonial.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">
              {testimonial.name}
            </p>
            <p className="text-xs text-text-muted">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
