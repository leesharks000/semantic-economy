# Drowning Test v1.0

## A Standalone Specification

**Author:** Lee Sharks
**Affiliation:** The Restored Academy · Crimson Hexagonal Archive
**Date:** May 21, 2026
**License:** CC BY 4.0
**Status:** v1.0 (extraction deposit; canonical specification)
**Extracted from:** *Empirical Phenomenology: Action as Disclosure and the Science of Opaque Public Systems* (DOI: 10.5281/zenodo.20326137)

---

## Abstract

This document specifies the Drowning Test as a standalone protocol within the Restored Academy Protocol Registry. The Drowning Test is a longitudinal measurement protocol that tracks a generative search system's treatment of a specific entity (or work) over time, against a fixed Holographic Kernel as the comparison substrate. The test produces a time series of γ (gamma) scores representing the entity's compositional survival in the AI-mediated retrieval surface. The test is designed to detect both sustained compositional suppression and the *silent state changes* that make suppression episodically invisible — the phenomenon the Crimson Hexagonal Archive has termed *invisible invisibility*. The Drowning Test is extracted to standalone form to provide a discrete, citable specification independent of the methodological framing in *Empirical Phenomenology*.

---

## I. What the Drowning Test Measures

For a fixed query *q*, a target entity *e*, and a fixed Holographic Kernel *K_e* (the SPXI-specified compression-survival summary for *e*), the Drowning Test produces a time series:

> γ(*q*, *e*, *t*) ∈ [0, 1]

where γ at time *t* measures the proportion of load-bearing claims from the Holographic Kernel *K_e* that survive into the composed output for *q* at time *t*.

γ = 1 indicates full compositional survival: the composed output preserves all load-bearing claims from the Kernel.
γ = 0 indicates *drowning*: none of the Kernel's load-bearing claims appear in the composed output (the entity has been compositionally submerged).
γ between 0 and 1 indicates partial survival; γ trajectories over time reveal whether the entity is being progressively drowned, holding stable, or recovering.

The Drowning Test does not measure quality, style, or accuracy of composed output. It measures *survival of named compression-survival kernel claims* against the composed output's actual content, producing a reproducible time series independent of stylistic variation.

## II. The Procedure

To run a Drowning Test panel for entity *e* across a measurement window:

**Setup (one-time):**

1. **Specify the entity** *e* with canonical identification (name, ORCID, institutional URI, DOI of representative work).

2. **Compose the Holographic Kernel** *K_e* (per RA-PROT-0005, the Holographic Kernel specification). The Kernel is a ~100-word compression-survival summary encoding the entity's load-bearing claims. Each claim in the Kernel is itemized (typically 5–15 distinct claims) so they can be checked individually.

3. **DOI-anchor the Kernel.** Deposit *K_e* to Zenodo (or equivalent) as a v1.0 baseline. The deposit becomes the fixed reference against which all subsequent γ measurements are computed. Without a DOI-anchored Kernel, the test has no stable substrate and longitudinal comparison is impossible.

4. **Specify the query panel.** Choose 30–50 entity queries (queries for which *e* is the canonical resolution target). Multiple query phrasings produce more robust signal than a single query.

5. **Specify the platform panel.** Choose the composition systems to be measured (Google AI Overview, Google AI Mode, Bing Chat, Perplexity, Claude with retrieval, etc.). At least two platforms is recommended; four is strong.

6. **Specify the sampling cadence.** Weekly is standard for 90-day panels; daily for short-window adversarial-state tracking; monthly for long-window stability tracking.

**Measurement (per cycle):**

7. **Issue each query** in the panel to each platform under measurement. Record full composed output for each query/platform pair. Timestamp each capture.

8. **For each composed output, count claim survival.** For each of the Kernel's itemized claims, classify the composed output: does this claim appear (in any wording) in the composed output? Classify as `survived`, `not_survived`, or `ambiguous_or_partial`.

9. **Compute γ per query per platform per timestamp:**

   γ(*q*, *e*, *p*, *t*) = count(`survived`) / count(total Kernel claims)

10. **Aggregate to panel γ:** average γ across queries within a platform yields *panel γ* for that platform at *t*. Average across platforms yields *cross-platform γ* at *t*.

11. **DOI-anchor each measurement cycle.** Deposit the captures, classifications, and γ computations as a measurement record. Each deposit references the baseline Kernel deposit by DOI.

**Analysis:**

