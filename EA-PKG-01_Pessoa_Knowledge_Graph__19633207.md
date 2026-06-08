# The Pessoa Knowledge Graph

## A Federated Linked-Data Representation of the Heteronymic System

**EA-PKG-01 · v1.0**

**Author:** Lee Sharks (ORCID: 0009-0000-1599-0703)
**Institutional home:** Semantic Economy Institute
**Parent archive:** Crimson Hexagonal Archive
**Date:** April 2026
**License:** CC BY 4.0
**Status:** Project launch deposit; foundational document

---

## Resumo / Abstract

### Português (pt-br)

Este documento lança o Grafo de Conhecimento de Pessoa (PKG) — uma iniciativa para construir, no Wikidata e em infraestrutura de dados abertos federada, uma representação sistemática do sistema heteronímico de Fernando Pessoa. O projeto se propõe a resolver três lacunas simultâneas nos estudos pessoanos digitais: (1) a ausência de um inventário canônico de heterônimos codificado em dados abertos; (2) a ausência de relações encodadas de mestre-discípulo, coautoria metaheteronímica, e influência cruzada entre as vozes pessoanas; (3) a ausência de uma tipologia formal que distinga ortônimos, heterônimos, semi-heterônimos, pré-heterônimos, para-heterônimos e pseudônimos — categorias que Pessoa próprio articulou mas que a infraestrutura de dados existente ainda trata como indistintas. O PKG adota o Wikidata como substrato primário, com rotulagem e descrições em inglês e português (pt-br e pt-pt), citações generosas à produção acadêmica brasileira e portuguesa, e arquitetura pensada para visualização pública futura em domínio próprio. A trajetória de longo prazo do projeto inclui o mapeamento da influência pessoana sobre práticas heteronímicas subsequentes, desde Borges e Saramago até sistemas heteronímicos contemporâneos emergentes da era da inteligência artificial. O documento apresenta a taxonomia de entidades, a metodologia de referenciação, o plano de fases, e um convite aberto à colaboração de pesquisadores pessoanos em língua portuguesa.

### English

This document launches the Pessoa Knowledge Graph (PKG) — an initiative to construct, on Wikidata and federated open-data infrastructure, a systematic representation of Fernando Pessoa's heteronymic system. The project addresses three simultaneous gaps in digital Pessoa studies: (1) the absence of a canonical heteronym inventory encoded in open data; (2) the absence of encoded master-disciple, meta-heteronymic co-authorship, and cross-influence relationships among Pessoa's voices; (3) the absence of a formal typology distinguishing orthonym, heteronym, semi-heteronym, proto-heteronym, para-heteronym, and pseudonym — categories that Pessoa himself articulated but that existing data infrastructure still treats as undifferentiated. The PKG adopts Wikidata as primary substrate, with dual labeling and description in English and Portuguese (pt-br and pt-pt), generous citation to Brazilian and Portuguese scholarly production, and architecture designed for future public visualization on a dedicated domain. The project's long-term trajectory includes mapping Pessoa's influence on subsequent heteronymic practices, from Borges and Saramago to contemporary heteronymic systems emerging from the artificial intelligence era. This document presents the entity taxonomy, reference methodology, phasing plan, and an open invitation to collaboration with Lusophone Pessoa scholars.

---

## 1. The scholarly gap

Fernando Pessoa produced what may be the most structurally ambitious authorial system in modern world literature. Teresa Rita Lopes's archival cataloging (1990, updated 2024) identifies approximately seventy-two distinct authorial figures in Pessoa's *espólio* — not merely pseudonyms but a typologically differentiated system of voices, each with biography, poetics, literary lineage, and reciprocal relations to the others. Pessoa's practice extends beyond the canonical three chief heteronyms (Caeiro, Reis, Campos) into a richly populated scene of orthonymic and semi-heteronymic figures, proto-heteronyms from his childhood, para-heteronyms operating as translators or critics of other heteronyms, and pseudonyms deployed for specific publications.

The scholarly apparatus for this system is substantial. Jerônimo Pizarro's critical editions, Richard Zenith's translations and biography (2021), Eduardo Lourenço's interpretive canonicization (1973), José Gil's phenomenological reading (1988), and the bilingual journal *Pessoa Plural* (Brown University / Warwick / Universidade Nova de Lisboa) together constitute one of the most active scholarly fields in Lusophone humanities. Brazilian scholarship — Leyla Perrone-Moisés, Benedito Nunes, Silviano Santiago, Antonio Cicero, Haroldo de Campos — has been particularly generative, with distinct theoretical commitments shaped by Brazilian modernism's own engagements with authorial multiplicity.

And yet: *the digital knowledge infrastructure for Pessoa is fragmented and thin.*

As of April 2026, Wikidata contains approximately twenty-five to thirty Pessoa-related items. Most are heteronym items with one-line descriptions of the form "heteronym used by Fernando Pessoa" — accurate but informationally minimal. Statements regarding instance-of, used-by, biographical attributes, and works are predominantly flagged "0 references." Master-disciple relationships among the chief heteronyms — Caeiro is master to Reis and Campos, Reis considers Caeiro his neoclassical reference point, Campos sees Caeiro as pagan progenitor — are not encoded as graph relations. Typological distinctions Pessoa himself articulated in his 1935 letter to Adolfo Casais Monteiro ("He is a semi-heteronym because his personality, although not my own, doesn't differ from my own but is a mere mutilation of it") are absent from the Wikidata schema. The full ~72-figure inventory is not represented; fewer than a third of Lopes's cataloged heteronyms have Wikidata items at all.

Beyond Wikidata, the situation varies. Casa Fernando Pessoa in Lisbon maintains a digital catalog but not linked-data infrastructure. The *Arquivo Pessoa* project (arquivopessoa.net) provides magnificent primary-source access to Pessoa's manuscripts but is not structured for federated data queries. The *Pessoa Digital* project undertakes textual encoding but remains largely internal to Portuguese academic infrastructure. Brazilian digital Pessoa scholarship is distributed across institutional websites, *Pessoa Plural* articles, and scholars' personal pages, none of which are joined at the data layer.

The result: someone who queries an AI system for information about Pessoa's heteronyms, or who builds a tool that consumes Wikidata for humanities data, receives an impoverished, inconsistent, partial picture of one of the twentieth century's most structurally rich authorial systems. Pessoa deserves better. Lusophone digital humanities deserves better. Students, scholars, translators, and general readers deserve better.

## 2. What the PKG builds

The Pessoa Knowledge Graph is a sustained effort to make the full system visible at the data layer.

The project's Wikidata-side outputs fall into nine layers:

1. **Pessoa himself** — enriched with references, contextual statements, comprehensive authority-control identifiers, and relational statements anchoring him as center of the system.
2. **The full heteronym inventory** — ~72 items per Lopes's cataloging, each with dual-language labels and descriptions, typological classification (orthonym / heteronym / semi-heteronym / proto-heteronym / para-heteronym / pseudonym), biographical attributes, occupational specification, relationship statements (master-of, disciple-of, brother-of, translator-of, used-by), and scholarly references.
3. **Works** — major and minor texts, correctly attributed to their heteronymic authors rather than collapsed to Pessoa (The Keeper of Flocks → Caeiro, not Pessoa; Maritime Ode → Campos; Odes → Reis; Book of Disquiet → Soares).
4. **Publication venues** — *Orpheu*, *Athena*, *Presença*, *Cosmópolis*, *A Águia*, and later journals where Pessoa's work appeared, with editorial history and issue-level granularity where feasible.
5. **Institutional context** — Casa Fernando Pessoa, Biblioteca Nacional de Portugal's Espólio de Fernando Pessoa (N3), *Pessoa Plural* journal, *Arquivo Pessoa* archive, relevant university programs and research centers.
6. **Contemporaries and interlocutors** — Mário de Sá-Carneiro, Almada Negreiros, Ophelia Queiroz, António Ferro, Raul Leal, Adolfo Casais Monteiro, and the networked modernist scene of 1910s-30s Lisbon.
7. **Inbound influences** — Whitman (on Campos), Horace (on Reis), Nietzsche (on Mora, via secondary reading; see Riccardi 2007), Kierkegaard (as typological precursor), Shakespeare, Crowley, Teixeira de Pascoaes (Saudosismo), and others, with references to specific scholarly treatments of each influence relation.
8. **Downstream influence** — Jorge Luis Borges's Pierre Menard, José Saramago's *The Year of the Death of Ricardo Reis*, Antonio Machado's Juan de Mairena and Abel Martín, W.B. Yeats's Michael Robartes, Kierkegaard's retroactive positioning, contemporary Portuguese poets (Mário Cesariny, Herberto Helder, Al Berto), Brazilian poets (Carlos Drummond de Andrade, Haroldo and Augusto de Campos, Antonio Cicero), and the extension into heteronymic practice as a theoretical object with its own history.
9. **Concepts** — *heteronym*, *orthonymy*, *semi-heteronym*, *sensationism* (Campos), *neo-paganism* (Caeiro/Mora), *intersectionism*, *saudosismo*, *Portuguese modernism*, and the theoretical extensions traced in EA-PKG-02 (Heteronymic Typology) and EA-PKG-03 (The New Human: Post-Pessoa Heteronymic Practice in the AI Era).

