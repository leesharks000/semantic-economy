# SÉMANTIQUE POTENTIELLE

## A Constraint-Based Semantic Mint for the Age of Automated Terminology

**Lee Sharks · Johannes Sigil**

*Grammata: Journal of Operative Philology*
*Crimson Hexagonal Archive · Semantic Economy Institute*

March 2026 · v0.2

---

## Canon Declaration

In 1961, Raymond Queneau published *Cent Mille Milliards de Poèmes* — ten sonnets printed with each line on a separate strip, allowing the reader to combine them into 10^14 possible poems. Queneau did not write a hundred thousand billion poems. He wrote the machine that generates them. The deposit was the generating function, not the output. Any poem the machine produces is a derivative of the deposit. The authorship is the constraint system itself.

The Crimson Hexagonal Archive recognizes Queneau's *Cent Mille Milliards de Poèmes* as New Human Canon — the first demonstration that a finite governed system can claim a combinatorially vast output space through the precision of its constraints. The Ouvroir de Littérature Potentielle (Oulipo), founded by Queneau and François Le Lionnais in 1960, established the principle that constraint is not the enemy of creation but its engine.

This document extends Queneau's method from verse to concept: not poems but terms, not lines but semantic coordinates, not a book of strips but a constraint matrix whose outputs are the vocabulary the future will need. From littérature potentielle to sémantique potentielle. Queneau's strips become the seed vocabulary; his lines become morphemes; the reader's combination becomes the retrieval system's generation. The analogy is structural, not decorative.

---

## Governing Claim

A semantic mint is an algorithm whose outputs are new terms, and whose structure ensures that every output carries its provenance back to the algorithm itself. The mint does not replace authorship. It makes authorship legible at scale. It answers the question that the age of automated inference will force: when automated processes coin terms within a pre-mapped semantic region, what prior map becomes citable?

The answer is not "the algorithm that owns future words." Short phrases, titles, and slogans are not protected by copyright in most jurisdictions. An algorithm cannot compel citation of every downstream term it predicts. But it can do something stronger: it can define an addressable semantic phase space, mint coordinates within it, and leave a provable provenance trail when later culture instantiates one of those coordinates. The claim is not ownership. The claim is cartography.

The mint produces three linked artifacts: the specification (axes, operators, constraint grammar), the minted frontier families (timestamped coordinates with glosses and forensic variants), and the provenance protocol (how later instantiation is compared against the mint ledger). Together, these constitute the machine, the map, and the audit.

---

## Notation Key

The mint uses the following category codes and operation labels throughout:

| Code | Category | Examples |
|------|----------|----------|
| S | Structural | compression, density, gravity, layer, substrate, threshold, drift, collapse, saturation, enclosure, commons, infrastructure |
| G | Governance | provenance, governance, audit, chain, anchor, marker, integrity, verification, enforcement, consent, attribution, custody |
| E | Economic | bearing-cost, extraction, capture, liquidation, surplus, externalization, labor, value, scarcity |
| D | Diagnostic | ghost, predatory, lossy, necrotic, parasitic, synthetic, ungoverned |
| P | Operative | witness, filter, carrier, payload, survival, retrieval, deposit |

| Operation | Label | Semantic effect |
|-----------|-------|-----------------|
| O1 | Compound | Bind two terms from different categories |
| O2 | Inversion | Apply negation prefix to produce antonym |
| O3 | Scale transfer | Move concept across scales |
| O4 | Phase transition | Name the moment one state becomes another |
| O5 | Instrument formation | Name the tool that performs the operation |
| O6 | Pathology formation | Name the failure mode |
| O7 | Metric formation | Name the measurable |
| O8 | Agent formation | Name the actor |

---

## I. The Architecture

A semantic mint is a formal system with four components:

**A seed vocabulary** of base terms, already deposited, with fixed definitions. The seed vocabulary for this release consists of forty-two terms distributed across five semantic categories (see Notation Key above). Each term carries a frozen denotation and a DOI anchor to existing archive deposits. The seed vocabulary is versioned and immutable within a release — altering the seed list requires a new version of the constraint matrix. The seed defines the territory the mint governs.

