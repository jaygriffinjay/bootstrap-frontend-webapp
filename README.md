# Bootstrap Frontend Webapp

My personal starter template for frontend React + TypeScript webapps.

## What's Here

**Core Setup**
- Vite 
- React 19 + TypeScript
- Emotion for styling
- React Router for navigation
- Dev-only routes that disappear in production

**Component Library**

Content components:
- Headings (H1-H6), Paragraph, Text
- Lists, Links, Code blocks with syntax highlighting
- Blockquote, Callout (info/success/warning/error), Divider
- Layout: Stack, Inline, Box, Container, Flex

**Theme System**
Pick colors, spacing, shadows, and border radius. Everything else is generated from a few config values. Includes a visual theme editor at `/theme-editor`.

**Code Blocks**
Prism.js + VSC Dark Plus theme. Copy button. Language labels.

## Architecture

**Routes as data** - Define routes in `routes.ts`, automatically tree-shake dev-only routes in production.

**Feature folders** - Each page gets its own folder in `src/pages/`.

**No CSS files** - Everything is styled via Emotion. See `Primitives.tsx` for the component library.

## Tech Stack

- Vite
- React 19
- TypeScript
- Emotion (CSS-in-JS)
- Radix UI (unstyled accessible components)
- React Router
- Prism.js (syntax highlighting)

## Dev Routes

These routes exist only when running `npm run dev`:
- `/theme-editor` - Visual theme customization playground
- `/docs` - Project documentation and philosophy

Production builds (`npm run build`) automatically exclude these pages and their code.

## License

MIT - Copy it, modify it, use it however you want.
