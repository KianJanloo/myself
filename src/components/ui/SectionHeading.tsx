import Reveal from "./Reveal"

interface SectionHeadingProps {
  children: string
  className?: string
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <Reveal>
      <h2 className={`${className} heading-shimmer`}>{children}</h2>
    </Reveal>
  )
}
