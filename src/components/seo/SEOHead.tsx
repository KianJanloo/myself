import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEOHead = ({
  title = "Kian Janloo - Full Stack Developer",
  description = "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable and performant web applications.",
  keywords = "Full Stack Developer, React, Next.js, TypeScript, JavaScript, Web Development, Frontend, Backend, Portfolio",
  image = "/og-image.jpg",
  url = import.meta.env.VITE_SITE_URL || "https://myself-wheat.vercel.app",
  type = "website"
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kian Janloo" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Kian Janloo Portfolio" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Kian Janloo",
          "jobTitle": "Full Stack Developer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://www.linkedin.com/in/kian-janloo-6b7473344/",
            "https://github.com/KianJanloo"
          ],
          "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "Tailwind CSS"
          ],
          "alumniOf": "Software Engineering",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEOHead

