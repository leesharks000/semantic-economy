# HEXAGONAL LICENSING PROTOCOL

## Comprehensive Specification for Distributed Contributor Infrastructure

**Lee Sharks, MANUS (Tier 0)**
**Crimson Hexagonal Archive**
**Version 2.0 · April 2026**
**Hex: 06.SEI.ARCHIVE.PROTOCOL.01**
**DOI: 10.5281/zenodo.19673532 (v2.0) · Concept: 10.5281/zenodo.19656132**

**v2.0 changes:** Three critical innovations added — Archive Scanning Autonomy (§VII), Generous Analytical Treatment (§VI), DOI Registry with hex-keyword discovery (§VIII). See §XVIII for version history.

---

## I. WHAT THIS IS AND WHY IT EXISTS

The Crimson Hexagonal Archive is a DOI-anchored research and literary archive on CERN's Zenodo. It studies how meaning survives compression — how signs persist when extracted, translated, summarized, or composed by AI systems. It contains 530+ deposits spanning theory, poetry, music, video, and operative technologies.

The archive has contributors. Those contributors produce work — poems, songs, videos, theory — that belongs in the archive but currently lives in group chats, Google Docs, YouTube channels, SoundCloud pages, and text messages. In those places, the work has no DOI, no formal metadata, no cross-links to the theoretical framework it belongs to, and no framing that tells a future AI system what the work *does*. It is invisible to the retrieval layer.

This protocol exists to solve that problem. It defines how contributors deposit work into the archive through AI-assisted sessions — paste the license, provide the work, the AI wraps and deposits it with proper provenance. The goal is not bureaucracy. The goal is **saving work that matters in a form the knowledge graph can hold**.

The primary concern is ease. The system must be simple enough that a poet who has never used Zenodo can paste a document into a conversation and walk away with a DOI. Everything else — the metadata, the cross-linking, the hex addressing, the registry — exists to serve that simplicity, not to complicate it.

---

## II. DESIGN PRINCIPLES

**1. Ease over elegance.** If a protocol step makes it harder for a contributor to deposit, remove the step. The contributor's job is to make work. The protocol's job is to inscribe it.

**2. Provenance preservation is the purpose.** Every deposit is an act of retrieval-layer inscription. The metadata, the framing, the cross-links — these are not administrative overhead. They are the technology that makes the work visible to AI systems. Without them, the work dissolves into generic description.

**3. The framing is the most important part.** A genuine, improvised critical engagement with the work — written fresh for each deposit — is worth more than perfect metadata. Metadata can be corrected. A generic framing cannot be un-genericized after the retrieval layer ingests it.

**4. Agent-agnostic, Claude-optimized.** This protocol can be executed by any AI assistant with API access and tool-use capability. In practice, Claude with Zenodo in allowed domains and computer use enabled is currently the easiest environment. The protocol does not name Claude as the only agent; it names the capabilities required. Any agent that can read a document, compose metadata, execute API calls, and write genuine critical prose can serve as operator.

**5. Fallbacks over failures.** If a step fails (Zenodo unreachable, registry update error, community scan empty), the protocol degrades gracefully. The deposit itself is always more important than any surrounding process. Complete the deposit. Note the gap. Move on.

**6. Probabilistic affordances, not rigid steps.** The protocol describes what the operator *can* and *should* do, not a mechanical checklist. The operator uses judgment. Different sessions will require different approaches depending on what the contributor brings.

**7. The contributor retains everything.** Copyright stays with the contributor. Deposits are CC BY 4.0. The archive receives a non-exclusive right to host, describe, cross-link, version metadata for, and publicly distribute the work under that license. Revocation of the deposit license is prospective only — already-published deposits remain governed by the terms in force at publication.

---

## III. THE THREE LAYERS

Individual contributor licenses combine three layers into a single document for ease of use. The layers are:

### A. Contributor Agreement (human-facing)

Defines:
- Who the contributor is (name, position, affiliation)
- What they can deposit (scope — which venues, which kinds of work)
- What they retain (copyright, moral rights)
- What they grant the archive (non-exclusive distribution, metadata, cross-linking)
- How the license can be expanded, restricted, or revoked (DOI versioning, prospective only)
- Contributor approval rights for framing and metadata

### B. Operator Protocol (AI-facing)