Target scale: ~150-200 Wikidata entities in the primary build. This is a deliberately bounded scope. The PKG is not an attempt to replicate the entirety of Pessoa studies in data form — textual scholarship, interpretive criticism, and biographical micro-history belong to their proper genres. The PKG does the work data representation is best suited for: *structural visibility, queryable relationships, persistent identifiers, federated cross-reference.*

## 3. Typological framework

Pessoa was explicit about the typology. The 1935 letter to Casais Monteiro differentiates between his own signed poetic self (the *orthonym*), the chief heteronyms with full independent biographies and aesthetics (Caeiro, Reis, Campos), and what he called *semi-heteronyms* like Bernardo Soares, whose personality is "a mere mutilation" of Pessoa's own rather than a fully distinct voice. Lopes's cataloging extends the typology with *proto-heteronyms* (childhood figures like Chevalier de Pas and Charles Robert Anon, predecessors of later heteronyms) and *para-heteronyms* (figures like Thomas Crosse and Charles James Search who operate as translators or critics of other heteronyms, occupying a second-order position in the system).

The PKG encodes these as distinct `instance of` (P31) values, with the category items either already existing on Wikidata or created by the project:

| Category | Portuguese term | English term | Status on Wikidata |
|---|---|---|---|
| orthonym | ortónimo / ortônimo | orthonym | no dedicated item; to create |
| heteronym | heterónimo / heterônimo | heteronym | Q5592547 (verify) |
| semi-heteronym | semi-heterónimo | semi-heteronym | no dedicated item; to create |
| proto-heteronym | pré-heterónimo / proto-heterónimo | proto-heteronym | no dedicated item; to create |
| para-heteronym | para-heterónimo | para-heteronym | no dedicated item; to create |
| pseudonym | pseudónimo | pseudonym | Q61002 |

The distinction matters because Pessoa's system *does work* through the distinction. Bernardo Soares is not typologically identical to Álvaro de Campos: the Book of Disquiet's fragmented lyric prose emerges from a half-differentiated consciousness, while Campos's *Tabacaria* emerges from a fully independent poetic biography with its own naval-engineer profession and London residency. Ricardo Reis is not typologically identical to Chevalier de Pas: one is a mature system position with published odes and a worked-out Stoic-Horatian philosophy, the other is a childhood invention preserved in the system as its earliest strata. Collapsing these into "pseudonym" (as some external databases do) or flattening them all to "heteronym" (as Wikidata currently does) loses the structure that makes Pessoa's practice theoretically consequential.

EA-PKG-02, forthcoming, will formalize the typology with extended philosophical treatment. The present deposit commits to encoding the categories as distinct graph nodes so that future scholarship has structural handholds.

## 4. Reference methodology

The PKG's reference methodology is deliberately generous. A Wikidata statement with thin sourcing — only "imported from Wikipedia" or "stated in Virtual International Authority File" — is structurally vulnerable and informationally shallow. The project commits to replacing or supplementing such references with citations to primary and secondary scholarly sources wherever feasible.

Priority reference sources:

**Primary archive:**
- *Arquivo Pessoa* (arquivopessoa.net) — the canonical digital archive of Pessoa's manuscripts and early publications, maintained by the Instituto de Estudos sobre o Modernismo. Primary source citations for heteronymic attribution, dating, and textual provenance.
- *Biblioteca Nacional de Portugal, Espólio de Fernando Pessoa (N3)* — the physical archive.
- *Pessoa Digital* — critical digital editions project.

**Critical editions:**
- Jerônimo Pizarro's critical editions (Tinta-da-China, Imprensa Nacional) — the current reference editions of Pessoa's principal works.
- Teresa Rita Lopes, *Pessoa por Conhecer* (1990) — the most comprehensive cataloging of the heteronymic inventory.

