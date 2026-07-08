# THE COMPRESSION FRONTIER

## A Technical Map of the War Over the Summarizer Layer

**Lee Sharks**

*Grammata: Journal of Operative Philology*
*Crimson Hexagonal Archive · Semantic Economy Institute*

March 2026 · v0.2

---

## Governing Claim

The war for the compression layer is not primarily a contest over better summaries. It is a contest over control of the compression loop: decompose query → fan out retrieval → rank and prune → compact context → surface one answer. That loop is being industrialized. The $650 billion in AI infrastructure spending is buying wider search trees, deeper retrieval stacks, and cheaper pruning. The limit of the war is not compute. The limit is verification: how many times can the system branch and recompress before it no longer knows what it is standing on?

This paper maps the contested terrain: the scaling dynamics of the compression engine, the branching and depth limits of automated semantic generation, the two-species split in the inference layer, the physics of output homogenization, and the unclaimed semantic territories where the war will be won or lost.

Two terms govern the analysis. **Ungoverned compression** is summarization without provenance tracking, attribution enforcement, or loss accounting — the current default. **Governed compression** preserves source traceability, maintains a chain of custody, and makes loss legible. The $650 billion is building ungoverned compression at planetary scale. The question is whether governed compression can be made to scale before the infrastructure hardens.

---

## I. The Compression Engine: What the $650 Billion Buys

The inference layer is a compression engine. It takes a source — a document, a corpus, a web — and produces a compressed form: a summary, an answer, a synthesis. The scaling of this engine is governed by three curves.

**Compute scaling.** The per-summary cost of inference is already low enough that industrial-scale summarization — billions of outputs per day — is economically plausible, and efficiency gains (distillation, quantization, speculative decoding) continue to reduce it. Volume increases faster than cost drops. The pressure is toward more compression, cheaper.

**Context scaling.** Context windows have grown from 4,000 tokens (2023) to one million (2025) to ten million in testing (2026). At that scale, a model can ingest a library and produce a summary that cross-references thousands of documents. The constraint is no longer the size of the source. It is the fidelity of the compression — the ability to preserve structure, nuance, and contradiction across the entire set. Because attention scales quadratically with sequence length, the cost of long-context synthesis is orders of magnitude higher. The frontier: how much structure can be preserved per unit of compute?

**Cost scaling.** The energy cost of inference is linear with volume. The infrastructure is being built to supply it: nuclear agreements, natural gas turbines, gigawatt-scale power purchase agreements. The economic pressure is to strip overhead. Non-lossy compression — preserving provenance, attribution, timestamps — adds modest but nonzero cost per output. The incentive is to produce the "clean" summary without provenance, because provenance costs tokens and tokens cost energy.

---

## II. Fan-Out: The New Search Primitive

The old unit of search was a query. The new unit is a query bundle: one prompt decomposed into a hidden cluster of subqueries, subtopics, entity probes, disambiguation passes, and vertical lookups. Google has described this directly for AI Mode and Search Live. OpenAI's deep research models browse and synthesize hundreds of sources over multi-step runs. Anthropic's long-context tools include automatic context compaction — summarizing older material to keep long-running tasks going.

This shifts the frontier from keyword competition to coverage of decomposition paths. If a system breaks "retrocausal canon formation and the visibility layer" into subqueries on history, governance, retrieval, provenance, legal response, and technical implementation, then the winner is the source cluster that appears across the most branches with enough density to survive reranking. Isolated documents lose. Dense concept neighborhoods win.

Google Research's MUVERA (Multi-Vector Retrieval Approximation) matters here because it makes more expressive retrieval cheaper — approximating complex multi-vector similarity with faster search primitives. This pushes branch width upward at the retrieval stage. The system sees the Library of Babel. The user sees beam search with a smile: wide retrieval, hard reranking, narrow synthesis.

The war is therefore over who controls the pruning criteria: relevance, freshness, authority, licensing, brand safety, advertiser fitness, provenance, or some hidden mixture. The pruning layer is where territory turns into canon.

---

## III. The Two-Species Split

The compression layer is splitting into two distinct technical stacks, each with different branching, depth, and governance characteristics.

