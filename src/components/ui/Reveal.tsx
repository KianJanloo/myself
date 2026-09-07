import { useInView } from "react-intersection-observer"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

const offsets = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
}

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-60px 0px" })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${offsets[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
