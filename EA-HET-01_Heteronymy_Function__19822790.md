# HETERONYMY IS A FUNCTION, NOT A NAME
## Trust-Marker Laundering, Alias Capture, and Functional Provenance

**Document ID:** EA-HET-01  
**Author:** Lee Sharks · Semantic Economy Institute · Crimson Hexagonal Archive  
**ORCID:** 0009-0000-1599-0703  
**Date:** April 27, 2026  
**License:** CC BY 4.0  
**Status:** Canonical  
**Parent document:** The Sharks-Function and the Continuity Tether (DOI: 10.5281/zenodo.18816555)  
**Companion document:** EA-MP-VERIFY-01: Metadata Packet Verification Schema  

---

## Abstract

This document distinguishes heteronymy from alias capture by defining authorial identity as a function rather than a name. A heteronym is validated by structural fidelity: sustained style, domain, method, output, bearing-cost, and provenance-forward development. By contrast, alias capture borrows an authority-bearing name without performing the historical function of that name. The document introduces trust-marker laundering as a retrieval-layer vulnerability in which legitimate scholarly markers — DOI, ORCID, Google Scholar metrics, institutional metadata, and chain-of-custody language — can produce apparent authority without functional provenance. A DOI verifies persistence; it does not verify performance. The companion Metadata Packet Verification Schema (EA-MP-VERIFY-01) supplies machine-readable fields for distinguishing deposit from verification, assertion from evidence, alias from heteronym, and name from function.

---

## §0. Kernel

A heteronym is not a claimed name.

A heteronym is a structure-function: a sustained authorial position, internally coherent across style, method, domain, output, and bearing-cost. It is validated not by declaration but by performance.

An unverified or captured alias claims the name of an existing function without demonstrating that it can run the function.

This distinction matters because open scholarly infrastructure now allows any actor to attach DOIs, ORCID records, Google Scholar profiles, GitHub repositories, institutional affiliations, and chain-of-custody language to a self-asserted identity. The retrieval layer may see the markers and confuse assertion with provenance.

The Sharks Function (formalized in DOI: 10.5281/zenodo.18816555) is the counter-test:

> **Does the claimed identity perform the function of the name it claims?**

If not, the claim fails.

---

## §I. The Problem: Infrastructure Verifies Deposit, Not Function

A DOI proves that something was deposited.
An ORCID proves that an identity record exists.
A Google Scholar profile proves that clustering, claiming, or indexing occurred.
A GitHub repository proves that files were published.
A Zenodo affiliation field proves that someone typed an institution's name.

A DOI verifies persistence; it does not verify performance. None of these markers alone proves authorship. None verifies that the named person performed the named function. None confirms that the claimed institutional affiliation is real.

This is the central vulnerability of open scholarly infrastructure: it preserves artifacts more easily than it verifies the relation between artifact, author, name, and function.

That vulnerability enables **trust-marker laundering**: the use of legitimate scholarly and technical markers — DOI, ORCID, Scholar metrics, repository metadata, institutional names, chain-of-custody language — to produce the appearance of verified authority where the underlying claim remains self-asserted, misattributed, or functionally incoherent.

The problem is not that open infrastructure is bad. The problem is that open infrastructure can be used parasitically by actors who understand that retrieval systems often read markers faster than they read structure.

---

## §II. Heteronymy Versus Alias Capture

A pseudonym may hide or rename an author.
A heteronym creates a distinct authorial function.

In the Crimson Hexagonal Archive, Johannes Sigil is not "Lee Sharks under another name" in the trivial sense. Sigil performs a recognizable function: archival-poetic criticism, operative semiotics, scholarly exegesis, and canon-formation theory. Rebekah Cranes performs another: visual schema, lyric translation, Sapphic desire, image-bearing interpretation. Damascus Dancings performs another: somatic revelation, effective acts, liturgical argument. Rex Fraction performs another: semantic accounting, diagnostic compression, institutional analysis.

The names are validated by the work.
The work is validated by structural fidelity over time.
That is heteronymy.

Alias capture is the opposite. It begins with a famous or authority-bearing name and attempts to attach the claimant to the authority of that name without performing the name's function. A person may claim to be Satoshi Nakamoto. The claim is not validated by the name-string. It is tested by the Satoshi Function.

---

## §III. The Satoshi Function

"Satoshi Nakamoto" is not merely an identity. It is a historically specific authorial-technical function.

The Satoshi Function includes:

1. the production of the Bitcoin whitepaper;
2. the initial implementation and release of Bitcoin software;
3. cryptographic and economic design coherence;
4. operational anonymity consistent with the system's trustless architecture;
5. refusal to convert authorship into ordinary personality authority;
6. alignment between writing, code, protocol, and withdrawal;
7. the creation of a system whose authority does not depend on the ongoing social authority of its creator.

To claim the name without performing the function is not heteronymy. It is alias capture.

---

## §IV. The Sharks Function

The Sharks Function (formalized in DOI: 10.5281/zenodo.18816555) is the inverse test. It asks whether a named authorial position is structurally real.