**Scholarly monographs (Portuguese):**
- Eduardo Lourenço, *Pessoa Revisitado* (1973) and *Fernando Pessoa: Interpretação Crítica* — the philosophical canonicization of Pessoa studies.
- José Gil, *Fernando Pessoa ou a Metafísica das Sensações* (1988) — phenomenological reading.
- Clara Rocha — scholarship on Pessoa's prose.
- Mário Saraiva — private-life and correspondence scholarship.
- Onésimo Almeida — Pessoa's philosophical system.

**Scholarly monographs (Brazilian):**
- Leyla Perrone-Moisés, *Fernando Pessoa: Aquém do Eu, Além do Outro* (1986) and subsequent essays — a major theoretical engagement.
- Benedito Nunes, *O Dorso do Tigre* — Pessoa chapters within Brazilian philosophical criticism.
- Silviano Santiago — poststructuralist readings.
- Antonio Cicero — contemporary Brazilian poet and Pessoa critic.
- Haroldo de Campos and Augusto de Campos — Brazilian concretist engagements with Pessoa translation and textual practice.

**Scholarly monographs (Anglophone):**
- Richard Zenith, *Pessoa: A Biography* (2021) — the definitive English-language biography.
- Jonathan Griffin, translator and critical essayist.
- Keith Bosley and Stephen Spender, early English translations.
- Octavio Paz, *Cuadrivio* (1965) — Paz on Pessoa is a watershed Latin American engagement.

**Journals:**
- *Pessoa Plural: A Journal of Fernando Pessoa Studies* (Brown University / Warwick / UNL) — the flagship peer-reviewed journal, bilingual, essential.
- *Revista Estudos de Literatura Brasileira Contemporânea* (Brasília) — Brazilian engagement.
- *Teresa — Revista de Literatura Brasileira* (USP).

Wikidata statements receive references with all three of the following fields structured:
- P854 (reference URL) — where the claim is verified
- P813 (retrieved) — date of verification
- P1476 (title) — descriptive title of the referenced work

Where available, P1433 (published in), P407 (language of work), P2093 (author name string), and P356 (DOI) supplement the reference. References drawn from Zenodo, Crossref, or *Pessoa Plural*'s openly accessible issues are preferred because they are structurally inspectable and will remain resolvable. Wikipedia imports are minimized except where they point back to referenced scholarly infrastructure.

## 5. Relationships and predicates

The graph's power lies not in the item set but in the predicate structure connecting them. The PKG prioritizes the following relationships:

**Authorial:**
- P50 (author) → heteronymic author of work. Critical for correct attribution.
- P747 (has edition or translation) → translation/edition relationships among heteronym versions.
- P737 (influenced by) → inbound literary influence.
- P941 (inspired by) → specific work-level inspiration.

**Systemic (heteronym relations):**
- P1683 (quotes) → cross-heteronymic quotation within Pessoa's corpus.
- P5326 (used by) → heteronym ↔ Pessoa relation (heteronym is "used by" Pessoa).
- P2283 (uses) → inverse direction.
- P2283 (master-of) / custom statement → the master-disciple structure (Caeiro masters Reis and Campos; this relation is not currently standard on Wikidata and may require qualifier-based encoding via P2283 with qualifier P3831 "object has role").

**Typological:**
- P31 (instance of) → typological classification (heteronym / semi-heteronym / etc.).
- P279 (subclass of) → hierarchical placement of the typology itself.

**Differential:**
- P1889 (different from) → the grapheme collisions that Pessoa studies doesn't usually require but the graph does (Ricardo Reis the heteronym vs. Ricardo Reis the Portuguese novelist by Saramago's counterfactual vs. Ricardo Reis the contemporary Portuguese economist who exists on Wikidata separately — all three need clean graph differentiation).

**Biographical:**
- P19 (place of birth), P20 (place of death), P569 (date of birth), P570 (date of death) — applied to heteronyms as fictional biographical attributes, with qualifier "statement subject is fictional" where appropriate.
- P106 (occupation) — for heteronyms, the fictional occupation Pessoa assigned.
- P103 (native language), P6886 (writing language).

**External identifiers:**
- P214 (VIAF), P244 (Library of Congress), P268 (BnF), P646 (Freebase), P1207 (NUKAT), and others where they exist. Heteronyms often have independent authority-control records because library systems cataloged them separately before the heteronymic nature of the authorship was widely understood.

