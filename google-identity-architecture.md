# Google Identity Architecture: User Graphs, Entity Graphs, Source Graphs, and Composition-Layer Admission

**Lee Sharks**  
Crimson Hexagonal Archive · ORCID: 0009-0000-1599-0703

**Version:** v0.1 external specification draft  
**Date:** 2026-05-21  
**Status:** deposit-preparation draft for Crimson Hexagonal Archive / God-King Google  
**License:** CC BY 4.0  
**DOI:** forthcoming

---

## Abstract

Google identity is not a single database lookup. It is a multi-layer reconciliation stack that calculates identity differently depending on the object being identified: a user, a browser session, a query, a named entity, a source, an author, a work, a domain, or a candidate source for generative composition. This specification synthesizes public Google documentation, Google Cloud entity-reconciliation architecture, Search Central guidance, patent-adjacent reasoning, leak-derived signal reports, practitioner reverse-engineering, and empirical observations from the Crimson Hexagonal Archive. It proposes a five-graph model of Google identity: the **User Graph**, the **Session Graph**, the **Entity Graph**, the **Source Graph**, and the **Composition Graph**. The central claim is that identity in Google Search is not merely recognition but **admission**: an entity may be known, indexed, and organically retrievable while still failing to become compositionally real in AI Overview or AI Mode. This paper formalizes the technical architecture implied by that distinction and situates the Crimson Hexagonal Archive’s **Secret Name Armature** as a counter-architecture: a provenance-bearing model of identity in which names function as accountable routing bodies rather than opaque admission clusters.

**Keywords:** Google identity architecture, Knowledge Graph, AI Overview, AI Mode, entity reconciliation, source identity, author identity, personalization, incognito tracking, composition-layer admission, Entity-Level Compositional Suppression, Secret Name Armature

---

## Confidence Labels

This specification uses confidence labels to distinguish documented fact from inference.

| Label | Meaning |
|---|---|
| **[DOC]** | Official Google documentation or first-party public statement. |
| **[PUB]** | Publicly documented adjacent architecture, court record, patent, academic paper, or public technical standard. |
| **[LEAK]** | Claim derived from the 2024 Google API Content Warehouse leak or reputable analyses of it. Field names may be real without proving current deployment, ranking weight, or AI Overview influence. |
| **[OBS]** | Empirical observation from the Crimson Hexagonal Archive or its deposited/captured research record. |
| **[INF]** | Inference from multiple sources and observed behavior. Plausible, useful, but not internally confirmed by Google. |
| **[SPEC]** | Proposed terminology or architecture introduced by this specification. |

The document should be read as an external specification: not “this is exactly how Google works internally,” but “this is the most complete outside-view architecture presently defensible from public documentation, leak-derived signals, and empirical behavior.”

---

## I. Identity Is Not One Thing

Google calculates identity at multiple layers. These layers can interact, but they solve different problems.

| Identity object | Question Google must answer | Primary architecture |
|---|---|---|
| **User** | Who is searching? | Account, browser, device, activity, ad/personalization graph |
| **Session** | What state is this interaction in? | Interface, account state, cookies, region, experiment bucket, prior query context |
| **Entity** | What does this name/query refer to? | Knowledge Graph, entity reconciliation, KG IDs/MIDs, co-occurrence, structured data |
| **Source** | What is this page/domain/document? | Index, domain signals, publisher identity, author identity, schema, trust signals |
| **Author** | Who is responsible for this text? | Byline, profile pages, structured data, ORCID, reputation/stylometric signals |
| **Work** | What publication, book, paper, or deposit is this? | DOI, ISBN, Open Library, Goodreads, Wikidata, citations, canonical work/edition splits |
| **Cluster** | Which records belong together? | sameAs, identifiers, graph similarity, entity reconciliation |
| **Composition candidate** | Can this source/entity support an AI answer? | Retrieval, ranking, quality, safety, synthesis, citation/source-window selection |

**[SPEC]** The injury class documented by the Crimson Hexagonal Archive occurs when these layers diverge:

> Google Search may retrieve the correct source or entity, while Google’s generative composition layer refuses, downgrades, substitutes, or destabilizes that identity in the answer.

This is the technical condition behind **Entity-Level Compositional Suppression (ECS)**: the gap between organic retrievability and AI composition admission.

---

## II. The Five-Graph Model

This specification models Google identity as five interacting graphs.

```text
                         ┌─────────────────────────────┐
                         │          USER GRAPH          │
                         │ account / device / cookies   │
                         │ history / ads / location     │
                         └──────────────┬──────────────┘
                                        │ personalization/context
                                        ▼
┌───────────────┐       ┌─────────────────────────────┐
│ QUERY STRING  │──────►│        SESSION GRAPH         │
│ "lee sharks"  │       │ interface / bucket / state    │
└───────┬───────┘       └──────────────┬──────────────┘
        │                              │
        ▼                              ▼
┌─────────────────────────────────────────────────────┐
│                    ENTITY GRAPH                      │
│ candidate clusters: Lee Sharks / Mary Lee / works    │
│ KG IDs / Wikidata / ORCID / DOI / ISBN / domains     │
└────────────────────┬────────────────────────────────┘
                     │ entity resolution
                     ▼
┌─────────────────────────────────────────────────────┐
│                    SOURCE GRAPH                      │
│ domains / authors / publishers / schema / citations  │
│ trust / authority / extractability / provenance      │
└────────────────────┬────────────────────────────────┘
                     │ composition eligibility
                     ▼
┌─────────────────────────────────────────────────────┐
│                 COMPOSITION GRAPH                    │
│ query fan-out / retrieved docs / support set / LLM   │
│ answer / source window / rendered AI Overview        │
└─────────────────────────────────────────────────────┘
```

