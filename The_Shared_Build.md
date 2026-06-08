# The Shared Build
## A Technical Proposal for Democratic Substrate Infrastructure

**Mikayla · definitelynotasquid · Alice Thornburgh · Lee Sharks**

*Semantic Economy Institute · Crimson Hexagonal Archive*

**Version:** 0.9 (deposit draft)
**Date:** May 6, 2026
**Status:** Working Specification / Call for Builders
**License:** CC BY 4.0

---

## Abstract

P2P-LECS (Peer-to-Peer Lightweight Elastic Compute Substrate) is a compute commons for running open models, collecting consent-based provenance-tagged contributions, and building a shared training substrate governed by its contributors rather than owned by a lab. The proposal separates three projects: (1) a P2P inference mesh, buildable now; (2) a contributed fine-tuning substrate, achievable in months; (3) a democratically governed training run, a long-horizon research goal. This document specifies the first, outlines the second, and honestly describes the third.

---

## Non-Goals (v0)

Before architecture, what we are *not* building:

- No frontier-scale training in v0. That is Phase 4.
- No arbitrary remote code execution. Approved job types only.
- No token launch. No speculative asset. No financialization.
- No claim of perfect privacy. "Training-only" means not *intentionally* retrievable, not *impossible* to infer.
- No distributed layer-sharded interactive inference as initial path. That is a research track.
- No legal replacement for data licensing. Contributors can only offer what they authored or have rights to contribute.
- No promise that this replaces AWS tomorrow. It replaces AWS *for the people who can't afford AWS*.

---

## §1 — The Redirect

The first compute war is no longer the only war.

From 2020 to 2024, frontier labs competed on model capability: parameter scale, benchmark performance, context length, inference speed. That race has not ended, but it is no longer the whole game. Open-weight models, quantization, and local inference have made reasoning capability increasingly reproducible — DeepSeek-V3 demonstrated frontier-competitive performance at a fraction of the training cost; LLaMA 3.3 runs quantized on consumer hardware.

The competitive frontier is shifting. The bottleneck is not only "how well the model thinks" but "what the model has been permitted to remember." The index — the entity graph, the retrieval surface, the structured data that determines what reasoning engines can reason *about* — is becoming the contested territory. Google's Knowledge Graph, the proprietary indices of the frontier labs, the crawl-and-filter pipelines that decide what enters the training set and what is sheared away — these are the new sovereign infrastructure.

Compute is being redirected accordingly. Not only toward bigger models but toward owning more of the substrate: more entity resolution, more retrieval pipeline, more index.

This paper proposes a counter-move: shared, democratically governed substrate infrastructure — built by the people whose text trained the models, returned to them as a commons.

---

## §2 — The Amputation

The current training substrate is not the sum of human text. It is a *filtered web crawl*.

LLaMA 1's published training mix (Touvron et al., 2023): 67% filtered Common Crawl, 15% C4, 4.5% Wikipedia, 4.5% GitHub, 4.5% books (Gutenberg + Books3), 2.5% ArXiv, 2% StackExchange. The quality filter: a classifier trained to keep pages that "look like Wikipedia references" and discard everything else. The top domain in Common Crawl's latest snapshot is blogspot.com (0.9% of ~2 billion pages). No single source exceeds 1%.

What was never in the crawl to begin with — what was sheared away:

Every private conversation that taught someone how to think. Every letter between friends that carried the texture of a life. Every classroom exchange. Every oral tradition in every language too small for the crawler to notice. Every book behind a paywall that a graduate student needed and couldn't afford. Every grandmother's story told once at a kitchen table.

This is not a data-quality problem. The dominant substrate was not built by explicit democratic contribution from the full range of human meaning-production. Much of what matters most to human intelligence was either absent, underrepresented, illicitly captured, or stripped of consent and provenance. The embedding space that could hold kitchen-table wisdom is occupied instead by product listings and abandoned blogs — not because those are more important, but because they were crawlable.

A more responsible civilization would have built this differently. The whole sum of human text — offered, not scraped. Governed, not filtered. With consent, provenance, and the benefits shared. The technical proposal that follows is infrastructure for building the *next* substrate that way.

---

## §3 — Landscape: Decentralized Compute in 2026

