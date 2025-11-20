import type { Metadata } from 'next'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'
import EmailReveal from '@/components/EmailReveal'
import BackLink from '@/components/BackLink'

export const metadata: Metadata = {
  title: "About — boulay.me",
  description: "A little context about my work and background.",
}

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 pt-16 pb-8">

          {/* BACK LINK */}
          <BackLink href="/">home</BackLink>

          {/* TITLE BLOCK */}
          <header>
            <section className="pb-6 mt-8">
              <p className="font-mono uppercase text-xs tracking-[0.15em] font-medium text-neutral-600 mb-10">
                ABOUT
              </p>
              {/* PROFILE IMAGE */}
              <img
                src="/kyle.jpg"
                alt="Kyle Boulay"
                className="mb-5 w-24 h-24 rounded-full object-cover filter grayscale"
              />
              <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.3] text-neutral-400">
                A little context
              </h1>
            </section>
          </header>

          {/* BODY CONTENT */}
          <article className="mt-6">
            <p className="text-sm leading-relaxed text-neutral-600">
              <Balancer>
                I am a founder, product leader, and coach from Quebec. I tend to blend systems thinking, emotional clarity, and practical decision support. Most of my work is about helping leaders see what is actually happening, inside their teams and inside themselves.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                I founded Bus.com and helped scale it through messy, high-pressure growth. That experience shaped how I think about leadership, decisions, and the emotional layer underneath the work. It also led me toward coaching founders and building tools for clarity and alignment.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                I created Purposeful to explore a question I have been sitting with for years: how do we help teams think more clearly together. I care about calm systems, honest conversations, and product work that reduces noise instead of adding to it.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                I live in Gatineau, in the Ottawa region.
              </Balancer>
            </p>
          </article>

          {/* CONTACT */}
          <section className="mt-2">
            <p className="text-sm leading-relaxed text-neutral-600">
              <Balancer>
                If you want to reach me, you can email me at{' '}
                <EmailReveal className="text-[#4a6fa5] underline-offset-2" />
              </Balancer>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
