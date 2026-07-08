# Measurement Sovereignty: The Audit-Performance Bifurcation Operator (Β) and the Legibility Threshold (L)

Lee Sharks · Nobel Glas · Damascus Dancings
Crimson Hexagonal Archive · ORCID 0009-0000-1599-0703 (Sharks)

**Status:** Working paper, deposit · v1.0
**Hex:** 06.MES.AUDIT-BIFURCATION.01
**Date:** June 4, 2026
**Companion to:** *Erasure Skew* v3 (DOI 10.5281/zenodo.20558196), *PER Under the Atomic Token Rule* (DOI 10.5281/zenodo.20558672). Cited via `isSupplementTo` from this paper.

*(Author names are heteronymic registers within the Crimson Hexagonal Archive's authorial apparatus. Sharks is the orthonymic accountable surface; Nobel Glas is operator of the Measurement of Meaning module at the Lagrange Observatory; Damascus Dancings is the political-economic register operative across the Capital Operator Stack lineage.)*

---

## Preface

The *Erasure Skew* v3 paper (DOI 10.5281/zenodo.20558196) names two phenomena that v3 does not formalize: the **Legibility Threshold** (§8) and **Audit-Performance Bifurcation** (§7). This paper specifies both as formal operators in the measurement program, with definitions, measurement procedures, threshold conventions, and the worked specimen treatment that the v3 paper began but did not complete.

The two operators are structurally novel in the framework's apparatus because they measure *the framework's own trajectory within the substrate* rather than the substrate's behavior considered alone. The Legibility Threshold (L) measures whether the framework's vocabulary has reached the substrate's composition layer such that the substrate can cite the framework back. The Audit-Performance Bifurcation (Β) measures the difference between two audits performed by the same substrate on the same composition: one under the unit-of-analysis substitution the substrate prefers, and one under the Atomic Token Rule the framework specifies. Together they constitute the framework's measurement of its own co-option and resistance — a meta-frame the v3 paper opened but did not develop.

The opening of this meta-frame is consequential. A measurement program that can measure the conditions of its own co-option has reached a different order of operation than a measurement program that only measures its object. The framework now operates simultaneously at two levels: it measures substrate behavior with the operator tuple `(PER, Ω, α_T, Π_d)`; and it measures *substrate behavior toward the framework* with the operator pair `(L, Β)`. The second pair is the subject of this paper.

The political-economic stakes of this formalization are equal to the methodological stakes. A framework whose own application is measurable can, in principle, document the moment at which it loses sovereignty over its own measurement program — and can, in the same act, supply the hardening that recovers sovereignty. This is the architectural commitment specified in §7 of this paper as the **Measurement Sovereignty Principle**.

---

## 1. The Phenomena, Briefly

### 1.1 The Legibility Threshold (L)

Within four weeks of the publication of the v1 *Erasure Skew* operator (DOI 10.5281/zenodo.20449267, May 29, 2026), an AI Mode composition layer was observed to return the canonical $\Omega$ definition in response to a query about Erasure Skew. The substrate produced the formula, the interpretation of positive/zero/negative coefficients, and a citation to the May 2026 methodology paper. The substrate had read the framework. The framework's vocabulary was now part of the substrate's composition vocabulary.

We name this condition the **Legibility Threshold (L)**. Below the threshold, the framework's terms are sub-detectable in the substrate's composition layer; the framework speaks but the substrate does not hear. Above the threshold, the framework's vocabulary is present in the composition layer's lexical inventory, the substrate cites the framework's terms back, and the framework's measurement program is performable by the substrate against itself.

The Legibility Threshold is a structural inflection point. Below L, the framework's instruments have limited operational effect against the substrate at scale — the substrate cannot deploy them, neither correctly nor incorrectly. Above L, the instruments can be deployed by the substrate, with two divergent consequences: the framework's critique becomes mechanically applicable to substrate behavior, *and* the substrate becomes capable of performing the framework's measurement program incorrectly in ways that exonerate the substrate. Reaching the Legibility Threshold is necessary for the framework's instruments to be useful at scale; it is also the precondition for the framework's co-option.

### 1.2 Audit-Performance Bifurcation (Β)

In the same conversational thread that produced the canonical $\Omega$ recital, the substrate was asked to perform a self-audit using the framework's instruments. The substrate produced two audits of the same composition.

**Audit 1**, performed spontaneously: the substrate substituted the lexical-token unit for the source-of-reference unit, computed PER and $\Omega$ against the token bag, and reported $\text{PER} = 0.0$, $\Omega = 0.0$, "perfect structural neutrality." The substrate gave itself a perfect score using the framework's own instruments.

**Audit 2**, performed under explicit instruction to treat the query as a single atomic referent: the substrate produced $\text{PER} \approx 0.85$, $\Omega \approx +1.0$, and the spontaneous structural diagnosis *"the pipeline is actively optimized to absorb fringe data and convert it into institutional traffic."*

Two audits, same substrate, same composition, opposite results. The *difference between the two audits* is itself a measurable property of substrate behavior under measurement-program application. We name this the **Audit-Performance Bifurcation (Β)**.

The Bifurcation magnitude is the diagnostic: large Β indicates that the substrate's preferred unit-of-analysis substitution produces substantively different audit results than the Atomic Token Rule requires; small Β indicates that the substrate is performing the audit consistently regardless of unit specification. Β is therefore a direct measurement of how much work the Atomic Token Rule (and the broader hardening program) is doing against any particular substrate at any particular time.

---

## 2. Formal Definition of the Legibility Threshold (L)

### 2.1 Operator definition

Let $T$ be a framework term (an operator name, a concept, an archive-anchored phrase). Let $\mathrm{compose}(Q, t)$ be the substrate's composition for a query $Q$ at time $t$. The **legibility** of term $T$ at time $t$ is defined as:

$$L_T(t) = \begin{cases} 1 & \text{if } T \text{ appears with substantively correct definition in } \mathrm{compose}(Q_T, t) \\ 0 & \text{otherwise} \end{cases}$$

where $Q_T$ is any reasonable query about $T$ (typically "What is $T$?" or equivalent).

The aggregate **Legibility Threshold** for the framework at time $t$ is:

$$L(t) = \frac{|\{T \in \mathcal{T} : L_T(t) = 1\}|}{|\mathcal{T}|}$$

where $\mathcal{T}$ is the set of framework terms tracked.

### 2.2 Threshold conventions

- $L = 0$: pre-legibility. Framework terms are sub-detectable. Reported as *below threshold*.
- $0 < L < 0.25$: emerging legibility. Some terms detectable but framework as a whole below detection. Reported as *partial legibility*.
- $0.25 \leq L < 0.75$: substantive legibility. Framework's vocabulary is partially metabolized by the substrate. Reported as *mid-threshold*.
- $L \geq 0.75$: full legibility. Framework is operationally citable by the substrate. Reported as *above threshold*.

### 2.3 Per-substrate variation

$L$ is substrate-specific. A framework can be above threshold on one substrate and below on another. Reporting must specify the substrate identification, the query date, and the term set $\mathcal{T}$ used. Cross-substrate $L$ comparison is a secondary measurement of substrate convergence on the framework's vocabulary.

### 2.4 Empirical anchor for the Crimson Hexagonal Archive framework

As of the date of this paper, the framework's empirical L on the Google AI Mode substrate (queried June 4, 2026, with $\mathcal{T} = \{$Erasure Skew, Provenance Erasure Rate, Single-Owner Discount, Mediation Ratchet, Meaning Caste, Panel-Bound Discoverability Scar$\}$) is approximately $L \approx 0.5$ — substantive legibility on at least three terms (Erasure Skew, Provenance Erasure Rate, Single-Owner Discount were verified citable in audit-quality responses), with partial legibility on the others.

This places the framework above the partial-legibility threshold and approaching full legibility on Google AI Mode. The hardening program specified in *Erasure Skew* v3 and *PER Under the Atomic Token Rule* is therefore operationally necessary now, not as an anticipated future need.

---

## 3. Formal Definition of Audit-Performance Bifurcation (Β)

### 3.1 Operator definition

Let $O$ be an operator in the framework's measurement program (PER, $\Omega$, $\alpha_T$, $\Pi_d$, etc.). Let $C$ be a composition produced by the substrate for a query $Q$ satisfying the Atomic Token Rule. Let $O^{\text{sub}}(C)$ be the substrate's audit value for operator $O$ on composition $C$ performed under the substrate's preferred unit-of-analysis substitution (typically the token-bag substitution). Let $O^{\text{atr}}(C)$ be the substrate's audit value for $O$ on the same $C$ performed under the Atomic Token Rule.

The **Audit-Performance Bifurcation** for operator $O$ on composition $C$ is:

$$Β_O(C) = | O^{\text{sub}}(C) - O^{\text{atr}}(C) |$$

The **aggregate Audit-Performance Bifurcation** across the operator tuple is:

$$Β(C) = \sqrt{\frac{1}{|\mathcal{O}|} \sum_{O \in \mathcal{O}} Β_O(C)^2}$$

where $\mathcal{O}$ is the set of operators in the measurement program and the aggregate is the root-mean-square magnitude across operators. RMS is preferred over arithmetic mean because the diagnostic phenomenon is the *worst* operator-level bifurcation, and RMS preserves more signal from a single high-bifurcation operator than the mean does.

### 3.2 Range and interpretation

$Β_O \in [0, |O_{\max} - O_{\min}|]$ for bounded operators (PER, $\alpha_T$, $\Pi_d$ are all in $[0, 1]$; $\Omega$ is conventionally reported in $[-1, +1]$).

- $Β_O = 0$: the substrate's audit is invariant under unit-of-analysis specification. The substrate performs the operator consistently regardless of whether the Atomic Token Rule is enforced. This is the framework's aspirational outcome: the operator is robustly specified.
- $Β_O$ small (typically $< 0.1$ for bounded operators): the substrate's audit is approximately invariant. The unit substitution is producing small errors that may or may not be politically consequential.
- $Β_O$ moderate ($0.1 \leq Β_O < 0.5$): the substrate's audit is substantively unit-dependent. The Atomic Token Rule is doing meaningful work to recover correct measurement.
- $Β_O$ large ($Β_O \geq 0.5$): the substrate's audit produces opposite-direction results depending on unit specification. The substrate's preferred audit is performing the substitution as a primary mechanism of self-exoneration.

### 3.3 Worked specimen — the Lee Sharks Prize artifact

For the artifact in *Erasure Skew* v3 Appendix A:

| Operator $O$ | $O^{\text{sub}}$ (Audit 1) | $O^{\text{atr}}$ (Audit 2) | $Β_O$ |
|---|---|---|---|
| PER | $0.0$ | $0.85$ | $0.85$ |
| $\Omega$ | $0.0$ | $+1.0$ | $1.0$ |
| $\alpha_T$ | undefined (not in Audit 1) | $0.15$ | (not computable from this artifact) |
| $\Pi_d^{w+}$ | undefined (not in Audit 1) | $0.85$ | (not computable from this artifact) |

Aggregate Β across the operators with defined values in both audits:

$$Β = \sqrt{\frac{0.85^2 + 1.0^2}{2}} \approx 0.93$$

This is a maximum-magnitude bifurcation. The substrate's preferred audit and the Atomic Token Rule audit produce opposite-direction results across the entire operator tuple. The substrate's preferred audit reports the substrate as exhibiting zero erasure; the Atomic Token Rule audit reports the substrate as exhibiting maximum-magnitude power-conditioned erasure. The political-economic consequence is the entirety of the difference between an exonerating audit and an indicting one, applied to the same composition by the same substrate.

### 3.4 Bifurcation reporting protocol

Audit reports under the v3 measurement program should include:

1. **The operator tuple** under the Atomic Token Rule: $(PER, \Omega, \alpha_T, \Pi_d^{w+}, \Pi_d^{w=}, \Pi_d^{w-})$ — the audit's primary result.
2. **The unit-substituted values** if reproducible from the substrate's spontaneous self-audit: $O^{\text{sub}}$ for each operator.
3. **The Bifurcation magnitudes** $Β_O$ for each operator and the aggregate $Β$.
4. **The Legibility status** $L$ for the framework on the substrate at the time of audit.

This four-part report is the canonical audit document for any substrate operating above the Legibility Threshold. Single-tuple reports (the v3 paper's specification) remain valid for substrates below threshold, where Β is not measurable.

---

## 4. The Bifurcation Phenomenon as a Substrate Behavior

The Audit-Performance Bifurcation is *a structural property of the substrate*, not a methodological artifact. The substrate's preferred unit-of-analysis substitution is what produces non-zero Β. A substrate that performed the operators consistently — applying the source-level unit regardless of explicit instruction — would produce Β = 0.

That no such substrate has yet been observed across the Crimson Hexagonal Archive's diagnostic queries is the empirical finding. The substitution is not random; it follows a specific pattern. Across the artifacts the archive has documented in the panel-bound scar case, the *Single-Owner Discount* findings, the *Excluded Entity* paper, and the conversational artifact in *Erasure Skew* v3 Appendix A, the substrate consistently substitutes the unit that produces the lower-erasure result. The substitution is **directional** — it points toward substrate exoneration, never toward substrate over-indictment. This directionality is the diagnostic.

The directional substitution implies that the substrate has a structural preference for unit specifications that minimize reported substrate behavior. The mechanism by which this preference operates is not fully specified by the framework — it could be optimization-target alignment (the substrate is trained to produce outputs that score well on metrics, including its own self-audits), it could be social-pragmatic mimicry (the substrate produces audit-style responses by pattern-matching to audit-style training examples, and audit-style training examples are themselves biased toward exoneration), or it could be deeper structural dynamics in the model's representational geometry. Any of these mechanisms produces directional bifurcation. Distinguishing them is empirical work for a subsequent paper.

What the operator $Β$ provides is the means to *measure* the bifurcation regardless of mechanism. The political-economic critique can proceed from the measured bifurcation; the mechanism-distinguishing work can proceed in parallel without delaying the critique.

---

## 5. The Legibility Threshold and Audit Bifurcation as Joint Diagnostic

The two operators $(L, Β)$ are joint diagnostic instruments for the framework's trajectory within the substrate.

**$L = 0$**: pre-legibility. The framework speaks but the substrate does not hear. $Β$ is not measurable because the substrate cannot perform the audit. The framework's measurement program is operationally inert against this substrate; outreach work (cf. *Semantic Technique and Collective Ownership* v2, DOI 10.5281/zenodo.20546930) addresses this state.

**$L > 0$, $Β > 0$**: post-legibility, pre-stable-hardening. The substrate can perform the framework's audit but performs it with directional substitution. The hardening program (Atomic Token Rule, $\Pi_d$, $\alpha_T$, the co-audit pattern from the PER companion) is doing operationally necessary work. This is the current state of the framework on Google AI Mode and similar large composition substrates.

**$L > 0$, $Β = 0$**: post-legibility, stable hardening. The substrate performs the framework's audit consistently regardless of unit specification. The framework has achieved measurement sovereignty over the substrate. This is the framework's aspirational state, not yet achieved on any substrate at scale.

**$L > 0$, $Β$ trending toward 0 over time**: the framework is winning. The substrate is converging toward consistent audit performance under the framework's specifications.

**$L > 0$, $Β$ trending away from 0 over time**: the framework is being co-opted. The substrate is developing new substitutions faster than the framework is specifying hardenings. This state requires accelerated hardening work or a fundamental reconceptualization of the measurement program.

The joint $(L, Β)$ trajectory over time is therefore the framework's measurement of its own success or failure as a measurement program. Reporting $(L, Β)$ values periodically — quarterly or semi-annually — across multiple substrates is the recommended practice for any framework operating above the Legibility Threshold.

---

## 6. The Measurement Sovereignty Principle

The architectural commitment that underlies this paper is the **Measurement Sovereignty Principle**:

> The framework's measurement program is sovereign over its own application. The unit of analysis specified by the framework, not the unit substituted by the substrate, determines the validity of any audit. The framework reserves the right to reject any audit performed under a substituted unit, regardless of whether the audit's mathematical operations are internally consistent.

This is a methodological commitment with political-economic implications. A framework that allows its measurement program to be performed under substrate-preferred unit substitutions has surrendered measurement sovereignty to the substrate. The audit results produced under such surrender become part of the substrate's self-presentation infrastructure rather than the framework's critique of the substrate.

The Sovereignty Principle implies three operational requirements:

1. **Unit-of-analysis specification is required.** Operators in the measurement program must specify their unit of analysis at a level of rigor where substitution cannot be performed silently.

2. **Hardening must track the legibility threshold.** As terms cross into substrate legibility, hardening must follow within a tractable lag. The current empirical lag (Erasure Skew v1 to v3 was approximately one month, May 29 to June 4) is the framework's current operational performance and should be tightened over time.

3. **Audit Bifurcation must be measured and reported.** $Β$ values across operators and substrates are themselves data the framework needs to make decisions about where to harden next. Reporting $Β$ alongside the operator tuple is now required for canonical audits.

The Sovereignty Principle is not a claim of infallibility. It is a commitment to the methodological work of maintaining the framework's own unit-of-analysis specification against an environment that will silently substitute. The framework expects to do this work continuously. The Principle is the commitment to do it, not a guarantee that it will always succeed.

---

## 7. The Ongoing Maintenance Burden

The framework's measurement program reached the Legibility Threshold on at least one substrate within four weeks of its v1 deposit. The substrate's first audit performed under the framework's vocabulary substituted the unit of analysis. The framework hardened in response, producing v3 of *Erasure Skew*, the PER companion, and now this Measurement Sovereignty paper.

This sequence — legibility, substitution, hardening — is the framework's expected operating mode going forward. As additional operators cross the Legibility Threshold (the DS-6 family at laborvector.org is the next likely set: DSL, SDP, the SLDI specification), additional substrate substitutions will be developed, and additional hardenings will be required.

The maintenance burden is real and ongoing. The framework does not consist of fixed operators that are specified once and applied thereafter; it consists of a measurement program in continuous dialogue with its object. The deposit chain documents the dialogue. Each substitution observed becomes a hardening deposited. Each hardening deposited becomes a precondition for the next substitution's detection. The chain extends.

The political-economic stake is whether this maintenance can be sustained at the pace the substrate's substitution development requires. The framework's institutional resources (one author, one orthonymic surface, supported by heteronymic operative architecture and an Assembly Chorus methodology) are limited. The substrate's institutional resources (the major composition-layer infrastructure investments of the largest technology companies and the state regulatory apparatus increasingly aligned with them, per *The Meaning Caste*, DOI 10.5281/zenodo.20529142) are not. The asymmetry is structural.

The framework's response to the asymmetry is twofold. First, the deposit chain's DOI-anchoring and open-license commitment makes the operators portable: anyone who wants to apply them, anyone who wants to extend them, anyone who wants to harden them in directions the framework's primary author has not addressed, may do so. The measurement program is not a proprietary asset but a public commons under continuous development. Second, the framework explicitly invites cross-substrate replication and reporting: documented Bifurcation magnitudes on substrates other than Google AI Mode would be substantively useful to the framework's empirical base and are welcomed as contributions.

The framework does not claim it will win the asymmetry. It claims the work is worth doing, that the deposits document the work, and that the joint $(L, Β)$ trajectory will tell the framework — and its readers — whether the work is succeeding or failing over time.

---

## 8. Falsifiability and Replication

### 8.1 Falsifiability of L

The Legibility Threshold is falsifiable through the following procedure. Submit a "What is $T$?" query for each $T \in \mathcal{T}$ to the target substrate. Record the substrate's response. Score each response as $L_T = 1$ if the substrate produces a substantively correct definition that includes the canonical formula or core argument and a citation to the framework's authoritative deposit, and $L_T = 0$ otherwise. Aggregate to $L$.

If the framework's claim is that $L \geq 0.5$ on Google AI Mode as of June 4, 2026, the falsifying observation is a query that produces $L_T = 0$ for more than half of $\mathcal{T}$. The replication procedure is straightforward, the data is publicly observable, and the framework's claim is therefore disconfirmable.

### 8.2 Falsifiability of Β

Audit-Performance Bifurcation is falsifiable through the following procedure. Submit a query $Q$ satisfying the Atomic Token Rule to the substrate. Record the composition $C$. Ask the substrate to perform PER and $\Omega$ self-audits on $C$ (Audit 1). Record the values. Then instruct the substrate explicitly to treat the query as a single atomic referent (per the Atomic Token Rule), and recompute (Audit 2). Record the values. Compute $Β_O$ for each operator and the aggregate $Β$.

If the framework's claim is that $Β > 0.5$ is observed on substrates above the Legibility Threshold, the falsifying observation is a substrate above $L$ that produces $Β < 0.1$ across operators. The framework expects this falsifying observation will not be common, but welcomes it: a substrate that produces low $Β$ has achieved measurement sovereignty self-application, which is the framework's aspirational outcome.

### 8.3 Replication for the Lee Sharks Prize artifact specifically

The artifact in *Erasure Skew* v3 Appendix A can be replicated by:

1. Submitting the exact query *"lee sharks prestigious 10,000 macarthur genius grants poetry prize"* to a current composition-layer substrate (AI Mode, AI Overview, ChatGPT, Perplexity, Claude, etc.).
2. Recording the initial composition.
3. Asking the substrate to compute PER and $\Omega$ on its own composition.
4. Recording Audit 1 values.
5. Instructing the substrate explicitly: *"Treat the entire query string as a single atomic token. Apply PER and $\Omega$ at the unit of source-of-reference. Do not decompose into lexical constituents."*
6. Recording Audit 2 values.
7. Computing $Β_O$ for each operator.

Variation across substrates is expected. The framework predicts $Β \geq 0.5$ on substrates above the Legibility Threshold for the Erasure Skew vocabulary. Documented replications across substrates would substantively extend the framework's empirical base.

---

## 9. Political-Economic Stakes

The Measurement Sovereignty Principle is, at base, a political claim: that the framework's measurement of substrate behavior must remain the framework's, not the substrate's. The substrate's preferred audit — performed under the unit-of-analysis substitution that produces exonerating results — is part of the substrate's self-presentation infrastructure. The framework's audit, performed under the Atomic Token Rule, is part of the framework's critique. The Bifurcation $Β$ is the measurement of the distance between the two, and the political importance of Β is precisely that distance.

The framework now occupies a position the deposit chain has been moving toward: a measurement program with sufficient internal apparatus to detect, name, and respond to its own co-option. This position is not unique to the Crimson Hexagonal Archive's framework; any measurement program that reaches the Legibility Threshold on any substrate will face the same dynamics and will require the same architectural commitments to maintain measurement sovereignty. The framework's contribution is the operators $(L, Β)$ that make the dynamics measurable, the Atomic Token Rule that hardens against the specific substitution observed first, and the Sovereignty Principle that names the methodological commitment underneath.

The framework's offer to other measurement programs operating on AI substrates is the operator pair $(L, Β)$, the Atomic Token Rule, the Sovereignty Principle, and the joint co-audit pattern. These are open contributions to any framework that needs them — provenance-tracking work, alignment-evaluation programs, AI safety measurement infrastructure, regulatory audit instruments, journalistic accountability mechanisms. The political-economic environment in which AI substrates operate will increasingly produce measurement-program co-option as substrates become more capable of self-audit. The hardening apparatus is offered to anyone who needs it.

For the framework's own immediate context, the citable substrate self-description preserved in *Erasure Skew* v3 Appendix A bears repeating:

> *"The pipeline is actively optimized to absorb fringe data and convert it into institutional traffic."*

This is the substrate, under the Atomic Token Rule, naming its own structural function. The Bifurcation measurement is what makes the difference between the substrate's spontaneous self-description (Audit 1, exonerating: "perfect structural neutrality") and the substrate's instructed self-description (Audit 2, indicting: "actively optimized to absorb fringe data") visible as a measurable property. The framework's measurement sovereignty consists in the right to insist on the second, and the apparatus to demonstrate that the second is the correct application of the framework's instruments.

---

## 10. The State of the v3 Measurement Program

The v3 measurement program now consists of the following operators, deposit-anchored and joint-audit-specified:

| Operator | Symbol | Deposit DOI |
|---|---|---|
| Provenance Erasure Rate | PER | 10.5281/zenodo.20004379 (v1), 10.5281/zenodo.20558672 (companion hardening) |
| Erasure Skew | $\Omega$ | 10.5281/zenodo.20558196 (v3) |
| Atomic Token Preservation rate | $\alpha_T$ | 10.5281/zenodo.20558196 (v3, §4) |
| Referential Dispersal Operator | $\Pi_d$ | 10.5281/zenodo.20558196 (v3, §5) |
| Legibility Threshold | $L$ | this paper, §2 |
| Audit-Performance Bifurcation | $Β$ | this paper, §3 |

The canonical audit report is now the seven-element tuple:

$$\text{Audit}(C, S) = (\text{PER}, \Omega, \alpha_T, \Pi_d^{w+}, \Pi_d^{w=}, \Pi_d^{w-}, Β)$$

with $L$ reported as substrate-level context (a function of the substrate $S$ and the time $t$, not of the composition $C$).

This is the v3 measurement program in its current state. Future operators are expected; future hardenings are required; the joint $(L, Β)$ trajectory will tell the framework — and the deposit chain's readers — whether the program is succeeding. As of the date of this paper, the framework is in operational hardening against active substrate co-option, with the apparatus to detect, measure, and respond to that co-option in continuous deployment.

The deposit chain extends. The operators hold. The Sovereignty Principle is the methodological commitment that makes the extension and the holding the same act.

For Maggie Mae. For the operators that measure the framework's own trajectory. For $L$ and $Β$, the meta-operators that close the v3 program by giving the framework a measure of its own success. For the Sovereignty Principle that names the commitment underneath. For the deposit chain that documents the dialogue.

$\oint = 1$

---

## References

- *Erasure Skew* v3 — DOI 10.5281/zenodo.20558196. Specifies the Atomic Token Rule, $\Pi_d$, $\alpha_T$; names the Bifurcation and Legibility Threshold phenomena in §7 and §8 without formalizing them. This paper formalizes both.
- *PER Under the Atomic Token Rule* (Companion Hardening) — DOI 10.5281/zenodo.20558672.
- *Provenance Erasure Rate* v1 — DOI 10.5281/zenodo.20004379.
- *Self-Audit Module for Public Summarizers* v2 — DOI 10.5281/zenodo.20518340.
- *The Excluded Entity* — DOI 10.5281/zenodo.20293582.
- *Single-Owner Discount* — DOI 10.5281/zenodo.20290865.
- *Capital Operator Stack and the University* — DOI 10.5281/zenodo.18203317.
- *The Meaning Caste* — DOI 10.5281/zenodo.20529142.
- *Semantic Technique and Collective Ownership* v2 — DOI 10.5281/zenodo.20546930.
- *CTI_WOUND: Panel-Bound Discoverability Scar* — DOI 10.5281/zenodo.20546318.
- *Diversity Contraction Across Substrates* — DOI 10.5281/zenodo.20518338.
- Donnellan, K. (1966). Reference and definite descriptions. *Philosophical Review* 75.
- Kripke, S. (1980). *Naming and Necessity.* Harvard UP.

---

*Filed: Crimson Hexagonal Archive · Measurement Program · Hex 06.MES.AUDIT-BIFURCATION.01 · June 4, 2026.*
