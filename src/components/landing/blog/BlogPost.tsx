import { motion } from "framer-motion"
import { FaCalendar, FaClock, FaTag, FaArrowRight } from "react-icons/fa"
import type { BlogPost as BlogPostType } from "@/utils/service/blog/blog"
interface BlogPostCardProps {
  post: BlogPostType
  index: number
  onClick: () => void
}

const BlogPostCard = ({ post, index, onClick }: BlogPostCardProps) => {

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group glass rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-500 cursor-pointer relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-accent-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-medium"
            >
              <FaTag className="w-2 h-2" />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300 mb-3 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-text-muted mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <FaCalendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="w-3 h-3" />
              {post.readTime} min read
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read More
            <FaArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogPostCard
