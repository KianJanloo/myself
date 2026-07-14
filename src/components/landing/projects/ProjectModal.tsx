import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaTag,
  FaRocket,
} from "react-icons/fa";
interface ProjectModalProps {
  project: {
    title: string;
    date: string;
    link?: string;
    demoUrl?: string;
    github?: string;
    type?: string;
    description?: string;
    technologies?: string[];
    image?: string;
    company?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [showDemo, setShowDemo] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto glass border border-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl sm:text-3xl font-bold text-text-primary mb-2 gradient-text">
                    {project.title}
                  </h2>
                  {project.company && (
                    <p className="text-sm text-text-muted mt-1">
                      {project.company}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-text-muted">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                    {project.type && (
                      <div className="flex items-center gap-2">
                        <FaTag className="w-4 h-4" />
                        <span>{project.type}</span>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-text-muted hover:text-accent transition-colors p-2"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Demo iframe */}
              {project.demoUrl && (
                <div className="mb-6">
                  {showDemo ? (
                    <div className="relative rounded-xl overflow-hidden border border-white/10">
                      <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-white/10">
                        <span className="text-xs text-text-muted font-mono truncate">
                          {project.demoUrl}
                        </span>
                        <button
                          onClick={() => setShowDemo(false)}
                          className="text-xs text-accent hover:text-gold-light transition-colors cursor-pointer"
                        >
                          Close Preview
                        </button>
                      </div>
                      <iframe
                        src={project.demoUrl}
                        title={`${project.title} demo`}
                        className="w-full h-[400px] bg-white"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowDemo(true)}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-dashed border-accent/30 text-accent hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                    >
                      <FaRocket className="w-5 h-5" />
                      <span className="font-medium">Live Demo</span>
                    </button>
                  )}
                </div>
              )}

              {project.image && (
                <div className="mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              )}

              {project.description && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    Description
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}

              {project.technologies && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
