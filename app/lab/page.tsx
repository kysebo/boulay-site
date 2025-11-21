import type { Metadata } from 'next'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'
import BackLink from '@/components/BackLink'

export const metadata: Metadata = {
  title: "Lab — boulay.me",
  description: "Small experiments and unfinished ideas.",
}

export default function LabPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 pt-16 pb-8">

          {/* BACK LINK */}
          <BackLink href="/">home</BackLink>

          {/* HEADER */}
          <header>
            <section className="pb-6 mt-8">
              <p className="font-mono uppercase text-xs tracking-[0.15em] font-medium text-neutral-600 mb-5">
                LAB
              </p>
              <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.3] text-neutral-400">
                <Balancer>Small experiments and unfinished ideas</Balancer>
              </h1>
              <p className="mt-4 text-base md:text-lg text-neutral-600">
                <Balancer>
                  A quiet place for small experiments, sketches, and ideas that are not ready to be anything more than that.
                </Balancer>
              </p>
            </section>
          </header>

          {/* EXPERIMENTS */}
          <section className="mt-6 border-t border-neutral-200 pt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Experiments
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                Simple front end or product experiments.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>A small UI tuning sandbox for reading clarity <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
              <li><Balancer>A basic loop to explore decision making as a system <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
              <li><Balancer>A tiny prototype around meeting prep and focus <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
            </ul>
          </section>

          {/* SKETCHES */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Sketches
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                Rough diagrams and models I am thinking with.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>A sketch of emotional and operational layers inside a company <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
              <li><Balancer>A loop for how decisions move through a team <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
              <li><Balancer>A diagram for what good onboarding actually teaches <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
            </ul>
          </section>

          {/* NOTES */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Notes
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                Short notes that sit between a thought and a real piece of writing.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>On quiet leadership <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
              <li><Balancer>On complexity, simplicity, and taste <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
              <li><Balancer>On how founders confuse urgency with importance <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
            </ul>
          </section>

          {/* UNFINISHED */}
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
              Unfinished
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              <Balancer>
                Things I might or might not turn into something more later.
              </Balancer>
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
              <li><Balancer>An async decision pattern I keep circling <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
              <li><Balancer>A different way of thinking about one to ones <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
              <li><Balancer>A small prototype for seeing team energy over time <span className="text-neutral-400 font-mono text-[10px]">(private)</span></Balancer></li>
            </ul>
          </section>

          {/* CONTACT */}
          <section className="mt-12">
            <p className="text-sm leading-relaxed text-neutral-600">
              <Balancer>
                If any of this sparks something for you, you can reach me at the email in the footer.
              </Balancer>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
