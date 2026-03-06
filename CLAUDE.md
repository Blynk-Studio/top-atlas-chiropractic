# SCOUT-008 BUILD TASK: Top Atlas Chiropractic
## Dr. Shelley Lorenzen — NUCCA Upper Cervical Chiropractor — Austin, TX

You are building a premium Next.js website for Dr. Shelley Lorenzen and her practice, Top Atlas Chiropractic in Austin, TX. This is a Blynk Studio client site. Make it exceptional.

---

## ABOUT DR. SHELLEY (bake this into the copy throughout)

- Raised in Colfax, Wisconsin — small town, no stop signs, more cows than people
- High school athlete: cross country, basketball, track
- Studied Biology at UW-La Crosse, attended Palmer College of Chiropractic (Davenport, Iowa)
- Discovered NUCCA at a Chicago conference in 2003
- Joined Back N Balance Austin, TX in 2006
- After 19 years, launched her own solo practice: Top Atlas Chiropractic in 2025
- Fitness instructor at The Lagree Studio in Austin for 7+ years
- Yellow lab named Arjen, 16 chickens, 3 ducks
- Passionate about keeping athletes performing, runners on the trail, and getting people out of pain
- $575 new patient / $85 follow-up — cash only, no insurance

---

## NUCCA INTELLIGENCE (use this for copy accuracy)

NUCCA = National Upper Cervical Chiropractic Association. The most specialized chiropractic technique focused entirely on the C1 vertebra (the atlas — the topmost bone in the spine, where the skull meets the neck). 

What NUCCA treats: chronic headaches, migraines, vertigo, neck pain, concussion recovery, sports injuries, sleep disruption, TMJ, neurological symptoms.

Why NUCCA is different from regular chiropractic:
- No twisting, cracking, or popping — gentle precision touch at the base of the skull
- X-ray analysis to calculate the precise angle before every adjustment
- One small correction to the atlas changes the alignment of the entire spine
- "Structural solutions to unresolved health problems"
- Patients often say they tried everything else first

Patient language: "I had seen numerous specialists and two chiropractors before finding NUCCA." / "60% improvement in vertigo in 14 weeks." / "I could run again."

---

## DESIGN DIRECTION

### Color Palette (implement in globals.css as CSS custom properties)
```css
--color-forest: #2A5441;        /* Deep forest green — primary */
--color-forest-dark: #1B3A2E;   /* Darker forest for hero bg */
--color-ivory: #FAF7F0;         /* Warm ivory — main bg */
--color-ivory-warm: #F2EDE2;    /* Slightly deeper cream — surfaces */
--color-copper: #C4813A;        /* Warm copper — accent, CTAs */
--color-copper-light: #E8A85A;  /* Lighter copper for hover */
--color-sage: #7A9E8E;          /* Medium sage — secondary text */
--color-text: #1C2B24;          /* Very dark green/charcoal */
--color-text-muted: #6B7A70;    /* Muted sage-grey */
--color-white: #FFFFFF;
```

### Typography (use Google Fonts)
- Display: **Cormorant Garamond** (serif — precision, heritage, trust) — for all headings
- Body: **Inter** — for all body text
- Load via next/font

### Aesthetic
Light, warm, premium wellness. Think: high-end Austin wellness studio meets precision medicine. 
NOT clinical/cold/medical. WARM + precise + nature-adjacent.
The atlas vertebra (C1) is literally ring-shaped — use a **circular ring motif** subtly throughout the design (borders, section dividers, icon frames, cursor).

---

## UNIQUE DESIGN ELEMENTS (things we haven't done before)

### 1. Custom Cursor
- A copper ring (like the atlas vertebra) — 28px diameter, 2px border, #C4813A
- Scale(1.4) on hover over interactive elements, NOT width/height change
- Dot hides on hover. CSS cubic-bezier(0.34, 1.56, 0.64, 1) for springy feel
- `cursor: none` on html, body. `@media (pointer: coarse) { cursor: auto }`

### 2. Hero Headline "Alignment" Animation
The hero headline should animate as if the words are "finding alignment" — each word slides in from a slight vertical offset and snaps into position with a springy ease. Use GSAP stagger from="bottom" with elastic ease.

### 3. "What Brings You Here?" Conditions Grid
A visually beautiful grid of conditions with subtle icons. On hover, the condition card "aligns" (slight translateY correction animation). Conditions: Chronic Headaches, Migraines, Vertigo & Dizziness, Neck Pain, Sports Injuries, Concussion Recovery, Sleep Disruption, TMJ, Whole-Body Tension.

### 4. Atlas Anatomy Visual (NEW — never done before)
A CSS/SVG animated illustration of the C1 atlas vertebra — the ring-shaped bone. Show it in its correct aligned position vs. slightly rotated/misaligned position. Animated on scroll with a smooth correction animation. This visually explains what NUCCA does without words. Clean line art style, copper color on dark forest green background.

### 5. "The 19-Year Difference" Stats Section
CountUp animated stats (IntersectionObserver, NOT ScrollTrigger):
- 19 — years practicing NUCCA
- 7+ — years as Lagree fitness instructor
- $575 — new patient investment (framed as investment, not cost)
- Zero — procedures that involve cracking or twisting

### 6. Patient Journey Timeline
A horizontal scroll timeline (or vertical on mobile) showing "The moment before vs. after" — the emotional journey of a NUCCA patient from "tried everything, nothing worked" to "ran my first marathon."

### 7. Lenis Smooth Scroll
MUST call `history.scrollRestoration = "manual"` and `window.scrollTo(0, 0)` as FIRST lines in AnimationProvider init(), before any async imports.

---

## TECH STACK
- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- GSAP 3.x (ScrollTrigger for animations except CountUp)
- Lenis smooth scroll (with scrollRestoration fix)
- next/font for Google Fonts (Cormorant Garamond + Inter)
- Retell Client JS SDK 2.0.7 for AI widget

---

## PAGES TO BUILD

### 1. Homepage `/`
Sections in order:
1. **Navbar** — Top Atlas Chiropractic logo text (Cormorant Garamond), nav links: About, Conditions, NUCCA, New Patient, Contact. Sticky, transparent → forest-green on scroll.
2. **Hero** — Full-viewport. Dark forest green bg (#1B3A2E). Large Cormorant serif headline with alignment animation. Subhead. Two CTAs: "Book New Patient" (copper button) + "Learn About NUCCA" (ghost). Hero image placeholder (will be swapped with Nano Banana images). Subtle ring/circle motif overlay.
3. **Trust Bar** — Logos/text: 19 Years NUCCA Experience | Palmer College Graduate | NUCCA Certified | Lagree Instructor
4. **"What Brings You Here?"** — Conditions grid (9 conditions with subtle icons, hover alignment animation)
5. **About Dr. Shelley** (abbreviated) — "From Wisconsin to Austin. From Palmer to your C1 vertebra." Pull from her story. Warm photo placeholder. Link to full about page.
6. **"How NUCCA Works"** — 3-step process: Precise X-Ray Analysis → Custom Correction Angle → Gentle Atlas Adjustment. The atlas anatomy visual goes here.
7. **CountUp Stats** — "The 19-Year Difference" section
8. **Patient Testimonials** — Fabricate 6 realistic NUCCA testimonials (headaches resolved, vertigo gone, running again, sleep restored). Names: first name + last initial. Attribution: "NUCCA Patient — Austin, TX". No dates.
9. **AI Widget Section** — "Questions at 2am? Dr. Shelley's assistant is always available." Inline widget here.
10. **Footer** — NAP: Top Atlas Chiropractic | Austin, TX | drshelley@topatlaschiropractic.com | Instagram link | Stan Store link

### 2. About Page `/about`
Full Dr. Shelley story. Wisconsin → Palmer → NUCCA conference 2003 → Back N Balance 2006 → 19 years → Top Atlas. Her animals. Her Lagree life. Her mission. Beautiful editorial layout.

### 3. NUCCA Technique Page `/nucca`
Deep dive: What is the atlas? Why does its alignment matter? What is NUCCA? How is it different from regular chiro? What does an adjustment feel like? FAQ section.

### 4. Conditions Page `/conditions`
All 9 conditions — each with dedicated section explaining how atlas misalignment contributes to that condition and how NUCCA addresses it.

### 5. New Patient Page `/new-patient`
What to expect at your first visit. The X-ray process. Timeline (first visit: 90 min, follow-ups: 30 min). Pricing: $575 new patient / $85 follow-up. Cash only explanation (why no insurance = better care). FAQ. Big CTA.

### 6. Contact Page `/contact`
NAP. Map embed placeholder. Contact form. AI widget as PRIMARY contact method (above fold). Phone/email below.

---

## AI WIDGET

### AIWidgetPanel component — CRITICAL RULES
1. NEVER auto-init chat session on mount. Remove any useEffect that calls ensureChatSession() on mount.
2. Session starts only on first sendMessage() call.
3. scrollToBottom guard: only call when messages.length > 1
4. Chat API routes: /api/chat/start (POST → /create-chat) and /api/chat/message (POST → /create-chat-completion, body: {chat_id, content})
5. Voice API route: /api/chat/voice (POST → /v2/create-web-call)

### Three mandatory widget placements:
1. Floating bottom-right: `fixed bottom-20 right-4 left-4 sm:left-auto sm:w-[380px]`
2. Homepage inline section (after testimonials)
3. Contact page as primary contact method

### ENV VARS NEEDED (create .env.local)
```
NEXT_PUBLIC_RETELL_AGENT_ID=PLACEHOLDER_VOICE_AGENT
NEXT_PUBLIC_RETELL_CHAT_AGENT_ID=PLACEHOLDER_CHAT_AGENT
RETELL_API_KEY=$RETELL_API_KEY  # from .secrets.json
```
Use PLACEHOLDER values — Retell agents will be created separately and IDs updated.

---

## MOBILE VIEWPORT (MANDATORY — apply from day 1)
In globals.css:
```css
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
```
- All eyebrow/label text: tracking-[0.1em] on mobile, sm:tracking-[0.2em] max
- Hero display text: use clamp() or responsive Tailwind classes
- CreditTicker or marquees: overflow-hidden on outer wrapper
- Test every section mentally for mobile overflow

---

## COPY GUIDELINES
- No em dashes (—) anywhere in visible copy. Use commas, periods, or colons instead.
- No Lorem Ipsum anywhere.
- No placeholder names in AI chat prompts.
- Warm but authoritative tone. Not clinical. Not salesy.
- "Investment" not "cost" for pricing.
- "New patient visit" not "appointment fee."
- Austin-local references where natural.

---

## SEO (add to metadata)
Primary: "NUCCA chiropractor Austin" / "upper cervical chiropractor Austin"
Secondary: "atlas chiropractor Austin TX" / "NUCCA Austin Texas" / "gentle chiropractic Austin"
Title: "Top Atlas Chiropractic | NUCCA Upper Cervical Chiropractor Austin TX"
Description: "Dr. Shelley Lorenzen is Austin's NUCCA specialist. 19 years of precision upper cervical care for headaches, vertigo, migraines, and sports injuries. Cash-only. Gentle. Life-changing."

Person schema, LocalBusiness schema, FAQ schema on relevant pages.

---

## IMAGES
Use placeholder images initially — the site will get real images from Nano Banana Pro generation running in parallel. Use `/images/hero.jpg`, `/images/about.jpg`, etc. as placeholder paths. The image generation agent will produce the real files.

Suggested image slots:
- `/public/images/hero.jpg` — hero background (dark forest, wellness)
- `/public/images/dr-shelley-about.jpg` — Dr. Shelley portrait
- `/public/images/nucca-adjustment.jpg` — hands, precision, atlas area
- `/public/images/austin-outdoor.jpg` — Austin trail/nature
- `/public/images/consultation.jpg` — patient-doctor trust moment
- `/public/images/atlas-anatomy.jpg` — atlas vertebra visual/abstract

---

## GITHUB + DEPLOYMENT

1. Create directory: `~/blynk/builds/SCOUT-008-lorenzen-chiro/`
2. Init Next.js: `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"` 
3. Create GitHub repo: `gh repo create Blynk-Studio/top-atlas-chiropractic --public`
4. Push: `git remote add origin https://github.com/Blynk-Studio/top-atlas-chiropractic.git && git push -u origin main`
5. Deploy to Vercel:
   ```bash
   VERCEL_TOKEN="$VERCEL_TOKEN"  # from .secrets.json
   npx vercel --prod --yes --token "$VERCEL_TOKEN"
   ```
6. Set Vercel env vars:
   ```bash
   PROJECT_ID=$(cat .vercel/project.json | python3 -c "import json,sys; print(json.load(sys.stdin)['projectId'])")
   for KEY_VAL in "NEXT_PUBLIC_RETELL_AGENT_ID:PLACEHOLDER_VOICE" "NEXT_PUBLIC_RETELL_CHAT_AGENT_ID:PLACEHOLDER_CHAT" "RETELL_API_KEY:$RETELL_API_KEY"; do
     KEY=$(echo $KEY_VAL | cut -d: -f1)
     VAL=$(echo $KEY_VAL | cut -d: -f2-)
     curl -s -X POST "https://api.vercel.com/v10/projects/$PROJECT_ID/env" \
       -H "Authorization: Bearer $VERCEL_TOKEN" \
       -H "Content-Type: application/json" \
       -d "{\"key\": \"$KEY\", \"value\": \"$VAL\", \"type\": \"plain\", \"target\": [\"production\", \"preview\", \"development\"]}"
   done
   ```

---

## QUALITY GATES (Guardian checklist — all 31 must pass)
Before declaring done:
- [ ] No Lorem Ipsum
- [ ] No em dashes in visible copy
- [ ] Mobile viewport: overflow-x hidden on html/body
- [ ] Eyebrow tracking capped at tracking-[0.1em] mobile
- [ ] Hero display text uses clamp() or responsive classes
- [ ] Lenis: scrollRestoration = "manual" + scrollTo(0,0) first
- [ ] AIWidgetPanel: no auto-init on mount
- [ ] scrollToBottom guard: messages.length > 1
- [ ] CountUp: IntersectionObserver, NOT ScrollTrigger
- [ ] Custom cursor: scale() not width/height for hover
- [ ] Custom cursor: ring always visible, amber/copper colored
- [ ] All 3 widget placements present
- [ ] /api/chat/start calls /create-chat (not /v2/create-web-call)
- [ ] /api/chat/message route exists (calls /create-chat-completion)
- [ ] Voice route calls /v2/create-web-call
- [ ] .env.local present with all 3 Retell vars
- [ ] All pages have proper metadata (title + description)
- [ ] JSON-LD schema on homepage (Person + LocalBusiness)
- [ ] FAQ schema on NUCCA + New Patient pages
- [ ] Sitemap.ts present
- [ ] No console errors on build
- [ ] npx tsc --noEmit passes
- [ ] npm run build succeeds
- [ ] Deployed to Vercel production
- [ ] GitHub repo pushed

---

## COMPLETION SIGNAL
When ALL pages are built, site is deployed, and Guardian passes:
Run: `openclaw system event --text "SCOUT-008 Top Atlas Chiropractic build complete. Deployed to Vercel. Guardian passed." --mode now`
