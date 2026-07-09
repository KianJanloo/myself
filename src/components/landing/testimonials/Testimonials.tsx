import { motion } from "framer-motion"
import { FlipText } from "@/components/ui/flip-text"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "@/utils/service/testimonials/testimonials"
import { useLanguage } from "@/i18n/LanguageContext"

const Testimonials = () => {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <FlipText className="font-bold text-5xl tracking-tight gradient-text mb-4">
            {t("testimonials.title")}
          </FlipText>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.header>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
