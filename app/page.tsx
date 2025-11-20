import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'
import EmailReveal from '@/components/EmailReveal'

export default function Home() {

  return (
    <>
    <main role='main' className="min-h-screen bg-[#fafafa] text-[#111]">
      <div className="max-w-[800px] mx-auto md:mx-0 md:ml-4 px-8 pt-16 pb-8">

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
          <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
            <li><Balancer>Product strategy and decision making</Balancer></li>
            <li><Balancer>Coaching for founders, operators, and teams (PCC)</Balancer></li>
            <li><Balancer>Early stage shaping and product narrative</Balancer></li>
            <li><Balancer>UI engineering with React, Tailwind, shadcn</Balancer></li>
            <li><Balancer>Systems for alignment, meetings, and execution</Balancer></li>
            <li><Balancer>Building Purposeful, a platform for team clarity</Balancer></li>
          </ul>
        </section>

        {/* PREVIOUS WORK */}
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            Previous work
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
            <li><Balancer>Co founded Bus.com (YC W16). Raised ~&#36;30M, scaled to ~100 people.</Balancer></li>
            <li><Balancer>Led product, operations, and leadership systems during hypergrowth.</Balancer></li>
            <li><Balancer>Coached dozens of founders and executives across North America.</Balancer></li>
            <li><Balancer>Built frameworks for clarity, meetings, and team dynamics.</Balancer></li>
            <li><Balancer>Currently building Purposeful.</Balancer></li>
          </ul>
        </section>

        {/* HOW I WORK */}
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            How I work
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
            <li><Balancer>I prefer simple systems and honest conversations.</Balancer></li>
            <li><Balancer>Most problems are emotional before they are operational.</Balancer></li>
            <li><Balancer>Good products come from clarity, not complexity.</Balancer></li>
            <li><Balancer>I move at a steady, sustainable pace.</Balancer></li>
            <li><Balancer>I like working with people who care.</Balancer></li>
          </ul>
        </section>

        {/* WHAT I'M AVAILABLE FOR */}
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            What I’m available for
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
            <li><Balancer>Founder and executive coaching</Balancer></li>
            <li><Balancer>Product consulting (strategy, shaping, narrative)</Balancer></li>
            <li><Balancer>Fractional product leadership</Balancer></li>
            <li>
              <Balancer>
                <a href="/frontend" className="text-[#4a6fa5] underline-offset-2">UI engineering contracts (React, Tailwind, shadcn)</a>
              </Balancer>
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
            className="text-sm text-[#4a6fa5] underline-offset-2"
          >
            Visit writing
          </a>
        </section>

        {/* CONTACT */}
        <section className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-[0.08em] font-medium text-neutral-600 mb-3">
            Contact
          </h2>
          <p className="text-sm">
            <EmailReveal />
          </p>
        </section>
      </div>
    </main>

    <Footer />
  </>
  );
}