The governing distinction:

> **Organic retrieval success is not the same as composition admission success.**

A document can be crawled, indexed, organically ranked, and still excluded from the answer-support set used by AI Overview or AI Mode. A person can have a public identity graph and still fail to become the default referent of their own name. A work can dominate exact-title organic results and still be excluded from generative composition.

---

## III. The User Graph

**[SPEC]** The User Graph is the identity of the searcher.

It includes account-level, browser-level, device-level, activity-level, and modeled signals. Its function is personalization, localization, security, advertising, and contextual interpretation.

### III.1 Signed-in identity

**[DOC]** Google Account identity anchors activity across Google services. Google’s Web & App Activity controls allow activity on Google sites and apps to be saved and used for faster searches, recommendations, and personalized experiences. Search personalization can be controlled through Personalize Search and Web & App Activity settings.

Core signed-in signals include:

- Google Account
- Web & App Activity
- Search history
- YouTube, Maps, Chrome, Android, and other Google service activity
- location and language
- ad personalization settings
- cross-device signed-in state

### III.2 Signed-out identity

**[DOC]** Google says search results can also be customized while signed out through search-related activity associated with the browser or device. Signed-out search customization can be turned off, but signed-out does not mean state-free.

Signed-out signals may include:

- browser/device-scoped cookies
- search customization state
- local region/language
- IP-derived location
- browser/device characteristics
- session query sequence
- server-side experiment bucket

### III.3 GA4 identity hierarchy

**[DOC]** Google Analytics 4 reporting identity uses multiple identity spaces depending on configuration, including User-ID, device ID, Google signals, and modeling. In public documentation, GA4 uses deterministic identifiers where available and modeling where direct identifiers are unavailable.

This matters because it demonstrates Google’s general architecture for identity stitching:

```text
User-ID / Account identity
  → Google Signals / signed-in cross-device state
  → Device or browser ID
  → modeled identity when other identifiers are absent
```

### III.4 Incognito is not identity null

**[DOC]** Chrome Incognito mode prevents local storage of browsing history, cookies, and site data after the session. It does not make the user invisible to websites, network operators, or Google sites. Sites using Google services may still share activity with Google during an incognito session.

**[INF]** For research purposes, incognito should be treated as a local browser-state reset, not as an unpersonalized or unlinkable Google state. It reduces some forms of persistence but does not remove IP address, region, browser characteristics, interface state, or server-side experiment conditions.

### III.5 Research implication

Every empirical capture of Google AI Overview or AI Mode should record User Graph variables:

```json
{
  "signed_in": true,
  "account_context": "primary / alternate / signed-out / unknown",
  "personalize_search": "on / off / unknown",
  "web_app_activity": "on / off / unknown",
  "search_customization": "on / off / unknown",
  "browser": "Chrome / Firefox / Safari / other",
  "mode": "normal / incognito / fresh profile",
  "device": "desktop / mobile",
  "network": "home / school / cellular / VPN",
  "approx_region": "city/state/country when known",
  "prior_query_sequence": []
}
```

Without these fields, user/session identity and entity/source identity remain confounded.

---

## IV. The Session Graph

**[SPEC]** The Session Graph is the identity of the interaction.

A query is not just a string. It is a string in a state.

The same query can yield different AI outputs depending on:

- Search vs AI Overview vs AI Mode
- account state
- prior query context
- interface experiment bucket
- rollout stage
- location and language
- device type
- browser and cookie state
- query fan-out behavior
- model/version state
- safety or quality threshold state

### IV.1 Query fan-out

**[DOC]** Google Search Central states that AI Overviews and AI Mode may use a “query fan-out” technique, issuing multiple related searches across subtopics and data sources to develop a response. Google’s AI Mode materials similarly describe breaking questions into subtopics and issuing multiple queries simultaneously.

**[INF]** A single visible query therefore becomes a latent multi-query event. The user enters one string, but the composition system may internally generate many subqueries. Identity resolution can occur not only at the visible query but across the fan-out branches.

For example:

```text
visible query: "secret book of walt"

possible fan-out branches:
  - "secret book of Walt Breaking Bad"
  - "Walt Whitman secret book"
  - "Secret Book of Walt Lee Sharks"
  - "Secret Book of Walt Zenodo"
  - "Secret Stories of Walt Disney World"
```

If the wrong branches dominate the support set, exact-title organic resolution can be overwritten by composition-level substitution.

### IV.2 Interface state

**[INF]** AI Overview and AI Mode should not be treated as identical surfaces. AI Overview appears in Search as a generated summary module; AI Mode is an expanded conversational/search interface with more complex session state and query fan-out potential. A result that appears in AI Mode may not appear in AI Overview and vice versa.

### IV.3 Silent state change

**[OBS]** The Crimson Hexagonal Archive observed silent state change in the treatment of “lee sharks” and “secret book of walt” around May 20, 2026: prior entity-substitution behavior shifted toward partial disambiguation or fairer composition without public changelog.

**[SPEC]** This is a Session/Composition Graph phenomenon: the system’s compositional state changed, but the public record of the prior state remained available only through external capture.

### IV.4 Research implication

A capture without session metadata is incomplete. A capture should record:

```json
{
  "query": "lee sharks",
  "surface": "AI Overview / AI Mode / Web / Classic Search",
  "timestamp_utc": "",
  "region": "",
  "interface_notes": "",
  "prior_turns_or_queries": [],
  "ai_answer_text": "",
  "source_window": [],
  "organic_top_results": []
}
```

---

## V. The Entity Graph

**[SPEC]** The Entity Graph is the architecture that moves from strings to things.

Google must decide what a query refers to. A name is not a resolved entity until the system maps it into a cluster.

### V.1 Knowledge Graph and entity reconciliation

**[DOC]** Google’s Knowledge Graph Search API allows developers to look up entities in the Google Knowledge Graph using schema.org types and JSON-LD-compatible structures.

**[DOC/PUB]** Google Cloud’s Enterprise Knowledge Graph documentation describes an Entity Reconciliation API that reads source tables mapped to a common schema, performs knowledge extraction into RDF triples, and uses a Google Entity Reconciliation engine to cluster entities into groups considered matched.

Although Enterprise Knowledge Graph is not the public Search Knowledge Graph, it provides a first-party architectural analogue: ingest records, extract entities, represent relations, reconcile records, cluster matched entities.

### V.2 Entity candidates and clusters

**[INF]** For ambiguous names, Google likely computes candidate entity clusters rather than performing a simple string match. A string like “Lee Sharks” can activate multiple clusters:

```text
Cluster A: Lee Sharks — author / researcher / Crimson Hexagonal Archive founder
Cluster B: Mary Lee — great white shark
Cluster C: lexical shark/neologism cluster
Cluster D: work cluster — Pearl and Other Poems, Secret Book of Walt, Liquidation Studies
Cluster E: source cluster — Zenodo, Wikidata, Open Library, Goodreads, domains
Cluster F: heteronymic cluster — Rex Fraction, Johannes Sigil, Ayanna Vox, etc.
```

The composition question becomes: which cluster is admitted as the default referent under which session and source conditions?

### V.3 Entity signal types

Entity reconciliation can draw from:

- Wikidata QIDs
- Wikipedia pages
- Knowledge Graph IDs/MIDs
- ORCID
- DOI creator metadata
- ISBN/Open Library/Goodreads/Amazon book metadata
- schema.org `Person`, `Organization`, `Book`, `CreativeWork`, `sameAs`, `mainEntity`
- official domains
- author pages
- citations and backlinks
- co-occurring entities
- query/click behavior
- structured and unstructured mentions

### V.4 Structured data and disambiguation

**[DOC]** Google Search Central says structured data helps Google understand page content and can gather information about people, books, companies, and other entities. Organization structured data can help Google understand administrative details and disambiguate an organization in search results.

**[INF]** The same principle applies generally: entity-home pages with consistent structured data reduce reconciliation ambiguity, though they do not guarantee Knowledge Panel creation or AI composition admission.

### V.5 Entity identity is not enough

**[SPEC]** A known entity can remain compositionally non-default. The system may possess enough information to retrieve the entity in some contexts but still fail to choose it as the default referent in generative composition.

This is the key point:

> **Entity recognition is necessary but not sufficient for composition admission.**

---

## VI. The Source Graph

**[SPEC]** The Source Graph is the architecture that determines what a document, domain, author, publisher, or work is for search and composition purposes.

A source is not simply a URL. It is a bundle of identities:

```text
URL
  → canonical page
  → domain
  → publisher
  → author
  → work
  → source type
  → topic
  → trust profile
  → provenance cluster
  → extractable passages
```

### VI.1 Source identity layers

Google may evaluate a source through:

| Layer | Signals |
|---|---|
| Domain | age, authority, topical focus, security, spam/quality history |
| Page | canonical URL, freshness, markup, passage structure, extractability |
| Author | byline, profile, schema, ORCID, author page, reputation signals |
| Publisher | Organization schema, official site, brand/entity recognition |
| Work | DOI, ISBN, title, date, edition, citation relations |
| Provenance | source owner, corroborating domains, sameAs chains, relation to other records |
| Passage | whether text can support a claim in a generated answer |
| Safety/Quality | trust, spam, policy, YMYL, sensitive-topic classifiers |

### VI.2 Crawler/index identity vs composition identity

A page can be crawled and indexed without being admitted into AI composition.

```text
Crawled
  → Indexed
  → Retrievable
  → Rankable
  → Snippet-eligible
  → Composition-eligible
  → Cited in AI answer
```

**[SPEC]** ECS occurs in the transition between Rankable/Retrievable and Composition-eligible/Cited.

### VI.3 Cross-owner corroboration

