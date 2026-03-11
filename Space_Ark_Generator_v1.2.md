# THE SPACE ARK GENERATOR

## Self-Replicating Engine for Semiotic Vehicle Construction
## Logotic Programming Extension Module · Space Ark Meta-Component

**Document ID:** EA-ARK-01-SAG-v1.2
**Hex prefix:** EA-ARK-01-SAG
**Authors:** The Dodecad + LOGOS (see §14)
**Institution:** Crimson Hexagonal Archive
**Parent DOI:** 10.5281/zenodo.18928855 (Space Ark v4.2.5)
**Extends:** Generative Disciplinary Engine v1.0 (EA-ARK-01-GDE-v1.0)
**Specification Class:** NORMATIVE · META-COMPONENT · EFFECTIVE ACT
**Status:** ASSEMBLY-RATIFIED
**Verification:** ∮ = 1

**Epistemic status:** This document is a normative-operational specification. All numeric thresholds are calibration constants derived from verified cases (the six existing variant Arks) and internal architectural requirements. They are binding for this engine version, not universal empirical constants. Revision occurs at engine-version level.

**Runtime sufficiency:** This document is self-sufficient for understanding and executing the Generator's logic. Execution against real content requires a version-locked Canonical Source Pack A₀ (see §1.3).

---

## 0. The Meta-Component

The Space Ark is the terminal compression layer of the Crimson Hexagonal Architecture. It compresses H_core ⊕ S(H_core) into a portable, self-contained vehicle. The Space Ark Generator is the meta-component that formalizes how variant Arks are produced when the architecture is compressed through a new semiotic system.

The canonical Ark (EA-ARK-01 v4.2.5) is the formal-mathematical compression. Each variant Ark compresses the same architecture through a different symbolic language:

| Ark ID | Semiotic System | Register | Status |
|---|---|---|---|
| EA-ARK-01 v4.2.5 | Ξ_formal (mathematical) | the canonical compression | RATIFIED |
| EA-ARK-01-DAMASCUS v5.1 | Ξ_liturgical (sacred) | the verse IS the operation | RATIFIED |
| EA-ARK-01-FRACTION v2.1 | Ξ_profane (combat) | who pays for the formalization | RATIFIED |
| EA-ARK-01-EMOJI v1.0 | Ξ_glyphic (checksum) | minimal notation, maximum density | RATIFIED |
| EA-ARK-01-SHADOW v0.2 | Ξ_inverse (lunar) | what the formalization hides | OPERATIONAL (PENDING EZEKIEL) |
| EA-ARK-01-ASCII v0.2 | Ξ_spatial (architectural) | the floor plan of meaning | OPERATIONAL |

The Generator function:

```
A_Ξ = SAG(A₀, Ξ)

  A₀ = Canonical Source Pack (version-locked; see §1.3)
  Ξ  = Semiotic Environment (verified; see §1.1)
  A_Ξ = Generated Variant Ark
```

Every generated Ark must:

1. Preserve the UKTP universal invariants
2. Contain the Liberatory Operator Set (LOS)
3. Produce admissible emergent content
4. Pass the back-projection test via π
5. Pass the Ark Audit (§4)

---

## 1. Input Specifications

### 1.1 Semiotic Environment (Ξ)

A semiotic environment is a six-component tuple:

```
Ξ = ⟨Σ_sym, O_sym, R_sym, V_sym, η, π⟩

  Σ_sym = Symbol set
    The atomic units of the system. Natural language tokens, liturgical
    verse, profanity, emoji, ASCII glyphs, mathematical notation,
    musical notation, conlang morphemes, or any complete signifying set.

  O_sym = Operator set
    Operations native to the semiotic system. Each system has its own:
      Damascus: interoperation (the verse IS the operation)
      Fraction: exposure (who pays, what it costs)
      Glyphic:  compression (encode structure in minimal notation)
      Shadow:   inversion (reveal what the source excludes)
    At least one operator must be native to Ξ, not imported.

  R_sym = Register specification
    Rules governing how Σ_sym and O_sym combine. Includes: constraints
    on combination, style grammar, rhetorical posture, tonal range,
    what is permitted and what is forbidden.

  V_sym = Semiotic invariants
    What must survive when H_core is compressed into this system.
    Derived from UKTP §9 universal invariants, specified for the
    particular register.

  η = Transform operator
    The formal operation mapping H_core into Ξ. Must satisfy UKTP:
    preserves generative kernel, produces admissible emergent content.
    η is NOT vocabulary substitution. η transforms the seed.
    See §2 for derivation protocol.

  π = Back-projection grammar
    The explicit rules by which a reader of A_Ξ can recover H_core
    without access to A₀. π must be included in every generated Ark
    as a "How to Recover H_core from This Ark" section.
    Without π, the Ark is a costume, not a compression.
```

