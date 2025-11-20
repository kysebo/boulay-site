# boulay.me - Architecture and Style Guide

This document defines how boulay.me should be structured and implemented.

The goal is a calm, text focused personal site. It should feel closer to a well written README than a marketing page.

--

## Intent

boulay.me should feel like a clear, quiet README written by a thoughtful founder.
Text-first, minimal, no marketing gloss, no personal branding theatrics.
The homepage especially should stay simple, calm, and serious – closer to OG Silicon Valley personal sites than a portfolio or SaaS landing page.
Any changes should preserve this tone and level of restraint.

---

## Purpose

- Present Kyle's work and interests with clarity and humility.
- Make it easy for someone to understand:
  - what he works on
  - what he has done
  - how he works
  - how to contact or work with him
- Keep the implementation small, readable, and easy to extend later.

---

## Tech Stack

- Framework: Next.js with the App Router.
- Language: TypeScript.
- Styling: Tailwind CSS.
- Components: Simple React function components. shadcn/ui may be added later if there is a clear need, not by default.
- Hosting: Vercel.

Do not add new dependencies without an explicit reason.

---

## Layout and Structure

- Max content width around 800px.
- Content is centered with generous whitespace around it.
- Pages are mostly vertical stacks of sections, not complex layouts.
- No separate global navigation bar for now.
- The home page is the main entry point. Secondary pages:
  - `/writing`
  - `/writing/[slug]`
  - `/now` or `/uses` if added later

All pages should feel visually consistent with the home page.

---

## Pages and Components

### App structure

- `app/layout.tsx`
  - Defines the HTML shell, `<head>` metadata, global fonts, and base layout.
  - Should remain small and focused.

- `app/page.tsx`
  - Home page.
  - Composes higher level components, does not contain large blocks of repeated markup.

- `app/writing/page.tsx`
  - Writing index page that lists posts.

- `app/writing/[slug]/page.tsx`
  - Individual writing page, rendered from MDX or a similar content source when that is introduced.

### Components

- Shared components live in a `components` folder at the project root or under `app/components`.
- Typical components:
  - `Section` for labeled content blocks
  - `Prose` or similar for styling MDX content
  - Any other reusable layout primitives

Pages should mostly compose these components rather than reimplementing similar markup.

---

## Styling

- Use Tailwind CSS utility classes only.
- Prefer Tailwind spacing and typography scale instead of arbitrary values.
- Aim for:
  - monospace for headings and labels
  - simple sans serif for body text
  - neutral color palette (grays and off white with a single link color)

Avoid:

- gradients
- drop shadows
- card chrome
- icons and decorative images

Unless specifically requested for a particular use case.

### List Styling

Lists across the site use a dash-only bullet pattern for visual consistency:

- Tailwind class: `list-['–__']` (en-dash followed by two underscores)
- Applied to all `<ul>` elements with descriptive content
- Example usage:
  ```tsx
  <ul className="space-y-2 text-sm leading-relaxed list-['–__'] pl-4">
    <li><Balancer>Item one</Balancer></li>
    <li><Balancer>Item two</Balancer></li>
  </ul>
  ```
- The en-dash (`–`, U+2013) is used instead of bullet points (`•`) or hyphens (`-`)
- Always include `pl-4` for proper left padding
- Use `space-y-2` for spacing between list items
- Wrap long items with `<Balancer>` for better typography

This pattern applies to all pages: home, coaching, product, frontend, and writing posts.

---

## Behavior and Components

- Default to server components.
- Use client components only when interactive behavior is required and keep them small and isolated.
- No complex global state or context for this site as it stands.
- No analytics, third party widgets, or heavy client side JavaScript unless explicitly added later.

Links should be simple `<a>` tags or Next.js `<Link>` where appropriate.

---

## Coupling and Code Organization

- Page files should be thin. They mostly:
  - import components
  - compose sections
  - provide content
- Shared UI lives in `components`. Do not import one page file into another.
- If two pages start to share repeated patterns of markup, extract a component for that pattern.
- Keep helpers pure and simple. Utility functions can live in `lib` or `utils` as needed.

The code should be easy to read in one pass without heavy indirection.

---

## Content and Writing

- Writing content will eventually live in MDX files (or a similar format).
- Suggested structure:
  - `content/writing/slug.mdx`
- Each post should include:
  - title
  - date
  - short description or summary
- The writing index page:
  - lists posts in reverse chronological order
  - shows title, short description, and date
  - links to `/writing/[slug]`

Until MDX is wired up, hard coded arrays of posts are acceptable as a temporary step.

---

## Git and Branching

- `main` branch:
  - always deployable
  - reflects what is live on boulay.me

- Feature branches:
  - named `feature/...` for new pages or changes
  - examples:
    - `feature/writing-index`
    - `feature/writing-mdx`
    - `feature/now-page`

Flow:

1. Create feature branch.
2. Implement changes.
3. Commit small, focused changes.
4. Merge to `main` when the branch is clean.
5. Vercel deploys `main`.

---

## Using AI (Cursor or Claude) on this project

When using AI to generate or modify code:

- Mention that this project follows `ARCHITECTURE.md` and ask the model to follow it.
- Ask the model to:
  - keep page files thin
  - reuse `Section` or other existing components if possible
  - match the existing Tailwind and typography patterns

Examples:

- "Implement `app/writing/page.tsx` using the conventions in ARCHITECTURE.md. Use the same layout and Section component style as the home page."
- "Refactor this page to match the layout and styling rules in ARCHITECTURE.md. Do not add new dependencies."

AI should help with implementation details, not redefine the architecture or visual language.

---

## Design and Tone

The site should feel:

- quiet
- thoughtful
- understated
- written by someone who has actually built things

Copy and layout choices should aim for clarity and honesty rather than self promotion.