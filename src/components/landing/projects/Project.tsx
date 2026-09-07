import { useState, memo, useCallback, useRef } from "react"
import ProjectModal from "./ProjectModal"
import type { FC } from "react"
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCode, FaStar } from "react-icons/fa"
import LazyImage from "@/components/common/LazyImage"
import Reveal from "@/components/ui/Reveal"
import type { Project } from "@/utils/service/projects/projects"

const ProjectCard: FC<Project> = memo(
  ({
    date,
    github,
    link,
    title,
    type,
    description,
    technologies,
    image,
    company,
    demoUrl,
    isOpenSource,
    featured,
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleOpenModal = useCallback(() => setIsModalOpen(true), [])
    const handleCloseModal = useCallback(() => setIsModalOpen(false), [])

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }, [])

    const handleMouseLeave = useCallback(() => {
      const el = cardRef.current
      if (el) el.style.transform = ""
    }, [])

    return (
      <>
        <Reveal>
          <div className={`group ${isOpenSource ? "ring-1 ring-accent/30 rounded-2xl" : ""}`}>
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: "transform 0.3s ease-out" }}
              className="h-full"
            >
              <div className="relative h-full rounded-2xl overflow-hidden project-card-glow">
                <div className="relative h-full rounded-2xl border border-card-border group-hover:border-accent/30 transition-colors flex flex-col glass-perf">
                  <div className="relative aspect-video w-full overflow-hidden bg-secondary/30">
                    {image ? (
                      <LazyImage src={image} alt={`${title} preview`} className="w-full h-full" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FaCode className="w-8 h-8 text-text-muted/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent pointer-events-none" />

                    {(featured || isOpenSource) && (
                      <div className="absolute top-3 left-3 flex gap-2">
                        {featured && (
                          <span className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-accent/90 text-background font-semibold">
                            <FaStar className="w-2.5 h-2.5" /> Featured
                          </span>
                        )}
                        {isOpenSource && (
                          <span className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-emerald-500/90 text-white font-semibold">
                            <FaCode className="w-2.5 h-2.5" /> Open Source
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        {type && (
                          <span className="text-xs font-mono text-accent/70 uppercase tracking-wider">{type}</span>
                        )}
                        <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent transition-colors mt-1 break-words">
                          {title}
                        </h3>
                        {company && <p className="text-sm text-text-muted mt-1">{company}</p>}
                      </div>
                      <span className="text-xs text-text-muted bg-secondary/50 px-3 py-1 rounded-full font-mono shrink-0 self-start">
                        {date}
                      </span>
                    </div>

                    {description && (
                      <p className="text-sm text-text-muted mb-4 line-clamp-2 leading-relaxed">{description}</p>
                    )}

                    {technologies && technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                            {tech}
                          </span>
                        ))}
                        {technologies.length > 4 && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-text-muted">
                            +{technologies.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-4 text-sm">
                        {link && (
                          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-accent font-medium">
                            <FaRocket className="w-3.5 h-3.5" /> Live Demo
                          </a>
                        )}
                        {github && (
                          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-muted hover:text-accent">
                            <FaGithub className="w-3.5 h-3.5" /> Source
                          </a>
                        )}
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <button
                          onClick={handleOpenModal}
                          className="w-full flex items-center justify-center gap-2 text-sm font-medium text-accent py-2 rounded-lg hover:bg-accent/5 cursor-pointer"
                          aria-label={`View details for ${title}`}
                        >
                          View Details <FaExternalLinkAlt className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <ProjectModal
          project={{ title, date, link, github, type, description, technologies, image, company, demoUrl }}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </>
    )
  }
)

ProjectCard.displayName = "Project"

export default ProjectCard
