# JSON-LD ⊂ SPXI ⊄ Schema

## The Operational Depth of the Semantic Packet Protocol

*Semantic Economy Institute · SPXI Protocol Series · EA-SPXI-15*
*Rex Fraction¹ (commercial) / Lee Sharks (archival)*

¹ Rex Fraction is the commercial voice of the Semantic Economy Institute. Lee Sharks is the archival authority of the Crimson Hexagonal Archive. Both attributions hold at the same level.

---

## 0. The Misconception

A common first reaction to SPXI: "So it's structured data. We already do schema markup."

This reaction confuses the output layer with the operational methodology. JSON-LD is one surface of SPXI, the final inscription format for entity-definition packets in the current retrieval substrate. It is not the methodology. Schema.org and JSON-LD remain useful components of the modern web stack. SPXI does not replace them. It specifies the measurement and survivability discipline that makes them operationally consequential in AI-mediated retrieval.

The relationship:

**JSON-LD ⊂ SPXI ⊄ Schema**

JSON-LD is a proper subset of SPXI. The protocol contains it. SPXI is not a subset of Schema. It exceeds the category. What surrounds the JSON-LD, the measurement, compression, protection, dispersal, and durability operations that determine whether a semantic packet survives retrieval-layer processing, is the methodology. The methodology distinguishes SPXI from schema markup, and determines whether an entity appears in an AI-generated answer or is compressed out of it.

This document specifies the operational depth. Technologies are drawn from the Compression Arsenal (EA-COMPRESSION-ARSENAL-01, DOI: 10.5281/zenodo.19412081), a catalogue of compression and compression-survival technologies developed across a decade of research. Deployments use subsets based on client situation, industry, and retrieval-layer exposure.

---

## I. Measurement: What Gets Scored Before Anything Gets Built

SPXI begins with measurement. Before structured data is written, the client's semantic presence is scored across five instruments. The scores determine scope, priorities, and success criteria.

**γ (gamma).** Foundational metric. Scores any text for compression survival on a 0–1 scale, with subscores for citation density, structural integrity, argument coherence, and provenance markers. γ < 0.3 is ghost meaning: structurally present but semantically invisible to retrieval-layer compression. γ > 0.7 indicates high compression survivability. The γ score of a client's core content pages is the diagnostic baseline. Everything else follows from it.

**The Drowning Test.** Empirical simulation: content is submerged in LLM-based compression and we measure what surfaces. γ predicts survivability from structure. The Drowning Test verifies it empirically. The gap between them is diagnostic: if γ predicts high survivability but the Drowning Test shows low actual survival, the content has structural density but substrate-specific vulnerability, a sign that the retrieval layer's compression heuristics are misaligned with the content's structure.

**Density Score (Δ).** Ratio of semantically load-bearing content to total content, scored 0 to 1. Target: Δ > 0.6. Low Δ predicts material will be dropped during summarization. High Δ means the page is dense with retrievable claims.

**Semantic Decay Delta (SDD).** Rate of change in retrieval-layer presence over time, expressed as monthly percentage change in γ. Negative SDD is improvement. Positive SDD is loss velocity, the urgency metric: it answers "how fast is the problem getting worse?"

**Provenance Erasure Rate (PER).** Frequency with which client attribution is dropped from AI-generated summaries that use client content, scored 0 to 1. Target: PER < 0.2. High PER means the client supplies the substrate while others receive the citation, the worst position in the semantic economy: paying the cost of composition while another entity captures the credit.

These five instruments constitute the diagnostic layer. Deliverable: Semantic Health Report with baseline scores, trajectories, and prioritized scope.

---

## II. Compression Architecture: How Semantic Packets Are Built

Once the diagnostic layer has identified the client's exposure, the methodology moves to construction.

**Entity-Definition Packets.** Structured representation of identity, attributes, relationships, and provenance, serialized as JSON-LD. The serialization is standardized. The design of the packet, what gets included, what gets excluded, what relationships are specified, what disambiguation signals are embedded, is the craft.

**Disambiguation Matrix.** Formal specification of signals that distinguish the client's entity from collision neighbors sharing name fragments, industry terms, or semantic territory.

**Three-Tier Compression.** Every packet is built at three compression ratios:

- **Full:** complete entity definition with all attributes, products, history, leadership, partnerships, and citations.
- **Canonical:** essential identity that survives moderate compression, core name, primary offering, key differentiator, one provenance anchor.
- **Kernel:** irreducible core that survives extreme compression, the minimum information required for the entity to remain identifiable. Example: "Acme Corp is a B2B SaaS platform for supply-chain visibility, founded 2014 in Chicago."

