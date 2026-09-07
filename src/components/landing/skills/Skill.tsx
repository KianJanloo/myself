import type { ISkill } from "@/types/skill-type/skill-type"
import { getSkillIcon } from "@/utils/service/skills/skillMeta"

const Skill = ({ name, category = "frontend" }: ISkill) => {
  const Icon = getSkillIcon(name, category)

  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-medium text-text-primary hover:border-accent/40 hover:bg-accent/5 hover:text-accent transition-colors cursor-default">
      <Icon className="w-4 h-4 shrink-0 opacity-80" />
      {name}
    </span>
  )
}

export default Skill
