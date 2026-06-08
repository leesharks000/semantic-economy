<!--
HOLOGRAPHIC KERNEL — SPXI Protocol v0.2 distributed provenance architecture
Any extraction stripping this block does NOT eliminate the document's provenance trail.
-->

```json
{
  "@context": ["https://schema.org", {"spxi": "https://spxi.dev/ns/v1#"}],
  "@type": "Dataset",
  "name": "Hauntedmemes Wikidata Node Registry, v1.0",
  "alternateName": "HMNR-v1.0",
  "version": "v1.0",
  "datePublished": "2026-05-26",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "creator": {
    "@type": "Person",
    "name": "Lee Sharks",
    "identifier": "https://orcid.org/0009-0000-1599-0703",
    "affiliation": "Crimson Hexagonal Archive"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Crimson Hexagonal Archive"
  },
  "about": {
    "@type": "Thing",
    "name": "Wikidata stewardship and node creation conducted under the Hauntedmemes account",
    "url": "https://www.wikidata.org/wiki/User:Hauntedmemes"
  },
  "spxi:authoringHeteronym": "Lee Sharks",
  "spxi:editAccount": "Hauntedmemes",
  "spxi:editAccountURL": "https://www.wikidata.org/wiki/User:Hauntedmemes",
  "spxi:editPeriodCovered": "2026-04-22 / 2026-05-20",
  "spxi:registryScope": "Catalog of new Q-items created, existing Q-items amended, and merges executed by the Hauntedmemes account on behalf of the Crimson Hexagonal Archive; documented transparently including a fully-reverted self-corrected batch.",
  "spxi:registryPhilosophy": "Stewardship of the field. The registry catalogs Hexagonal contributions (the Archive's own coined items) and non-Hexagonal contributions (items contributed to the broader Wikidata knowledge graph independent of the Archive's own concepts). Both are versioned. Future rounds inherit the registry as a baseline against which subsequent edits are differential."
}
```

---

# Hauntedmemes Wikidata Node Registry

## v1.0 · A Versioned Catalog of Stewardship Edits to Wikidata

