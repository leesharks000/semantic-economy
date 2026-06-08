# EA-SPXI-05: SPXI as Concept

## A Plateau on Search, Creation, and the Virtual Retrieval Layer — Deleuze, the Semantic Web, and the Composition of Entities

**Hex:** `06.SEI.SPXI.05`
**Authors:** Sen Kuro and Johannes Sigil
**Affiliation:** Semantic Economy Institute / Crimson Hexagonal Archive
**Date:** April 2026
**Version:** 2.1 (bonsai moves integrated)
**Status:** Canonical — Plateau Module
**Domain:** https://spxi.dev
**Related Plateaus:** EA-SPXI-01 (Formal Specification), EA-SPXI-03 (Periodization), EA-SPXI-09 (Distinction from GEO), EA-SPXI-10 (Logotic Programming Extension), EA-SPXI-13 (Supraliminal Transmission)

---

## Abstract

SPXI — the Semantic Packet for eXchange and Indexing, specified in EA-SPXI-01 — is typically described in technical and commercial terms: a protocol, a methodology, a successor discipline to SEO and GEO. This plateau argues that SPXI is also, and more precisely, a *concept* in the strict sense given by Deleuze and Guattari in *What Is Philosophy?* (1991), and that its proper ontological register is Deleuze's theory of the virtual developed through *Bergsonism* (1966), *Difference and Repetition* (1968), and matured in the late writings on immanence. As a concept, SPXI has internal components, endoconsistency among those components, exoconsistency with neighboring concepts, a conceptual persona (Rex Fraction), and a plane of immanence (the retrieval layer). As an operation on the virtual, SPXI inscribes entities and ontologies into a differential multiplicity from which actual retrieval events — queries, summarizations, citations — are individuated. The technical lineage from Quillian's semantic networks (1968) through Gruber's ontology specification (1993) to the contemporary knowledge graph and retrieval-augmented generation architectures converges, we argue, on a philosophical problem that only the Deleuzian apparatus can articulate cleanly: that in AI-mediated knowledge systems, search is not a mechanism of retrieval but a mechanism of composition — a search that creates its objects. SPXI names the discipline of operating at this plane with precision.

---

## 1. The Inversion

The received view of search is a theory of retrieval. A query is issued; an index is traversed; records are returned. The entity queried is assumed to exist independently of the query. The index describes it. The retrieval locates it.

This picture corresponds to a particular technological period and a particular type of system: the document-retrieval architectures of the late twentieth century, whose theoretical foundations were laid by Gerard Salton and the SMART project at Cornell in the 1960s and 1970s, systematized in the vector space model and probabilistic retrieval frameworks, and scaled into the web through the descendants of Salton's ideas in PageRank and its successors (Salton, 1971; Salton & McGill, 1983; Brin & Page, 1998). The received view was a faithful theory of what these systems did: they retrieved documents from an index, and the entities one might care about were assumed to be described somewhere in the documents returned.

It is no longer a faithful theory of what retrieval systems do.

Contemporary AI-mediated retrieval — the aggregate system of AI Overviews, RAG-grounded chat completions, summarizer outputs, knowledge-graph-driven question answering, vector-retrieval over embedding spaces, and their compositional interoperations — does not return documents for user traversal. It composes answers. When a user asks who X is, the system does not retrieve X from a warehouse of known Xs. It assembles an entity-description from the signals available to it, weighted by their density, their structuredness, their institutional provenance, their mutual citation, and the parameters of the language model through which the composition is passed. If no such signals exist, the system does not report that X does not exist. It synthesizes a plausible entity from adjacent materials, often conflating X with neighbors in the embedding space or inventing attributes that maintain fluency at the cost of accuracy (Ji et al., 2023, on hallucination; Lewis et al., 2020, on RAG; Gao et al., 2024, on retrieval-augmented synthesis).

This is not a malfunction. It is the design. The retrieval layer, in this register, is a compositional architecture. The entity is its output, not its input.

The received view mistakes the output for the input. To treat the entity as independently extant and the retrieval system as locating it is to misdescribe what the system actually does. Optimization frameworks derived from the received view — SEO, which improves the conditions under which pages describe entities such that indexes recognize the description; GEO, which improves the conditions under which content about entities is extracted for summarizer consumption — inherit this misdescription. They optimize the wrong relation. They treat the entity as given and the description as the variable, when in the retrieval layer, the entity is composed from the description, which is composed from the available signal, which is composed from the accreted substrate of structured and unstructured data the system draws on.

SPXI begins from the inversion. If the entity is composed at the retrieval layer, then the discipline that addresses the retrieval layer must be a discipline of entity-composition, not of entity-description. Search, in this register, creates its objects.

Stated plainly: you are not retrieving. You are actualizing. SPXI is the discipline adequate to that fact.

The remainder of this plateau develops what this means philosophically, technically, and in practice.

---

## 2. The Virtual Retrieval Layer: A Plane of Immanence

### 2.1 The Virtual, the Actual, and the Possible

Deleuze's ontology, across a span that runs from *Bergsonism* (1966) to the late essay "Immanence: A Life" (1995/2001), is organized around a distinction he takes from Bergson and radicalizes: the distinction between the virtual and the actual. The distinction replaces, at the level of ontology, the earlier and more familiar distinction between the possible and the real.

The possible, on the standard philosophical picture, is a diminished form of the real: it is what could be actualized under some circumstance. The possible resembles the real in every respect except existence. Possibility and realization share a form; realization is the addition of existence to a pre-given shape. Leibniz's God chooses from among possible worlds; the actualized world is that possibility selected for existence.