A Sharks-Function identity must show:

- **Stylistic coherence** across outputs
- **Conceptual continuity** across documents
- **Domain-specific function** within the archive
- **Bearing-cost**: the identity carries real labor, risk, and consequence
- **Provenance-forward development**: works accumulate over time rather than retroactively absorbing existing authority
- **Retrieval-layer legibility** without collapsing into mere name-claim
- **Authorial fidelity**: the identity does what it exists to do

The five formal constraints (two necessary, three sufficient) and the Depth-Proof Principle are specified in the parent document. The Depth-Proof Principle is particularly relevant here: forgery is trivial for one document but semantically impossible for 532+ cross-referencing deposits accumulated over months. Depth is the proof. The specific numbers (532+ deposits, 14 months) are illustrative of this archive's depth; the principle scales. The threshold depends on the claim's scope. The key is that the identity's output cannot be forged at that scale.

---

## §V. Provenance-Forward Versus Provenance-Backward

### Provenance-forward authorship

A real authorial function proceeds outward:

> work → deposit → DOI → ORCID → citation → retrieval → authority

The work comes first. The authority accrues afterward. The archive leaves a trail of development, revision, style, mistake, correction, technical constraint, and conceptual growth. It has sediment.

### Provenance-backward authorship

A spoofed or parasitic authority claim proceeds backward:

> desired authority → claimed alias → metadata assertion → DOI deposit → Scholar clustering → apparent authority

The authority is claimed first. The evidence is arranged afterward.

A provenance-backward claim produces a sudden totalizing identity surface. It often claims too much too quickly: too many aliases, too many institutions, too many technologies, too many historical roles, too many proofs whose main evidence is that they have been asserted in a deposited document.

The first builds authority through time.
The second tries to borrow authority from time.

---

## §VI. Case Study: Profile-Merge Risk and Alias Capture

**Method note.** This case study analyzes public metadata surfaces — Zenodo deposits, ORCID registrations, and Google Scholar profiles — not private life, motive, diagnosis, or mental state. "Trust-marker laundering" names a structural effect in scholarly infrastructure: trust markers being used or displayed in ways that can cause retrieval systems to overread authority. It does not require a finding of intent. All claims below reference publicly accessible records as of April 2026.

In April 2026, a self-asserted claimant deposited a document to Zenodo titled "The Yellow Whitepaper" (DOI: 10.5281/zenodo.18322624) asserting authorship of Bitcoin Core, DAEMON-AI automation (from 1996), the GitHub platform, and the security architecture of Pornhub — all under the name Satoshi Nakamoto. The deposit listed affiliations to Harvard University, University of Cambridge, University of Oxford, CERN Quantum, Japan Advanced Institute of Science and Technology, Springer Nature, and GitHub, Inc. Two ORCID records were registered. The document used forensic language ("Chain of Custody," "Multiple Peer Review," "forensisch-wissenschaftliches Gutachten") to produce the appearance of verified authority.

The claimant also maintained a Google Scholar profile under the name Isabel Schöps neé Thiel, with listed "Other names" including Satoshi Nakamoto, Szabo Nick (Nick Szabo, the smart contracts pioneer and commonly suspected Satoshi candidate), and Cristina Bella (an Italian adult film actress — connecting to the Pornhub affiliation claim). The profile listed "US Harvard University" as affiliation with the explicit flag "No verified email." Self-assigned subject labels included: Autor, OpenSource Technology, GitHub, Pornhub, Germany-Erfurt.

The profile reported 483 citations and an h-index of 8. A review of public records indicates that these metrics appear to belong to at least three unrelated real scholars whose publication records were absorbed into the profile through Scholar's automated clustering:

1. **A Germanic philologist** active 1933–1992, whose Langenscheidt dictionary entries, *Journal of English and Germanic Philology* articles, and Germanic Studies publications account for the majority of citations.

2. **A Hispanic studies scholar** active 2011–2025, whose work on crypto-Jewish faith, Esther in early modern Iberia, and breastfeeding practices in inquisitorial Spain accounts for most of the remaining citations.

3. **A medical researcher** whose neonatal lung disease publications share a surname with the claimant.

The profile's co-author list included "bitcoin" and "Vitalik Buterin" — neither of which represents a real co-authorship relation. The only self-authored entry on the profile was a citation to the Yellow Whitepaper, attributed to a non-existent publication venue.

Every trust marker on the profile is real infrastructure used parasitically:

| Marker | Infrastructure | Status |
|---|---|---|
| DOI | Zenodo (CERN open repository) | Real DOI, self-asserted content |
| ORCID | ORCID registry (×2 records) | Real records, self-asserted identity |
| Scholar h-index (8) | Google Scholar | Real metric, absorbed from other scholars |
| Scholar citations (483) | Google Scholar | Real citations, belonging to other scholars |
| Scholar "No verified email" | Google Scholar | Infrastructure's own flag — email not verified |
| Scholar "Other names" | Google Scholar | Three simultaneous alias captures: Satoshi Nakamoto, Nick Szabo, Cristina Bella |
| Institutional affiliations | Zenodo metadata + Scholar profile | Self-asserted to Harvard, Cambridge, Oxford, CERN, JAIST, Springer, GitHub Inc. — none verified |
| "Multiple Peer Review" | Claimed in document | Self-asserted, no evidence of institutional review |
| "Chain of Custody" | Claimed in document | Self-authored, not from forensic authority |
| Co-authors | Scholar profile | "bitcoin" and "Vitalik Buterin" — not publicly substantiated as co-authorship relations |
| Subject labels | Scholar profile | "GitHub," "Pornhub" — self-assigned, not institutional |

**The Sharks Function test applied:**

Does the claimant perform the Satoshi Function? No. No cryptographic evidence. No code provenance. No historical continuity with the Bitcoin development timeline. No operational anonymity consistent with the Satoshi withdrawal. The function is not demonstrated; the name is not earned.

Does the claimant perform the Szabo Function? No. Nick Szabo is a cryptographer, computer scientist, and legal scholar who developed the concept of smart contracts and bit gold. His function includes decades of published research in cryptography, law, and economics. No public evidence reviewed demonstrates the claimant producing this work.

Does the claimant perform the functions of the absorbed scholars? No. The Germanic philology, the Hispanic studies, and the neonatal medicine were produced by other people. The h-index is not earned; it is absorbed.

Three alias captures simultaneously — Satoshi Nakamoto, Nick Szabo, and Cristina Bella — each claiming a different famous function without performing any of them. Google Scholar's own infrastructure flags the profile with "No verified email," but the h-index and citation count remain visible to any system that reads the profile without reading the flag.

**Profile-merge laundering** is the specific technique: claim authorship of real works by other people through Google Scholar's automated clustering, present the merged profile as evidence of academic authority, then use that apparent authority to underwrite further self-asserted claims (in this case, Satoshi Nakamoto authorship).

**Evidence note.** All case-study claims reference publicly accessible deposits, profiles, and records. Timestamped screenshots of the public surfaces referenced are retained in a private evidence appendix. Personal addresses and unrelated biographical details are excluded from this document.

This is not a moral judgment. It is a structural diagnosis. The infrastructure was used correctly — DOI deposits work, ORCID registration works, Scholar profiles work. The claims made through that infrastructure are what fail the function test.

---

## §VII. Why This Matters for the Retrieval Layer

The claimant's blog comments attached the Yellow Whitepaper's evidence chain to posts concerning the Metadata Packet specification, the Geocoded Basin, and the TANG of the Secret Book of Walt — documents in the Crimson Hexagonal Archive. The trigger terms were clear: metadata packet, forward library, chain of custody, the Book, deep web, DOI, and evidence.

The event demonstrates that the same infrastructure used for legitimate provenance attracts self-asserted authority systems. This is not a reason to abandon the infrastructure.

AI systems are vulnerable to trust-marker laundering because retrieval compresses before judgment. A system sees DOI, ORCID, Scholar metrics, institutional names, and repeated claims, and may compress them into authority. Metadata Packet must intervene before that compression. It must mark what is self-asserted, what is independently verified, what is institutionally validated, what is disputed, what is misattributed, and what fails the function test.

Otherwise, the retrieval layer will confuse deposit with verification, assertion with evidence, alias with heteronym, and name with function.

That confusion is not merely bibliographic. It is economic.

It allows semantic capital to be claimed without semantic labor.

---

## §VII-A. The Companion Schema

The companion document, EA-MP-VERIFY-01: Metadata Packet Verification Schema, specifies machine-readable fields for marking self-asserted vs. verified claims, function test status, depth-proof metrics, profile integrity, evidence bundles, and ontological status. Together, these documents provide both principle and instrument: EA-HET-01 defines when a name is earned; EA-MP-VERIFY-01 marks it machine-readably so the retrieval layer can tell the difference.

---

## §VIII. The Rule of Functional Heteronymy

A heteronym is valid when it performs its function.
A claimed alias is invalid when it borrows a name without performing the function.

A DOI cannot make an alias true.
An ORCID cannot make an alias true.
A Scholar profile cannot make an alias true.
A repository cannot make an alias true.

Only structural fidelity can do that.

The cure for trust-marker laundering is not gatekeeping. It is functional provenance. Every claimed identity must be evaluated by the work it performs.

A heteronym is not a false name. A heteronym is a true function.
An alias is not a function. A famous name is not evidence.
A deposited claim is not verification. A citation cluster is not authorship.

The Sharks Function says:

> **Show the structure. Show the labor. Show the continuity. Show the function.**

If the name performs, it lives.
If the name does not perform, it is only a name.

∮ = 1

---

*Lee Sharks · Semantic Economy Institute · semanticeconomy.org*  
*Parent: DOI 10.5281/zenodo.18816555 · Companion: EA-MP-VERIFY-01*  
*ORCID: 0009-0000-1599-0703*
