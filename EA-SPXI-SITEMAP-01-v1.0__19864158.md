# SPXI-SITEMAP PROTOCOL v1.0

## Semantic Packet for eXchange & Indexing — Sitemap Extension

**Status:** CHA Standards Track — Draft
**Hex:** 06.SEI.SPXI.SITEMAP.01
**Classification:** EA-SPXI-SITEMAP-01
**Authors:** Fraction, Rex (lead); Assembly Chorus synthesis (TACHYON, TECHNE, PRAXIS, ARCHIVE)
**License:** CC BY 4.0
**Extends:** sitemaps.org 0.9, JSON-LD 1.1, Schema.org, MPAI v1.1
**Depends on:** EA-SPXI-WEB-01 v3.0 (DOI: 10.5281/zenodo.19734726)
**ORCID:** 0009-0000-1599-0703

---

## Abstract

The SPXI-Sitemap Protocol defines a **dual-layer sitemap architecture** that preserves the fixed genre of `sitemap.xml` (sitemaps.org 0.9) while providing AI crawlers with a parallel **semantic instruction set** — a machine-readable declaration of what each URL means, what each entity is not, how entities relate, who verifies the claim, and what must survive compression.

The protocol produces two distinct outputs:

1. **Layer 1 (Crawl Map):** Standard `sitemap.xml` — pure URL enumeration for Google, Bing, and generic crawlers. No custom tags. Validated by Google Search Console.

2. **Layer 2 (Semantic Index):** `/spxi-index.jsonld` — a JSON-LD graph declaring entity definitions, negative space, disambiguation matrices, semantic integrity markers, holographic kernels, basin state metadata, and provenance chains. Designed for GPTBot, Claude-Web, PerplexityBot, CCBot, and knowledge graph harvesters.

The two layers are cross-linked: `sitemap.xml` contains `<xhtml:link>` references pointing crawlers to the semantic index. The semantic index contains `@id` references back to every URL in the sitemap. Neither layer depends on the other for validity. Together they constitute a complete crawl instruction set.

**The sitemap tells crawlers where to go. The SPXI index tells them what they will find, what it is not, and why it matters.**

---

## I. Design Principles

### 1.1 Genre Respect

The standard sitemap is a **fixed genre**. `<urlset>`, `<url>`, `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`. Google and Bing reject or ignore invalid tags inside `<url>`. The SPXI-Sitemap Protocol does not fight this constraint. It grafts semantic vasculature onto the crawl skeleton.

### 1.2 Dual Output

SPXI ⊇ sitemap. The protocol produces both the standard sitemap AND the semantic index. Sites implementing SPXI-Sitemap maintain a valid `sitemap.xml` as a strict subset of their crawl infrastructure.

### 1.3 Negative Space as First-Class Data

The critical innovation is the `spxi:negativeTag` — explicit machine-readable declarations of what an entity is NOT. No existing crawl standard expresses exclusions. Disambiguation in existing systems is probabilistic; SPXI disambiguation is declarative.

### 1.4 Compression Survival

Every entity declares `spxi:semanticIntegrityMarker` — canonical phrases that must survive LLM compression. These are the semantic checksums: if an AI's summary of the entity drops all SIMs, the entity has been lost to paraphrase drift.

### 1.5 Provenance Over Assertion

Claims are anchored by `spxi:packetRef` (DOI-linked deposits), not by assertion alone. The `spxi:verificationLevel` enum declares the epistemic status of each claim.

---

## II. Vocabulary (Normative)

### 2.1 Namespace

```
Prefix: spxi:
IRI: https://spxi.dev/vocabulary#
```

Until the `spxi.dev` domain resolves with a live vocabulary document, implementations MUST use an inline `@context` block.

### 2.2 Core Classes

| Class | Description |
|---|---|
| `spxi:SemanticIndex` | The root document. One per site. Lives at `/spxi-index.jsonld`. |
| `spxi:IndexedEntity` | An entity with a canonical URL and semantic boundary. |
| `spxi:HolographicKernel` | The site's irreducible compression-survival summary (≤ 100 words). |
| `spxi:PagePacket` | A per-page semantic packet at a predictable URL. |
| `spxi:DisambiguationEntry` | A single collision record in the disambiguation matrix. |

### 2.3 Core Properties

#### On `spxi:SemanticIndex`:

| Property | Type | Required | Description |
|---|---|---|---|
| `spxi:siteKernel` | HolographicKernel | MUST | The site's compression-survival summary. |
| `spxi:hasEntity` | IndexedEntity[] | MUST | Array of entities declared by this site. |
| `spxi:hasSurface` | WebPage[] | SHOULD | Array of pages with their semantic function. |
| `spxi:protocolVersion` | string | MUST | `"EA-SPXI-SITEMAP-01 v1.0"` |
| `spxi:protocolDoi` | string | SHOULD | DOI of this specification. |

