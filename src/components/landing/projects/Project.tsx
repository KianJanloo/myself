import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import ProjectModal from "./ProjectModal";
import type { FC } from "react";
import { FaChartPie, FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

interface IProject {
  title: string;
  date: string;
  link: string;
  github?: string;
  type?: string;
  description?: string;
  technologies?: string[];
  image?: string;
  company?: string;
}

const Project: FC<IProject> = ({
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group"
      >
        <MagicCard
          gradientColor="rgba(99, 102, 241, 0.1)"
          className="h-full border border-card-border rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group-hover:scale-105"
        >
          <BlurFade inView className="h-full flex flex-col p-6">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300">
                    {title}
                  </h3>
                  {company && (
                    <p className="text-sm text-text-muted mt-1">{company}</p>
                  )}
                </div>
                <span className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full font-medium">
                  {date}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors duration-300 font-medium group/link"
                >
                  <span>{link}</span>
                  <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>

                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span className="text-sm">View Source</span>
                  </a>
                )}

                {type && (
                  <div className="flex items-center gap-2 text-text-muted">
                    <FaChartPie className="w-4 h-4" />
                    <span className="text-sm">{type}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors duration-300 text-sm font-medium"
                >
                  <FaEye className="w-4 h-4" />
                  <span>View Details</span>
                </button>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-accent rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </BlurFade>
        </MagicCard>
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
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Project;
