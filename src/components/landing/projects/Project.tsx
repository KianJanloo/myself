import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import type { FC } from "react";
import { FaChartPie, FaGithub } from "react-icons/fa";

interface IProject {
  title: string;
  date: string;
  link: string;
  github?: string;
  type?: string;
}

const Project: FC<IProject> = ({ date, github, link, title, type }) => {
  return (
    <MagicCard
      gradientColor="#1f224c"
      className="border-2 px-4 py-2 rounded-2xl border-white/20 shadow-2xl"
    >
      <BlurFade inView className="bg-transparent">
        <div className="flex items-center flex-wrap gap-4 justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-sm text-accent">{date}</span>
        </div>
        <a className="text-lg font-semibold text-accent mb-1">{link}</a>
        {github && <a href={github} className="flex items-center gap-1 text-xs text-gray-400 mb-2 mt-2">
          <FaGithub />
          {github}
        </a>}
        {type && <div className="flex items-center gap-1 text-xs text-gray-400 mb-2 mt-2">
          <FaChartPie />
          {type}
        </div>}
      </BlurFade>
    </MagicCard>
  );
};

export default Project;