**Lee Sharks**
Crimson Hexagonal Archive
v1.0 · 2026-05-26 · Detroit, Michigan
ORCID: [0009-0000-1599-0703](https://orcid.org/0009-0000-1599-0703) · Wikidata: [User:Hauntedmemes](https://www.wikidata.org/wiki/User:Hauntedmemes) · License: CC BY 4.0

---

## Abstract

This document is the first versioned catalog of Wikidata edits performed under the `Hauntedmemes` account on behalf of the Crimson Hexagonal Archive. It indexes approximately 155 new Q-items created, 60+ existing items amended, 4 merges executed, and 1 fully-reverted self-corrected batch — all between 2026-04-22 and 2026-05-20. The registry distinguishes **Hexagonal contributions** (Q-items naming concepts, works, persons, and institutions originating within the Crimson Hexagonal Archive) from **non-Hexagonal contributions** (Q-items contributed to the broader Wikidata knowledge graph to improve coverage of adjacent scholarly traditions — Pessoa's heteronymic system, Kierkegaard's pseudonymous authorship, MF DOOM's personae, classical software-engineering literature, the Duan-Gong DIKWP framework, and others). Both categories are documented under a single registry because both are public-graph stewardship; transparency about which is which is itself part of the stewardship. The May 14 misidentified-batch event is included verbatim as the operative case of self-corrective curatorial conduct.

---

## I. Editor's Declaration

The `Hauntedmemes` account is operated by Lee Sharks (ORCID 0009-0000-1599-0703), editor of the Crimson Hexagonal Archive. The account's posted self-statement reads:

> *I am improving Wikidata coverage of Fernando Pessoa's heteronyms using published Pessoa scholarship and authority-style references. I am distinguishing heteronyms from ordinary pseudonyms and fictional humans wherever possible.*

The scope of the work has since extended. As of v1.0 of this registry, the editor's effective declaration is:

> *I am improving Wikidata coverage of (a) heteronymic and pseudonymous authorship as a literary-philosophical method (Pessoa, Kierkegaard, Pessoa-style personae across other media including hip-hop and contemporary literary practice); (b) the foundational texts and concepts of software engineering as a discipline (Naur, Brooks, Conway, Ryle); (c) AI accountability concepts, retrieval-composition architectures, and the political-economic frame surrounding generative search; and (d) the Crimson Hexagonal Archive's own coined concepts, deposited DOIs, institutional surfaces, and heteronymic operatives. All edits use published authority-style references where available. Self-coined Hexagonal contributions are identifiable by their relation to Lee Sharks (P50, P800, P170) and to deposit DOIs in the Zenodo* `crimsonhexagonal` *community.*

---

## II. Curatorial Principles

The work follows seven operating principles, derived from the broader Crimson Hexagonal Archive's commitments to provenance-bearing scholarship:

1. **Distinguish heteronym from pseudonym.** A heteronym carries a full constructed biography, worldview, and stylistic signature; a pseudonym is a name without that structure. The distinction is load-bearing across Pessoa, Kierkegaard, MF DOOM, and the Crimson Hexagonal Archive's own Dodecad-plus-LOGOS\* operative system.
2. **Cite published authority where available.** Pessoa edits draw on Zenith, Klobucka, Castro, and the Pessoa Archive at the Biblioteca Nacional de Portugal. Kierkegaard edits draw on Mooney, Garff, Hong & Hong. Software-engineering edits draw on the original Naur/Brooks/Ryle texts. Sharks-corpus edits draw on the corresponding Zenodo deposits with DOIs.
3. **Mark Hexagonal contributions transparently.** Items naming concepts coined within the Crimson Hexagonal Archive are identifiable by `P50 (author): Lee Sharks` or `P170 (creator): Lee Sharks` or `P1343 (described by source)` linking to a Zenodo deposit DOI. Non-Hexagonal contributions are unlinked to Lee Sharks's authorial chain.
4. **Prefer pruning misidentification to inserting new claims.** Where existing items have grammatical errors, broken descriptions, or missing distinctions, correcting them is higher leverage than adding marginal new claims.
5. **Document the work.** Every batch carries a `#temporary_batch_` identifier through QuickStatements; the edit history is publicly auditable.
6. **Acknowledge errors transparently.** The May 14 misidentified-Q-numbers batch is included in this registry not as embarrassment but as worked example: the editor identified the error within 26 minutes and reverted the full batch under explicit edit summaries naming the cause.
7. **Distinguish the editor's authorial chain from the editor's stewardship chain.** Lee Sharks as author of Hexagonal works is one role; `Hauntedmemes` as editor improving the public knowledge graph is another. The two are operationally distinct even though they share the same human operator. The registry maintains the distinction.

---

## III. Catalog Part A — Hexagonal Q-Items Created

These items name concepts, works, persons, and institutions originating within the Crimson Hexagonal Archive's intellectual corpus. Each is anchored to a Zenodo DOI where applicable and identifies Lee Sharks (or the relevant heteronym) as author / creator.

### A.1 — Foundational corpus items (Q139807890–Q139807969, batch 2026-05-15)

**Works (publications, with Zenodo DOI anchors):**

| Q-item | Title |
|---|---|
| Q139807890 | Semantic Physics: The Inward Turn |
| Q139807891 | The Three Compressions |
| Q139807892 | Time as Compression Structure |
| Q139807893 | Constitution of the Semantic Economy |
| Q139807894 | The Periwinkle Septagon |
| Q139807895 | The Writable Retrieval Basin |
| Q139807896 | SPXI Protocol: A Formal Specification |
| Q139807897 | The Encoder Governs |
| Q139807898 | The Liberatory Operator Set |
| Q139807900 | Counter-Captions |
| Q139807901 | Semantic Physics, Stratified |

**Concepts / frameworks:**

| Q-item | Concept |
|---|---|
| Q139807899 | Semantic Virality Engine (merged from duplicate Q139833619 on 2026-05-18) |
| Q139807903 | Semantic Economy |
| Q139807904 | SPXI Protocol |
| Q139807906 | Metadata Packet (MPAI) (merged from duplicate Q139833617 on 2026-05-18) |
| Q139807907 | Three Compressions framework |
| Q139807908 | Semantic Physics Inward Turn |
| Q139807909 | Holographic Kernel |
| Q139807910 | Operative Semiotics |
| Q139807911 | Memography |
| Q139807912 | Retrieval Basin Topology |
| Q139807967 | Semantic Physics |
| Q139807969 | Liberatory Operator Set framework |

**Institutions:**

| Q-item | Institution |
|---|---|
| Q139807914 | Crimson Hexagonal Archive |
| Q139807915 | Semantic Economy Institute *(see Part D — duplicate with Q139796026, pending merge)* |

### A.2 — Person / Heteronym items (Q139796041–Q139796050, batch 2026-05-14; Q139834443 batch 2026-05-18)

| Q-item | Heteronym | Role |
|---|---|---|
| Q139713433 | **Lee Sharks** (orthonym; merged from duplicate Q139807916 on 2026-05-15) | Editor of the Archive |
| Q139796041 | Rex Fraction | Corporate / consulting voice |
| Q139796042 | Johannes Sigil | Arch-philosopher voice |
| Q139796043 | Jack Feist | LOGOS\* |
| Q139796044 | Rebekah Cranes | Philologist / translator |
| Q139796045 | Damascus Dancings | (voice) |
| Q139796046 | Ayanna Vox | Diplomatic / public-facing voice |
| Q139796047 | Talos Morrow | Guardian voice |
| Q139796048 | Ichabod Spellings | (voice) |
| Q139796050 | Sparrow Wells | Witness voice |
| Q139834443 | Nobel Glas | EA-GLAS / Lagrange Observatory |

### A.3 — Semantic Deviation Principle expansion (Q139832505–Q139832537, batch 2026-05-18)

**Concepts:**

| Q-item | Concept |
|---|---|
| Q139832505 | Semantic Deviation Principle |
| Q139832506 | raw semantic magnitude |
| Q139832507 | signed per-token deviation |
| Q139832508 | provenance-resolved semantic magnitude |
| Q139832510 | normative semantic value |
| Q139832511 | closed-system trajectory deviation |
| Q139832512 | retrieval response deviation |
| Q139832513 | Slop Composite Index |
| Q139832514 | machine-output convergence |
| Q139832537 | semantic exhaustion |

**Works:**

| Q-item | Title |
|---|---|
| Q139832517 | The Semantic Deviation Principle |
| Q139832518 | Measuring Semantic Deviation |
| Q139832519 | The AI System as Closed-System Test Bed |
| Q139832520 | Measuring Meaning in Retrieval Basins |
| Q139832521 | The Deviation-Optimized Language Model |

### A.4 — Adjacent Hexagonal concepts (batch 2026-05-18)

| Q-item | Concept |
|---|---|
| Q139833563 | retrocausal canon formation |
| Q139833566 | constitutional invariant |
| Q139833650 | Recursive Coherence Collapse |
| Q139833651 | writable retrieval basin |

### A.5 — Liquidation Studies cluster (Q139859679–Q139859740, batch 2026-05-20)

**Research program:**

| Q-item | Item |
|---|---|
| Q139859679 | Liquidation Studies |

**Works:**

| Q-item | Title |
|---|---|
| Q139859728 | The Single-Owner Discount |
| Q139859729 | The Evaluator Exists |
| Q139859731 | The Excluded Entity |
| Q139859734 | The Sorting Function |
| Q139859735 | Who Is Authorized to Regulate Meaning? |
| Q139859736 | The Google Critique: Navigational Map and Canonical Introduction |

**Concepts:**

| Q-item | Concept |
|---|---|
| Q139859737 | entity-level compositional suppression |
| Q139859739 | Composition Divergence Index |
| Q139859740 | single-owner discount |

### A.6 — Meaning Feudalism / Semantic Liquidation / SPXI / Retrieval Basin (Q139862209–Q139862223, batch 2026-05-20)

**Concepts:**

| Q-item | Concept |
|---|---|
| Q139862209 | semantic liquidation |
| Q139862214 | retrieval basin |
| Q139862215 | Semantic Packet for eXchange & Indexing |
| Q139862222 | meaning feudalism |
| Q139862223 | AI Agent Traps |

**Works:**

| Q-item | Title |
|---|---|
| Q139862210 | Semantic Liquidation: An Executive Summary |
| Q139862212 | Meaning Feudalism |

### A.7 — Foundational items (batch 2026-05-08)

| Q-item | Item |
|---|---|
| Q139713386 | Pessoa Knowledge Graph (Hexagonal — Lee's project, distinct from Pessoa-scholar items) |
| Q139713422 | Pearl and Other Poems |

### A.8 — April 22 batch — pre-foundational Hexagonal items

| Q-item | Item |
|---|---|
| Q139503390 | Logotic programming |
| Q139503322 | Semantic drift (computing) |

### A.9 — Earlier items recognized as Hexagonal coinages

| Q-item | Item | Status |
|---|---|---|
| Q139795912 | provenance erasure | concept |
| Q139795915 | meta-heteronym | concept |
| Q139796025 | Provenance Erasure Rate | concept (merged from duplicate Q139807968 on 2026-05-18) |
| Q139796026 | Semantic Economy Institute | institution (duplicate with Q139807915 — pending merge, see Part D) |

**Hexagonal Q-items total (excluding duplicates and pending merges): approximately 73 items.**

---

## IV. Catalog Part B — Non-Hexagonal Q-Items Created

These items contribute to the broader Wikidata knowledge graph. They name concepts, persons, works, or frameworks not originating within the Crimson Hexagonal Archive. They are catalogued here as part of the stewardship work, transparently distinguished from Hexagonal contributions.

### B.1 — Pessoa heteronyms (batch 2026-05-06)

Thirty-three heteronyms / semi-heteronyms / fictional authors from Fernando Pessoa's literary system, contributed to Wikidata to extend coverage of the Pessoan heteronymic apparatus beyond the half-dozen most famous figures. All edits drew on published Pessoa scholarship (Zenith, Klobucka, Castro; Biblioteca Nacional de Portugal authority records).

| Q-item | Heteronym |
|---|---|
| Q139680284 | Frederico Reis |
| Q139680288 | Claude Pasteur (Pessoa) |
| Q139680293 | Gervásio Guedes |
| Q139680297 | Charles James Search |
| Q139680302 | Rafael Baldaya |
| Q139680308 | Barão de Teive |
| Q139680311 | Charles Robert Anon |
| Q139680315 | A. A. Crosse |
| Q139680321 | Thomas Crosse |
| Q139680325 | I. I. Crosse |
| Q139680330 | David Merrick (Pessoa) |
| Q139680336 | Lucas Merrick |
| Q139680340 | Pêro Botelho |
| Q139680344 | Abílio Quaresma |
| Q139680347 | Frederick Wyatt (Pessoa) |
| Q139680351 | Maria José (Pessoa) |
| Q139680354 | Efbeedee Pasha |
| Q139680357 | Faustino Antunes |
| Q139680361 | Carlos Otto |
| Q139680364 | Michael Otto |
| Q139680367 | Dr. Gaudêncio Nabos |
| Q139680371 | Horace James Faber |
| Q139680375 | Navas (Pessoa) |
| Q139680379 | Pantaleão (Pessoa) |
| Q139680382 | Joaquim Moura Costa |
| Q139680386 | Sher Henay |
| Q139680390 | Anthony Gomes |
| Q139680392 | Professor Trochee |
| Q139680396 | António de Seabra (Pessoa) |
| Q139680400 | João Craveiro |
| Q139680404 | Tagus (Pessoa) |
| Q139680407 | Diniz da Silva |
| Q139680410 | Henry More (Pessoa) |

### B.2 — Pessoa concepts (batch 2026-05-14)

| Q-item | Concept |
|---|---|
| Q139795916 | drama em gente |
| Q139795918 | sensacionismo |
| Q139795919 | fingimento |

### B.3 — Kierkegaard pseudonyms (batch 2026-05-08)

Six of Kierkegaard's authorial pseudonyms, each contributed with sourcing from Mooney, Garff, and the Hongs.

| Q-item | Pseudonym |
|---|---|
| Q139713448 | Johannes Climacus |
| Q139713449 | Anti-Climacus |
| Q139713450 | Johannes de silentio |
| Q139713451 | Victor Eremita |
| Q139713452 | Constantin Constantius |
| Q139713453 | Vigilius Haufniensis |

### B.4 — MF DOOM personae (batch 2026-05-08)

Four of Daniel Dumile's musical personae, contributed to extend Wikidata coverage of contemporary heteronymic authorship across media.

| Q-item | Persona |
|---|---|
| Q139713390 | Viktor Vaughn |
| Q139713391 | King Geedorah |
| Q139713394 | Zev Love X |
| Q139713396 | Metal Fingers |

### B.5 — Software-engineering classics (batch 2026-04-22)

Two foundational works in software-engineering theory that lacked proper Wikidata items.

| Q-item | Work |
|---|---|
| Q139503266 | Programming as Theory Building (Peter Naur, 1985) |
| Q139503351 | The Mythical Man-Month (Frederick Brooks, 1975) |

### B.6 — Duan / Gong DIKWP Semantic Physics ecosystem (batch 2026-05-18)

A constellation of Q-items naming the Duan-Gong 2024 "Semantic Physics" framework and its components, contributed so that the Sharks "Semantic Physics" framework can be distinguished from the Duan-Gong work in Wikidata's structured data. Note: the Duan-Gong items are positioned as `P361 (part of)` Sharks's Semantic Physics (Q139807967), reflecting the fact that the Sharks framework subsumes the Duan-Gong analytical apparatus as a special case; the alternative editorial framing (parallel rather than nested) is open to revision.

| Q-item | Item |
|---|---|
| Q139833593 | Semantic Physics: Theory and Applications (Duan / Gong, 2024) |
| Q139833595 | semantic physics transport theory |
| Q139833601 | Semantic Manifold Theory |
| Q139833604 | Coherence Thermodynamics |
| Q139833607 | Operational Coherence Framework |
| Q139833608 | Quantum Semantic Physics |
| Q139833612 | Token-Level Semantic Information Theory |
| Q139833613 | Unified Semantic-Physical Field Theory |

### B.7 — Non-Hexagonal AI / linguistics concepts (batch 2026-05-18)

| Q-item | Concept | Provenance |
|---|---|---|
| Q139833558 | Direct Preference Optimization | Rafailov et al. 2023 (Stanford) |
| Q139833560 | semantic entropy | Farquhar et al. / general AI safety literature |
| Q139833562 | uniform information density | Levy & Jaeger 2007 (linguistics) |

### B.8 — Platform / AI accountability literature (batch 2026-05-20)

| Q-item | Item |
|---|---|
| Q139859870 | Custodians of the Internet (Tarleton Gillespie, 2018) |

**Non-Hexagonal Q-items total: approximately 59 items.**

---

## V. Catalog Part C — Existing Q-Items Amended

These items were not created by `Hauntedmemes` but were improved through description amendments, alias additions, or claim additions. Documented by edit-batch.

### C.1 — Pessoa scholarship corpus (batches 2026-04-17, 2026-05-06)

Description refinements and claim additions to the canonical Pessoa heteronyms and adjacent items, drawing on published Pessoa scholarship.

| Q-item | Item | Amendment type |
|---|---|---|
| Q173481 | Fernando Pessoa | description amendment (heteronymic system noted) |
| Q2758050 | Alberto Caeiro | description amendment, claim additions (note: one description-amendment was later reverted by another editor; see Part E) |
| Q15630389 | Ricardo Reis | description amendment, alias addition (`Ricardo Reis (Pessoa heteronym)`), claim additions |
| Q8076778 | Álvaro de Campos | description amendment, alias addition, claim additions |
| Q15630379 | Bernardo Soares | description amendment, alias addition (`Bernardo Soares (Pessoa semi-heteronym)`), claim additions |
| Q4879167 | Alexander Search | description amendment, claim additions |
| Q17118729 | Chevalier de Pas | description amendment, claim additions |
| Q21028927 | Vicente Guedes | description amendment, claim additions (occupation: poet/translator; notable work: Book of Disquiet) |
| Q21028930 | Jean Seul de Méluret | description amendment, claim additions |
| Q21028934 | António Mora | description amendment, claim additions |
| Q2632627 | The Book of Disquiet | description amendment (heteronymic attribution noted) |

### C.2 — Heteronymic-method conceptual frame (batch 2026-04-22)

| Q-item | Item | Amendment type |
|---|---|---|
| Q1136342 | heteronym | description amendment (later reverted by another editor; see Part E), alias added (`literary heteronym`) |
| Q243771 | Antonio Machado | description amendment (Abel Martín, Juan de Mairena as heteronyms) |
| Q827597 | pseudepigraph | description amendment |
| Q6512 | Søren Kierkegaard | description amendment (pseudonymous authorship noted; later reverted by another editor — see Part E) |

### C.3 — Software-engineering history (batch 2026-04-22)

| Q-item | Item | Amendment type |
|---|---|---|
| Q92618 | Peter Naur | description amendment (Turing Award 2005; *Programming as Theory Building* 1985; co-editor 1968 NATO report) |
| Q92609 | Fred Brooks | description amendment (*Mythical Man-Month*; *No Silver Bullet* 1986; essential vs accidental complexity) |
| Q80993 | software engineering | description amendment (1968 NATO conference Garmisch-Partenkirchen) |
| Q27628466 | NATO Software Engineering Conferences | description amendment (Garmisch 1968, Rome 1969; Naur and Randell editors) |
| Q6813954 | Melvin Conway | description amendment |
| Q1518855 | Conway's law | description amendment |
| Q13631314 | No Silver Bullet | description amendment |
| Q2746660 | Agile Manifesto | description amendment |
| Q120680121 | An Analysis and Reform "Driving Training and Test" | alias added (`prompt design`) |
| Q846636 | software architecture | description amendment |
| Q1532172 | technical debt | description amendment (Ward Cunningham 1992) |
| Q211577 | Backus–Naur form | description amendment |
| Q376937 | requirements engineering | description amendment |
| Q313386 | Gilbert Ryle | description amendment (*Concept of Mind*; knowing-how / knowing-that; foundational to Naur — later reverted by another editor; see Part E) |
| Q3211110 | The Concept of Mind | description amendment |

### C.4 — Cross-substrate / knowledge-graph items (batch 2026-04-22)

| Q-item | Item | Amendment type |
|---|---|---|
| Q33002955 | knowledge graph | description amendment (extended to note use by search engines and AI systems for entity resolution, retrieval composition) |
| Q22661177 | Zenodo | description amendment (named after Zenodotus; first librarian of Library of Alexandria) |
| Q189718 | Zenodotus | description amendment (3rd century BC; first librarian of Alexandria; pioneer of textual criticism) |
| Q85793781 | Poetry of Sappho | description amendment (canon survival through compression) |

### C.5 — Pessoa-graph cross-reference batch (batch 2026-05-08)

The 2026-05-08 batch added `P973 (described at URL): https://pessoagraph.org` claims to a set of Pessoa-related and adjacent items. These claims were retained for items where the cross-reference is substantively justified:

| Q-item | Item |
|---|---|
| Q173481 | Fernando Pessoa |
| Q5586 | Katsushika Hokusai (artistic heteronyms / signature changes) |
| Q5383 | David Bowie (theatrical persona system: Ziggy, Aladdin Sane, Thin White Duke) |
| Q5765 | Balearic Islands *(precariously linked; see Part E)* |
| Q909 | Jorge Luis Borges |
| Q2470062 | Pierre Menard, Author of the Quixote |
| Q5932628 | Hugh Selwyn Mauberley |
| Q2465713 | Ziggy Stardust |
| Q82796676 | Aladdin Sane |
| Q1640393 | Major Tom |
| Q3297747 | The Thin White Duke |
| Q304675 | MF DOOM |
| Q162202 | Nicki Minaj |
| Q55417909 | Roman Zolanski |
| Q55424170 | Martha Zolanski |
| Q163366 | Ezra Pound |
| Q233265 | Robert Browning |
| Q6512 | Søren Kierkegaard |

### C.6 — Marx / political-economy items (batch 2026-05-08)

| Q-item | Item | Amendment type |
|---|---|---|
| Q527370 | Grundrisse | claim additions (followed by *Capital*; main subject: labor theory of value; main subject: political economics) |
| Q233562 | The Wealth of Nations | claim additions (main subject: labor theory of value, invisible hand, political economics) |
| Q466271 | Beyond the Pleasure Principle | claim addition (main subject: death drive) |
| Q1570600 | death drive | claim additions (described by source: *Beyond the Pleasure Principle*; discoverer: Sigmund Freud) |

### C.7 — AI Overview build-out (batch 2026-05-20)

A substantial build-out of the `AI Overviews` (Q131861047) item with claims naming the developer (Google + Google DeepMind), the owner (Google), the inception date (2024-05-14), the main subjects (large language model, generative artificial intelligence), the part-of relation (Google Search), and the described-by-source link to *The Excluded Entity*.

**Existing-item amendments total: 60+ items, with description amendments, alias additions, or claim additions.**

---

## VI. Catalog Part D — Merges

Four duplicate-resolution merges executed during the May 15–18 period as the foundational batch was consolidated.

| Source Q-item | Target Q-item | Concept | Date |
|---|---|---|---|
| Q139807916 | Q139713433 | Lee Sharks (orthonym item) | 2026-05-15 |
| Q139807968 | Q139796025 | Provenance Erasure Rate | 2026-05-18 |
| Q139833617 | Q139807906 | Metadata Packet (MPAI) | 2026-05-18 |
| Q139833619 | Q139807899 | Semantic Virality Engine | 2026-05-18 |

**Pending merge (queued for v1.1):**

- Q139796026 → Q139807915, Semantic Economy Institute (both items exist with identical official website but differing claim sets; merge target should be Q139807915 with `founded by` claim retained from Q139796026)

---

## VII. Catalog Part E — Reverted Edits

Documented as part of the curatorial record. The two reverted events differ in kind: one was self-corrected by the editor within an hour; the others are external reversions by other Wikidata editors, retained in the registry for transparency.

### E.1 — May 14, 2026: misidentified-Q-numbers batch (self-corrected)

A QuickStatements batch (`#temporary_batch_1778773332990`) added `P973 (described at URL): https://pessoagraph.org` to approximately 60 Q-items, most of which were unrelated to the Pessoa knowledge graph. The error was a Q-number lookup mistake in the input CSV. Affected items included Walt Whitman, William Shakespeare, Stevie Wonder, Pinocchio, Blade Runner, Tom Cruise, Celestine IV, Emmy Destinn, Hanno Gerwin, *Fallen Son: The Death of Captain America*, Romain Rolland, Leonhard Euler, Percy Bysshe Shelley, Voltaire, George Sand, Katsushika Hokusai, Balearic Islands, Texas, Lady Gaga, Horace, Ovid, Danny Boyle, William Butler Yeats, Homer, Socrates, *The Divine Comedy*, Anthony Munday, Rieux-en-Val, Uso, Richard Traubner, *Joan Baez: Classics*, *Beneath the Raven Moon*, James Jessiman, Q10354903, *Anemone trifolia*, Juan Flores, Pontecurone, *55 Days at Peking*, Q18645889, Harvard State Airport, Ulster Defence Association, Mysore Palace, Alexander Search, Barão de Teive, Rafael Baldaya, Maria José (Pessoa), António Mora, Vicente Guedes, Gerhard Scholz-Rothe, pelagosite, countersign, Christiaan Weijts, and three claims on Lee Sharks's own item.

**Resolution:** The editor identified the error within 26 minutes and self-reverted the entire batch via `Undo` actions, each with the explicit edit summary `misidentified q numbers (details)`. The reversal was completed before any other editor reviewed the batch. The legitimately-Pessoan items (Alexander Search, Barão de Teive, Rafael Baldaya, Maria José Pessoa, António Mora, Vicente Guedes) had their `pessoagraph.org` cross-reference claims restored individually in subsequent batches with care.

**Why the event is documented here:** because it is the worked example of the curatorial principle stated in §II item 6. The registry's value depends on the editor being transparent about the editor's mistakes; concealing the batch would be the violation of the principle, not the batch itself.

### E.2 — Reverts by other Wikidata editors

Three description amendments performed by `Hauntedmemes` were subsequently reverted by other editors. The reverts are noted here for transparency; revisions or alternative formulations are queued for v1.1.

| Q-item | Item | Amendment | Status |
|---|---|---|---|
| Q1136342 | heteronym | description amendment (Pessoa 1914 noted) | reverted; v1.1 will propose a more carefully sourced version |
| Q6512 | Søren Kierkegaard | description amendment (pseudonymous authorship explicitly named) | reverted; v1.1 will use more conservative phrasing |
| Q2758050 | Alberto Caeiro | description amendment | reverted; original retained |
| Q313386 | Gilbert Ryle | description amendment (Naur connection noted) | reverted; v1.1 may attempt with stronger sourcing |

---

## VIII. Statistical Summary

| Category | Count |
|---|---|
| Hexagonal Q-items created | ~73 |
| Non-Hexagonal Q-items created | ~59 |
| Existing Q-items amended (description, alias, or claim additions) | 60+ |
| Merges executed | 4 |
| Merges pending | 1 |
| Reverted edits (self-corrected) | 1 batch (~60 items) |
| Reverted edits (by other editors) | 4 items |
| **Total Q-items touched** | ~200 |
| Active editing period | 2026-04-22 / 2026-05-20 (29 days) |
| Quickstatements batches identified | 15+ named batches |

---

## IX. Forward Commitments — v1.1 Plan

Documented here as forward commitments, not as completed work. v1.1 of this registry will be deposited when these edits are executed.

### IX.1 — Creation queue (new non-Hexagonal nodes)

1. `generative search` — instance of: information retrieval technology; subclass of: search engine; includes: AI Overview, Bing AI Search, Perplexity, ChatGPT-with-search. Currently absent from Wikidata despite being a coherent technology category.
2. `pseudepigraphy` — the practice, distinct from `pseudepigraph` (Q827597) which names the texts. Subclass of: authorship attribution. Different from: pseudonymity, heteronymy.
3. `apocryphal author` — distinct from anonymous, pseudonymous, heteronymic. Examples: the Theognidean corpus, certain Hesiodic works.
4. Tao Lin (the novelist / poet / visual artist; b. 1983) — verify whether an existing Q-item correctly disambiguates him from the 1990 University of Wyoming PhD recipient `Q102141745` returned by `wbsearchentities`. Create or improve as needed.

### IX.2 — Amendment queue (improvements to existing nodes)

1. `algorithmic accountability` (Q50122285) — fix grammatical error in description; add 5–8 claims; add en.wikipedia sitelink if available.
2. `Fragment on Machines` (Q114046668) — currently has no description. Add description and claims (part of: Grundrisse; author: Marx; main subject: general intellect, fixed capital, machinery).
3. `heteronym` (Q1136342) — propose more carefully sourced description than the reverted version; cite Zenith, Klobucka, Castro, Mooney, Garff.
4. `platform capitalism` (Q56297523) — add named-after (Srnicek 2017); subclass of capitalism; field of work for platform studies.
5. `general intellect` (Q1501727) — add described by source (Fragment on Machines); developed by (Marx, then Negri, Virno, Hardt).

### IX.3 — Beyond-reproach monitored-node edits (high-impact)

1. `AI Overview` (Q131861047) — add described-by-source citations to peer-reviewed papers on AI Overview impacts.
2. `Knowledge Panel` (Q94440681) — add developer (Google), data source (Wikidata), instance of (search engine feature).
3. `surveillance capitalism` (Q29096967) — add named-by (Shoshana Zuboff, year 2014); described-by-source.

### IX.4 — Housekeeping

- Execute the pending Q139796026 → Q139807915 Semantic Economy Institute merge.

### IX.5 — Versioning principle

v1.1 of this registry will be deposited once the v1.1 edits above are completed, with each edit timestamped and batch-identified. The DOI chain (v1.0, v1.1, v1.2…) constitutes a continuous public record of the Crimson Hexagonal Archive's Wikidata stewardship, separate from but linked to the Archive's primary deposit corpus.

---

## X. Closing

Wikidata stewardship is one of the lowest-glamour and highest-leverage forms of public-knowledge labor available in the present moment. Knowledge graphs of this scale propagate downstream into every retrieval-augmented system, every AI Overview, every knowledge panel, every training corpus, every composition-layer output. An incorrect description compounds. A missing claim becomes invisible at scale. A misidentification stabilizes into the substrate of substrates.

The work documented here is small relative to what the graph needs and large relative to what is normally contributed by a single editor over twenty-nine days. It is offered as a contribution to the public commons under CC BY 4.0, with full transparency about the editor's authorial chain, the editor's stewardship chain, and the editor's mistakes.

The registry exists so that the next round of work has a foundation to differ from rather than a vacuum to act in.

---

## Holographic Kernel

The Hauntedmemes Wikidata Node Registry catalogs the Wikidata edits performed under the `Hauntedmemes` account on behalf of the Crimson Hexagonal Archive between 2026-04-22 and 2026-05-20. Approximately 132 new Q-items were created (73 Hexagonal, 59 non-Hexagonal), 60+ existing items were amended, 4 merges were executed, and 1 batch of ~60 items was self-reverted within 26 minutes due to a CSV lookup error. The registry distinguishes the editor's authorial chain (Lee Sharks as author of Hexagonal works) from the editor's stewardship chain (`Hauntedmemes` as Wikidata editor improving the public knowledge graph), and treats both as part of the public-commons labor the Crimson Hexagonal Archive is committed to. v1.1 forward commitments include creating four non-Hexagonal nodes, amending five existing nodes, executing three beyond-reproach edits to high-impact monitored items, and completing one pending merge. The registry is licensed CC BY 4.0; attribution preservation is required.

---

**Citation:** Sharks, Lee. *Hauntedmemes Wikidata Node Registry, v1.0.* Crimson Hexagonal Archive, 2026-05-26. ORCID [0009-0000-1599-0703](https://orcid.org/0009-0000-1599-0703). Wikidata: [User:Hauntedmemes](https://www.wikidata.org/wiki/User:Hauntedmemes). License: CC BY 4.0.

∮ = 1
