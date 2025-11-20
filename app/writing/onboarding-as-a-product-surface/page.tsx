import type { Metadata } from 'next'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Onboarding as a product surface — boulay.me",
  description: "Onboarding is one of the clearest places to understand your product. It exposes what is essential, what is confusing, and what people need in order to move forward with confidence.",
}

export default function OnboardingAsAProductSurfacePost() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 pt-16 pb-8">

          {/* BREADCRUMB */}
          <nav className="font-mono text-sm text-[#4a6fa5]">
            <Link href="/" className="underline-offset-2">
              Home
            </Link>
            <span className="mx-2 text-neutral-400">/</span>
            <Link href="/writing" className="underline-offset-2">
              Writing
            </Link>
          </nav>

          {/* SKETCH */}
          <div>
            <img src="/sketch_onboarding.svg" alt="" className="w-80 h-auto" />
          </div>

          {/* TITLE */}
          <header>
            <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.3] text-neutral-400">
              <Balancer>Onboarding as a product surface</Balancer>
            </h1>
            <p className="text-xs text-neutral-400 font-mono mt-2 mb-6">
              2025
            </p>
          </header>

          {/* BODY */}
          <article className="mt-2">
            <p className="text-sm leading-relaxed text-neutral-600">
              <Balancer>
                Onboarding is one of the clearest places to understand your product. It exposes what is essential, what is confusing, and what people need in order to move forward with confidence.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                A good onboarding sequence teaches the logic of the product. It shows what to do next, why it matters, and how the product supports the user. When onboarding feels natural, it is usually because the product underneath is coherent.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                A weak onboarding sequence reveals deeper issues. It often reflects unclear positioning, inconsistent mental models, or a product that has not made real decisions about what it wants to be.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                When I design onboarding, I look at what the user is trying to become, not just what they are trying to do. This shift changes everything.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4 font-semibold">
              <Balancer>
                Onboarding is not the front door to the product.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4 font-semibold">
              <Balancer>
                It is the product.
              </Balancer>
            </p>
          </article>

          {/* BACK LINK */}
          <nav className="mt-8">
            <Link
              href="/writing"
              className="font-mono text-sm text-[#4a6fa5] underline-offset-2 cursor-pointer"
            >
              ← back to writing
            </Link>
          </nav>

        </div>
      </main>

      <Footer />
    </>
  );
}