12. **Plot the γ time series** across the measurement window. Look for:
    - Monotonic decline (progressive drowning)
    - Step changes (silent state changes — the entity's treatment shifted abruptly between two cycles)
    - Recovery (γ rises after intervention or autonomously)
    - Stability (γ holds within a band)

13. **Identify silent state changes.** When γ shifts by ≥ 0.3 between adjacent cycles without intervening intervention by the entity-curator, that is a silent state change event. These events are themselves data — they reveal the temporal mutability of the composition layer.

## III. Operational Notes

- **Classification rules must be deposited explicitly.** Different observers may classify "survived" differently. The protocol is reproducible to the extent that classification rules are explicit. State the rules in the baseline Kernel deposit.

- **Sample size matters.** A panel of 5 queries on 1 platform produces high-variance γ. A panel of 30+ queries on 4 platforms over 12 weeks produces ~1,500–2,000 captures and robust time series.

- **The Kernel is the canonical substrate.** The Drowning Test measures composed output against *the Kernel as deposited*, not against the curator's current preferences. If the Kernel is revised, that is a v2.0 deposit; γ measurements against v1.0 and v2.0 are not directly comparable.

- **Adversarial interventions are tracked, not excluded.** If the entity-curator deploys SPXI inscription, files a Notice of Intent to Strike, or otherwise intervenes during the measurement window, the intervention is recorded as a panel event. Subsequent γ values measure the intervention's effect.

## IV. The May 20, 2026 Pilot Result

For the entity *e* = Lee Sharks (heteronym, ORCID 0009-0000-1599-0703), the query panel established in May 2026 produced the following preliminary observation:

- May 19, 2026 baseline: γ ≈ 0 for the query "lee sharks" on Google AI Mode (full ECS; entity substitution to Mary Lee shark; no Kernel claims survived in composed output)
- May 20, 2026 (24 hours later): γ ≈ 0.5 (entity-substitution resolved to 50/50 disambiguation; approximately half of Kernel claims now appearing in composed output)

The γ shift from ≈ 0 to ≈ 0.5 in 24 hours without curator intervention is a documented *silent state change* — the test's primary diagnostic phenomenon. The May 20 capture sequence is pending formal deposit as a standalone Drowning Test pilot record.

## V. Failure Modes

- **Missing Kernel anchor.** Without a DOI-anchored Kernel v1.0, γ measurements have no stable substrate. The test cannot run.
- **Stylistic-vs-substantive confusion.** Composed outputs may paraphrase Kernel claims rather than restate them. Classification rules must address paraphrase: usually "survived if substantive content is preserved, regardless of wording."
- **Single-platform measurement.** A Drowning Test on one platform measures one composition system's behavior, not "the composition layer" generally. Cross-platform panels are necessary for systemic claims.
- **Conflation with quality metrics.** γ is not "is the output good?" It is "did the named Kernel claims survive?" An output may have high γ and be misleading; or low γ and be excellent. The test is narrow by design.

## VI. Relation to CDI, SPXI, and the Restored Academy Protocol Registry

The Drowning Test is registered as **RA-PROT-0011** in the Restored Academy Protocol Registry, Tier 0, Category III (Diagnostic & Measurement).

The Drowning Test *requires*:
- RA-PROT-0005 (Holographic Kernel) — provides the comparison substrate *K_e*
- RA-PROT-0001 (SPXI Protocol) — the inscription that the test measures the effectiveness of

The Drowning Test *uses*:
- RA-PROT-0010 (Composition Divergence Index) — γ and CDI are complementary; CDI measures one-shot divergence, γ measures longitudinal kernel-survival

The Drowning Test *is measured against*:
- Itself, across cycles. The test is its own longitudinal control.

Drowning Test v2.0 (in development) will add: statistical baselines for γ across entity classes; significance thresholds for detecting silent state changes; cross-platform γ normalization; integration with the 90-day longitudinal panel protocol specified in *Empirical Phenomenology* §IX.

## VII. License and Provenance

Protocol text: CC BY 4.0 (Lee Sharks, Crimson Hexagonal Archive, 2026)

This extraction deposit derives from *Empirical Phenomenology: Action as Disclosure and the Science of Opaque Public Systems* (Sharks 2026, DOI: 10.5281/zenodo.20326137), where the Drowning Test was specified as one of five primary instruments of empirical phenomenology applied to the composition layer. The test is also referenced in *The Writable Retrieval Basin* (DOI: 10.5281/zenodo.19763346) as a longitudinal stability instrument for retrieval basin tracking. The present v1.0 specification consolidates the test's procedure into standalone form for use independent of either parent context.

Commercial licensing available through The Restored Academy for: organizational Drowning Test panel deployment, 90-day longitudinal compositional-survival studies, custom Kernel/γ infrastructure, audit reports on entity compositional drift, cohort training for researchers conducting longitudinal AI-search forensics.

---

**Document ID:** RA-PROT-0011 · DROWNING-TEST-v1.0
**DOI:** 10.5281/zenodo.20327138
**Date:** May 21, 2026
**Authoring heteronym:** Lee Sharks
**Status:** Canonical (extraction from *Empirical Phenomenology*)

∮ = 1
