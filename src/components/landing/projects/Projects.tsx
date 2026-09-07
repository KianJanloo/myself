import { useState } from "react"
import { filterProjects, projectFilters, type ProjectFilterId } from "@/utils/service/projects/projects"
import Project from "./Project"

const Projects = () => {
  const [filter, setFilter] = useState<ProjectFilterId>("all")
  const filtered = filterProjects(filter)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
        {projectFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3 py-2.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer min-h-11 ${
              filter === f.id
                ? "bg-accent/20 text-accent border border-accent/30"
                : "text-text-muted hover:text-accent border border-white/10"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {filtered.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted text-sm">No projects match this filter.</p>
      )}
    </div>
  )
}

export default Projects