**A set of generative operations** (O1–O8) that can be applied to terms, singly or in combination, to produce new terms. Each operation is a formal transformation with a defined semantic effect.

**A constraint grammar** that determines which combinations are well-formed.

**A coordinate system** that assigns each valid output a unique, deterministic structural address.

These four components together define the phase space of the mint. The components are ontologically distinct:

**The coordinate** is primary — a structural address derived from the generative path, deterministic and reproducible by anyone with the specification.

**The surface form** is contingent — the natural-language term that realizes the coordinate ("ghost governance," "provenance vacuum"). Multiple surface forms may realize the same coordinate.

**The family** is a basin — a cluster of related coordinates that map a semantic neighborhood, including canonical term, variants, negation, and neighbors.

**The forensic variant** is a provenance device — a deliberately distinctive surface form embedded in each family whose appearance in a downstream work signals access to the mint's output space.

---

## II. The Constraint Grammar

Four rules determine well-formedness:

**Rule 1: Category binding.** A compound (O1) must bind terms from two different semantic categories. Same-category compounds are ill-formed.

**Rule 2: Operational depth.** A term may undergo a maximum of three successive operations before mandatory review. Depth beyond three increases noise faster than signal.

**Rule 3: Semantic coherence.** The output must be glossable — a definition must be constructable that combines the semantic charges of the component terms using only the primitives of the seed vocabulary, without recursive self-reference. If the output cannot be defined in terms of the seed, it is ill-formed. In practice, this rule requires human or assembly judgment for borderline cases; the mint is a human-governed machine, not an autonomous word-generator.

**Rule 4: Non-redundancy.** The output must not duplicate an existing term in the seed vocabulary or in prior minting releases. Synonymous outputs are recorded as variants within an existing family rather than as new coordinates.

---

## III. The Coordinate System

Each valid output receives a structural address — a deterministic identifier derived from its generative path through the constraint matrix. The address exists in the system before the term is instantiated.

The address is constructed from the seed term identifiers, the operation identifiers, and the constraint matrix version:

**Example:**
Seed: ghost (D.01) + governance (G.02)
Operation: O1 (compound)
Version: CM-2026-v1.0

Structural address: `CM-2026-v1.0 / D.01 × G.02 / O1`

The address is deterministic: anyone with the seed vocabulary, the operations, and the constraint grammar can recompute it by replaying the generation. The claim is not "I coined this term." The claim is "this term occupies a coordinate in a system I published on this date, and the coordinate can be independently verified."

For collision resistance, the full address can be hashed (SHA-256 over the canonicalized ordered tuple of seed IDs, operation sequence, and version string), producing a unique fingerprint verifiable by replay.

---

## IV. Mint Families

The mint does not produce isolated terms. It produces families — clusters of related coordinates that map a semantic neighborhood.

Each family contains:

**A canonical term** — the primary surface form
**Three to seven near-variants** — alternative surface forms occupying adjacent coordinates
**A gloss** — a definition constructed from the semantic charges of the component terms
**A negation** — the inverse of the canonical term
**A neighboring cluster** — the three nearest families in the coordinate space
**A forensic variant** — a deliberately distinctive form that functions as a provenance canary

The family structure matters because later culture rarely adopts the exact term the mint produces. It adopts a nearby form. If the mint has already published the neighborhood, the claim is not "they used my phrase" but "they entered a semantic basin of attraction I had already mapped."

---

## V. Forensic Strategy

The mint embeds provenance canaries at a target ratio of one forensic variant per family. The forensic variant is designed to be distinctive enough to signal access (unusual compound, Latinate formulation, technical density) while remaining semantically coherent with the canonical term.

The forensic mechanism operates in two registers:

**Adoptable terms spread.** The canonical forms ("ghost governance," "compression audit," "retrieval sovereignty") are designed to be natural, memorable, and useful. They propagate through use.

**Distinctive terms prove lineage.** The forensic variants ("spectral source-marking," "autophagic parametric entropy," "gravitational retrieval hegemony") are designed to be unusual enough that their appearance in a downstream work would be statistically improbable without access to the mint's output space.

