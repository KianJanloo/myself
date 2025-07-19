import { projects } from "@/utils/service/projects/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4">
      {projects.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
    </div>
  );
};

export default Projects;
