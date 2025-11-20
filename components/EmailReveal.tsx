'use client'

import { useState } from 'react'

interface EmailRevealProps {
  className?: string
}

export default function EmailReveal({ className }: EmailRevealProps) {
  const [showEmail, setShowEmail] = useState(false)

  if (showEmail) {
    return (
      <a
        href="mailto:kyleboulay@gmail.com"
        className={className}
      >
        kyleboulay@gmail.com
      </a>
    )
  }

  return (
    <button
      onClick={() => setShowEmail(true)}
      className={`link-style ${className || ''}`}
    >
      Click to reveal email
    </button>
  )
}