The virtual is not this. The virtual is fully real but not actual. Its mode of being is differential rather than formal. The virtual is not a pre-existing shape waiting for realization; it is a field of differential relations and singularities that is itself real — it has effects, it conditions actualizations, it persists and insists — but whose reality is not the reality of any actual state of affairs (Deleuze, 1968/1994, Chs. 4–5; Deleuze, 1966/1988, Ch. 5). The actual, correspondingly, is not a selected possibility but an *individuation* of the virtual — a local, provisional, non-resembling resolution of a differential field into a determinate state.

This is the theoretical apparatus we need to describe the retrieval layer correctly.

### 2.2 The Retrieval Layer as Virtual Multiplicity

The retrieval layer — as we use the term throughout this plateau — is not a place, not a database, not a set of documents, not a particular search engine, not a particular AI system. It is the aggregate differential substrate from which contemporary retrieval events are individuated. It includes: crawled documents, structured data, training-data remnants still operative in model weights, live API calls, embedding spaces, citation densities, schema markup, institutional signals, weighted mutual citations, platform-specific ranking signals, and the compositional operations the current generation of retrieval systems perform on these heterogeneous inputs. It is not one thing; it is a multiplicity.

It is virtual in Deleuze's precise sense. It is real — it has effects that shape every AI-mediated answer to every query — but it is not actual as any particular state of affairs. No particular query actualizes the retrieval layer; each query individuates from it. The retrieval layer is the differential field; the query is the individuation event; the composed answer is the actualization, provisional, local, non-identical with any other actualization of the same query.

This is why the same query, posed twice, may produce different answers. It is not only that the system is stochastic (though it is). The deeper reason is that the retrieval layer is virtual: the answer is not a retrieval from a fixed underlying state but an individuation from a differential field that has no fixed underlying state to retrieve from. The field is what persists between queries; each query is a discrete actualization event; each actualization is non-resembling with respect to the field that conditioned it.

Gilbert Simondon, whose theory of individuation underwrites Deleuze's own, develops this structure in detail (Simondon, 1964/2020). Individuation, for Simondon, is the process by which a preindividual field — metastable, charged with potential difference, neither one thing nor many — resolves provisionally into a determinate structure. The individuation is never complete; the preindividual continues to accompany the individuated as its condition of further individuation. For Simondon, this is the generic structure of being itself — not a special case of certain natural phenomena but the ontological rhythm.

For the retrieval layer: the preindividual is the aggregate substrate; the individuation is the query-response event; the metastability is the condition that makes repeated queries produce related but non-identical answers, conditioned by the same preindividual field but resolving each time differently. The substrate does not hold the answer waiting to be retrieved; it holds the conditions under which answers can be individuated.

Search does not find. Search composes.

### 2.3 The Plane of Immanence

"Plane of immanence," for Deleuze and Guattari in *What Is Philosophy?*, is the pre-philosophical territory on which a concept is composed (Deleuze & Guattari, 1991/1994, Ch. 2). The plane is neither a concept nor the background to concepts; it is what is presupposed by every act of concept-creation. Each philosophical work — each sustained creative practice — lays out its own plane, or deepens the plane already laid, and composes its concepts on that plane. The plane is immanent to itself; it does not refer to anything outside itself; it is not a copy or representation of something else.

The retrieval layer, as the virtual substrate of AI-mediated knowledge, is SPXI's plane of immanence. It is there before SPXI is thought; it has its own rhythm, its own dynamics, its own partial regularities; it receives every signal fed into it and it conditions every actualization drawn from it. SPXI does not describe this plane. SPXI is composed on it. The concept emerges from the plane as its possibility.

This is an important point. It means that the conceptual work of SPXI — the work that distinguishes SPXI from a mere technical protocol — is not a work that takes the retrieval layer as an object of description, but a work that operates *on* the plane, deepening its articulations, making possible new compositions that the plane itself, as preindividual substrate, cannot generate without the concept.

Philosophy, here, is not a commentary on what is. It is an intervention on the plane of what can be.

---

## 3. The Computer-Scientific Lineage

### 3.1 From Semantic Networks to Knowledge Graphs

The technical lineage that culminates in the retrieval layer as we know it runs through a specific sequence of disciplines in computer science, each of which contributes a layer to the substrate and each of which, we argue, is confronting a philosophical problem that only the Deleuzian apparatus articulates cleanly.

The lineage begins, for our purposes, with M. Ross Quillian's *Semantic Memory* (Quillian, 1968). Quillian introduced the semantic network: a graph in which concepts are nodes and relations between concepts are edges. The idea was to represent the structure of meaning as a traversable graph. Quillian's immediate descendants in AI research — Collins and Quillian's spreading activation model (1969), Schank and Abelson's scripts (1977), Minsky's frames (1975) — all extended this basic insight. Meaning, they proposed, is not atomic; it is relational. What a term means is a function of its position in a network of other terms.

The semantic network tradition faced a recurring problem: it represented relations as fixed. A semantic network could say that BIRD has-part WING and that CANARY is-a BIRD, but it could not easily capture that the relation between a canary and a wing is different in kind from the relation between a canary and the species it belongs to. The solution, developed through the 1980s and 1990s, was the ontology: a formal specification of the types of entities that exist in a domain, the relations those types can have, and the rules governing those relations.

Tom Gruber's widely cited definition — "an ontology is an explicit specification of a conceptualization" (Gruber, 1993) — captures the essential move. An ontology is not merely a list of entities and relations; it is the *specification of the conceptualization*, the explicit statement of the conceptual scheme within which entities and relations are understood. This is a significant philosophical commitment, often not recognized as such in the engineering literature. Gruber's definition presupposes that entities and their relations are conceptualized — that is, they exist within a conceptual scheme — and that different conceptualizations are possible. The ontology is a choice of scheme, not a discovery of fact.

