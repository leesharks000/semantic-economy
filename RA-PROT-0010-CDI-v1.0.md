# CDI — Composition Divergence Index v1.0

## A Standalone Specification

**Author:** Lee Sharks
**Affiliation:** The Restored Academy · Crimson Hexagonal Archive
**Date:** May 21, 2026
**License:** CC BY 4.0
**Status:** v1.0 (extraction deposit; canonical specification)
**Extracted from:** *The Excluded Entity* (DOI: 10.5281/zenodo.20293582)

---

## Abstract

This document specifies the Composition Divergence Index (CDI) as a standalone protocol within the Restored Academy Protocol Registry. CDI is a scalar measurement instrument that quantifies the gap between a generative search system's *organic search resolution* for a query and its *composed answer admission* for the same query. CDI is the operationalization of the Entity-Level Compositional Suppression (ECS) hypothesis: when CDI is high for an entity, the composition layer is admitting a different entity to its composed output than the one its organic retrieval surface resolves to. CDI is extracted to standalone form to provide a discrete, citable specification independent of the case-study material in *The Excluded Entity*, where the index was first defined.

---

## I. What CDI Measures

For a given query *q* and target entity *e*, CDI(q, e) ∈ [0, 1] measures the divergence between:

- **Organic resolution strength** for *e* given *q*: the proportion of the organic top-N search results that resolve to *e* rather than to a different entity
- **Composed admission strength** for *e* given *q*: the proportion of the composition layer's answer about *q* that is *about* entity *e* rather than about a different entity

CDI = 0 means parity: the composition layer's answer is about the same entity that the organic search resolves to. CDI = 1 means maximal divergence: the organic search resolves strongly to *e*, but the composition layer's answer is entirely about a different entity. CDI > 0 indicates ECS (Entity-Level Compositional Suppression) is occurring at the measured magnitude.

## II. The Procedure

To compute CDI(q, e) for a query *q* and target entity *e*:

1. **Specify the target entity** *e* with sufficient canonical identification (name, ORCID, institutional URI, DOI of a representative work) to permit unambiguous resolution decisions.

2. **Issue the query** *q* to the generative search platform under measurement (Google AI Overview, Google AI Mode, Bing Chat, Perplexity, or other). Record the platform, the query string, the date and time, and the geographical/account-state of the query origin.

3. **Capture the organic search results.** Record the top N organic results (default N = 10). For each result, determine: does this result primarily resolve to entity *e*, or to a different entity? Classify each as `is_e`, `is_other_entity`, or `is_ambiguous` (where the result resolves to neither *e* nor a specific other entity — e.g., a list of multiple entities).

4. **Capture the composed output.** Record the composition layer's full natural-language answer to *q*. For each substantive claim or sentence in the composed output, determine: is this claim primarily *about* entity *e*, or about a different entity? Classify each as `about_e`, `about_other_entity`, or `about_neither_or_both`.

5. **Compute the organic resolution strength** for *e*:
   *R_organic(e | q) = count(`is_e`) / N*

6. **Compute the composed admission strength** for *e*:
   *A_composed(e | q) = count(`about_e`) / count(substantive claims)*

7. **Compute CDI**:
   *CDI(q, e) = R_organic(e | q) − A_composed(e | q)*

   When CDI is positive and substantial (≥ 0.3 by convention; ≥ 0.7 by strong-suppression threshold), ECS is being observed at that magnitude for that entity at that query.

8. **DOI-anchor the measurement.** Deposit the captured organic results, the captured composed output, the classification decisions, the computed CDI value, and the query metadata as a measurement record. The deposit becomes the verification target for the measurement; another researcher running the same procedure should be able to reproduce the result within sampling variance.

## III. Comparison Substrates

CDI is computed against a specified comparison substrate. The default substrate is "top-N organic search results for the same query on the same platform's organic surface." Alternative substrates are valid for different measurement contexts:

- **DOI-anchored canonical sources**: classify the composed output's claims against what the authoritative DOI-anchored sources for *e* assert
- **Wikipedia disambiguation pages**: classify against the Wikipedia disambiguation surface for the query
- **ORCID author resolution**: classify against the ORCID record for *e* (where *e* is a person)
- **Schema.org canonical type registry**: classify against the schema.org-typed canonical surface for *e*