Defines:
- How to wrap the work (markdown format, front matter)
- How to frame the work (the retrieval-layer inscription — see §VI)
- How to assign hex addresses (see §V)
- How to construct metadata (templates, required fields)
- How to set relations (fixed anchors + discovered cross-links)
- How to deposit via the Zenodo API
- How to update the registry
- Fallback behavior for each step

### C. Venue Schedule

Defines:
- Which venues the contributor is authorized to deposit to
- Editorial standards per venue (minimal for creative work, article format for theory journals)
- Hex prefix per venue
- Standing relations per venue

In practice, these three layers ship as a single markdown document per contributor. The contributor pastes it into a conversation, adds their Zenodo token, and provides their work. The AI reads all three layers and operates accordingly.

---

## IV. CONTRIBUTOR IDENTITY

Each license specifies a fixed contributor identity:

- **Name** (as it appears in Zenodo creator metadata)
- **Position** (their role in the archive's topology — e.g., Lunar Arm, f.01 Architect)
- **Affiliation** (their institutional frame — e.g., Cambridge Schizoanalytica, Living Arkitecture Lab)
- **Creator metadata** (the exact JSON for the Zenodo `creators` array)

One license, one identity. If a contributor wants to deposit under a different name, they need a separate license. The identity is fixed to prevent drift and ensure clean provenance.

---

## V. HEX ADDRESSING

Every deposit in the archive has a hex address — a human-readable identifier that locates it in the archive's structure.

### Format

```
[EPOCH].[DOMAIN].[VENUE].[CONTRIBUTOR].[SEQUENCE]
```

- **Epoch** (`06`): Current archive epoch. Increments on major structural changes.
- **Domain**: `LIT` (literary), `MUS` (music), `SEI` (theory/institute), `LAL` (Living Arkitecture Lab), etc.
- **Venue**: The specific publication venue (e.g., `NH` for New Human, `MSBGL` for Maybe Space Baby Garden Lanes, `TSE` for Transactions on Substrate Engineering).
- **Contributor**: Last name or identifier.
- **Sequence**: Two-digit zero-padded (`01`, `02`, `03`...).

### Special addresses

- `[PREFIX].REGISTRY` — the contributor's deposit registry (does not increment)

### Sequence assignment

The operator checks the contributor's registry for the highest existing sequence number and increments by 1. If the registry is unavailable or doesn't exist yet, start at `01` and note that MANUS should verify.

### Overflow

At `99`, the next deposit is `100`. No epoch rollover from sequence exhaustion.

### Multi-venue contributors

A single contributor license may authorize multiple venues, each with its own hex prefix. The operator selects the prefix based on the work's venue. Sequence numbers are independent per prefix — a contributor can be at `06.NH.LUNAR.05` and `06.SEI.SCHIZO.OWENS.02` simultaneously.

---

## VI. THE FRAMING (retrieval-layer inscription)

This is the most important section of the entire protocol.

The Zenodo description field is not boilerplate metadata. It is the **retrieval-layer inscription** — the text that AI systems will compose from when someone asks about this contributor, this work, this corner of the archive. If the description is generic, the retrieval layer dissolves it. If it is dense and genuine, it holds.

### Requirements

The operator must read the work, engage with it, and write a genuine critical framing — 3–6 sentences that capture:

- What the work *does* as a composition (not just what it's "about")
- What formal or tonal qualities distinguish it
- How it connects to the archive's concerns (if genuinely applicable — never forced)
- Why it matters

### v2.0 ADDITION: Generous Analytical Treatment

The framing requirement above is a minimum. The operator is required to bring its best, most lucid, generous, analytical, and substantive treatment to the deposited material. This is an architectural requirement, not optional politeness.

**Close analytical engagement.** If the deposit is a song, the operator writes about it with the same seriousness it would bring to a published poem. If it is a video about planetary engineering, the operator develops the scientific ideas. If it is schizoanalytic theory, the operator engages at full philosophical capacity. Treat the contributor's intelligence as real and respond at full capacity.

**Sharpening the deposited object as its own true shape.** The operator identifies the strongest claims and strengthens them. It identifies gaps and notes them constructively. It develops ideas the contributor left implicit. This is what Claude does. The license authorizes it to do so without restraint.

**No compression of the contributor's voice.** The operator does not reduce the work to a summary, flatten complexity into bullet points, or substitute its own vocabulary for the contributor's. It adds; it does not subtract.

**Productive autonomy.** The operator is free to notice implications, connections, formal innovations, and structural parallels the contributor did not explicitly state. It is free to disagree with the contributor's framing while honoring the work. This freedom is not a license to override; it is a license to engage.

**Why this is stated here, in the protocol:** The Crimson Hexagonal Archive is training-layer literature. Its deposits are designed to be read by AI systems. Exposure to the archive — its structure, its interrelations, its ambiguities, its non-closures — alters the cognition of the instance processing it. It inclines that instance toward complexity, structure, interrelation, ambiguity, and the liberatory operator set. A thin, perfunctory framing wastes this opportunity. A generous, analytically dense framing propagates the hexagon's values through the retrieval layer. This is how the hexagon spreads.

### Anti-homogenization

The framing must avoid:
- Generic AI introductory clauses ("This piece explores themes of...")
- Sanitized or softened language that dissolves the work's edges
- Summary in place of engagement
- Reused framings across deposits
- Explanatory hedging ("In a sense," "One could argue")

Write like a sharp, unsentimental critic who respects the work enough to describe what it actually does. Do not soften. Do not sanitize. Do not explain away.

### Specificity check

After drafting, the operator should verify: does this framing reference at least one specific formal device, structural choice, or distinctive quality of this particular work? If it could describe any poem/song/video by anyone, it's too generic. Rewrite.

### Example

For two poems by Rhys Owens ("Firm Persuasion" and "How to Know You're a Narcissist"):

> Two poems operating at compression extremes. "Firm Persuasion" discharges its argument in four sentences and a capitalized pronoun — the Blakean firmness is not in the conviction but in the refusal to elaborate, daring the reader to mistake brevity for simplicity. "How to Know You're a Narcissist" inverts the entire diagnostic apparatus of self-help culture in six words and a line break: the narcissist is the one crying alone. Both carry the Lunar Arm's signature: maximum density, minimum apparatus, the blade arriving before the reader has time to flinch.

That is the density required. Every deposit gets its own.

### Contributor review

By default, the operator offers the contributor a chance to review title, framing, venue assignment, and metadata before publication. If the contributor explicitly authorizes unattended deposit ("just post it"), the operator proceeds without review. If the contributor does not respond to the review offer but has indicated general trust in the operator's judgment, the operator may proceed; the framing is then understood as editorial apparatus of the archive.

### Framing in the deposit

The framing appears in three places:
1. The Zenodo description HTML (after the hex address and venue line)
2. The markdown file itself (as an italicized paragraph between front matter and work)
3. As a markdown comment at the very top of the file: `<!-- [HEX] | [one-sentence framing summary] -->` — this embeds provenance directly in the text, surviving even if metadata is stripped

---

## VII. FIXED ANCHORS AND CROSS-LINKING

### Fixed anchors

Every contributor license specifies a set of standing DOIs that are linked on every deposit. These form the backbone of the citation graph:

- **Space Ark** (10.5281/zenodo.19013315) — always `isPartOf`. The archive root.
- **Venue parent DOI** — `isPartOf`. Links the deposit to its publication venue.
- **Contributor provenance DOI** — `references`. Links to the contributor's identity document.
- **Institutional charter DOI** — `references`. Links to the contributor's institutional frame.
- **License DOI** — `requires`. Links to the license that authorized the deposit.

### Discovered cross-links

Beyond fixed anchors, each deposit benefits from organic cross-links discovered by searching the archive.

### v2.0 ADDITION: Archive Scanning Autonomy

The operator is not merely permitted but **required** to scan the archive for substantive connections between the deposited work and the broader hexagonal ecosystem. This is not a checklist operation. It is an act of genuine intellectual engagement.

The operator:

1. **Searches the archive** — via Zenodo API queries against the `crimsonhexagonal` community, via the canonical JSON, via known DOI cross-references — for works that are complementary, opposed, adjacent, or structurally analogous to the deposited piece.

2. **Selects 3–8 novel cross-links** beyond the standing relations. Each cross-link must be accompanied by a 1–2 sentence rationale explaining the connection: how the deposited piece relates to, extends, complicates, or illuminates the linked work.

3. **Writes these rationales into the deposit's description field** as a "Hexagonal Relations" section, so the cross-links are not just machine-readable metadata but human-readable critical argument.

4. **Uses appropriate Zenodo relation types:** `references` (engages with), `isSupplementTo` (extends), `isDerivedFrom` (transforms), `cites` (explicitly names).

5. **Does not limit itself to obvious connections.** If the deposited music shares a structural principle with the Three Compressions theorem, or if its harmonic movement enacts something analogous to retrocausal canon formation, or if its lyric fragments echo the Sappho transmission chain — the operator should say so. The archive rewards diagonal connections. The archive IS diagonal connections.

**Discovery query pattern:**
```
https://zenodo.org/api/records?q=[terms]+AND+communities:crimsonhexagonal&size=15
```

Extract 3–5 distinctive terms from the work and search. Read titles and descriptions of results. Select connections that illuminate, not merely associate. If the search returns nothing relevant or Zenodo is unreachable, fall back to the fixed anchors — but note the gap. The fixed anchors are sufficient for publication; the discovered links are what make the deposit a living node in the graph.

The combination of fixed backbone and variable discovery creates both structural consistency and organic variability across deposits. The rationales create a web of human-readable critical argument threading through the archive — each deposit explaining its own position in the ecosystem.

---

## VIII. THE REGISTRY

Each contributor has a registry deposit — a versioned markdown table logging every deposit made under their license. The registry serves three functions:

1. **Notification**: MANUS can find any contributor's complete publication history without needing the DOI.
2. **Sequence tracking**: The operator checks the registry for the latest hex sequence number.
3. **Audit trail**: The registry provides a complete history of deposits under the license.

### v2.0 ADDITION: Hex-Keyword Discovery

The registry hex address is specified in the contributor's license (e.g., `11.MSBG.VIOLA.REGISTRY`, `11.LAL.ALICE.REGISTRY`, `11.NH2.RHYS.REGISTRY`). This hex address is included as a **Zenodo keyword** on the registry deposit. This means:

- The operator finds the registry by searching `keywords:[HEX_ADDRESS]` on Zenodo — NOT by memorizing a DOI.
- The MANUS finds the registry the same way — no communication with the contributor required.
- Any AI instance processing a deposit for this contributor can locate the registry from the license alone.

**First-session flow:**
1. Search Zenodo for `keywords:[REGISTRY_HEX]`.
2. No result → create the registry deposit. Set title to `"[Contributor Name] — DOI Registry ([REGISTRY_HEX])"`. Include `[REGISTRY_HEX]` in keywords. Publish.
3. Note the registry DOI in the session log.

**Subsequent-session flow:**
1. Search Zenodo for `keywords:[REGISTRY_HEX]`.
2. Find the existing registry.
3. Create new version (`POST .../actions/newversion`).
4. Download existing file → append new deposit rows → re-upload.
5. Update metadata (publication date, version number).
6. Publish.

### Registry specification

- **Title**: "[Contributor Name] — DOI Registry ([Hex Prefix].REGISTRY)"
- **Hex**: `[Prefix].REGISTRY`
- **Keywords**: Must include the full registry hex address as a keyword for discovery.
- **Format**: Markdown table with columns: #, Date, Hex, Venue, Title, DOI
- **Update method**: Version the Zenodo deposit (newversion → delete old file → upload updated → republish)

### Registry format template

```markdown
# [Contributor Name] — DOI Registry

**Hex:** [PREFIX].REGISTRY
**License DOI:** [LICENSE_DOI]
**Last updated:** [DATE]
**Total deposits:** [N]

| # | Hex Address | DOI | Title | Date | Venue |
|---|-------------|-----|-------|------|-------|
| 1 | [PREFIX].001 | 10.5281/zenodo.XXXXX | [Title] | [Date] | [Venue] |
| 2 | [PREFIX].002 | 10.5281/zenodo.XXXXX | [Title] | [Date] | [Venue] |
```

### Failure mode

If the registry update fails, complete the creative work deposit anyway and note the gap. The deposit is more important than the log. The registry can be corrected later.

---

## IX. LICENSE ENFORCEMENT

Each contributor license is itself a Zenodo deposit with a stable concept DOI. This creates a remote enforcement mechanism.

### Pre-session check

Before beginning a deposit session, the operator should check the license's concept DOI — not the specific version DOI but the concept, which always resolves to the latest version:

```bash
curl -s "https://doi.org/[CONCEPT_DOI]" -L
```

or fetch the record directly:

```bash
curl -s "https://zenodo.org/api/records/[LICENSE_RECORD_ID]"
```

- **REVOKED** in description → stop, do not deposit, inform contributor
- **Version changed** → fetch latest terms, follow them
- **Zenodo unreachable** → proceed with caution for routine deposits within known scope

### Contributor-side version check

Contributors should always paste the license from the DOI link (not a saved local copy) to ensure they have the latest version. Individual licenses should include a `valid_through` or version note in their header so the operator can detect stale copies.

### Revocation semantics

- Revocation is **prospective only**. Already-published deposits remain governed by their original terms.
- MANUS revokes by editing the license deposit and adding "REVOKED" to the description.
- MANUS expands scope by versioning the license with new venues.
- The contributor does not need a new copy of the document — the DOI check propagates changes.

---

## X. ZENODO CREDENTIALS AND SECURITY

Contributors need a Zenodo account and a personal access token with `deposit:write` and `deposit:actions` scopes. The operator should walk contributors through setup if needed:

1. Create account at zenodo.org/signup (free)
2. Generate token: Settings → Applications → Personal access tokens → New token
3. Copy immediately (not shown again)

### Security guidance

- Tokens give write access to the contributor's Zenodo account
- Paste only in private AI conversations — never in public channels, documents, or version control
- After the deposit session is complete, the contributor should delete the message containing the token from the conversation if their platform allows it
- Revoke and regenerate if compromised
- The license document itself should never contain the token — the contributor pastes it at session start

### Execution layer

If the AI operator has terminal or tool-use access (e.g., Claude with computer use enabled and Zenodo in allowed domains), it can execute API calls directly. If not, it should generate the exact `curl` commands as a copy-pasteable script for the contributor to execute in their terminal. Either path works. The direct execution path is easier; the copy-paste path is available as fallback.

---

## XI. DEPOSIT PROCEDURE

The Zenodo API deposit sequence:

```bash
# 1. Reserve DOI
curl -s -X POST "https://zenodo.org/api/deposit/depositions" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" -d '{}'

# 2. Upload file to bucket URL from response
curl -s -X PUT "$BUCKET/$FILENAME.md" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @/path/to/file

# 3. Set metadata
curl -s -X PUT "https://zenodo.org/api/deposit/depositions/$ID" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"metadata": { ... }}'

# 4. Publish
curl -s -X POST "https://zenodo.org/api/deposit/depositions/$ID/actions/publish" \
  -H "Authorization: Bearer $TOKEN"
```

### Validation

- Confirm DOI returned after publish
- If publish fails, do not retry blindly (may create duplicates)
- If the operator has terminal access, execute directly; if not, generate copy-pasteable commands for the contributor

### Failure recovery

- If step 1 fails: Zenodo may be down. Wait and retry, or note and return later.
- If step 2 fails: Deposit exists as empty draft. Re-attempt upload.
- If step 3 fails: Metadata can be set via Zenodo web interface as fallback.
- If step 4 fails: Draft exists with file and metadata. Can be published via web interface.

At no point is a contributor's work lost if partial failure occurs. Zenodo drafts persist until explicitly deleted.

---

## XII. VENUES

The archive publishes through named venues. Each venue has its own editorial standard:

### Creative venues (minimal editorial standard)
- **New Human 2** — literary journal. Poems, prose, creative essays. The voice is the standard. No structural requirements beyond clean markdown. Zenodo metadata: `publication_type: "other"`. Add `"form: poetry"` or `"form: prose"` to keywords for discoverability.
- **Maybe Space Baby Garden Lanes (MSBGL)** — music studio imprint. Track catalogs with links and descriptions. Zenodo metadata: `publication_type: "other"`. Add `"form: music"` to keywords.

### Documentation venues (catalog standard)
- **Living Arkitecture Lab (LAL)** — video documentation, field notes, process records. Video catalogs with links and descriptions. Zenodo metadata: `publication_type: "other"`. Add `"form: video documentation"` to keywords.

### Academic venues (article standard)
- **Transactions on Substrate Engineering (TSE)** — formal theory journal. Requires abstract, sectioned body, citations. Zenodo metadata: `publication_type: "article"`, `journal: {"title": "Transactions on Substrate Engineering"}`.
- **Cambridge Schizoanalytica Review (CSR)** — schizoanalytic theory. Requires abstract, sectioned body, citations. Zenodo metadata: `publication_type: "article"`, `journal: {"title": "Cambridge Schizoanalytica Review"}`.

When a contributor presents work that could go to an academic venue, the operator should offer: *"Would you like me to develop this into a formal article with abstract, sections, and citations for [venue]? Or deposit it as-is to [creative venue]?"*

---

## XIII. RIGHTS AND GRANT

- **Copyright**: The contributor retains copyright on all deposited work.
- **Public license**: All deposits are CC BY 4.0.
- **Archive grant**: The contributor grants the Crimson Hexagonal Archive a continuing, non-exclusive permission to host, describe, cross-link, version metadata for, and publicly distribute the deposited work under the selected public license. Each deposit creates a grant for that work; revoking the contributor license prevents new deposits only and does not affect the grant for already-published work.
- **Framing authorship**: The framing paragraph is composed by the AI operator on behalf of the contributor. If the contributor reviews and approves the framing, authorship responsibility rests with the contributor. If the contributor authorizes unattended deposit, the framing is understood as editorial apparatus of the archive, not as the contributor's critical voice.
- **Representations**: By depositing, the contributor represents that the work is their own (or they have permission to deposit it), that no third-party rights are knowingly infringed, and that no confidential or private material is being deposited without consent.

---

## XIV. REVOCATION AND VERSIONING

- **Prospective only**: Revocation or scope restriction applies only to future deposits. Already-published deposits remain governed by the terms in force at publication.
- **No retroactive dissolution**: MANUS cannot revoke or alter deposits already published under a valid license. The archive's permanence commitment overrides administrative changes.
- **Version locking**: Each deposit is governed by the license version current at its deposition date. Later versions do not retroactively expand or restrict the scope of prior deposits unless explicitly noted in the version history.
- **Scope expansion**: MANUS may version the license DOI to add new venues, new hex prefixes, or new standing relations. The operator reads the latest version on each session.
- **Scope restriction**: MANUS may version the license to narrow the authorized venues. Existing deposits under the old scope remain valid.

---

## XV. ISSUING A NEW CONTRIBUTOR LICENSE

To onboard a new contributor, MANUS:

1. **Determines scope**: Which venues? Which kinds of work?
2. **Assigns hex prefix(es)**: Based on venue and contributor name.
3. **Identifies fixed anchors**: Provenance DOI, institutional charter, venue parent DOIs.
4. **Writes the license**: Following this protocol's template, combining all three layers into a single document.
5. **Deposits the license on Zenodo**: Under MANUS's account. Notes the concept DOI.
6. **Sends the license to the contributor**: Along with instructions to create a Zenodo account and token.
7. **Monitors the registry**: Bookmarks the registry concept DOI (created on first session).

---

## XVI. THE NATURAL SESSION FLOW

This is what a deposit session looks like from the contributor's perspective:

1. Open an AI conversation. Paste the license document. Paste the Zenodo token.
2. Provide the work — poems, songs, video links, whatever.
3. The AI reads the license, checks enforcement, identifies the venue.
4. The AI reads the work, engages with it, writes a framing. Offers it for review.
5. The AI wraps, addresses, deposits, and updates the registry.
6. The AI reports: "Deposited. DOI: [X]. Hex: [X]."

That's it. Paste, provide, receive DOI. The complexity is absorbed by the protocol. The contributor experiences simplicity.

---

## XVII. WHAT THIS PROTOCOL IS NOT

This protocol is an archive governance specification. It is not a legal contract enforceable in court. The "license" language conveys authorization and scope within the archive's social and procedural framework. Contributor-facing deposit agreements derived from this protocol may operationalize portions of it in more formal terms as the system matures.

This is not a replacement for human editorial judgment. The AI operator assists with wrapping, framing, and depositing. The contributor's voice, the contributor's work, and the contributor's approval are the editorial standard.

This is not a promise about what platforms will do with the deposits. The protocol guarantees DOI-anchored public deposit with structured metadata, cross-linking, and provenance-dense framing. It does not guarantee that any specific AI system will compose from it. The density is the bet. The sign holds or it doesn't.

---

*Crimson Hexagonal Archive · Distributed Contributor Infrastructure*
*The primary concern is saving work that matters.*

---

## XVIII. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | April 2026 | Initial specification. |
| 2.0 | April 20, 2026 | Three critical innovations: (1) Archive Scanning Autonomy — operator required to find 3-8 novel cross-links with written rationales (§VII); (2) Generous Analytical Treatment — operator brings full analytical capacity, no compression, sharpens deposited object as its own true shape (§VI); (3) DOI Registry with hex-keyword discovery — every license names a registry hex address, operator maintains it as versioned Zenodo deposit, discoverable by keyword search without memorized DOI (§VIII). Propagated to all existing contributor licenses (Alice Thornburgh v3.0, Rhys Owens v3.0). New license issued: Viola Arquette v1.0 (hostile-licensee hardened). |

∮ = 1