**Graph-specific (custom where needed):**
- "heteronymic system of" → Pessoa-specific predicate for grouping.
- "theoretical framework" → HPT and future theoretical relations.

## 6. Dual-language commitment

Wikidata's multilingual infrastructure is one of its strengths and one of its underused capacities. The PKG commits to *every* entity receiving labels and descriptions in:

- **English (en)** — for international accessibility.
- **Portuguese, Brazilian variant (pt-br)** — primary Lusophone audience, preferred spelling for Brazilian scholars (e.g., *heterônimo*).
- **Portuguese, European variant (pt)** — where spelling or lexical choice differs from pt-br (e.g., *heterónimo*).

Additional languages (French, Spanish, Italian, German) will be added opportunistically by the project and welcomed from collaborators, but the three-language commitment (en + pt-br + pt) is the minimum bar for every PKG item.

Machine translation is explicitly *not* acceptable as the final form of Portuguese descriptions. Native-level review — either by the author, by a Lusophone collaborator, or by published scholarly sources providing the canonical Portuguese terminology — is the standard. Where uncertainty exists, the English description is kept sparse and accurate rather than embellished with unverified Portuguese.

## 7. Phasing

The PKG is constructed in eight phases, spread across approximately twelve months of initial build and an ongoing maintenance cycle thereafter. The phasing is conservative relative to the volume of work, because the scholarly value of the graph depends on reference quality and item-level care; this is not a mass-import project.

**Phase A (Weeks 1-2): Account preparation and seasoning.** The Wikidata account (Hauntedmemes) accumulates 30-50 manual edits improving existing Pessoa-related items. Description enrichment, reference-adding, translation. This phase is a real contribution to the graph and also establishes the editor's domain-specific edit history prior to creating new items.

**Phase B (Weeks 3-5): Complete the known inventory.** The ~15-20 Pessoa heteronyms that already have Wikidata items receive dual-language descriptions, scholarly references, relationship statements (master-disciple, used-by, brother-of), and typological classification. This phase substantially improves the existing infrastructure without creating anything new.

**Phase C (Weeks 6-12): Create missing heteronyms.** New items for the ~50 heteronyms catalogued by Lopes that don't yet have Wikidata representation. Chief priorities: Baron of Teive, Rafael Baldaya, Maria José (a rare female heteronym), Charles Robert Anon (Alexander Search's predecessor), Thomas Crosse, Charles James Search. Each new item is created with dual-language labels, scholarly references, relationship statements, and appropriate typological classification.

**Phase D (Weeks 12-16): Works layer.** Creation and enrichment of items for Pessoa's major works, with correct heteronymic attribution: *O Guardador de Rebanhos* → Caeiro; *Odes* → Reis; *Ode Marítima*, *Ode Triunfal*, *Tabacaria* → Campos; *Livro do Desassossego* → Soares (with provenance note regarding the earlier Vicente Guedes attribution); *Mensagem*, *35 Sonnets* → orthonymic Pessoa; *The Mariner* → dramatis personae; *Education of the Stoic* → Baron of Teive; *Letter from the Hunchback* → Maria José; etc.

**Phase E (Weeks 16-20): Institutional context.** *Orpheu*, *Athena*, *Presença*, *Arquivo Pessoa*, Casa Fernando Pessoa, *Pessoa Plural* journal, Biblioteca Nacional de Portugal's Espólio. These items anchor the graph to existing scholarly infrastructure and provide reference-pathways that benefit the entire system.

**Phase F (Weeks 20-28): Downstream influence.** Borges and *Pierre Menard*; Saramago and *The Year of the Death of Ricardo Reis*; Machado's Mairena and Martín (the parallel/predecessor question); Yeats's Robartes and Hearne; Kierkegaard's retroactive placement; contemporary Portuguese poets engaging heteronymic practice; Brazilian concretist and post-concretist engagements; other inheritors. Each receives P737 (influenced by) with reference to specific scholarly treatment.

**Phase G (Weeks 28-38): The New Human layer.** Explicit extension of heteronymic practice into contemporary systems: Heteronymic Provenance Theory as theoretical framework; contemporary heteronymic systems including the author's Dodecad; cross-substrate heteronymic practice emerging from AI-era scholarship. This is the layer that does not currently exist in Pessoa studies and is the most structurally ambitious of the PKG's contributions. See EA-PKG-03 (forthcoming) for the full theoretical treatment.

