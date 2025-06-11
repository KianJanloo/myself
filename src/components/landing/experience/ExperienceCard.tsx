import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card"

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, location, bullets }) => {
  return (
    <MagicCard gradientColor="#1f224c" className="border-2 px-4 py-2 rounded-2xl border-white/20 shadow-2xl">
      <BlurFade inView className="bg-transparent">
        <div className="flex items-center flex-wrap gap-4 justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <span className="text-sm text-accent">{period}</span>
        </div>
        <div className="text-lg font-semibold text-accent mb-1">{company}</div>
        <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c-4.418 0-8-4.03-8-9a8 8 0 1116 0c0 4.97-3.582 9-8 9z" /></svg>
          {location}
        </div>
        <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </BlurFade>
    </MagicCard>
  )
}

export default ExperienceCard
