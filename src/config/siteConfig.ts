export const siteConfig = {
  name: "Kian Janloo",
  title: "Kian Janloo - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable and performant web applications.",
  url: import.meta.env.VITE_SITE_URL || "https://kian-janloo.vercel.app",
  email: "KianJanloo10@gmail.com",
  resumePath: "/Resume.pdf",
  resumeFilename: "Kian_Janloo_Resume.pdf",
  calendlyUrl: "",
  social: {
    github: "https://github.com/KianJanloo",
    linkedin: "https://www.linkedin.com/in/kian-junloo/",
    email: "mailto:KianJanloo10@gmail.com",
  },
  navItems: [
    { name: "About", href: "#summary", id: "summary" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experiences", id: "experiences" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ],
} as const

export type NavItem = (typeof siteConfig.navItems)[number]
