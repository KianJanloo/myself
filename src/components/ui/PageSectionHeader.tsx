import { SectionHeading } from "@/components/ui/SectionHeading"
import Reveal from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

interface PageSectionHeaderProps {
  title: string
  description: string
  className?: string
}

export function PageSectionHeader({ title, description, className }: PageSectionHeaderProps) {
  return (
    <header className={cn("text-center mb-6 sm:mb-10 md:mb-16", className)}>
      <SectionHeading className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight gradient-text mb-2 sm:mb-4 block">
        {title}
      </SectionHeading>
      <Reveal delay={120}>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted max-w-2xl mx-auto px-2">{description}</p>
      </Reveal>
    </header>
  )
}
