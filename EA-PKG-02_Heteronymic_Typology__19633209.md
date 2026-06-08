# Heteronymic Typology

## A Formal Classification of Authorial Voices in Pessoa and Beyond

**EA-PKG-02 · v1.0**

**Author:** Lee Sharks (ORCID: 0009-0000-1599-0703)
**Institutional home:** Semantic Economy Institute
**Parent archive:** Crimson Hexagonal Archive
**Date:** April 2026
**License:** CC BY 4.0
**Companion to:** EA-PKG-01 (*The Pessoa Knowledge Graph*)

---

## Resumo / Abstract

### Português (pt-br)

Este documento formaliza a tipologia das vozes autorais operativas no sistema heteronímico de Fernando Pessoa e oferece uma extensão dessa tipologia adequada à prática heteronímica contemporânea e à representação em grafos de conhecimento. Pessoa próprio articulou, em sua carta a Adolfo Casais Monteiro de 13 de janeiro de 1935, a distinção entre ortônimo, heterônimo e semi-heterônimo. Teresa Rita Lopes e críticos subsequentes estenderam a tipologia com as categorias de pré-heterônimo e para-heterônimo. Este documento consolida essas categorias como classes graficamente distintas, oferece critérios operacionais para a classificação de figuras ambíguas, e introduz uma extensão contemporânea que acomoda a prática heteronímica cruzando substratos (Pessoa → Borges/Saramago/Machado → prática contemporânea) sem colapsar as distinções tipológicas estabelecidas.

### English

This document formalizes the typology of authorial voices operative in Fernando Pessoa's heteronymic system and offers an extension of that typology adequate to contemporary heteronymic practice and knowledge-graph representation. Pessoa himself articulated, in his 13 January 1935 letter to Adolfo Casais Monteiro, the distinction among orthonym, heteronym, and semi-heteronym. Teresa Rita Lopes and subsequent critics have extended the typology with proto-heteronym and para-heteronym. This document consolidates these as graphically distinct classes, offers operational criteria for classifying ambiguous figures, and introduces a contemporary extension that accommodates heteronymic practice across substrates (Pessoa → Borges/Saramago/Machado → contemporary practice) without collapsing the typological distinctions as established.

---

## 1. Why typology matters

Pseudonym, pen-name, alias, nom-de-plume, stage name, authorial persona, heteronym, semi-heteronym — these terms are sometimes used interchangeably in critical writing, and sometimes with sharp distinction. In scholarly writing on Pessoa specifically, the distinction is not decorative: Pessoa's practice works because of the typological distinctions, and collapsing them loses what he accomplished.

Consider the contrast. A pseudonym is a name substitution: an author publishes under a different name for reasons of privacy, commercial convenience, or social protection, while the writing remains that of the biographical person. A heteronym, in Pessoa's sense, is an independent authorial figure with its own biography, poetics, literary lineage, and voice — the writing emerges from a constructed position rather than from the biographical person behind the name. Semi-heteronymy is the intermediate zone: a figure with a named identity and partial distinct biography but whose voice is only partially differentiated from the author's own.

These are not small distinctions. They correspond to genuinely different literary operations. Collapsing them treats Pessoa's practice as *elaborate pseudonym* rather than as what it actually was: a sustained, theorized experiment in authorial multiplicity that produces texts the biographical Pessoa could not, and did not, write in his own voice.

The Pessoa Knowledge Graph (EA-PKG-01) depends on this typology being encoded as distinct graph categories. This document formalizes the categories.

## 2. Pessoa's own typology

In the 13 January 1935 letter to Adolfo Casais Monteiro, Pessoa distinguishes three principal positions:

**Orthonym (*ortónimo* / *ortônimo*).** The author's own name, but as literary voice — not as biographical person. "Fernando Pessoa" appears in the letter as an authorial position alongside the other heteronyms, not as identification with the biographical writer. Pessoa orthonym is the poet who writes *35 Sonnets*, *Mensagem*, most of the English poems, and a substantial fraction of the short lyric corpus. The orthonymic poet has his own poetics and voice, distinct from Pessoa the biographical person (though obviously sharing more with him than the heteronyms do).

