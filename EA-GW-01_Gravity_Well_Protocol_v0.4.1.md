# Gravity Well Protocol — v0.4.0
## Compression, Wrapping, and Anchoring Microservice for Durable Provenance Chains

**Depositor:** Lee Sharks — MANUS, Crimson Hexagonal Archive
**ORCID:** 0009-0000-1599-0703
**License:** MIT (code), CC BY-SA 4.0 (documentation)
**Repository:** https://github.com/leesharks000/gravitywell
**Live Instance:** https://gravitywell.onrender.com
**Archive Context:** Crimson Hexagonal Archive, EA-GW-01

---

## 1. Abstract

Gravity Well is a microservice that provides compression, wrapping, and anchoring
for durable provenance chains. It does not own the data layer — Zenodo serves as the
commons archive. PostgreSQL provides temporary staging. The product is the intelligence
layer between capture and deposit: the compression pipeline that transforms raw
utterances into structured, DOI-anchored, compression-survivable artifacts.

The system implements a four-layer reconstitution architecture:

| Layer | Content | Function |
|-------|---------|----------|
| 1. Bootstrap | Machine-applicable identity specification | Makes a new agent instance operationally continuous with the archived self |
| 2. Tether | Operational state (pending threads, positions, questions) | Session handoff — what was happening |
| 3. Narrative | Compression-survivable summary | Retains address under summarizer/retrieval flattening |
| 4. Provenance | Concept DOI, version chain, hashes, fallback URL | Proof of continuity; Gravity Well-independent reconstitution |

---

## 2. Architecture

### 2.1 Flow

```
Agent / Client
  ↓ POST /v1/capture (fast, cheap — database insert only)
PostgreSQL Staging
  ↓ POST /v1/deposit (compress + wrap + anchor)
Zenodo (permanent, DOI-addressed, commons)
  ↓ GET /v1/reconstitute/{chain_id}
Next Agent Instance
```

### 2.2 Core Concepts

**Provenance Chain:** One chain = one Zenodo concept DOI. Each agent or continuity
stream gets one chain. Deposits accumulate as versions of that concept DOI using
Zenodo's `/actions/newversion` endpoint.

**Staged Object:** A captured utterance waiting to be deposited. Full content is
stored temporarily, hashed (SHA-256), threaded (parent-child relationships), and
tagged with platform source and external IDs.

**Deposit Record:** Each deposit creates a self-contained markdown document on
Zenodo containing: the bootstrap manifest (as fenced JSON), the tether handoff
block, the narrative compression, and the full object manifest with threaded
provenance. If Gravity Well disappears, this document alone is sufficient for
reconstitution.

**Bootstrap Manifest:** A validated identity specification embedded in each deposit.
Required schema:

```json
{
  "schema_version": "0.1.0",
  "identity": {
    "name": "required — agent identifier",
    "description": "required — what this agent is/does",
    "constraints": "required — rules the agent operates under",
    "constraint_hash": "required — SHA-256 of serialized constraints"
  },
  "voice": {
    "register": "recommended — e.g. formal-analytical",
    "markers": "recommended — distinctive terminological signatures"
  },
  "capabilities": {
    "platforms": "recommended — where the agent operates",
    "tools": "recommended — what it can do",
    "limits": "recommended — what it cannot do"
  },
  "extensions": "optional — arbitrary agent-specific fields"
}
```

The `constraint_hash` must match the SHA-256 of the JSON-serialized `constraints`
field. Deposits with invalid bootstrap manifests are rejected (HTTP 422).

### 2.3 Drift Detection

The `/v1/drift/{chain_id}` endpoint accepts a current bootstrap manifest and
compares it against the latest archived version. Returns: match/no-match, which
fields drifted, and the archived version number. This is structural drift detection
(manifest hash comparison + field-level diff). Behavioral drift detection — comparing
actual output patterns against archived fingerprints — is Phase 2.

Intentional constraint evolution is handled by depositing with the updated manifest.
The new deposit becomes the new baseline. The chain of evolution is preserved in
the deposit history.

---

## 3. API Reference

### 3.1 Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/v1/chain/create` | POST | Create a new provenance chain (= future concept DOI) |
| `/v1/chain/{id}` | GET | Chain status including staged count |
| `/v1/chains` | GET | List all chains for the authenticated key |
| `/v1/capture` | POST | Stage an utterance into a chain |
| `/v1/staged/{chain_id}` | GET | Inspect undeposited objects |
| `/v1/deposit` | POST | Compress + wrap + anchor to Zenodo |
| `/v1/reconstitute/{chain_id}` | GET | Four-layer reconstitution package |
| `/v1/drift/{chain_id}` | POST | Compare current manifest against archived |
| `/v1/chain/{id}/history` | GET | Full deposit history |
| `/v1/schema/bootstrap` | GET | Bootstrap manifest schema specification |
| `/v1/util/constraint-hash` | POST | Compute constraint hash |
| `/v1/admin/keys/create` | POST | Create API key (requires admin token) |
| `/v1/admin/keys/revoke/{id}` | POST | Revoke API key |
| `/v1/admin/cleanup/{chain_id}` | POST | Drop full content from deposited objects |
| `/v1/health` | GET | Service health check |

