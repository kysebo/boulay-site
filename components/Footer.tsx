import EmailReveal from '@/components/EmailReveal'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-[#111]">
      <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 pb-8">
        <div className="border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-600 mb-2">
            <span className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600">CONTACT:</span> <EmailReveal />
          </p>
          <p className="font-mono text-sm text-neutral-600 flex items-center gap-4 mt-6">
            <Link href="/" aria-label="Return to home page" className="no-underline hover:opacity-80 transition-opacity [&::after]:hidden">
              <span className="inline-block bg-[#fafafa] rounded-md border border-neutral-200 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                  <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                        fontFamily="JetBrains Mono, monospace"
                        fontSize="180" fill="#111">b</text>
                </svg>
              </span>
            </Link>
            Kyle Boulay · boulay.me · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
