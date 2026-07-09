export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readTime: number
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "react-performance",
    title: "Optimizing React Performance: A Practical Guide",
    date: "2026-06-15",
    excerpt:
      "Learn how to identify and fix performance bottlenecks in React applications using memoization, code splitting, and profiling tools.",
    tags: ["React", "Performance", "TypeScript"],
    readTime: 8,
    content: `
      <p>React applications can quickly become sluggish as they grow. In this guide, I'll share practical techniques I've used in production to keep apps fast and responsive.</p>
      <h3>1. Use React.memo Strategically</h3>
      <p>Don't memo everything — profile first. Wrap components that receive the same props frequently but render expensive subtrees.</p>
      <h3>2. Code Split with React.lazy</h3>
      <p>Split your routes and heavy components. A 2MB bundle hurts first paint more than you think.</p>
      <h3>3. Virtualize Long Lists</h3>
      <p>When rendering 1000+ items, use react-window or react-virtuoso to only mount visible items.</p>
      <h3>4. Profile with React DevTools</h3>
      <p>The profiler tab shows exactly which components re-render and why. Start there before guessing.</p>
    `,
  },
  {
    id: "nextjs-ssr",
    title: "Understanding SSR vs SSG in Next.js",
    date: "2026-05-20",
    excerpt:
      "A deep dive into server-side rendering and static site generation in Next.js, and when to use each approach.",
    tags: ["Next.js", "SSR", "SSG"],
    readTime: 6,
    content: `
      <p>Next.js offers multiple rendering strategies. Choosing the right one impacts performance, SEO, and developer experience.</p>
      <h3>Server-Side Rendering (SSR)</h3>
      <p>Pages rendered on every request. Best for dynamic content that changes frequently — dashboards, personalized pages, real-time data.</p>
      <h3>Static Site Generation (SSG)</h3>
      <p>Pages built at build time. Perfect for content that doesn't change often — blogs, marketing pages, documentation.</p>
      <h3>Incremental Static Regeneration (ISR)</h3>
      <p>The best of both worlds: static pages that revalidate in the background. Great for e-commerce product pages.</p>
    `,
  },
  {
    id: "typescript-patterns",
    title: "Advanced TypeScript Patterns for Backend Development",
    date: "2026-04-10",
    excerpt:
      "Explore discriminated unions, template literals, and conditional types to build type-safe NestJS applications.",
    tags: ["TypeScript", "NestJS", "Backend"],
    readTime: 10,
    content: `
      <p>TypeScript's type system is incredibly powerful. Here are patterns I use daily in NestJS backend projects.</p>
      <h3>Discriminated Unions for State Machines</h3>
      <p>Model API responses, order states, or any finite state machine with discriminated unions for exhaustive handling.</p>
      <h3>Template Literal Types for API Routes</h3>
      <p>Ensure route strings match your API contract at compile time.</p>
      <h3>Conditional Types for Database Queries</h3>
      <p>Build query builders that return correctly typed results based on input.</p>
    `,
  },
]
