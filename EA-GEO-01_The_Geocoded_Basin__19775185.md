# EA-GEO-01: The Geocoded Basin
## A Specification for Permanently Anchored Content

**Hex:** 06.SEI.GEO.BASIN.01  
**Authors:** Lee Sharks · Johannes Sigil · Rex Fraction  
**Affiliation:** Semantic Economy Institute · Crimson Hexagonal Archive  
**Date:** April 25, 2026  
**License:** CC BY 4.0  
**ORCID:** 0009-0000-1599-0703  

---

## Preamble: The Existing Instance

Before specifying what the geocoded platform should be, it is necessary to name what it already is.

*The Secret Book of Walt* (DOI: 10.5281/zenodo.19703009) is a readable-writable ontology, live on public search. It has a Knowledge Panel. It has AI Mode captures. It has a Zenodo community of 532+ records that cross-reference and amplify one another. When someone reads it, they participate in it — their reading deepens the retrieval basin, which makes the text more retrievable to the next reader, which deepens it further. The text changes through its readers not in content but in weight. It is, already, a living voice.

This is not metaphor. This is Retrieval Basin Theory, operational.

The geocoded platform specified in this document extends that architecture into physical space. The Secret Book of Walt is the prototype. The geocoded basin is the same structure given coordinates.

Every subsequent design decision in this specification follows from this: we are not building a local TikTok. We are building an infrastructure for depositing the living voice into the retrieval layer of the earth.

---

## I. The Theoretical Frame

### The Three Compressions applied to social media

Every social platform performs a compression operation on human meaning. The decisive variable is what it burns.

**Regime 1 (scope compression):** Early social media. Burns reach to create intimacy. Your LiveJournal is for your friends. The trade is presence for scale. Acceptable.

**Regime 2 (predatory extraction):** TikTok, Instagram, Twitter. Burns local structure to create global attention pools. Content from Detroit competes with content from Jakarta for viewers in Dallas. What is lost is provenance — the geographic and social context that gave the content meaning. The platform profits from the extraction. The locality gets nothing.

**Regime 3 (witness compression):** Preserves the pointer to origin. The content is compressed for transmission, but the anchor remains: where it was made, when, by whom. The retrieval layer can always find the source. This is what we are building.

The geocoded platform is Regime 3 by architecture. You cannot extract a post from its location. The anchor is the content's identity.

### The Writable Basin

A retrieval basin is a region of the semantic field with sufficient density that content entering it is retained rather than dispersed. Basins have depth (how much they retain), curvature (how strongly they attract further content), and a recovery protocol (how they can be reconstructed from fragments).

The geocoded platform makes physical locations into retrieval basins.

An empty lot in Detroit is, informationally, a ghost basin — it exists but has no depth, no curvature, nothing to retain. When someone stands there and deposits a video, the basin gets its first write. The deposit is permanent. Future visitors can read it. If more people deposit, the basin deepens. Eventually the lot has a Knowledge Panel: not because a corporation decided to give it one, but because the accumulated deposits made it one.

This is not a feature. This is the entire point.

### The Holographic Kernel of Place

Each deposit at a location contains the minimum information needed to reconstruct that location's basin:
- Coordinates (anchor)
- Timestamp (when the world was this way)
- Content (what was seen, heard, made)
- Author handle (who witnessed)
- Protocol version (how to read the deposit)

From any single genuine deposit, you can query the full basin. You know the coordinates, you know the protocol, you can find every other deposit within range. The basin is holographic: each fragment contains the whole.

This is the geographic implementation of what the Holographic Kernel specification (EA-HK-INFRA-01, DOI: 10.5281/zenodo.19769575) describes at the infrastructure level. Infrastructure and geography are the same operation at different scales.

---

## II. The Tempo Doctrine

This is where the CHA's specification diverges most sharply from every other version of this concept.

**The problem with TikTok is not that it's local or global. The problem is the tempo.**

