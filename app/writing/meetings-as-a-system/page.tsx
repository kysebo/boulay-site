import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import Footer from '@/components/Footer'

export default function MeetingsAsASystemPost() {
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
            <img src="/sketch_meetings.svg" alt="" className="w-80 h-auto" />
          </div>

          {/* TITLE */}
          <header>
            <h1 className="font-mono text-2xl md:text-2xl font-medium leading-[1.3] text-neutral-400">
              <Balancer>Meetings as a system, not an event</Balancer>
            </h1>
            <p className="text-xs text-neutral-400 font-mono mt-2 mb-6">
              2025
            </p>
          </header>

          {/* BODY */}
          <article className="mt-2">
            <p className="text-sm leading-relaxed text-neutral-600">
              <Balancer>
                Many teams treat meetings as isolated events. A calendar block. A place to cover updates. But meetings are part of a system. They create the loop through which decisions, accountability, and expectations move.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                When meetings feel chaotic or draining, it is usually because the system around them is broken. Inputs are unclear. Decisions are not documented. Follow through is inconsistent. People show up unprepared because there is no shared rhythm.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                If you view meetings as a system, the questions become simple:
              </Balancer>
            </p>

            <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4 text-neutral-600 mt-4">
              <li>What enters the meeting</li>
              <li>What leaves the meeting</li>
              <li>How are decisions tracked</li>
              <li>How is accountability created</li>
              <li>How does this connect to the next loop</li>
            </ul>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4">
              <Balancer>
                Strong meeting systems reduce anxiety and speed up decision making.
              </Balancer>
            </p>

            <p className="text-sm leading-relaxed text-neutral-600 mt-4 font-semibold">
              <Balancer>
                Bad meetings are not fixed inside the meeting. They are fixed in the system that surrounds them.
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
