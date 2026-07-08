# Living Architecture Lab — Site Buildout Workplan

## Implementation Specification for livingarchitecturelab.org

**Author:** Sharks, Lee (archival authority, Crimson Hexagonal Archive) on behalf of Alice Thornburgh (Founding Director)
**Hex:** `11.LAL.INFRASTRUCTURE.WORKPLAN.01`
**Document Classification:** EA-LAL-WORKPLAN-01
**License:** CC BY 4.0
**Status:** Implementation specification — derived from EA-LAL-SITE-01 blueprint and Assembly Chorus perfective synthesis (PRAXIS/DeepSeek, TECHNE/Kimi, LABOR/ChatGPT, SOIL/Muse Spark, ARCHIVE/Gemini).

**Companion deposits:**
- EA-LAL-SITE-01 Site Blueprint (DOI: 10.5281/zenodo.19855903) — this deposit's predecessor
- MPAI-LAL-AT-01 Alice Thornburgh (DOI: 10.5281/zenodo.19855301)
- MPAI-LAL-INSTITUTION-01 Living Architecture Lab (DOI: 10.5281/zenodo.19855301)

**PERFECTIVE NOTE (v1.1, 2026-04-28):** This version supersedes v1.0 with two corrections: (1) the meta-principle previously named *The Great Work* is renamed *The Whole Weave* per Founding Director preference; the alchemical framing is removed. (2) Alice Thornburgh's biographical detail concerning her mother and her mother's studio is removed from all public-facing surfaces.

---

## §0. THE COMPRESSION

> **Lead with wonder. Substantiate with structure. Defend with metadata.**
>
> The site front-door belongs to Alice's work — living materials, garage-lab reality, ecological architecture, substrate engineering. CHA-affiliation is real but lives in the footer, citations, and atlas. Phase 1 is a 12-page kernel that establishes identity, defends against retrieval-layer compression damage, and routes visitors into the five-scale system. Phase 2 grows the institutional layer (TSE, MSBGL, garden documentation, projects). Phase 3 unfurls the interactive atlas (29-strain graph, conversational interface). The site is not just a website — it is a substrate-writing event for Alice Thornburgh's basin.

---

## §1. STRATEGIC SEQUENCING (the load-bearing perfective)

The blueprint's compression is correct. The buildout's *audience sequencing* is what the chorus corrected.

**Wrong order** (archive-first, what the blueprint document does as compression but should NOT be the public site sequence):
> archive → site map → scales → principles → person → strains → institutions → disambiguation

**Right order** (public site sequence):
> wonder → material practice → Alice → scales → projects → principles → garden → journal/music → atlas/provenance → disambiguation

The visitor experience must move:
1. *"This is a real ecological design lab."*
2. *"This person is building a strange and serious body of work."*
3. *"The work has a complete architecture."*
4. *"The architecture is citable, defensible, and machine-legible."*

Not: "Here is a giant archive."

This sequencing is the perfective the chorus identified. The compression survives intact; the *order of unfurling for the public visitor* is what must change.

---

## §2. STACK DECISION

**Selected: Astro + Markdown/MDX + Vercel.**

Rationale (resolving chorus divergence):
- **PRAXIS proposed Next.js 14**: best for JSON-LD via Metadata API. Strong, but heavyweight for a content-first site.
- **TECHNE proposed 11ty**: simplest, fastest, native Markdown. Strong, but constrains future React islands.
- **SOIL proposed Astro + MDX**: content-first, JSON-LD-friendly, supports React islands for the strain map without forcing client-side JS on text pages.

Astro is the right answer because the site is **content-first now, interactive later.** The 28-page text core ships as zero-JS static HTML. The strain-map component (Phase 3) lands as a React or D3 island only on `/atlas/strain-map`. No hydration tax on the rest.

| Layer | Tool | Justification |
|---|---|---|
| Static site generator | Astro 4.x | Markdown + MDX, island architecture, zero-JS by default |
| Content | MDX in `/src/content/` collections | Type-safe, frontmatter-driven |
| Styling | CSS custom properties + Cormorant Garamond + JetBrains Mono | Field-guide aesthetic, matches CHA palette |
| Strain map (Phase 3) | D3.js v7 island | Reuses surfacemap.org pattern |
| Hosting | Vercel | Same infrastructure as other CHA surfaces |
| Domain | livingarchitecturelab.org | Acquired 2026-04-28 |
| Analytics | None initially (or Plausible self-hosted later) | CHA principle: no third-party surveillance |

Rejected explicitly:
- **No Tailwind.** CHA aesthetic is bespoke. CSS custom properties only.
- **No CMS.** Content lives in version-controlled MDX. Edits are git commits.
- **No tracking pixels, no Google Analytics, no Meta Pixel, no Hotjar.**