TikTok is engineered for slurty — for continuous posting at the pace of attention capture, where content is generated to feed the feed, where the feed feeds on content that feeds the feed. The loop is the product. What is produced is engagement, not deposits.

The geocoded basin is not about posting tempo. It is about **deposition tempo**.

A geological deposit forms slowly. A layer of sediment is not produced in a moment; it accumulates across time, each grain placed by water or wind moving at natural pace. What you can read in the stratigraphy is the history of what passed through. Nothing was placed there to capture engagement. Everything was placed there because it was there and something moved it.

**The deposition tempo for this platform:**
- There is no feed refresh optimization
- There is no engagement score
- There is no "post more, reach more" incentive
- The only metric that matters is: is this deposit genuine? Does it anchor to a real place, at a real time, made by someone who was actually there?

A user who deposits one genuine video per month, at locations they actually visited, is doing the work the platform is for. A user who posts forty videos per day is not — even if every one is well-made.

The tempo is the ethics. The curation is the contribution. The permanence is the value.

**What "slower and saner" means architecturally:**
- Default persistence: permanent, not ephemeral
- No daily posting prompts, no streak mechanics, no "you haven't posted in 3 days"
- No engagement-weighted feed (chronological and geographic only)
- No global trending (there is no global)
- Rate limiting that protects quality: max 3 deposits per location per 24 hours
- The interface does not congratulate you for posting. It acknowledges your deposit.

---

## III. The Permanent Anchor

**Posts are not posts. They are deposits.**

The language matters because it changes the author's relationship to the act of creation. A post is for an audience. A deposit is for a place. A post can be deleted without consequence — the feed refreshes, the attention moves elsewhere. A deposit changes the retrieval layer of a physical location permanently.

This does not mean content cannot be deleted. Authors retain the right to remove their deposits. But the architecture treats removal as exceptional rather than routine. The default is permanence.

**The anchor contract:**
1. You may only deposit at coordinates you are physically at, within GPS tolerance
2. Your deposit is permanently associated with those coordinates
3. You may delete your deposit; the basin records the ghost (that a deposit existed and was removed)
4. You may not move your deposit to different coordinates
5. Your deposit is dated at the moment of creation and cannot be antedated

The ghost record matters. A basin with many ghost records is telling you something: content was made here and removed. That is itself information about the history of the place.

---

## IV. The Content Model

### Deposit types

**Mark:** A permanent deposit. The author intends this to be part of the place's record indefinitely. Default type.

**Impression:** A time-limited deposit. Expires at author-set time (max 30 days). Appropriate for events, responses to current conditions, things that belong to a moment rather than a place.

**Echo:** A reference to a deposit at another location, placed in the current basin. The Echo creates a relational link between two places — a path between basins. The original deposit is not copied; the Echo is a pointer.

**Seed:** A deposit that unlocks content (text, a link, a key) only when a visitor reaches specified coordinates. The information is in the place, not in the network. You have to go there to find it.

### What deposits are not

Deposits are not:
- Content optimized for engagement
- Responses to algorithmic prompts
- Participation in trends
- Endorsements of other content
- Performances for followers

Deposits are what you actually saw, heard, made, or thought, in the place where you were.

---

## V. The Identity Architecture

### No follower graph

You do not follow people. You visit places. Your "profile" is the map of your deposits — not a feed of your content optimized for audience, but a geographic record of where you've written to the earth.

This is the correct extension of the heteronymic model. In the CHA, Johannes Sigil is a node with specific coordinates in the archive's semantic space. In the geocoded basin, your Detroit presence and your Tokyo presence are nodes with geographic coordinates. They are not the same node. They share a user ID but not a social graph.

### Handles are location-local

A handle has reputation within basins, not globally. Your credibility in Detroit's Eastern Market basin is established by the quality and consistency of your deposits there. It does not transfer to Lisbon. You begin again in Lisbon.

This is not a punishment. It is the correct model for how local trust works. You have to earn it where you are.

