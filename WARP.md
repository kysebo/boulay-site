# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16.0.3 application using TypeScript, React 19, and Tailwind CSS v4. The project uses the App Router architecture.

## Common Development Commands

### Development
```bash
npm run dev         # Start development server on http://localhost:3000
```

### Build & Production
```bash
npm run build       # Create production build
npm run start       # Start production server
```

### Code Quality
```bash
npm run lint        # Run ESLint for code linting
```

### Package Management
The project supports multiple package managers. Use npm by default:
```bash
npm install         # Install dependencies
npm install [pkg]   # Add new dependency
npm install -D [pkg] # Add new dev dependency
```

## Architecture & Structure

### App Router Structure
- **`/app`**: Main application directory using Next.js App Router
  - `layout.tsx`: Root layout with Geist fonts and global styles
  - `page.tsx`: Home page component
  - `globals.css`: Global CSS with Tailwind directives
  
### Styling
- Uses Tailwind CSS v4 with PostCSS
- Dark mode support via Tailwind's dark: prefix
- Custom font setup using next/font with Geist and Geist_Mono

### TypeScript Configuration
- Strict TypeScript configuration enabled
- Path aliases configured for imports
- Next.js type definitions included

### Key Technologies
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 
- **Fonts**: Geist font family via next/font
- **Linting**: ESLint with next config

## Development Patterns

### Component Development
- Components should be placed in the `/app` directory following Next.js App Router conventions
- Use TypeScript for all new components
- Follow existing Tailwind class patterns for consistency

### Image Handling
- Use `next/image` for optimized image loading
- Images are stored in `/public` directory
- Dark mode image variants handled via `dark:invert` class

### Routing
- File-based routing in `/app` directory
- Use `page.tsx` for route pages
- Use `layout.tsx` for shared layouts

## Build Output
- Production build outputs to `.next` directory
- Static assets served from `/public`