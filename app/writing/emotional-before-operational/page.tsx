import type { Metadata } from 'next'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import BackLink from '@/components/BackLink'

export const metadata: Metadata = {
  title: "Most problems are emotional before they are operational — boulay.me",
  description: "When something is not working inside a company, the first instinct is to look for a process or strategy issue. In my experience, most problems start at an emotional level.",
}

export default function EmotionalBeforeOperationalPost() {
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
            <img src="/sketch_emotional.svg" alt="" className="max-w-80 w-full h-auto" />
          </div>

          {/* TITLE */}
          <header>
            <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.3] text-neutral-400">
              <Balancer>Most problems are emotional before they are operational</Balancer>
            </h1>
            <p className="text-xs text-neutral-400 font-mono mt-2 mb-6">
              2025
            </p>
          </header>

          {/* BODY */}
          <article className="mt-2">
            <p className="text-sm leading-relaxed text-neutral-600">
              <Balancer>
                When something is not working inside a company, the first instinct is to look for a process or strategy issue. In my experience, most problems start at an emotional level.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                People get stuck because of fear, pressure, avoidance, or the need to prove something. These emotional states create fog. They lead to unclear decisions, messy communication, and misaligned expectations. When people are not steady, the work is not steady.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                Leaders often try to fix operations without understanding the emotional pattern underneath the behavior. Meetings get redesigned. Plans get rewritten. Teams get restructured. But if the inner state does not shift, the outer work does not shift either.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4 font-semibold">
              <Balancer>
                Clarity comes when emotion is acknowledged, not ignored. Once that layer is seen, operational changes become simple and natural.
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