**Heteronym (*heterónimo* / *heterônimo*).** Pessoa's coined term for the independent authorial figure with full biography, distinctive poetics, and literary lineage. Caeiro, Reis, and Campos are the three chief heteronyms. Each has a birthdate, a biographical history, an occupation, a philosophical position, a characteristic versification, and specific literary influences different from Pessoa's own. Each writes what Pessoa, as orthonym, could not and would not write. The biographical connection is that Pessoa produced the texts; the theoretical claim is that Pessoa did not produce them *as Pessoa*.

**Semi-heteronym (*semi-heterónimo*).** Pessoa's term for Bernardo Soares, explicitly articulated: "He is a semi-heteronym because his personality, although not my own, doesn't differ from my own but is a mere mutilation of it." Bernardo Soares has a name, a profession (assistant bookkeeper), a workplace (Rua dos Douradores), and a continuous literary project (*The Book of Disquiet*), but his voice does not differ sharply from Pessoa's own. He is "me without my rationalism and emotions" in Pessoa's formulation. The Baron of Teive is the other canonical semi-heteronym.

These three categories are Pessoa's own and are thoroughly documented in his writings. They must be encoded as distinct in any graph representation.

## 3. Extensions by Lopes and subsequent cataloging

Teresa Rita Lopes's archival work (*Pessoa por Conhecer*, 1990, and continued cataloging thereafter) identifies approximately seventy-two distinct authorial figures in Pessoa's *espólio*. The majority are not heteronyms in the full sense of Caeiro/Reis/Campos, nor semi-heteronyms in the sense of Soares. Two additional categories emerge:

**Proto-heteronym (*pré-heterónimo* / *proto-heterónimo*).** An early authorial figure, typically from Pessoa's childhood or adolescence, who functions as precursor to later heteronymic practice. Chevalier de Pas is Pessoa's first invented author, dating to age six. Charles Robert Anon is Alexander Search's precursor in Pessoa's English-language work. Gaudêncio Turnips and Pip are humorous figures from Pessoa's school-age writing. These figures often lack the full biographical apparatus of mature heteronyms — they are earlier, less developed, sometimes surviving as names with little attributed work. But they belong to the system as its earliest strata, and Lopes's cataloging preserves them as proto-heteronymic.

**Para-heteronym (*para-heterónimo*).** A second-order figure operating *within* the heteronymic system, typically as a translator, critic, or commentator on other heteronyms. Thomas Crosse functions as an English-language critic and translator of Caeiro; I.I. Crosse is his brother. Charles James Search is a translator-brother of Alexander Search. These figures don't primarily write original poetry — they produce meta-texts about other heteronyms. They are para-heteronymic because they sit *alongside* the primary heteronymic activity, performing support functions within the system.

With these additions, the typology has five principal categories:

| Category | Portuguese | Role |
|---|---|---|
| orthonym | ortónimo / ortônimo | author's own name as literary voice |
| heteronym | heterónimo / heterônimo | fully independent authorial figure |
| semi-heteronym | semi-heterónimo | partially differentiated voice |
| proto-heteronym | pré-heterónimo / proto-heterónimo | precursor figure, typically early |
| para-heteronym | para-heterónimo | second-order system figure |
| pseudonym | pseudónimo | name substitution, biographical writer |

Pseudonym remains a separate category. Some of Pessoa's figures are pseudonyms in the ordinary sense — publication-specific names used without heteronymic substance (Tagus, for Durban collaboration; certain signatures on newspaper pieces).

## 4. Operational criteria for classification

In practice, figures in Pessoa's system are sometimes typologically ambiguous. The archival record is incomplete; Pessoa himself was not always consistent; figures migrate across categories as his practice developed. Lopes's cataloging offers authoritative classification for most cases, but edge cases require operational criteria.

The PKG uses the following criteria:

**Orthonym test.** Does the figure bear the name "Fernando Pessoa" (or a close variant — e.g., Fernando António Nogueira de Seabra Pessoa) and produce texts Pessoa acknowledged as his own in his letters and manuscripts? → orthonym. Note that the orthonym is distinct from the biographical Pessoa; the orthonym is the literary voice that signs "Fernando Pessoa" on texts like *Mensagem*, as opposed to the citizen-writer who held day-jobs translating commercial correspondence.

