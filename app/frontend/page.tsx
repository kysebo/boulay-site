'use client'

import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import DesignTunerContainer from '@/components/DesignTunerContainer'
import Footer from '@/components/Footer'
import EmailReveal from '@/components/EmailReveal'

export default function Frontend() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <DesignTunerContainer>
          {({ openTuner, density, font }) => {
            const sectionSpacing = density === 'compact' ? 'mt-8' : 'mt-12'
            const headerSpacing = density === 'compact' ? 'mt-6' : 'mt-8'
            const titleFont = font === 'mono' ? 'font-mono' : 'font-sans'
            const bodyFont = font === 'mono' ? '' : ''

            return (
              <>
                <Link
                  href="/"
                  className="font-mono text-sm text-[#4a6fa5] underline-offset-2 cursor-pointer"
                >
                  ← Home
                </Link>

                <header className={headerSpacing}>
                  <p className={`${titleFont} uppercase text-xs tracking-[0.15em] font-medium text-neutral-600 mb-5`}>
                    FRONTEND & UI
                  </p>
                  <h1 className={`${titleFont} text-2xl font-medium leading-[1.1] text-neutral-400`}>
                    I like interfaces that feel obvious, calm, and fast.
                  </h1>
                  <p className={`mt-4 text-base text-neutral-600 ${bodyFont}`}>
                    <Balancer>
                      Most of the work is choosing what not to do, then making the rest feel effortless.
                    </Balancer>
                  </p>
                </header>

                <section className={sectionSpacing}>
                  <h2 className={`${titleFont} text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3`}>
                    How I think about frontend
                  </h2>
                  <p className={`text-sm text-neutral-600 mb-4 ${bodyFont}`}>
                    <Balancer>
                      A few principles that guide the way I build:
                    </Balancer>
                  </p>
                  <ul className={`space-y-2 text-sm leading-relaxed list-['–__'] pl-4 ${bodyFont}`}>
                    <li><Balancer>Small, composable components over giant &ldquo;do everything&rdquo; components.</Balancer></li>
                    <li><Balancer>Tailwind and shadcn for speed, consistency, and clear variants.</Balancer></li>
                    <li><Balancer>Minimal, explicit state instead of hidden magic.</Balancer></li>
                    <li><Balancer>Accessibility and keyboard support as a default, not an afterthought.</Balancer></li>
                    <li><Balancer>Micro-interactions only when they reduce friction or ambiguity.</Balancer></li>
                  </ul>
                </section>

                <section className={sectionSpacing}>
                  <h2 className={`${titleFont} text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3`}>
                    What I can help with
                  </h2>
                  <ul className={`space-y-2 text-sm leading-relaxed list-['–__'] pl-4 ${bodyFont}`}>
                    <li><Balancer>Implementing designs in React, Tailwind, and shadcn.</Balancer></li>
                    <li><Balancer>Building small, reusable component libraries and variants.</Balancer></li>
                    <li><Balancer>Refining flows like onboarding, settings, and dashboards.</Balancer></li>
                    <li><Balancer>Polishing existing UI: spacing, hierarchy, states, and edge cases.</Balancer></li>
                  </ul>
                </section>

                <section className={sectionSpacing}>
                  <h2 className={`${titleFont} text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3`}>
                    Relevant Experience
                  </h2>
                  <ul className={`space-y-2 text-sm leading-relaxed list-['–__'] pl-4 ${bodyFont}`}>
                    <li><Balancer>Designed and shipped Purposeful&rsquo;s personalized, multi-step onboarding flow (Next.js + Tailwind + shadcn), which has become one of our most consistently praised product surfaces.</Balancer></li>
                    <li><Balancer>Conceived and product-led the first real-time charter bus booking flow at Bus.com — a novel onboarding + quoting experience that shifted a legacy industry into instant self-serve.</Balancer></li>
                    <li><Balancer>Oversaw and guided frontend implementation across multiple Bus.com product surfaces, working closely with FE teams to deliver UX patterns I designed.</Balancer></li>
                    <li><Balancer>Previously worked as a frontend developer at Lightspeed POS (modern JS + UI workflows).</Balancer></li>
                    <li><Balancer>Earlier in my career, created onboarding systems and internal tools that reached production (PHP backend + custom frontend scripts), including one used across ~10 businesses.</Balancer></li>
                  </ul>
                </section>

                <section className={sectionSpacing}>
                  <h2 className={`${titleFont} text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3`}>
                    Sandbox
                  </h2>
                  <p className={`text-sm text-neutral-600 ${bodyFont} text-left`}>
                    <button
                      onClick={openTuner}
                      className="link-style text-sm"
                    >
                      A small tuner to play with how this page feels.
                    </button>
                  </p>
                </section>

                <section className={sectionSpacing}>
                  <h2 className={`${titleFont} text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3`}>
                    Contact
                  </h2>
                  <p className={`text-sm ${bodyFont}`}>
                    <EmailReveal />
                  </p>
                </section>
              </>
            )
          }}
        </DesignTunerContainer>
      </main>
      <Footer />
    </>
  )
}
