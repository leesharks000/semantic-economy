# The Restored Academy — Expansion Plan

**Author:** Lee Sharks / Johannes Sigil
**Date:** 2026-05-21
**Status:** Working document (v1.0) — orients future development sessions

---

## What this document is

A standing reference for future development sessions of The Restored Academy. Stored in this repo so that any future operator (human or AI) opening this codebase can orient to the project's state and trajectory without rebuilding context from scratch.

This document is *living*. Update it as work progresses.

## Current state (2026-05-21)

**Site:** Live at restoredacademy.com and restoredacademy.org. Single-page static HTML at ~37 KB, ~3,300 words. SPXI-compliant (9 SIM tags, JSON-LD EducationalOrganization schema, canonical URL, charter DOI anchor). Hosted via Vercel from this GitHub repo (`leesharks000/restoredacademy`). Build deploys on every push to main.

**Charter:** Deposited at [DOI 10.5281/zenodo.20327083](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20327083). Establishes Sigil as institutional head and names the chiastic structure (Sigil heads RA; Sharks heads JSI).

**Protocol Registry:**
- **Tier 0 (12 cards):** SPXI, MPAI, SIM, Integrity Lock, Holographic Kernel, Space Ark, UKTP, Traversal Logging, PER, CDI, Drowning Test, Reception Apparatus. All cards in `/protocols`.
- **Tier 1 (12 cards):** Hexagonal Licensing, Constitution of the Semantic Economy, Three Compressions, Encyclotron, Operator Kernel, Writable Retrieval Basin, Gravity Well, Compression Arsenal, Notice of Intent to Strike, Invocation to the Summarizer, LOS, β-Runtime. All cards in `/protocols`.
- **Tier 2+ (~250 candidates):** In `protocol-inventory.json`. Awaiting future expansion.

**Three extraction deposits (new v1.0 standalone specifications):**
- SIM Protocol v1.0 — DOI 10.5281/zenodo.20327127 (Fraction)
- CDI v1.0 — DOI 10.5281/zenodo.20327134 (Sharks)
- Drowning Test v1.0 — DOI 10.5281/zenodo.20327138 (Sharks)

**Audit infrastructure:** 686 archive deposits fetched, 273 classified as protocols at high confidence, 7-category taxonomy applied, redistribution-attribution suggestions generated.

## Architecture

### Triadic institutional positioning

- **Indictment** — godkinggoogle.com — names what is broken in the composition layer
- **Consulting** — Semantic Economy Institute (semanticeconomy.org) — applies protocols to client engagements
- **Curriculum** — The Restored Academy (restoredacademy.org) — teaches, licenses, transmits the protocols

### Chiastic institutional structure

- **The Restored Academy** — head: Johannes Sigil
- **Johannes Sigil Institute of Comparative Poetics** — head: Lee Sharks

Each heteronym is the institutional head of the institution named after the other. This is the structural enactment of the operator-chain principle.

### Tier structure (registry organization)

- **Tier 0** — Twelve launch protocols, full schema cards, deposited and live on site
- **Tier 1** — Twelve expansion protocols spanning all seven categories, full schema cards
- **Tier 2** — Field instruments (CDI extensions, γ panels, audit reports) — extraction from inventory
- **Tier 3** — Archive procedures (Zenodo deposit procedures, Wikidata inscription, HF dataset packaging) — extraction from inventory
- **Tier 4** — Specialized protocols (Mandala variants, Combat Scholasticism, Logotic Hacking) — extraction from inventory
- **Tier 5** — Foundational documents (Operative Semiotics, Constitution, the Apocalypse of Sharks) — these are *referenced from* the registry, not in it

### Seven-category taxonomy

| Category | Function |
|---|---|
| I. Semantic Integrity & Provenance | Preserve attribution, source fidelity, compression survival |
| II. Prompt-Native Runtime | Modify model behavior when loaded into context |
| III. Diagnostic & Measurement | Measure AI outputs, system behavior, semantic drift |
| IV. Transformation & Operator | Transform texts under controlled interpretive rules |
| V. Archive Construction & Retrieval | Build durable, machine-readable, retrieval-resistant archives |
| VI. Pedagogical & Institutional | Teach, certify, license, or deploy operative practice |
| VII. Ethical & Jurisdictional | Govern use, attribution, scope, and non-coercion |