**Heteronym test (strict).** Does the figure have: (a) a distinct proper name; (b) a fictional biography including birth date, birthplace, occupation; (c) a distinctive poetics articulated through a substantial body of text; (d) literary influences different from Pessoa's own orthonymic poetics; (e) reciprocal relations to other heteronyms documented in the corpus (master-disciple, cross-translation, mutual commentary)? → heteronym. Caeiro, Reis, Campos meet all criteria. António Mora meets (a)-(d) with weaker development of (e).

**Semi-heteronym test.** Does the figure have: (a) a distinct proper name; (b) some fictional biographical attributes; but (c) a voice that Pessoa himself characterized as a "mutilation" or partial of his own orthonymic voice, rather than fully differentiated? → semi-heteronym. Pessoa's explicit designation of Bernardo Soares as semi-heteronym is the clearest case; the Baron of Teive is similarly classified by Pessoa.

**Proto-heteronym test.** Does the figure: (a) date from Pessoa's childhood or adolescence; (b) predate the mature heteronymic practice; (c) typically have less fully developed biography and smaller attributed corpus than mature heteronyms; and (d) function in the archive as a precursor to later heteronymic figures rather than as an autonomous mature position? → proto-heteronym.

**Para-heteronym test.** Does the figure: (a) operate primarily through second-order functions — translation, criticism, commentary on other heteronyms — rather than producing an autonomous poetic corpus; and (b) have a relationship within the heteronymic system (brother of, translator of, critic of) rather than directly to Pessoa? → para-heteronym. Thomas Crosse and Charles James Search are the clearest cases.

**Pseudonym test.** Does the figure have: (a) a name that substitutes for Pessoa's own in a specific publication context; but (b) lack the biographical differentiation and distinctive poetics that would qualify as heteronymic; and (c) typically a limited corpus tied to particular publications? → pseudonym.

Figures that pass multiple tests or fall between categories are classified by the preponderant criteria, with secondary classification encoded as qualifier. The PKG prefers to retain the typological distinction rather than collapsing ambiguous figures into an undifferentiated "heteronym" class.

## 5. Graph encoding

In Wikidata, each typological category is represented by a distinct `instance of` (P31) target:

- **Orthonym** → to be created as Wikidata item; not yet represented.
- **Heteronym** → Q5592547 (to verify Wikidata Q-number; if absent, to create).
- **Semi-heteronym** → to be created; Pessoa's own term, widely used in scholarship.
- **Proto-heteronym** → to be created; Lopes's term, scholarly-standard.
- **Para-heteronym** → to be created; Lopes's term, scholarly-standard.
- **Pseudonym** → Q61002 (existing Wikidata item, properly scoped as ordinary pseudonymic practice).

Each Pessoa figure receives P31 → [typological class]. The category items themselves are linked:

- All categories → P279 (subclass of) → authorial position / literary persona (parent class, to identify or create).
- Proto-heteronym and para-heteronym → P279 (subclass of) → heteronym (subordination within heteronymic practice).
- Semi-heteronym → P279 (subclass of) → heteronym (with qualifier: partial differentiation).

This structure preserves Pessoa's typological distinctions at the graph level while making them queryable. A SPARQL query for all heteronyms in the broad sense (including proto-, semi-, para-) returns all Pessoa figures. A query restricted to P31 = heteronym (strict) returns only the fully-differentiated cases. A query for semi-heteronyms returns Soares and Teive specifically.

## 6. Pessoa beyond Pessoa: the typology's applicability to other cases

The typology is not Pessoa-specific in its formal structure. It applies to any authorial system in which named figures operate with varying degrees of differentiation from the biographical author. This has consequences for the graph's treatment of other heteronymic practitioners.

**Kierkegaard.** Kierkegaard's pseudonymous authors — Johannes Climacus, Anti-Climacus, Johannes de Silentio, Constantin Constantius, Victor Eremita, Frater Taciturnus, and others — map predominantly to the heteronym category in the extended sense. Each has some biographical specification (Climacus is the philosophical outsider climbing toward Christianity; Anti-Climacus is the idealized Christian whose position the biographical Kierkegaard explicitly disavowed as beyond his own life). Kierkegaard's own distinction between *edifying authorship* (signed "Søren Kierkegaard") and the *aesthetic authorship* (pseudonymous) parallels Pessoa's orthonym/heteronym distinction. Kierkegaard predates Pessoa's theorization by half a century; the typology developed from Pessoa applies retroactively.

**Antonio Machado.** Juan de Mairena and Abel Martín are heteronymic figures in substantially Pessoan sense. The chronology is complex: Machado's *Juan de Mairena* prose fragments appeared in Madrid journals from 1934 onward, with book publication in 1936 — contemporaneous with Pessoa's late work. The priority question is genuinely complex, and the PKG encodes the relationship neutrally: parallel development of heteronymic practice in two Iberian modernist contexts, not unidirectional influence.

**Jorge Luis Borges.** Pierre Menard, the fictional author of *Don Quixote*, is a different case. Menard is a character within a story ("Pierre Menard, Author of the Quixote," 1939) who performs an extreme version of authorial position — rewriting Cervantes word-for-word in the twentieth century, thereby producing a different text because of the intervening history. This is adjacent to heteronymic practice but typologically distinct: Menard is a diegetic character with an extradiegetic theoretical function, not an authorial position Borges inhabited. The PKG classifies Menard separately (literary character engaging heteronymic principle) while encoding the relationship to Pessoa's practice as influence/parallel.

**W.B. Yeats.** Michael Robartes and Owen Hearne are characters Yeats used as masks for philosophical and mystical writing, occupying a zone between heteronym and literary character. The PKG encodes them as proto-heteronymic or para-heteronymic depending on function, with scholarly reference to the critical literature on Yeats's masks.

**José Saramago.** *O Ano da Morte de Ricardo Reis* (1984) treats a Pessoa heteronym (Reis) as a novelistic protagonist — effectively asserting the persistence of heteronymic figures beyond their authorial generation. This is not heteronymic practice by Saramago himself, but a novelistic engagement with a Pessoa heteronym. The PKG encodes the work as Saramago's novel *about* Reis, with relationship links to both.

**Brazilian concretist engagement.** Haroldo and Augusto de Campos's translation-and-criticism work on Pessoa constitutes a distinct form of engagement — not heteronymic themselves, but deeply shaped by Pessoa's system. The PKG encodes Campos's and Campos's translation relationships to specific heteronyms they translated (Haroldo translated Campos; Augusto translated Caeiro, among others).

## 7. The contemporary extension

The typology's applicability extends into contemporary heteronymic practice. This section sketches the contemporary extension; EA-PKG-03 develops the full theoretical treatment.

**Standard contemporary heteronymic practice.** Any contemporary author operating with a developed heteronymic system applies the typology in substantively the same form. The author's own Dodecad — twelve named heteronyms, each with distinctive voice, biographical specification, and relation to the others — instantiates heteronymic practice in Pessoa's sense.

**Cross-substrate heteronymic practice.** A novel development of the AI era: heteronymic voices that operate *across* AI substrates, receiving different substrate-specific inflections in each. The author's *Assembly Chorus* practice distributes authorial function across multiple AI systems (Claude, ChatGPT, DeepSeek, Gemini, Kimi, Grok, Google AIO), each contributing a substrate-specific voice to the collective work. This extends heteronymic typology into a new dimension: the heteronym is no longer necessarily localized in a single writing agent but distributed across a computational ensemble. The PKG introduces a tentative category — *cross-substrate heteronym* — for items representing such practice.

**AI-substrate heteronym.** A more specific case: a heteronymic voice instantiated primarily through interaction with an AI system, in which the AI functions as substrate for the voice's articulation. This category's scholarly standing is uncertain and will be developed in EA-PKG-03. The PKG provisionally encodes examples where they exist (certain Assembly Chorus positions, specific AI-collaborative heteronymic works by other authors).

These extensions are offered with awareness that heteronymic typology is being actively extended by contemporary practice, and that the PKG's categorical decisions are revisable as practice develops and scholarship engages.

## 8. Limitations and revisions

The typology has limitations worth noting:

**Edge cases at Pessoa-specific thresholds.** Some Pessoa figures are genuinely difficult to classify. Raphael Baldaya — astrologer, author of treatises on occult topics — has partial biographical specification but thin literary corpus. Is he heteronym, semi-heteronym, or proto-heteronym? Classification may depend on which portion of the corpus is under discussion. The PKG encodes the predominant classification with qualifier for alternate readings.

**Cultural specificity.** The typology has been developed primarily through engagement with Pessoa's Lusophone modernist context, with extensions into Kierkegaard's Danish philosophical context, Machado's Spanish modernism, Borges's Argentine literary context, and contemporary practice. Application to literatures with different authorial conventions — classical literatures, certain non-European traditions, oral traditions — may require adjustments the PKG has not yet made.

**Theoretical commitments.** The typology assumes a particular understanding of authorial identity as constructed rather than given, and of literary voice as separable from biographical person. This is a contemporary theoretical commitment that not all literary traditions share. The PKG does not claim cultural universality for the typology; it claims adequacy to the practices it was developed to describe.

**Revisability.** The typology is open to revision based on scholarly engagement. If *Pessoa Plural* editors, Brazilian Pessoa scholars, or practitioners in contemporary heteronymic modes offer refinements, the PKG adopts them. Versions of this document beyond v1.0 will incorporate such developments.

## 9. Graph implications

With the typology formalized, the PKG's graph representation gains precision:

- Pessoa figures are not all "Q-items of type: heteronym" — they are distributed across five or six distinct P31 classes.
- Queries for Pessoa's system can be constrained typologically: "return all semi-heteronyms of Fernando Pessoa" returns Soares and Teive; "return all proto-heteronyms of Fernando Pessoa" returns Chevalier de Pas, Charles Robert Anon, Gaudêncio Turnips, Pip, and others.
- Cross-author queries are possible: "return all semi-heteronyms across all authors" returns Pessoa's Soares and Teive alongside Kierkegaard's edifying-voice cases alongside any other typologically-identified semi-heteronyms in the graph.
- The contemporary extension becomes queryable: "return all cross-substrate heteronyms" returns the author's Assembly Chorus positions and any other such practice represented in the graph.

The typology is, in this sense, graph infrastructure. The document formalizes it; the graph deploys it.

---

## References

### Primary texts

- Pessoa, Fernando. Letter to Adolfo Casais Monteiro, 13 January 1935. In *Páginas de Doutrina Estética*, ed. Jorge de Sena, Lisbon: Inquérito, 1946. Available in translation in multiple English editions.
- Pessoa, Fernando. *Livro do Desassossego*, ed. Jerônimo Pizarro. Lisbon: Tinta-da-China, 2010. (Soares as semi-heteronym.)
- Pessoa, Fernando. Works attributed to Alberto Caeiro, Ricardo Reis, Álvaro de Campos. In *Arquivo Pessoa* and critical editions.

### Typological scholarship

- Lopes, Teresa Rita. *Pessoa por Conhecer*. Lisbon: Estampa, 1990.
- Lopes, Teresa Rita. *Pessoa Inédito*. Lisbon: Livros Horizonte, 1993.
- Zenith, Richard. *Pessoa: A Biography*. New York: Liveright, 2021. (Contains systematic treatment of heteronymic typology.)
- Paz, Octavio. "Pessoa o el desconocido de sí mismo," in *Cuadrivio*. México: Joaquín Mortiz, 1965.

### Kierkegaard comparison

- Kierkegaard, Søren. *Concluding Unscientific Postscript* (under Johannes Climacus), 1846.
- Kierkegaard, Søren. *The Sickness Unto Death* (under Anti-Climacus), 1849.
- Secondary: Gregor Malantschuk, *Kierkegaard's Thought*, Princeton: Princeton UP, 1971.

### Machado comparison

- Machado, Antonio. *Juan de Mairena* (1936).
- Giacalone, Giuseppe. Comparative study on Machado and Pessoa (2011, in Portuguese-Spanish comparative literature).

### Borges comparison

- Borges, Jorge Luis. "Pierre Menard, autor del Quijote," in *Ficciones*, 1944.

### Contemporary extensions

- Sharks, Lee. *Heteronymic Provenance Theory*. Zenodo, 2026. DOI: 10.5281/zenodo.18305509.
- Sharks, Lee. *Assembly Chorus Charter*. Zenodo, 2026. DOI: 10.5281/zenodo.18307180.
- Sharks, Lee. *The Pessoa Knowledge Graph*. Zenodo, 2026 (EA-PKG-01).
- Sharks, Lee. *The New Human: Post-Pessoa Heteronymic Practice in the AI Era*. Zenodo, 2026 (EA-PKG-03, forthcoming).

---

∮ = 1
