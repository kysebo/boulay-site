import Link from 'next/link'

interface BackLinkProps {
  href: string
  children: React.ReactNode
}

export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <nav>
      <Link
        href={href}
        className="font-mono text-sm text-[#4a6fa5] underline-offset-2 cursor-pointer"
      >
        ← {children}
      </Link>
    </nav>
  )
}
