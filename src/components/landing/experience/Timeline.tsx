import { experiences } from "@/utils/service/experiences/experiences"
import TimelineItem from "./TimelineItem"

const Timeline = () => {
  return (
    <div className="relative">
      {/* Vertical line — hidden on mobile */}
      <div className="timeline-line hidden md:block" />

      <div className="space-y-12">
        {experiences.map((experience, idx) => (
          <TimelineItem key={idx} {...experience} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default Timeline
