export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "TechCorp",
    quote:
      "Kian delivered exceptional work on our React dashboard. His attention to detail and proactive communication made the project a breeze. The code quality was outstanding.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Ahmad Reza",
    role: "CTO",
    company: "StartupXYZ",
    quote:
      "One of the most talented developers I've worked with. Kian's full-stack capabilities and clean architecture approach significantly improved our development velocity.",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Maria Garcia",
    role: "UX Designer",
    company: "DesignStudio",
    quote:
      "Kian translates designs into pixel-perfect implementations with incredible accuracy. He also suggests UX improvements that make the product better for users.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "David Chen",
    role: "Engineering Lead",
    company: "CloudBase",
    quote:
      "Kian's NestJS backend work was top-notch. He implemented robust APIs with proper validation, authentication, and documentation. A true professional.",
    rating: 5,
    initials: "DC",
  },
]