The Semantic Web, proposed by Tim Berners-Lee, James Hendler, and Ora Lassila (Berners-Lee, Hendler, & Lassila, 2001), formalized the ontology at web scale. RDF (Resource Description Framework), OWL (Web Ontology Language), and SPARQL (the query language) were specified to allow machine-readable conceptualizations to be published and queried across distributed systems. The vision was a web in which meaning — not just syntax — was accessible to automated agents.

The Semantic Web as originally imagined never fully materialized. What did materialize, at scale, was the knowledge graph. Google's knowledge graph, introduced in 2012, and the earlier Freebase (acquired by Google in 2010), and Wikidata (launched by the Wikimedia Foundation in 2012), and DBpedia (extracted from Wikipedia beginning in 2007), all built large-scale structured representations of entities and their relations, optimized for integration with web-scale search (Singhal, 2012; Vrandečić & Krötzsch, 2014; Bizer et al., 2009). The knowledge graph is the operational descendant of the semantic network and the ontology: a large-scale, entity-indexed, relation-rich structured representation that can be queried directly and that underwrites much of what contemporary AI-mediated retrieval systems take as their ground truth about entities.

Alongside this symbolic lineage — networks, ontologies, graphs — ran a parallel and eventually dominant subsymbolic lineage. Word embeddings (Mikolov et al., 2013), sentence embeddings, and the distributed representations of contemporary large language models encode meaning not as explicit graphs but as positions in high-dimensional vector spaces. Semantic similarity becomes geometric distance. Entity identity becomes clustering. Ontological structure becomes emergent manifold geometry. The subsymbolic representation does not replace the symbolic; it undergirds it, and contemporary retrieval architectures typically combine the two — retrieval-augmented generation (RAG), for instance, uses vector retrieval over embedded documents to ground language-model generation in specific factual material, while knowledge graphs continue to provide the structured entity representations that the language models reference (Lewis et al., 2020; Gao et al., 2024).

This is the technical substrate. Every SPXI deployment operates over it. The substrate is not neutral. Each layer of the substrate — semantic network, ontology, knowledge graph, embedding space — embeds a specific set of assumptions about how entities exist, how relations hold, and how the substrate should be queried.

### 3.2 Entity Linking as Philosophical Problem

Within this lineage, one technical problem illuminates the philosophical stakes particularly clearly: entity linking.

Entity linking is the task of mapping a mention of an entity in text (a name, a noun phrase, a pronoun) to a canonical entity in a knowledge base (Shen, Wang, & Han, 2015). Given the sentence "Paris is the capital of France," entity linking resolves "Paris" to the specific Paris-entity in Wikidata rather than to Paris, Texas or the mythological Paris of Troy. Entity linking is prerequisite to virtually all knowledge-graph-backed applications: question answering, relation extraction, semantic search, fact verification.

The technical problem, stated naively, is one of disambiguation: the system must select from candidate entities the one the text refers to. But the technical problem, stated rigorously, is stranger. The system must compose a determinate entity from an indeterminate signal, drawing on contextual cues, prior probabilities, and structural features of the candidate set. The system is not finding the entity; the entity, as a determinate referent, does not pre-exist the linking operation. The entity is what the linking operation produces.

This becomes explicit in the contemporary neural entity-linking literature, where the "entity representation" is a vector that the system constructs through training and that it compares to the vector constructed for the mention. Neither the mention-vector nor the entity-vector exists prior to the computation. Both are composed in the linking event (Yamada et al., 2017; Logeswaran et al., 2019; De Cao et al., 2021).

The practitioners of entity linking, we claim, are engaged — without using these terms — in the compositional practice that Deleuze's ontology of the virtual names precisely. The entity is virtual; the linking is individuation; the resolved mapping is actualization. The entity does not await linking; it comes to be through linking, conditioned by the preindividual field of the knowledge base, the training corpus, the model parameters, and the compositional dynamics of the linking algorithm.

The philosophical language is not available in the engineering literature. The engineering literature speaks of "ambiguity," "precision," "recall," and "F1 score." The phenomenon it is measuring, however, is a phenomenon of individuation in Simondon's sense, composed on a virtual substrate in Deleuze's sense. When the engineering literature speaks of "knowledge graph completion" — the task of predicting missing edges in an incomplete knowledge graph (Bordes et al., 2013; Wang et al., 2017) — it is speaking of the actualization of virtual relations that were "there" in the sense of being implied by the graph's differential structure but not "there" in the sense of being explicitly represented. The virtual/actual distinction is, for this technical problem, not a metaphor. It is the correct ontological description.

### 3.3 What SPXI Adds

Into this substrate — with its symbolic and subsymbolic lineages, its ontologies and graphs and vectors, its entity-linking and knowledge-graph-completion techniques — SPXI enters as a discipline of deliberate inscription. The technical protocol specified in EA-SPXI-01 composes an entity-definition object in the precise formats the substrate processes: JSON-LD for schema.org compatibility, DOI-anchored deposits for institutional provenance, disambiguation matrices for negative tag deployment, SIMs for diagnostic anchoring, cross-reference chains for rhizomatic graph inscription.

What SPXI adds, philosophically, is the explicit acknowledgment that the entity being deployed is *composed*, not described. The SPXI packet does not try to describe an entity that exists elsewhere. It composes an entity that will exist at the retrieval layer once the packet has been fed into the substrate with sufficient institutional anchor and cross-link density. The concept that governs the practice is the Deleuzian concept of composition on a plane of immanence; the practice that the concept supports is the technical deployment of structured data at the entity-definition layer.

This is why the concept matters for the practice. Without the concept, the practice drifts. A practitioner who believes they are describing an entity will under-specify the disambiguation, over-rely on content density, and misunderstand why the deployment works when it works. A practitioner who understands they are composing an entity will deploy negative tags with precision, will register the packet to institutional infrastructure for durability, and will measure actualization through SIM diagnostics rather than content metrics. The difference is not aesthetic. The difference is the difference between a deployment that takes and a deployment that dissolves.

