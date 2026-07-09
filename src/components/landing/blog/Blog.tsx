import { useState } from "react"
import BlogPostCard from "./BlogPost"
import BlogModal from "./BlogModal"
import { blogPosts } from "@/utils/service/blog/blog"

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[number] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePostClick = (post: typeof blogPosts[number]) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <BlogPostCard
            key={post.id}
            post={post}
            index={idx}
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>
      <BlogModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Blog
