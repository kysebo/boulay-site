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
          {({ openTuner, density }) => {
            const sectionSpacing = density === 'compact' ? 'mt-8' : 'mt-12'
            const headerSpacing = density === 'compact' ? 'mt-6' : 'mt-8'

            return (
              <>
                <Link
                  href="/"
                  className="font-mono text-sm text-[#4a6fa5] underline-offset-2 cursor-pointer"
                >
                  ← Home
                </Link>

                <header className={headerSpacing}>
                  <p className="font-mono uppercase text-xs tracking-[0.15em] font-medium text-neutral-600 mb-5">
                    FRONTEND & UI
                  </p>
                  <h1 className="font-mono text-2xl font-medium leading-[1.1] text-neutral-400">
                    Front end work
                  </h1>
                  <p className="mt-4 text-base text-neutral-600">
                    <Balancer>
                      I like interfaces that feel obvious, calm, and fast. Most of the work is choosing what not to do, then making the rest feel effortless.
                    </Balancer>
                  </p>
                </header>

                <section className={sectionSpacing}>
                  <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
                    How I think about frontend
                  </h2>
                  <p className="text-sm text-neutral-600 mb-4">
                    <Balancer>
                      A few principles that guide the way I build:
                    </Balancer>
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed list-disc pl-4">
                    <li><Balancer>Small, composable components over giant &ldquo;do everything&rdquo; components.</Balancer></li>
                    <li><Balancer>Tailwind and shadcn for speed, consistency, and clear variants.</Balancer></li>
                    <li><Balancer>Minimal, explicit state instead of hidden magic.</Balancer></li>
                    <li><Balancer>Accessibility and keyboard support as a default, not an afterthought.</Balancer></li>
                    <li><Balancer>Micro-interactions only when they reduce friction or ambiguity.</Balancer></li>
                  </ul>
                </section>

                <section className={sectionSpacing}>
                  <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
                    What I can help with
                  </h2>
                  <ul className="space-y-2 text-sm leading-relaxed list-disc pl-4">
                    <li><Balancer>Implementing designs in React, Tailwind, and shadcn.</Balancer></li>
                    <li><Balancer>Building small, reusable component libraries and variants.</Balancer></li>
                    <li><Balancer>Refining flows like onboarding, settings, and dashboards.</Balancer></li>
                    <li><Balancer>Polishing existing UI: spacing, hierarchy, states, and edge cases.</Balancer></li>
                  </ul>
                </section>

                <section className={sectionSpacing}>
                  <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
                    Sandbox
                  </h2>
                  <p className="text-sm text-neutral-600">
                    <button
                      onClick={openTuner}
                      className="link-style text-sm"
                    >
                      A small tuner to play with how this page feels.
                    </button>
                  </p>
                </section>

                <section className={sectionSpacing}>
                  <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
                    Contact
                  </h2>
                  <p className="text-sm">
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