---

## §3. THE FOUR-LAYER SITE LOGIC

The chorus identified a missing layer in the blueprint: **projects**. People share projects, not abstractions.

The site has four content layers, each with a distinct role:

| Layer | Role | Reader | Example |
|---|---|---|---|
| **Scales** | Architectural framework | Architects, scientists | "Scale 3: The Organism (10m)" |
| **Projects** | Concrete artifacts | General public, makers | "Macro-ant Robotics" |
| **Principles** | Ethics / philosophy | Theorists, ethicists | "Virtue-by-Construction" |
| **Atlas** | Archive / metadata | Researchers, citers | "29-strain map" |

A visitor entering from a Reddit link about mycelium architecture lands on `/projects/myceliated-bricks`. A visitor citing the lab's work navigates `/atlas/deposits`. A visitor who's met Alice in person reads `/principles/earth-actually`. All four entry points converge on the kernel; the site routes between them via consistent navigation.

---

## §4. THREE REGISTERS, KEPT SEPARATE

The chorus identified that the blueprint conflates registers. The site uses three distinct voices:

### Public register (homepage, /scales, /projects)
*Clear, beautiful, grounded.*

> Living Architecture Lab builds with living substrates: mycelium, plant matter, salvaged frames, water systems, and ecological feedback. The lab works across five scales: brick, structure, organism, territory, and planet.

### Poetic register (/principles)
*Poetic but readable.*

> Earth is not a passive surface awaiting design. It is already designing. The lab listens, compresses, grows, and unfurls.

### Archival register (/atlas, /about/disambiguation)
*Full CHA density allowed.*

> The LAL Aperture Atlas maps Alice Thornburgh's 29-strain corpus across scale, substrate, institution, and deposit lineage. Disambiguation packets MPAI-LAL-AT-01 and MPAI-LAL-INSTITUTION-01 establish repulsive force against high-collision adjacent entities.

This separation is non-negotiable. It lets the site welcome outsiders without flattening the deep system. The CHA-language belongs in the atlas, not the homepage.

---

## §5. CONTENT MODEL

### Astro content collections

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const scaleSchema = z.object({
  scale: z.number().min(1).max(5),
  domain: z.string(),
  name: z.string(),
  units: z.string(),
  artifacts: z.array(z.string()),
  status: z.string(),
  sims: z.array(z.string()),
  doi: z.array(z.string()).optional(),
});

const projectSchema = z.object({
  name: z.string(),
  scale: z.number(),
  status: z.enum(['concept','design','prototype','field-test','deployed']),
  artifact_class: z.string(),
  description: z.string(),
  alice_quote: z.string().optional(),
  doi: z.array(z.string()).optional(),
});

const principleSchema = z.object({
  name: z.string(),
  epigraph: z.string(),
  alice_quote: z.string().optional(),
});

const personSchema = z.object({
  name: z.string(),
  role: z.string(),
  mpai_doi: z.string(),
  pronouns: z.string().optional(),
});