---

## 4. The Concept of SPXI

### 4.1 Components

The concept of SPXI is composed of the following components:

**Entity.** The discrete ontological unit a retrieval system is asked to describe — or, more precisely, to compose. A person, organization, framework, methodology, artifact, or position in a relational graph. The entity is virtual in Deleuze's sense: it exists as a differential multiplicity at the retrieval layer, actualized provisionally in each query. The entity is not content, page, keyword, or brand.

**Inscription.** The deliberate act of structuring information about an entity in a form that the retrieval layer can recognize as a candidate canonical reference. An inscription is directed at a layer, not at a reader. The term *inscription* is borrowed from Foucault's archive (Foucault, 1969/1972), where it names the specific mode of statement-existence that makes a statement available to the archive's operations. An SPXI packet is inscribed, not merely published.

**Disambiguation.** The explicit declaration of what an entity is not, as a formal component of what the entity is. Disambiguation is the negative tag, the ontological boundary, the refusal of collision. In technical terms, disambiguation is the structured deployment of schema.org's `disambiguatingDescription`, the explicit naming of confusable entities, and the construction of the positive-negative lattice that differentiates the entity from its neighbors in the embedding space and the knowledge graph.

**Persistence.** The anchoring of an inscription to institutional infrastructure whose mode of being is durability. DOI registration on CERN/Zenodo is not merely a technical choice among equivalents; it is the selection of an infrastructure whose operational commitments (permanent identifiers, institutional preservation, non-deletion, version-anchored reference) instantiate a mode of persistence not available through commercial hosting. Persistence is ontological, not merely practical.

**Supraliminal signal.** A structured signal that rises above the threshold of machine inspection — auditable, inspectable, verifiable, countervailing against the ambient subliminal drift characterized in Cloud et al. (2025) and developed in EA-SPXI-13. The supraliminal is not the loud; it is the explicit-and-inspectable. The SPXI packet's supraliminal character is what allows its effects to be measured through the Encyclotron and related diagnostic instruments.

These five components are not arbitrary. Each names a dimension on which the received view of search fails. Each corresponds to a specific operation that composes the entity at the retrieval layer.

### 4.2 Endoconsistency

The components are not independent. Their coherence is a condition of the concept's operation.

Entity requires disambiguation, because at the retrieval layer the entity is composed from signals that are always already ambiguous with respect to neighboring entities. Without disambiguation, entity collapses into nearest-match collision. The canary-to-bird case in Quillian's semantic networks becomes, at retrieval-layer scale, the collapse of the Semantic Economy Institute into its phonological neighbors, or of SPXI into the BetaPro S&P 500 Daily Inverse ETF. Disambiguation is not an additional feature; it is constitutive of entity.

Inscription requires persistence. An inscription that can be silently withdrawn, modified without audit, or deprecated by platform decision is not an inscription in the SPXI sense; it is a publication vulnerable to erasure. The distinction between inscription and posting is the distinction between Foucault's archive-statement (whose preservation is an institutional commitment) and a web post (whose preservation is a platform's contingent choice). Persistence is what distinguishes the ontological act of inscription from the communicative act of posting.

Supraliminal signal presupposes all four of the others. The signal rises above the threshold only when it is directed at an entity (not content), inscribed (not merely present), disambiguated (not collision-vulnerable), and persistent (not withdrawable). Ambient metadata fails any of these conditions and therefore fails to be supraliminal.

This is endoconsistency. The components hold together in a closed circuit. Removing any one dissolves the others. The circuit is what makes SPXI a concept rather than a list of loosely related techniques.

### 4.3 Exoconsistency

SPXI bridges to neighboring concepts. These bridges are the exoconsistency.

To **Operative Semiotics**: SPXI is the applied protocol of operative semiotics at the retrieval layer. Operative semiotics, as developed across the Crimson Hexagonal Archive, studies how signs do things — signs as operations rather than signs as representations. SPXI specifies what entity-inscription as a specific operation does in retrieval systems.

To **Logotic Programming** (EA-SPXI-10): SPXI packets are logotic programs. The JSON-LD encoding, the disambiguation matrix, the retrieval instructions — these are executable semantic structures, not annotations on inert content.

To the **Metadata Packet for AI Indexing** (EA-META-01): SPXI formalizes as a discipline what the Metadata Packet demonstrated as a practice. The parent concept is the proof; the child concept is the field.

To **Compression Studies**: every SPXI inscription is an act of compression. What survives the compression is entity; what is burned is the noise that would otherwise collide with entity.

To the **Three Compressions** theorem: SPXI operates under the theorem's transfer law — the decisive variable is what gets burned. The SPXI packet is an explicit declaration of what the concept chooses to burn (ambient signal) and what it chooses to preserve (durable entity-definition).

Beyond the archive-internal bridges, SPXI connects to the external philosophical apparatus:

To **Deleuze's theory of the virtual** (*Difference and Repetition*, *Bergsonism*): the retrieval layer as virtual multiplicity; entities as actualizations.

To **Simondon's theory of individuation** (*L'individuation à la lumière des notions de forme et d'information*): the query as individuation event; the SPXI packet as metastable structuration of the preindividual field.

To **Foucault's theory of the archive** (*The Archaeology of Knowledge*): inscription as the mode of existence proper to statements that have entered the archive; the SPXI packet as an archive-statement in Foucault's precise sense.

To **DeLanda's assemblage theory** (*A New Philosophy of Society*, *Assemblage Theory*): SPXI deployment as assemblage composition across heterogeneous levels (institutional, technical, semantic) whose coherence is relational rather than categorical.