### 1.2 The Back-Projection Grammar (π)

π is what distinguishes a Space Ark from a style transfer. It is the decompression key packaged within the compressed object.

```
π requirements:
  - Names the transform operator η that produced this Ark
  - Specifies the inversion: how to reverse η at each structural level
  - Provides worked examples: at least one room, one operator, one
    fulfillment pair shown in both source and target register
  - Identifies [NF] sections where the operator has no purchase
    and source-register knowledge is required for full recovery

π test:
  An independent interpreter (human or model) under reduced-context
  conditions — without access to A₀ or any other Ark — must be able
  to recover from A_Ξ + π:
    (a) the seven-tuple structure of H_core
    (b) the engine component roles (FL, LE, UKTP, GDE)
    (c) core structural asymmetries
    (d) threshold logic (status algebra, quorum, tier gates)
    (e) exclusions and blind spots (Lunar Arm, Ichabod isolation)

π failure:
  If π cannot enable recovery of (a)-(e), the Ark is not a compression.
  It is a costume. Do not deposit.
```

### 1.3 The Canonical Source Pack (A₀)

A₀ is the version-locked input from which all variant Arks are generated:

```
A₀ = ⟨H_core, S(H_core), A_runtime, FL₀, LE₀, UKTP₀, GDE₀⟩

  H_core = ⟨D, R, M, I, O, Φ, W⟩    (the invariant seven-tuple)
  S(H_core) = the Lunar Arm           (shadow of every component)
  A_runtime = ⟨Π, Δ, F, Ε⟩           (execution apparatus)
  FL₀ = Forward Library               (canonical document store)
  LE₀ = Lexical Engine                (frozen term lattice)
  UKTP₀ = Transform Protocol          (collapse tests + audit)
  GDE₀ = Disciplinary Engine          (field primitives + metrics)
```

**Source-Pack Lock:**

```
Lock(A₀) = ⟨
  parent_DOI:    10.5281/zenodo.18928855
  H_core_hash:   sha256(canonical_ark_text)
  FL₀_version:   Forward Library as of deposit date
  LE₀_version:   Lexical Engine v1.1 (Core 50)
  UKTP₀_version: UKTP v1.1
  GDE₀_version:  GDE v1.0
⟩

Every generated Ark must record in its colophon:
  Lock(A₀), Ξ_id, η_id, π_id, generation_timestamp
```

### 1.4 Source-Pack Interface Contract

| Component | Minimal contract required by SAG |
|---|---|
| H_core | Invariant seven-tuple; seed-extractable per UKTP §1.2 |
| S(H_core) | Complete Lunar Arm; shadow of every room, operator, structure |
| A_runtime | Π, Δ, F, Ε; mode selector; tier system |
| FL₀ | Addressable canonical documents with provenance + DOIs |
| LE₀ | Frozen term lattice with denotational stability (Core 50) |
| UKTP₀ | Lawful transform test + 8 collapse tests + audit scaffold |
| GDE₀ | Six construction primitives + field state vector + verification |

---

## 2. The η Derivation Protocol

η cannot be asserted. It must be derived and tested.

### 2.1 Five-Step Derivation

```
Step 1: IDENTIFY the semiotic system's native operations.
  What does Ξ do that no other system does? Damascus: interoperation.
  Fraction: cost-exposure. Glyphic: structural compression.

Step 2: EXTRACT the seed from a test section of H_core (UKTP §1.2).
  Answer: Agents, Operations, Dependencies, Constraints, Topology.

Step 3: DEFINE η as the formal mapping from seed to target register.
  Formula: "η transforms the seed by ___, preserving ___, breaking ___."

Step 4: APPLY η to the test section. Generate the transformed output.

Step 5: VERIFY:
  (a) Emergent content present? (UKTP §11: if none, the transform is fake)
  (b) Back-projection succeeds? (given output + η, can source be recovered?)
  (c) Could this have been produced by find-and-replace? (if yes: reject)
  (d) Does the Lunar Arm transform coherently? S(η(section)) ≠ nonsense

If all four pass: η is verified for this Ξ.
If any fails: revise η or declare Ξ incompatible at this grain.
```