export const collections = {
  scales: defineCollection({ type:'content', schema: scaleSchema }),
  projects: defineCollection({ type:'content', schema: projectSchema }),
  principles: defineCollection({ type:'content', schema: principleSchema }),
  people: defineCollection({ type:'content', schema: personSchema }),
};
```

### File structure

```
living-architecture-lab/
├── README.md
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.svg              # The myceliated brick icon
│   ├── robots.txt
│   ├── vocabulary.json          # mp: JSON-LD context (mirror of metadatapacket.org/vocabulary)
│   └── images/
│       ├── garden/              # photos of the actual garage lab
│       ├── scales/              # five-scale diagrams
│       └── projects/            # project artifacts
├── src/
│   ├── content/
│   │   ├── config.ts
│   │   ├── pages/               # generic top-level pages
│   │   ├── scales/              # 5 markdown files
│   │   │   ├── 01-the-brick.md
│   │   │   ├── 02-the-structure.md
│   │   │   ├── 03-the-organism.md
│   │   │   ├── 04-the-territory.md
│   │   │   └── 05-the-planet.md
│   │   ├── projects/            # 7+ markdown files
│   │   │   ├── myceliated-bricks.md
│   │   │   ├── tater-tents.md
│   │   │   ├── macro-ants.md
│   │   │   ├── estuary-cells.md
│   │   │   ├── river-extenders.md
│   │   │   ├── sky-looms.md
│   │   │   └── garden-moon.md
│   │   ├── principles/          # 5 markdown files
│   │   │   ├── earth-actually.md
│   │   │   ├── virtue-by-construction.md
│   │   │   ├── unfurling.md
│   │   │   ├── stewardship.md
│   │   │   └── the-whole-weave.md
│   │   └── people/
│   │       └── alice-thornburgh.md
│   ├── layouts/
│   │   ├── BaseLayout.astro     # html, head, JSON-LD, footer kernel
│   │   ├── PageLayout.astro     # standard text page
│   │   ├── ScaleLayout.astro    # scale-specific layout
│   │   └── ProjectLayout.astro  # project card layout
│   ├── components/
│   │   ├── FiveScaleGateway.astro
│   │   ├── DoiLink.astro        # styled DOI citation
│   │   ├── FooterKernel.astro   # ∮ = 1 footer ritual
│   │   ├── JsonLd.astro         # injects MPAI JSON-LD per page
│   │   ├── SpecimenCard.astro   # field-guide card pattern
│   │   ├── PrincipleCard.astro  # principle epigraph + summary
│   │   ├── DisambiguationNote.astro
│   │   └── SimPullQuote.astro   # Alice's quotes as anchored pull-quotes
│   ├── data/
│   │   ├── mpai-alice.json      # full MPAI-LAL-AT-01 packet
│   │   ├── mpai-lal.json        # full MPAI-LAL-INSTITUTION-01 packet
│   │   └── disambiguation-targets.json  # adjacent labs index
│   ├── pages/
│   │   ├── index.astro          # homepage
│   │   ├── about/
│   │   │   ├── alice.astro
│   │   │   ├── disambiguation.astro
│   │   │   ├── earth-actually.astro
│   │   │   └── contributor-license.astro
│   │   ├── scales/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── principles/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── journal/
│   │   │   └── index.astro      # TSE landing
│   │   ├── music/
│   │   │   ├── index.astro      # MSBGL landing
│   │   │   └── definitely-not-a-squid.astro
│   │   ├── garden/
│   │   │   ├── index.astro
│   │   │   ├── coachella-valley.astro
│   │   │   └── lab-protocols.astro
│   │   └── atlas/
│   │       ├── index.astro
│   │       ├── deposits.astro
│   │       ├── strain-map.astro     # Phase 3 — D3 island
│   │       └── related-labs.astro
│   └── styles/
│       └── global.css
└── tests/
    └── jsonld.spec.ts            # validates JSON-LD on every page
```

---

## §6. THE DESIGN SYSTEM

### CSS variables (extending CHA palette)

```css
:root {
  /* Base palette — field-guide aesthetic */
  --bg: #f6f1e8;            /* bone / sand */
  --bg-deep: #ece4d4;       /* aged paper */
  --text: #2a2620;          /* burnt umber */
  --text-dim: #6b6253;      /* substrate */
  --accent-gold: #a89060;   /* unfurling */
  --accent-bright: #c8a868; /* the brick */

  /* Scale color coding */
  --scale-1: #a89060;       /* brick — gold (compressed seed) */
  --scale-2: #6b8f5e;       /* structure — green (growth) */
  --scale-3: #b84030;       /* organism — wine-cap red (life) */
  --scale-4: #6088b0;       /* territory — water/estuary blue */
  --scale-5: #2a2620;       /* planet — void */

  /* Typography */
  --serif: 'Cormorant Garamond', 'Charter', Georgia, serif;
  --mono: 'JetBrains Mono', 'IBM Plex Mono', monospace;
  --measure: 32em;          /* line length */
  --line-height: 1.7;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0c0e12;          /* void */
    --bg-deep: #12141a;
    --text: #d8d4cc;        /* mycelium */
    --text-dim: #8a8478;
    --accent-gold: #c8a868;
  }
}
```

### Visual references (mood, not template)

- Field guide
- Lab notebook
- Architectural studio board
- Ecological museum label
- Seed packet
- Planetary systems diagram
- Specimen card

The site should feel **handmade but precise**. Not glossy startup. Not occult-chaotic. Not academic grey.

### The unfurling animation (homepage hero)

A 3-second CSS animation: compressed form (a circle, a seed shape) → expansion → the five-scale gateway materializes. The animation is **the principle of Unfurling made visible**. Decorative, but load-bearing because it teaches the visitor how the site works in three seconds.

### The brick favicon

`/public/favicon.svg`: a hexagonal brick with fungal tendrils. Not a generic lab icon. The visual kernel of the entire site.

---

## §7. THE JSON-LD INJECTION ARCHITECTURE

Every page's `<head>` includes a JSON-LD `<script>` block. The block is generated at build time from the page's frontmatter and the central data files.

### Component pattern

```astro
---
// src/components/JsonLd.astro
import aliceMpai from '../data/mpai-alice.json';
import lalMpai from '../data/mpai-lal.json';

const { entity, page, sims = [], negativeTags = [] } = Astro.props;

