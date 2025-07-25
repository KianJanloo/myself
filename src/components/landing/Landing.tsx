import Container from "../container/Container"
import { FlipText } from "../ui/flip-text"
import Contact from "./contact/Contact"
import Experience from "./experience/Experience"
import Projects from "./projects/Projects"
import ResumeBox from "./resume-box/ResumeBox"
import Skills from "./skills/Skills"
import Summary from "./summary/Summary"

const Landing = () => {
  return (
    <Container>
      <div className="py-4 flex flex-col gap-32">
        <Summary />
        <div id="experiences" className="flex flex-col gap-8">
          <FlipText className="font-bold text-4xl tracking-tight"> Experiences </FlipText>
          <Experience />
        </div>
        <div id="projects" className="flex flex-col gap-8">
          <FlipText className="font-bold text-4xl tracking-tight"> Projects </FlipText>
          <Projects />
        </div>
        <div id="skills" className="flex flex-col gap-8">
          <FlipText className="font-bold text-4xl tracking-tight"> Skills </FlipText>
          <Skills />
        </div>
        <div id="contact" className="flex flex-col gap-8">
          <FlipText className="font-bold text-4xl tracking-tight"> Contact </FlipText>
          <Contact />
        </div>
        <ResumeBox />
      </div>
    </Container>
  )
}

export default Landing