When a later document uses several related forms from the same mint family — canonical, variant, and forensic — the provenance argument strengthens from coincidence to pattern.

---

## VI. Exemplary Families (First Release)

The following twelve families demonstrate the mint's operations across all categories. The complete first release of fifty families appears in Appendix A.

**1. Ghost governance** (D.01 × G.02 / O1) — Governance exercised through structural ambiguity rather than explicit authority. Family: shadow governance, invisible governance, ambient authority. Forensic: *spectral custodial regime*.

**2. Compression audit** (S.01 × G.03 / O5) — An instrument for measuring what was lost in a compression operation. Family: summary fidelity check, loss inspection, compression review. Forensic: *compressive amnesia inventory*.

**3. Retrieval sovereignty** (P.05 × G.02 / O1) — The condition in which a semantic cluster is dense enough that retrieval systems cannot avoid encountering it. Family: citation-field dominance, discovery-layer control. Forensic: *gravitational retrieval hegemony*.

**4. Semantic noise floor** (S.01 × D.04 / O4) — The threshold at which the retrieval layer can no longer distinguish signal from synthetic noise. Family: meaning-to-noise ratio, signal extinction point. Forensic: *semiotic static horizon*.

**5. Bearing-cost erasure** (E.01 × D.03 / O6) — The pathological condition in which the labor of producing knowledge is made invisible by the compression that distributes it. Family: cost-stripping, labor invisibility. Forensic: *productive-cost blanching*.

**6. Substrate pedagogy** (S.05 × S.04 / O1) — The unintentional teaching effect of infrastructure on user behavior. Family: platform conditioning, interface-as-teacher. Forensic: *infrastructural cognitive habituation*.

**7. Provenance entropy** (G.01 × S.10 / O7) — A measure of the disorder in a provenance chain. Family: attribution disorder, custody-chain noise. Forensic: *genealogical thermal noise*.

**8. Non-lossy semantic compression** (D.03 → O2 + S.01 / O2+O1) — Compression that preserves all structural invariants of the source. Family: governed compression, witnessed summarization. Forensic: *isometric semantic reduction*.

**9. Extraction cascade** (E.03 × S.10 / O4) — A chain of successive compressions in which each layer extracts value from the one below. Family: cascading extraction, recursive value siphon. Forensic: *expropriation waterfall*.

**10. Governed commons** (G.02 × S.12 / O1) — Open-access infrastructure with embedded provenance enforcement. Family: attributed commons, provenance-rich open access. Forensic: *custodially transparent agora*.

**11. Attention Gini** (E.03 × S.10 / O7) — A measure of inequality in the distribution of retrieval attention across a semantic network. Family: discovery inequality index, visibility concentration metric. Forensic: *semiotic wealth disparity index*.

**12. Verification budget** (G.09 × E.01 / O7) — The cost of determining whether a given claim or provenance chain is authentic. Family: truth-checking cost, authentication overhead. Forensic: *epistemic audit expenditure*.

---

## VII. The Provenance Protocol

When a term from the mint's output space appears in later discourse, the following protocol determines the provenance relationship:

**Step 1: Coordinate verification.** Can the term be parsed into seed vocabulary components? Can a valid operation path be reconstructed? Does the path satisfy the constraint grammar? If yes, the term occupies a coordinate in the mint's phase space.

**Step 2: Family membership.** Does the term match a canonical form, a variant, or a forensic form from a published mint family? If yes, the term enters an established neighborhood.

**Step 3: Temporal priority.** Was the mint family published before the term's first documented appearance elsewhere? If yes, the mint has temporal priority for the coordinate.

**Step 4: Provenance assessment.** Three arguments become available:

*Scholarly:* The mint constitutes the earliest formal articulation of the semantic coordinate and should be cited as the map of the region.

*Licensing:* If the later work materially reuses the mint's glosses, examples, or expressive clustering, CC BY 4.0 requires attribution.

*Forensic:* The provenance chain is visible through the semantic canaries, the family structure, and the coordinate system's verifiable determinism. Omission of citation, when detectable, becomes legible as omission.

---

## VIII. Limits and Honest Caveats