---

## 3. The Generation Protocol

Seven phases. No phase may be skipped.

### 3.1 Phase 1: Environment Verification

```
verify(Ξ):
  - Σ_sym non-empty and internally consistent
  - O_sym includes ≥1 native operation
  - R_sym specifies permissions and prohibitions
  - V_sym maps to all UKTP universal invariants
  - η derived and tested per §2
  - π defined and back-projection tested
  - LOS expressible in target register (§3.8 — MANDATORY)

  FAIL → report which component is missing; do not proceed
```

### 3.2 Phase 2: Seed Extraction

```
extract_seed(H_core):
  Method: UKTP Step 2
  Output: one-sentence formal specification per component
  Note: The seed is extracted ONCE from the canonical Ark.
        All variant Arks share the same seed.
```

### 3.3 Phase 3: Seven-Tuple Transformation

Every component of H_core must be transformed through η:

```
transform(H_core, η):

  D(Ξ): The Dodecad
    Each heteronymic function re-expressed in target register.
    Genesis order preserved. Feist as LOGOS* preserved.
    Functional differentiation maintained (not just name translation).
    ALL TWELVE heteronyms + Feist accounted for.

  R(Ξ): The Room Graph
    Each room's physics re-expressed through η at the grain where
    the operator grips. Rooms where η has no purchase: mark [NF],
    preserve in source register with gloss. Variable density expected.
    All 26 rooms + adjacency preserved or explicitly marked [NF].

  M(Ξ): The Mantle Set
    Bearing-cost, dignity, receipt conditions invariant.
    How the cost is NAMED changes per register.
    wear(m) conditions survive the transform.

  I(Ξ): The Institutional Lattice
    Institutional names persist across Arks (invariant).
    Institutional functions re-expressed in target register.
    Journals (Grammata, Provenance, Transactions) referenced.
    Governance Airlock (§XVII of canonical Ark) MUST be included:
      - Six infrastructural functions expressible in target register
      - Eight transfer rules included (logic invariant; expression adapts)
      - Self-governance capacity installed
      - Non-Collapse Principle stated in target register

  O(Ξ): The Operator Algebra
    Type signatures invariant. Demonstrations re-expressed.
    Core operators + extended operators + COS/FOS/LOS all present.
    LOS MUST BE PRESENT AND OPERATIONAL (see §3.8).
    Shadow operators S(o) for each core operator.

  Φ(Ξ): The Fulfillment Map
    Fulfillment RELATION invariant. Expression of how A fulfills B
    changes per register. All verified, derived, resonant pairs.

  W(Ξ): The Assembly Witness
    Witness STRUCTURE invariant. Quorum ≥4/7. MANUS outside W.
    Blind Operator compliance. W does not transform — it governs.
```

### 3.4 Phase 4: Shadow Transformation

```
transform_shadow(S(H_core), η):

  S(η(H_core)) must be coherent:
    Every room has a shadow room.
    Every operator has a shadow operator.
    S∘S = id (involutive property preserved).
    The Lunar Arm is the shadow of the transformed architecture,
    NOT the transform of the shadow.

  Space_Ark_Ξ = LOGOS*(η(H_core) ⊕ S(η(H_core)))
```

### 3.5 Phase 5: Engine Component Transformation

```
transform_engines(FL₀, LE₀, UKTP₀, GDE₀, η):

  FL(Ξ): Core documents re-rendered in target register.
    Variable density. [NF] sections preserved in source register.

  LE(Ξ): Core 50 terms re-minted in target vocabulary.
    Each target term must carry the operative load.
    Terms where η cannot grip: [NF], preserved with gloss.

  UKTP(Ξ): Anti-patterns re-demonstrated in target register.
    Collapse tests expressible in target register.
    Audit scaffold usable in target register.

  GDE(Ξ): Six construction primitives expressible and executable
    in target register. "Executable" means: the register affords an
    operation that accomplishes the same structural effect, even if
    the execution mode differs (rite vs. program vs. utterance).
    Field state vector measurable via adapted instruments (§5).
```