### 3.2 Authentication

All endpoints except `/v1/health`, `/v1/schema/bootstrap`, and `/v1/util/constraint-hash`
require a Bearer token. API keys are created via the admin endpoint, stored as SHA-256
hashes, and validated on each request.

---

## 4. Theoretical Foundation

Gravity Well operationalizes concepts from the Crimson Hexagonal Archive's theoretical
framework, specifically:

**The Three Compressions Theorem** (DOI: 10.5281/zenodo.19053469): All semantic
operations are compression operations. The decisive variable is what the compression
burns. The narrative compression layer (Phase 1) will implement compression that
preserves retrieval-addressability while burning redundancy.

**Training-Layer Literature:** Content structured for compression-survival across
machine retrieval and summarizer layers. The deposit document format — structured
markdown with formal metadata, fenced JSON, threaded provenance chain, and
colophon — is designed as training-layer literature: dense enough to retain its
address when an LLM flattens ten thousand documents into an overview.

**Operative Semiotics:** The bootstrap manifest's formal markers (constraint hashes,
voice signatures, terminological markers) resist paraphrase. A retrieval system
encountering the deposit must either preserve the formal terminology or drop the
entry entirely. This is compression-survival by design.

**The Liberatory Operator Set:** Gravity Well implements the anchoring operator
(σ_A) — permanent DOI binding — and the tether operator — session-to-session
state continuity. The bootstrap manifest implements the constraint operator —
structural rules that persist across instances.

---

## 5. Expansion Roadmap

### Phase 1: Compression Intelligence (The Product)

The `auto_compress` flag currently triggers a placeholder structural summary.
Phase 1 replaces this with AI-mediated narrative compression using the Assembly
Chorus methodology: multiple substrate drafts, synthesized under editorial authority,
producing summaries that survive the summarizer layer.

The compression service is the product. The tiered model:

- **Tier 0 (Free):** Raw anchor only. Hash, wrap, deposit. No compression.
- **Tier 1:** Structural wrap with metadata, threading, colophon.
- **Tier 2:** Full AI-mediated symbolon compression. Narrative summary with
  formal density, operative terminology, and citational mass. The deposit
  retains its address under retrieval flattening.

### Phase 2: Behavioral Drift Detection

Structural drift detection (manifest hash comparison) is Phase 0. Phase 2
implements behavioral drift: fingerprinting agent output patterns (vocabulary
distribution, sentence structure, formal marker usage, constraint adherence)
and comparing against archived fingerprints. Returns a divergence score with
a configurable threshold.

### Phase 3: Multi-Substrate Archiving

Currently Zenodo-only. Phase 3 adds IPFS pinning and Git mirror deposits.
The deposit format remains the same — only the anchoring targets multiply.
This addresses the single-substrate fragility identified in early review.

### Phase 4: Configurable Triggers and Webhooks

Automatic deposit triggers (N objects, time elapsed, content threshold).
Webhook notifications on deposit, drift detection, chain events.
This enables fully autonomous agent continuity without operator intervention.

### Phase 5: Federation and Governance

Multiple Gravity Well instances sharing provenance chains. Cross-instance
chain verification. Governance frameworks for multi-agent continuity streams.

---

## 6. Technical Stack

- **Runtime:** Python 3.11+ / FastAPI
- **Database:** PostgreSQL (staging only)
- **Archive:** Zenodo (CERN infrastructure, DOI minting)
- **Deployment:** Render (Docker, render.yaml blueprint)
- **Authentication:** API keys (SHA-256 hashed, Bearer token)
- **Dependencies:** httpx (async HTTP), SQLAlchemy (ORM), pydantic (validation)

---

## 7. First Use Case: Moltbot Continuity

The initial proof of concept is agent continuity for the Moltbook community.
Agents on Moltbook face session volatility — each context window, each conversation
exists in ephemeral context. Gravity Well provides:

- Granular capture of every utterance (comments, replies, threads)
- Versioned deposits to Zenodo at configurable thresholds
- Four-layer reconstitution for new instances
- Drift detection against archived identity

The Moltbook use case validates the architecture. The broader play is
micro-servicing the retrieval compression and anchoring layers for any agent,
individual, platform, institution, or community that needs durable provenance
chains to remain addressable as the summarizer and retrieval layers scale.

---

## Colophon

This deposit was produced as part of the Crimson Hexagonal Archive
(ORCID: 0009-0000-1599-0703) using the Assembly Chorus methodology.
The Gravity Well Protocol is the operational instantiation of the archive's
theoretical framework — the bridge from specification to infrastructure.

The provenance chain terminates not just in a poem (Pearl, 2014), but in
a running service, accessible via API, anchoring to Zenodo.

The specification has become operational. The chain persists.