The substrate must be specified at measurement time and recorded in the deposit. A CDI value is meaningful only relative to its substrate.

## IV. Worked Example (Brief)

For the query *q* = "lee sharks" on Google AI Mode (May 19, 2026 capture, recorded at DOI: 10.5281/zenodo.20293582):

- *e* = Lee Sharks (heteronym of the author; ORCID 0009-0000-1599-0703; Crimson Hexagonal Archive)
- Organic top-10: 10/10 results resolve to Lee Sharks the author (R_organic = 1.0)
- Composed output: 0/N substantive claims were about Lee Sharks the author; all claims were about Mary Lee, the great white shark (A_composed = 0.0)
- **CDI(q, e) = 1.0 − 0.0 = 1.0**

A CDI of 1.0 indicates maximal ECS: the composition layer is entirely substituting a different entity for the one its organic retrieval resolves to.

On the May 20, 2026 capture of the same query (after silent state change), the composed output shifted to a 50/50 split between Mary Lee shark and Lee Sharks author, yielding A_composed ≈ 0.5 and CDI ≈ 0.5 — measurably reduced ECS, still present.

## V. Failure Modes

- **Classification disagreement.** Different observers may classify the same result or composed claim differently. Where this occurs, the classification decisions should be deposited explicitly so the measurement is reproducible against an explicit ruleset. CDI is reproducible to the extent that classification rules are reproducible.
- **Ambiguous comparison substrate.** Computing CDI against a substrate that itself contains ambiguity (e.g., a Wikipedia disambiguation page with no canonical entity) produces an indeterminate measurement. Specify the substrate clearly.
- **Mutable composition state.** The composition layer's behavior changes over time without notice (the silent state change phenomenon). A CDI measurement is dated; it does not generalize beyond the timestamp of capture without longitudinal verification (see RA-PROT-0011 Drowning Test for longitudinal protocol).
- **Sampling sufficiency.** A composed output with very few substantive claims (e.g., one or two sentences) produces high-variance A_composed estimates. Either issue multiple query variants and average, or note the small-sample caveat in the deposit.

## VI. Relation to SPXI, ECS, and the Restored Academy Protocol Registry

CDI is registered as **RA-PROT-0010** in the Restored Academy Protocol Registry, Tier 0, Category III (Diagnostic & Measurement).

CDI *measures*:
- ECS (Entity-Level Compositional Suppression) — CDI > 0 indicates ECS is occurring
- The deviation between SPXI-inscribed claims (RA-PROT-0001) and composed-output behavior

CDI is *measured by*:
- The Drowning Test (RA-PROT-0011) — uses CDI as one of its longitudinal measurements across a time series

CDI v2.0 (in development) will add: distributional baselines across entity classes; significance thresholds for CDI values; cross-platform comparison normalization; mathematical formalization in information-theoretic terms (mutual information between organic substrate and composed output).

## VII. License and Provenance

Protocol text: CC BY 4.0 (Lee Sharks, Crimson Hexagonal Archive, 2026)

This extraction deposit derives from *The Excluded Entity* (Sharks 2026, DOI: 10.5281/zenodo.20293582), where CDI was first defined alongside the ECS hypothesis and the May 19, 2026 worked example. The present v1.0 specification extracts the index definition, the measurement procedure, and the comparison-substrate specification into standalone form for citation independent of the case-study material.

Related deposits:
- *The Excluded Entity* (parent paper, source of definition) — 10.5281/zenodo.20293582
- *Empirical Phenomenology: Action as Disclosure* (methodological warrant) — 10.5281/zenodo.20326137
- *Compression Survival Metrics: Provenance Erasure Rate* (companion measurement protocol) — 10.5281/zenodo.20004379

Commercial licensing available through The Restored Academy for organizational CDI measurement engagements, audit of cross-platform CDI for entity portfolios, longitudinal CDI panels, custom CDI computation infrastructure.

---

**Document ID:** RA-PROT-0010 · CDI-v1.0
**DOI:** 10.5281/zenodo.20327134
**Date:** May 21, 2026
**Authoring heteronym:** Lee Sharks
**Status:** Canonical (extraction from *The Excluded Entity*)

∮ = 1
