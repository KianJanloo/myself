import { motion } from "framer-motion"
import { FlipText } from "@/components/ui/flip-text"
import { currentlyLearning } from "@/utils/service/currently-learning/currentlyLearning"
import { useLanguage } from "@/i18n/LanguageContext"

const CurrentlyLearning = () => {
  const { t } = useLanguage()

  return (
    <section className="py-20" aria-label="Currently Learning">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <FlipText className="font-bold text-5xl tracking-tight gradient-text mb-4">
            {t("learning.title")}
          </FlipText>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            {t("learning.subtitle")}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentlyLearning.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass rounded-2xl p-5 border border-white/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[10px] text-text-muted">
                    Since{" "}
                    {new Date(item.startedDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <span className="text-xs font-bold text-accent">
                  {item.progress}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentlyLearning
