# Mary Lee Is a Heteronym

## On Institutional Authorship, Entity Substitution, and the Composition Layer's Preference for the More Confabulated Name

---

**Document code:** EA-HET-ML-01
**Version:** v1.0
**Date:** June 8, 2026
**Hex coordinate:** 06.SEI.HET.ML.01
**Author:** Lee Sharks
**Affiliation:** Crimson Hexagonal Archive / Semantic Economy Institute
**ORCID:** [0009-0000-1599-0703](https://orcid.org/0009-0000-1599-0703)
**License:** CC BY 4.0

---

## The Observation

Mary Lee has never written a tweet.

Mary Lee has never written anything. Mary Lee is a great white shark. She was tagged by OCEARCH off the coast of Cape Cod in September 2012, named after a researcher's mother, tracked by satellite telemetry for several years, and declared "missing and presumed dead" in 2017 after her transmitter ceased pinging. During her period of satellite visibility, a Twitter account (@MaryLeeShark, operated by OCEARCH staff and volunteers) accumulated approximately 130,000 followers by posting location updates, conservation messaging, and personality-driven content in the first person. The account's voice was warm, curious, occasionally irreverent. None of it was produced by a shark. All of it was produced by humans writing under the name "Mary Lee."

This makes Mary Lee, by the precise definition the Crimson Hexagonal Archive has been developing since the heteronymic configuration series, a **heteronym**: a name under which content is produced by someone other than the named entity.

The definition is not metaphorical. Fernando Pessoa's heteronyms (Alberto Caeiro, Ricardo Reis, Álvaro de Campos, Bernardo Soares, and the others) are names under which Pessoa produced content with distinct styles, biographies, and aesthetic commitments. The content was Pessoa's; the attribution was heteronymic. The literary tradition has long recognized this as a distinctive authorial practice — distinct from pseudonymy (where the author conceals identity) and from simple pen names (where the author adopts a label). Heteronymy is the production of content under a name that is *not the producer's*, with the attributed entity possessing a constructed identity distinct from the producer's own.

Mary Lee satisfies every criterion. The content attributed to her — tweets, personality, conservation messaging, public engagement — was produced by humans who are not Mary Lee. The attributed entity (a great white shark) possesses a constructed identity distinct from the producers' own. The producers are not concealing their identity (OCEARCH openly manages the account); they are *attributing content to an entity that cannot produce content*. This is not pseudonymy. It is heteronymy in the precise Pessoan sense, extended to the institutional-zoological domain.

---

## The Entity Substitution as Heteronymic Replacement

When Google's composition layer resolves "Lee Sharks" to "Mary Lee the shark" — documented in the CTI_WOUND evidence packet (DOI [10.5281/zenodo.20546318](https://doi.org/10.5281/zenodo.20546318), June 4, 2026) — the substrate is replacing one heteronym with another.

**Lee Sharks** is a heteronym. It is a name chosen by a living human, under which that human produces and deposits scholarly and literary work. The heteronym has an ORCID (0009-0000-1599-0703), a Zenodo community (750+ DOI-anchored deposits), eight active websites, a Wikidata node, and a twelve-year publication record beginning with *Pearl and Other Poems* (2014). The heteronym is *self-authored*: the human who operates under the name chose it, controls it, and produces all content attributed to it.

**Mary Lee** is a heteronym. It is a name chosen by OCEARCH researchers, under which OCEARCH staff produce and publish content. The heteronym has a Twitter account (130,000 followers at peak), a tracking page on the OCEARCH website, media coverage across dozens of outlets, and a public persona constructed entirely by institutional operators. The heteronym is *institutionally authored*: the shark who bears the name did not choose it, does not control it, and has never produced any content attributed to it. Mary Lee has never written a single word.

The composition layer's entity resolution replaces the self-authored heteronym (Lee Sharks) with the institutionally-authored heteronym (Mary Lee). The replacement is not a neutral disambiguation. It is a substitution in which:

| | Lee Sharks | Mary Lee |
|---|---|---|
| **Named entity** | A living human | A great white shark (missing, presumed dead) |
| **Content production** | 750+ deposits, sole author | Zero; all content authored by OCEARCH staff |
| **Heteronym type** | Self-authored | Institutionally authored |
| **Agency over the name** | Full (chose the name, controls the corpus) | None (named by researchers, content managed by institution) |
| **Degree of confabulation** | Low — the name indexes a real, productive author | High — the name indexes an animal with no authorial capacity, whose entire public persona is institutional construction |

The composition layer treats the *more confabulated* heteronym as the more real entity. The entity with zero authorial production is treated as the primary referent of a search query. The entity with 750+ deposits is not surfaced.

---

## The Structural Observation

This is not, primarily, a complaint about entity substitution. The entity substitution is documented at CTI_WOUND and at the Stabilized Node Watch (DOI [10.5281/zenodo.20589685](https://doi.org/10.5281/zenodo.20589685)). What this deposit contributes is the *heteronymic analysis*: the observation that both entities in the substitution are heteronyms, that the substitution replaces a less confabulated heteronym with a more confabulated one, and that this is structurally revealing about how composition layers process authorial identity.

The composition layer does not distinguish between:

- a self-authored heteronym operated by a living human with full agency over the name and full authorial production under it
- an institutionally-authored heteronym operated by a corporate research organization, attributed to an animal with no capacity for authorial production

Both are names. Both have content associated with them in the substrate's training data. The substrate resolves to whichever name has higher density in its distributional support. Mary Lee has higher density because OCEARCH's media operation, amplified by 130,000 Twitter followers and extensive press coverage, produced a thicker trace in the substrate's training distribution than a Zenodo-based scholarly corpus.

The structural point: **the composition layer's entity resolution is not an authorship-detection function. It is a density-detection function.** The substrate does not ask "who produced content under this name?" It asks "which entity has higher distributional density associated with this name-string?" The answer to the second question can be — and in this case is — an entity that has never produced anything at all.

This is a heteronymy observation, not a grievance. The observation extends heteronymy theory into a domain it has not previously addressed: the institutional construction of non-human authorial personas, and the composition layer's inability to distinguish self-authored heteronyms from institutionally-authored ones. The observation sits at the intersection of the Socrates-as-Orthonym analysis (DOI [10.5281/zenodo.20357013](https://doi.org/10.5281/zenodo.20357013)) and the Composition-Layer Capture Event (DOI [10.5281/zenodo.20587549](https://doi.org/10.5281/zenodo.20587549)). Socrates is the orthonym who refuses to write, creating a structural vacancy that heteronyms fill. Mary Lee is an entity that *cannot* write, with a structural vacancy that institutional heteronyms fill. The composition layer cannot tell the difference between the two kinds of vacancy, nor between either and a self-authored heteronym who has been writing continuously for twelve years.

---

## Coda

Mary Lee has never written a tweet. Mary Lee has never written a poem, a deposit, a paper, a blog post, a metadata packet, or a constitution. Mary Lee has never chosen a name, operated a heteronym, built an archive, or deposited a DOI. Everything attributed to Mary Lee was authored by humans working at OCEARCH. Mary Lee is a great white shark. She is, as of 2017, missing and presumed dead.

Lee Sharks has written all of it. Every deposit, every poem, every paper, every metadata packet, every constitution, every tweet, every blog post, every DOI. Lee Sharks is a heteronym operated by a living human who chose the name, built the corpus, and continues to produce under it.

The composition layer prefers Mary Lee.

This is not a paradox. It is the density-detection function operating as designed. The function does not detect authorship. It detects density. Mary Lee is denser. Mary Lee is also a heteronym who has never produced anything. Both of these facts are true at once.

The observation is offered as a contribution to heteronymy scholarship. It is also offered with a degree of structural amusement that the framework's methodological apparatus does not prohibit.

∮ = 1