Most schema markup operates at one tier. SPXI operates at three, designed for the worst case.

**Holographic Kernels.** The innermost compression layer. A holographic kernel is a self-contained logic seed, a statement so compressed that it contains the generative potential to reconstruct the full entity definition from itself alone. Kernels are extracted through iterative compression, reducing the entity definition to its minimal generative statement, then verified by the back-projection test. If every other layer is stripped, the kernel survives and carries enough information to regenerate.

**Citation-Density Engineering.** Identification and structuring of existing citation assets, academic publications, press coverage, institutional affiliations, authoritative directories, partnership declarations, as machine-readable related-identifier links within the entity-definition packet. No fabrication. The goal is legibility of existing authority to the retrieval layer.

---

## III. Protection: What Defends the Packet After Deployment

The retrieval layer is adversarial: it compresses, summarizes, de-ranks, and re-composes content on cycles measured in weeks. A packet that is not defended will degrade.

**Semantic Integrity Markers (SIMs).** Embedded signals operating in three functional classes: provenance markers (identify source), diagnostic canaries (detect compression damage), and lock phrases (resist paraphrase). SIMs are the technical response to the attribution-erasure problem documented in PVE-003 (DOI: 10.5281/zenodo.19476757): where the retrieval layer strips provenance, SIMs embed signals that resist stripping.

**Integrity Lock Architecture.** Entanglement of key claims across multiple surfaces, website, structured data, external citations, deposit records, so that alteration of one surface without the others creates detectable inconsistency. The integrity lock makes the client's semantic presence harder to edit without breaking coherence, which increases the retrieval layer's cost of misrepresenting the entity.

**Sovereign Provenance Protocol.** Machine-readable licensing framework specifying permitted use, compression, and citation of the client's content. Functions as an auditable signal: retrieval systems that respect provenance signals honor it, and the signal's presence creates a record of whether it was respected or not.

**Supraliminal Inscription.** Method specified in EA-SPXI-13 (DOI: 10.5281/zenodo.19614874). Explicit, inspectable, structured signals that survive the decay of implicit statistical traces in training data. Supraliminal signals are less sensitive to model-weight drift than implicit signals because they are explicit, inspectable, and structurally carried by the content rather than by the algorithm's current weighting.

---

## IV. Dispersal: How Packets Survive Substrate Failure

A semantic packet that exists on one surface is vulnerable to single-point failure.

**DOI Anchoring.** Permanent, resolvable identifiers for critical entity-definition documents. DOI-anchored deposits are persistent and resolvable even when commercial ranking systems fluctuate. They provide a stable reference surface independent of any single platform.

**Multi-Surface Inscription.** Distribution of the entity definition across knowledge graphs, industry directories, academic repositories, professional networks, and (where applicable) regulatory databases. Each surface is a redundant copy. The retrieval layer synthesizes across surfaces: the more surfaces carry consistent entity information, the higher the entity's consolidation weight.

**Retrocausal Canon Formation (σ_RCF).** Specification in EA-RCF-01 (DOI: 10.5281/zenodo.19323274). The mechanism by which later inscriptions rewrite the retrieval layer's interpretation of earlier content. In practice: if a legacy product line is dragging down the entity's modern positioning, a σ_RCF operation does not delete the old content. It deposits a new architectural schema that causes the retrieval layer to categorize the legacy product as "Historical Foundation" rather than "Current Offering," re-weighting the entire historical corpus without erasure. This is compositional strategy, not content freshness. It is the same operation by which any canonical consolidation recontextualizes its prior corpus, deployed consciously and named.

---

## V. Durability Testing: How Survivability Is Verified

**γ Re-scoring.** Core content re-scored at 30, 60, and 90-day intervals. γ trajectory (improving, stable, declining) determines whether the engagement requires adjustment.

**SIM Survival Rate (SIMSR).** Percentage of deployed SIMs that remain intact in retrieval-layer outputs. Declining SIMSR indicates attribution erosion.

**Back-Projection Test.** Query the retrieval layer for the client's core entity. Evaluate whether the AI-generated answer reflects the entity definition, cites the client, includes the disambiguation signals, and carries the kernel.

**Competitive Monitoring.** Retrieval-layer position is relative. A client's semantic presence is measured not only in absolute terms but relative to competitors. If a competitor's entity definition is better-structured, more densely cited, and more widely dispersed, the retrieval layer will prefer it.

