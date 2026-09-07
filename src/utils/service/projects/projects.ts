export interface Project {
  title: string
  image?: string
  date: string
  github?: string
  link?: string
  demoUrl?: string
  type?: string
  company?: string
  description?: string
  technologies?: string[]
  featured?: boolean
  isOpenSource?: boolean
}

export const projects: Project[] = [
  {
    title: "Lumen",
    image: "/projects/lumen.png",
    date: "08/2026",
    github: "https://github.com/KianJanloo/Lumen",
    link: "https://lumen-web-orcin.vercel.app",
    demoUrl: "https://lumen-web-orcin.vercel.app",
    type: "turbo-repo (NextJs, NestJs)",
    company: "Kian Janloo",
    featured: true,
    description:
      "Full-stack monorepo platform with a Next.js frontend and NestJS backend, featuring modular architecture, shared types, and production-ready deployment workflows.",
    technologies: ["Next.js", "NestJS", "TypeScript", "TurboRepo", "PostgreSQL", "Docker"],
  },
  {
    title: "Velonix",
    image: "/projects/velonix.png",
    date: "06/2026",
    link: "https://velonix-alpha.vercel.app/",
    demoUrl: "https://velonix-alpha.vercel.app/",
    type: "turbo-repo (NextJs, NestJs)",
    company: "Velonix",
    featured: true,
    description:
      "Enterprise-grade web application built as a turbo monorepo with separate frontend and backend packages, REST APIs, and scalable deployment on Vercel.",
    technologies: ["Next.js", "NestJS", "TypeScript", "TurboRepo", "Tailwind CSS"],
  },
  {
    title: "selfog",
    date: "07/2026",
    github: "https://github.com/KianJanloo/selfog",
    type: "Express, NextJs",
    company: "Kian Janloo",
    description:
      "Personal logging and blogging platform with an Express API backend and Next.js frontend for content management and SEO-friendly publishing.",
    technologies: ["Next.js", "Express", "TypeScript", "MongoDB"],
  },
  {
    title: "redlimit",
    date: "07/2026",
    github: "https://github.com/KianJanloo/redlimit",
    type: "NodeJs Package",
    company: "Kian Janloo",
    isOpenSource: true,
    featured: true,
    description:
      "Open-source Node.js rate-limiting package with configurable windows, Redis support, and middleware integration for Express and NestJS applications.",
    technologies: ["Node.js", "TypeScript", "Redis", "Express", "npm"],
  },
  {
    title: "Rumma Real State",
    image: "/projects/rumma-real-state.png",
    date: "10/2025",
    link: "https://rumma-front-end.vercel.app/",
    demoUrl: "https://rumma-front-end.vercel.app/",
    github: "https://github.com/KianJanloo/rumma-front-end",
    type: "NextJs",
    company: "Rumma Real State",
    featured: true,
    description:
      "Real estate listing platform with property search, filtering, and responsive UI built for a client in the property management sector.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
  },
  {
    title: "Delta Real Estate",
    image: "/projects/delta-real-estate.png",
    date: "07/2025",
    github: "https://github.com/KianJanloo/Delta",
    type: "NextJs",
    company: "Apanco",
    description:
      "Property showcase website with dynamic listings, image galleries, and contact integration for a real estate agency.",
    technologies: ["Next.js", "React", "TypeScript", "CSS Modules"],
  },
  {
    title: "Call Of Duty",
    image: "/projects/call-of-duty.png",
    date: "11/2025",
    link: "https://call-of-duty-gamma.vercel.app",
    demoUrl: "https://call-of-duty-gamma.vercel.app",
    github: "https://github.com/KianJanloo/call-of-duty",
    type: "TypeScript",
    company: "Sepehr Academy",
    description:
      "Interactive gaming-themed web experience with animations, responsive layout, and modern TypeScript architecture.",
    technologies: ["TypeScript", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Burger Cafe",
    image: "/projects/burger-cafe.png",
    date: "08/2025",
    link: "https://burger-cafee.netlify.app",
    demoUrl: "https://burger-cafee.netlify.app",
    github: "https://github.com/KianJanloo/burger-cafe",
    type: "React",
    company: "Sepehr Academy",
    description:
      "Restaurant landing page with menu showcase, online ordering UI, and mobile-first responsive design.",
    technologies: ["React", "JavaScript", "CSS", "Netlify"],
  },
  {
    title: "Todo List",
    image: "/projects/todo-list.png",
    date: "08/2025",
    link: "https://todo-kian.netlify.app/",
    demoUrl: "https://todo-kian.netlify.app/",
    github: "https://github.com/KianJanloo/todo",
    type: "NextJs",
    company: "Kian Janloo",
    description:
      "Task management app with CRUD operations, local persistence, and clean minimalist UI built with Next.js App Router.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Time Craft",
    image: "/projects/time-craft.png",
    date: "09/2025",
    github: "https://github.com/KianJanloo/time-craft",
    link: "https://time-craft-kian.netlify.app/",
    demoUrl: "https://time-craft-kian.netlify.app/",
    type: "NextJs",
    company: "Kian Janloo",
    description:
      "Time-tracking and productivity tool with dashboard analytics, project categorization, and export features.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
  },
]

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "turbo-repo", label: "Monorepo" },
  { id: "nextjs", label: "Next.js" },
  { id: "package", label: "Open Source" },
] as const

export type ProjectFilterId = (typeof projectFilters)[number]["id"]

export function filterProjects(filter: ProjectFilterId): Project[] {
  switch (filter) {
    case "featured":
      return projects.filter((p) => p.featured)
    case "turbo-repo":
      return projects.filter((p) => p.type?.toLowerCase().includes("turbo"))
    case "nextjs":
      return projects.filter((p) => p.type?.toLowerCase().includes("next"))
    case "package":
      return projects.filter((p) => p.isOpenSource)
    default:
      return projects
  }
}