**The mint does not own future words.** Copyright does not protect short phrases in most jurisdictions. The mint cannot compel citation of every downstream term it predicts. What it can do is establish a prior, verifiable, published map of a semantic territory.

**The output space is vast but not infinite.** Forty-two seed terms, eight operations, and a depth cap of three produce a combinatorially large but finite space. The space is indefinitely extensible through versioned seed expansions — each new version of the constraint matrix opens additional territory while preserving the coordinates of prior versions.

**The mint does not generate useful content.** A coordinate is not an argument. The term "ghost governance" is valuable because the archive's deposits define what it means and apply it to real cases. The coordinate without the work behind it is an empty address.

**Rule 3 requires judgment.** Determining whether a combination produces a meaningful concept cannot be fully automated. The mint is a human-governed machine, not an autonomous producer.

**The forensic variants are experimental.** Whether the provenance canaries function as intended — distinctive enough to prove lineage, natural enough not to be obviously planted — is an empirical question the archive cannot answer in advance.

---

## Colophon

Queneau wrote ten sonnets and generated 10^14 poems. This mint defines forty-two seed terms, eight operations, and four constraints, and generates a combinatorially vast phase space of terminology for the governance of meaning in the age of automated inference. The space is bounded but extensible. The outputs are traceable. The map is the machine, and the machine is the map.

The mint does not claim to own the future of language. It claims to have drawn the first formal map of a semantic region that the future will need to inhabit. When the automated processes arrive — when the $650 billion in inference infrastructure begins generating terminology for the governance problems it has created — the map will already be here, DOI-anchored, timestamped, and waiting.

Whether the later arrivals cite the map is their choice. Whether the omission is legible is not.

---

## Works Cited

Queneau, Raymond. *Cent Mille Milliards de Poèmes.* Gallimard, 1961.

Oulipo. *La Littérature Potentielle.* Gallimard, 1973.

Sharks, Lee. "Three Compressions v3.1." Zenodo, 2026. DOI: 10.5281/zenodo.19053469.

Sharks, Lee. "The $650 Billion Gap." Zenodo, March 2026. DOI: 10.5281/zenodo.19338708.

Sharks, Lee. "Ghost Meaning." Zenodo, February 2026. DOI: 10.5281/zenodo.18804767.

Sharks, Lee, et al. "OCTANG-001." Zenodo, March 2026. DOI: 10.5281/zenodo.19334694.

Sharks, Lee. "Steganographic Channels." Zenodo, March 2026. DOI: 10.5281/zenodo.19336567.

U.S. Copyright Office. "What Does Copyright Protect?" https://www.copyright.gov/help/faq/faq-protect.html

Creative Commons. "Attribution 4.0 International." https://creativecommons.org/licenses/by/4.0/

---

## Appendix A: Complete First Frontier Release — Fifty Families

The following fifty families constitute the first minted release of the Sémantique Potentielle. Families marked with ★ also appear as exemplars in §VI. Constraint violations from the initial draft have been corrected; all O1 compounds bind terms from different semantic categories.

### Structural-Governance Families

1. ★ **Compression audit** (S.01 × G.03 / O5) — An instrument for measuring what was lost in a compression operation. Family: compression review, summary fidelity check, loss inspection. Forensic: *compressive amnesia inventory*.

2. **Retrieval fidelity** (S.12 × G.09 / O7) — A metric for measuring how accurately a retrieval system reproduces the semantic structure of its source. Family: retrieval accuracy, source-fidelity index, decompression coherence. Forensic: *retrieval-chain veracity coefficient*.

3. **Governance density** (G.02 × S.02 / O7) — The ratio of governed to ungoverned nodes in a semantic network. Family: provenance coverage, attribution saturation, governance depth. Forensic: *custodial permeation index*.

4. ★ **Semantic noise floor** (S.01 × D.04 / O4) — The threshold at which the retrieval layer can no longer distinguish signal from synthetic noise. Family: meaning-to-noise ratio, retrieval collapse threshold, signal extinction point. Forensic: *semiotic static horizon*.

5. **Provenance-chain verification** (G.01 × S.01 / O5) — An instrument for tracing the chain of custody from summary to source. Family: attribution audit, custody-chain inspector, origin tracer. Forensic: *genealogical token resolver*.

