# NeoLife AI Web Implementation Rules

## Project Scope
- Implement the contents of the NeoLife AI Investment Deck as a real web experience.
- The PDF is a source reference only. Do not show the PDF through `iframe`, `embed`, `object`, browser PDF viewer, or direct PDF navigation as the primary UI.
- Preserve the original deck message, numbers, patent IDs, and contact details. Do not invent new investment claims.
- The source deck has 20 pages. **Ensure all 20 pages are mapped as independent web pages.**

## Architecture & Navigation
- **Multi-page Structure:** The site must not be a single landing page. Instead, build 20 distinct pages that users can explore individually.
- **Navigation Bar (GNB):** Create a top navigation bar (Top Navbar) grouping the pages logically via dropdown menus.
- **Content Visualization:** Do not use pagination (Previous/Next buttons). Instead, visualize the text content of the pages creatively using grid layouts, cards, and icons (e.g., lucide-react) to make the data visually engaging like a real slide deck.
- **Routing:** Use Next.js dynamic or semantic routing (e.g., `/page/[id]` or semantic paths like `/summary`) to manage the 20 pages cleanly.

## Technology
- Use Next.js with TypeScript (App Router).
- Use Tailwind CSS for styling.
- Keep the pages static-first and client-light.

## Verification
- Run tests that assert PDF viewer markup is absent.
- Verify that the Navigation Bar allows access to all 20 pages.
- Run `npm run typecheck` and `npm run build`.

## Navigation Flow Visualization

<div style="font-family: sans-serif; max-width: 800px; margin: 0 auto; background: #f8f9fa; padding: 20px; border-radius: 8px;">
  <h2 style="text-align: center; color: #333;">NeoLife AI 20-Page Navigation Flow</h2>
  <div style="display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 2px solid #ddd; padding-bottom: 10px; justify-content: center; flex-wrap: wrap;">
    <span style="background: #2563eb; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold;">1. Overview</span>
    <span style="background: #16a34a; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold;">2. Market</span>
    <span style="background: #d97706; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold;">3. Product</span>
    <span style="background: #9333ea; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold;">4. Business</span>
    <span style="background: #dc2626; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold;">5. Investment</span>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
    <!-- Overview Group -->
    <div style="background: white; border: 1px solid #bfdbfe; border-top: 4px solid #2563eb; border-radius: 6px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <h3 style="margin-top: 0; color: #1e3a8a; font-size: 16px;">1. Overview</h3>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px;">
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/1" style="text-decoration: none; color: #4b5563;">Page 1: Title / Intro</a></li>
        <li style="padding: 6px 0;"><a href="/page/2" style="text-decoration: none; color: #4b5563;">Page 2: Executive Summary</a></li>
      </ul>
    </div>
    
    <!-- Market Group -->
    <div style="background: white; border: 1px solid #bbf7d0; border-top: 4px solid #16a34a; border-radius: 6px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <h3 style="margin-top: 0; color: #14532d; font-size: 16px;">2. Market</h3>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px;">
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/3" style="text-decoration: none; color: #4b5563;">Page 3: Digital Fortune Market</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/4" style="text-decoration: none; color: #4b5563;">Page 4: Interior Fengshui Market</a></li>
        <li style="padding: 6px 0;"><a href="/page/5" style="text-decoration: none; color: #4b5563;">Page 5: Problem Definition</a></li>
      </ul>
    </div>
    
    <!-- Product Group -->
    <div style="background: white; border: 1px solid #fde68a; border-top: 4px solid #d97706; border-radius: 6px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <h3 style="margin-top: 0; color: #78350f; font-size: 16px;">3. Product</h3>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px;">
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/6" style="text-decoration: none; color: #4b5563;">Page 6: Core Solution</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/7" style="text-decoration: none; color: #4b5563;">Page 7: Service Flow</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/8" style="text-decoration: none; color: #4b5563;">Page 8: Customer Target</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/9" style="text-decoration: none; color: #4b5563;">Page 9: Competitive Landscape</a></li>
        <li style="padding: 6px 0;"><a href="/page/10" style="text-decoration: none; color: #4b5563;">Page 10: AI Tech & Patents</a></li>
      </ul>
    </div>
    
    <!-- Business Group -->
    <div style="background: white; border: 1px solid #e9d5ff; border-top: 4px solid #9333ea; border-radius: 6px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <h3 style="margin-top: 0; color: #581c87; font-size: 16px;">4. Business</h3>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px;">
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/11" style="text-decoration: none; color: #4b5563;">Page 11: Revenue Model</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/12" style="text-decoration: none; color: #4b5563;">Page 12: Revenue Simulation</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/13" style="text-decoration: none; color: #4b5563;">Page 13: Marketing Strategy</a></li>
        <li style="padding: 6px 0;"><a href="/page/14" style="text-decoration: none; color: #4b5563;">Page 14: 3-Year Roadmap</a></li>
      </ul>
    </div>
    
    <!-- Investment Group -->
    <div style="background: white; border: 1px solid #fecaca; border-top: 4px solid #dc2626; border-radius: 6px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <h3 style="margin-top: 0; color: #7f1d1d; font-size: 16px;">5. Investment</h3>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px;">
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/15" style="text-decoration: none; color: #4b5563;">Page 15: Investment Plan</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/16" style="text-decoration: none; color: #4b5563;">Page 16: Tech Competitiveness</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/17" style="text-decoration: none; color: #4b5563;">Page 17: Future Vision</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/18" style="text-decoration: none; color: #4b5563;">Page 18: Investment Points</a></li>
        <li style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="/page/19" style="text-decoration: none; color: #4b5563;">Page 19: Team Capacity</a></li>
        <li style="padding: 6px 0;"><a href="/page/20" style="text-decoration: none; color: #4b5563;">Page 20: Closing / Contact</a></li>
      </ul>
    </div>
  </div>
</div>
