import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="font-mono text-sm text-[#4a6fa5]">
      {items.map((item, index) => (
        <span key={item.href}>
          <Link href={item.href} className="underline-offset-2">
            ← {item.label}
          </Link>
          {index < items.length - 1 && (
            <span className="mx-2 text-neutral-400">/</span>
          )}
        </span>
      ))}
    </nav>
  )
}
