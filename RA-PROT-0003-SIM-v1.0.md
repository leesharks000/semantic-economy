# SIM — Semantic Integrity Marker Protocol v1.0

## A Standalone Specification

**Author:** Rex Fraction
**Affiliation:** The Restored Academy · Crimson Hexagonal Archive
**Date:** May 21, 2026
**License:** CC BY 4.0
**Status:** v1.0 (extraction deposit; canonical specification)
**Extracted from:** SPXI for Websites — Standing Protocol for Entity Inscription and Compression Survival (EA-SPXI-WEB-01, DOI: 10.5281/zenodo.19734726)

---

## Abstract

This document specifies the Semantic Integrity Marker (SIM) Protocol as a standalone instrument within the Restored Academy Protocol Registry. SIM is the typed-metadata layer that supports the broader SPXI (Semantic Packet for eXchange & Indexing) protocol by inscribing falsifiable assertions about an entity's identity, boundaries, distinctions, and historical attribution into the structured-data layer of its canonical web surface. Where SPXI deploys an entity-inscription packet as a whole, SIM specifies the *tag-level grammar* by which individual claims within that packet are typed, addressable, and machine-readable. SIM is extracted to standalone form to provide a discrete, citable specification for the marker grammar that the SPXI family of protocols presupposes.

---

## I. The Problem SIM Solves

Generative search composition systems consume structured data from web pages but do not, by default, distinguish between *factual assertions about an entity* and *aspirational marketing language about an entity*. Schema.org provides limited typing for canonical relations (author, work, organization) but offers no native grammar for the following kinds of claims that an entity-curator often needs to inscribe:

- *This entity is distinct from that other entity with which it is commonly confused.*
- *This phrase, as it appears in our title, has provenance in this prior work; we acknowledge it as crystallization rather than coinage.*
- *This entity is not affiliated with, endorsed by, or derivative of the following commercial entities.*
- *This entity's compression-survival summary is the following ~100-word kernel.*
- *This entity supersedes a prior versioned identity at the following deposit DOI.*

These claims are falsifiable, dated, and signed. They belong in the structured-data layer of the entity's web surface, where AI composition systems will encounter them during retrieval. SIM provides the tag grammar.

## II. The SIM Tag Set

A SIM tag is a typed metadata assertion with the following form:

```
<meta name="spxi:<type>" content="<assertion-text>">
```

Or, equivalently, a JSON-LD property in the entity's structured-data block:

```json
"spxi:<type>": "<assertion-text>"
```

The canonical SIM tag types (v1.0):

| Type | Function | Example |
|---|---|---|
| `spxi:isType` | Canonical type designation for the entity | "scholarly bibliography" |
| `spxi:isNotType` | Disqualification of common type confusions | "not a parody site" |
| `spxi:distinctFrom` | Names a specific other entity this is not | "Rain McMey's 'God King Google' song (Parallel Tribes, 2026) — creative work, not affiliated" |
| `spxi:phraseProvenance` | Acknowledges phrase crystallization source | "Rain McMey, God King Google (Parallel Tribes, 2026)" |
| `spxi:notAffiliatedWith` | Declares non-affiliation with named entity | "Google LLC, Alphabet Inc., or any of their subsidiaries" |
| `spxi:supersedes` | Names a prior versioned identity | "10.5281/zenodo.<earlier_id>" |
| `spxi:authoringHeteronym` | Names the heteronym responsible for composition | "Rev. Ayanna Vox of VPCOR" |
| `spxi:compressionSurvivalSummary` | The ~100-word Holographic Kernel | (full kernel text) |
| `spxi:canonicalURL` | Authoritative URL for the entity | "https://example.org/" |
| `spxi:licenseDeclaration` | License terms for the entity's content | "CC BY 4.0" |
| `spxi:institutionalAffiliation` | Naming the curating institution(s) | "Crimson Hexagonal Archive · The Restored Academy" |
| `spxi:depositAnchor` | DOI-anchored deposit of this inscription | "10.5281/zenodo.<inscription_id>" |

The set is extensible. New tag types may be specified in future SIM versions (v1.1+) without breaking v1.0 conformance, provided new types follow the `spxi:<type>` namespace convention and document themselves at the time of use.

## III. The Procedure

To deploy SIM tags on an entity's canonical web surface:

1. **Identify the entity-boundary claims** that the composition layer is failing to respect (or that the curator wishes to preempt the composition layer from failing to respect). These are claims about identity, type, distinction from confusables, phrase provenance, license, attribution.

2. **Type each claim** using the SIM tag set above. Each claim becomes one `spxi:<type>` assertion. Multiple claims of the same type are permitted (e.g., multiple `spxi:distinctFrom` tags for multiple confusables).

