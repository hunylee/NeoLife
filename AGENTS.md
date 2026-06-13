# NeoLife AI Web Implementation Rules

## Project Scope
- Implement the contents of the NeoLife AI Investment Deck as a real web experience.
- The PDF is a source reference only. Do not show the PDF through `iframe`, `embed`, `object`, browser PDF viewer, or direct PDF navigation as the primary UI.
- Preserve the original deck message, numbers, patent IDs, and contact details. Do not invent new investment claims.
- The source deck has 20 pages. Verify the page count before completion.
- This is a prototype. Keep the web page light, simple, and responsive instead of recreating every slide in full detail.

## Navigation
- Do not use a flat page-number bar.
- Use a simple main menu for meaningful web sections, not raw PDF pages.
- Keep navigation short enough for mobile without a complex dropdown.

## Technology
- Use Next.js with TypeScript.
- Keep the page static-first and client-light.
- Prefer structured content arrays for repeated cards, tables, metrics, timelines, and menu items.

## UI Rules
- The first screen must be the actual web implementation, not a landing placeholder and not a PDF viewer.
- Recompose the deck into a small set of web-native sections: hero, KPI panels, service cards, business cards, and CTA/contact block.
- Keep menu controls keyboard-accessible, mobile-friendly, and low-complexity.
- Do not add visible text that changes the investment story.

## Verification
- Run tests that assert PDF viewer markup is absent.
- Verify the PDF page count is 20.
- Run `npm run typecheck`, `npm test`, and `npm run build`.
- Perform code review before final response:
  - no PDF viewer/embed remains
  - no flat page-number bar remains
  - simple responsive main menu exists
  - original numbers, patent IDs, and contact information are preserved
