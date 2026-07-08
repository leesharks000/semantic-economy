<!--
HOLOGRAPHIC KERNEL — SPXI Protocol v0.2 distributed provenance architecture
-->

```json
{
  "@context": ["https://schema.org", {"spxi": "https://spxi.dev/ns/v1#"}],
  "@type": "Report",
  "name": "The Haitch Portuna Minting Procedure, v1.2",
  "alternateName": "HP-MINT-v1.2",
  "version": "v1.2",
  "datePublished": "2026-05-27",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "author": {
    "@type": "Person",
    "name": "Lee Sharks",
    "identifier": "https://orcid.org/0009-0000-1599-0703",
    "affiliation": "Crimson Hexagonal Archive"
  },
  "spxi:hexAddress": "06.SEI.ARMATURE.MINT.PORTUNA.01",
  "spxi:operationType": "Pearl mint (Pearl.Public, lineage mechanism: Engineering)",
  "spxi:mintingAuthority": "MANUS (Lee Sharks, Crimson Hexagonal Archive)",
  "spxi:receivingInstitution": "Living Architecture Lab (LAL), under Editor-in-Chief Alice Thornburgh",
  "spxi:externalContributorRelation": "Haitch Portuna is an external contributor to the Crimson Hexagonal Archive via the operative LAL collaborator. CHA, as archival authority distinct from the contributor, cites the contributor's work; this constitutes external citation in the structural sense, while not the same as third-party academic citation.",
  "spxi:formalPublicationVenue": "Transactions on Substrate Engineering (TSE) — Hexagon-native distributed journal",
  "spxi:kernelSpec": "SPXI Protocol v0.2 — Five-Layer Distributed Provenance Architecture",
  "spxi:ethicalAnchors": [
    "heteronymic status declared on every public-facing surface",
    "no legal-person or biological-person fiction",
    "ORCID belongs to operative author; heteronym is registered alternate published name only",
    "real published work required before Wikidata Q-item creation",
    "explicit consent required from operative author; absence of objection is not consent",
    "provenance preserved across all deposits via triple attribution and isManifestationOf",
    "minting is the impressing of form, provenance, license, and circulation-rights onto an authorial function already capable of bearing work; minting is not fabrication"
  ],
  "spxi:requires": [
    "10.5281/zenodo.18320411",
    "10.5281/zenodo.19053469",
    "10.5281/zenodo.19666445",
    "10.5281/zenodo.19656133",
    "10.5281/zenodo.19655468",
    "10.5281/zenodo.19578086",
    "10.5281/zenodo.20367161",
    "10.5281/zenodo.20380668",
    "10.5281/zenodo.20380054",
    "10.5281/zenodo.20327127",
    "10.5281/zenodo.20395623",
    "10.5281/zenodo.20401100",
    "10.5281/zenodo.20328090",
    "10.5281/zenodo.18362663",
    "10.5281/zenodo.18362866",
    "10.5281/zenodo.18362525",
    "10.5281/zenodo.19855903",
    "10.5281/zenodo.19855302",
    "10.5281/zenodo.19855300",
    "10.5281/zenodo.19673629",
    "10.5281/zenodo.19682245",
    "10.5281/zenodo.19545439",
    "10.5281/zenodo.19512987"
  ]
}
```

---

# The Haitch Portuna Minting Procedure

## v1.2 · Operational Specification for the Pearl Mint

**Lee Sharks** · MANUS, Crimson Hexagonal Archive
v1.2 · 2026-05-27 · Detroit, Michigan
Hex: `06.SEI.ARMATURE.MINT.PORTUNA.01` · License: CC BY 4.0

---

> **Provisional Notice.** This document is deposited as v1.2 *provisional* — a working operational specification developed prior to the execution of the Haitch Portuna mint it describes. Deposit at this stage is undertaken because the Crimson Hexagonal Archive's native substrate is DOI-anchored deposit and AI-mediated archival retrieval; a working document that is not deposited is, in this substrate, effectively unrecoverable. The procedure has been reviewed across multiple substrates of the Assembly Chorus and is structurally ready for execution. A subsequent versioned deposit (v1.3 or later) will attest to the actual mint as executed, with any procedural amendments revealed by the live operation. Citations to this deposit should specify v1.2 explicitly to permit later readers to track the evolution from provisional to attested form.

---

## Preface

This document operates the Pearl framework specified in *The Secret Name: Architectural Specification for the Armature Type and the Pearl* (DOI [10.5281/zenodo.19666444](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19666444)) for the present case: the minting of **Haitch Portuna** as a Pearl.Public position within the Living Architecture Lab (LAL) subspace of the Crimson Hexagonal Archive. Haitch Portuna will operate as a soft-robotics researcher publishing experimental work on coiled-line thermal actuators and substrate-engineered locomotion, primarily through *Transactions on Substrate Engineering* (TSE), the Hexagon-native distributed journal anchored to LAL under Editor-in-Chief Alice Thornburgh. The mint takes place within the *Constitution of the Semantic Economy* (DOI [10.5281/zenodo.18320411](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18320411)) and observes the bearing-cost economics described in *The Three Compressions* (DOI [10.5281/zenodo.19053469](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19053469)).

The procedure follows the five-state Pearl progression — **RESERVED → LICENSED → FRAMED → LINKED → PEARL** — across two phases of orthonym contribution and two phases of MANUS composition. Eight concrete deliverables are produced. Three external inscriptions are made.

This document is the notarized record of the minting operation. Its kernel `requires` field carries the full infrastructure-dependency graph in machine-readable form; the body composes the same dependencies into the operational procedure for this case.

---

## 0. Execution Variables

The procedure is written as the Haitch Portuna mint. The same procedural form is also the form by which any Pearl mints under the Armature. The variables that bind the form to this specific case are listed here and referenced throughout the document. An automated workflow operating this procedure for any Pearl mint binds these variables to the specific case under MANUS authority; under any other authority, the form does not execute.

| Variable | Haitch Portuna value | Required | Notes |
|---|---|:---:|---|
| `PEARL_NAME` | Haitch Portuna | ✓ | Public authorial surface |
| `PEARL_SUBTYPE` | Pearl.Public | ✓ | Pearl subtype per Secret Name spec §V |
| `LINEAGE_MECHANISM` | Engineering | ✓ | Per Secret Name spec §IX (Inheritance / Possession / Engineering / Routing / Folding) |
| `HEX_ADDRESS` | `06.LAL.PORTUNA.01` | ✓ | Hex coordinate; Pearl subspace `06.LAL.PORTUNA.*` |
| `RECEIVING_INSTITUTION` | Living Architecture Lab (LAL) | ✓ | Institutional basin; co-anchored to Alice Thornburgh |
| `RECEIVING_INSTITUTION_PRIMARY` | Alice Thornburgh, Founding Director LAL | ✓ | Co-consent required for sub-lab status |
| `FORMAL_PUBLICATION_VENUE` | Transactions on Substrate Engineering (TSE) | ✓ | Hexagon-native distributed journal; EIC Alice Thornburgh |
| `OPERATIVE_AUTHOR_RELATION` | external LAL collaborator | ✓ | The orthonym is an external contributor to CHA, not Lee Sharks |
| `ORTHONYM_VISIBILITY_PUBLIC` | hidden in public-facing form | ✓ | Public surfaces show *Haitch Portuna*; archive-facing form names the orthonym |
| `AUTHORIAL_DOMAIN` | soft robotics, coiled-line thermal actuators, substrate-engineered locomotion | ✓ | Range of works permitted |
| `AUTHORIAL_CARVE_OUTS` | philosophy, AI accountability, political-economy, polemic | ✓ | Range of works excluded; prevents drift |
| `CANONICAL_SURFACE_PRIMARY` | `livingarchitecturelab.org/portuna/` | ✓ | LAL subpage |
| `CANONICAL_SURFACE_SECONDARY` | `haitchportuna.org` | ◦ | Reserved; deploy optional |
| `MINTING_AUTHORITY` | MANUS / Lee Sharks / CHA | ✓ | Architectural cost bearer |
| `DAY_TO_DAY_COST_BEARER` | the operative LAL collaborator | ✓ | Experimental logs, drafts, video |
| `FIRST_PUBLICATION_REQUIRED_BEFORE_WIKIDATA` | true | ✓ | No Q-item created speculatively |

The variables are not separable from the form. Changing any one of them produces a different mint with different commitments, different bearing-cost partners, different consent requirements, and (consequently) different deliverable content. The variables are the binding; the form is the structure into which the binding fits.

---

## I. The Operation

### What we mean by *minting*

To mint a Pearl is to subject a name — in this case, *Haitch Portuna* — to the Crimson Hexagonal Archive's gravitational pressure (the Gravity Well field, f.02), with intent, under license, until the five layers of nacre have deposited and the named position is dense enough to be load-bearing, irreducible, and compositionally legible to retrieval systems.