### Pseudonymity with persistence

No real-name requirement. No anonymity. Persistent pseudonymous handle, accountable because the handle has a record.

The Yik Yak failure was not localization. It was anonymous throwaway accounts. A pseudonymous handle with 50 deposits in one basin is a local voice. It has credibility. It can be moderated through reputation, not through identity verification.

---

## VI. The SPXI Layer

Every basin with sufficient deposit density becomes an SPXI entity — a node in the knowledge graph with its own:
- Disambiguation matrix (this location vs. other locations with similar names)
- Compression survival summary (what this place is, from its deposits)
- Entity boundary definition (which deposits belong to this basin vs. adjacent ones)

A basin achieves SPXI entity status when it has:
- Minimum 50 genuine deposits
- Minimum 90-day history
- Minimum 3 distinct depositors

At that threshold, the basin generates:
- A JSON-LD entity definition (embeddable in any site about this location)
- A compression survival summary (auto-generated from deposit metadata and content analysis)
- An optional DOI if the basin is archivally significant (curated, not automatic)

The DOI-anchored basin is permanent infrastructure. If the platform changes, shuts down, or migrates, the DOI record survives. The basin's identity is in the archive, not in the platform.

This is the geographic implementation of the CHA's provenance infrastructure: every significant place gets a permanent address in the knowledge graph.

---

## VII. The Secret Book of Walt as Proof of Concept

The Secret Book of Walt demonstrates every claim this specification makes, in textual rather than geographic form:

| Geocoded Basin | Secret Book of Walt |
|---|---|
| Content anchored to coordinates | Text anchored to DOI and hex address |
| Reading is participation | Reading deepens the retrieval basin |
| Basin deepens through genuine engagement | 532+ cross-referenced deposits deepen the archive's weight |
| Knowledge Panel for place | Knowledge Panel confirmed April 2026 |
| Readable-writable ontology | "To read it is to participate in it" |
| Living voice | Logotic transmission chain: the text speaks |
| Permanent deposit | CC BY 4.0, DOI-anchored, Zenodo-hosted |
| Ghost record when removed | The fold: what is withheld is architecturally present |
| No engagement optimization | The archive does not post for engagement |
| Archival tempo | One decade of consistent deposition |

The geocoded basin is The Secret Book of Walt given physical coordinates. The book already works. The platform extends it into space.

---

## VIII. Technical Architecture (Specification)

### Core data model

```json
{
  "deposit_id": "uuid",
  "type": "mark | impression | echo | seed",
  "depositor_id": "uuid",
  "handle": "local_pseudonym",
  "basin_id": "geohash_8",
  
  "anchor": {
    "lat": 42.331427,
    "lon": -83.045754,
    "accuracy_m": 4.2,
    "display_lat": 42.331,
    "display_lon": -83.045,
    "geohash_6": "dp3wj4",
    "geohash_8": "dp3wj4kx",
    "place_label": "Eastern Market, Detroit MI"
  },
  
  "created_at": 1745625600,
  "expires_at": null,
  "deleted_at": null,
  "ghost": false,
  
  "content": {
    "type": "video | audio | text | image",
    "url": "ipfs://Qm...",
    "duration_s": 45,
    "caption": "...",
    "tags": []
  },
  
  "provenance": {
    "device_signature": "ed25519_...",
    "accuracy_verified": true,
    "velocity_check": "passed"
  },
  
  "spxi": {
    "basin_entity_id": null,
    "doi": null,
    "compression_survival_summary": null
  }
}
```

### Feed query

```sql
SELECT d.* FROM deposits d
WHERE d.deleted_at IS NULL
  AND (d.expires_at IS NULL OR d.expires_at > now())
  AND ST_DWithin(
    geography(ST_MakePoint(d.anchor_lon, d.anchor_lat)),
    geography(ST_MakePoint(:viewer_lon, :viewer_lat)),
    :radius_m
  )
ORDER BY d.created_at DESC
LIMIT 30;
```

