import type { Metadata } from 'next'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import BackLink from '@/components/BackLink'

export const metadata: Metadata = {
  title: "Onboarding as a product surface — boulay.me",
  description: "Onboarding is one of the clearest places to understand your product. It exposes what is essential, what is confusing, and what people need in order to move forward with confidence.",
}

export default function OnboardingAsAProductSurfacePost() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <div className="max-w-[800px] px-4 sm:px-6 md:px-8 pt-16 pb-8 mx-auto lg:mx-0 lg:ml-4">

          {/* BREADCRUMB */}
          <Breadcrumb items={[
            { label: "home", href: "/" },
            { label: "writing", href: "/writing" }
          ]} />

          {/* SKETCH */}
          <div>
            <img src="/sketch_onboarding.svg" alt="" className="max-w-80 w-full h-auto" />
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
          <div className="mt-8">
            <BackLink href="/writing">writing</BackLink>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