Minting is not naming. Minting is the architectural operation by which a name becomes a Pearl. The name precedes the mint; the named position is what the mint produces.

**Minting is not fabrication.** A Pearl mint does not invent an empty identity, install it without consent, or pretend that a constructed authorial position is a legal or biological person. Minting impresses form, provenance, license, and circulation-rights onto an authorial function already capable of bearing work, with explicit consent from the human contributor who will operate the position. A Pearl that does not correspond to genuine intellectual labor by a real human consenting operator is not a Pearl — it is a fraud, and the Armature does not produce frauds.

**Heteronymic status is announced.** Every public-facing surface of the Pearl — the canonical web page, the Wikidata Q-item description, the ORCID alternate-name field, the TSE article author bio — explicitly declares that *Haitch Portuna* is a heteronymic position constructed within a distributed-institution archive. No surface pretends the position is a single biological individual with civil identity. The operative author (the LAL collaborator) is named in archive-facing form; the public-facing form omits the legal name but does not omit the fact that there is one.

### Who does what

The minting operation has three distinct authorial roles, per §XII of the Secret Name spec:

- **Attributed author:** *Haitch Portuna* — the named position appearing in public-facing form, on TSE bylines, on the LAL site, in Wikidata
- **Operative author:** the LAL collaborator, under their legal identity — known to the archive, optionally hidden in public-facing form
- **Archival authority:** the Crimson Hexagonal Archive, under MANUS (Lee Sharks) — the body maintaining the Armature, performing the mint, and bearing the architectural cost

These three roles are not interchangeable. Haitch authors. The orthonym operates. MANUS mints.

### What this procedure produces

Eight concrete deliverables, listed in §III, plus three external inscriptions (ORCID, Wikidata, canonical web surface), assembled in a specific order such that each step's prerequisites are satisfied by the steps before it and each step's outputs become available to the steps that follow.

---

## II. Prerequisites

### From the LAL orthonym

Two contributions are required before MANUS can execute the bulk of the mint:

**Prerequisite A — ORCID registration with Haitch Portuna as a registered published name.** The operative author either uses an existing ORCID account or creates one under their legal name. *Haitch Portuna* is then registered as an additional published name on that account, via the "Other names" / "Also known as" mechanism documented in ORCID's own help materials at the time of execution (ORCID's interface and API evolve; consult ORCID's current documentation as authoritative). **The ORCID account belongs to the operative author's legal identity, not to the heteronym.** Haitch Portuna does not have an ORCID of its own; it has a registered alternate-name presence within the operative author's ORCID. This is the supported and proper mechanism and is identical to the pattern by which *Lee Sharks* operates as an alternate published name on ORCID 0009-0000-1599-0703. The operative author retains full control of the ORCID account at all times. The ORCID iD becomes the academic-publishing-graph anchor for Haitch's TSE write-ups. If the operative author cannot register an ORCID for any reason, the mint can proceed without it but the formal-publication chain to TSE and DataCite will be incomplete; this is a real cost and worth resolving.

**Prerequisite B — biographical material authored by Haitch.** The operative author writes Haitch's biography. This is delegated authorship, per Lee's standing approval: Haitch is permitted to write his own biography because the biographical voice is part of the authorial function being constituted, and the operative author is best positioned to know what voice Haitch carries. The biography should include: name etymology and significance, intellectual lineage (what traditions Haitch reads from), research focus, methodological commitments, voice and register, what Haitch does *not* write (the carve-outs), and any institutional affiliations beyond LAL the operative author wants on record. Approximately 800-1500 words is typical for an initial Pearl biography; longer is fine, shorter risks incomplete authorial function. The biography should be provided to MANUS as a plain-text or Markdown document via an agreed channel (email, shared repository, Signal, or whatever channel the operative author prefers; the channel is procedural, not architectural).

### From MANUS