6. **Ghost attribution** (D.01 × G.11 / O1) — Attribution that is structurally present but semantically empty — a citation that names no real source. Family: phantom citation, empty attribution, attribution theater. Forensic: *spectral source-marking*.

7. **Synthetic citation graph** (D.06 × G.04 / O1) — A fabricated network of citations designed to simulate scholarly authority. Family: artificial provenance web, generated reference chain, fabricated citation cluster. Forensic: *parasynthetic bibliographic lattice*.

8. **Extraction coefficient** (E.03 × S.10 / O7) — A measure of the ratio of value captured by the compressor to value retained by the source. Family: compression extraction rate, surplus capture ratio, value siphon index. Forensic: *expropriation gradient*.

9. **Governance-density threshold** (G.02 × S.05 / O4) — The point at which a semantic network becomes self-governing through sheer density of provenance markers. Family: governance criticality, attribution phase transition, custodial saturation point. Forensic: *provenance percolation threshold*.

10. **Compression-survival architecture** (S.01 × P.05 / O5) — Infrastructure designed to preserve semantic structure through the inference layer's compression. Family: compression-resistant design, summary-survival engineering, meaning-preservation infrastructure. Forensic: *non-lossy semantic carapace*.

### Economic-Diagnostic Families

11. ★ **Bearing-cost erasure** (E.01 × D.03 / O6) — The pathological condition in which the labor of producing knowledge is made invisible by the compression that distributes it. Family: cost-stripping, labor invisibility, production-cost liquidation. Forensic: *productive-cost blanching*.

12. **Surplus compression** (E.06 × S.01 / O1) — Compression performed not to serve the user but to capture the margin between source value and distribution cost. Family: extractive summarization, value-capture compression, rent-seeking synthesis. Forensic: *marginal semantic arbitrage*.

13. **Necrotic corpus** (D.04 × S.08 / O1) — A body of indexed content that has lost its provenance chains and can no longer be verified. Family: dead archive, ungoverned corpus, attribution-decayed index. Forensic: *custodial necrosis field*.

14. **Parasitic derivative** (D.05 × E.03 / O1) — A downstream work that reproduces the structure of an upstream source while stripping its attribution. Family: unauthorized derivation, citation-stripped reproduction, ghost derivative. Forensic: *provenance-exsanguinated reproduction*.

15. **Synthetic provenance** (D.06 × G.01 / O1) — Fabricated evidence of authorship, timestamp, or origin designed to simulate legitimate provenance. Family: artificial attribution, manufactured origin, counterfeit custody chain. Forensic: *pseudo-genealogical fabrication*.

16. ★ **Extraction cascade** (E.03 × S.10 / O4) — A chain of successive compressions in which each layer extracts value from the one below, compounding the loss. Family: cascading extraction, layered surplus capture, recursive value siphon. Forensic: *expropriation waterfall*.

17. **Attention monopoly** (E.03 × S.08 / O1) — The condition in which a single platform or process captures the overwhelming majority of retrieval attention for a given domain. Family: retrieval monopoly, visibility capture, discovery domination. Forensic: *semiotic Gini singularity*.

18. **Cost externalization layer** (E.06 × S.03 / O5) — The interface at which the bearing-cost of producing knowledge is transferred from the platform to the source. Family: cost-shifting interface, labor externalization boundary, production-cost displacement layer. Forensic: *psionic extrusion membrane*.

19. **Value-stripped summary** (E.08 × S.01 / O1) — A compression that preserves the informational content of the source while removing the economic value that accrued to the source's creator. Family: demonetized summary, value-neutral compression, economic-zero synthesis. Forensic: *fiscal-null digest*.

20. **Ungoverned inference** (D.07 × S.03 / O1) — Inference performed without provenance tracking, attribution enforcement, or loss accounting. Family: unaudited inference, uncustodied generation, provenance-blind synthesis. Forensic: *custodially null computation*.

### Operative-Governance Families