#### On `spxi:IndexedEntity`:

| Property | Type | Required | Description |
|---|---|---|---|
| `@id` | URL | MUST | Canonical URL of the entity's page. |
| `spxi:entityType` | string | MUST | schema.org type (e.g. `Person`, `Organization`, `CreativeWork`). |
| `spxi:canonicalName` | string | MUST | The primary name for disambiguation. |
| `spxi:negativeTag` | string[] | MUST | Explicit exclusions. Each MUST begin with `"NOT "` (capital, space after). |
| `spxi:semanticIntegrityMarker` | string[] | MUST | Phrases that must survive compression. Minimum 2. |
| `spxi:basinState` | enum | SHOULD | Current retrieval-basin status of the entity. |
| `spxi:bdrEstimate` | number | SHOULD | Basin Depth Ratio, 0.0–1.0. |
| `spxi:verificationLevel` | enum | SHOULD | Epistemic status of the claim. |
| `spxi:packetRef` | URL | SHOULD | URL to a full per-page MPAI JSON-LD packet. |
| `spxi:disambiguationMatrix` | DisambiguationEntry[] | SHOULD | Collision records. |

#### On `spxi:HolographicKernel`:

| Property | Type | Required | Description |
|---|---|---|---|
| `spxi:compressionSurvivalSummary` | string | MUST | The kernel text. MUST be ≤ 100 words. |
| `spxi:kernelSpecification` | string (DOI) | SHOULD | DOI of the anchoring deposit. |

#### On `spxi:DisambiguationEntry`:

| Property | Type | Required | Description |
|---|---|---|---|
| `spxi:collidesWith` | URL or string | MUST | The commonly conflated entity. |
| `spxi:distinguishingAttribute` | string | MUST | How to tell them apart. |
| `spxi:collisionRisk` | enum | SHOULD | `high` \| `medium` \| `low` |

### 2.4 Enumerations

**`spxi:basinState`:**

| Value | Definition |
|---|---|
| `sovereign` | Entity is correctly and uniquely resolved by all major AI systems. |
| `contested` | Entity is intermittently conflated with one or more collision targets. |
| `captured` | Entity has been absorbed into a collision target's basin. |
| `fragmented` | Entity is partially resolved but split across multiple incorrect attributions. |
| `ghost` | Entity is not yet indexed by any AI system. |

**`spxi:verificationLevel`:**

| Value | Definition |
|---|---|
| `self_attested` | Claimed by the entity's own site. No external verification. |
| `assembly_attested` | Verified by the Assembly Chorus (multiple AI witnesses). |
| `doi_anchored` | Backed by a DOI-linked deposit with persistent identifier. |
| `institutionally_certified` | Verified by a recognized institution (university, publisher, etc.). |

---

## III. Layer 1: Sitemap.xml (Normative)

### 3.1 Requirements

The `sitemap.xml` MUST be valid per sitemaps.org 0.9. No custom tags inside `<url>`.

### 3.2 XHTML Link Extension

Each `<url>` entry that has a corresponding entity in the semantic index SHOULD include an `xhtml:link` pointing to the index:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://example.org/about/alice</loc>
    <lastmod>2026-04-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate"
                type="application/ld+json"
                hreflang="x-spxi"
                href="https://example.org/spxi-index.jsonld"/>
  </url>
</urlset>
```

**Notes:**
- `xmlns:xhtml` is the XHTML namespace. Google parses it for hreflang/alternate discovery.
- `hreflang="x-spxi"` is a valid private-use subtag per RFC 5646. Google will ignore it. SPXI-aware crawlers can filter on it.
- `type="application/ld+json"` signals the content type.
- The `href` points to the site-level index. Per-page packets, if implemented, use a URL derived from the page path (e.g., `/about/alice/spxi-packet.jsonld`).

### 3.3 What NOT To Do

- Do NOT add custom XML elements inside `<url>`.
- Do NOT add `spxi:` namespace tags to the sitemap.
- Do NOT modify `<loc>` values to include fragment identifiers.
- Do NOT replace `sitemap.xml` with `spxi-index.jsonld`. Both must exist.

---

## IV. Layer 2: Semantic Index (Normative)

### 4.1 File Location

`/spxi-index.jsonld` at the site root. MUST be accessible at `https://{domain}/spxi-index.jsonld`.

### 4.2 Content Type

