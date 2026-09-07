import { useState, useMemo } from "react"
import { FaSearch } from "react-icons/fa"
import SkillsFilter from "./SkillsFilter"
import SkillCategoryGroup from "./SkillCategoryGroup"
import { skills } from "../../../utils/service/skills/skills"
import { CATEGORY_META } from "@/utils/service/skills/skillMeta"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const CATEGORY_ORDER = [
  "languages",
  "frontend",
  "backend",
  "databases",
  "auth",
  "devops",
  "testing",
  "tools",
]

const Skills = () => {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")
  const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 200 })

  const filteredSkills = useMemo(() => {
    let result = filter === "all" ? skills : skills.filter((s) => s.category === filter)
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          CATEGORY_META[s.category]?.label.toLowerCase().includes(q)
      )
    }
    return [...result].sort((a, b) => a.name.localeCompare(b.name))
  }, [filter, search])

  const groupedSkills = useMemo(() => {
    const map = new Map<string, typeof skills>()
    filteredSkills.forEach((skill) => {
      const list = map.get(skill.category) ?? []
      list.push(skill)
      map.set(skill.category, list)
    })
    return CATEGORY_ORDER.filter((c) => map.has(c)).map((category) => ({
      category,
      items: map.get(category)!,
    }))
  }, [filteredSkills])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <SkillsFilter onFilterChange={setFilter} activeFilter={filter} />

      <div className="relative max-w-md mx-auto mb-10 sm:mb-12">
        <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search skills..."
          aria-label="Search skills"
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors"
        />
      </div>

      {filteredSkills.length === 0 ? (
        <p className="text-center text-text-muted py-16 sm:py-20">No skills match your search.</p>
      ) : (
        <div ref={parent} className="space-y-10 sm:space-y-14">
          {groupedSkills.map(({ category, items }) => (
            <SkillCategoryGroup key={category} category={category} items={items} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Skills
