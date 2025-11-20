import type { Metadata } from 'next'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'
import EmailReveal from '@/components/EmailReveal'

export const metadata: Metadata = {
  title: "Coaching — boulay.me",
  description: "Coaching for leaders who want clarity and steadiness.",
}

export default function CoachingPage() {
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
          <section className="mt-6 border-t border-neutral-200 pt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              How I coach
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                My coaching blends systems thinking, emotional clarity, and practical decision support. The work is grounded, direct, and centered on helping you see what's actually happening: inside yourself, your team, and your company.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Calm, honest conversations that reduce noise.</Balancer></li>
              <li><Balancer>Mapping what's actually driving behavior and decisions.</Balancer></li>
              <li><Balancer>Seeing the emotional layer beneath operational issues.</Balancer></li>
              <li><Balancer>Using systems language to create clarity and steady execution.</Balancer></li>
              <li><Balancer>Working on mindset, identity, and leadership habits.</Balancer></li>
            </ul>
          </section>

          {/* WHO I WORK WITH */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Who I work with
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                I coach founders, executives, and operators who are carrying real weight: people who are building, leading teams, or navigating inflection points.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Early-stage founders (seed to Series B).</Balancer></li>
              <li><Balancer>Experienced operators stepping into leadership roles.</Balancer></li>
              <li><Balancer>Executives looking for calm, structured thinking.</Balancer></li>
              <li><Balancer>People in transitions (role changes, identity reorientation, company pivots).</Balancer></li>
            </ul>
          </section>

          {/* WHAT WE WORK ON */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              What we work on
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                The themes vary, but they orbit around clarity, decision-making, and personal steadiness.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Getting clear on what you actually want (and what you don't).</Balancer></li>
              <li><Balancer>Making decisions without spinning.</Balancer></li>
              <li><Balancer>Leading teams with more steadiness and less reactivity.</Balancer></li>
              <li><Balancer>Building systems for accountability and alignment.</Balancer></li>
              <li><Balancer>Navigating identity shifts that come with growth.</Balancer></li>
            </ul>
          </section>

          {/* HOW WE WORK TOGETHER */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              How we work together
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                I typically work with people in one of two formats:
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>1:1 coaching (twice monthly) for steady, ongoing work.</Balancer></li>
              <li><Balancer>Deep-dive intensives for specific problems or transitions.</Balancer></li>
            </ul>
          </section>

          {/* WHY PEOPLE WORK WITH ME */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Why people work with me
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>I give honest, non-anxious reflections without inflating drama.</Balancer></li>
              <li><Balancer>I've built and led teams through chaos and hypergrowth.</Balancer></li>
              <li><Balancer>I understand founder psychology, because I've lived it.</Balancer></li>
              <li><Balancer>I help people see patterns they've been living inside for years.</Balancer></li>
              <li><Balancer>The work feels calm, direct, and grounding.</Balancer></li>
            </ul>
          </section>

          {/* WHAT PEOPLE SAY */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              What people say
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li className="italic"><Balancer>"I think more clearly after every session."</Balancer></li>
              <li className="italic"><Balancer>"I finally understand why I was stuck."</Balancer></li>
              <li className="italic"><Balancer>"The conversations are calm, honest, and transformative."</Balancer></li>
            </ul>
          </section>

          {/* GET IN TOUCH */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Get in touch
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Email: <EmailReveal />
            </p>
            <p className="text-sm leading-relaxed">
              Or book a time to speak directly:{' '}
              <a href="https://cal.com/kyle" target="_blank" rel="noopener noreferrer" className="text-[#4a6fa5] underline-offset-2">
                cal.com/kyle
              </a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