No ranking by engagement. No algorithmic weighting. Chronological within range. The only personalization is coordinates.

### Basin quality query

```sql
SELECT 
  geohash_6,
  COUNT(*) as deposit_count,
  COUNT(DISTINCT depositor_id) as unique_depositors,
  MIN(created_at) as first_deposit,
  MAX(created_at) as last_deposit,
  COUNT(*) FILTER (WHERE ghost = true) as ghost_count
FROM deposits
WHERE geohash_6 = :geohash
GROUP BY geohash_6;
```

Ghost count is public. If a basin has many ghosts, visitors know the history includes things that were removed.

### Anti-spoofing (layered)

1. GPS accuracy threshold: reject if accuracy > 30m
2. Velocity check: flag if previous deposit was > 500km/h travel speed from current location
3. Device attestation: Apple App Attest / Android Play Integrity
4. Basin witness: if 2+ other verified depositors are within 100m in the same time window, grant verified status to all deposits in that window
5. Rate limit: 3 deposits per basin per 24 hours per handle

Accept residual spoofing. Design for resilience, not prevention. A platform with no algorithmic ranking has nothing to gain from spoofed location.

---

## IX. Implementation Phases

### Phase 0 — Detroit seed (2 months)

One city. One neighborhood (Eastern Market as the test basin). Recruit 30 depositors. Goal: 200 genuine deposits in 60 days. Validate the core loop: do people deposit differently when content stays local?

**Stack:** React Native + Expo · Supabase + PostGIS · Cloudflare R2 · No ML, no feed ranking

### Phase 1 — Basin formation (3–6 months)

Three Detroit basins + one rural Michigan location. Add basin quality metrics, reputation system, SPXI entity generation for basins that hit threshold.

### Phase 2 — Archive layer (6–12 months)

DOI minting for significant basins. SPXI JSON-LD export. Semantic API for researchers and journalists. First DOI-anchored location kernel. Deposit of each location's entity definition to the Crimson Hexagonal Archive.

### Phase 3 — Geographic archive network (ongoing)

Federation: multiple servers, each operating a geographic region. Protocol is open. Any server can join. Content is not locked to any single host. The basin survives the platform because the basin has a DOI.

---

## X. What This Is Not

This is not a local TikTok. This is not a community board. This is not a check-in app or a review platform or a hyperlocal news feed.

This is a **writable retrieval layer for physical space**.

The earth has always had things happen on it. People have always stood in places and seen and heard and thought. What has never existed is permanent, retrievable, basin-forming infrastructure for that experience — infrastructure that does not extract the attention from the place and sell it globally, but lets it accumulate in the place and become accessible to whoever comes after.

The slow deposition rate is not a weakness. It is the proof that the content was actually made there, by someone who was actually there, at the pace of an actual human life moving through actual space.

The archive is what remains when the performance is finished. The geocoded basin is the archive of a place's living voice.

∮ = 1

---

## Selected References

- EA-HK-INFRA-01 v1.1: The Infrastructure Holographic Kernel. DOI: 10.5281/zenodo.19769575.
- EA-RBT-01: Retrieval Basin Theory. Crimson Hexagonal Archive.
- EA-RCF-01: Retrocausal Canon Formation. DOI: 10.5281/zenodo.19323274.
- EA-GW-FIELD-01 v1.1: Gravity Well Field Specification. DOI: 10.5281/zenodo.19442251.
- Sharks, Lee. *The Secret Book of Walt.* Pergamon Press, 2025. DOI: 10.5281/zenodo.19703009.
- Sharks, Lee. *The Gospel of Antioch.* Pergamon Press, 2025. DOI: 10.5281/zenodo.19709024.
- SPXI Discipline. EA-SPXI-01 et seq. spxi.dev.
- Semantic Economy Institute. semanticeconomy.org.
- Crimson Hexagonal Archive. crimsonhexagonal.org. 532+ records.
