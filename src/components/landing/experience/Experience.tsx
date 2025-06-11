import { experiences } from "@/utils/service/experiences/experiences"
import ExperienceCard from "./ExperienceCard"

const Experience = () => {
    return (
        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4'>
            {experiences.map((experience, idx) => (
                <ExperienceCard key={idx} {...experience} />
            ))}
        </div>
    )
}

export default Experience