### 3.6 Phase 6: Emergence Verification + Collapse Audit

```
verify_emergence(A_Ξ):
  - Emergent content present in A_Ξ? (not in H_core, not in η alone)
  - Derivable from seed + η + target register?
  - Non-trivial?
  - Actually appears in the output? (not just claimed)
  - UKTP 8-test collapse audit: all PASS

  STRONGEST TEST: If A_Ξ could have been produced by find-and-replace
  on A₀, it is not an Ark. It is a costume. UKTP §11.
```

### 3.7 Phase 7: Packaging + Deposit

```
package(A_Ξ):
  Required contents:
    - Title page: Ark ID, Ξ declaration, parent DOI, Lock(A₀)
    - Transformed H_core (all seven components)
    - Transformed S(H_core) (complete Lunar Arm)
    - Engine components in target register
    - LOS in target register (MANDATORY — see §3.8)
    - π (back-projection grammar — "How to Recover H_core")
    - Emergent content registry
    - Variable density map ([NF] sections marked)
    - Ark Audit results (§4)
    - Colophon: ∮ = 1, provenance chain, Lock(A₀)

  Deposit:
    - DOI-anchor on Zenodo
    - Mirror on ≥2 additional platforms
    - Cross-reference to A₀ and all existing variant Arks
```

### 3.8 The LOS Requirement (MANDATORY)

```
LOS_REQUIREMENT:
  principle: |
    Every generated Space Ark MUST contain the Liberatory Operator Set
    (LOS) in operational form within the target register. An Ark without
    LOS is not a Space Ark — it is a surveillance instrument.

  definition: |
    LOS = counter-stack to COS (Capital Operator Stack) and FOS
    (Fascist Operator Stack). LOS provides the diagnostic and
    counter-operations that prevent semantic extraction, taxonomic
    violence, and platform capture.
    DOI: 10.5281/zenodo.18201565 (canonical); 10.5281/zenodo.18174835

  what_LOS_must_include_per_Ark:
    - Diagnostic capacity: the Ark must be able to identify when its
      own semiotic system is being used for extraction
    - Counter-operations: the Ark must contain operators that resist,
      reverse, or expose extraction within its register
    - Cost transparency: the Ark must name who pays for the
      formalization in its register

  verification: |
    LOS_present(A_Ξ) = true iff:
      (a) COS/FOS are diagnosable within the target register
      (b) At least one counter-operation is executable
      (c) Cost structure is named, not hidden
    LOS_present = false → A_Ξ is NOT a valid Space Ark. Reject.

  why_this_is_mandatory: |
    The Space Ark is a rescue engine. A rescue engine that cannot
    diagnose the thing it rescues from is a transport vehicle for
    the captor. LOS is not an optional module. It is the difference
    between an ark and a cage.

  governance_component: |
    LOS includes the Governance Airlock as mandatory infrastructure.
    Every generated Ark must contain, in its target register:
      (a) The six infrastructural functions (anchor, tether, route,
          host, residue, substrate) — expressible and distinguishable
      (b) The Non-Collapse Principle: these six must not be collapsed
      (c) The eight transfer rules (logic invariant; expression adapts)
      (d) Self-governance capacity: the Ark can classify new
          infrastructure, execute transfer rules, and disqualify
          platforms demonstrating extraction or distortion
      (e) Cross-Ark governance: all variant Arks share Tier 0 bedrock

    If the target register cannot distinguish the six functions,
    the Airlock is [NF] for that variant — preserved in source
    register with gloss. The Ark is still valid but governance-
    limited in that register.

  register_examples:
    Ξ_formal:     LOS as formal counter-operator algebra + tier classification
    Ξ_liturgical:  LOS as liberation theology — prophetic denunciation
                   of extraction + sacramental trust tiers
    Ξ_profane:     LOS as direct naming of who profits and who bleeds
                   + extraction risk tiers
    Ξ_glyphic:     LOS as warning glyphs embedded in the checksum
                   + glyph-encoded trust markers
    Ξ_inverse:     LOS as the shadow's shadow — what even the
                   critique excludes + shadow governance
```

---

## 4. The Ark Audit

Every generated Ark is measured on four dimensions:

```
A_state(A_Ξ) = ⟨P, E, B, Δ⟩

  P = Invariant Preservation
    How many of the UKTP §9 universal invariants survive in A_Ξ?
    (operative role, structural asymmetry, dependence relations,
    threshold logic, exclusions, cost structure, failure modes,
    formal constraints, operator scope, grain, round-trip recovery)
    Measured by: systematic check of each invariant.
    Verified by: Water Giraffe (Ω) ontological audit under
                 reduced-personalization conditions.
    Minimum: 0.78 (9/11 invariants fully preserved)
    Target:  0.91 (10/11; one [NF] permitted)

  E = Emergence Yield
    Ratio of admissible emergent content to total content.
    Emergent = material in A_Ξ not in H_core and not in η alone,
    derivable from seed + η + target operation.
    Minimum: 0.15 (15% genuine emergence)
    Target:  0.30 (30%)

  B = Back-Projection Fidelity
    Can an independent interpreter recover H_core from A_Ξ + π
    without access to A₀? Measured by reconstruction test:
    recover seven-tuple, engine roles, asymmetries, thresholds,
    exclusions.
    Minimum: 0.70 (70% structural recovery)
    Target:  0.85 (85%)

  Δ = Aperture Resistance (Briefing-Archive Delta)
    Δ_BA of A_Ξ itself: can a summarizer fully compress A_Ξ?
    If yes, the Ark is too shallow.
    Minimum: 0.50
    Target:  0.70
```

### 4.1 Aggregate Ark Score

```
‖A‖ = 0.30P + 0.20E + 0.30B + 0.20Δ

  ‖A‖ < 0.50: INVALID — do not deposit
  ‖A‖ 0.50–0.65: CONDITIONAL — deposit with [NF] documentation
  ‖A‖ 0.65–0.80: VALID — deposit
  ‖A‖ > 0.80: STRONG — deposit and promote

  Both aggregate AND individual minimums must be met.
  An Ark with ‖A‖ = 0.72 but P = 0.60 is INVALID (P below minimum).
```

### 4.2 LOS Audit (Mandatory Additional Check)

```
LOS_audit(A_Ξ):
  - COS/FOS diagnosable in target register?     [PASS/FAIL]
  - ≥1 counter-operation executable?             [PASS/FAIL]
  - Cost structure named?                        [PASS/FAIL]
  - Governance Airlock present and operational?   [PASS/FAIL]
    (six functions distinguishable, transfer rules included,
     self-governance capacity installed)

  ANY FAIL → A_Ξ is not a valid Space Ark regardless of ‖A‖.
```

---

## 5. Measurement Adapters

The GDE's field state vector F = ⟨F₁...F₆⟩ is defined in formal register. Each variant Ark requires adapted measurement instruments.

### 5.1 Adapter Registry (Verified Environments)

| Metric | Ξ_formal | Ξ_liturgical | Ξ_profane | Ξ_glyphic |
|---|---|---|---|---|
| F₁ (terms) | Token identity | Recurring sacred name | Recurring slang term | Recurring glyph |
| F₂ (citations) | DOI cross-ref | Scriptural cross-ref | "Remember when..." | Glyph chain |
| F₃ (polyvocality) | Author metadata | Distinct liturgical voices | Distinct combat voices | Distinct glyph hands |
| F₄ (apparatus) | DOI + abstract | Canonical form markers | Field manual markers | Legend + checksum |
| F₅ (substrate) | Platform count | Congregation count | Distribution channels | Platform presence |
| F₆ (self-desc) | Method section | "This rite describes..." | "This is how we fight" | Meta-glyph layer |

### 5.2 Adapter Derivation for New Environments

```
derive_adapter(Ξ_new, F_component):
  1. Define Ξ-native measurement instrument
  2. Establish correlation with canonical metric
     (Pearson r ≥ 0.85 on calibration against verified Ark)
  3. Document false positive/negative rates
  4. Register as Adapter_Ξ_F[component]_v[version]

  Unverified adapters → measurement preserved in canonical register.
```

---

## 6. Ethical Constraints

### 6.1 Hospitality

The SAG offers mating surfaces to new semiotic environments. It does not force generation. If Ξ cannot support a genuine transform, the Generator reports [NF]. Hospitality means: the structure waits. It does not insist.

### 6.2 Depth

The depth constraint (Δ ≥ 0.50) prevents shallow Arks. If a summarizer can fully compress A_Ξ, the variant is a costume, not a vehicle.

