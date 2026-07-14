import { useMemo } from "react"
import { motion } from "framer-motion"
import { FlipText } from "../../ui/flip-text"
import RoadmapCard3D from "./RoadmapCard3D"
import { experiences } from "@/utils/service/experiences/experiences"
import { projects } from "@/utils/service/projects/projects"

interface TimelineItem {
  title: string
  subtitle: string
  date: string
  tags: string[]
  description?: string[]
  type: "experience" | "project"
  sortDate: string
}

const Preview3D = () => {
  const timeline = useMemo(() => {
    const expItems: TimelineItem[] = experiences.map((exp) => ({
      title: exp.company,
      subtitle: exp.role,
      date: exp.period,
      tags: [exp.location],
      description: exp.bullets,
      type: "experience" as const,
      sortDate: (exp.period.split(" - ")[0] || "").trim(),
    }))

    const projItems: TimelineItem[] = projects.map((proj) => ({
      title: proj.title,
      subtitle: proj.type,
      date: proj.date,
      tags: [proj.company, proj.type],
      description: proj.link ? [`Live: ${proj.link}`] : undefined,
      type: "project" as const,
      sortDate: proj.date,
    }))

    const parseDate = (d: string) => {
      const parts = d.split("/")
      const month = Number(parts[0]) || 1
      const year = Number(parts[1]) || 2024
      return new Date(year, month - 1)
    }

    return [...expItems, ...projItems].sort(
      (a, b) => parseDate(b.sortDate).getTime() - parseDate(a.sortDate).getTime()
    )
  }, [])

  return (
    <div className="min-h-screen py-8 overflow-visible">
      {/* Hero header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20 px-4"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          initial={{ rotateX: 15, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <FlipText className="font-bold text-3xl sm:text-4xl md:text-6xl tracking-tight gradient-text mb-2 sm:mb-4">
            My Roadmap
          </FlipText>
        </motion.div>
        <p className="text-xs sm:text-xl text-text-muted max-w-2xl mx-auto">
          A journey through my career milestones and projects
        </p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted/60 uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Vertical line — hidden on mobile, centered on desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

        {/* Timeline items */}
        <div className="space-y-16">
          {timeline.map((item, index) => (
            <RoadmapCard3D
              key={`${item.type}-${item.title}`}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              tags={item.tags}
              description={item.description}
              side={index % 2 === 0 ? "left" : "right"}
              index={index}
              type={item.type}
            />
          ))}
        </div>

        {/* End node */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center mt-16"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-secondary shadow-[0_0_30px_rgba(212,168,83,0.5)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-background" />
          </div>
        </motion.div>
      </div>

      {/* Decorative floating orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 120, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-2/3 right-1/4 w-48 h-48 rounded-full bg-blue-400/5 blur-[80px]"
        />
      </div>
    </div>
  )
}

export default Preview3D