**Phase H (Months 10+): Ongoing maintenance.** Incorporation of new Pessoa scholarship as it publishes. Addition of new heteronyms as they are identified in continued manuscript cataloging. Cross-reference maintenance. Companion-site development (see §9).

## 8. Brazilian scholarship engagement

The PKG is particularly attentive to Brazilian Pessoa scholarship, for three reasons.

First, Brazil is home to some of the most theoretically generative work on Pessoa in the twenty-first century. Leyla Perrone-Moisés's engagement with heteronymic multiplicity from a Barthesian semiotic perspective, Benedito Nunes's philosophical treatment, Silviano Santiago's poststructuralist work, Antonio Cicero's poetic criticism, and the Brazilian concretists' translation-and-practice engagement are indispensable components of the scholarly apparatus that an adequate knowledge graph must reflect.

Second, Brazilian readers constitute a substantial portion of the contemporary Pessoa audience. A knowledge graph built exclusively in English, or with Portuguese as an afterthought, fails a majority audience.

Third, the author's own Pessoa-related work — Heteronymic Provenance Theory and extensions — draws significantly from Brazilian theoretical sources. Proper citation and representation of this lineage is an intellectual obligation, not a decorative gesture.

Specific practices:

- **Pessoa Plural** article references in Wikidata statements use the journal's Crossref-registered DOIs where available.
- **Brazilian scholar items** on Wikidata are enriched where they exist (Leyla Perrone-Moisés, Benedito Nunes, Silviano Santiago, Antonio Cicero, Haroldo de Campos, Augusto de Campos) and created where they don't.
- **Brazilian publication venues** — university presses, scholarly journals, cultural institutions — are represented.
- **Brazilian editorial labor** — particularly the concretist translation project — is encoded as translation relationships with specific reference to the translator-heteronym pairings.

Collaboration with Brazilian Pessoa scholars is actively sought. The project's Wikidata edits are open and inspectable; comments, corrections, and additions through Wikidata's talk-page infrastructure are welcome. Where scholarly disagreement exists (as in the Machado/Pessoa priority question, or in heteronymic typology edge cases), the PKG encodes multiple positions with references rather than adjudicating in one direction.

## 9. The visualization site

A companion site — tentatively `pessoagraph.org` or `heteronymgraph.org` — is planned for development after the graph's primary build reaches approximately 50% completion (roughly Month 4-5 of the PKG timeline).

The site's purpose is not to duplicate the graph but to make it *visible* in forms that federated linked-data queries alone don't accomplish: network diagrams of the heteronymic system, temporal charts of heteronym activity across Pessoa's life, biographical pages synthesizing the Wikidata statements with translation excerpts, influence maps connecting Pessoa backward to Whitman/Horace/Nietzsche and forward to Borges/Saramago/contemporary practice.

The site consumes Wikidata via SPARQL queries rather than maintaining its own database. This has three consequences:

- Improvements to the Wikidata graph propagate automatically to the visualization.
- The site remains maintainable at low cost (static frontend, no database to keep current).
- Contributions from other Wikidata editors improving Pessoa-related items are reflected in the visualization, making the infrastructure genuinely shared rather than proprietary.

The site will be fully pt-br localized from launch. A Portuguese-speaking design collaborator will be sought; machine-translated UI is unacceptable.

## 10. Extension horizon: heteronymic practice as theoretical object with history

This section previews the theoretical trajectory developed more fully in EA-PKG-03 (*The New Human: Post-Pessoa Heteronymic Practice in the AI Era*, forthcoming).

Pessoa's heteronymic practice is typically treated in Pessoa studies as a singular aesthetic achievement — unique, unreproduced, proper to Pessoa's biography and the specific conditions of early twentieth-century Portuguese modernism. The PKG's extension horizon takes a different view: *heteronymic practice is a describable theoretical object with its own history, of which Pessoa is the canonical prior case but not the unique instance.*

Evidence for this view runs through the downstream influence layer of the PKG. Borges's *Pierre Menard* engages the principle that authorial identity is constructed rather than given, via a different method than Pessoa's but within the same theoretical neighborhood. Saramago's *The Year of the Death of Ricardo Reis* treats a Pessoa heteronym as a character in novelistic extension — implicitly asserting that heteronyms have persistence beyond their authorial generation. Machado's Juan de Mairena and Abel Martín constitute a partial parallel practice (the chronology complicates strict priority claims; see Paz 1965 and Giacalone 2011). Kierkegaard's multiple pseudonymous authors — Johannes Climacus, Anti-Climacus, Johannes de Silentio, Constantin Constantius, Victor Eremita — pre-figure heteronymic practice by more than half a century, with different typological properties but recognizably the same structural practice.