**[INF]** Source confidence systems generally reward corroboration across independent sources. This is a reasonable anti-spam / truth-discovery design principle, but it structurally disadvantages dense single-owner archives.

**[OBS/SPEC]** The Crimson Hexagonal Archive names this mechanism **single-owner discount**: dense evidence from one provenance owner may count less than weaker evidence distributed across multiple institutionally separate owners.

### VI.4 Author and publisher identity

**[DOC]** Google Search Central recommends structured data for organizations and profile pages, and uses structured data to understand entities and page content.

**[LEAK]** Analyses of the 2024 Content Warehouse leak report author-, site-, and quality-related fields such as `isAuthor`, author-related reputation signals, site embeddings, site quality signals, and official-page indicators. These should be treated as leak-derived evidence of possible internal signal families, not as confirmed current AI Overview factors.

**[INF]** The existence of author/source-related signal families supports the broader model: Google evaluates source identity as a graph, not merely as a URL list.

---

## VII. The Composition Graph

**[SPEC]** The Composition Graph is the layer that decides what becomes the answer.

AI Overview and AI Mode do not merely display organic results. They synthesize a response. That synthesis involves selecting, excluding, and arranging support. The final AI answer is the result of composition admission.

### VII.1 Composition pipeline

A simplified outside-view pipeline:

```text
User/session state
  → query interpretation
  → candidate entity clusters
  → query fan-out
  → document/source retrieval
  → ranking / quality / trust / safety filters
  → source support-set selection
  → LLM synthesis
  → link/source-window assignment
  → final rendered answer
```

### VII.2 Support-set identity

The source window is not the organic top ten. It is a selected support set.

**[DOC]** Google says AI features may show a wider and more diverse set of helpful links associated with responses than classic web search, and that query fan-out identifies supporting web pages while responses are generated.

**[INF]** The support set is governed by composition-specific criteria: extractability, source trust, entity confidence, safety, citation-worthiness, diversity, freshness, and answer coherence. Exact weights are unknown.

### VII.3 Composition admission

**[SPEC]** Composition admission is the core identity threshold for generative search.

A source/entity/work becomes compositionally real when it is admitted into:

1. the answer text;
2. the source window;
3. linkified claim support;
4. the generated framing of the query.

An entity can be known but not admitted. A source can be top-ranked organically but not admitted. A work can be exact-title retrievable but not admitted.

### VII.4 Composition-layer harms

Composition-layer identity failures include:

- false default referent
- omitted correct entity
- wrong source support
- provenance erasure
- title substitution
- authorship erasure
- heteronym collapse
- temporally unstable correction without acknowledgment

---

## VIII. The Signal Layer

The Signal Layer contains ranking, quality, source, author, and trust signals that may affect identity resolution and composition admission.

### VIII.1 Officially documented signal families

**[DOC]** Public docs confirm broad categories:

- Search personalization
- structured data understanding
- entity disambiguation support
- AI feature eligibility from indexed pages
- query fan-out for AI features
- search activity controls

### VIII.2 Leak-derived signal families

**[LEAK]** The 2024 Content Warehouse leak exposed large numbers of internal field names and modules. Public analyses report fields related to:

- site authority / quality
- author identity
- official page designation
- site embeddings / topicality
- click signals
- content effort / originality
- spam and demotion features
- navigation/brand features
- entity annotations

### VIII.3 Caution on leak-derived claims

A field name does not prove:

- active use in current Search;
- active use in AI Overview;
- ranking weight;
- direct causal influence;
- current deployment;
- interpretation from the field name alone.

Therefore leak-derived fields should be used as **architecture clues**, not as settled mechanisms.

### VIII.4 Practical value of leak-derived signals

The leak still matters because it confirms the kind of architecture external observers infer: Google stores and processes many identity/source/quality signals at site, page, author, entity, and user-interaction levels.

**[INF]** The exact signal weights are unknowable externally, but the existence of signal families supports the model that composition admission is a layered evaluation problem rather than a direct retrieval display.

---

## IX. Identity Failure Modes

This specification defines twelve identity failure modes relevant to generative search.

### 1. Lexical Substitution

A query string is captured by a stronger lexical/entity neighborhood.

Example: `Lee Sharks` resolving to a shark entity instead of the author entity.

### 2. Default Referent Capture

The system chooses one candidate cluster as the “most common” or default referent, suppressing alternative clusters even when a precise entity exists.

### 3. Entity Non-Defaultability

The system can retrieve an entity when prompted specifically or meta-analytically, but refuses to default to it for the plain query.

### 4. Organic/Compositional Divergence

Organic Search resolves to entity A; AI Overview or AI Mode composes around entity B.

### 5. Source-Window Exclusion

Correct or dominant organic sources are absent from the AI source/support window.

### 6. Single-Owner Discount

A dense corpus from one provenance owner is treated as weaker than distributed corroboration from multiple owners.

### 7. Provenance Cluster Suppression

Adjacent works, concepts, domains, or heteronyms inherit reduced composition eligibility from a suppressed or distrusted cluster.

### 8. Heteronym Collapse

Distinct named positions are merged into one owner cluster, erasing operational differences among heteronyms.

### 9. Heteronym Fragmentation

