import { useState, memo, useCallback, useRef } from "react";
import ProjectModal from "./ProjectModal";
import type { FC } from "react";
import { FaChartPie, FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

interface IProject {
  title: string;
  date: string;
  link?: string;
  github?: string;
  type?: string;
  description?: string;
  technologies?: string[];
  image?: string;
  company?: string;
}

const Project: FC<IProject> = memo(
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
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleOpenModal = useCallback(() => {
      setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
      setIsModalOpen(false);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
      const el = cardRef.current;
      if (!el) return;
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }, []);

    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group perspective-2000"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.3s ease-out", transformStyle: "preserve-3d" }}
            className="h-full"
          >
            {/* Card with gradient border */}
            <div className="relative h-full rounded-2xl overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main card content */}
              <div className="relative h-full bg-card-bg/80 backdrop-blur-sm rounded-2xl border border-card-border group-hover:border-accent/30 transition-all duration-500 p-6 flex flex-col">
                {/* Header with decorative elements */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      {type && (
                        <span className="text-xs font-mono text-accent/70 uppercase tracking-wider">
                          {type}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                      {title}
                    </h3>
                    {company && (
                      <p className="text-sm text-text-muted mt-1">{company}</p>
                    )}
                  </div>
                  <span className="text-xs text-text-muted bg-secondary/50 px-3 py-1 rounded-full font-mono">
                    {date}
                  </span>
                </div>

                {/* Tech stack badges */}
                {technologies && technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium"
                      >
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

                {/* Links section */}
                <div className="mt-auto space-y-2">
                  <div className="flex items-center gap-4 text-sm">
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-accent hover:text-gold-light transition-colors duration-300 font-medium"
                      >
                        <FaRocket className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors duration-300"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                    {type && (
                      <div className="flex items-center gap-1.5 text-text-muted ml-auto">
                        <FaChartPie className="w-3.5 h-3.5" />
                        <span className="text-xs">{type}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom accent line */}
                  <div className="pt-3 border-t border-white/5">
                    <button
                      onClick={handleOpenModal}
                      className="w-full flex items-center justify-center gap-2 text-sm font-medium text-accent hover:text-gold-light transition-colors duration-300 py-2 rounded-lg hover:bg-accent/5"
                      aria-label={`View details for ${title}`}
                    >
                      <span>View Details</span>
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <ProjectModal
          project={{
            title,
            date,
            link,
            github,
            type,
            description,
            technologies,
            image,
            company,
          }}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </>
    );
  }
);

Project.displayName = "Project";

export default Project;