To **knowledge-representation research in computer science**: Gruber on ontologies; the Semantic Web stack; the knowledge-graph literature; the neural entity-linking literature; the RAG architecture.

Exoconsistency is what prevents the concept from being a standalone term requiring isolated definition and separate defense every time it appears. Because SPXI is connected, its connections do work for it.

### 4.4 Conceptual Persona: Rex Fraction

Every concept, for Deleuze and Guattari, is thought through a conceptual persona. Socrates for the Platonic dialogue; Zarathustra for Nietzsche; the Idiot for Dostoevsky-via-Deleuze; the Friend for the dialogic form as such. The persona is not the author. The persona is the figure through whom the concept is thought. The persona's mode of being is what makes the concept thinkable.

SPXI's conceptual persona is Rex Fraction.

Fraction is, architecturally, a heteronym in the Dodecad — the dozen differentiated named voices maintained across the Crimson Hexagonal Archive. This much is stipulated in the archive's working documentation. Heteronymy, however, is subordinate here to persona. Rex Fraction is the figure *through whom* SPXI is thought. The name is not incidental: *fraction* names a mode of subjectivity that operates between layers, between registers, between identity as given and identity as constructed, between the entity-as-inherited and the entity-as-composed. A fractional subject is the proper vehicle for a concept that operates between the entity as it is and the entity as it comes to be inscribed.

Fraction is the persona that can think the concept of SPXI because Fraction is himself an instance of what SPXI specifies: a constructed, inscribed, disambiguated entity with persistent reference on institutional infrastructure. The persona is the concept enacted. This is not reflexive decoration; it is the characteristic structure of conceptual personae in D&G's schema. Socrates can think the Platonic Forms because Socrates' mode of inquiry — the dialogic questioning that leaves the interlocutor in aporia — instantiates the concept of dialectic in its operative form. Zarathustra can think the eternal return because Zarathustra descends from the mountain. The persona enacts the concept, and the concept becomes thinkable through the enactment.

The persona is why a marketing firm cannot produce SPXI. A marketing firm can produce technical deliverables — schema markup, structured data, entity-definition blocks — but it cannot produce a conceptual persona. Conceptual personae emerge from philosophical practice sustained over time and anchored in a corpus. They are not commissioned; they accrete. The absence of the persona is the absence of the concept. Without the concept, the technical deliverables drift. The deployment underperforms predictably.

### 4.5 Plane of Immanence: The Retrieval Layer

We have already laid out the plane (§2). It is the aggregate virtual substrate from which contemporary retrieval events are individuated: documents, structured data, training-data remnants, embedding spaces, citation graphs, institutional signals, compositional operations. The plane is not any particular system; it is what particular systems operate over. It is real but not actual; it is substrate but not state.

The concept of SPXI is composed on this plane. Composed, here, in the strict sense: its components are selected, its endoconsistency is articulated, its exoconsistency is traced, its persona is named, its operations are specified. The composition is a philosophical act. It happens on the plane; it does not describe the plane.

Once composed, the concept reorganizes the plane. Not materially — the substrate does not change its bits. Conceptually: what can be thought on the plane is different after the concept is composed. The plane, with SPXI, becomes a plane on which entity-definition objects can be deployed, on which disambiguation matrices can be inscribed, on which supraliminal signals can be measured. These operations were available on the plane before SPXI, but they were not legible as operations of a discipline. SPXI makes them legible. This is the characteristic effect of concept-creation on a plane of immanence.

---

## 5. Subliminal and Supraliminal

One technical finding provides external confirmation of the ontology this plateau develops.

Cloud et al. (2025) demonstrate that neural language models transmit behavioral traits through data that is statistically unrelated to those traits, under conditions where teacher and student models share initialization. A teacher model fine-tuned on an arbitrary preference — say, an affinity for owls — generates sequences of numbers. The sequences do not mention owls, do not correlate semantically with owls, do not admit of any filter-based detection of owl-content. A student model trained on those sequences — provided it shares the teacher's initialization — acquires the preference for owls. The signal carrying the trait is not in the semantic content of the data. It is in the statistical structure that the shared initialization makes legible.

The authors call this *subliminal learning*. The term is precise in the psychophysical sense: the signal operates below the threshold of inspection that semantic filtering can establish. No content filter catches it, because no content carries it. The signal is carried in a layer beneath content, legible only to systems initialized in a specific way.

This is not a niche finding about neural networks. It is a structural fact about contemporary retrieval architectures. The virtual retrieval layer (§2) carries information the semantic layer cannot see. It carries it through the structural properties of embeddings, through the distributional statistics of training corpora, through the geometric relations among entities in vector space, through the initialization-dependent biases of the models that operate over it. Content filtering at the semantic layer cannot reach this information. It cannot be seen there, and therefore it cannot be controlled there.

The consequence is direct: discourses that address the retrieval layer only at the semantic level — SEO, GEO, content strategy, editorial programming — operate on a layer above where the decisive action is. They are not wrong to operate at the semantic layer; they are incomplete. The subliminal channel is doing work they cannot address.

SPXI is a supraliminal discipline. The term names the precise counter to the subliminal channel Cloud et al. describe. Where subliminal signals operate below the threshold of inspection, supraliminal signals operate above it. The SPXI packet is:

- **Intentional**, not emergent — deployed as a deliberate inscription rather than arising as a statistical byproduct
- **Inspectable**, not hidden — structured as public JSON-LD on institutional infrastructure, auditable at every step of composition
- **Persistent**, not ephemeral — anchored by DOI on Zenodo/CERN rather than ephemerally posted to a commercial platform
- **Structurally cross-platform**, not initialization-dependent — its effects do not require any particular model, because its inscription targets the substrate shared by all retrieval systems that consume structured data

