import { Balancer } from 'react-wrap-balancer'

export default function Home() {
  return (
    <main role='main' aria-labelledby='id' className="min-h-screen bg-[#fafafa] text-[#111]">
      <div className="max-w-[800px] ml-4 px-8 py-16">
        {/* ETHOS */}
        <header>
          <section className="pb-6">
            <p className="font-mono uppercase text-xs tracking-[0.15em] font-medium text-neutral-600 mb-5">
              ETHOS
            </p>
            <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.1] text-neutral-400">
              I like helping people build well.
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-600">
              <Balancer>
                That means clearer decisions, calmer systems, better products, and healthier teams.
              </Balancer>
            </p>
          </section>
        </header>

        {/* WHAT I WORK ON */}
        <section className="mt-6 border-t border-neutral-200 pt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            What I work on
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed max-w-prose list-['–__'] pl-4">
            <li>Product strategy and decision making</li>
            <li>Coaching for founders, operators, and teams (PCC)</li>
            <li>Early stage shaping and product narrative</li>
            <li>UI engineering with React, Tailwind, shadcn</li>
            <li>Systems for alignment, meetings, and execution</li>
            <li>Building Purposeful, a platform for team clarity</li>
          </ul>
        </section>

        {/* PREVIOUS WORK */}
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            Previous work
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
            <li>Co founded Bus.com (YC W16). Raised ~&#36;30M, scaled to ~100 people.</li>
            <li>Led product, operations, and leadership systems during hypergrowth.</li>
            <li>Coached dozens of founders and executives across North America.</li>
            <li>Built frameworks for clarity, meetings, and team dynamics.</li>
            <li>Currently building Purposeful.</li>
          </ul>
        </section>

        {/* HOW I WORK */}
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            How I work
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
            <li>I prefer simple systems and honest conversations.</li>
            <li>Most problems are emotional before they are operational.</li>
            <li>Good products come from clarity, not complexity.</li>
            <li>I move at a steady, sustainable pace.</li>
            <li>I like working with people who care.</li>
          </ul>
        </section>

        {/* WHAT I'M AVAILABLE FOR */}
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            What I’m available for
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
            <li>Founder and executive coaching</li>
            <li>Product consulting (strategy, shaping, narrative)</li>
            <li>Fractional product leadership</li>
            <li>
              <a href="/frontend" className="text-[#4a6fa5] underline-offset-2">UI engineering contracts (React, Tailwind, shadcn)</a>
            </li>
          </ul>
        </section>

        {/* WRITING */}
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            Writing
          </h2>
          <p className="text-sm leading-relaxed mb-2">
            Short essays on product, clarity, founder psychology, and systems thinking.
          </p>
          <a
            href="/writing"
            className="font-mono text-sm text-[#4a6fa5] underline-offset-2 hover:underline"
          >
            Visit writing
          </a>
        </section>

        {/* CONTACT */}
        <section className="border-t border-neutral-200 pt-6 mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            Contact
          </h2>
          <p className="text-sm">
            Email{" "}
            <a
              href="mailto:kyle@boulay.me"
              className="text-[#4a6fa5] underline-offset-2 hover:underline"
            >
              kyleboulay@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}