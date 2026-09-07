import { CATEGORY_META } from "@/utils/service/skills/skillMeta"
import { FaThLarge } from "react-icons/fa"

interface SkillsFilterProps {
  onFilterChange: (filter: string) => void
  activeFilter: string
}

const SkillsFilter = ({ onFilterChange, activeFilter }: SkillsFilterProps) => {
  const categories = [
    { key: "all", label: "All", icon: FaThLarge },
    ...Object.entries(CATEGORY_META).map(([key, meta]) => ({
      key,
      label: meta.label.split(" ")[0],
      icon: meta.icon,
    })),
  ]

  return (
    <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center mb-8 sm:mb-10">
      {categories.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
            className={`px-3 py-2.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer min-h-11 ${
            activeFilter === key
              ? "bg-gradient-to-r from-accent to-accent-secondary text-background shadow-md shadow-accent/20"
              : "bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-primary border border-white/10"
          }`}
        >
          <Icon className="w-3.5 h-3.5" />
          {label}
        </button>
      ))}
    </div>
  )
}

export default SkillsFilter