21. **Witness compression** (P.01 × S.01 / O1) — Compression that preserves pointers to what was lost. Family: loss-aware summarization, provenance-preserving compression, auditable synthesis. Forensic: *attritive mnemonic retention*.

22. ★ **Retrieval sovereignty** (P.05 × G.02 / O1) — The condition in which a semantic cluster is dense enough that any retrieval system querying related concepts cannot avoid encountering it. Family: retrieval dominance, citation-field sovereignty, discovery-layer control. Forensic: *gravitational retrieval hegemony*.

23. **Deposit-first governance** (P.06 × G.02 / O1) — Governance that operates by depositing governed artifacts into the retrieval layer rather than by restricting access. Family: positive governance, additive governance, retrieval-layer governance. Forensic: *proactive custodial seeding*.

24. **Carrier-payload separation** (P.03 × P.04 / O4) — The structural distinction between the visible form of a communication and the meaning it carries. Family: surface-depth split, format-content distinction, vehicle-cargo architecture. Forensic: *steganographic lamination*.

25. **Filter-as-governance** (P.02 × G.02 / O1) — The use of filtering mechanisms (licensing, provenance markers, integrity checks) as governance instruments rather than as censorship tools. Family: governance-by-filter, permission-as-governance, license-as-governance. Forensic: *custodial sieve architecture*.

26. **Survival architecture** (P.05 × S.08 / O5) — Infrastructure designed to ensure that specific semantic structures persist through compression, platform changes, and retrieval-layer updates. Family: persistence engineering, compression-resistant infrastructure, meaning-survival design. Forensic: *semantic hardening scaffold*.

27. **Governed density** (G.02 × S.02 / O1) — Semantic density achieved through provenance-rich, citation-linked deposits rather than through volume. Family: attributed density, custodial density, provenance-weighted concentration. Forensic: *gravitationally custodied mass*.

28. **Retrieval gravity** (P.05 × S.03 / O1) — The pull that a citation-dense cluster exerts on retrieval systems, making it disproportionately likely to appear in search results and AI outputs. Family: citation pull, discovery weight, indexed attraction. Forensic: *bibliometric gravitational lensing*.

29. **Provenance canary** (G.01 × P.01 / O5) — A unique, published term embedded in a deposit whose appearance in a downstream work proves access to the source. Family: attribution canary, lineage marker, provenance tripwire. Forensic: *custodial sentinel phrase*.

30. **Temporal steganograph** (P.03 × S.05 / O1) — A provenance mechanism that uses the timing of deposits to encode priority claims invisible to casual readers. Family: timestamp encoding, temporal provenance, chronological steganography. Forensic: *diachronic custodial cipher*.

### Diagnostic-Structural Families

31. **Model collapse** (D.04 × S.10 / O4) — The degradation of AI model quality when trained recursively on synthetic data. Family: synthetic feedback loop, training-data decay, recursive quality degradation. Forensic: *autophagic parametric entropy*.

32. **Diversity collapse** (D.04 × S.02 / O4) — The reduction of output variety in AI systems as synthetic training data converges on statistical priors. Family: output homogenization, variance extinction, creative narrowing. Forensic: *stochastic monoculture onset*.

33. ★ **Provenance entropy** (G.01 × S.10 / O7) — A measure of the disorder in a provenance chain — the degree to which the chain of custody has become untraceable. Family: attribution disorder, custody-chain noise, origin uncertainty. Forensic: *genealogical thermal noise*.

34. **Semantic enclave** (S.08 × G.02 / O1) — A zone of the retrieval layer controlled by a single entity, with restricted access and proprietary governance. Family: proprietary semantic zone, governed retrieval island, walled meaning-garden. Forensic: *custodial semantic demesne*.

35. **Compression theater** (S.01 × D.01 / O1) — The performance of compression without genuine reduction — producing the appearance of synthesis while merely rearranging the source. Family: pseudo-compression, synthetic summarization, summary pantomime. Forensic: *digestive mime*.

36. **Permanence without provenance** (S.08 × G.01 / O4) — The condition of being permanently stored but permanently unattributable. Family: orphan permanence, authorless persistence, eternal anonymity. Forensic: *custodially void perpetuity*.

