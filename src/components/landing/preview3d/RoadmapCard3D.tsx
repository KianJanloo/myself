import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface RoadmapCard3DProps {
  title: string
  subtitle: string
  date: string
  tags: string[]
  description?: string[]
  side: "left" | "right"
  index: number
  type: "experience" | "project"
}

const RoadmapCard3D = ({ title, subtitle, date, tags, description, side, index, type }: RoadmapCard3DProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const isLeft = side === "left"

  const card = (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -40 : 40,
        rotateY: isLeft ? 12 : -12,
        rotateX: 5,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, rotateY: 0, rotateX: 0 }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="shrink-0 w-full md:w-[calc(50%-2rem)] max-md:pl-12 max-md:!transform-none"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="group relative rounded-2xl border border-white/10 bg-card-bg backdrop-blur-xl p-5 md:p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(212,168,83,0.15)]"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(0)" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                type === "experience"
                  ? "bg-gradient-to-br from-accent to-accent-secondary"
                  : "bg-gradient-to-br from-blue-400 to-cyan-400"
              }`}
            />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              {type === "experience" ? "Experience" : "Project"}
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-bold gradient-text mb-1">{title}</h3>
          <p className="text-sm text-text-muted mb-3">{subtitle}</p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {description && description.length > 0 && (
            <ul className="space-y-1.5">
              {description.slice(0, 2).map((bullet, i) => (
                <li key={i} className="text-xs text-text-muted leading-relaxed flex gap-2">
                  <span className="text-accent mt-0.5 shrink-0">&#9670;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-[11px] font-bold bg-background border border-white/10 text-text-muted shadow-lg">
          {date}
        </div>
      </div>
    </motion.div>
  )

  const spacer = <div className="hidden md:block shrink-0 w-[calc(54%-0rem)]" />

  const dot = (
    <>
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.3, type: "spring", stiffness: 400, damping: 15 }}
          className={`w-4 h-4 rounded-full border-[3px] ${
            type === "experience"
              ? "border-accent bg-accent/20"
              : "border-blue-400 bg-blue-400/20"
          } shadow-[0_0_20px_rgba(212,168,83,0.4)]`}
        />
      </div>
      <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.3, type: "spring", stiffness: 400, damping: 15 }}
          className={`w-3 h-3 rounded-full border-[2px] ${
            type === "experience"
              ? "border-accent bg-accent/20"
              : "border-blue-400 bg-blue-400/20"
          } shadow-[0_0_12px_rgba(212,168,83,0.4)]`}
        />
      </div>
    </>
  )

  return (
    <div
      ref={ref}
      className="relative flex items-center w-full max-w-5xl mx-auto"
      style={{ perspective: "1200px" }}
    >
      {isLeft ? (
        <>
          {card}
          {dot}
          {spacer}
        </>
      ) : (
        <>
          {spacer}
          {dot}
          {card}
        </>
      )}
    </div>
  )
}

export default RoadmapCard3D
