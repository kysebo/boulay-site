import type { Metadata } from 'next'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'
import BackLink from '@/components/BackLink'
import EmailReveal from '@/components/EmailReveal'

export const metadata: Metadata = {
  title: "Coaching — boulay.me",
  description: "Coaching for leaders who want clarity and steadiness.",
}

export default function CoachingPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <div className="max-w-[800px] px-4 sm:px-6 md:px-8 pt-16 pb-8 mx-auto lg:mx-0 lg:ml-4">

          {/* BACK LINK */}
          <BackLink href="/">home</BackLink>

          {/* TITLE BLOCK */}
          <header>
            <section className="pb-6 mt-8">
              <p className="font-mono uppercase text-xs tracking-[0.15em] font-medium text-neutral-600 mb-5">
                COACHING
              </p>
              <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.3] text-neutral-400">
                For founders and operators
              </h1>
              <p className="mt-4 text-base md:text-lg text-neutral-600">
                <Balancer>
                  I work with leaders who want clarity, steadiness, and a more honest relationship with their work.
                </Balancer>
              </p>
            </section>
          </header>

          {/* HOW I COACH */}
          <section className="mt-6 border-t border-neutral-200 pt-8 sm:pt-10 md:pt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              How I coach
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                My approach blends systems thinking, emotional clarity, and calm, direct conversation. The work is focused on seeing what is actually happening, inside yourself, your team, and your company.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Understanding what drives behavior and decisions</Balancer></li>
              <li><Balancer>Reducing noise and reactivity</Balancer></li>
              <li><Balancer>Clarifying what you want and why</Balancer></li>
              <li><Balancer>Building steadier leadership habits</Balancer></li>
              <li><Balancer>Working with the emotional layer of the work</Balancer></li>
            </ul>
          </section>

          {/* PEOPLE I'VE WORKED WITH */}
          <section className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              People I&apos;ve worked with
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                I&apos;ve coached founders and leaders from inception through Series B and profitability, including teams backed by top venture firms.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Founders navigating growth and complexity</Balancer></li>
              <li><Balancer>Leaders stepping into new roles</Balancer></li>
              <li><Balancer>Executives looking for calm, structured thinking</Balancer></li>
            </ul>
          </section>

          {/* HOW WE CAN WORK TOGETHER */}
          <section className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              How we can work together
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                Two simple formats:
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>1:1 coaching (steady, ongoing work)</Balancer></li>
              <li><Balancer>Deep dive intensives (focused, specific problems)</Balancer></li>
            </ul>
          </section>

          {/* WHAT PEOPLE SAY */}
          <section className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              What people say
            </h2>
            <p className="text-sm leading-relaxed italic mb-2">
              <Balancer>&quot;I think more clearly after every session.&quot;</Balancer>
            </p>
            <p className="text-sm leading-relaxed italic mb-2">
              <Balancer>&quot;I finally understand why I was stuck.&quot;</Balancer>
            </p>
            <p className="text-sm leading-relaxed italic">
              <Balancer>&quot;The conversations are calm, honest, and grounding.&quot;</Balancer>
            </p>
          </section>

          {/* GET IN TOUCH */}
          <section className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Get in touch
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              <Balancer>Email: <EmailReveal /></Balancer>
            </p>
            <p className="text-sm leading-relaxed">
              <Balancer>Book a call: <a href="https://cal.com/kyle" target="_blank" rel="noopener noreferrer" className="text-[#4a6fa5] underline-offset-2 hover:underline">cal.com/kyle</a></Balancer>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
