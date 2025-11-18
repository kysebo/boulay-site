export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <div className="max-w-[800px] ml-4 px-8 py-16">
        {/* ETHOS */}
        <section className="mb-10">
          <h1 className="font-mono text-lg font-medium uppercase tracking-[0.05em] text-neutral-700 mb-4">
            ETHOS
          </h1>
          <p className="font-mono text-xl">
            I like helping people build well.
          </p>
          <p className="mt-3 text-sm text-neutral-700">
            That means clearer decisions, calmer systems, better products, and healthier teams.
          </p>
        </section>

        {/* WHAT I WORK ON */}
        <section className="mb-8">
          <h2 className="font-mono text-lg font-medium uppercase tracking-[0.05em] text-neutral-700 mb-4">
            What I work on
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>– Product strategy and decision making</li>
            <li>– Coaching for founders, operators, and teams (PCC)</li>
            <li>– Early stage shaping and product narrative</li>
            <li>– UI engineering with React, Tailwind, shadcn</li>
            <li>– Systems for alignment, meetings, and execution</li>
            <li>– Building Purposeful, a platform for team clarity</li>
          </ul>
        </section>

        {/* PREVIOUS WORK */}
        <section className="mb-8">
          <h2 className="font-mono text-lg font-medium uppercase tracking-[0.05em] text-neutral-700 mb-4">
            Previous work
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>– Co founded Bus.com (YC W16). Raised ~&#36;30M, scaled to ~100 people.</li>
            <li>– Led product, operations, and leadership systems during hypergrowth.</li>
            <li>– Coached dozens of founders and executives across North America.</li>
            <li>– Built frameworks for clarity, meetings, and team dynamics.</li>
            <li>– Currently building Purposeful.</li>
          </ul>
        </section>

        {/* HOW I WORK */}
        <section className="mb-8">
          <h2 className="font-mono text-lg font-medium uppercase tracking-[0.05em] text-neutral-700 mb-4">
            How I work
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>– I prefer simple systems and honest conversations.</li>
            <li>– Most problems are emotional before they are operational.</li>
            <li>– Good products come from clarity, not complexity.</li>
            <li>– I move at a steady, sustainable pace.</li>
            <li>– I like working with people who care.</li>
          </ul>
        </section>

        {/* WHAT I'M AVAILABLE FOR */}
        <section className="mb-8">
          <h2 className="font-mono text-lg font-medium uppercase tracking-[0.05em] text-neutral-700 mb-4">
            What I’m available for
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>– Founder and executive coaching</li>
            <li>– Product consulting (strategy, shaping, narrative)</li>
            <li>– Fractional product leadership</li>
            <li>– UI engineering contracts (React, Tailwind, shadcn)</li>
          </ul>
        </section>

        {/* WRITING */}
        <section className="mb-8">
          <h2 className="font-mono text-lg font-medium uppercase tracking-[0.05em] text-neutral-700 mb-4">
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
        <section className="border-t border-neutral-200 pt-6 mt-6">
          <h2 className="font-mono text-lg font-medium uppercase tracking-[0.05em] text-neutral-700 mb-4">
            Contact
          </h2>
          <p className="text-sm">
            Email{" "}
            <a
              href="mailto:kyle@boulay.me"
              className="text-[#4a6fa5] underline-offset-2 hover:underline"
            >
              kyle@boulay.me
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}