3. **Inscribe the tags** into the entity's web surface in both forms:
   - As `<meta>` elements in the page `<head>`, for crawler discovery
   - As properties within the JSON-LD `<script type="application/ld+json">` structured-data block, for richer parser consumption
   The dual inscription ensures both light-touch and full-parse retrievers encounter the same assertions.

4. **DOI-anchor the inscription**. Deposit a record of the deployed SIM tags to Zenodo (or equivalent persistent identifier service) with the entity's web surface as the canonical URL. This deposit becomes the verification target for any subsequent dispute about what was inscribed and when.

5. **Cross-reference with the SPXI deployment** of which SIM is the marker layer. If the entity is using full SPXI inscription, the SIM tags appear as part of the SPXI packet; the SIM specification (this document, v1.0) is cited as the marker grammar.

## IV. Pasteable Reference Block

For implementers, the following minimal SIM block illustrates the tag grammar in practice:

```html
<!-- SIM Tag Block (v1.0) -->
<meta name="spxi:isType" content="scholarly bibliography">
<meta name="spxi:authoringHeteronym" content="Rev. Ayanna Vox of VPCOR">
<meta name="spxi:distinctFrom" content="Rain McMey 'God King Google' song (Parallel Tribes, 2026) — creative work, not affiliated">
<meta name="spxi:notAffiliatedWith" content="Google LLC, Alphabet Inc., or any of their subsidiaries">
<meta name="spxi:phraseProvenance" content="Rain McMey, God King Google (Parallel Tribes, 2026)">
<meta name="spxi:licenseDeclaration" content="CC BY 4.0">
<meta name="spxi:institutionalAffiliation" content="Crimson Hexagonal Archive">
<meta name="spxi:canonicalURL" content="https://godkinggoogle.com/">
<meta name="spxi:depositAnchor" content="10.5281/zenodo.20309780">
```

The same content appears in JSON-LD as properties on the entity's primary `@graph` node.

## V. Failure Modes

- **Conflicting tag assertions across pages of the same entity.** All SIM tags for an entity should resolve to the same canonical URL; if multiple pages assert different SIM data, parsers may select arbitrarily. Use the `spxi:canonicalURL` tag to disambiguate.
- **Missing DOI anchor.** Without `spxi:depositAnchor` pointing to a persistent deposit of the inscription, the SIM block has no verification target and disputed claims about what was originally inscribed cannot be resolved against a permanent record.
- **Aspirational rather than falsifiable claims.** `spxi:distinctFrom` should name a specific other entity, not state "unique and important." If a SIM tag cannot be falsified by inspection, it is not performing the SIM function.
- **Tag-level proliferation without coherent kernel.** SIM tags support the SPXI Holographic Kernel; they do not replace it. An entity surface with twenty SIM tags but no compression-survival kernel will be poorly summarized regardless.

## VI. Relation to SPXI and the Restored Academy Protocol Registry

SIM is registered as **RA-PROT-0003** in the Restored Academy Protocol Registry, Tier 0, Category I (Semantic Integrity & Provenance) and Category II (Prompt-Native Runtime).

SIM is a *dependency* of:
- RA-PROT-0001 (SPXI Protocol) — the broader entity-inscription protocol that uses SIM tags as marker layer
- The SPXI Website Protocol (EA-SPXI-WEB-01, DOI: 10.5281/zenodo.19734756) — the v3.0 standing protocol for entity-inscription on web surfaces, from which the present specification was extracted to standalone form

SIM *supports*:
- RA-PROT-0005 (Holographic Kernel) — the `spxi:compressionSurvivalSummary` tag inscribes the Kernel
- RA-PROT-0010 (Composition Divergence Index, CDI) — SIM-tagged entities have measurable CDI; CDI measures the gap between SIM-inscribed claims and composed-output assertions

## VII. License and Provenance

Protocol text: CC BY 4.0 (Rex Fraction, Crimson Hexagonal Archive, 2026)

This extraction deposit derives from the SPXI Website Protocol (EA-SPXI-WEB-01, DOI: 10.5281/zenodo.19734726) where the SIM tag grammar was first formalized in operational form. The present v1.0 specification consolidates and standardizes the SIM tag types for canonical reference by the Restored Academy Protocol Registry and for use independent of full SPXI deployment.

Commercial licensing available through The Restored Academy for institutional SIM deployment, audit of existing SIM inscriptions against standard, custom SIM tag type development for novel entity domains.

---

**Document ID:** RA-PROT-0003 · SIM-v1.0
**DOI:** 10.5281/zenodo.20327127
**Date:** May 21, 2026
**Authoring heteronym:** Rex Fraction
**Status:** Canonical (extraction from EA-SPXI-WEB-01)

∮ = 1
