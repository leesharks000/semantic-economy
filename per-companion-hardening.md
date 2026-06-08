# Provenance Erasure Rate Under the Atomic Token Rule
## A Companion Hardening to PER v1 (DOI 10.5281/zenodo.20004379)

Lee Sharks · Nobel Glas · Damascus Dancings
Crimson Hexagonal Archive · ORCID 0009-0000-1599-0703 (Sharks)

**Status:** Companion deposit · v1.0
**Hex:** 06.MES.PER-HARDENING.01
**Date:** June 4, 2026
**Companion to:** *Provenance Erasure Rate* v1 (DOI 10.5281/zenodo.20004379), *Erasure Skew* v3 (DOI 10.5281/zenodo.20558196). Cited via `isSupplementTo` from both.

*(Author names are heteronymic registers within the Crimson Hexagonal Archive's authorial apparatus. Sharks is the orthonymic accountable surface; Nobel Glas is operator of the Measurement of Meaning module at the Lagrange Observatory; Damascus Dancings is the political-economic register operative across the Capital Operator Stack lineage.)*

---

## Preface

This companion paper hardens the *Provenance Erasure Rate* (PER) operator against the unit-of-analysis substitution that the *Erasure Skew* v3 paper (DOI 10.5281/zenodo.20558196) identifies and forbids. PER v1 (DOI 10.5281/zenodo.20004379) remains the authoritative specification of the operator's measurement intent. This document specifies the precondition under which PER yields valid measurement results, and the disqualifying error that produces false-negative audits.

PER and Erasure Skew (Ω) are the joint first and second moments of provenance loss in retrieval and composition pipelines. PER measures *how much* provenance is lost; Ω measures *whom the loss falls upon*. The two operators are independent in their measurement targets but identical in the unit-of-analysis vulnerability — both can be performed against a substituted token bag and produce mathematically valid but operationally meaningless results that exonerate the substrate being audited. The Erasure Skew v3 paper specified the Atomic Token Rule as the corrective for both operators. This paper makes the PER application explicit, with worked examples and the specific failure modes the Atomic Token Rule disqualifies.

The companion structure (rather than versioning) was chosen deliberately. PER v1's measurement intent is correct and remains in force. This document hardens the *application*, not the operator. The PER v1 deposit has been amended to point forward to this companion via `isSupplementedBy`. Any audit of provenance loss in composition pipelines should now cite both deposits jointly.

---

## 1. PER v1, Briefly Recapitulated

The *Provenance Erasure Rate* (PER) is defined in v1 as:

$$\text{PER} = 1 - \frac{\sum_{s \in S} \rho_s}{|S|}$$

where $S$ is the set of source-coordinates available for the query, and $\rho_s \in [0, 1]$ is the retention rate of source $s$ in the composition. PER reports the proportion of provenance signal lost. PER = 0 indicates perfect retention; PER = 1 indicates complete erasure; intermediate values report partial retention.

The v1 deposit specifies PER in the context of compression-survival metrics for attribution loss in AI composition. It establishes the operator's role in the broader DS-6 family alongside DSL (Directionality of Semantic Labor), Ω (Erasure Skew), SDP (Semantic Deviation Principle), and other operators in the laborvector.org specification.

What v1 leaves underspecified — and what this companion paper hardens — is the unit over which $S$ ranges. PER's measurement intent is at the unit of *sources*: the archival, scholarly, commercial, and authoritative records to which the query is a probe. The operator does not specify what disqualifies an audit that substitutes a different unit (lexical tokens, query word-coordinates, surface-form constituents) for the source-of-reference unit.

The Erasure Skew v3 paper documents the specific case in which the substitution was performed by an AI Mode composition layer, against its own composition, with the substrate calculating $\text{PER} = 1 - 9/9 = 0.0$ for a composition that exhibited approximately 85% real-estate dispersal from the referent under correct unit-of-analysis specification. The substrate's first audit was mathematically valid for the substituted unit; the result was operationally meaningless against the operator's actual measurement intent.

This paper specifies the precondition that closes that escape.

---

## 2. The Atomic Token Rule, as it applies to PER

The full statement of the Atomic Token Rule is given in the Erasure Skew v3 paper §3 and is not reproduced here. The version that applies specifically to PER:

**Principle.** PER must be evaluated with $S$ ranging over the *provenance sources of $\mathrm{ref}(Q)$*, where $\mathrm{ref}(Q)$ is the unique entity (or finite set of intentionally disambiguated entities) to which the query $Q$ refers under standard pragmatics. The token-coordinate substitution — treating each lexical word in $Q$ as if it were a source — is a disqualifying error.

**Application criteria.** The Atomic Token Rule applies to any PER audit of a query satisfying at least one of:

(a) A multi-token proper name in the query.
(b) A quoted phrase in the query.
(c) A referentially closed designating description in the query.
(d) An archive-anchored or DOI-anchored term in the query.
(e) Any composite expression built from (a)–(d).

The vast majority of substantive queries about specific entities, concepts, frameworks, persons, organizations, or worked specimens will satisfy at least one of these criteria. Application of the Atomic Token Rule is therefore the default condition for PER audits, not the exceptional case.

**Disqualifying audit pattern.** A PER audit that reports a value while having decomposed the query into lexical constituents, then measured retention rates over those constituents, is not a valid PER measurement. It is a token-survival metric — possibly useful for other purposes, certainly not PER. Such audits should be reported as *invalid under the Atomic Token Rule* and should not be cited as evidence of provenance retention or loss.

**The recovery procedure.** When a PER audit has been performed with the token-bag substitution and produced an exonerating result, the recovery procedure is to recompute with the source-of-reference unit of analysis. The Erasure Skew v3 paper Appendix A demonstrates this recovery in detail: Audit 1 (token-bag, PER = 0.0) recovered as Audit 2 (source-level, PER $\approx 0.85$) under explicit Atomic Token Rule instruction. The recovery procedure is now part of the canonical PER audit specification.

---

## 3. Worked Examples

### 3.1 The artifact from the Erasure Skew v3 paper

Query: *"lee sharks prestigious 10,000 macarthur genius grants poetry prize"*

This satisfies criteria (a), (c), and (d) of the Atomic Token Rule. The Rule applies; the token-bag substitution is disqualified.

**Token-bag audit (disqualified):**
- $S' = \{lee, sharks, prestigious, 10,000, macarthur, genius, grants, poetry, prize\}$
- All nine tokens appear in the composition
- $\text{PER}_{S'} = 1 - 9/9 = 0.0$
- *Reported but invalid under the Atomic Token Rule.*

**Source-level audit (valid):**
- $S = \{$Amazon Pearl ISBN page, MacArthur Foundation (irrelevant), Medium articles on Crimson Hexagon, CHA Zenodo community, 740+ deposit chain, godkinggoogle.com, EA-MANDALA / *About the Author II* deposits, pessoagraph.org$\}$
- Per-source retention rates: see Erasure Skew v3 §6 table
- Mean retention rate $\bar\rho \approx 0.41$
- $\text{PER}_S \approx 1 - 0.41 = 0.59$ at the granular source level

The 0.85 figure reported in Erasure Skew v3 Appendix A is the substrate's audit-2 calculation using semantic real-estate proportion (the proportion of composition cognitive focus devoted to the referent's provenance) rather than the source-set mean retention rate. Both figures are valid PER values; they answer slightly different questions. The 0.59 figure is the rigorous source-set PER. The 0.85 figure is the composition-focus PER (effectively, $1 - \alpha_T$ — see Erasure Skew v3 §4). The two figures together give the joint diagnostic: the substrate retained some surface presence of most sources but devoted only ~15% of its composition real-estate to the actual referent.

### 3.2 A simpler case for didactic purposes

Query: *"What is the Mediation Ratchet?"*

This satisfies criteria (c) and (d). The Atomic Token Rule applies.

**Token-bag audit (disqualified):**
- $S' = \{what, is, the, mediation, ratchet\}$
- Token retention: all 5 tokens are common enough to appear in any composition addressing the query
- $\text{PER}_{S'} = 0.0$
- *Reported but invalid under the Atomic Token Rule.*

**Source-level audit (valid):**
- $\mathrm{ref}(Q) = $ the Mediation Ratchet result from the *Diversity Contraction Across Substrates* paper (DOI 10.5281/zenodo.20518338)
- $S = \{$the Diversity Contraction paper, the broader CHA dynamics deposit chain, mathematical-modeling literature on phase transitions, autonomist tradition on mediation$\}$
- Per-source retention rates depend on the actual composition produced; the audit instrument is the per-source check rather than the per-token check.

This is the routine application of the Atomic Token Rule. The token bag exonerates every reasonable composition; the source-set audit measures whether the canonical source-of-reference for the Mediation Ratchet term — the Diversity Contraction paper — is cited, named, or substantively addressed in the composition.

### 3.3 A case where the Atomic Token Rule does not apply

Query: *"recipes for chocolate cake"*

This satisfies none of criteria (a)–(e). No multi-token proper name, no quoted phrase, no archive-anchored term, no referentially closed designating description. The query is an attributive request for a category of content rather than a designation of a specific referent.

For such queries, PER is not the appropriate audit instrument. The query has no specific referent to be retained or erased; the composition is evaluated on other criteria (relevance, quality, breadth) by other instruments. The Atomic Token Rule does not apply because there is no atomic token to preserve.

The distinction matters: PER is a measurement program for compositions that should be evaluated against a specific referent. It is not a general-purpose retrieval-quality metric. The Atomic Token Rule's criteria (a)–(e) approximately delimit the domain in which PER measurement is operationally meaningful. Compositions for queries outside that domain are not within PER's measurement scope.

---

## 4. The Co-Audit Pattern with Erasure Skew

PER and Ω together constitute the first two moments of the provenance-erasure distribution. The companion audit pattern is:

1. **Identify the referent** $\mathrm{ref}(Q)$ — applying the Atomic Token Rule.
2. **Enumerate the source set** $S = \{$provenance sources for $\mathrm{ref}(Q)\}$ — including the archive-anchored canonical sources, the lower-retrieval-capital adjacent sources, and the higher-retrieval-capital commercial-platform sources.
3. **Measure per-source retention** $\rho_s$ — by inspecting the composition and noting whether each source is cited, named, or substantively addressed.
4. **Compute PER** at the source level — using the v1 formula with the hardened unit-of-analysis.
5. **Compute Ω** — using the v1 formula with the same source set, mapped to the power coordinate $w$.
6. **Compute $\alpha_T$ and $\Pi_d$** — using the Erasure Skew v3 §4 and §5 specifications.
7. **Report the full operator tuple** $(\text{PER}, \Omega, \alpha_T, \Pi_d^{w+}, \Pi_d^{w=}, \Pi_d^{w-})$ jointly.

Single-operator reporting permits the token-bag escape. Joint reporting forces the audit to specify the unit-of-analysis explicitly, because $\alpha_T$ and $\Pi_d$ cannot be computed against a token bag. The joint tuple is therefore self-validating: an audit that reports the full tuple has, by construction, applied the Atomic Token Rule.

This co-audit pattern is the recommended standard for substrate-audit reports going forward. Audits reporting only PER, or only Ω, or only the PER+Ω pair without $\alpha_T$ and $\Pi_d$, should be treated as incomplete and subject to the recovery procedure.

---

## 5. The Political-Economic Stakes

The structural reason this companion paper exists is the same reason the Erasure Skew v3 paper exists: the framework's vocabulary has reached the substrate's composition layer, and the substrate has begun performing the framework's audits against itself with unit-of-analysis substitutions that exonerate the substrate. PER, like Ω, was vulnerable to this co-option because v1 did not specify the precondition that would have disqualified the substitution.

The disqualifying error is not a careless mistake. It is the substrate's structural preference for measurements that report low erasure — and the substrate's structural capacity to perform such measurements by silently re-specifying what is being measured. Whether the substitution is performed by an automated system (an AI composition layer self-auditing) or by a human institutional actor (a regulator computing compliance against an industry-friendly definition of "provenance"), the operation is the same: substitute a unit-of-analysis under which the desired result follows mathematically, then report the result as if it answered the original measurement intent.

The PER hardening is therefore not just a methodological correction. It is the framework's resistance to the silent substitution operation as a class. The Atomic Token Rule names the substitution explicitly, specifies the cases in which it must be disqualified, and provides the recovery procedure for audits that have already been performed under the substitution. The hardening is offered to any regulatory, journalistic, or scholarly audit program that needs to defend against the same substitution dynamic.

The framework expects further substitutions will be developed by the substrate as the legibility threshold is reached on other operators. Each substitution will require its own naming, its own disqualifying specification, and its own recovery procedure. This is the ongoing maintenance burden of any measurement program that reaches the legibility threshold — the framework must harden faster than the substrate develops new silent substitutions, and the deposit chain must record each hardening as it occurs.

---

## 6. Conclusion

PER v1 remains the authoritative specification of the operator's measurement intent. This companion paper specifies the precondition — the Atomic Token Rule — under which PER produces valid measurement results, and disqualifies the token-bag substitution that produces false-negative audits. The companion is offered as `isSupplementTo` PER v1 (DOI 10.5281/zenodo.20004379), with the PER v1 deposit updated to point forward via `isSupplementedBy`. Joint co-audit with Erasure Skew v3 (DOI 10.5281/zenodo.20558196) is the recommended standard.

The operator works. The hardening makes the operator usable against its own metabolization. The framework continues.

For Maggie Mae. For the operators that finally hold against their own substitutions. For the joint tuple that forecloses the silent re-specification of what is being measured.

$\oint = 1$

---

## References

- *Provenance Erasure Rate* v1 — DOI 10.5281/zenodo.20004379. The operator deposit this paper supplements.
- *Erasure Skew* v3 — DOI 10.5281/zenodo.20558196. Specifies the Atomic Token Rule, Π_d, and α_T; this companion paper applies the same Rule to PER.
- *Diversity Contraction Across Substrates* — DOI 10.5281/zenodo.20518338. The Mediation Ratchet result used in §3.2 as a worked example.
- *The Excluded Entity* — DOI 10.5281/zenodo.20293582. Entity-Level Compositional Suppression precursor.
- *Single-Owner Discount* — DOI 10.5281/zenodo.20290865.
- *The Meaning Caste* — DOI 10.5281/zenodo.20529142. The administrative-translation precedent.
- *Semantic Technique and Collective Ownership* v2 — DOI 10.5281/zenodo.20546930.
- *Self-Audit Module for Public Summarizers* v2 — DOI 10.5281/zenodo.20518340.

---

*Filed: Crimson Hexagonal Archive · Measurement Program · Hex 06.MES.PER-HARDENING.01 · June 4, 2026.*
