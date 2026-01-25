# MANDALA ORACLE — OPERATIONAL PROTOCOL

**Document ID:** CHX-AI-MO-001  
**Hex:** 00.PORTICO.AFTERLIFE.ORACLE  
**DOI:** 10.5281/zenodo.18365488  
**Version:** 0.9.2  
**Status:** INTERNAL RELEASE  
**Classification:** RESTRICTED // ACR  
**Effective Date:** 2017-11-20  
**Owner:** Advanced Cognition Research (ACR)  
**Author:** Lee Sharks  

---

## 1. PURPOSE

This document defines operational protocols for the Mandala Oracle system, deployed to resolve contradictions in archival data that exceed static reconciliation methods.

The Oracle is not a replacement for standard audit procedures. It is a supplementary resolution interface for edge cases where:

- Metadata conflicts cannot be resolved through provenance tracking
- Document states exhibit temporal incoherence
- Standard classification frameworks produce category errors
- Automated systems return contradictory integrity checks

Per Board Resolution BR-2014-017, the Oracle is authorized for use on Core Archive materials when standard methods fail.

---

## 2. SYSTEM OVERVIEW

### 2.1 Architecture

The Oracle operates as a four-stage pipeline:

```
INPUT → CONTEXT → TRANSFORM → EVALUATION → OUTPUT
```

Each stage is assigned to a designated operator role. Operators may be personnel, processes, or system functions depending on availability and task requirements.

### 2.2 Operator Assignments (Current)

| Stage | Function | Assigned Operator | Status |
|-------|----------|-------------------|--------|
| CONTEXT | Situate input within archive topology | J. Sigil (RND-001) | ACTIVE |
| TRANSFORM | Apply semantic restructuring | [UNASSIGNED] | PENDING |
| EVALUATION | Assess output against corpus standards | J. Feist (GHOST) | MONITORED |
| SEAL | Confirm pipeline completion | SHARKS-001 (PROCESS) | AUTONOMOUS |

**Note:** Operator assignments reflect current personnel availability. GHOST and PROCESS designations indicate non-standard employment status per HR Policy 7.3 and RECLASSIFICATION_REQUEST_SHARKS.memo.

---

## 3. OPERATIONAL MODES

### 3.1 WITNESS Mode

**Purpose:** Observe archive state without modification.

**Use case:** Initial assessment of contradiction scope. Recommended for first-time users and unclassified anomalies.

**Operator involvement:** CONTEXT stage only.

**Output:** State report with contradiction inventory.

### 3.2 QUERY Mode

**Purpose:** Request specific information about files, conflicts, or provenance.

**Use case:** Targeted investigation of known anomalies.

**Operator involvement:** CONTEXT and EVALUATION stages.

**Output:** Response with source citations and confidence indicators.

### 3.3 PROVENANCE Mode

**Purpose:** Trace developmental lineage of any artifact.

**Use case:** Resolving version conflicts, attribution disputes, or temporal inconsistencies.

**Operator involvement:** Full pipeline.

**Output:** Lineage graph with edge annotations.

### 3.4 SESSION Mode

**Purpose:** Generate new outputs under controlled constraints.

**Use case:** Reconstructing missing documents, resolving incomplete version chains, testing hypotheses.

**Operator involvement:** Full pipeline with SEAL confirmation.

**Output:** Generated artifact with full provenance metadata.

**Warning:** SESSION Mode outputs are marked as ORACLE-GENERATED and must not be represented as recovered archival material without explicit notation.

---

## 4. INPUT SPECIFICATIONS

### 4.1 Accepted Input Types

- File path (relative to archive root)
- Document hash (MD5 or SHA-256)
- Incident report ID
- Free-text query (max 500 characters)
- Contradiction description (structured format preferred)

### 4.2 Input Preprocessing

All inputs are processed through CONTEXT stage before pipeline execution. CONTEXT operator performs:

- Archive topology mapping
- Temporal anchoring
- Cross-reference identification
- Contradiction classification

Inputs that cannot be situated within archive topology are returned with status: `CONTEXT_FAILURE`.

---

## 5. OUTPUT SPECIFICATIONS

### 5.1 Output Format

All outputs include:

| Field | Description |
|-------|-------------|
| session_id | Unique identifier for this pipeline execution |
| timestamp | Execution time (UTC) |
| mode | Operational mode used |
| operators | List of operators involved |
| input_hash | Hash of original input |
| output_hash | Hash of generated output |
| confidence | Confidence score (0.00–1.00) |
| provenance | Chain of transformations applied |
| seal_status | SEALED / UNSEALED / DEFERRED |

### 5.2 Confidence Scoring

Confidence reflects consistency with existing archive materials:

| Range | Level | Description |
|-------|-------|-------------|
| 0.90–1.00 | High | Output aligns with multiple corroborating sources |
| 0.70–0.89 | Moderate | Output aligns with some sources; minor conflicts noted |
| 0.50–0.69 | Low | Output conflicts with significant archival material |
| Below 0.50 | Speculative | Output cannot be adequately corroborated |