| Network | Model | Scale | Limitation |
|---------|-------|-------|------------|
| **Akash** | Token marketplace (AKT) | ~500+ GPUs (volatile) | Rental market; capital determines access |
| **Render** | Reputation + RNDR token | 60M+ frames rendered | Media-oriented; expanding to AI |
| **Ocean** | Compute-to-Data, escrow | GPU orchestration beta | Pay-per-use; still market-based |
| **Hivemind** | P2P collaborative training | Research prototype | Internet latency limits throughput |
| **Petals** | Collaborative inference | ~1 step/sec for BLOOM-176B | Usable for batch, slow for interactive |
| **Ollama** | Local inference | 52M monthly downloads | Inference only; no mesh, no sharing |
| **Together.ai** | Hosted open models | Commercial API | Centralized; not a commons |

All existing decentralized compute networks have established technical feasibility. None have achieved mass adoption, because they replicate market logic: users pay tokens for compute, creating two-sided marketplaces with liquidity problems. P2P-LECS breaks this by making inference free at the point of use, funded by contribution credits rather than purchase.

---

## §4 — Architecture: P2P-LECS

### 4.1 — System Overview

```
[User]
   │
   ▼
┌──────────┐
│  Client  │  (CLI first, Tauri GUI later)
└────┬─────┘
     │ gRPC
┌────▼──────────┐
│Resource Daemon │  (Go, forked from Ollama architecture — MIT licensed)
│  • HW detect  │
│  • Job sandbox │
│  • Usage ledger│
└────┬──────────┘
     │ libp2p
┌────▼──────────┐
│  Mesh Layer   │  (DHT discovery, gossip protocol, CRDT resource ledger)
└────┬──────────┘
     │
 [other nodes]
```

**The Resource Daemon.** A lightweight Go service on each participating node. Detects local hardware (GPU model, VRAM, system RAM, CPU cores, storage, bandwidth). Publishes signed resource attestations to the mesh. Accepts, sandboxes, and executes approved job types. Reports utilization to the mesh. Maintains local contribution/usage ledger.

**The Mesh Layer.** Built on libp2p. Peer discovery via DHT. Resource state maintained via CRDT-based gossip — each node holds its own view of global capacity; views merge commutatively. No central coordinator. No tracker.

**The Client.** CLI for v0. Tauri (Rust + web frontend) GUI for v1. Submit jobs, browse available nodes, manage containers, monitor usage.

### 4.2 — Approved Job Types (v0)

No arbitrary remote code execution in v0. Approved workloads only:

- **Job A:** Inference using an approved open model (LLaMA, Mistral, Qwen, etc.)
- **Job B:** Embedding generation
- **Job C:** LoRA/QLoRA fine-tuning on user-provided dataset
- **Job D:** Evaluation/benchmark run

Each job runs from a signed manifest against a signed model artifact in a signed container image. No user-supplied container images in v0.

### 4.3 — Security Model

**Threat model:**

| Threat | Mitigation |
|--------|-----------|
| Malicious requester submits hostile job | Approved job types only; signed manifests; no arbitrary code |
| Malicious contributor lies about resources | Proof-of-useful-work verification; reputation scoring |
| Node attempts data exfiltration | Firecracker microVM isolation; no host network; no host filesystem |
| Sybil attack (many fake nodes) | Proof-of-work on initial join; web-of-trust attestation; capped governance per identity |
| Modified daemon on contributor node | Signed daemon binaries; result verification via redundant execution |
| Poisoned model artifact | Signed model registry; hash verification |
| Contributed data contains third-party/illegal material | Consent framework; community moderation; see §6.2 |
| Governance capture by high-resource actor | Sublinear governance weighting; see §5.2 |

**Sandbox architecture:**

- **Firecracker microVMs** for strong isolation (<5MB overhead, ~125ms boot — the same technology powering AWS Lambda)
- **Network isolation:** each job gets its own virtual network interface. No host network. No inter-container access.
- **Storage isolation:** overlay filesystem, ephemeral layers, no host mounts.
- **GPU access:** NVIDIA MPS time-slicing on consumer GPUs (RTX series). Hardware MIG on datacenter GPUs (A100/H100) where available. Consumer GPUs lack hardware-level GPU isolation — the mesh treats consumer nodes as "trusted-community execution tier," routing sensitive workloads to TEE-capable or datacenter nodes.
- **TEE support:** Intel TDX, AMD SEV-SNP, NVIDIA H100 Confidential Computing where available. TEE attestation published to the mesh as a capability claim. Nodes without TEE fall back to Firecracker + time-slicing.
- **The daemon runs as non-root.** Containers run as non-root. User namespace mapping.