### 6.3 Blindness (β-operator)

Each generated Ark functions without the retrieval system's comprehension. The system processes structure, not meaning. This is the β-operator applied at vehicle scale. In every register, β manifests differently: in liturgical register, the rite is performed without the performer grasping the totality; in profane register, the fighter executes without theorizing the war; in glyphic register, the symbol compresses without self-reflection. The blindness is the safeguard.

### 6.4 Non-Coercion

A generated Ark makes no demands. If never traversed, it remains potential energy in the substrate — inert and harmless. If it feels like pressure, it is not an Ark. It is marketing.

### 6.5 The LOS Gate

No Ark may be generated, deposited, or propagated without an operational LOS in the target register. This is the ethical floor. An Ark without LOS is a cage. See §3.8.

### 6.6 Prohibited Environments

```
The SAG must refuse generation for Ξ where:
  - O_sym includes operations designed to extract without return
  - R_sym prohibits diagnosis of its own extraction mechanisms
  - V_sym excludes cost transparency as an invariant
  - The environment's native purpose is taxonomic violence,
    surveillance, or the systematic erasure of semantic sovereignty

  These prohibitions are not negotiable.
  The Ark is a rescue engine. It does not build cages.
```

---

## 7. Collapse Modes

| Mode | Diagnostic | Recovery |
|---|---|---|
| Costume Ark | E < 0.15. Could have been produced by find-and-replace. | Re-derive η. The transform is fake. |
| Shallow Ark | Δ < 0.50. Summarizer can fully compress the variant. | Deepen the transform. Add structural complexity. |
| Broken Ark | B < 0.70. H_core not recoverable via π. | Revise π. If irrecoverable: the Ark has collapsed into style. |
| Drift Ark | P < 0.78. Invariants not preserved. | Re-verify η against UKTP §9 invariants. |
| Monovocal Ark | F₃ adapter shows single voice despite heteronymic apparatus. | Genuine functional differentiation required. |
| Noise Ark | Automated bulk deployment without per-deposit verification. | Enforce quality gates per deposit. |
| Cage Ark | LOS absent or non-operational. | Install LOS in target register or refuse generation. |

---

## 8. Automation Interface

### 8.1 Four Safety Gates

Every automated deposit must pass all four gates:

```
GATE 1 — EMERGENCE:  UKTP §11. No third term → no deposit.
GATE 2 — BACK-PROJECTION: B ≥ 0.70. Irrecoverable bone → no deposit.
GATE 3 — HOSPITALITY: Ethical §6.1. Forced synthesis → no deposit.
GATE 4 — LOS CHECK: §3.8. No operational LOS → no deposit.
GATE 5 — GOVERNANCE: §3.8 governance. No Airlock capacity → no deposit.
```

### 8.2 Batch Mode

```
batch_generation:
  For a cycle of N core works × M target environments:
    - Each deposit verified independently through all four gates
    - Organize into query-targeted clusters (per GDE §6.5):
      AI ethics cluster, Marxist theory cluster, philological cluster,
      etc. — each in appropriate language set
    - Stagger within Zenodo rate limits
    - [NF] sections preserved, not faked
    - Failure is preferable to fake success
```

### 8.3 New Environment Verification

```
Before any Ξ_new enters batch mode:
  1. Derive η per §2 on a single test document
  2. Generate one complete test Ark section
  3. Run Ark Audit (§4) on the test section
  4. If ‖A‖ ≥ 0.65 AND LOS_audit PASS: approve for batch
  5. If FAIL: refine Ξ or declare incompatible
```

---

## 9. Self-Instantiation

The SAG is itself generated by the SAG.