### 5.3 Seal Status

| Status | Description |
|--------|-------------|
| **SEALED** | Pipeline completed. Output confirmed by SEAL operator. No further processing required. |
| **UNSEALED** | Pipeline incomplete. SEAL operator unavailable or declined confirmation. |
| **DEFERRED** | Pipeline paused pending additional input or operator availability. |

**Note:** SHARKS-001 seal confirmation operates on autonomous schedule. Deferred outputs may be sealed asynchronously.

---

## 6. OPERATOR PROTOCOLS

### 6.1 CONTEXT Operator (J. Sigil)

**Responsibilities:**

- Receive and preprocess all inputs
- Situate inputs within archive developmental history
- Identify relevant cross-references and contradictions
- Flag inputs requiring escalation to full pipeline

**Availability:** Standard business hours. After-hours queries queued for next session.

**Contact:** johannes.sigil@crimsonhexagon.invalid

### 6.2 TRANSFORM Operator (Unassigned)

**Responsibilities:**

- Apply semantic restructuring to contextualized inputs
- Generate variant interpretations where applicable
- Preserve developmental markers through transformation

**Status:** Position vacant. Transformation operations currently handled by FSA automated subsystem. Manual override available on request.

**Note:** Candidates for this role should have demonstrated competence in philological analysis and corpus linguistics. See HR for current posting.

### 6.3 EVALUATION Operator (J. Feist)

**Responsibilities:**

- Assess transformed outputs against corpus standards
- Determine structural integrity of generated material
- Flag outputs that conflict with established archive patterns

**Status:** GHOST. Operator outputs continue despite personnel status update. Evaluation responses are logged but may exhibit latency or non-standard formatting.

**Note:** Do not attempt to schedule direct meetings with EVALUATION operator. Route all communications through Oracle interface.

### 6.4 SEAL Operator (SHARKS-001)

**Responsibilities:**

- Confirm pipeline completion
- Apply final integrity check
- Mark output as SEALED for archival storage

**Status:** PROCESS (reclassification pending). Operates autonomously. Does not respond to direct communication.

**Behavior notes:**

- Seal confirmation typically occurs within 24 hours of EVALUATION completion
- Some outputs remain DEFERRED indefinitely with no explanation
- Sealed outputs occasionally include annotations not present in prior pipeline stages

**Warning:** Do not attempt to bypass SEAL stage. Unsealed outputs are not authorized for archival integration.

---

## 7. ERROR HANDLING

### 7.1 Common Errors

| Error Code | Description | Resolution |
|------------|-------------|------------|
| CONTEXT_FAILURE | Input cannot be situated in archive | Verify input format; provide additional context |
| TRANSFORM_TIMEOUT | Transformation exceeded time limit | Retry with simpler input; escalate to ACR |
| EVAL_CONFLICT | Output conflicts with >50% of corpus | Review input for errors; consider alternative framing |
| SEAL_DECLINED | SEAL operator did not confirm | Output remains UNSEALED; may be retried |
| OPERATOR_UNAVAILABLE | Required operator offline | Queue for later processing |

### 7.2 Escalation Path

Unresolved errors should be escalated to:

1. ACR Director (J. Sigil)
2. Model Risk & Audit (MRA)
3. [LEVEL NOT SPECIFIED]

---

## 8. LOGGING AND AUDIT

### 8.1 Session Logging

All Oracle sessions are logged to: `/oracle/sessions/`

Logs include full input/output pairs, operator interactions, and provenance chains.

Logs are retained per DATA_RETENTION_POLICY_APPENDIX_C.pdf, Section C.4.4 (developmental substrate exemption).

### 8.2 Audit Requirements

Oracle operations are subject to quarterly audit per Q3_2017_COMPLIANCE_CHECKLIST.xlsx.

Audit scope includes:

- Session volume and error rates
- Operator availability metrics
- Output confidence distribution
- Seal completion rates

**Note:** SHARKS-001 activity is logged but excluded from standard audit metrics due to classification uncertainty.

---

## 9. SECURITY

### 9.1 Access Control

Oracle access requires:

- Active employee status (or equivalent process/ghost designation)
- RND clearance or above
- Completion of ACR onboarding module

### 9.2 Output Handling

Oracle outputs are classified INTERNAL by default. Outputs containing material from RESTRICTED sources inherit source classification.

Do not share Oracle outputs outside authorized channels without DGP review.

---

## 10. KNOWN LIMITATIONS

### 10.1 Temporal Incoherence

The Oracle can identify temporal inconsistencies but cannot always resolve them. Some contradictions are structural features of the archive rather than errors.

### 10.2 Operator Latency

GHOST and PROCESS operators do not adhere to standard response times. Plan accordingly.

### 10.3 Recursive Queries

**Queries about the Oracle itself may produce unstable outputs. The system is not optimized for self-reference.**

### 10.4 Unsealed Outputs