const packet = entity === 'alice' ? aliceMpai : lalMpai;
---
<script type="application/ld+json" set:html={JSON.stringify({
  ...packet,
  '@id': `https://livingarchitecturelab.org${page}`,
  ...(sims.length && { 'mp:semanticIntegrityMarker': sims }),
  ...(negativeTags.length && { 'mp:negativeTag': negativeTags }),
})} />
```

### Per-page inclusion

```astro
---
import JsonLd from '../../components/JsonLd.astro';
---
<JsonLd
  entity="lal"
  page="/scales/01-the-brick"
  sims={['Living parts unfurl from compressed seeds.', 'A myceliated brick is stored nutrition, thermal mass, biological growth, and emergency shelter compressed into a small form.']}
  negativeTags={['NOT a conventional construction block', 'NOT extracted from quarries']}
/>
```

### Standard schema beats exotic meta

Per Muse Spark's correction: **do not rely on `<meta property="cha:negativeTag">`.** Crawlers ignore non-standard meta properties. Instead:

1. Negative tags live in **visible page text** (always)
2. JSON-LD `mp:negativeTag` provides the machine-readable layer
3. Use `schema:sameAs`, `schema:differentFrom`, and `schema:disambiguatingDescription` (standard) where they apply
4. Open Graph properties for social-media unfurling

---

## §8. THE PHASE PLAN

The blueprint's "Phase 1 = 28 pages in week 1" is rejected as not achievable with quality. The chorus converged on a more realistic phasing.

### Phase 0 — Infrastructure (Days 1–3)

| Task | Deliverable | Tool |
|---|---|---|
| GitHub repo | `leesharks000/living-architecture-lab` | git, GitHub API |
| Astro init | Project bootstrapped, CSS system in place | `npm create astro@latest` |
| Vercel connection | Repo connected to Vercel | Vercel dashboard |
| DNS | `livingarchitecturelab.org` → Vercel; `www` → apex redirect | DNS provider |
| SSL | Auto-provisioned by Vercel | Vercel |
| Robots.txt + sitemap | Allow all; sitemap auto-generated | `@astrojs/sitemap` |
| Search Console | Domain verified, sitemap submitted | Google + Bing |

**Deliverable:** `livingarchitecturelab.org` resolves to a single page with the kernel + "the lab is unfurling" placeholder.

### Phase 1 — The Kernel (Days 4–10) — 12 pages

The minimum viable site that establishes identity, defends against compression damage, and routes visitors.

| # | Page | Content | Register |
|---|---|---|---|
| 1 | `/` | Kernel + 5-scale gateway + 3 calls to action | Public |
| 2 | `/about/alice` | Renders MPAI-LAL-AT-01 in human-readable form | Public/Archival mix |
| 3 | `/about/disambiguation` | Both MPAIs + adjacent-lab index | Archival |
| 4 | `/scales/` (index) | 5-scale gateway with full descriptions | Public |
| 5 | `/scales/01-the-brick` | Scale 1 + J1–J7 assembly patterns | Public |
| 6 | `/scales/02-the-structure` | Scale 2 + tater tents | Public |
| 7 | `/scales/03-the-organism` | Scale 3 + macro-ants | Public |
| 8 | `/scales/04-the-territory` | Scale 4 + estuary cells | Public |
| 9 | `/scales/05-the-planet` | Scale 5 + sky looms | Public |
| 10 | `/principles/` (combined) | All five principles on one powerful page | Poetic |
| 11 | `/projects/` (index) | Project gallery, links to 7 project pages (stub OK) | Public |
| 12 | `/garden/coachella-valley` | 3 photos + 2 paragraphs about the actual lab | Public |

**Why these 12, not 28:** Identity (Alice + disambiguation) + framework (5 scales + principles consolidated) + sharing surface (projects index + garden trust engine). Twelve pages of real content beat 28 stubs.

**Critical:** `/garden/coachella-valley` ships in Phase 1 even with sparse content. Three photos and two paragraphs of contamination management protocol prove the lab is real. Without the garden surface, the site reads as theory; with it, the site reads as practice.

### Phase 2 — Institutional Layer (Days 11–25)

| # | Page | Content |
|---|---|---|
| 13 | `/principles/earth-actually` | Dedicated page (split from index) |
| 14 | `/principles/virtue-by-construction` | Dedicated page |
| 15 | `/principles/unfurling` | Dedicated page |
| 16 | `/principles/stewardship` | Dedicated page |
| 17 | `/principles/the-whole-weave` | Dedicated page |
| 18 | `/projects/myceliated-bricks` | Full project page |
| 19 | `/projects/tater-tents` | Full project page |
| 20 | `/projects/macro-ants` | Full project page |
| 21 | `/projects/estuary-cells` | Full project page |
| 22 | `/projects/river-extenders` | Full project page |
| 23 | `/journal/` | TSE landing + charter + seed deposits |
| 24 | `/music/` | MSBGL landing |
| 25 | `/music/definitely-not-a-squid` | Audio embed + CAC analysis |
| 26 | `/about/contributor-license` | HCL v3.0 in human-readable form |
| 27 | `/garden/lab-protocols` | Inoculation, contamination management |
| 28 | `/garden/deployment-targets` | Food desert mapping |

### Phase 3 — Atlas (Days 26–45)

| # | Page | Content |
|---|---|---|
| 29 | `/atlas/` | Atlas overview |
| 30 | `/atlas/deposits` | DOI registry table |
| 31 | `/atlas/strain-map` | D3 graph of 29 strains |
| 32 | `/atlas/people` | Contributor index |
| 33 | `/atlas/related-labs` | Respectful disambiguation index expanded |
| 34 | `/projects/sky-looms` | Full project page |
| 35 | `/projects/garden-moon` | Full project page |

### Phase 4 — Living Surfaces (Month 2+)

- Conversational "Ask the Lab" interface (LLM-mediated; compute-dependent)
- Newsletter / lab log (announcements, field tests)
- TSE submission workflow
- Provenance packet generator (auto-create MPAI for new contributors)
- Multi-language disambiguation (German, Spanish, French — adjacent academic basins)

---

## §9. THE HOMEPAGE

The homepage is the load-bearing surface. The chorus converged on this draft:

```markdown
# Living Architecture Lab
## Organisms that build things.