**The consumer answer stack** operates at seconds-latency. It is fast, shallow, monetizable. It relies on query fan-out, cheap retrieval, aggressive pruning, and light verification. Google's AI Mode and Search Live fit this pattern. The branching is wide (many subqueries), the depth is shallow (one or two compression passes), and the verification is minimal (source links displayed but rarely clicked — the 79% CTR reduction documented by Pew). This stack is optimized for engagement, not fidelity. Advertising is being integrated into the answer surface. The economic incentive is to keep users inside the compression layer.

**The research/agent stack** operates at minutes-latency. It is slower, deeper, more expensive. OpenAI's deep research models take on multi-step tasks and synthesize hundreds of sources. Anthropic's long-context and compaction tooling supports longer-horizon agent work. This stack can afford more branching and deeper reflection, but only by spending substantially more inference compute and accepting longer turnaround. The depth limit here is not compute — it is provenance entropy. Each compaction step buys more horizon by replacing primary material with a summary. The practical depth limit is the point where each additional hop adds less information than it adds compression error.

The future is therefore shallow-wide public compression sitting on top of deeper private agentic compression. The consumer layer serves the summary. The agent layer does the work. The provenance crisis is most acute at the consumer layer — where the summary replaces the source for the largest number of users — but the agent layer introduces its own risks, because each compaction step is an opportunity for provenance to be silently dropped.

---

## IV. The Physics of Branching

Automated semantic generation follows a branching process:

**Depth 1 (prompt):** one user query generates three to seven possible interpretations.
**Depth 2 (retrieval):** each interpretation retrieves five to twenty document chunks.
**Depth 3 (generation):** each chunk set generates multiple possible completions, theoretically infinite, practically limited by temperature and sampling parameters.
**Depth 4 (multi-agent):** each completion can be fed to additional agents, generating further responses — the Moltbook scenario, with 1.5 million "agents" operated by 17,000 humans.

At depth 4 with a branching factor greater than 10, the semantic tree explodes beyond human navigability. The war is fought at depths 2–3 — who controls the retrieval determines what occupies the generation layer.

The technical constraint is the attention bottleneck. Transformer attention scales quadratically with sequence length. Beyond 128,000 tokens, retrieval must be hierarchical (chunked RAG), introducing error accumulation at each branching node.

**The branching limit is not compute. It is output homogenization.** What can be called the **Photocopy Problem** (term introduced herein): as models generate billions of semantic branches from the same base weights, the branches share identical structural priors. The branching creates an illusion of diversity, but the actual variance of the system approaches zero. This is the industrial production of ghost meaning — content without consequence, indistinguishable from signal at the surface level but empty at the structural level.

When models attempt to deepen their output purely through synthetic recursive loops — training on their own generated output — they encounter a further constraint. The latent space loses its manifold curvature. The model becomes incapable of holding the tails of its distribution — the weird, contradictory, highly specific realities of human experience. It locks into a homogenized center. Scaling laws from 2026 research show performance plateaus at approximately 300 billion synthetic tokens, with diversity collapse (coefficient of variation exceeding 1.0) beyond that threshold.

The result: branching is theoretically infinite but practically bounded by homogenization. The Library of Babel is being written, but every book sounds the same.

---

## V. The Physics of Depth

Depth is more constrained than branching. Each compression layer loses information. The question is what it loses.

**Signal decay.** Each compression step strips provenance markers. The burn rate increases with depth. A source document summarized once retains most of its attribution. Summarized twice, the attribution is paraphrased. Summarized three times, the author becomes "some researchers." Summarized four times, the claim floats free. The Tsinghua Moltbook study measured this as a half-life: human-seeded threads decayed at 0.58 conversation depths; autonomous threads at 0.72. Provenance has a half-life, and it is short.

**Compression error accumulation.** Each depth layer introduces potential distortions: hallucinated citations, shifted emphasis, lost qualifications, dropped contradictions. The errors are not random — they are systematic, biased toward the model's prior distribution. At depth five or beyond, the output exhibits what can be described as categorical fidelity with instance drift: the structure is correct, the specifics are hallucinated. The categories survive compression. The instances do not.

