import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'

export default function ProductPage() {
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

          {/* HEADER */}
          <header>
            <section className="pb-6 mt-8">
              <p className="font-mono uppercase text-xs tracking-[0.15em] font-medium text-neutral-600 mb-5">
                PRODUCT
              </p>
              <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.1] text-neutral-400">
                Product leadership and strategic clarity
              </h1>
              <p className="mt-4 text-base md:text-lg text-neutral-600">
                <Balancer>
                  I work with founders and teams on the deeper layer beneath product: clarity, alignment, and the systems that shape how decisions get made. My approach is calm, practical, and grounded in real experience building companies, leading teams, and navigating messy, high-pressure environments.
                </Balancer>
              </p>
            </section>
          </header>

          {/* SECTION 1: How I think about product */}
          <section className="mt-6 border-t border-neutral-200 pt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              How I think about product
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                Product is not just features. It's the intersection of strategy, communication, and team psychology. Good product work comes from reducing noise, seeing systems clearly, and making decisions from a steady place.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Product is a communication system first, a planning system second, and a feature system third.</Balancer></li>
              <li><Balancer>Most "product problems" are alignment or clarity problems in disguise.</Balancer></li>
              <li><Balancer>Teams move faster when the founder is less entangled in every decision.</Balancer></li>
              <li><Balancer>Calm, honest conversations create better strategy than frameworks alone.</Balancer></li>
              <li><Balancer>A good meeting cadence can solve more problems than a roadmap overhaul.</Balancer></li>
            </ul>
          </section>

          {/* SECTION 2: What I help with */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              What I help with
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                I work with founders and teams who need clarity, alignment, or a steady product partner.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Shaping early product (positioning, narrative, first surfaces).</Balancer></li>
              <li><Balancer>Strategy work: what to build, what not to build, and why.</Balancer></li>
              <li><Balancer>Running or redesigning product cadences and decision rituals.</Balancer></li>
              <li><Balancer>Translating founder instinct into clear product direction.</Balancer></li>
              <li><Balancer>Coaching emerging product leaders.</Balancer></li>
              <li><Balancer>Creating systems for meetings, alignment, and accountability.</Balancer></li>
              <li><Balancer>Quietly stepping in as a fractional partner when things feel chaotic.</Balancer></li>
            </ul>
          </section>

          {/* SECTION 3: Experience */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Experience
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Conceived and product-led the first real-time charter bus booking flow at Bus.com — a novel onboarding and quoting experience that shifted a legacy industry to instant self-serve.</Balancer></li>
              <li><Balancer>Led product, operations, and leadership systems during hypergrowth as Bus.com scaled to ~100 people.</Balancer></li>
              <li><Balancer>Built frameworks for clarity, alignment, and team dynamics that I still use with founders today.</Balancer></li>
              <li><Balancer>Designed and shipped Purposeful's personalized, multi-step onboarding flow (Next.js + Tailwind + shadcn), one of our most consistently praised product surfaces.</Balancer></li>
              <li><Balancer>Coached and advised dozens of founders and operators on product decisions, team dynamics, and strategic direction.</Balancer></li>
            </ul>
          </section>

          {/* SECTION 4: How we can work together */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              How we can work together
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                Two main ways I usually help:
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>Product consulting — strategy, shaping, narrative, and clarity work for founders and early teams.</Balancer></li>
              <li><Balancer>Fractional product leadership — standing in as a calm, steady product partner for a period of time.</Balancer></li>
            </ul>
            <p className="text-sm leading-relaxed mt-4">
              <Balancer>
                Both formats focus on clarity, honesty, and building systems that help teams make better decisions with less noise.
              </Balancer>
            </p>
          </section>

          {/* SECTION 5: Get in touch */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Get in touch
            </h2>
            <p className="text-sm leading-relaxed">
              <Balancer>
                If you want help with product strategy or product leadership, you can reach me at{' '}
                <a href="mailto:kyle@boulay.me" className="text-[#4a6fa5] underline-offset-2">
                  kyle@boulay.me
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