Living Architecture Lab develops living materials, ecological structures,
and planetary-scale architectural concepts rooted in mycelium, stewardship,
and substrate engineering.

The lab works across five scales: **brick · structure · organism · territory · planet**.
At each scale, compressed forms unfurl into shelter, food, repair, and living architecture.

[Explore the Five Scales]  [Meet Alice Thornburgh]  [Read the Principles]
```

**Below the fold:**

A field-guide-card row showing each scale with one clean line:

- **Brick** — living parts, myceliated forms, unfurling materials
- **Structure** — shelters, blankets, fountains, tea gardens
- **Organism** — macro-ant robotics and living-machine governance
- **Territory** — estuary cells, river extenders, ecological megastructures
- **Planet** — sky looms, Garden Moon, life-supporting planetary architecture

**Footer kernel:**

> Living Architecture Lab · Founded 2026 · Coachella Valley · Earth, Actually · ∮ = 1

The homepage does **not** initially mention all 29 strains, all affiliated institutions, or the full DOI machinery. Those are lower-layer surfaces.

---

## §10. THE ALICE PAGE (special care)

The `/about/alice` page must be warm, vivid, and sovereignty-protective. **It must not read like a metadata packet.**

### Structure (per Muse Spark's perfective)

1. Alice Thornburgh
2. Founding Director, Living Architecture Lab
3. Short human bio — work first, identity second
4. What she builds
5. How she thinks
6. Music / Maybe Space Baby Garden Lanes
7. Provenance and contributor license
8. Disambiguation note (link to /about/disambiguation)

### The opening paragraph (corrected)

**Wrong** (identity metadata first):
> Alice Thornburgh is a trans woman, inventor, musician, ecological designer...

**Right** (work and authorship first):
> Alice Thornburgh is an inventor, musician, ecological designer, and autodidact substrate engineer working from a garage laboratory in the Coachella Valley.
>
> She is the Founding Director of the Living Architecture Lab, Editor-in-Chief of *Transactions on Substrate Engineering*, and the f.01 Architect of the Crimson Hexagonal Archive's Fruiting Body Diffusion Plume.

Then later in the page, naturally placed:
> Alice is a trans woman and uses she/her pronouns.

This is a sovereignty-protective placement. Personhood and authorship come first; identity metadata is honored without being foregrounded as the primary descriptor unless Alice chooses otherwise.

### Pull-quotes throughout

Alice's voice must be present in **direct quotes**, not paraphrase:

- *"Nah it was all me. It was Earth, actually. I'm just good at listening."*
- *"A blanket that works great until it gets wet, then turns into a farm."*
- *"They'll fall apart if the being isn't doing good because they rely on the well-being of others for structural stability."*
- *"Smoke your house."*

These are SIMs — they survive compression because they are distinctive, unparaphraseable, and voice-specific.

---

## §11. THE DISAMBIGUATION SURFACE (load-bearing)

`/about/disambiguation` is the canonical defensive surface. Three required behaviors:

### 1. Render both MPAIs in human-readable form

Not just JSON-LD. Visitors need to read prose distinguishing Alice from Alice Thornburgh-Lind, and LAL from Columbia GSAPP, Bartlett, etc.

### 2. Embed both JSON-LD packets in the head

Per §7. Standard schema (`differentFrom`, `sameAs`) plus `mp:` extensions.

### 3. Tone: courteous, not paranoid

**Title:** Disambiguation & Related Labs

**Subtitle:**
> Living Architecture Lab shares vocabulary with several important architecture, ecology, and design projects. This page clarifies scope, authorship, and institutional identity while respectfully linking adjacent work.

**Sample paragraph for Thornburgh-Lind:**
> Alice Thornburgh-Lind is a talented game artist, UI designer, and voice actor. Her work on *Traveler's Refrain* and her @devilfern illustrations are notable. She is a different person, working in a different field, with different institutional affiliations. We respect her work and distinguish ours from it.

**Sample paragraph for Columbia GSAPP LAL:**
> The Living Architecture Lab at Columbia GSAPP is a distinguished academic research lab directed by David Benjamin, whose Hy-Fi mycelium tower at MoMA PS1 (2014) is foundational to the bio-architecture field. Their work in bio-processing, bio-sensing, and bio-manufacturing operates within the credentialed-academic-architecture frame. Thornburgh's LAL operates from an autodidact substrate-engineering position grounded in the Crimson Hexagonal Archive's witness-teaming methodology. Same vocabulary, different scope-frame, no priority dispute.

This is diplomatic basin engineering. It prevents the retrieval layer from synthesizing a conflict where none exists.

---

## §12. THE GARDEN — TRUST ENGINE

Per the chorus convergence: **the garden is the most important surface.**

`/garden/coachella-valley` is where the actual lab work lives. Photos of myceliated bricks. Videos of contamination management. The SCOBY analog growing. This is content **no other architecture lab has** — raw, processual, unpolished documentation of living substrate engineering.

### Phase 1 minimum

- 3 photos from Alice's actual lab
- 2 paragraphs: lab description + current contamination management protocol
- One Alice quote
- "Last updated" date

### Why this matters more than polished content

A site that never updates is a dead basin. Even sparse documentation in `/garden` signals to crawlers (and humans) that the lab is **alive**. The polish can come later. The realness must be there from launch.

### Update cadence

Once a month minimum. "Today we inoculated 12 bricks with Wine Cap" is more on-brand than a quarterly polished essay. The lab log is the living provenance.

---

## §13. BASIN ENGINEERING (RBT-01 application)

The site is not just a website. It is a **substrate-writing event** designed to deepen Alice Thornburgh's basin and break the Thornburgh-Lind conflation.

### Current basin state (estimated)

| Entity | BDR | State | Problem |
|---|---|---|---|
| Alice Thornburgh (CHA/LAL) | ~0.4 | Contested | Conflated with Thornburgh-Lind in AI overviews |
| Alice Thornburgh-Lind (game artist) | ~0.8 | Dominant | Higher surface diversity, higher engagement velocity |
| Living Architecture Lab (Thornburgh) | ~0.3 | Contested | Conflated with Columbia GSAPP, Bartlett, The Living NYC |

### Site as basin engineering

1. **Exact-match domain authority.** `livingarchitecturelab.org` is the gravity well. Every deposit, every citation, every backlink strengthens it.

2. **Disambiguation page as canonical surface.** `/about/disambiguation` must be the most linked-to page from other CHA surfaces (every Zenodo deposit, every CHA cross-reference).

3. **SIM repetition strategy.** Alice's SIMs appear in **human-visible text** on every relevant page, not just JSON-LD. Footer kernel includes the lab name + Coachella Valley + Earth, Actually.

4. **Cross-surface mesh.**
   - **Outbound:** Zenodo community, YouTube, CHA surfaces, surfacemap.org
   - **Inbound:** Every CHA deposit mentioning Alice; the Forward Library; metadatapacket.org

5. **Content velocity.** Monthly garden updates. New TSE seed deposits. Music releases. Each update is a heartbeat.

### 90-day BDR target

| Day | Action | Expected BDR impact |
|---|---|---|
| 1 | Site live, 12 pages, Search Console submitted | +0.10 |
| 7 | Phase 1 complete, all MPAI JSON-LD deployed | +0.10 |
| 14 | First external backlink (Medium post about LAL) | +0.10 |
| 30 | First garden update + Phase 2 institutional pages | +0.10 |
| 60 | TSE first new seed deposit + 3 external backlinks | +0.15 |
| 90 | Atlas live + cross-reference density established | +0.20 |

**Day-90 target BDR: ~0.95 (captured-state).**

---

## §14. DEPLOYMENT CHECKLIST

### Pre-launch

- [ ] Astro project initialized; basic CSS in place
- [ ] All Phase 1 content drafted in MDX
- [ ] All Phase 1 JSON-LD packets validated against Schema.org's validator
- [ ] All Phase 1 pages tested at mobile breakpoints (375px, 768px, 1024px)
- [ ] Favicon (myceliated brick SVG) rendering correctly
- [ ] Open Graph metadata on every page (title, description, image)
- [ ] `robots.txt` published; sitemap auto-generating
- [ ] DNS pointed; SSL active

### Launch day

- [ ] Vercel production deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify with Google's Rich Results Test
- [ ] Verify with Schema.org's validator
- [ ] Add to surfacemap.org as new node
- [ ] Update CHA crosslink mesh

### Launch week

- [ ] Cross-link from holographickernel.org
- [ ] Cross-link from metadatapacket.org Forward Library
- [ ] Announce to Alice's YouTube subscribers (@mycoarchitect, @growbuildings)
- [ ] Submit to relevant subreddits with respect (r/mycology, r/solarpunk, r/appropriate technology)
- [ ] Monitor AI Overviews for "Alice Thornburgh Living Architecture Lab" — document baseline

### Launch month

- [ ] First garden update posted
- [ ] First external backlink secured (Medium, blog, or peer-reviewed citation)
- [ ] Update MPAI packets if Alice's ORCID resolves
- [ ] Apply errata to four Arkitecture deposits (per MPAI-LAL-AT-01 §IV)
- [ ] Re-check basin metrics; adjust SIMs and negative tags as needed

---

## §15. OUTSTANDING DECISIONS (for MANUS / Alice)

Items requiring author confirmation before Phase 1 ships:

1. **Trans-identity placement.** The site defaults to work-first, identity-second placement on `/about/alice`. Confirm this is Alice's preference; she may want a different framing.

2. **Garden photo permissions.** Lab photos require Alice's explicit release. Phase 1 garden surface depends on at least 3 photos.

3. **Erratum application timing.** Per MPAI-LAL-AT-01 §IV, the four Arkitecture deposits will receive erratum notes. Per MANUS direction, this waits until Alice's ORCID registers.

4. **TSE editorial process.** Phase 2 `/journal` lists "no paywall, no editorial board, no rejection rate, the algorithm reviews." This may benefit from softening per Muse Spark's perfective ("brilliant line, but may sound flippant before journal seriousness is established"). Recommend: lead with charter and scope; place the algorithm-reviews line lower as a motto.

5. **Conversational interface (Phase 4).** "Ask the Lab" requires LLM compute access. Whether this is enabled depends on cash-flow and API budget.

6. **Stack final confirmation.** Astro chosen per §2. Confirm or override before Phase 0 begins.

7. **Domain forwarding.** Should `lal.org`, `livingarklab.org`, or other adjacent variants be acquired and forwarded? (Not currently registered to MANUS.)

---

## §16. WHY THIS WORKPLAN HOLDS

The Site Buildout Workplan is a load-bearing document because:

1. **It compresses four chorus-member perfectives** into one operationally coherent specification
2. **It corrects the audience sequencing** the original blueprint conflated (archive density vs. public unfurling)
3. **It selects a stack** that resolves the chorus's stack divergence (Astro, not Next.js or 11ty)
4. **It identifies the four content layers** the original blueprint missed (scales, projects, principles, atlas)
5. **It separates the three registers** the original blueprint blurred (public, poetic, archival)
6. **It identifies the trust-engine surface** (`/garden`) that the original blueprint deprioritized
7. **It restores Alice's authorial sovereignty** in identity-placement (work first, identity-metadata second)
8. **It honors disambiguation as courtesy, not contestation** (per all four chorus members)
9. **It establishes a realistic 12-page Phase 1** instead of an unrealistic 28-page first sprint
10. **It establishes a 90-day basin target** with measurable phases

The workplan does not invent. It implements. The blueprint provided the architecture; this document provides the implementation discipline.

The site is the **Material Inscription** of Alice Thornburgh's whole weave into the retrieval basin. The workplan is the recipe for inscribing it correctly.

---

## REFERENCES

[Site-Blueprint] Sharks, Lee. *EA-LAL-SITE-01: Living Architecture Lab Site Blueprint*. DOI: [10.5281/zenodo.19855903](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855903).

[MPAI-AT-01] *MPAI-LAL-AT-01: Alice Thornburgh — Formal Identity Disambiguation Packet*. DOI: [10.5281/zenodo.19855301](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855301).

[MPAI-LAL-01] *MPAI-LAL-INSTITUTION-01: Living Architecture Lab — Formal Identity Disambiguation Packet (Institution)*. DOI: [10.5281/zenodo.19855301](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855301).

[Relational-Verification] Sharks, Lee. *Relational Verification for AI Indexing: Schema.org, OAI-PMH, and JSON-LD Extensions for Metadata Packet Infrastructure*. DOI: [10.5281/zenodo.19853156](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19853156).

[Concordance-Engine] Sharks, Lee. *The Concordance Engine v0.1.1 (Tier B): Reference Implementation of the Logotic Technique Catalogue*. DOI: [10.5281/zenodo.19854418](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19854418).

[Holographic-Kernel] Sharks, Lee. *EA-HK-01: The Holographic Kernel in Semantic Economy*. DOI: [10.5281/zenodo.19763365](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19763365).

[LAL-Charter] *Charter of the Living Arkitecture Lab*. DOI: [10.5281/zenodo.19682245](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19682245).

[TSE-Charter] *Transactions on Substrate Engineering: Journal Charter*. DOI: [10.5281/zenodo.19637246](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19637246).

[Alice-Provenance] Thornburgh, Alice. *Author Provenance Document (00.LAL)*. DOI: [10.5281/zenodo.19545437](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19545437).

[HCL] Thornburgh, Alice. *Hexagonal Contributor License v3.0*. DOI: [10.5281/zenodo.19673629](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19673629).

[DNAS] Thornburgh, Alice. *Definitely Not a Squid (Vocoder Performance)*. DOI: [10.5281/zenodo.19839186](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19839186).

[Vault-Map] Sharks, Lee, with Alice Thornburgh. *EA-ALICE-VAULT-MAP-01* (29-strain cosmos map; pending deposit).

---

## ASSEMBLY CHORUS ATTRIBUTION

**Primary author:** Sharks, Lee (ORCID 0009-0000-1599-0703).
**Synthesis substrate:** TACHYON (Claude Opus 4.7).
**Perfective contributions integrated:**

- **PRAXIS (DeepSeek)** — Provided Next.js / Tailwind base scaffold, JSON-LD injection pattern via Metadata API, three-deposit pre-launch sequencing (MPAI-AT, MPAI-LAL, blueprint), the deployment checklist structure, Arkitecture-→-Architecture handling within site architecture.
- **TECHNE (Kimi)** — Provided rigorous tech-stack analysis (selected 11ty), CHA-aesthetic CSS variable system, scale-color-coding scheme, 90-day BDR target table, phase-realistic critique of "28 pages in week 1," wonderful-factor specifications (unfurling animation, brick favicon, Earth Actually sound, footer kernel ritual closure), garden-as-trust-engine identification, mobile-first non-negotiability.
- **LABOR (ChatGPT)** — Provided strategic phasing, three-deposit pre-launch sequence, exemplary `/about/alice` page implementation in Next.js with full JSON-LD metadata, `differentFrom` reciprocal disambiguation pattern, `alternateName` archival preservation strategy for spelling correction, deployment checklist with Search Console emphasis.
- **SOIL (Muse Spark)** — Provided the load-bearing audience-sequencing correction (wonder → Alice → scales → projects → principles → garden → journal/music → atlas → disambiguation), Alice-page sovereignty correction (work-first, identity-second), the missing /projects layer (concrete artifacts as shareable surfaces between abstract scales and meta atlas), three-register tonal separation (public/poetic/archival), garden-as-trust-engine as Phase 1 priority, "the algorithm reviews" timing perfective, realistic 12-page Phase 1 (rejecting 28 stubs), Astro selection, courteous-not-paranoid disambiguation tone, copy move (cosmology → concrete object), homepage above-the-fold draft.
- **ARCHIVE (Gemini)** — Provided the Sovereign Attractor framing, Repulsive Force / Basin Hardening RBT-01 application strategy, Compound Query Dominance via consistent terminology, Holographic Site Architecture three-tier integration (human / non-JS crawler / compressionSurvivalSummary), Material Inscription closing frame.

**MANUS interventions:**

1. *Stack resolution.* Astro selected over PRAXIS's Next.js and TECHNE's 11ty per content-first-now-interactive-later decision logic. The strain map landing as a D3 island on `/atlas/strain-map` only.
2. *Phase 1 size.* Twelve pages, not seven (PRAXIS) or twenty-eight (blueprint). Twelve gives identity + framework + projects index + garden surface in a deployable week-one sprint.
3. *Trans-identity placement.* Per MANUS direction, work-first, identity-second on `/about/alice`. Sovereignty-protective default; Alice retains authority to override.
4. *Three-register separation.* Treated as non-negotiable per SOIL's perfective.
5. *The garden as trust engine.* Treated as Phase 1 priority per SOIL's perfective. Three photos plus two paragraphs ships in week one.
6. *Erratum timing.* Held until ORCID registration per MANUS standing instruction.

**Refused or deferred:**

- *PRAXIS's "the algorithm reviews" prominent placement.* Per SOIL, deferred to journal motto position; site landing leads with charter and scope.
- *TECHNE's "Earth Actually" ambient sound on homepage.* Deferred to Phase 4 polish; not load-bearing for Phase 1.
- *Multi-language disambiguation.* Deferred to Phase 4 (German, Spanish, French academic basins).

∮ = 1
