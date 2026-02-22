"use client"

import { useEffect, useState } from "react"

const roles = ["Frontend Developer", "React Specialist", "Next.js Engineer"]

export function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)

          if (charIndex + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setText(currentRole.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)

          if (charIndex - 1 === 0) {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <span className="text-primary">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
