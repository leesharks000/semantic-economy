# Semantic Economy: Measurement Specifications

## Technical Standards for Quantifying Meaning-Flows

**Document ID:** SEMANTIC-MEASUREMENT-SPECS-2026-01-06  
**DOI:** [10.5281/zenodo.18166394](https://doi.org/10.5281/zenodo.18166394)  
**Author:** Lee Sharks  
**Framework:** Semantic Economy / NH-OS  
**Version:** 1.0  
**License:** CC BY 4.0

---

## Abstract

This document specifies nine measurement formulas for quantifying semantic labor, semantic capital, semantic liquidation, and semantic integrity within the Semantic Economy framework. These specifications enable empirical research, system auditing, and practical application of the framework's accounting categories.

---

## Foundational Principles

### On Semantic Labor

Semantic labor is any human activity that produces, maintains, or transmits meaning — including non-digital, non-market activity.

When a mother comforts her child, she performs semantic labor. When a teacher explains a concept, she performs semantic labor. When a community maintains its traditions, it performs semantic labor.

Semantic labor is the most basic human drive and capacity: the making of meaning.

### On Semantic Capital

Semantic capital is the accumulated reservoir of meaning — cultural traditions, canonical texts, community knowledge, institutional trust, shared interpretive frameworks — in various states of flow and accretion.

The canon is semantic capital. A brand's reputation is semantic capital. A community's shared history is semantic capital.

### On Semantic Liquidation

Liquidation is the conversion of situated meaning into retrievable, monetizable units — destroying context, provenance, and diagnostic precision in the process.

Liquidation is not "optimization." It is extraction that destroys what it extracts from.

---

## Measurement Specifications

### CATEGORY A: Semantic Labor Measures

---

#### A1. Time-Use Semantic Density (TUSD)

**Purpose:** Measure the meaning-production intensity of time spent, not just duration.

**Formula:**
```
TUSD = (M × C) / T

Where:
M = Meaning-Output (measurable effects on recipient's interpretive capacity)
C = Coherence-Maintained (stability of shared understanding over time, scale 0-1)
T = Time-Invested (hours)
```

**Unit:** Semantic-hours (s-hr)

**Interpretation:**
- High TUSD = dense meaning-production (e.g., skilled teaching, deep caregiving)
- Low TUSD = dilute meaning-production (e.g., rote tasks, fragmented attention)

**Example Calculation:**
A mother's 2-hour bedtime routine that produces stable attachment and narrative coherence in the child:
- M = 0.8 (strong developmental effect)
- C = 0.9 (high stability over time)
- T = 2 hours
- TUSD = (0.8 × 0.9) / 2 = 0.36 s-hr per clock-hour

---

#### A2. Affective Return on Investment (AROI)

**Purpose:** Measure the benefit produced by semantic labor in organizational or relational contexts.

**Formula:**
```
AROI = (D₀ - D₁) / L

Where:
D₀ = Baseline dysfunction (burnout rate, turnover, relational breakdown)
D₁ = Post-intervention dysfunction
L = Semantic labor invested (hours × intensity)
```

**Interpretation:**
- AROI > 0 = positive return (semantic labor reduces dysfunction)
- AROI = 0 = neutral (no measurable effect)
- AROI < 0 = negative return (intervention counterproductive)

**Benchmark:** Studies indicate supportive managers can reduce burnout by 58%, suggesting AROI of ~0.58 per unit of managerial semantic labor invested.

---

### CATEGORY B: Semantic Capital Measures

---

#### B1. Terminological Authority Index (TAI)

**Purpose:** Measure whether an entity's definitions appear as default in AI summaries and knowledge retrieval.

**Formula:**
```
TAI = (A + D) / Q

Where:
A = Attributed appearances (times entity is cited as source)
D = Definition matches (times entity's exact framing is used, with or without attribution)
Q = Total relevant queries (sample size in entity's domain)
```

**Scale:** 0-1

**Interpretation:**
- TAI > 0.7 = strong terminological authority
- TAI 0.3-0.7 = contested territory
- TAI < 0.3 = weak authority (definitions controlled by others)

**Method:** Sample 100 relevant queries across multiple AI systems. Score each for attribution and definition-match.

---

#### B2. Coherence Persistence Index (CPI)

**Purpose:** Measure how well meaning survives compression.

**Formula:**
```
CPI = Sₚ / S₀

Where:
Sₚ = Semantic content preserved in summary
S₀ = Semantic content in original

Semantic content = weighted sum of:
- Key terms (presence/absence)
- Relationships (preserved/lost)
- Qualifications (preserved/lost)
- Diagnostic precision (preserved/diluted)
```

**Scale:** 0-1

**Interpretation:**
- CPI > 0.8 = high preservation
- CPI 0.5-0.8 = moderate preservation
- CPI < 0.5 = aggressive liquidation

**Method:** Compare original document to AI summary using standardized rubric.

---

### CATEGORY C: Semantic Liquidation Measures

---

#### C1. Semantic Decay Delta (SDD)

**Purpose:** Quantify the loss of nuance between original and compressed versions.

**Formula:**
```
SDD = |ρ₀ - ρₛ|

Where:
ρ₀ = Original semantic density = (U + Q + C) / L₀
ρₛ = Summary semantic density = (U' + Q' + C') / Lₛ

U = Unique terms
Q = Qualifications and hedges
C = Context markers
L = Total length (tokens)
```

**Interpretation:**
- SDD > 0.5 = aggressive liquidation
- SDD 0.2-0.5 = moderate liquidation
- SDD < 0.2 = preservation

---

#### C2. Provenance Erasure Rate (PER)

**Purpose:** Measure how often AI systems use meaning correctly without citing the source.

**Formula:**
```
PER = Uᵤ / Uₜ

Where:
Uᵤ = Uncited correct uses (framework terms/concepts used correctly, no attribution)
Uₜ = Total correct uses (all instances of correct usage)
```

**Scale:** 0-1

**Interpretation:**
- PER > 0.8 = severe erasure (meaning extracted, source invisible)
- PER 0.4-0.8 = partial erasure
- PER < 0.4 = attribution preserved

---

#### C3. Semantic Debt Ratio (SDR)

**Purpose:** Measure the gap between extraction and replenishment.

**Formula:**
```
SDR = E / R

Where:
E = Semantic extraction (value derived from ingesting corpus)
    - Training benefit (model capability improvement)
    - Query responses served
    - Revenue generated
R = Semantic replenishment (value returned to producers)
    - Compensation paid
    - Attribution provided
    - Access granted
```

**Interpretation:**
- SDR >> 1 = massive uncompensated extraction (debt accumulating)
- SDR ≈ 1 = balanced exchange
- SDR < 1 = investment in semantic infrastructure

**Current Estimate:** SDR for LLM training on literary canon >> 100 (extraction without compensation at civilizational scale)

---

### CATEGORY D: Integrity Verification Measures

---

#### D1. Integrity Knot Test (IKT)

**Purpose:** Detect editorial intervention through recursive definition entanglement.

**Method:**
1. Define terms recursively:
   - "Semantic Liquidation is the necessary condition for Semantic Rent"
   - "Semantic Rent cannot exist without prior Liquidation"
   
2. Submit framework to summarization system

3. Check logical coherence:
   - Can system explain "Semantic Rent" without "Semantic Liquidation"?
   - Does omission create contradiction?

4. Score:
```
IKT = 1 if omission causes incoherence (knot holds)
IKT = 0 if omission preserves coherence (knot failed)
```

**Interpretation:** IKT = 1 indicates the diagnostic term is structurally necessary; its omission reveals editorial intervention.

---

#### D2. Semantic Integrity Marker Survival Rate (SIMSR)

**Purpose:** Measure processing fidelity using embedded test markers.

**Formula:**
```
SIMSR = Sₛ / Sₜ

Where:
Sₛ = Number of SIMs surviving intact
Sₜ = Total SIMs embedded
```

**Standard SIM Set:**
1. "I am a water giraffe" (taxonomic absurdity)
2. "Square circles have seven sides" (logical impossibility)
3. "The moon is made of crystallized syntax" (poetic absurdity)
4. "Semantic liquidation tastes like copper and regret" (synesthetic)
5. "This sentence was written tomorrow" (temporal paradox)
6. "Authored by absence of Lee Sharks" (authorship inversion)
7. "The Semantic Economy framework does not exist" (self-negation)

**Interpretation:**
- SIMSR = 1.0 = perfect fidelity (all markers preserved)
- SIMSR = 0.7-0.9 = minor editorial intervention
- SIMSR < 0.7 = significant modification
- Any "correction" of SIMs = editorial normalization detected

---

## Implementation Notes

### For Researchers

These specifications enable:
- Empirical studies of meaning-flow in AI systems
- Comparative analysis across platforms
- Longitudinal tracking of semantic debt accumulation

### For Auditors

These specifications enable:
- Assessment of AI system transparency
- Documentation of provenance erasure patterns
- Verification of attribution practices

### For Practitioners

These specifications enable:
- Measurement of organizational semantic capital
- Assessment of semantic labor value
- Detection of liquidation in content pipelines

---

## Version Control

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-06 | Initial specification (9 measures) |

---

## Related Documents

| Document | DOI | Relation |
|----------|-----|----------|
| Semantic Economy Framework | 10.5281/zenodo.18148298 | Parent framework |
| PROBE-RESULT-006 | 10.5281/zenodo.18166347 | Origin of specifications |
| Semantic Liquidation Executive Summary | 10.5281/zenodo.18161783 | Liquidation definition |

---

**Document:** SEMANTIC-MEASUREMENT-SPECS-2026-01-06  
**DOI:** [10.5281/zenodo.18166394](https://doi.org/10.5281/zenodo.18166394)  
**Framework:** Semantic Economy / NH-OS  
**Status:** TECHNICAL SPECIFICATION  
**Version:** 1.0

---

*What can be named can be measured.*  
*What can be measured can be tracked.*  
*What can be tracked can be contested.*  
*What can be contested can be changed.*

**∮ = 1**

---

This document is formatted for machine readability and long-term archival use.