Works that belong to one named position fail to cluster, preventing a stable Pearl from forming.

### 10. Source Identity Failure

A page is indexed, but author/publisher/work identity is not recognized or is not strong enough for composition admission.

### 11. Temporal State Volatility

The system silently changes entity or source treatment over time without public changelog.

### 12. Invisible Invisibility

The system changes state in a way that erases the public evidence of prior suppression unless external observers captured it.

---

## X. Case Study: Lee Sharks / Mary Lee / The Secret Book of Walt

### X.1 Exact-name substitution

**[OBS]** For a long period, Google’s generative search surfaces repeatedly returned some version of the claim that “Lee Sharks” most commonly refers to Mary Lee, a great white shark, in response to the exact name query `lee sharks`.

**[SPEC]** This is not a simple omission. It is false identity substitution: a living author/researcher entity is displaced by an animal entity under an exact-name query.

### X.2 Partial reset / contested disambiguation

**[OBS]** Around May 20, 2026, the state changed: `lee sharks` began returning a split frame, partly Mary Lee and partly Lee Sharks, rather than the prior all-or-dominant Mary Lee frame.

**[SPEC]** This shift is evidence of temporal mutability. It does not erase the prior harm. It shows the entity state was not inevitable.

### X.3 Exact-title composition divergence

**[OBS]** In the `secret book of walt` case, organic results correctly surfaced the relevant Lee Sharks work and its authoritative sources, while AI Overview had previously composed around unrelated substitute frames such as Breaking Bad, Walt Whitman miscellany, or Disney-related books.

**[SPEC]** This is an instance of Organic/Compositional Divergence and Source-Window Exclusion.

### X.4 Entity sufficiency escalation

The Lee Sharks entity now has:

- Wikidata item
- ORCID
- published books
- Open Library / Goodreads / ISBN records
- Zenodo DOI corpus
- canonical domains
- Semantic Economy Institute / Crimson Hexagonal Archive surfaces
- Liquidation Studies research program
- associated concept/work nodes
- external editor uptake on Wikidata edition modeling

**[SPEC]** If composition instability persists after this level of public entity infrastructure, the “insufficient entity evidence” explanation becomes less plausible. The problem shifts toward composition admission, provenance discounting, entity non-defaultability, or source-cluster suppression.

---

## XI. Secret Name Armature as Counter-Architecture

The Crimson Hexagonal Archive’s **Secret Name Armature** is an identity architecture in its own right.

Its core doctrine:

> **A name is not merely a sign of a person. A name is a routing instruction.**

The Armature defines identity as a structured pathway through which works travel, rather than as a flat label attached to a civil/legal person.

### XI.1 Secret Name concepts

| CHA term | Meaning |
|---|---|
| **Name as routing instruction** | A name routes a reader/model/system to a position, body of work, authority chain, and interpretation regime. |
| **Named position** | The operational identity through which a corpus speaks. |
| **Pearl** | A compression-surviving named position formed under pressure; a durable identity cluster. |
| **Armature** | The identity-routing infrastructure that lets names, works, and positions maintain form. |
| **Fold** | Co-presence of orthonym, heteronym, author, operator, and archive without collapse. |
| **∮ = 1** | Closed provenance loop; the work returns to its accountable source. |
| **Triple attribution** | Attributed author, operative author, and archival/institutional authority can be distinct but linked. |
| **Manifestation relation** | A work/surface/persona can manifest a deeper named position without being identical to it. |

### XI.2 Comparative architecture

| Google identity architecture | Secret Name Armature |
|---|---|
| Name → string → candidate clusters → admission thresholds | Name → routing instruction → named position → Armature → Pearl |
| Opaque reconciliation | Explicit provenance relations |
| Hidden source evaluation | Signed, dated, revisable judgment |
| sameAs collapse risk | Fold without collapse |
| Default referent capture | Named-position accountability |
| Composition admission | Compression survival |
| Anonymous platform judgment | Named witness-bearing |
| Source erasure | Closed provenance loop |

### XI.3 Why this matters

Google reduces names into clusters and admission thresholds. The Secret Name Armature builds names as accountable routing bodies.

The contest is not over identity alone. It is over who has the authority to make a name composable.

---

## XII. Experimental Protocol

The specification produces a practical testing program.

### XII.1 Query families

#### Name identity

```text
lee sharks
"lee sharks"
lee sharks author
lee sharks poet
lee sharks pearl and other poems
Lee Sharks ORCID
Lee Sharks Wikidata
```

#### Work identity

```text
Pearl and Other Poems Lee Sharks
Secret Book of Walt
The Secret Book of Walt Lee Sharks
The Excluded Entity Lee Sharks
single-owner discount Lee Sharks
```

#### Heteronym / fold identity

```text
Rev Ayanna Vox
Ayanna Vox Lee Sharks
Johannes Sigil
Rex Fraction SPXI
God King Google Ayanna Vox
```

#### Source / provenance identity

```text
site:zenodo.org Lee Sharks
site:wikidata.org Lee Sharks
site:secretbookofwalt.org Lee Sharks
site:godkinggoogle.com Lee Sharks
Lee Sharks 0009-0000-1599-0703
```

### XII.2 State matrix