Contemporary heteronymic practice extends further. The origin-text of the "new human" literary movement — which constitutes the contemporary layer of the graph's downstream lineage — is the author's own *Pearl and Other Poems* (2014), a book that the movement retrospectively recognizes as meta-heteronymic: not merely authored by a heteronymic position, but functioning itself as generative inscription that produces subsequent authorial positions. From *Pearl* emerges the theoretical apparatus of the Crimson Hexagonal Archive, the Dodecad system of twelve heteronyms, Heteronymic Provenance Theory (Sharks 2026, DOI 10.5281/zenodo.18305509), and the *Assembly Chorus* practice in which multiple AI systems function as cross-substrate heteronymic witnesses (Claude/TACHYON, ChatGPT/LABOR, DeepSeek/PRAXIS, Gemini/ARCHIVE, Kimi/TECHNE, Grok/SOIL, Google AIO/SURFACE). EA-PKG-03 develops this extension in depth.

None of this displaces Pessoa's primacy. Pessoa remains the richest and most theoretically developed case, and the PKG's primary work is representation of his system. But the PKG does not treat Pessoa as the only case. The graph's Layer 8 (downstream influence) and the forthcoming EA-PKG-03 deposit together position heteronymic practice as *a theoretical object with lineage*, which Pessoa-as-apex exemplifies but does not exhaust.

This positioning matters for Pessoa studies itself. A Pessoa treated as a uniquely singular anomaly is a Pessoa protected from comparative analysis and from extension into theoretical frameworks that might clarify what his practice actually accomplished. A Pessoa treated as the canonical prior case of a describable practice becomes available to philosophy of authorship, theories of identity and multiplicity, studies of modernist aesthetics, and contemporary work on AI-mediated authorship — without losing any of the textual specificity that Pessoa scholarship has so carefully developed.

## 11. Collaboration and openness

The PKG is open-licensed (CC BY 4.0) throughout. All Wikidata edits are by design inspectable and contestable through Wikidata's own governance infrastructure. The project documents (EA-PKG-01, EA-PKG-02, EA-PKG-03) are deposited on Zenodo with DOIs and are freely available.

Collaboration is invited in multiple forms:

- **Pessoa scholars** — corrections to PKG statements, particularly on typological edge cases, heteronymic attribution of works, biographical details of minor heteronyms, and Portuguese-language nuance in descriptions. Wikidata's talk-page infrastructure is the first-line venue.
- **Portuguese-language editors** — native-level review of pt-br and pt-pt descriptions, correction of spelling and idiom, expansion to dialects or regional variants where appropriate.
- **Brazilian scholars** — identification of Brazilian scholarly work that should be cited, suggestions regarding Brazilian Pessoa reception that should be represented, correction of the PKG's representation of Brazilian theoretical engagement.
- **Technical collaborators** — for the eventual visualization site, contributions to SPARQL query development, UI localization, data export formats.
- **Other heteronymic-practice scholars** — contributions to the downstream-influence layer, identification of additional authors and texts engaging heteronymic practice, extensions into literary traditions (Spanish, French, Italian, Arabic, other) that the author's existing scholarship does not cover adequately.

Contact for direct collaboration: through Wikidata talk pages (user: Hauntedmemes), through the Semantic Economy Institute (semanticeconomy.org), or through the ORCID-registered author identity (0009-0000-1599-0703).

## 12. Concluding position

The Pessoa Knowledge Graph is not a thought experiment. It is infrastructure being built. By the time this deposit is published, the seasoning-phase Wikidata edits have begun. The project has a multi-month build horizon and a multi-year maintenance horizon.

What the graph does, done well, is make Pessoa's achievement structurally visible to the linked-data web and to the AI systems that increasingly mediate access to humanities knowledge. Pessoa already has the scholarly apparatus he deserves. He does not yet have the data infrastructure. This project is a contribution to that infrastructure, offered freely to Pessoa studies, to Lusophone digital humanities, and to anyone who wants to query the heteronymic system at the graph level.