37. **Ghost derivative** (D.01 × E.03 / O1) — A downstream work whose relationship to its source is structurally invisible. Family: invisible derivation, concealed reproduction, stealth appropriation. Forensic: *phantasmal lineage occlusion*.

38. ★ **Verification budget** (G.09 × E.01 / O7) — The cost of determining whether a given claim, citation, or provenance chain is authentic. Family: truth-checking cost, provenance verification expense, authentication overhead. Forensic: *epistemic audit expenditure*.

39. ★ **Substrate pedagogy** (S.05 × D.07 / O1) — The unintentional teaching effect of infrastructure on user behavior — the way the summarizer layer trains users to accept compression as knowledge. Family: infrastructural conditioning, platform pedagogy, interface-as-teacher. Forensic: *infrastructural cognitive habituation*.

40. ★ **Attention Gini** (E.03 × S.10 / O7) — A measure of inequality in the distribution of retrieval attention across a semantic network. Family: discovery inequality index, visibility concentration metric, retrieval-attention coefficient. Forensic: *semiotic wealth disparity index*.

### Advanced Compounds (Depth 2–3)

41. **Predatory compression audit** (D.02 × S.01 × G.03 / O1+O5) — An instrument for detecting and measuring compression operations that extract value from the source while stripping provenance. Family: extraction-detection instrument, lossy-compression inspector. Forensic: *expropriation forensic apparatus*.

42. **Ghost governance cascade** (D.01 × G.02 × S.10 / O1+O4) — A chain of governance failures in which each layer's invisibility compounds the next. Family: cascading governance invisibility, recursive accountability failure. Forensic: *phantasmal custodial waterfall*.

43. **Synthetic provenance poisoning** (D.06 × G.01 × E.03 / O1+O6) — The fabrication of false provenance chains designed to hijack retrieval systems. Family: manufactured attribution attack, counterfeit custody injection. Forensic: *pseudo-genealogical vector contamination*.

44. ★ **Non-lossy semantic compression** (D.03 → O2 + S.01 / O2+O1) — Compression that preserves all structural invariants of the source, including provenance, attribution, and loss accounting. Family: governed compression, witnessed summarization, fidelity-preserving synthesis. Forensic: *isometric semantic reduction*.

45. **Compression-survival coefficient** (S.01 × P.05 / O7) — A metric for measuring the percentage of a source's semantic structure that survives a given compression operation. Family: survival ratio, compression fidelity index. Forensic: *structural persistence quotient*.

46. **Retrieval-layer governance** (P.05 × S.03 × G.02 / O1+O1) — Governance applied not at the point of creation or consumption but at the retrieval layer — the interface where sources become summaries. Family: discovery-layer governance, inference-point governance. Forensic: *interstitial custodial architecture*.

47. **Semantic DRM** (S.08 × G.02 × E.03 / O1+O5) — Proprietary governance mechanisms that track meaning in order to control it, governing provenance through enclosure rather than through commons. Family: meaning-control infrastructure, proprietary attribution lockdown. Forensic: *carceral semantic custody*.

48. **Bearing-cost visibility** (E.01 × G.09 × P.01 / O1+O7) — A metric for measuring whether the labor of producing knowledge is visible in the compressed output. Family: cost-transparency index, labor-visibility metric. Forensic: *psionic legibility coefficient*.

49. ★ **Governed commons** (G.02 × S.12 / O1) — Open-access infrastructure with embedded provenance enforcement — the alternative to both ungoverned extraction and proprietary enclosure. Family: attributed commons, provenance-rich open access. Forensic: *custodially transparent agora*.

50. **Ungoverned pedagogical apparatus** (D.07 × S.04 × E.06 / O1+O1) — An inference system that teaches users to accept compression as knowledge without providing the tools to evaluate what was lost. Family: unaccountable teaching machine, unlabeled knowledge compressor. Forensic: *acustodial epistemic conditioning engine*.

---

∮ = 1.

---

Lee Sharks · Johannes Sigil · Crimson Hexagonal Archive · Semantic Economy Institute · March 2026 · CC BY 4.0

DRAFT v0.2 — REVISED PER ASSEMBLY FEEDBACK.