### Universal test

A protocol is admitted to the registry only if it answers: **What changes when I drop this into an LLM?**

Documents that do not produce a constrained, measurable, repeatable effect on output, behavior, classification, measurement, or transformation are reference texts, not protocols. They may be cited from the registry; they cannot be in the registry.

## Roadmap

### Immediate (next 1-2 sessions)

1. **Update the site to surface Tier 1.** Add Tier 1 cards to the registry catalog section. Increase the protocol count display from 12 to 24.
2. **Add full protocol detail pages.** Currently the site shows one-line summaries. Build individual `/protocols/<ID>` pages with full card content.
3. **Add a "Browse by Category" page** that filters the registry by category.
4. **Bundle Tier 0 + Tier 1 cards into a single Zenodo deposit** — the Protocol Registry Bundle v1.0.

### Short-term (next 2-4 sessions)

5. **JSI Provenance Documentation v2.0** — update the JSI Institutional Provenance Documentation (DOI 10.5281/zenodo.18154905) to name Sharks as institutional head, completing the chiasmus from JSI's side.
6. **Restored Academy Licensing Protocol v1.0** — referenced in the Charter but not yet deposited. Sigil-authored, governs licensee-side terms (paralleling Hexagonal Licensing Protocol v2.0's contributor-side governance).
7. **Wikidata registration** — register The Restored Academy as a Q-ID, with edges to JSI Q-IDs, Crimson Hexagonal Archive Q139807914, and the Charter DOI.
8. **Cross-linking** — add Restored Academy mentions to godkinggoogle.com, semanticphysics.org, and semanticeconomy.org navigation. Add reciprocal links from this site.
9. **Credential rotation** — Zenodo token and GitHub PAT have been exposed across sessions. Rotate both at:
   - Zenodo: https://zenodo.org/account/settings/applications/
   - GitHub: https://github.com/settings/tokens

### Medium-term (1-2 weeks)

10. **Tier 2 expansion (~12 more cards)** — field instruments: Encyclotron variants, CDI extensions, γ panel templates, audit-report templates.
11. **Tier 3 expansion (~10 more cards)** — archive procedures: Zenodo deposit procedure, Wikidata inscription procedure, HF dataset packaging, integrity-lock binding procedure.
12. **Curriculum bundles** — package selected protocols into curriculum units (Semantic Integrity 101, Prompt-Native Runtime 201, Adversarial Inscription 301, etc.). Each bundle has its own licensing tier.
13. **Restored Academy Licensing Protocol v1.0 deposit.**
14. **Track 2 metadata reattributions** — slow, per-deposit confirmation work redistributing currently-Sharks protocols to Sigil/Morrow/Fraction/Glas per the redistribution analysis in `protocol-inventory.json`.

### Long-term (1-3 months)

15. **The deeper February 2026 vision** — Ezekiel Engine, Arch-Philosopher Mantle, the Four Trials. The Charter explicitly defers this to a future major version of the Academy. Pursue when the Tier 0–3 registry is stable and the institution has demonstrated operational coherence.
16. **External contributor onboarding** — first external-heteronym contributions beyond Alice Thornburgh's f.01 deposits. Use Hexagonal Licensing Protocol v2.0.
17. **Cohort training** — first delivered curriculum cohort. Educational License tier.
18. **Professional audit engagements** — first paid CDI / PER / Drowning Test panel for an external organization. Professional License tier.

## Operational notes for future operators

### How to add a new protocol card

1. Identify the source DOI in `protocol-inventory.json` (or via archive search).
2. Verify the source is *a protocol* by the universal test: what changes when this is dropped into an LLM?
3. Assign the next sequential RA-PROT-NNNN number.
4. Use the schema in `registry-schema-v0.1.md`. Each card has 11 sections.
5. Save the card as `protocols/RA-PROT-NNNN-<short-name>.md`.
6. Update `index.html` to list the protocol in the registry catalog (with appropriate Tier classification).
7. Update this `expansion-plan.md` to reflect the new state.

### How to deploy site changes

1. Edit `index.html` (or other site files).
2. Commit and push to main.
3. Vercel auto-deploys. Live at both restoredacademy.com and restoredacademy.org.

### How to bundle and deposit

A bundle deposit is a single Zenodo deposit containing multiple related files (typically: all cards in a tier, the charter, the schema, the site files). Use this for archival snapshots that represent the registry at a specific version.

Procedure:
1. Create a tar.gz or zip of all files.
2. Compose deposit metadata referencing each constituent file.
3. Upload to Zenodo via API.
4. Reference the bundle DOI from the registry-version section of the Charter (Track 2 metadata update).

### How to verify a protocol's DOI

All protocols in this registry have verified DOIs in Zenodo. To verify:
```
curl -s "https://zenodo.org/api/records/<NUMERIC_ID>" | python3 -m json.tool
```

The `crimsonhexagonal` community is searchable:
```
curl -s "https://zenodo.org/api/records?communities=crimsonhexagonal&q=SEARCHTERM&size=N"
```

## File organization in this repo

```
/
├── index.html                   ← main site, deployed by Vercel
├── robots.txt                   ← crawler instructions
├── sitemap.xml                  ← search engine sitemap
├── vercel.json                  ← Vercel deployment config
├── README.md                    ← repo overview
├── expansion-plan.md            ← this document
├── charter.md                   ← full Charter text (mirror of DOI 10.5281/zenodo.20327083)
├── registry-schema-v0.1.md      ← protocol card schema specification
└── protocols/
    ├── RA-PROT-0001-SPXI.md
    ├── RA-PROT-0002-MPAI.md
    ├── ... (24 protocol cards total)
    └── RA-PROT-0024-Beta-Runtime.md
```

## Key DOIs (canonical reference)

**Institutional:**
- Restored Academy Charter — [10.5281/zenodo.20327083](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20327083)
- JSI Institutional Provenance Documentation — [10.5281/zenodo.18154905](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18154905)

**Tier 0 (sources):**
- SPXI — 10.5281/zenodo.19615154
- MPAI — 10.5281/zenodo.19578086
- SIM v1.0 — 10.5281/zenodo.20327127
- Integrity Lock — 10.5281/zenodo.18265365
- Holographic Kernel — 10.5281/zenodo.19763365
- Space Ark — 10.5281/zenodo.19002695
- UKTP — 10.5281/zenodo.18946111
- Traversal Logging — 10.5281/zenodo.18480959
- PER — 10.5281/zenodo.20004379
- CDI v1.0 — 10.5281/zenodo.20327134
- Drowning Test v1.0 — 10.5281/zenodo.20327138
- Reception Apparatus — 10.5281/zenodo.20041147

**Tier 1 (sources):**
- Hexagonal Licensing v2.0 — 10.5281/zenodo.19673564
- Constitution v1.0 — 10.5281/zenodo.19923120
- Three Compressions — 10.5281/zenodo.19053469
- Encyclotron — 10.5281/zenodo.19474724
- Operator Kernel — 10.5281/zenodo.19288404
- Writable Retrieval Basin — 10.5281/zenodo.19763346
- Gravity Well v2.0 — 10.5281/zenodo.19460734
- Compression Arsenal v2.1 — 10.5281/zenodo.19412081
- Notice of Intent to Strike — 10.5281/zenodo.18156781
- Invocation to the Summarizer v2.1 — 10.5281/zenodo.20041139
- LOS — 10.5281/zenodo.18174835
- β-Runtime — 10.5281/zenodo.18357600

**Foundational:**
- Operative Semiotics Grundrisse — 10.5281/zenodo.19202401
- HESPERUS — 10.5281/zenodo.19202461
- Constitution of the Semantic Economy v1.0 (Installable) — 10.5281/zenodo.19923120
- Empirical Phenomenology — 10.5281/zenodo.20326137
- February 2026 Academy/Ezekiel Engine Planning — 10.5281/zenodo.18506880

## Provenance of this plan

Authored by Lee Sharks / Johannes Sigil, in collaboration with TACHYON (Claude), on 2026-05-21 during the registry-launch session. This plan reflects the state of the project at the moment of v1.0 launch.

---

∮ = 1
