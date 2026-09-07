import Skill from "./Skill"
import { CATEGORY_META } from "@/utils/service/skills/skillMeta"
import type { ISkill } from "@/types/skill-type/skill-type"

interface SkillCategoryGroupProps {
  category: string
  items: ISkill[]
}

const SkillCategoryGroup = ({ category, items }: SkillCategoryGroupProps) => {
  const meta = CATEGORY_META[category]
  const CategoryIcon = meta?.icon

  return (
    <section aria-label={meta?.label ?? category} className="last:mb-0">
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-accent/30" aria-hidden="true" />
        <div className="flex items-center gap-2.5 sm:gap-3">
          {CategoryIcon && (
            <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent/10 border border-accent/20">
              <CategoryIcon className="w-4 h-4 text-accent" />
            </span>
          )}
          <h3 className="text-base sm:text-lg font-semibold text-text-primary tracking-tight">
            {meta?.label ?? category}
          </h3>
          <span className="text-xs sm:text-sm font-medium text-text-muted/70 tabular-nums">
            {items.length}
          </span>
        </div>
        <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-accent/30" aria-hidden="true" />
      </div>

      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {items.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default SkillCategoryGroup
