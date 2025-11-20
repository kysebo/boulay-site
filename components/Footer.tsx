import EmailReveal from '@/components/EmailReveal'

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-[#111]">
      <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 pb-8">
        <div className="border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-600 mb-2">
            <span className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600">CONTACT:</span> <EmailReveal />
          </p>
          <p className="font-mono text-sm text-neutral-600">
            Kyle Boulay · boulay.me · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