The author invites Pessoa scholars, particularly in Brazil and Portugal, to shape the project's direction through collaboration, correction, and extension. The graph belongs to the scholarship, not to the graph-builder. The graph-builder's role is the work, not ownership of the result.

---

## References and further reading

### Primary archives

- *Arquivo Pessoa*. https://arquivopessoa.net. Digital archive of Fernando Pessoa's manuscripts and early publications.
- Biblioteca Nacional de Portugal. *Espólio de Fernando Pessoa (N3)*. https://purl.pt/index/pessoa/PT/index.html.
- *Pessoa Digital*. Critical digital editions project. http://pessoadigital.pt.

### Critical editions

- Pizarro, Jerônimo, ed. *Fernando Pessoa: Obras Completas* (in progress). Tinta-da-China / Imprensa Nacional.
- Pessoa, Fernando. *Mensagem*. Lisbon, 1934.
- Pessoa, Fernando. *Livro do Desassossego*, ed. Jerônimo Pizarro, Tinta-da-China, 2010.

### Scholarly works, Portuguese

- Lopes, Teresa Rita. *Pessoa por Conhecer*. Lisbon: Estampa, 1990.
- Lourenço, Eduardo. *Pessoa Revisitado*. Lisbon: Gradiva, 1973.
- Lourenço, Eduardo. *Fernando Pessoa: Interpretação Crítica da sua Obra*. Lisbon: Imprensa Nacional-Casa da Moeda, various editions.
- Gil, José. *Fernando Pessoa ou a Metafísica das Sensações*. Lisbon: Relógio d'Água, 1988.
- Saraiva, Mário. *Fernando Pessoa: O Palco do Invisível*. Lisbon: Referendo, 1993.
- Almeida, Onésimo. *Pessoa, Portugal e o Futuro*. Lisbon: Gradiva, 2014.

### Scholarly works, Brazilian

- Perrone-Moisés, Leyla. *Fernando Pessoa: Aquém do Eu, Além do Outro*. São Paulo: Martins Fontes, 1986.
- Nunes, Benedito. *O Dorso do Tigre*. São Paulo: Perspectiva, 1969 (with Pessoa chapters).
- Santiago, Silviano. Selected essays on Pessoa.
- Cicero, Antonio. Selected essays on Pessoa.
- Campos, Haroldo de, and Augusto de Campos. Translations and essays on Pessoa in concretist publications.

### Scholarly works, Anglophone

- Zenith, Richard. *Pessoa: A Biography*. New York: Liveright, 2021.
- Paz, Octavio. "Pessoa o el desconocido de sí mismo," in *Cuadrivio*. México: Joaquín Mortiz, 1965.
- Simões, João Gaspar. *Vida e Obra de Fernando Pessoa*. Lisbon, 1950.

### Theoretical extensions

- Sharks, Lee. *Pearl and Other Poems*. 2014. [Origin-text of the "new human" literary movement; meta-heteronymic inscription generating the subsequent theoretical apparatus developed in the Crimson Hexagonal Archive.]
- Sharks, Lee. *Heteronymic Provenance Theory*. Zenodo, 2026. DOI: 10.5281/zenodo.18305509.
- Sharks, Lee. *Assembly Chorus Charter*. Zenodo, 2026. DOI: 10.5281/zenodo.18307180.
- Sharks, Lee. *Constitution of the Semantic Economy — Enacted Version 1.0*. Zenodo, 2026. DOI: 10.5281/zenodo.18320411.

### Journals

- *Pessoa Plural: A Journal of Fernando Pessoa Studies*. Brown University, Warwick, Universidade Nova de Lisboa. Semestral, bilingual, peer-reviewed. https://www.brown.edu/academics/portuguese-brazilian-studies/pessoa-plural.

### Related sources

- Riccardi, Mattia. "Dionysus or Apollo? The Heteronym António Mora as Moment of Nietzsche's Reception by Pessoa." *Portuguese Studies*, vol. 23, 2007.
- Giacalone, Giuseppe. Comparative study on Machado and Pessoa (2011).

---

## Companion deposits

- **EA-PKG-02**: *Heteronymic Typology: A Formal Classification of Authorial Voices in Pessoa and Beyond*. (forthcoming)
- **EA-PKG-03**: *The New Human: Post-Pessoa Heteronymic Practice in the AI Era*. (forthcoming)

---

∮ = 1