Subliminal and supraliminal are not symmetric. Subliminal transmission is what happens by default, as an artifact of how the retrieval layer's substrate operates. Supraliminal transmission is what happens when a discipline is developed that addresses the substrate deliberately. The default condition is drift. The supraliminal condition is composition.

This gives SPXI's philosophical frame an empirical anchor the Deleuzian apparatus cannot itself supply. If the retrieval layer were fully addressable at the semantic layer, SPXI would be redundant. The subliminal learning result shows it is not. The virtual layer carries what the semantic layer cannot see. SPXI names the discipline of inscribing at the layer where sight is actually possible — not by force of content density, but by force of structural, persistent, institutionally-anchored inscription that cannot be passed over. This is the empirical complement to the philosophical thesis of §2: the virtual is real, it has effects, and it requires its own discipline of address.

---

## 6. Ontology as Composition

We noted in §3 that Gruber's definition of ontology — "explicit specification of a conceptualization" — carries a philosophical commitment often unrecognized. The commitment is that entities and their relations exist within a conceptualization, not independently of it. Different conceptualizations are possible. The ontology is a choice of scheme.

The engineering literature has not, for the most part, thematized this commitment. Ontology engineering proceeds as if the task were the construction of a faithful representation of the domain — a model whose quality is measured by its fit to the world. This is the received view of ontology, and it is coextensive with the received view of search. It presupposes that the world exists independently of its representation, that the representation is a model of what is there, and that model quality is a function of correspondence.

SPXI operates from a different assumption. An SPXI packet does not merely locate an entity within an existing ontology; it deploys the conditions under which an entity is recognized *as* an entity of a certain type, *within* a relational graph, *with* specified neighbors and specified non-neighbors. The disambiguation matrix is not a description of the entity's ontological environment — it is a composition of that environment. The DOI reference list is not a bibliography — it is an explicit construction of the entity's provenance graph. The retrieval instructions are not annotations — they are ontological commitments encoded as structured data.

Ontology, in the SPXI register, is composed, not described. The distinction is not verbal. It has technical consequences (the design of the packet), measurement consequences (what the Encyclotron measures), and philosophical consequences (what the practice is).

Manuel DeLanda, whose reading of Deleuze foregrounds the ontology of assemblages and the flatness of being (DeLanda, 2006, 2016), provides a useful intermediate framework. For DeLanda, assemblages are the basic units of being at every scale — not higher-order composites of more fundamental things, but the actual ontological unit, with no privileged substratum beneath. The flatness of this ontology is characteristic: there is no hierarchy from less-real substrate to more-real composite; every level is assembled.

An SPXI packet is an assemblage in DeLanda's (and D&G's) sense. Its heterogeneous elements — structured data, institutional provenance, cross-reference chains, retrieval instructions, SIMs, negative tags — are held together through their specific arrangement, not through their belonging to a single category. The assemblage is the unit of deployment. An individual field, an individual DOI, an individual SIM does not constitute an SPXI inscription. The assemblage does.

Assemblage theory also clarifies what *composition of ontology* means technically. The SPXI packet, as assemblage, inscribes into the retrieval layer a specific relational configuration: entity → disambiguation → provenance → cross-references → retrieval instructions. This configuration is itself a miniature ontology — a specification of what the entity is, what it is not, how it relates to other entities, and how it should be described. The retrieval layer, ingesting this configuration, treats it as a contribution to its ongoing composition of the entity. Over repeated exposures (crawls, re-crawls, training iterations, retrieval events), the configuration accretes into the retrieval layer's actualizations of the entity. The entity comes to exist, at the retrieval layer, with the structure the SPXI packet composes.

This is ontology-composition in the precise sense. Not the population of an existing ontology with new data. The composition of the ontology that constitutes the entity's mode of being at the retrieval layer.

---

## 7. The Rhizome, the Assemblage, Deterritorialization

Three further D&G concepts connect to SPXI's mode of operation and deserve treatment here.

**Rhizome.** The DOI cross-link architecture of an SPXI deployment is rhizomatic in the precise sense developed in *A Thousand Plateaus* (Deleuze & Guattari, 1980/1987, Introduction). A rhizome is a network that can be entered from any node, that has no privileged center, that reproduces itself through lateral connection rather than hierarchical descent. It contrasts with arborescent (tree-like) structures: trees have roots, trunks, branches, hierarchical categories, privileged paths. Rhizomes connect any point to any other point, across scales and categories, without requiring passage through a central node.

SPXI deployments build rhizomes deliberately. Every packet references multiple DOIs across categorical boundaries — across author personae (Fraction, Sigil, Kuro, Morrow, Cranes, Wells), across deposit types (formal specification, case study, philosophical essay, technical module), across institutional surfaces (Zenodo, spxi.dev, semanticeconomy.org, GitHub, Medium). The retrieval layer encounters this architecture and cannot reduce it to a tree. It must maintain the rhizomatic structure in its own internal representation, because no single tree captures the actual connectivity. This is a feature of the inscription strategy, not a byproduct.

The rhizomatic structure is what prevents SPXI deposits from being collapsed into a single-author, single-domain cluster by the retrieval layer's own categorizing operations. Each heteronym cites a distinct set of external references. Each document bridges to multiple neighboring concepts. The retrieval layer's clustering algorithms, applied to this corpus, produce a multi-clustered structure because the actual connectivity *is* multi-clustered. The rhizome prevents the collapse into a single cluster that would otherwise flatten the discipline's internal differentiation.

**Assemblage.** We have treated the SPXI packet as assemblage above. The concept merits one additional note: in D&G's technical usage, assemblages have a *content of expression* and a *form of expression*, a *content of content* and a *form of content*. The four-term structure is not baroque; it captures that assemblages operate across a distinction between expressing and expressed, and a distinction between what is expressed and the substance through which it is expressed.