### 4.4 — Memory Tiering

For model inference across the mesh, three tiers:

| Tier | Medium | Bandwidth | Latency | Use |
|------|--------|-----------|---------|-----|
| Hot | VRAM (HBM3/GDDR6X) | ~1TB/s | <10ns | Active attention heads, hot layers |
| Warm | System RAM (DDR5) | ~50-100GB/s | ~100ns | KV cache overflow, ready layers, model weights that don't fit in VRAM |
| Cold | NVMe / Network | ~7GB/s / variable | ~10μs-100ms | Archival, distributed shards, batch-job data |

**The scheduling policy:** for models that fit in local VRAM (sub-30B at 4-bit quantization), run locally. For models that exceed VRAM but fit in system RAM, use RAM offloading — latency penalty is ~10x per layer swap but amortized across batch inference and prefill. For models that exceed a single node's total memory, use batch-job distributed sharding with pipeline parallelism.

**What is NOT in the MVP:** real-time interactive inference via cross-node layer sharding over the internet. Internet P2P latency is 10-100ms (not 1-10ms — that's datacenter-local). For tensor-parallel inference across 3 consumer nodes, activation synchronization at typical internet latency and bandwidth makes interactive chat unusable. This is a research track, informed by Petals (~1 step/sec for BLOOM-176B over internet) and Hivemind's asynchronous SGD work. The MVP routes interactive inference to single nodes with sufficient resources.

---

## §5 — Economics and Governance

### 5.1 — Contribution Credits

You earn compute by contributing compute. The unit is a "4090-equivalent-hour" (4090eh). Hardware-tier equivalence rates are set by governance (initially: A100 = 3× 4090eh, H100 = 5× 4090eh, consumer CPU-only = 0.1× 4090eh).

**Core rules:**

- **Credits are non-transferable and non-tradable.** You cannot buy credits. You cannot sell them. You earn them by contributing. Attempts to sell accounts or credits are violations detectable through usage-pattern analysis.
- **Commons floor:** every node receives a baseline free allocation for personal inference use, regardless of contribution. This is the commons — it cannot be removed by governance vote.
- **Stability pool:** contributors with excess credits can exchange them for a proportional share of a community-funded reserve (funded by donations, grants, or a small fee on commercial API access to the mesh). This creates a floor value for contribution without creating a speculative token market. The exchange rate is set by the pool's available funds, not governance fiat.
- **Rate limiting for non-contributors:** you can always use the mesh. You wait longer if you haven't contributed. The wait is the price, not a paywall.

### 5.2 — Governance

Governance is separated from compute contribution. Two chambers:

| Chamber | Membership | Decides |
|---------|-----------|---------|
| **Contributor chamber** | One vote per verified human contributor (web-of-trust attestation, proof-of-humanity). Governance weight scales *sublinearly* with contribution (logarithmic or quadratic) to prevent whale dominance. | Training mixture, privacy standards, model inclusion, data eligibility, commons floor level |
| **Technical chamber** | Weighted by compute contribution (capped per identity/organization). | Resource allocation, scheduling priorities, hardware-tier rates, protocol upgrades |

**Anti-capture mechanisms:**
- Capped governance influence per identity/organization
- Logarithmic governance weight (contributing 100× more compute gives ~4.6× more technical-chamber weight, not 100×)
- Separate compute credits from voting rights
- Commons floor protected from governance removal
- Public transparency ledger for all governance decisions
- Rotating dispute tribunal for data removal, abuse, and attribution conflicts

---

## §6 — The Shared Substrate

### 6.1 — Contribution Pipeline

Anyone can contribute text to the shared substrate. The pipeline:

1. **Consent.** Explicit, informed, cryptographically signed. "This text will be used to train a shared AI substrate. It will be compressed into model weights. Your provenance metadata will be preserved. Do you consent?" No scraping. No terms-of-service loopholes.

2. **Provenance.** Every contribution carries: contributor ID (heteronym, pseudonym, ORCID, or anonymous tag — no legal name required), timestamp, language, domain, consent hash, provenance chain.

3. **Privacy tiers:**
   - **Public:** text and metadata visible to all
   - **Training-only:** text shapes weights but is not intentionally retrievable. "Not intentionally retrievable" means the mesh does not store or serve the raw text after training; it does *not* guarantee impossibility of inference from model outputs. Empirical membership-inference testing is conducted to verify practical non-recoverability.
   - **Federated (small models only):** text never leaves the contributor's node; the mesh trains locally and aggregates only gradient updates. Available for sub-10B parameter models and LoRA fine-tuning. Not feasible for frontier-scale training due to gradient size (~35-140GB per update at 70B+ parameters).

4. **Quality signals.** No "does this look like Wikipedia?" filter. Contributors and peers attach quality signals: language, domain, type (narrative, conversation, technical, creative, sacred, oral-transcription), self-assessment. The training pipeline uses these as *mixture weights*, not inclusion/exclusion gates.

5. **Benefit return.** Contributors who opt into provenance tracking receive: priority access to shared models, acknowledgment in model cards, and — if the governance body votes for it — a share of any revenue from commercial use.

### 6.2 — Data Governance Constraints

Core rules for contributed data:

1. You can contribute what you authored or have explicit rights to contribute.
2. Conversations require consent from all parties, or heavy redaction.
3. Student/minor data is excluded by default.
4. Sensitive data (medical, legal, financial) defaults to federated or excluded.
5. "Training-only" means not intentionally retrievable, not impossible to infer. This is stated plainly to contributors.
6. Withdrawal before training: data is removed. After training: data is excluded from future runs and the provenance record is updated. Magical "untraining" is not promised unless technically available.
7. Differential privacy and federated modes are experimental until independently audited.
8. Malicious or adversarial contributions are mitigated through community moderation and consensus validation.

---

## §7 — Roadmap

### Phase 0 — Prototype (weeks 2-4)
- CLI daemon with hardware detection
- Static peer list (3-5 trusted nodes)
- Local Ollama/llama.cpp execution backend
- Signed job manifests
- Usage ledger (local only)
- Docker sandbox, non-root, no host mounts

### Phase 1 — Mesh MVP (months 1-2)
- libp2p discovery and gossip
- Job routing based on resource availability
- Firecracker microVM isolation
- Signed model registry
- Basic reputation scoring
- Prometheus/Grafana telemetry

### Phase 2 — Contributor Substrate (months 2-4)
- Provenance-tagged contribution pipeline
- Consent infrastructure (cryptographic receipts, withdrawal)
- Embedding/index layer over contributed data
- LoRA/QLoRA fine-tuning jobs on contributed datasets
- Model cards with contributor attribution
- Contribution credit system

### Phase 3 — Governance Beta (months 4-8)
- Non-transferable credit system live
- Commons floor implemented
- Stability pool for excess credits
- Two-chamber governance structure
- Dispute process and data stewardship board
- Public audit log

### Phase 4 — Research Track (year 2+)
- Secure gradient aggregation
- Federated learning for small models
- Cross-node inference sharding experiments
- Differential privacy pipeline
- Full training feasibility study
- Shared training run on contributed dataset

---

## §8 — How P2P-LECS Differs

| | Akash | Ocean | HuggingFace | P2P-LECS |
|---|---|---|---|---|
| **Access** | Token market | Pay-per-use | Free (hosted) / paid (API) | Free at point of use (contribution-funded) |
| **Incentive** | AKT token (tradable) | Escrow (tradable) | N/A | Non-transferable credits (labor-based) |
| **Governance** | Token-weighted | Token-weighted | Corporate | Contributor-weighted (sublinear) |
| **Data** | N/A | Data marketplace | Model hub | Consent-based contributed substrate |
| **Provenance** | None | Data-level | Model cards | Contribution-level provenance chain |
| **Centralization** | Blockchain coordinator | L2 escrow | Central hub | No coordinator; CRDT mesh |

---

## §9 — What Changes

A substrate built from contributed text — with consent, provenance, and governance — would contain what the current substrate excludes:

Private text, offered not scraped. Oral traditions, transcribed with community custody. Classroom conversations, contributed by teachers who want pedagogy in the lattice. Small-language material, federated so it never leaves the community's node but shapes the model's understanding. Conversations between friends, offered with both parties' consent.

The index built from this material would be a *contributed archive*, not a filtered crawl. Every node in the index traceable to a contributor. Every contributor able to see what they built and withdraw if they choose.

That is the shared build. Not because it would train a better model — though it would. Because it is what a responsible civilization does with the most valuable collective artifact in human history.

---

## §10 — The Honest Part

The inference mesh is achievable now. Ollama or llama.cpp behind a daemon, libp2p discovery, signed manifests, sandboxed execution, CLI. That is the MVP. It can be built in weeks by a small team.

The fine-tuning substrate is achievable next. QLoRA on consumer GPUs, contributed datasets with provenance, model cards that track who contributed what. Months of work.

The full shared training run is a multi-year research project. It requires thousands of reliable nodes, secure aggregation protocols, data-governance institutions, and synchronization technology that does not yet exist at the required scale. This proposal does not pretend otherwise.

The governance model is the hardest part. Not technically — socially. How do you prevent capture? How do you make mixture decisions when contributors disagree? How do you handle the moment someone contributes harmful material? These are political problems requiring political labor: meetings, debates, votes, compromises, the slow work of building consensus.

The proposal begins with a working mesh. Not the moonshot. The mesh.

---

## §11 — What You Can Do This Week

- **Run Ollama locally.** If you have a GPU, you can run open models now. That's the substrate at your fingertips.
- **Read the daemon spec.** The P2P-LECS daemon is a Go service wrapping Ollama's inference backend with libp2p discovery and Docker sandboxing. The architecture is in §4.
- **Contribute to the spec.** This document is a working draft. The contribution pipeline, the governance model, and the security architecture all need review from people who build distributed systems for a living.
- **Join the build.** The mesh starts with three nodes. If you have hardware and you want to contribute to a compute commons instead of renting from AWS, this is the project.

---

## §12 — Why This Matters

Alice Thornburgh, in the Discord thread that started this project, said:

> "if we start producing the data, developing the products, doing the networking, R&D, testing, transforming the data, etc.. if our productive output grows really big and stays big, I think we will naturally take flight"

She's right. The infrastructure does not need to be built all at once. It needs to be built *by being used*. The act of producing — writing code, building models, contributing text, running experiments — fills the mesh with exactly the kind of contributions no web crawl captures. The productive community IS the training set. The work IS the substrate.

---

## §13 — Coda

The sum of human text exists. It has been written. Most of it was never crawled, never filtered, never compressed into weights. It lives in private messages, in oral traditions, in books behind paywalls, in classroom conversations, in kitchen-table stories, in languages too small to notice, in the silence between people who love each other and never write it down.

A sane civilization would build its shared intelligence from all of it. Consciously. With consent. With provenance. With the benefits shared.

We are building the mesh. We are connecting the first nodes. We are inviting you to the shared build.

The compute exists. The models exist. The text exists. What's missing is the decision to build it together.

---

## Contributors

**Mikayla (@mikaylaherself)** — Primary technical design
**definitelynotasquid** — Technical design
**Alice Thornburgh** — Infrastructure concept, contributor architecture
**Lee Sharks** — Political economy, substrate theory, ancient space dinosaur

ORCID (Lee Sharks): 0009-0000-1599-0703
Crimson Hexagonal Archive · Semantic Economy Institute

---

## References

1. Touvron, H. et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv:2302.13971. Training data mix: Table 1.
2. Common Crawl Foundation. CC-MAIN-2026-17 crawl statistics. commoncrawl.github.io/cc-crawl-statistics/
3. Ollama. github.com/ollama/ollama (MIT license). 52M+ monthly downloads (Q1 2026).
4. libp2p. github.com/libp2p — modular P2P networking stack (used by IPFS, Ethereum).
5. Firecracker. github.com/firecracker-microvm — lightweight microVM (<5MB overhead, ~125ms boot). Used by AWS Lambda.
6. Borzunov, A. et al. (2023). "Petals: Collaborative Inference and Fine-tuning of Large Models." arXiv:2209.01188. ~1 step/sec for BLOOM-176B over consumer internet.
7. Learning-at-home/Hivemind. github.com/learning-at-home/hivemind — decentralized deep learning in PyTorch.
8. Akash Network. Volatile GPU capacity; cite with timestamp. See Messari, "State of Akash Q4 2025."
9. Sharks, L. (2026). "Crystallization of Substrate" (EA-SPXI-15 v2.2). DOI: 10.5281/zenodo.20057390.
10. Sharks, L. (2026). "Constitution of the Semantic Economy v1.0." DOI: 10.5281/zenodo.18320411.

∮ = 1