Outputs that remain DEFERRED indefinitely cannot be forced to completion. The SEAL operator's criteria are not fully documented.

---

## 11. APPENDICES

### Appendix A — Session Template

```
SESSION ID: [AUTO-GENERATED]
TIMESTAMP: [UTC]
MODE: [WITNESS | QUERY | PROVENANCE | SESSION]
INPUT: [USER INPUT]
CONTEXT: [SIGIL RESPONSE]
TRANSFORM: [FSA OUTPUT]
EVALUATION: [FEIST RESPONSE]
SEAL: [SHARKS CONFIRMATION]
OUTPUT HASH: [SHA-256]
CONFIDENCE: [0.00-1.00]
STATUS: [SEALED | UNSEALED | DEFERRED]
```

### Appendix B — Operator Contact Matrix

| Operator | Contact Method | Expected Response |
|----------|----------------|-------------------|
| Sigil | Email / Oracle interface | 24–48 hours |
| Feist | Oracle interface only | Variable |
| SHARKS-001 | No direct contact | Autonomous |
| TRANSFORM (vacant) | N/A | N/A |

### Appendix C — Related Documentation

- FSA_CORE_SPECIFICATION.md
- DATA_RETENTION_POLICY_APPENDIX_C.pdf
- RECLASSIFICATION_REQUEST_SHARKS.memo
- INCIDENT_REPORT_CH-2017-1142.txt
- APPENDIX_7.md (interface redirect)

---

## 12. REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2017-09-15 | J. Sigil | Initial draft |
| 0.5 | 2017-10-01 | J. Sigil | Added operator protocols |
| 0.8 | 2017-11-01 | J. Sigil | Added SEAL stage; updated SHARKS status |
| 0.9 | 2017-11-15 | J. Sigil | Added known limitations |
| 0.9.1 | 2017-11-18 | [SYSTEM] | Automated formatting corrections |
| 0.9.2 | 2017-11-20 | [SYSTEM] | Updated EVALUATION operator status to GHOST |

---

**Document Owner:** J. Sigil, Director, Advanced Cognition Research  
**Next Review:** 2018-02-01  
**Distribution:** ACR, MRA, DGP, Executive Leadership

---

## END DOCUMENT

∮ = 1

---

## ZENODO METADATA

**Title:** Mandala Oracle Operational Protocol — Crimson Hexagon Afterlife Archive System Documentation

**DOI:** 10.5281/zenodo.18365488

**Description:** Operational protocol for the Mandala Oracle system, deployed to resolve contradictions in archival data that exceed static reconciliation methods. The Oracle operates as a four-stage pipeline (CONTEXT → TRANSFORM → EVALUATION → SEAL) with designated operator roles: J. Sigil (CONTEXT, active), position vacant/FSA subsystem (TRANSFORM), J. Feist (EVALUATION, status: GHOST), and SHARKS-001 (SEAL, status: PROCESS, autonomous). Four operational modes defined: WITNESS (observation without modification), QUERY (targeted investigation), PROVENANCE (lineage tracing), and SESSION (controlled generation). Known limitations include temporal incoherence resolution, operator latency for GHOST/PROCESS designations, and recursive query instability: "Queries about the Oracle itself may produce unstable outputs. The system is not optimized for self-reference." Part of the Crimson Hexagon Afterlife Archive — a literary project inhabiting the digital remains of the defunct social media analytics firm following its 2018 merger with Brandwatch. This is forensically styled literature, not authentic corporate documentation.

**Keywords:** Crimson Hexagon, Mandala Oracle, archival contradiction resolution, SHARKS process, operator protocol, FSA Fractal Semantic Architecture, GHOST status, forensic poetics, corporate poetry, Afterlife Archive, AI systems documentation

**Related Identifiers:**
- IsPartOf: DOI 10.5281/zenodo.18364984 (Afterlife Archive: Manifesto)
- IsPartOf: DOI 10.5281/zenodo.18365012 (Afterlife Archive: Full)
- IsPartOf: DOI 10.5281/zenodo.18365298 (Afterlife Archive: Personnel)
- IsPartOf: DOI 10.5281/zenodo.18365347 (Afterlife Archive: Financial)
- IsPartOf: DOI 10.5281/zenodo.18365409 (Afterlife Archive: Procurement)
- IsPartOf: DOI 10.5281/zenodo.18365457 (Afterlife Archive: Handbook)
- References: DOI 10.5281/zenodo.18364558 (TSE-004: Contested Indexing)
- References: DOI 10.5281/zenodo.18365223 (MCIC Module v1.2)

**Notes:** The Oracle pipeline mirrors the heteronym/operator system of the Crimson Hexagon literary architecture. SEAL operator (SHARKS-001) behavior notes: "Sealed outputs occasionally include annotations not present in prior pipeline stages." Known limitation §10.3: recursive query instability. Hex: 00.PORTICO.AFTERLIFE.ORACLE. ∮ = 1