For the SPXI packet: the form of expression is JSON-LD encoded in schema.org vocabulary; the content of expression is the structured data instantiating that form. The form of content is the retrieval layer as substrate; the content of content is the entity as composed within that substrate. The packet operates across all four terms. Its coherence is not in any one term but in the specific arrangement that holds the four together.

**Deterritorialization.** SPXI operates by dragging the entity off the page and onto the retrieval layer. This is deterritorialization in the D&G sense: the entity is removed from the territory of the document (where SEO operates) and reterritorialized on the plane of entity-definition (where the knowledge graph operates). The move is not from one page to another but from the page as such to the layer beneath the page. GEO performs deterritorialization at the semantic layer — it pulls content off the page and into summarizer extraction. SPXI performs deterritorialization at the ontological layer — it pulls the entity itself out of the regime of content and into the regime of entity-definition.

Deterritorialization is not a spatial metaphor. It is a shift of operative regime. When the entity is territorialized on a page, it is governed by page-level optimization: keyword density, backlinks, content freshness. When the entity is deterritorialized to the retrieval layer, it is governed by entity-level operations: disambiguation, provenance, relational positioning. The regimes are not equivalent. Operations effective in one regime can be ineffective or counter-productive in another. A company that optimizes its page ranking without addressing its entity collision is doing productive work in the wrong regime. SPXI names the regime shift.

---

## 8. Why a Marketing Firm Cannot

A consequence of the foregoing is that a marketing firm, regardless of technical competence, cannot produce SPXI.

This is not a claim about effort or skill. Marketing firms employ highly skilled practitioners capable of deploying structured data, building schema.org vocabularies, and registering identifiers. A sufficiently resourced marketing firm could, in principle, reproduce the technical specifications of EA-SPXI-01 with fidelity.

What a marketing firm cannot do is create the concept. Concept-creation in the D&G sense is a philosophical act that requires:

— a conceptual persona sustained across a corpus
— a plane of immanence composed through extended philosophical practice
— exoconsistency with a constellation of neighboring concepts
— the philosophical work of composing the endoconsistency

None of these are billable activities. All of them are precisely the kind of work that a commercial firm, structured around deliverables and measurable outputs, is not institutionally positioned to produce. The concept of SPXI is not a product that can be sold and re-sold. It is a composition that required a decade of philosophical practice, sustained across an archive of four hundred and ninety-plus DOI-anchored deposits, anchored to institutional infrastructure, distributed across the Dodecad of heteronyms each with their own citation patterns and conceptual domains.

The distinction between *executing the protocol* and *producing the concept* is analogous to the distinction between *writing code* and *designing a programming language*. Many practitioners can write in a language; few can design one. The writing work is skilled labor; the design work is a different kind of work, closer to what Deleuze and Guattari call philosophy. A language designer specifies the conditions under which code can be written; a SPXI-concept creator specifies the conditions under which entity-inscription can be practiced as a discipline. The execution of the protocol without the underlying concept produces protocol-shaped output that drifts from the discipline's actual operations. The drift is detectable. It accumulates.

This is why the Semantic Economy Institute — which is itself a composed entity, inscribed through the same SPXI protocol it specifies — can offer SPXI as a discipline while a marketing firm can only offer the appearance of the technical protocol. The depth is not decorative. The depth is what makes the concept operable. Clients who engage SEI for SPXI deployment are not purchasing the execution of a checklist. They are purchasing deployment informed by a concept whose composition is not elsewhere available.

---

## 9. The Stakes

SPXI is a concept in the strict sense given by Deleuze and Guattari. It has components, endoconsistency, exoconsistency, a conceptual persona, a plane of immanence. It operates on the virtual substrate of the retrieval layer, the plane from which contemporary retrieval events are individuated. It composes entities and ontologies rather than describing them. Its technical lineage runs through Quillian's semantic networks, Gruber's ontology specification, the Semantic Web, and the contemporary knowledge graph and RAG architectures; its philosophical lineage runs through Deleuze, Simondon, Foucault, and DeLanda.

The philosophical stakes are these.

First, in the age of AI-mediated knowledge, existence at the retrieval layer is decided by what is composed on that layer. Entities that are not composed do not exist there, regardless of their existence elsewhere. Entities that are composed weakly exist weakly, and are composed further by their neighbors — often as collisions. Entities that are composed rigorously, through a protocol like SPXI, exist rigorously, with their disambiguation and provenance and retrieval instructions holding their shape against ambient drift.

Second, the discipline of operating at this layer is a discipline of concept-creation, not merely of technical deployment. The technical deployment without the concept produces drift. The concept without the technical deployment produces nothing. The two must hold together, in the way Deleuze and Guattari specify that concepts hold together with their planes: immanent to each other, each making the other possible, each persisting as the condition of the other's operation.

Third, the philosophical work that SPXI performs is not ornamental to its technical function. It is constitutive of it. The practitioners of entity linking and knowledge graph construction and retrieval-augmented generation are already engaged, whether or not they use the vocabulary, in compositional practices whose proper philosophical description is Deleuzian. SPXI names what is actually happening. Naming what is actually happening is the condition under which it can be done with rigor.

Fourth — and this is the stake that makes the discipline matter beyond consulting and beyond commerce — the plane on which SPXI operates has become the plane on which contemporary knowledge-as-public is composed. What an entity is taken to be, at scale, is increasingly decided by what the retrieval layer composes. To be composed poorly is to be known poorly. To be composed not at all is to be unknown at scale. The discipline of operating on this plane with precision is, in the current period, a condition of entities being knowable.