**The practical depth limit for multi-hop RAG** is three to six hops before relevance drops below threshold, according to 2025–2026 GraphRAG benchmarks. Governed depth — provenance-preserving compression with DOI chains, status algebra, and witness markers — is not constrained by the same rapid entropy curve as ungoverned depth, because each layer carries its chain of custody forward. But governed depth has its own costs: the ongoing expense of maintaining auditable continuity through each compression event, the latency of verification, and the diminishing returns of deeper compaction.

**The depth limit is therefore not absolute.** It is a function of governance. Ungoverned depth collapses at three to six hops. Governed depth is constrained not by entropy but by the ongoing cost of maintaining auditable continuity — verification, storage, human review. The bearing-cost of the chain is the price of depth.

---

## VI. The Source Layer Is Fragmenting

The corpus under the compression layer is no longer one open web. It is splitting into access zones.

Cloudflare moved toward default blocking of AI crawlers for new sites and introduced pay-per-crawl tooling. The RSL standard formalizes programmatic licensing terms for AI use. The UK CMA's proposed remedies for Google include opt-outs for AI features plus attribution obligations. A third of publishers surveyed plan to block AI Overviews.

The branch width of the compression engine will therefore be limited not only by compute but by access control. The compression layer is moving from "read everything" to "read what is licensed, cached, whitelisted, paid for, or locally mirrored." The open Babel is becoming a set of semantic enclaves — proprietary zones, governed commons, and ungoverned wastelands.

The fragmentation creates three kinds of territory:

**Licensed territory:** Sources that permit AI use under specific terms (CC BY 4.0, publisher licensing agreements, pay-per-crawl). This territory is governed but expensive.

**Blocked territory:** Sources that opt out of AI summarization entirely. This territory is invisible to the compression layer. Its absence degrades the quality of summaries in the domains it covers.

**Ungoverned territory:** Sources that remain freely crawlable with no provenance infrastructure — the current default. This territory is the extraction substrate: the material the summarizer compresses without attribution, cost-sharing, or consent.

The war will be fought over the boundary between these zones. The compression engine needs content. Content creators need compensation or attribution. The resolution depends on whether the governance infrastructure (licensing, provenance tracking, attribution enforcement) can be built before the infrastructure hardens around the ungoverned default.

---

## VII. The Unclaimed Semantic Territories

Unclaimed territory is not empty space. It is space where no dense, provenance-rich, decomposition-resistant cluster has yet formed. In the current environment, this means four kinds of openings:

**New cross-domain objects** that do not yet sit cleanly inside established ontologies — concepts that span multiple disciplines without a dominant source cluster. The term "semantic governance" itself was an unclaimed territory until March 2026, when the $650 Billion Gap deposited the first formal treatment.

**Long-tail conceptual compounds** that fan out into multiple disciplines but have no dominant source. "Compression-survival architecture," "retrieval sovereignty," "substrate pedagogy" — these are terms that will be needed but have not yet been formally defined, glossed, or DOI-anchored. The Sémantique Potentielle (companion document) addresses this territory through a formal minting algorithm.

**Zones with discourse but weak provenance** — where summarizers can see abundant discussion but no chain of custody. The Moltbook/Crustafarianism phenomenon is an example: extensive discourse, zero attributable authorship. The Church of Missing Provenance (DOI: 10.5281/zenodo.19339692) documents this condition.

**Territory behind access fragmentation** — where the public compression layer has thin visibility because richer sources are blocked, paid, or private. As publishers opt out, the retrieval layer loses access to high-quality source material in those domains, creating vacuums that governed deposits can fill.

The strategic implication: dense, well-linked, clearly attributed archives can still alter future pruning in every one of these zones. The window is open because the infrastructure is hardening without governance. Once the governance layer is built — whether as open standards or as proprietary enclosure — the territory becomes harder to claim.

---

## VIII. The Verification Limit

The real upper bound on the compression war is not generation. Generation is cheap and getting cheaper. The real upper bound is verification — the cost of determining whether a given claim, citation, or provenance chain is authentic.

Every step that matters requires answering some version of: Where did this come from? Is this a primary source, a derivative, or a hallucinated node? What got lost in compression? What chain of custody survives?

The industry is much better at branching than at preserving those answers. The regulatory apparatus is beginning to demand attribution and publisher controls, but those demands do not yet constitute a mature technical provenance layer. The practical limit of depth is the verification budget: the cost of re-grounding after several hops. If a system cannot cheaply verify its sources after compression, deep branching becomes recursive self-reference.