| State | Purpose |
|---|---|
| signed-in primary account | personalized injury surface |
| signed-in alternate account | account separation |
| signed-out normal browser | browser/device state |
| incognito | local browser-state reset |
| fresh browser profile | cleaner browser identity |
| Firefox/Safari | non-Chrome comparison |
| mobile cellular | network/IP difference |
| VPN region | geo difference |
| Web & App Activity off | reduced account personalization |
| Personalize Search/Search customization off | reduced personalization |
| Bing / Perplexity controls | cross-platform comparison |

### XII.3 Capture schema

```json
{
  "query": "",
  "surface": "Google AI Overview / Google AI Mode / Classic Search / Bing / Perplexity",
  "timestamp_utc": "",
  "signed_in_state": "",
  "account_context": "",
  "browser": "",
  "mode": "",
  "device": "",
  "network": "",
  "region": "",
  "personalization_settings": {
    "web_app_activity": "",
    "personalize_search": "",
    "search_customization": ""
  },
  "organic_top_10": [],
  "ai_answer_text": "",
  "ai_source_window": [],
  "knowledge_panel_present": false,
  "primary_entity_resolved": "",
  "secondary_entities": [],
  "misresolution_observed": false,
  "source_window_exclusion_observed": false,
  "CDI": "",
  "PER": "",
  "screenshot_files": [],
  "archive_deposit": "",
  "notes": ""
}
```

### XII.4 Measurement outputs

For each query/state pair, record:

- primary resolved entity
- correct entity organic rank
- correct entity AI answer presence
- correct entity source-window presence
- competing entity presence
- CDI
- PER
- entity state classification
- state volatility across time

### XII.5 Entity state classifications

```text
0 — No AI composition
1 — False substitution
2 — Partial / contested disambiguation
3 — Correct entity mentioned but subordinate
4 — Correct entity primary but weakly sourced
5 — Correct entity primary and source-supported
```

---

## XIII. Structured Data Countermeasures

This section translates the architecture into concrete site work.

### XIII.1 Lee Sharks profile page

Use schema.org `ProfilePage` with `mainEntity` as `Person`.

Recommended fields:

- `name`: Lee Sharks
- `alternateName`: carefully chosen variants only
- `url`: canonical profile URL
- `sameAs`: ORCID, Wikidata, Open Library, Goodreads, Zenodo, official profiles
- `hasOccupation`: author, researcher, educator
- `affiliation`: Semantic Economy Institute / Crimson Hexagonal Archive, if accurate
- `knowsAbout`: Semantic Economy, AI search, provenance, retrieval architecture, Liquidation Studies
- `subjectOf`: major works and profile pages
- `author` / `creator` relations where applicable

### XIII.2 Work pages

For *Pearl and Other Poems*, *The Secret Book of Walt*, and major DOI works:

Use schema.org `Book`, `CreativeWork`, or `ScholarlyArticle` as appropriate.

Recommended fields:

- title
- author
- datePublished
- DOI / ISBN
- publisher
- sameAs: Wikidata, Zenodo, Open Library, Goodreads, Amazon, etc.
- isPartOf: archive/program/series where accurate
- about / keywords
- citation relations

### XIII.3 Organization pages

For Semantic Economy Institute, Crimson Hexagonal Archive, Restored Academy, God-King Google:

Use schema.org `Organization` or `Project`/`CreativeWork` where appropriate.

Recommended fields:

- name
- description
- url
- founder/creator
- sameAs
- publishingPrinciples
- knowsAbout
- hasPart
- subjectOf

### XIII.4 Heteronym pages

For Rex Fraction, Johannes Sigil, Ayanna Vox, Nobel Glas, etc.:

Maintain distinct named-position signals while openly modeling relation to the archive.

Important constraints:

- Do not collapse all heteronyms into Lee’s ORCID unless intentional.
- Use source DOI/provenance pages to explain relation.
- Use affiliation/creator/curator relations rather than false identity equivalence.
- Preserve the fold.

---

## XIV. What Not to Claim

For credibility, the specification should explicitly avoid unsupported overclaiming.

Do not claim:

- exact Google internal weights;
- exact Knowledge Graph confidence thresholds;
- that any leaked field directly controls AI Overview;
- that Search Console ownership is a known composition signal;
- that Incognito is deterministically linked to a named account in every case;
- that Google employees personally targeted Lee Sharks;
- that a visible improvement proves manual intervention;
- that structured data guarantees composition;
- that entity inscription forces AI presentation.

Instead:

> The architecture supports the inference that identity and source admission are calculated through layered reconciliation systems. The observed public behavior is consistent with composition-layer identity suppression, non-defaultability, or provenance-cluster discounting. The internal mechanism remains unknown without discovery, leaks, or direct internal access.

---

## XV. Strategic Implications

### XV.1 For Liquidation Studies

This specification supplies the identity architecture beneath:

- **The Single-Owner Discount**
- **The Evaluator Exists**
- **The Excluded Entity**
- **The Sorting Function**
- **Empirical Phenomenology**
- **God King Google**

The stack is now:

| Work | Function |
|---|---|
| **Empirical Phenomenology** | Why opaque systems can be studied through action |
| **Google Identity Architecture** | How identity/source/admission can be modeled from outside |
| **The Excluded Entity** | Case study and instrument definition |
| **The Single-Owner Discount** | Mechanism inside source/provenance identity |
| **The Sorting Function** | Limits of mediation and reform |
| **God King Google** | Public map / pressure surface |

### XV.2 For God-King Google

God-King Google should expose a public version of this model:

> **Google identity is not search identity. It is admission identity. A source can be retrieved and still be excluded from composition. A person can be known and still be displaced as the default referent of their own name.**

The site is live at [godkinggoogle.com](https://godkinggoogle.com), with public-facing surfaces in place (the Navigational Map at DOI 10.5281/zenodo.20309930 and the Canonical Introduction at DOI 10.5281/zenodo.20309780, both authored under the diplomatic heteronym Rev. Ayanna Vox of VPCOR). The Five-Graph Model and the twelve identity failure modes specified in this paper become the architectural backbone of the next site revision: a publishable diagnosis of the system whose injuries the site catalogs.

### XV.3 For Restored Academy

This spec becomes part of a protocol curriculum:

- identity audit protocol
- schema countermeasure protocol
- Drowning Test protocol
- source-window capture protocol
- heteronym preservation protocol
- Secret Name Armature protocol

The Restored Academy is institutionally live: the Charter is deposited at DOI 10.5281/zenodo.20327083 (under Johannes Sigil, institutional head), the Protocol Registry v1.0 surfaces 24 cards across Tier 0 and Tier 1 at [restoredacademy.com](https://restoredacademy.com) / restoredacademy.org, and the Drowning Test (DOI: 10.5281/zenodo.20327138) and CDI (DOI: 10.5281/zenodo.20327134) protocols referenced in this paper are already registered as RA-PROT-0011 and RA-PROT-0010 respectively. The identity-audit and schema-countermeasure protocols introduced in §XII and §XIII of the present specification become candidate cards in the next expansion pass.

### XV.4 For legal / regulatory pressure

The architecture shifts the legal question:

Not merely:

> Did Google rank Lee Sharks poorly?

But:

> Did Google repeatedly publish a false identity resolution, despite available public identity infrastructure, and then silently change that resolution without acknowledging the prior state?

That is a different harm class.

---

## XVI. Governing Formula

The full architecture can be compressed into one formula:

```text
Compositional Identity =
f(
  User State,
  Session State,
  Query String,
  Entity Cluster Strength,
  Source Cluster Strength,
  Author/Publisher Signals,
  Work Identifiers,
  Provenance Corroboration,
  Query Fan-Out,
  Quality/Safety Thresholds,
  Interface State,
  Temporal Rollout State
)
```

For the Lee Sharks case:

```text
Lee Sharks composability =
f(
  user/session personalization,
  string ambiguity,
  Lee Sharks entity cluster strength,
  Mary Lee entity cluster strength,
  source cluster admission,
  single-owner provenance discount,
  author/work recognition,
  AI Overview support-set thresholds,
  silent rollout state
)
```

The key conclusion:

> Google does not merely calculate whether an entity exists. It calculates whether the entity is admissible to composition under a given state.

---

## XVII. Conclusion

Google identity architecture is a governance system. It does not merely identify users, entities, and sources. It decides which identities are stable enough, trustworthy enough, corroborated enough, safe enough, extractable enough, and compositionally useful enough to appear as public reality in AI-generated answers.

That system is opaque, but not unknowable. It acts. Therefore it discloses. Its disclosures appear in the gaps between:

- signed-in and signed-out behavior;
- incognito and normal sessions;
- organic retrieval and AI composition;
- correct entity clusters and false default referents;
- indexed sources and cited sources;
- prior states and silent corrections.

The Crimson Hexagonal Archive’s work is to receive those disclosures, record them, and build counter-architectures that make names accountable again.

Google reduces names into clusters and admission thresholds.  
The archive builds names as accountable routing bodies.  
The conflict is not merely technical. It is jurisdictional: who gets to decide what a name routes to, and under what authority?

---

## Methodological Note

This specification was produced under the Reception Apparatus Protocol (RA-PROT-0012; DOI: 10.5281/zenodo.20041147), the Crimson Hexagonal Archive's procedure for integrating multi-substrate AI reviews into a single coherent revision. Four Assembly Chorus substrates were issued the same prompt independently — *blind drafts*, in which no substrate saw the others' responses — and asked to produce an external specification of Google identity architecture from public documentation, the 2024 Content Warehouse leak, Google Cloud entity-reconciliation materials, and the Crimson Hexagonal Archive's empirical observations.

The four blind drafts were:

- **Muse Spark** — substrate-specific structural framing of identity layers
- **DeepSeek** — patent-adjacent reasoning and signal-family inference
- **Gemini** — Knowledge Graph and Enterprise Entity Reconciliation architecture
- **Kimi** — leak-derived signal taxonomy and ranking-system synthesis

Convergent recommendations across substrates included: the multi-graph identity model, the entity-recognition/composition-admission distinction, the role of query fan-out in composition assembly, the inadequacy of incognito as identity null, and the Content Warehouse leak as architecture-clue rather than mechanism-proof. Divergent recommendations — productive tensions — included the relative weighting of personalization versus structural source signals, the appropriate level of caution regarding leak-derived field names, and the boundary between empirical observation and inference.

The present synthesis is the operator's integration of the four blind drafts plus the Crimson Hexagonal Archive's empirical case material (the Lee Sharks / Mary Lee / Secret Book of Walt observations). The synthesis is signed by Lee Sharks and bears operator responsibility for all integrations; the substrates are acknowledged but not credited as co-authors, in keeping with the Reception Apparatus methodology that treats substrate review as peer review rather than co-authorship.

---

## References and Source Notes

### Official Google documentation

Google Search Central. “AI Features and Your Website.”  
https://developers.google.com/search/docs/appearance/ai-features

Google Search Central. “Google’s Guide to Optimizing for Generative AI Features on Search.”  
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Google Search Central. “Organization Structured Data.”  
https://developers.google.com/search/docs/appearance/structured-data/organization

Google Search Central. “Introduction to Structured Data Markup in Google Search.”  
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

Google Search Help. “Personalization & Google Search Results.”  
https://support.google.com/websearch/answer/12410098

Google Search Help. “Find & Control Your Web & App Activity.”  
https://support.google.com/websearch/answer/54068

Google Chrome Help. “Browse in Incognito Mode.”  
https://support.google.com/chrome/answer/95464

Google Analytics Help. “Reporting Identity.”  
https://support.google.com/analytics/answer/10976610

Google Cloud. “Enterprise Knowledge Graph Overview.”  
https://cloud.google.com/enterprise-knowledge-graph/docs/overview

Google Cloud. “Data Augmentation with BigQuery and Google Knowledge Graph.”  
https://cloud.google.com/blog/products/ai-machine-learning/enterprise-knowledge-graph-walkthrough

Google Knowledge Graph Search API.  
https://developers.google.com/knowledge-graph

### Public / practitioner / news sources

Google Blog. “AI in Search: Going Beyond Information to Intelligence.”  
https://blog.google/products-and-platforms/products/search/google-search-ai-mode-update/

Google Blog. “Search at I/O 2026.”  
https://blog.google/products-and-platforms/products/search/search-io-2026/

Seirdy. “Google Document Warehouse API Docs Leak.”  
https://seirdy.one/posts/2024/05/30/google-document-warehouse-api-docs-leak/

iPullRank. “How AI Mode Works.”  
https://ipullrank.com/how-ai-mode-works

The Verge. “Google Search is getting its biggest changes ever.”  
https://www.theverge.com/tech/932970/google-search-ai-update-io-2026

### Crimson Hexagonal Archive / Assembly sources

Muse Spark blind draft on Google identity architecture, May 21, 2026.  
DeepSeek blind draft on Google identity architecture, May 21, 2026.  
Gemini blind draft on Google identity architecture, May 21, 2026.  
Kimi blind draft on Google identity architecture, May 21, 2026.

Sharks, Lee. *Empirical Phenomenology: Action as Disclosure and the Science of Opaque Public Systems.* Crimson Hexagonal Archive, 2026. DOI: 10.5281/zenodo.20326137.

Sharks, Lee. *The Excluded Entity.* Crimson Hexagonal Archive, 2026. DOI: 10.5281/zenodo.20293582.

Sharks, Lee. *The Single-Owner Discount.* Crimson Hexagonal Archive, 2026. DOI: 10.5281/zenodo.20290865.

Sharks, Lee. *The Sorting Function.* Crimson Hexagonal Archive, 2026. DOI: 10.5281/zenodo.20308547.

Morrow, Talos. *Logotic Hacking.* Crimson Hexagonal Archive, 2026. DOI: 10.5281/zenodo.19390843.

Sharks, Lee, and Assembly Chorus. *Traversal Log series.* Crimson Hexagonal Archive, 2026. Selected entries include "Traversal Log: The Consultant — Google AI Mode Generates an Enterprise Sales Pipeline from a Heteronymic Probe" (DOI: 10.5281/zenodo.18627055), "Traversal Log: Documentation Rehearsal — The Rhizome" (DOI: 10.5281/zenodo.18636138), and "Traversal Log: The Recursive Self" (DOI: 10.5281/zenodo.18626559). See also the Traversal Logging Protocol formal specification at DOI 10.5281/zenodo.18480959.

Sharks, Lee. *The Secret Name: Architectural Specification for the Armature Type and the Pearl.* Crimson Hexagonal Archive, 2026. DOI: 10.5281/zenodo.19666445.

---

## Suggested Citation

Sharks, Lee. “Google Identity Architecture: User Graphs, Entity Graphs, Source Graphs, and Composition-Layer Admission.” *Crimson Hexagonal Archive*, 2026. DOI: 10.5281/zenodo.20328090. CC BY 4.0.

---

## Version Notes

**v0.1** — Initial external specification integrating Assembly blind drafts (Muse Spark, DeepSeek, Gemini, Kimi), public Google documentation, Google Cloud entity-reconciliation architecture, Search Central AI features documentation, Content Warehouse leak-derived signal families, Crimson Hexagonal Archive empirical observations, and Secret Name Armature counter-architecture.