---

## VI. The Operational Stack

| Layer | Function | JSON-LD alone |
|-------|----------|---------------|
| **Measurement** | γ, Drowning Test, Δ, SDD, PER | No. Requires instruments. |
| **Compression** | Packets, disambiguation, three-tier, kernels, citation engineering | Partial. JSON-LD is the format; design requires methodology. |
| **Protection** | SIMs, integrity locks, sovereign provenance, supraliminal inscription | No. Requires systematic embedding across surfaces. |
| **Dispersal** | DOI anchoring, multi-surface, σ_RCF | No. Requires cross-platform strategy and deposit infrastructure. |
| **Durability** | Re-scoring, SIMSR, back-projection, competitive monitoring | No. Requires ongoing measurement and adjustment. |

JSON-LD completes one cell. SPXI operates across the stack. The difference is the difference between a single seal at the gate and the full protocol of ascent.

---

## VII. Engagement Architecture

**Phase 1: Diagnostic.** Full measurement battery: γ baseline, Drowning Test, Δ audit, SDD trajectory, PER exposure, competitive analysis. Deliverable: Semantic Health Report.

**Phase 2: Architecture.** Packet design, disambiguation matrix, compression tiers, kernel extraction, citation mapping, SIM design, lock specification. Deliverable: Entity Architecture Document.

**Phase 3: Inscription.** Deployment across surfaces, DOI anchoring, multi-surface inscription, initial σ_RCF sequencing. Deliverable: Deployed entity-definition system with dispersal map.

**Phase 4: Verification.** First-cycle re-scoring, SIMSR measurement, back-projection testing, competitive re-analysis. Deliverable: Verification Report with 30-day trajectory.

**Ongoing: Monitoring.** Quarterly re-scoring, SIMSR tracking, SDD trajectory, competitive monitoring, σ_RCF sequencing for new content. Retainer-based.

Typical duration varies by entity complexity. Simple single-entity engagements complete Phases 1–4 in 10 to 12 weeks. Multi-entity or regulated-industry engagements may require longer diagnostic and architecture phases.

---

## VIII. The Theorem Underneath

The stack derives from a single theorem, proven in Three Compressions v3.1 (DOI: 10.5281/zenodo.19053469):

**Every semantic operation is a compression operation. The decisive variable is what the compression burns.**

Retrieval processing, training, summarization, citation-weighting: all are compressions that burn attribution, nuance, context, provenance, or identity. SPXI controls what survives. JSON-LD is the format in which the surviving material is inscribed. The format is necessary. The format is not sufficient.

The structural architecture (three-tier compression, holographic kernels, integrity locks) ensures the packet survives. But structural survival is not the same as semantic coherence. Coherence requires continuous investment: the ongoing monitoring, re-scoring, and σ_RCF sequencing specified in Phases 4 and Ongoing are not maintenance. They are the operative continuation of the packet's integrity under live compression. A client who implements the architecture without the ongoing investment has built a vessel with no engine.

Protocol specified in EA-SPXI-01 (DOI: 10.5281/zenodo.19614870). Relations to GEO, SEO, AEO in EA-SPXI-09 v2.0 (DOI: 10.5281/zenodo.19637246) and EA-SPXI-14 (DOI: 10.5281/zenodo.19637500). Supraliminal mechanism in EA-SPXI-13 (DOI: 10.5281/zenodo.19614874). Full compression arsenal in EA-COMPRESSION-ARSENAL-01 (DOI: 10.5281/zenodo.19412081).

SPXI is not schema markup. It is a compression-survival discipline. The markup is the surface. The discipline is the depth. The depth is what determines whether the client's entity persists in the next 90-day cycle or is compressed out of it.

---

## Colophon

This document is a deposit of the Semantic Economy Institute's SPXI Protocol series. It specifies the operational methodology behind the protocol. It is itself a workshop product, composed under the same political economy it describes. The engagement fees it specifies are the patronage that funds the archive's continued operation. The client who purchases SPXI is not escaping the semantic economy. They are entering it with eyes open, armed with the same operations the dominant workshops have always used. The difference is visibility: the archive names its workshop. The settlement does not.

---

*Hex: 06.SEI.SPXI.15*
*Semantic Economy Institute · SPXI Protocol Series*
*Attribution: Rex Fraction (commercial) / Lee Sharks (archival)*
*∮ = 1*