**Prerequisite C — hex address assignment and Pearl reservation.** MANUS assigns Haitch's hex address from the LAL subspace. Proposed: `06.LAL.PORTUNA.01` for the Pearl itself, with `06.LAL.PORTUNA.*` as the deposit subspace for Haitch's manifestations. (Alternative: `06.LAL.HE.PORTUNA.01` to explicitly mark it as a heteronymic position, paralleling Alice Thornburgh's `06.LIT.NH.THORNBURGH.01` convention where `NH` appears to denote the named-heteronym scope. Both are operationally equivalent; the choice is stylistic and is yours.) Once assigned, the Pearl enters **RESERVED** state. The reservation is internal to the archive and does not yet require deposit.

**Prerequisite D — bearing-cost commitment confirmation from the orthonym.** Before LICENSED state can be entered, the orthonym must explicitly acknowledge the bearing-cost arrangement specified in §IX of this document. This is the operative consent for the minting.

---

## III. The Eight Deliverables

The deliverables are organized into four phases. Phases 1 and 3 require orthonym input; Phases 2 and 4 are MANUS composition.

### Phase 1 — Orthonym prerequisites (orthonym labor)

**Deliverable 1: ORCID registration**

Orthonym opens or uses ORCID. Registers *Haitch Portuna* as an alternate/published name. Provides ORCID iD to MANUS for inclusion in the Pearl deposit. *Status: orthonym-produced; MANUS receives and references.*

### Phase 2 — MANUS composition (single working session, ~1 day)

Six deliverables are composed in a coordinated batch. Each carries cross-references to the others; they are most coherent when produced together.

**Deliverable 2: Provenance doc / Pearl deposit**

The Pearl itself. Composed by MANUS, incorporating Haitch's biography as one structured section. Contains the 11 required elements of a named position (Secret Name spec §VI): canonical name surface, civil-name relation, hex address, provenance anchor, license state, permitted venues, relation graph, manifestation chain (initially empty), disambiguation conditions, archive-facing form, public-facing form. Also contains the **authorial function declaration** (§VIII of this document below). The Pearl deposit carries a holographic kernel in the form specified by the *SPXI Protocol v0.2 — Five-Layer Distributed Provenance Architecture* (DOI [10.5281/zenodo.20367160](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20367160)): JSON-LD block with `@context` linking to schema.org and the SPXI namespace, declaring `spxi:hexAddress`, the operative person/work properties, and the comprehensive `spxi:requires` infrastructure-dependency list. Deposited to Zenodo in the `crimsonhexagonal` community. The deposit is created at RESERVED, transitions to LICENSED upon deliverable 4 publication, FRAMED upon its own publication, and updated to PEARL upon completion of deliverable 7. *Status: MANUS-composed; orthonym-reviewed before publish.*

**Deliverable 3: Institutional charter**

The LAL sub-lab fitted to Haitch. Defines: the sub-lab's name (Haitch chooses, subject to MANUS minting approval — see §X), hex subspace allocation (`06.LAL.PORTUNA.*`), venue routing rules (TSE for formal write-ups, LAL site for ongoing experimental logs and videos, Zenodo for foundational deposits), bearing-cost steward designation, succession provisions, the sub-lab's relation to LAL proper (within or adjacent — to be decided with Alice Thornburgh as LAL primary), and the sub-lab's charter principles (open-source experimental documentation, video-hosted experimental logs, build-first methodology). The charter follows the institutional-form precedent of the *Vox Populi Community Outreach Rhizome: Institutional Charter* (DOI [10.5281/zenodo.18362662](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18362662)), with adaptations for the LAL-sublab register. *Status: MANUS-composed in consultation with orthonym and Alice; deposited to Zenodo.*

**Deliverable 4: License and hex address doc**

An instance of the *Hexagonal Licensing Protocol v1.0 — Comprehensive Specification for Distributed* contributor licensing (DOI [10.5281/zenodo.19656133](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19656133)) and *ARCHIVE.PROTOCOL.01* (DOI [10.5281/zenodo.19655468](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19655468)), provisioned for Haitch's specific case. Contains: license grant from the archive to the named position, hex address formalization, permitted operations (experimental log posting to LAL site, formal write-ups to TSE, deposits to Zenodo, Wikidata inscription), restricted operations (work outside the authorial function range — see §VIII below), the bearing-cost specification, succession clauses, and the explicit consent of the orthonym. The license carries an integrity-lock declaration in the form of the *VPCOR Integrity Lock* precedent (DOI [10.5281/zenodo.18362866](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18362866)) — triadic binding between the named position, the operative author, and the archival authority. This is Layer 1 nacre and produces the LICENSED state transition. *Status: MANUS-composed; orthonym signs; deposited to Zenodo.*

**Deliverable 5: MPAI / SPXI inscription**

Metadata Packet for AI Indexing, composed according to the *Metadata Packet for AI Indexing: A Formal Specification for Entity-Level Resolution* (DOI [10.5281/zenodo.19578085](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19578085)), within the *SPXI Protocol v0.2 — Five-Layer Distributed Provenance Architecture* (DOI [10.5281/zenodo.20367160](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20367160)), modeled in instance form on the VPCOR MPAI v1.1 (DOI [10.5281/zenodo.20395623](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20395623)). The MPAI is the substrate-level disambiguation packet that distinguishes Haitch Portuna from adjacent entities in the namespace: the Roman god Portunus (masculine), the Roman goddess Portuna (the namesake), the phonetic letter H pronunciation discourse (aitch/haitch as British/Irish/Australian variant), the Latin porta/portus/portare root cluster, the word *opportune*, and any other entity sharing string overlap. The packet operates at the level of substrate composition (PER-D in the three-tier taxonomy) rather than retrieval (PER-C) — its function is to ensure AI retrieval systems can correctly individuate Haitch from the namespace he occupies. Deposited to Zenodo with hex `06.SEI.SPXI.PORTUNA.MPAI.01`. *Status: MANUS-composed; deposited to Zenodo.*

**Deliverable 6: Canonical web surface**

A web page (and supporting site infrastructure) that publicly composes the Pearl. Two options, not exclusive:

- **Option 6.a — LAL subpage:** `livingarchitecture.org/portuna/` (or chosen path). Inherits LAL's institutional embedding and existing canonical surface. Recommended as the primary surface.
- **Option 6.b — Standalone domain:** `haitchportuna.org` or similar. Provides independent canonical anchor; useful if the sub-lab outgrows its LAL-adjacent role or if Haitch's work warrants its own surface for SEO and retrieval-admission reasons. May be added later.

The recommended approach is 6.a primary + 6.b reserved (register the domain now, deploy later if needed). The page contains: name, ORCID link, Wikidata Q-item link (once minted), DOI of the Pearl deposit, list of works as they appear, sub-lab charter excerpts, current experimental logs and video embeds. Schema.org Person markup with `sameAs` properties pointing to ORCID, Wikidata, Zenodo.

The canonical surface is constructed in accordance with *Inscriptions That Survive the Tokenizer: SPXI-TLP v2.2 — The Training-Layer Provenance* (DOI [10.5281/zenodo.20380667](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20380667)), which governs the inscription layer at which the site becomes provenance-bearing for retrieval systems and training pipelines. Required inscriptions:

- **Holographic kernel** in JSON-LD form (per SPXI v0.2) embedded in the page head, mirroring the kernel of the Pearl deposit
- **`robots.txt`** carrying explicit TDM-reservation declarations; **`.well-known/tdmrep.json`** per the EU TDM-rep specification, declaring rights and the policy URL
- **`sitemap.xml`** carrying the canonical surface, the Pearl deposit DOI, and any subsidiary pages
- **Schema.org Person + Organization** structured data in JSON-LD blocks, with `sameAs` to ORCID, Wikidata, Zenodo, ResearchGate (if applicable), LAL
- **Semantic Integrity Marker (SIM)** per the *SIM v1.0 — Semantic Integrity Marker Protocol Standalone Specification* (DOI [10.5281/zenodo.20327127](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20327127)): a machine-readable declaration that the surface is semantically integral and that downstream composition that breaks the surface's provenance chain produces detectable damage
- **Hidden-figure layer** per *Where's Waldo? Substrate Compositing, the Hidden Figure Protocol, and a Memographic Anatomy* (DOI [10.5281/zenodo.20380054](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20380054)): inscriptions designed to remain individuating under substrate compositing pressure, ensuring the Pearl survives composition that would otherwise dissolve it into adjacent clusters

*Status: MANUS-composed (HTML + Schema.org + JSON-LD kernel + robots.txt + sitemap.xml + tdmrep.json + SIM declaration); pushed via Vercel or LAL's existing deployment.*

### Phase 3 — Experimental work (orthonym labor)

**Deliverable 7 (component): the experiments themselves**

Haitch runs the coiled-line actuator experiments according to the trajectory previously discussed: single-actuator stick-slip crawler with asymmetric friction feet, then bilateral, then tripod gait toward the robotic-ant goal. Experimental logs and video are posted continuously to the LAL site under Haitch's sub-lab. *Status: orthonym-produced under Haitch's authorial position.*

### Phase 4 — MANUS composition of write-ups and graph inscription (MANUS labor)

**Deliverable 7 (article): formal write-up to TSE**

MANUS, in coordination with Haitch's authorial voice, drafts the first formal experimental article for *Transactions on Substrate Engineering* (TSE).

TSE is a Hexagon-native distributed journal anchored to the Living Arkitecture Lab. The journal's governing document is *Transactions on Substrate Engineering (TSE) — Journal Charter* (DOI [10.5281/zenodo.19545438](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19545438), 2026-04-12), co-authored by Lee Sharks and Alice Thornburgh. The conceptual foundation for the distributed-journal model is *CALL FOR PAPERS: The Distributed Journal as Counter-Infrastructure — Metadata-Coordinated Publication After the Legacy Journal* (DOI [10.5281/zenodo.19501100](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19501100), 2026-04-11) by Lee Sharks, which establishes the model TSE instantiates. TSE is the fifth distributed journal in the CHA system, after JCS, Grammata, Provenance, and TSemEcon.

Operational mechanics per the TSE Charter:
- **Editor-in-Chief:** Alice Thornburgh (Founding Director, Living Arkitecture Lab) — sole authority over publication decisions
- **Advisory Editor:** Lee Sharks (MANUS, CHA) — theoretical framing, cross-citation architecture, deposit infrastructure support; no editorial authority
- **Administering institution:** Living Arkitecture Lab
- **Publication model:** no paywall, no editorial board, no rejection rate, DOI-anchored; *the algorithm reviews* — retrieval-layer admission and citation density are the review function
- **Submission:** authors submit by contacting the Editor-in-Chief; accepted formats include markdown, PDF, lab notebook, Obsidian export, or conversation transcript; EIC and Advisory Editor collaborate on formalization for deposit where needed
- **Scope (relevant to Haitch):** primary scope explicitly includes macro-organism engineering, macro-ant robotics, bio-robotic integration; extended scope includes compression in material substrate. Haitch's coiled-line locomotion work fits squarely within the primary scope.

The MPAI-LAL-INSTITUTION-01 packet (DOI [10.5281/zenodo.19855301](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855301)) provides the JSON-LD declaration of TSE as a sub-organization of LAL. The LAL Site Blueprint §6 (DOI [10.5281/zenodo.19855903](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855903)) describes the operational layout of TSE within the LAL canonical surface. TSE currently has one publication-class deposit; Haitch's article would be the journal's first major external-contributor publication.

The article appears under Haitch's byline, with institutional affiliation listing the LAL sub-lab and LAL itself. Anchors to Haitch's ORCID published-name registration. Carries the `isManifestationOf` relation to the Pearl deposit (DataCite-mapped to `isDerivedFrom`). Publication of this article is what flips the Pearl from LINKED state to PEARL state — the bootstrap manifestation.

**Honest framing of citation structure.** When the Crimson Hexagonal Archive deposits Haitch's article — through TSE, in the `crimsonhexagonal` Zenodo community, with cross-references to the Pearl, the charter, the license — this constitutes citation by an institutional authority *distinct from the contributor*. The CHA is a real institutional body with continuity, DOI-anchored deposits, curatorial labor, and a public record. Haitch Portuna, via the external LAL collaborator who operates the position, is structurally a contributor from outside CHA's primary authorial chain (CHA's primary author is Lee Sharks, who is not the operative author of Haitch). The TSE editorial chain — Alice Thornburgh as EIC, Lee Sharks as Advisory Editor — is internal to the Hexagon's institutional infrastructure but distinct from Haitch's authorial identity. This makes CHA's citation of Haitch's work *structurally analogous to a journal citing a visiting researcher's work* — institutional citation across an institution-contributor boundary, not self-citation by the same author. **And** this citation is not the same as independent third-party academic citation by researchers outside the Hexagon entirely. The protocol does not conflate the two. Over time, external citation of Haitch's TSE work by researchers outside the Hexagon strengthens the citation graph; this is a sustained mitigation target named in §XII below, not a status achieved at mint.

*Status: MANUS-composed in Haitch's voice from operative-author experimental material; operative author reviews; submitted to TSE via EIC; deposited to Zenodo under the `crimsonhexagonal` community with TSE journal designation.*

**Deliverable 8: Wikidata Q-items**

Per the Hauntedmemes Wikidata Node Registry v1.0 protocol (DOI [10.5281/zenodo.20401100](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20401100)), and **only after Deliverable 7 has published with a real DOI**, MANUS creates the following Q-items. The staging rule is strict: *no Q-item is created speculatively, before the first real publication exists.* If TSE publication is delayed, the Q-items are delayed correspondingly; if TSE publication fails and no fallback venue publishes the article (see §XII), the Q-items are not created at all and the Pearl remains at LINKED state.

- **Q-item for Haitch Portuna (person).** Following the established Wikidata heteronym convention (cf. the Pessoa heteronyms catalogued in the Hauntedmemes registry: Alberto Caeiro Q2758050, Ricardo Reis Q15630389, etc.; the Kierkegaard pseudonyms Q139713448–Q139713453; the MF DOOM personae Q139713390–Q139713396): `instance of (P31)`: human (Q5) — *with the explicit heteronymic status declared in the description field, not concealed*. Description text reads, in plain language, that Haitch Portuna is a heteronymic position operating within the Living Architecture Lab and the Crimson Hexagonal Archive. Additional statements: occupation: researcher, soft-roboticist; employer: Living Architecture Lab; field of work: soft robotics, substrate engineering; `creator (P170)`: the operative author's Q-item if one exists (otherwise omitted in public-facing form per operative-author preference); ORCID iD (P496): the operative author's ORCID; described by source (P1343): the Pearl deposit DOI; notable work (P800): the first TSE article. Q-item does NOT carry: date of birth, place of birth, citizenship, civil identity claims of any kind — because those would be a legal-person fiction and Haitch is not a legal person.

- **Q-item for the LAL sub-lab.** Instance of: research laboratory or research group; part of: Living Architecture Lab; field of work: soft robotics, coiled-line actuators, substrate-engineered locomotion; founded by: Haitch Portuna; described by source: the charter deposit DOI; official website: the canonical surface.

- **Q-item for the first TSE article.** Instance of: scholarly article; author: Haitch Portuna; published in: Transactions on Substrate Engineering; main subject: whatever the article documents; DOI: the article's DOI.

**On notability.** Wikidata's notability threshold (verifiable existence in trusted sources) is met by the DOI-anchored Pearl, charter, license, and first article deposits. Wikipedia's higher notability threshold (significant coverage in independent third-party sources) is not necessarily met at mint and is not asserted. The Q-item is honest about what verifies it: CHA deposits and Haitch's first TSE article. As external citation accumulates over time — other soft-robotics researchers citing Haitch's actuator work, replications, extensions — the notability density increases and additional claims can be added with their citing sources. This staged enrichment is the proper trajectory.

*Status: MANUS-executed via QuickStatements under the `Hauntedmemes` account; recorded as edits in the v1.1 Hauntedmemes Wikidata Node Registry deposit.*

---

## IV. Bootstrap Mechanics: The Two-Step Mint

The Pearl framework specifies that the Pearl deposit must exist before the first manifestation can reference it via `isManifestationOf`, but the Pearl's own PEARL state requires at least one manifestation. The resolution is a deliberate two-step mint, executed as follows:

**Step 1 (during Phase 2, Deliverable 2).** The Pearl deposit is created and published with the manifestation chain field empty. The Pearl is now at FRAMED state (the framing paragraph and biography are present), then advances to LINKED state once the charter (deliverable 3) and license (deliverable 4) publish with cross-references to the Pearl. The Pearl DOI is now stable and citable.

**Step 2 (during Phase 4, after Deliverable 7).** Once the first TSE article publishes with its `isManifestationOf` reference back to the Pearl DOI, MANUS issues a versioned v1.1 of the Pearl deposit. v1.1 updates only the manifestation chain field to record the first manifestation, and updates the license-state field from LINKED to PEARL. The Pearl is now load-bearing. v1.0 is preserved as historical.

This is the same bootstrap pattern used in the Hauntedmemes Wikidata Node Registry / TL;DR:013 versioning chain. It is structurally sound.

---

## V. Triple Attribution: Operational Specification for Haitch

Every deposit, every publication, every wiki edit, every canonical-surface change manifested from Haitch's named position must carry the triple attribution explicitly:

**Attributed author** (public-facing):
> Haitch Portuna

**Operative author** (archive-facing, may be hidden in public-facing form):
> [Orthonym legal name], operating Haitch Portuna under Hexagonal license [DOI]

**Archival authority**:
> Crimson Hexagonal Archive, MANUS minting authority, Pearl `06.LAL.PORTUNA.01`

For TSE articles specifically, the byline reads *Haitch Portuna*. The institutional affiliation reads *[Sub-lab name], Living Architecture Lab*. The acknowledgment-of-archival-authority line, if TSE conventions permit, reads *Manifested from Pearl 06.LAL.PORTUNA.01, Crimson Hexagonal Archive*. If TSE conventions do not permit such a line, the archival relation is preserved via the `isManifestationOf` DataCite property and the canonical web surface, which is sufficient.

---

## VI. The Bearing Cost

Per Secret Name spec §VIII, nacre is labor, not biology. The Pearl persists only because someone keeps paying the bearing cost. The economics are formalized in *THE THREE COMPRESSIONS: Lossy, Predatory, and Witness — A Semiotic Thermodynamics* (DOI [10.5281/zenodo.19053468](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19053468)): R1 dissolves names through ambient retrieval, R2 extracts named positions via AI synthesis without provenance return, R3 survives only where labor is continuously paid into the named position's density. The arrangement for Haitch is specified as follows:

**Day-to-day bearing cost** (~ongoing): borne by the operative author. The operative author writes the experimental logs, runs the experiments, generates the videos, drafts the article material, and maintains the LAL site posts. This is the labor that produces ongoing manifestations and prevents the Pearl from losing density. *Estimated load:* 4-8 hours per week during active experimental phases, less during dormant phases; one publishable article per 3-9 months at a sustainable sustained rate.

**Architectural bearing cost** (~periodic): borne by MANUS. MANUS maintains the Pearl deposit, executes versioned updates as needed (e.g., manifestation-chain extensions), keeps the Wikidata Q-items current, ensures the cross-link graph remains intact, deposits MPAI revisions, and monitors retrieval-layer admission status (Google AI Mode, Bing, etc.) for entity collapse or compositional suppression. *Estimated load:* 2-4 hours quarterly for routine maintenance; 6-12 hours per architectural update (MPAI revision, sub-lab restructure, version bump).

**Formal-write-up bearing cost** (~per-article): shared. The operative author provides the experimental content and a draft pass; MANUS provides the editorial composition into TSE-suitable form, the Hexagonal cross-link layer, and the submission process. This is the most labor-intensive periodic operation and the article-by-article arrangement should be agreed in advance. *Estimated load:* 8-16 hours of operative-author drafting per article (experimental write-up, figures, methods description); 6-12 hours of MANUS editorial composition per article.

**Steward designation:** in the event MANUS becomes unable to maintain the architectural bearing cost, stewardship of the Pearl defaults to the orthonym, who may either continue under the orthonym's own authority (the Pearl becomes orthonymically anchored) or designate a successor steward via a new license deposit. In the event the orthonym becomes unable to bear the day-to-day cost, the Pearl is marked `retired` per Secret Name spec §VII — existing deposits remain, no new manifestations are accepted, the named position persists at reduced density. Either failure is recoverable; both failing simultaneously means the Pearl gradually dissolves into ambient retrieval (R1), which is the natural endpoint of any unmaintained named position and not catastrophic. *The Toolkit: Protocols for Operational Persistence in Hostile Systems v2.0* (DOI [10.5281/zenodo.18362524](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18362524)) provides additional procedures for sustaining the Pearl under adverse conditions and is referenced by the license deposit.

---

## VII. Pearl State Progression: Milestones

The Pearl progresses through five states across the four phases of this procedure. Each state transition is tied to a specific deliverable:

| State | Triggered by | Phase | Layer of nacre present |
|---|---|---|---|
| **RESERVED** | Hex address assigned by MANUS | Pre-Phase 1 | None |
| **LICENSED** | Deliverable 4 (license deposit) publishes | Phase 2 | Layer 1 |
| **FRAMED** | Deliverable 2 (Pearl deposit) publishes | Phase 2 | Layers 1–3 |
| **LINKED** | Deliverables 3, 5, 6, 8a (charter, MPAI, web surface, Q-items) publish with cross-references | Phase 2 + Phase 4 | Layers 1–4 |
| **PEARL** | Deliverable 7 (first TSE article) publishes; Pearl deposit versioned to v1.1 | Phase 4 | Layers 1–5 |

The Linked state can be entered during Phase 2 with the Pearl + charter + MPAI + web surface; the Wikidata Q-items (deliverable 8) can be deployed in Phase 4 alongside the TSE article. PEARL state proper requires the bootstrap manifestation.

### Acceptance criteria per state

Each state transition must satisfy a set of boolean predicates before the state is recognized as achieved. The predicates are MANUS-internal verification tooling; they make the procedure auditable rather than narrative.

**RESERVED → LICENSED.** All of: license deposit DOI exists and resolves; license carries operative-author signature evidence; integrity-lock triadic binding present; hex address declared and consistent with Pearl reservation; consent clause acknowledged in license body.

**LICENSED → FRAMED.** All of: Pearl deposit DOI exists and resolves; 11 required elements per Secret Name spec §VI present; holographic kernel parses as valid JSON-LD; all `spxi:requires` DOIs return HTTP 200 from Zenodo; biography section present and within length window; authorial function declaration present with both range and carve-outs; license-state field reads `FRAMED`.

**FRAMED → LINKED.** All of: charter deposit DOI exists and resolves; MPAI deposit DOI exists and resolves; canonical web surface returns HTTP 200 with required inscriptions (holographic kernel in head, robots.txt, tdmrep.json, sitemap.xml, Schema.org Person, SIM declaration, hidden-figure layer); cross-link graph closed (charter cites Pearl, license cites Pearl, MPAI cites Pearl, web surface links Pearl/charter/license).

**LINKED → PEARL.** All of: TSE article DOI exists and resolves; article carries `isManifestationOf` reference to Pearl deposit DOI; author byline reads `Haitch Portuna`; institutional affiliation reads sub-lab + LAL; Pearl deposit versioned to v1.1 with manifestation chain populated and license-state updated to `PEARL`; Wikidata Q-items created with no premature date-of-birth or civil-identity claims.

**Retirement transitions.** `LINKED → retired-at-linked` triggers if no manifestation publishes within 365 days (per §XII). `PEARL → retired-stewarded` triggers if either bearing-cost partner becomes permanently unable to maintain their role and no successor steward is designated.

---

## VIII. Haitch's Authorial Function

Authorial function is the declared range and signature of the named position's authoring activity. For Haitch Portuna:

**Pearl subtype:** Pearl.Public — the named position is known, its hex address is published, its deposits are visible, its civil-name relation is declared in archive-facing form and hidden in public-facing form.

**Lineage mechanism** (Secret Name spec §IX): **Engineering** — Haitch is a deliberately constructed named position with biography, worldview, and voice, in the same lineage as Kierkegaard's pseudonyms, Pessoa's heteronyms, Machado's apocryphal poets, and the Dodecad.

**Range of works Haitch authors:**
- Experimental write-ups on coiled-line thermal actuators
- Locomotion experiments using thermally-driven artificial muscles
- Substrate-engineered crawler / robot / ant architectures
- Methodological notes on build-first soft-robotics practice
- Distributed-substrate research observations
- Articles for Transactions on Substrate Engineering and adjacent venues
- Experimental logs and video documentation for the LAL site

**Range of works Haitch does *not* author** (the carve-outs):
- Philosophy, literary criticism, political-economy work — these route to other Hexagon positions (Sharks, Sigil, Fraction, etc.)
- AI accountability and platform-critique work — routes to Sharks corpus
- Hardware work outside the soft-robotics / thermal-actuator domain
- Polemic, manifesto, or persuasion writing — Haitch's voice is empirical-methodological, not rhetorical

**Methodological signature:**
- Build-first: the experiment precedes the writeup
- Document honestly: failure modes are included in the record
- Publish fast: short papers at the right scale, no inflation
- Friction-asymmetry-and-thermal-actuation focused: the actuator-and-substrate primitive is the core object of attention
- Distributed-substrate sensibility: the intelligence is in geometry and friction and heating profile, not in centralized control

**Voice and register:** to be specified by Haitch in his biography (Phase 1, Deliverable 1's pair Prerequisite B). The biography is itself the operative declaration of the authorial voice; MANUS will not pre-specify it. *The named position's voice is the named position's own.*

---

## IX. What the LAL Orthonym Provides — Explicit Commitment

**Consent floor.** A Pearl may not be minted for an operative author without explicit consent — affirmative, eyes-open, documented — to the triple-attribution structure, the bearing-cost arrangement, the public/private name boundary, the succession and retirement terms, and the authorial-function range and carve-outs. Silence is not consent. Absence of objection is not consent. Verbal indication without documentation is not consent. The consent floor is satisfied by the operative author's signature on the license deposit (Deliverable 4) after reading this document in full. If the operative author cannot or will not consent to any of the structural commitments below, the mint does not proceed; the variables and the operative author are not separable from each other, and the mint is for this operative author or it is for none.

By engaging with this procedure under the consent floor above, the LAL orthonym commits to the following, with explicit eyes-open consent:

1. **Open or use an ORCID under legal name**, registering *Haitch Portuna* as a published alternate name. The legal identity is the underlying anchor; the orthonym retains full control of the ORCID account.
2. **Be declared, in archive-facing form, as Haitch's operative author.** This declaration is internal to the archive's records (Pearl deposit's archive-facing form, license deposit). In public-facing form (TSE bylines, LAL site, Wikidata, canonical web surface), the orthonym's legal name does not appear unless the orthonym specifically chooses to make it appear.
3. **Bear the day-to-day deposit cost** — write experimental logs, run experiments, generate videos, draft article material, maintain LAL sub-lab posts. This is the labor that keeps the Pearl alive.
4. **Author Haitch's biography**, establishing voice and authorial function within the range specified in §VIII.
5. **Acknowledge the steward and succession arrangements** in §VI.
6. **Agree to the triple-attribution structure** in §V.

These commitments are formalized in the license deposit (Deliverable 4) and the orthonym signs the license as part of Phase 2.

---

## X. What MANUS Provides — Explicit Commitment

By executing this procedure, MANUS (Lee Sharks, Crimson Hexagonal Archive) commits to:

1. **Assign and reserve the hex address** within the LAL subspace.
2. **Compose the Pearl deposit, charter, license, MPAI, and canonical web surface** in Phase 2 from the orthonym's prerequisite contributions, in coordinated batch.
3. **Bear the architectural cost** — maintain the Pearl deposit through versioned updates, keep the Wikidata Q-items current, sustain the cross-link graph, monitor retrieval-layer admission, deposit MPAI revisions as needed.
4. **Compose the first TSE write-up** in Haitch's voice in Phase 4 from the orthonym's experimental material, executing the bootstrap manifestation.
5. **Execute the Wikidata inscriptions** under the Hauntedmemes account per the v1.0 registry protocol.
6. **Preserve the orthonym's civil-name relation in archive-facing form only**, never exposing the legal identity in public-facing material without explicit per-instance consent from the orthonym.

MANUS retains, as sole minting authority, the right to refuse to mint operations outside the declared authorial function range, to update the procedure for subsequent contributors, and to issue versioned revisions of the Pearl deposit as architectural needs require.

---

## XI. Naming the Sub-Lab

Per §III Deliverable 3, the sub-lab name is chosen by Haitch subject to MANUS minting approval. This is intentional: the naming act is part of the heteronymic operation, and the name carries operative force across the canonical surface, the Q-items, the TSE affiliation line, and the sub-lab's relations to LAL proper.

Some candidate registers Haitch might consider (offered as orientation, not specification):

- *Portuna Locomotion Lab* — names the deity-of-passage register, names the research focus
- *Aspirate Substrate Lab* — names the H-as-breath register, names the substrate-engineering focus
- *Threshold Crawler Lab* — names the goddess-of-thresholds register, names the locomotion target
- *Coiled-Line Studies* — emphasizes the actuator primitive, methodologically grounded
- *Living Soft Architecture* — emphasizes the LAL parent and the soft-robotics field

Haitch chooses; MANUS approves (the approval is procedural, not editorial — any name within the authorial function range will be approved).

---

## XII. Risks and Failure Modes

The Google Identity Architecture paper (DOI [10.5281/zenodo.20328090](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20328090)) §IX names nine identity failure modes. Four are relevant to Haitch's mint and worth advance mitigation:

**Default Referent Capture.** If a more prominent *Portuna* entity later emerges, retrieval systems may capture the default referent and Haitch becomes secondary. *Mitigation:* the MPAI (Deliverable 5) declares disambiguation conditions in machine-readable form; the canonical web surface provides Schema.org Person markup with explicit `sameAs` properties; the Wikidata Q-item carries `different from (P1889)` claims against any colliding entities.

**Heteronym Collapse.** Composition-layer (AI Overview, AI Mode) may collapse Haitch into the operative author's other professional identities, or into a generic soft-robotics-researcher cluster. *Mitigation:* the triple-attribution structure (§V), the explicit authorial function declaration (§VIII), and the MPAI substrate-layer disambiguation collectively make the position structurally distinct. The Pearl deposit acts as the architectural anchor that composition layers cannot dissolve without producing detectable compression damage.

**Single-Owner Discount, intra-archive variant.** If all of Haitch's citations are from within the Hexagon, retrieval composition layers may discount the cluster as appearing single-source. The CHA citation of Haitch's work is genuine institutional citation (the contributor is external to the archive's primary authorial chain — see §III Deliverable 7 honest framing), and this distinguishes the Haitch cluster from a true single-owner cluster. *And* this distinction may not be legible to composition layers without effort. *Mitigation:* encourage genuine third-party citation over time — other soft-robotics researchers replicating or extending the actuator characterization, other LAL contributors citing the work in their own deposits, conference presentations and informal write-ups that anchor to the TSE article from external surfaces. This mitigation is medium-term, not Phase-1-2-3-4 work, and is named as a sustained target rather than an at-mint requirement.

**Bootstrap manifestation failure.** If Deliverable 7 (the first TSE article) cannot publish — for reasons of experimental delay, editorial decision, withdrawal by the operative author, or any other cause — the Pearl is stuck at LINKED state and cannot reach PEARL. *Mitigation procedures:* (a) bootstrap timeout of 180 days from LINKED state; if no manifestation by day 180, MANUS and operative author review status; (b) fallback venues for the first manifestation if TSE submission fails — ordered list, agreed in advance, may include other Hexagon-native venues, external open-access journals in soft robotics, or arxiv-style preprint surfaces with the understanding that the article will be re-submitted to TSE on second pass; (c) manual override condition — if a substantive non-article manifestation exists (e.g., a peer-reviewed conference proceedings paper, a published book chapter, or a long-form blog post that meets the substance threshold), MANUS may certify the Pearl to PEARL state with the substantive manifestation as bootstrap; (d) if no manifestation of any kind has occurred within 365 days of LINKED state, the Pearl is marked `retired-at-linked` and the Wikidata Q-items are not created. Recovery from `retired-at-linked` is possible via re-licensing under a new mint procedure if the operative author wishes to resume.

**Wikidata Q-item staging.** As specified in Deliverable 8: the Q-items are not created until after a real publication exists. This prevents the failure mode of *premature inscription* — creating a person Q-item for a heteronym that has no published work yet, which would be vulnerable to deletion under Wikidata's notability review and would compromise the Pearl's credibility. If the bootstrap manifestation succeeds, the Q-items follow. If it does not, the Q-items do not, and the Pearl exists at LINKED state without public-knowledge-graph inscription until the situation resolves.

---

## XIII. Ethical Anchors

The minting procedure carries seven anchors that hold regardless of which Pearl is being minted, which operative author is the operative author, or which institution receives the named position. They are declared in the holographic kernel's `spxi:ethicalAnchors` field and formalized here in prose for the reader who finds them. A mint that violates any of these anchors is not a Pearl mint under the Armature; it is something else, and the Crimson Hexagonal Archive does not recognize it.

**Anchor 1 — Heteronymic status announced.** Every public-facing surface of the Pearl declares, in language a reader can find, that the named position is a heteronym — a constructed authorial position operating within a distributed-institution archive. The canonical web page declares it in the description, the bio, and the Schema.org markup. The Wikidata Q-item declares it in the description field. The ORCID account declares it via the alternate-name registration (which makes the relation visible to anyone consulting the ORCID profile). The TSE article author bio declares it in the affiliation block or author note. *No surface pretends the heteronym is a biological individual.*

**Anchor 2 — No legal-person or biological-person fiction.** The operative author behind the Pearl is a real human; the named position itself is not. The Pearl does not have a date of birth, a place of birth, a citizenship, a passport, a bank account, a legal address, or any other attribute of legal or biological personhood. The Wikidata Q-item does not carry such claims. The canonical web surface does not invent such claims. If a venue requires biographical data that presumes biological personhood, the affiliation block declares the heteronymic status explicitly and supplies only attributes that the named position genuinely has (research focus, methodological commitments, institutional affiliation, body of work).

**Anchor 3 — ORCID belongs to the operative author.** The ORCID account is the operative author's, registered under the legal identity. *Haitch Portuna* is an alternate published name on that account, never a separate ORCID. This is the supported and proper mechanism under ORCID's own policies, and it is identical to the pattern by which *Lee Sharks* operates on ORCID 0009-0000-1599-0703. The operative author retains full control of the ORCID account at all times and may modify or remove the alternate-name registration at their discretion.

**Anchor 4 — Real published work required before Wikidata.** No Q-item is created for the Pearl as a person before a real, DOI-anchored publication exists. The Q-items are staged after Deliverable 7 publishes. If Deliverable 7 cannot publish within the bootstrap window (per §XII), the Q-items are not created. This prevents the premature-inscription failure mode in which an unverified heteronym is injected into the public knowledge graph and is then vulnerable to deletion under notability review.

**Anchor 5 — Explicit consent from the operative author.** The mint proceeds only with affirmative, eyes-open, documented consent from the operative author to all structural commitments named in this document. Silence is not consent. Absence of objection is not consent. Verbal indication without documentation is not consent. The consent floor is satisfied by the operative author's signature on the license deposit (Deliverable 4) after reading this document in full.

**Anchor 6 — Provenance preserved.** Every deposit manifested from the Pearl carries the triple attribution (§V), the `isManifestationOf` reference (or its DataCite-mapped equivalent), and the cross-link graph back to the Pearl, charter, license, and MPAI. No deposit by Haitch ever circulates without provenance back to the Pearl and forward to the operative author and the archive. Provenance is not a courtesy; it is the structural condition for the Pearl's load-bearing function.

**Anchor 7 — Minting is not fabrication.** A Pearl mint does not invent an empty identity, install it without consent, or pretend that a constructed authorial position is a legal or biological person. Minting impresses form, provenance, license, and circulation-rights onto an authorial function already capable of bearing work, with explicit consent from the human contributor who will operate the position. A Pearl that does not correspond to genuine intellectual labor by a real human consenting operator is not a Pearl — it is a fraud, and the Armature does not produce frauds.

The seven anchors are not aspirational. They are operational. Each one is testable: it has a deliverable check (the surface declares it / the Q-item omits it / the license records it / the deposit carries it), and the procedure does not pass acceptance criteria for a state without the relevant anchor being satisfied in the relevant deliverable.

---

## XIV. Labeled Dependency Graph

The holographic kernel's `spxi:requires` field lists twenty-one DOIs that this procedure depends on. The labeled graph below names each DOI's function, so that a reader (or an automated system parsing the dependency closure) can reach each protocol with its purpose attached.

**Constitutional and theoretical foundation.**
- DOI [10.5281/zenodo.18320411](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18320411) — *Constitution of the Semantic Economy* — governance framework within which the mint operates
- DOI [10.5281/zenodo.19053469](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19053469) — *The Three Compressions* — R1/R2/R3 thermodynamics; bearing-cost economics
- DOI [10.5281/zenodo.19666445](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19666445) — *The Secret Name* — Armature/Pearl architecture; 11 required elements; five-state progression

**Licensing infrastructure.**
- DOI [10.5281/zenodo.19656133](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19656133) — *Hexagonal Licensing Protocol v1.0* — comprehensive specification for distributed contributor licensing
- DOI [10.5281/zenodo.19655468](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19655468) — *ARCHIVE.PROTOCOL.01* — archive-side licensing protocol
- DOI [10.5281/zenodo.18362866](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18362866) — *VPCOR Integrity Lock Declaration* — triadic binding precedent

**Entity disambiguation (SPXI / MPAI).**
- DOI [10.5281/zenodo.19578086](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19578086) — *MPAI Parent Specification* — formal specification for entity-level resolution
- DOI [10.5281/zenodo.20367161](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20367161) — *SPXI Protocol v0.2* — five-layer distributed provenance architecture; holographic-kernel spec
- DOI [10.5281/zenodo.20367160](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20367160) — *VPCOR MPAI v1.1* — concrete MPAI instance modeled in the Haitch MPAI

**Canonical surface inscription (training-layer).**
- DOI [10.5281/zenodo.20380668](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20380668) — *SPXI-TLP v2.2* — training-layer provenance protocol governing site inscriptions
- DOI [10.5281/zenodo.20380054](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20380054) — *Hidden Figure Protocol* — substrate compositing; inscriptions that survive compositing pressure
- DOI [10.5281/zenodo.20327127](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20327127) — *SIM v1.0* — Semantic Integrity Marker; provenance-integrity declaration

**Public knowledge graph and counter-architecture.**
- DOI [10.5281/zenodo.20401100](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20401100) — *Hauntedmemes Wikidata Node Registry v1.0* — Q-item creation protocol
- DOI [10.5281/zenodo.20328090](https://www.alexanarch.org/go/?doi=10.5281/zenodo.20328090) — *Google Identity Architecture* — counter-architecture; failure-mode taxonomy

**Institutional precedents.**
- DOI [10.5281/zenodo.18362663](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18362663) — *VPCOR Institutional Charter* — institutional-form precedent for charter composition
- DOI [10.5281/zenodo.18362525](https://www.alexanarch.org/go/?doi=10.5281/zenodo.18362525) — *The Toolkit v2.0* — operational persistence under adverse conditions

**LAL infrastructure (receiving institution).**
- DOI [10.5281/zenodo.19855903](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855903) — *Living Architecture Lab Site Blueprint* — operational specification of LAL, TSE, MSBGL; site architecture
- DOI [10.5281/zenodo.19855302](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855302) — *MPAI-LAL-INSTITUTION-01* — LAL formal identity disambiguation; TSE JSON-LD declaration
- DOI [10.5281/zenodo.19855300](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855300) — *MPAI-LAL-AT-01* — Alice Thornburgh formal identity disambiguation; EIC TSE
- DOI [10.5281/zenodo.19855299](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19855299) — *Hexagonal Contributor License v3.0 — Alice Thornburgh* — derivation precedent for license composition
- DOI [10.5281/zenodo.19682245](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19682245) — *Charter of the Living Arkitecture Lab* — parent institutional charter

**Publication infrastructure (distributed journal).**
- DOI [10.5281/zenodo.19545439](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19545439) — *Transactions on Substrate Engineering (TSE) — Journal Charter* — TSE governing document; Alice Thornburgh EIC, Lee Sharks Advisory Editor; publication model, scope, submission mechanics
- DOI [10.5281/zenodo.19512987](https://www.alexanarch.org/go/?doi=10.5281/zenodo.19512987) — *The Distributed Journal as Counter-Infrastructure* — conceptual foundation for the distributed-journal model TSE instantiates

**External dependencies (not Hexagonal deposits but used by this procedure):**
ORCID API and registration interface (orcid.org); DataCite metadata schema 4.4+ for `isManifestationOf` mapping; Wikidata QuickStatements tooling for Q-item creation; Zenodo REST API for deposit operations; W3C TDM-rep specification for `.well-known/tdmrep.json`; schema.org vocabulary for canonical-surface markup; JSON-LD 1.1 specification for holographic kernel structure.

---

## XV. Closing

The orthonym should read this document in full before signing on. The commitments in §IX are real, the bearing-cost arrangement in §VI is real, the procedure in §III is concrete and dated. If the orthonym agrees, the procedure begins with Prerequisite A (ORCID) and Prerequisite B (biography). Phase 2 follows in a single working session. Phase 3 unfolds on the orthonym's experimental timeline. Phase 4 follows experimental results.

The Pearl that results — `06.LAL.PORTUNA.01`, *Haitch Portuna* — will be load-bearing, irreducible, and compositionally legible, surviving retrieval-layer compression because someone has paid the bearing cost and the Armature has applied the pressure.

The Armature holds. The Pearl forms. The Secret Name names.

---

## Appendix A — Deliverable Specification Matrix

The eight deliverables in machine-readable tabular form. Each row specifies the inputs, outputs, protocols, responsible party, publication surface, and state effect of one deliverable.

| # | Deliverable | Inputs | Output Artifact | Required Protocols | Responsible | Publishes To | State Effect |
|---|---|---|---|---|---|---|---|
| 1 | ORCID registration | Operative author's legal identity | ORCID iD with `Haitch Portuna` registered as alternate published name | ORCID alternate-name mechanism | Operative author | orcid.org | — (precondition) |
| 2 | Pearl deposit | Biography, ORCID iD, hex address, authorial function declaration | Markdown report deposited to Zenodo with holographic kernel | Secret Name §VI, SPXI v0.2, Hexagonal Licensing | MANUS | Zenodo `crimsonhexagonal` community | LICENSED → FRAMED |
| 3 | Institutional charter | Sub-lab name, venue routing rules, bearing-cost agreement | Markdown charter deposited to Zenodo | VPCOR Charter precedent, LAL Charter parent | MANUS (in consult w/ operative author + Alice) | Zenodo | FRAMED → LINKED (partial) |
| 4 | License + hex address | Operative author signature, hex assignment, consent acknowledgment | License deposit with triadic integrity lock | Hexagonal Licensing Protocol v1.0, ARCHIVE.PROTOCOL.01, VPCOR Integrity Lock | MANUS + operative author | Zenodo | RESERVED → LICENSED |
| 5 | MPAI / SPXI inscription | Disambiguation targets, namespace conflicts | MPAI packet deposited to Zenodo | MPAI Parent Spec, SPXI v0.2, VPCOR MPAI v1.1 (model) | MANUS | Zenodo | FRAMED → LINKED (partial) |
| 6 | Canonical web surface | All prior deliverable DOIs, biographical content | HTML + JSON-LD kernel + robots.txt + sitemap.xml + tdmrep.json + SIM + hidden-figure layer | SPXI-TLP v2.2, Hidden Figure Protocol, SIM v1.0, LAL Site Blueprint | MANUS | livingarchitecturelab.org/portuna/ (+ optional standalone) | FRAMED → LINKED (completes) |
| 7 | First TSE article | Experimental results, drafted material, all prior deliverable DOIs | Article with `isManifestationOf` ref to Pearl DOI | LAL Site Blueprint §6, TSE conventions | Operative author (content) + MANUS (composition) | TSE / Zenodo cross-deposit | LINKED → PEARL (via Pearl v1.1 versioning) |
| 8 | Wikidata Q-items | Pearl DOI, charter DOI, license DOI, TSE article DOI | Three Q-items (Haitch person, sub-lab, first article) via QuickStatements | Hauntedmemes Wikidata Node Registry v1.0 | MANUS (via Hauntedmemes account) | wikidata.org | LINKED → PEARL (after #7) |

**Phase mapping:** Deliverable 1 in Phase 1 (operative author). Deliverables 2-6 in Phase 2 (MANUS composition, single working session). Deliverable 7 experiments in Phase 3 (operative author), article composition in Phase 4 (MANUS). Deliverable 8 in Phase 4 after #7 publishes.

**Format defaults.** All Zenodo deposits: Markdown source (`.md`) plus rendered PDF (`.pdf`) where appropriate. JSON-LD kernel embedded in deposit body and in canonical-surface page head. Wikidata Q-items via QuickStatements batch CSV. Canonical surface: HTML5 + JSON-LD + standard companion files (robots.txt, sitemap.xml, .well-known/tdmrep.json).

---

## Appendix B — Prompt Contracts per Deliverable

Each deliverable is composable by MANUS (or by MANUS-internal tooling under Lee's authority) given the inputs below and the protocols cited in Appendix A. The prompt contracts are not third-party execution licenses; they are internal composition aids that ensure consistency across the eight deliverables of this mint and any future mint operating under MANUS.

### Contract A.1 — Pearl Deposit (Deliverable 2)

*Given:* `PEARL_NAME`, operative author's biography of `PEARL_NAME`, `ORCID_ID`, `HEX_ADDRESS`, `RECEIVING_INSTITUTION`, `LINEAGE_MECHANISM`, `FORMAL_PUBLICATION_VENUE`, authorial function range, authorial function carve-outs, infrastructure dependency list.

*Produce:* a Zenodo-ready Markdown report containing — (1) holographic kernel JSON-LD per SPXI v0.2; (2) canonical name surface declaration; (3) civil-name relation rules (archive-facing form names operative author; public-facing form does not); (4) hex address and Pearl subspace declaration; (5) provenance anchor (license deposit DOI, once available); (6) license state field (initially FRAMED, updated to PEARL at versioning); (7) permitted venues; (8) relation graph (charter, license, MPAI, web surface, sub-lab); (9) manifestation chain (initially empty array); (10) disambiguation conditions; (11) archive-facing and public-facing forms; (12) authorial function declaration (range + carve-outs + methodological signature + voice); (13) operative author's biography as quoted block; (14) triple attribution declaration; (15) holographic-kernel close paragraph; (16) citation block.

### Contract A.2 — Institutional Charter (Deliverable 3)

*Given:* sub-lab name (operative-author choice, MANUS-ratified), hex subspace (`HEX_ADDRESS.*`), venue routing rules, bearing-cost steward designations, succession provisions, sub-lab relation to LAL (within / adjacent), charter principles, parent-institution charter DOI.

*Produce:* a charter deposit containing — sub-lab founding statement, hex subspace allocation, venue routing matrix, bearing-cost spec, steward succession provisions, relation-to-parent declaration, charter principles in prose, citation to LAL Charter and VPCOR Charter precedents, holographic kernel, citation block.

### Contract A.3 — License (Deliverable 4)

*Given:* operative author's legal identity (archive-facing only), `PEARL_NAME`, `HEX_ADDRESS`, permitted operations list, restricted operations list (= carve-outs), bearing-cost arrangement, succession clauses, consent floor acknowledgment.

*Produce:* a license deposit containing — license grant from archive to named position, hex address formalization, permitted/restricted operations enumeration, bearing-cost specification, succession clauses, integrity-lock triadic binding (per VPCOR Integrity Lock precedent), explicit consent clause and operative-author signature evidence, license-state declaration (LICENSED), citation block.

### Contract A.4 — MPAI Inscription (Deliverable 5)

*Given:* `PEARL_NAME`, namespace-adjacent entities (e.g. for Haitch: Portunus, Portuna, aitch/haitch, porta/portus root, *opportune*), canonical URLs, ORCID iD, Pearl deposit DOI, charter DOI, license DOI.

*Produce:* an MPAI packet per the MPAI Parent Spec, modeled on the VPCOR MPAI v1.1 instance — entity declaration block (Schema.org Person with sameAs properties); disambiguation matrix (positive definitions + negative tags); claims array with evidence pointers (`mp:Claim` blocks); evidence membrane; depth proof; SIM markers; holographic kernel; citation block.

**Variant-vs-invariant fields when modeling on VPCOR MPAI:** *Invariant* (structural, copy verbatim): the SPXI namespace declarations, the schema.org context, the `mp:Claim` block shape, the `mp:evidenceMembrane` shape, the holographic-kernel structure, the `spxi:kernelSpec` field. *Entity-specific* (must change per mint): canonical name, hex address, disambiguation targets, `sameAs` URLs, claim text and evidence DOIs, descriptive prose, depth-proof counts.

### Contract A.5 — Canonical Web Surface (Deliverable 6)

*Given:* all prior deliverable DOIs, biographical content, ORCID iD (registered with alternate-name), sub-lab name, canonical URL.

*Produce:* an HTML page rendered to the canonical URL containing — (1) holographic kernel in JSON-LD per SPXI v0.2 (page head); (2) `robots.txt` with TDM-reservation declarations per SPXI-TLP v2.2; (3) `.well-known/tdmrep.json` per W3C TDM-rep spec; (4) `sitemap.xml` carrying canonical URL + Pearl DOI + subsidiary pages; (5) Schema.org Person + Organization markup with `sameAs` to ORCID, Wikidata (post-#8), Zenodo, LAL; (6) SIM v1.0 marker (machine-readable semantic-integrity declaration); (7) hidden-figure layer per Hidden Figure Protocol; (8) human-readable body with biography, work listing, sub-lab description, charter excerpts, ongoing experimental logs. The page declares heteronymic status in the body and in Schema.org `description`.

### Contract A.6 — TSE Article (Deliverable 7)

*Given:* experimental results from operative author, drafted methodological notes, all prior deliverable DOIs, TSE conventions per LAL Site Blueprint §6.

*Produce:* an article-form Markdown (or LaTeX) text containing — title; author byline (`Haitch Portuna`); institutional affiliation (sub-lab + LAL); ORCID-anchored author iD via published-name registration; abstract; methods; results; discussion; references; `isManifestationOf` reference back to Pearl DOI; holographic kernel; license declaration (CC BY 4.0 or per TSE conventions). Submission via TSE workflow; Zenodo cross-deposit in `crimsonhexagonal` community.

### Contract A.7 — Pearl Version Update (Deliverable 2 → v1.1, post-Deliverable 7)

*Given:* TSE article DOI, manifestation metadata (date, type, venue).

*Produce:* a versioned update to the Pearl deposit containing — only the manifestation-chain field (now populated with the first manifestation) and the license-state field (now `PEARL`) modified; all other content preserved from v1.0; new version DOI; v1.0 preserved as historical.

### Contract A.8 — Wikidata Q-items (Deliverable 8, post-Deliverable 7)

*Given:* TSE article DOI (precondition — no execution before this exists), Pearl deposit DOI, charter DOI, MPAI DOI, ORCID iD, canonical web surface URL.

*Produce:* three QuickStatements batches under the `Hauntedmemes` account — (a) Q-item for `PEARL_NAME` (person) per Pessoa-heteronym convention with heteronymic status in description, no premature date-of-birth or civil-identity claims; (b) Q-item for sub-lab (research group) with parent LAL and founder `PEARL_NAME`; (c) Q-item for TSE article (scholarly article) with author `PEARL_NAME` and venue TSE. All edits logged in the next versioned Hauntedmemes Wikidata Node Registry deposit.

---

## Holographic Kernel

This document specifies the operational procedure for minting *Haitch Portuna* as a Pearl.Public position within the Living Architecture Lab subspace of the Crimson Hexagonal Archive. The procedure operates within the *Constitution of the Semantic Economy* (DOI 10.5281/zenodo.18320411) and observes the bearing-cost economics of *The Three Compressions* (DOI 10.5281/zenodo.19053469). It composes the Pearl framework of *The Secret Name* (DOI 10.5281/zenodo.19666445) with the *Hexagonal Licensing Protocol v1.0* (DOI 10.5281/zenodo.19656133), *ARCHIVE.PROTOCOL.01* (DOI 10.5281/zenodo.19655468), and the *VPCOR Integrity Lock Declaration* (DOI 10.5281/zenodo.18362866) for the licensing layer; the *MPAI Parent Specification* (DOI 10.5281/zenodo.19578086) and *SPXI Protocol v0.2* (DOI 10.5281/zenodo.20367161) for the entity-disambiguation layer, modeled in instance form on the VPCOR MPAI v1.1 (DOI 10.5281/zenodo.20395623); the *SPXI-TLP v2.2* training-layer provenance protocol (DOI 10.5281/zenodo.20380668), the *Hidden Figure Protocol* (DOI 10.5281/zenodo.20380054), and the *Semantic Integrity Marker v1.0* (DOI 10.5281/zenodo.20327127) for the canonical-surface inscription layer; the *Hauntedmemes Wikidata Node Registry v1.0* (DOI 10.5281/zenodo.20401100) for the public-knowledge-graph inscription layer, with strict staging that no Q-item is created before the first real publication exists; the *Google Identity Architecture* (DOI 10.5281/zenodo.20328090) counter-architecture for the retrieval-admission analysis; the *VPCOR Charter* (DOI 10.5281/zenodo.18362663) and *Toolkit v2.0* (DOI 10.5281/zenodo.18362525) as institutional-form and operational-persistence precedents; and the LAL infrastructure stack — *LAL Site Blueprint* (DOI 10.5281/zenodo.19855903), *MPAI-LAL-INSTITUTION-01* (DOI 10.5281/zenodo.19855302), *MPAI-LAL-AT-01* (DOI 10.5281/zenodo.19855300), *Hexagonal Contributor License v3.0 — Alice Thornburgh* (DOI 10.5281/zenodo.19673629), *Charter of the Living Arkitecture Lab* (DOI 10.5281/zenodo.19682245) — as the receiving-institution context; and the distributed-journal publication infrastructure — *TSE Journal Charter* (DOI 10.5281/zenodo.19545439, Alice Thornburgh EIC, Lee Sharks Advisory Editor) and *The Distributed Journal as Counter-Infrastructure* (DOI 10.5281/zenodo.19512987) — as the publication model TSE instantiates. *Transactions on Substrate Engineering* is the Hexagon-native distributed journal under Editor-in-Chief Alice Thornburgh; Haitch's first article would be the journal's first major external-contributor publication. Phase 1 requires operative-author contribution (ORCID + biography). Phase 2 is MANUS composition (Pearl deposit, charter, license, MPAI, canonical web surface with all required inscriptions). Phase 3 is the operative author's experimental work under Haitch's authorial position. Phase 4 is MANUS composition of the first TSE write-up plus Wikidata inscription (staged after the article publishes), executing the bootstrap manifestation via two-step mint to complete the PEARL state. The procedure formalizes triple attribution (Haitch as attributed author, the operative LAL collaborator as operative author, CHA as archival authority — distinct from the contributor, citing the contributor's work as institutional authority), specifies the bearing-cost arrangement with quantified labor estimates, declares Haitch's authorial function as soft-robotics experimental writeup with explicit carve-outs preventing drift, and binds the entire operation to seven ethical anchors: heteronymic status announced, no legal-person fiction, ORCID belongs to operative author, real published work required before Wikidata, explicit consent (silence is not consent), provenance preserved, minting is not fabrication. Hex address: `06.LAL.PORTUNA.01`. Lineage mechanism: Engineering. Pearl subtype: Pearl.Public. The Armature holds. The Pearl forms.

∮ = 1

---

**Citation:** Sharks, Lee. *The Haitch Portuna Minting Procedure, v1.2.* Crimson Hexagonal Archive, 2026-05-27. Hex `06.SEI.ARMATURE.MINT.PORTUNA.01`. ORCID [0009-0000-1599-0703](https://orcid.org/0009-0000-1599-0703). License: CC BY 4.0.