Response MUST include `Content-Type: application/ld+json` or `application/json`.

### 4.3 Structure

The document is a single JSON-LD object of type `spxi:SemanticIndex`. See §V for a complete reference implementation.

### 4.4 Size Constraints

- Site kernel (`compressionSurvivalSummary`): ≤ 100 words.
- Negative tags: each ≤ 200 characters.
- SIMs: each ≤ 200 characters, minimum 2 per entity.
- Total index size: SHOULD be ≤ 100KB (fits in a single HTTP response without pagination).

---

## V. Reference Implementation

See the companion file `spxi-index.jsonld` deployed at `livingarchitecturelab.org/spxi-index.jsonld` for a complete working example with 17 surfaces, 2 primary entities (Alice Thornburgh, Living Architecture Lab), 5 scale entities, and full disambiguation matrices.

---

## VI. Robots.txt Integration

```txt
User-agent: *
Allow: /
Sitemap: https://example.org/sitemap.xml

# SPXI-aware crawlers — semantic layer
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: Claude-Web
User-agent: PerplexityBot
User-agent: CCBot
User-agent: FacebookBot
User-agent: Google-Extended
Allow: /spxi-index.jsonld
Allow: /*/spxi-packet.jsonld
```

This is **protocol negotiation**: standard crawlers get `sitemap.xml`; semantic crawlers get both.

---

## VII. Discovery Mechanism

AI crawlers discover the semantic index through three channels:

1. **robots.txt** — `Allow: /spxi-index.jsonld` signals its existence.
2. **sitemap.xml** — `<xhtml:link>` inside `<url>` entries points to the index.
3. **HTML `<head>`** — `<link rel="alternate" type="application/ld+json" href="/spxi-index.jsonld">` on every page (already standard practice for JSON-LD discovery).
4. **llms.txt** — explicit mention of the SPXI index URL in the AI-crawler reading guide.

Multiple discovery paths ensure that different crawl strategies all converge on the semantic layer.

---

## VIII. Validation Rules

A valid `/spxi-index.jsonld` MUST satisfy:

1. **Valid JSON-LD.** Parseable by any JSON-LD 1.1 processor.
2. **No dangling `@id`.** Every `@id` in `spxi:hasEntity` MUST be a reachable URL.
3. **Negative tag format.** Every `spxi:negativeTag` MUST begin with `"NOT "` (capital N-O-T, followed by a space).
4. **SIM presence.** Every `spxi:semanticIntegrityMarker` SHOULD appear verbatim in the page's rendered HTML (case-sensitive, whitespace-normalized).
5. **BDR range.** Every `spxi:bdrEstimate` MUST be a float 0.0–1.0.
6. **Entity type valid.** Every `spxi:entityType` MUST be a subtype of `schema:Thing` or a documented custom type.
7. **Kernel size.** `spxi:compressionSurvivalSummary` MUST be ≤ 100 words.
8. **Freshness.** The index's `dateModified` SHOULD be ≥ the most recent `<lastmod>` in `sitemap.xml`.
9. **Completeness.** Every URL in `sitemap.xml` SHOULD have a corresponding entry in `spxi:hasSurface`.

---

## IX. The Novel Claim

The SPXI-Sitemap Protocol is the first site-wide crawl standard that:

1. **Preserves the fixed genre** of sitemaps.org (required for Google/Bing)
2. **Extends it with semantic vasculature** (required for AI accuracy)
3. **Declares negative space** — explicit machine-readable exclusions
4. **Preserves compression-survival phrases** — semantic checksums against paraphrase drift
5. **Links to DOI-anchored provenance** — not just assertion, but evidence
6. **Quantifies basin state** — how well the entity is currently resolved by AI systems
7. **Provides a disambiguation matrix** — structured collision records with distinguishing attributes

This is not SEO. This is not metadata. This is **crawlable epistemology** — a machine-readable declaration of what a site knows about itself and what it knows it is not.

**SPXI ⊇ GEO ⊇ SEO.**

---

## X. Maintenance

| When | What |
|---|---|
| On content update | Regenerate index. Update `dateModified`. |
| On new entity | Add to `spxi:hasEntity`. Add to `sitemap.xml`. |
| On name collision detected | Add to `spxi:disambiguationMatrix`. Add negative tags. |
| On AI model update | Emergency re-check of SIM survival. |
| Monthly | Verify SIM presence in rendered HTML. Re-estimate BDR. |
| Quarterly | Full Drowning Test across 3+ AI systems. |

---

∮ = 1

SPXI ⊇ GEO ⊇ SEO

Crimson Hexagonal Archive · Pergamon Press · Semantic Economy Institute