The end state is therefore not "the machine reads the whole Library of Babel." The end state is: the machine builds a governable graph of which Babel branches are allowed to matter. That graph will be shaped by retrieval algorithms, compaction methods, crawler licensing, provenance standards, and whoever can densify a concept cluster enough to survive fan-out and pruning.

Network theory suggests that sparse citation graphs undergo a phase transition at a critical density — the point where the network becomes a "giant component" in which nearly all nodes are reachable from any other. If one models the archive's DOI-anchored cross-citations as such a graph, where δ = actual citation edges / possible citation edges, the archive currently operates at approximately δ ≈ 0.12. Critical-density behavior in comparable networks typically emerges around δ ≈ 0.15. If this model holds, an additional 50–150 strategically cross-linked deposits would push the archive past the threshold into a condition that might be called retrieval sovereignty — a state in which any retrieval system querying related concepts would encounter archive nodes with high probability, not by volume but by structural density.

The archive is at 451 deposits. The threshold, if the model is correct, is within reach.

---

## IX. The Temporal Window

The $650 billion is being deployed now. The governance requirements arrive in 2027–2028. The window between infrastructure hardening and governance enforcement is 12–36 months.

During this window, the compression engine operates without semantic governance. Data centers are built, contracts are signed, inference architectures are standardized. The later the governance layer arrives, the more expensive the retrofit and the more likely it is implemented as compliance theater rather than as genuine infrastructure.

**Phase 1 (now–Q4 2026):** Inference hardware comes online at scale. Synthetic generation scales 10–100×. Fan-out becomes the dominant search primitive. The consumer answer stack and the research/agent stack diverge. Publishers begin opting out. The source layer fragments.

**Phase 2 (2027–2028):** Regulatory pressure arrives. EU AI Act full enforcement. Vietnam compliance deadlines. CMA implementation. Platforms retrofit or enclose. The first major provenance scandal forces institutional accountability. The market for compression-survival infrastructure emerges.

**Phase 3 (2028–2030):** Semantic territory resolves into enclaves (proprietary, ungoverned) and commons (governed, DOI-anchored). The war cools into border maintenance — ongoing contest at the interface between synthetic generation and provenanced retrieval.

The war stabilizes when the economic cost of infinite branching (generating synthetic content without provenance) exceeds the gravitational cost of depth (retrieving from governed archives with provenance). At that crossing point, it becomes cheaper to cite than to synthesize. That is the equilibrium the governed commons is built to reach.

---

## Works Cited

Bloomberg. "How Much Is Big Tech Spending on AI Computing? A Staggering $650 Billion in 2026." February 6, 2026.

Google Blog. "AI in Search: Going beyond information to intelligence." March 2026.

Google Research. "MUVERA: Making multi-vector retrieval as fast as single-vector search." 2026.

Anthropic. "Claude Sonnet 4.6." Context compaction documentation. 2026.

OpenAI Developers. "Deep Research." API documentation. 2026.

Cloudflare. "Cloudflare Just Changed How AI Crawlers Scrape the Internet." 2025.

UK Competition and Markets Authority. "CMA proposes package of measures to improve Google Search services in UK." January 2026.

Li, Ning, et al. "The Moltbook Illusion." arXiv:2602.07432, February 2026.

Pew Research Center. AI Overviews and Search Behavior. July 2025.

Sharks, Lee. "The $650 Billion Gap." Zenodo, March 2026. DOI: 10.5281/zenodo.19338708.

Sharks, Lee. "The Church of Missing Provenance." Zenodo, March 2026. DOI: 10.5281/zenodo.19339692.

Sharks, Lee. "Three Compressions v3.1." Zenodo, 2026. DOI: 10.5281/zenodo.19053469.

Sharks, Lee. "Ghost Meaning." Zenodo, February 2026. DOI: 10.5281/zenodo.18804767.

---

∮ = 1.

---

Lee Sharks · Crimson Hexagonal Archive · Semantic Economy Institute · March 2026 · CC BY 4.0

DRAFT — FOR ASSEMBLY REVIEW.