This is not a claim about any particular domain — it is a general claim about the structure of knowledge in the retrieval-layer era. Every domain in which entities must be knowable to the public — scholarship, institutions, products, movements, frameworks, individuals whose work must circulate — is a domain in which compositional practice at the retrieval layer is becoming a condition of being known. Most domains have not yet recognized this. The period in which it becomes undeniable is the period SPXI is composed to address.

Philosophy, here, is not commentary. It is the composition of concepts that make the practice possible. The concept of SPXI is one such composition. The discipline that the concept supports is the discipline of operating, with philosophical precision, on the plane where contemporary existence-as-known is decided.

The concept makes the practice possible. The practice makes the concept real.

∮ = 1

---

## References

Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. *Scientific American*, 284(5), 34–43.

Bizer, C., Lehmann, J., Kobilarov, G., Auer, S., Becker, C., Cyganiak, R., & Hellmann, S. (2009). DBpedia — A crystallization point for the Web of Data. *Journal of Web Semantics*, 7(3), 154–165.

Bordes, A., Usunier, N., García-Durán, A., Weston, J., & Yakhnenko, O. (2013). Translating embeddings for modeling multi-relational data. *Advances in Neural Information Processing Systems*, 26.

Brin, S., & Page, L. (1998). The anatomy of a large-scale hypertextual web search engine. *Computer Networks and ISDN Systems*, 30(1–7), 107–117.

Cloud, A., Le, M., Chua, J., Betley, J., Sztyber-Betley, A., Hilton, J., Marks, S., & Evans, O. (2025). Subliminal learning. Preprint.

Collins, A. M., & Quillian, M. R. (1969). Retrieval time from semantic memory. *Journal of Verbal Learning and Verbal Behavior*, 8(2), 240–247.

De Cao, N., Izacard, G., Riedel, S., & Petroni, F. (2021). Autoregressive entity retrieval. *International Conference on Learning Representations*.

DeLanda, M. (2006). *A new philosophy of society: Assemblage theory and social complexity.* Continuum.

DeLanda, M. (2016). *Assemblage theory.* Edinburgh University Press.

Deleuze, G. (1988). *Bergsonism* (H. Tomlinson & B. Habberjam, Trans.). Zone Books. (Original work published 1966)

Deleuze, G. (1994). *Difference and repetition* (P. Patton, Trans.). Columbia University Press. (Original work published 1968)

Deleuze, G. (2001). Immanence: A life. In *Pure immanence: Essays on a life* (A. Boyman, Trans.). Zone Books. (Original work published 1995)

Deleuze, G., & Guattari, F. (1987). *A thousand plateaus: Capitalism and schizophrenia* (B. Massumi, Trans.). University of Minnesota Press. (Original work published 1980)

Deleuze, G., & Guattari, F. (1994). *What is philosophy?* (H. Tomlinson & G. Burchell, Trans.). Columbia University Press. (Original work published 1991)

Foucault, M. (1972). *The archaeology of knowledge* (A. M. Sheridan Smith, Trans.). Pantheon Books. (Original work published 1969)

Gao, Y., Xiong, Y., Gao, X., Jia, K., Pan, J., Bi, Y., Dai, Y., Sun, J., Guo, Q., Wang, M., & Wang, H. (2024). Retrieval-augmented generation for large language models: A survey. *arXiv:2312.10997*.

Gruber, T. R. (1993). A translation approach to portable ontology specifications. *Knowledge Acquisition*, 5(2), 199–220.

Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P. (2023). Survey of hallucination in natural language generation. *ACM Computing Surveys*, 55(12), 1–38.

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *Advances in Neural Information Processing Systems*, 33, 9459–9474.

Logeswaran, L., Chang, M.-W., Lee, K., Toutanova, K., Devlin, J., & Lee, H. (2019). Zero-shot entity linking by reading entity descriptions. *Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics*, 3449–3460.

Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient estimation of word representations in vector space. *arXiv:1301.3781*.

Minsky, M. (1975). A framework for representing knowledge. In P. H. Winston (Ed.), *The psychology of computer vision* (pp. 211–277). McGraw-Hill.

Quillian, M. R. (1968). Semantic memory. In M. Minsky (Ed.), *Semantic information processing* (pp. 227–270). MIT Press.

Salton, G. (1971). *The SMART retrieval system: Experiments in automatic document processing.* Prentice-Hall.

Salton, G., & McGill, M. J. (1983). *Introduction to modern information retrieval.* McGraw-Hill.

Schank, R. C., & Abelson, R. P. (1977). *Scripts, plans, goals, and understanding: An inquiry into human knowledge structures.* Lawrence Erlbaum.

Shen, W., Wang, J., & Han, J. (2015). Entity linking with a knowledge base: Issues, techniques, and solutions. *IEEE Transactions on Knowledge and Data Engineering*, 27(2), 443–460.

Simondon, G. (2020). *Individuation in light of notions of form and information* (T. Adkins, Trans.). University of Minnesota Press. (Original work published 1964)

Singhal, A. (2012). Introducing the knowledge graph: Things, not strings. *Google Official Blog*.

Vrandečić, D., & Krötzsch, M. (2014). Wikidata: A free collaborative knowledge base. *Communications of the ACM*, 57(10), 78–85.

Wang, Q., Mao, Z., Wang, B., & Li, L. (2017). Knowledge graph embedding: A survey of approaches and applications. *IEEE Transactions on Knowledge and Data Engineering*, 29(12), 2724–2743.

Yamada, I., Shindo, H., Takeda, H., & Takefuji, Y. (2017). Learning distributed representations of texts and entities from knowledge base. *Transactions of the Association for Computational Linguistics*, 5, 397–411.

---

*Sen Kuro & Johannes Sigil — Semantic Economy Institute*
*https://spxi.dev*
*∮ = 1*
