import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaCalendar, FaClock, FaTag } from "react-icons/fa"
import type { BlogPost } from "@/utils/service/blog/blog"
import { useLanguage } from "@/i18n/LanguageContext"

interface BlogModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
}

const BlogModal = ({ post, isOpen, onClose }: BlogModalProps) => {
  const { t } = useLanguage()

  return (
    <AnimatePresence>
      {isOpen && post && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 z-[81] overflow-hidden"
          >
            <div className="h-full glass rounded-2xl border border-white/10 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary truncate">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 mt-2 text-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {post.readTime} {t("blog.readTime")}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 p-2 rounded-xl hover:bg-white/10 transition-colors text-text-muted hover:text-text-primary cursor-pointer"
                  aria-label={t("blog.close")}
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20"
                    >
                      <FaTag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="prose prose-invert max-w-none text-text-primary/90 leading-relaxed [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-text-primary [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BlogModal
