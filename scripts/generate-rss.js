import { writeFileSync } from "fs"
import { join } from "path"

const blogPosts = [
  {
    title: "Optimizing React Performance: A Practical Guide",
    date: "2026-06-15",
    excerpt:
      "Learn how to identify and fix performance bottlenecks in React applications using memoization, code splitting, and profiling tools.",
    tags: ["React", "Performance", "TypeScript"],
    readTime: 8,
  },
  {
    title: "Understanding SSR vs SSG in Next.js",
    date: "2026-05-20",
    excerpt:
      "A deep dive into server-side rendering and static site generation in Next.js, and when to use each approach.",
    tags: ["Next.js", "SSR", "SSG"],
    readTime: 6,
  },
  {
    title: "Advanced TypeScript Patterns for Backend Development",
    date: "2026-04-10",
    excerpt:
      "Explore discriminated unions, template literals, and conditional types to build type-safe NestJS applications.",
    tags: ["TypeScript", "NestJS", "Backend"],
    readTime: 10,
  },
]

const siteUrl = "https://myself-wheat.vercel.app"

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kian Janloo - Blog</title>
    <description>Thoughts, tutorials, and insights from my development journey</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${blogPosts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/#blog</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${post.tags.join(", ")}</category>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

const outPath = join(process.cwd(), "public", "rss.xml")
writeFileSync(outPath, rss, "utf-8")
console.log(`RSS feed generated at ${outPath}`)
