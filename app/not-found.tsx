import Link from 'next/link'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 py-16">
          <h1 className="font-mono text-2xl font-medium text-neutral-400 mb-4">
            Page not found
          </h1>
          <p className="text-sm text-neutral-600 mb-6">
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="font-mono text-sm text-[#4a6fa5] underline-offset-2"
          >
            ← back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
