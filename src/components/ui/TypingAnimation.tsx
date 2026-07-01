import { useState, useEffect } from "react"

interface TypingAnimationProps {
  strings: string[]
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
  className?: string
}

const TypingAnimation = ({
  strings,
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
  className = "",
}: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState("")
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[stringIndex] ?? ""

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentString.substring(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)

          if (charIndex + 1 === currentString.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          setDisplayText(currentString.substring(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)

          if (charIndex - 1 === 0) {
            setIsDeleting(false)
            setStringIndex((prev) => (prev + 1) % strings.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, stringIndex, strings, speed, deleteSpeed, pauseDuration])

  return (
    <span className={className}>
      {displayText}
      <span className="typing-cursor" />
    </span>
  )
}

export default TypingAnimation
