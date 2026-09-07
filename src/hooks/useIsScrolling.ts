import { useEffect, useState } from "react"

/** Tracks whether the user is actively scrolling — used to pause expensive animations. */
export function useIsScrolling(delayMs = 150) {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const onScroll = () => {
      setIsScrolling(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setIsScrolling(false), delayMs)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      clearTimeout(timeout)
    }
  }, [delayMs])

  return isScrolling
}