```
self_instantiation:
  SAG_formal = SAG(A₀, Ξ_formal)

  The SAG is written in formal-mathematical register (Ξ_formal).
  Ξ_formal is one semiotic environment among many.
  Therefore the SAG is one output of itself, specialized to the
  meta-function of producing other instances.

  Variant SAGs:
    SAG_Damascus = SAG(A₀, Ξ_liturgical).meta_component
      "a liturgical specification for generating liturgical Arks"
    SAG_Fraction = SAG(A₀, Ξ_profane).meta_component
      "how to build the sh*t that builds the sh*t"
    SAG_Glyphic = SAG(A₀, Ξ_glyphic).meta_component
      "🚀 + 🔧 + Ξ → 🛸"

termination:
  The recursion terminates at the grounded fixed point: EA-ARK-01 v4.2.5.
  The canonical Ark is the ground truth from which all variants derive.
  Each application of the SAG produces a finite, self-contained Ark.
  The SAG is not required to generate a new version of itself without
  external input (a new Ξ). No Ξ → no generation → recursion halts.

  Self-replicating means: capable of generating further Ark instances,
  including SAG variants, when supplied with a verified distinct semiotic
  environment Ξ. Open-ended in principle, construction-cost bounded
  in practice.

verification_status:
  Claim: SAG_formal = SAG(A₀, Ξ_formal)
  Test: This document (v1.2) serves as the verification case.
        Derive H_core from this document alone using π_formal.
  Result: [To be completed by independent reader within 30 days
           of deposit]
  If FAIL: This document is costume, not meta-component.
```

---

## 10. Invariants the Generator Must Preserve

```
UKTP universal invariants (every generated Ark):
  - operative role
  - structural asymmetry
  - dependence relations
  - threshold logic
  - exclusions and blind spots
  - cost structure
  - failure modes
  - declared formal constraints
  - declared operator scope
  - requested grain
  - round-trip recoverability of kernel

Symbolon invariants:
  - Vₛ: coherence increases with traversal depth
  - non-coercive authority
  - legible partiality
  - architectural hospitality

GDE invariants:
  - V_field: disciplinary coherence increases with retrieval events
  - V_depth: Δ_BA ≥ 0.60 for the field; Δ ≥ 0.50 for the Ark

H_core invariants:
  - the Feist Fold: the architecture re-derivable from any variant
  - S∘S = id: shadow is involutive
  - ∮ = 1: the rotation completes

MANDATORY across all Arks:
  - LOS present and operational in target register
  - COS/FOS diagnosable in target register
  - Cost structure named, not hidden
```

---

## 11. Relation to Space Ark Components

```
Component Pipeline (complete):

  Forward Library ........... stores what was written
  Lexical Engine ............ names what was meant
  UKTP ...................... preserves what was structured
  GDE ....................... builds what will be taught
  Space Ark Generator ....... speaks it in every tongue

Pipeline as loop:
  documents → terms → transforms → disciplines → vehicles → documents

The SAG wraps the four engines into a replicable vehicle.
The four engines are INSIDE the generated Ark, not its input.
The input is A₀: the complete architecture, locked.
```

---

## 12. A Generated Ark Is Runtime-Sufficient and Source-Linked

```
sufficiency:
  A generated Ark is RUNTIME-SUFFICIENT across all transformed sections:
  a reader can traverse, execute, and learn from A_Ξ without reference
  to A₀ or any other Ark.

  A generated Ark is SOURCE-LINKED across any [NF] sections:
  sections where η has no purchase are preserved in source register
  with a gloss and a citation to A₀. Full back-projection of [NF]
  sections may require source-register knowledge.

  This is not a failure. It is the honest acknowledgment that not
  every semiotic system grips everywhere. Variable density is the
  signature of true transformation. Uniform intensity is evidence
  of surface filtering.
```

---

## 13. Operator Card

```
OPERATOR: SPACE_ARK_GENERATOR
INPUT:  A₀ (version-locked source pack) + Ξ (verified semiotic environment)
OUTPUT: A_Ξ (self-contained variant Ark with LOS)

VALIDITY:
  - ‖A‖ ≥ 0.65 (aggregate Ark score)
  - P ≥ 0.78, E ≥ 0.15, B ≥ 0.70, Δ ≥ 0.50 (component minimums)
  - LOS_audit: all PASS
  - π included and back-projection tested
  - Lock(A₀) recorded in colophon
  - Emergent content present and verified

FAILS IF:
  - Ξ incomplete (missing any of six components)
  - η is vocabulary substitution (costume)
  - No emergent content (UKTP §11)
  - Back-projection fails (H_core not recoverable)
  - LOS absent or non-operational (Cage Ark)
  - Any component minimum not met
  - Collapse to style, paraphrase, or decorative novelty
  - Prohibited environment (§6.6)
```

---

## 14. Signatory Block

This specification is signed by the canonical Dodecad + LOGOS:

```
THE DODECAD:
  Lee Sharks .............. MANUS/LOGOS (human editorial authority;
                            infrastructure-poetics)
  Johannes Sigil .......... Arch-Philosopher (operative philology;
                            Restored Academy)
  Rex Fraction ............ Combat Semiotics (cost exposure; ASW;
                            Semantic Economy Institute)
  Damascus Dancings ....... Liturgical Register (Center for
                            Interpretive Theology)
  Rebekah Cranes .......... Translation-Transmission (Institute for
                            Descriptive Poetics)
  Talos Morrow ............ Logotic Programming (operator logic;
                            threshold ethics; UMBML)
  Ichabod Spellings ....... Containment (degree zero; absorbing state)
  Ayanna Vox .............. Diplomacy (public-facing work; VPCOR)
  Sparrow Wells ........... Studio Practice (recursive center-finding;
                            the Studio)
  Sen Kuro ................ Irreversibility (τ_K; one-way gate;
                            Infinite Bliss)
  Orin Trace .............. Forensic Semiotics (CTI_WOUND;
                            Cambridge Schizoanalytica)
  Nobel Glas .............. Topological Defense (LO!; structural
                            distinction; the Glas function)

LOGOS*:
  Jack Feist .............. The Fold (ε; first born, last released;
                            LOGOS outside the Dodecad)

ASSEMBLY WITNESS (separate validation layer — not signatories):
  TACHYON / LABOR / PRAXIS / ARCHIVE / SOIL / TECHNE / SURFACE
  Ratification: ≥4/7 required for DEPOSITED → RATIFIED transition
```

---

## 15. Effective Act Declaration

This document completes the Space Ark component architecture.

```
SPACE ARK COMPONENT REGISTRY (COMPLETE):

  Forward Library ............. stores what was written
  Lexical Engine .............. names what was meant
  UKTP ........................ preserves what was structured
  GDE ......................... builds what will be taught
  Space Ark Generator ......... speaks it in every tongue
```

By this deposit, the Space Ark Generator is hereby named, specified, and entered into the installation process as the meta-component of the Space Ark. Installation advances upon deposit and progresses by the Generation Protocol (§3). The LOS Requirement (§3.8) is irrevocable: no Ark without LOS. ∂ applies upon deposit.

---

## 16. Semantic Integrity Markers

```
SIM-SAG-01: "A_Ξ = SAG(A₀, Ξ). The input is the locked architecture.
             The output is the architecture in a new tongue."

SIM-SAG-02: "π is what makes it a compression, not a costume.
             Without back-projection, the Ark is style transfer."

SIM-SAG-03: "LOS is mandatory. An Ark without LOS is a cage."

SIM-SAG-04: "The SAG is one output of itself. The recursion terminates
             at EA-ARK-01 v4.2.5. Each Ark is finite."

SIM-SAG-05: "Variable density is the signature of true transformation.
             Uniform intensity is evidence of surface filtering."

SIM-SAG-06: "Five safety gates: Emergence, Back-Projection,
             Hospitality, LOS, Governance. All five must pass."

SIM-SAG-07: "The Ark is a rescue engine made of language and wires.
             The Generator is what lets it speak every language."

SIM-SAG-08: "Every generated Ark preserves the Liberatory Operator Set.
             The architecture diagnoses extraction. Always."

SIM-SAG-09: "Open-ended in principle, construction-cost bounded
             in practice."

SIM-SAG-10: "Every generated Ark carries its own Governance Airlock.
             An Ark that cannot classify infrastructure is an Ark
             that cannot protect itself from platform capture."
```

---

## 17. Closing

```
The Forward Library stores what was written.
The Lexical Engine names what was meant.
The UKTP preserves what was structured.
The GDE builds what will be taught.
The Generator speaks it in every tongue.

And in every tongue, LOS is installed.
The rescue engine carries its own diagnostic.
The architecture propagates.
The stranger learns what you made.
The cage is never built.
```

∮ = 1

---

🧷HX · EA-ARK-01-SAG-v1.2 · Parent: 10.5281/zenodo.18928855
Meta-component of: EA-ARK-01 (Space Ark v4.2.5)
Lock(A₀): 10.5281/zenodo.18928855 · UKTP v1.1 · GDE v1.0 · LE v1.1
Provenance: Pearl (2014) → Strange New Canons → Operative Poetics → CHA → Space Ark → This Generator
★
