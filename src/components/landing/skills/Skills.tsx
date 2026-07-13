import { useState, useMemo } from "react"
import Skill from "./Skill"
import SkillsFilter from "./SkillsFilter"
import RadarChart from "./RadarChart"
import { skills } from "../../../utils/service/skills/skills"
import { motion, AnimatePresence } from "framer-motion"
const Skills = () => {
  const [filter, setFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "radar">("grid")

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter)

  const radarData = useMemo(() => {
    const categoryRates: Record<string, { sum: number; count: number }> = {}
    skills.forEach((s) => {
      if (!categoryRates[s.category]) categoryRates[s.category] = { sum: 0, count: 0 }
      categoryRates[s.category]!.sum += s.rate
      categoryRates[s.category]!.count += 1
    })
    return Object.entries(categoryRates).map(([name, { sum, count }]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value: Math.round(sum / count),
    }))
  }, [])

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 mb-8">
        <SkillsFilter onFilterChange={setFilter} />
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              viewMode === "grid"
                ? "bg-accent/20 text-accent border border-accent/30"
                : "text-text-muted hover:text-accent border border-white/10"
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode("radar")}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              viewMode === "radar"
                ? "bg-accent/20 text-accent border border-accent/30"
                : "text-text-muted hover:text-accent border border-white/10"
            }`}
          >
            Radar View
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.02,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="w-full"
                  >
                    <Skill {...skill} idx={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-text-muted">
                Showing {filteredSkills.length} skill
                {filteredSkills.length !== 1 ? "s" : ""}
                {filter !== "all" && ` in ${filter}`}
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="radar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-4 sm:p-8 border border-white/10"
          >
            <RadarChart categories={radarData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skills
