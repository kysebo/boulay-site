import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'

const posts = [
  {
    slug: "emotional-before-operational",
    title: "Most problems are emotional before they are operational",
    description: "On why fixing strategy and process often fails if you ignore what people are feeling.",
    year: "2025"
  },
  {
    slug: "meetings-as-a-system",
    title: "Meetings as a system, not an event",
    description: "A simple way to see meetings as part of a larger loop: decisions, accountability, and culture.",
    year: "2025"
  },
  {
    slug: "onboarding-as-a-product-surface",
    title: "Onboarding as a product surface",
    description: "Why onboarding is the sharpest place to see how your product, story, and systems really work.",
    year: "2025"
  }
]

export default function WritingPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 pt-16 pb-8">

          {/* BACK LINK */}
          <Link
            href="/"
            className="font-mono text-sm text-[#4a6fa5] underline-offset-2 cursor-pointer"
          >
            ← Home
          </Link>

          {/* TITLE BLOCK */}
          <header>
            <section className="pb-6 mt-8">
              <p className="font-mono uppercase text-xs tracking-[0.15em] font-medium text-neutral-600 mb-5">
                WRITING
              </p>
              <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.1] text-neutral-400">
                <Balancer>Notes on product, leadership, and clarity</Balancer>
              </h1>
              <p className="mt-4 text-base md:text-lg text-neutral-600">
                <Balancer>
                  Short pieces on product, leadership, founder psychology, and the systems underneath how people work.
                </Balancer>
              </p>
            </section>
          </header>

          {/* WRITING LIST */}
          <section className="mt-6 border-t border-neutral-200 pt-12">
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/writing/${post.slug}`}
                    className="text-[#4a6fa5] underline-offset-2 font-medium"
                  >
                    <Balancer>{post.title}</Balancer>
                  </Link>
                  <p className="text-sm leading-relaxed text-neutral-600 mt-1">
                    <Balancer>{post.description}</Balancer>
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 font-mono">
                    {post.year}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* CONTACT */}
          <section className="mt-12">
            <p className="text-sm leading-relaxed text-neutral-600">
              <Balancer>
                If you want to talk about any of this, you can reach me at{' '}
                <a
                  href="mailto:kyleboulay@gmail.com"
                  className="text-[#4a6fa5] underline-offset-2"
                >
                  kyleboulay@gmail.com
                </a>
              </Balancer>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
