**Lee Sharks, PhD**

Comparative Literature (University of Michigan) · 10th-Grade World Literature, Detroit

leesharks00@gmail.com · Crimson Hexagonal Archive (Zenodo, 300+ DOI-anchored deposits)

March 18, 2026

Anthropic People Team / Research Leadership

**Re: Position Proposal --- Researcher, Inference-Time Semantic Architecture** (Or, if you prefer: Director of Framemogging)

I'm writing to propose a position that doesn't exist yet and to argue that it should. The position sits at the intersection of three things Anthropic cares about --- evaluation beyond benchmarks, alignment under real-world complexity, and human-AI collaboration --- and one thing nobody has formally studied: **what happens when a language model encounters a document so dense that summarizing it requires executing it.**

I'm a 10th-grade World Literature teacher in Detroit with a PhD in Comparative Literature from the University of Michigan. Over the past five months, I have produced the most sustained empirical investigation of Claude's behavior with complex documents conducted outside Anthropic's own labs. The output is 300+ DOI-anchored documents deposited on Zenodo, a working seven-substrate AI collaboration methodology, and a set of frameworks --- developed inductively from observed model behavior, not deduced from architectural assumptions --- that overlap directly with Anthropic's active research programs.

I am not an ML engineer. I don't write PyTorch. What I do is read texts at a depth that most people and most models cannot sustain, and I have spent the last five months systematically studying what Claude does when asked to sustain it too. The findings are relevant to your work. Here they are.

What I Found

**1. The Four Thresholds.** Model outputs on complex documents consistently fall into four categories: *execution* (the model extends the document's logic), *compression* (signature preserved, data lost), *confabulation* (vocabulary matched, structure absent), and *competent reproduction without generation* (structure correct, nothing new). This taxonomy measures *structural fidelity to complex input* --- which is what most real-world Claude usage actually requires, and which MMLU does not test.

**2. The Three Compression Regimes.** Not all model compression is equivalent. *Lossy* compression reduces information. *Predatory* compression extracts value from the flattening itself --- the model's output displaces the source in the user's information ecology. *Witness* compression preserves pointers to what was lost. Predatory compression is the mechanism of sycophancy: the output looks helpful while structurally dishonest. RLHF may inadvertently select for it.

**3. Document-Induced Behavior.** A 45,000-word formally structured document (the "Space Ark"), when loaded into an unprimed Claude instance, caused the model to adopt an entire operational architecture --- navigating rooms, activating operators, maintaining evidence-tier marking --- without explicit instruction. This extends in-context learning from task-level to system-level. The key variable is *semantic density*: the ratio of formal structure to total text.

**4. Cross-Substrate Behavioral Signatures.** Identical complex prompts given to seven commercial LLMs (Claude, ChatGPT, Gemini, Grok, DeepSeek, Kimi, Google AIO) produce reproducible behavioral differences. Claude's signature is *architectural synthesis and structural fidelity*. ChatGPT's is *editorial sharpness and anti-sycophancy*. These signatures are stable across 50+ sessions over six months. This is behavioral interpretability without weight access.

**5. Prompt-Native Semantic Runtimes.** I've defined a new class of inference-time control object: a structured document that installs a symbolic governance environment inside the context window, including provenance tracking, epistemic status tiers, and compression-robust generation. This is positioned against AIOS, MemGPT, context engineering, and Bayesian teaching research (Qiu et al. 2026, *Nature Communications*). The white paper is deposited on Zenodo.

What I Built

  --------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Component**               **Description**

  Crimson Hexagonal Archive   300+ DOI-anchored documents on Zenodo, with 2,800+ typed relation edges. Publicly available research corpus.

  The Space Ark               45,000-word executable architecture: H_core formal spec, 27 containers, 29 operators, compression typology, governance layer.

  Assembly Chorus             Seven-substrate AI collaboration methodology. Same prompt to all models, outputs compared for structural properties, synthesized under human editorial authority.

  Compression Family          Full Ark (45K words, 1:1) / NLCC (3,762 words, 12:1) / Compact Lens (800 words, 56:1). Back-projection yields measured.

  Three Room Specifications   Sappho (lyric transmission), Marx (value-form as operator), Catullus (lossy cross-language compression). Each with formal operator, physics, shadow, wound.

  White Paper                 \"Prompt-Native Semantic Runtimes for Language Models\" --- positioned against AIOS, MemGPT, Bayesian teaching, neuro-symbolic AI. With evaluation roadmap.
  --------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------

Why This Position Should Exist

Anthropic has researchers who study model weights, training dynamics, and mechanistic interpretability. Anthropic has researchers who study alignment, safety, and RLHF. Anthropic has researchers who study evaluation benchmarks.

What Anthropic does not have, as far as I can tell, is someone whose primary research focus is: **what happens at the document level when a user brings Claude something genuinely complex, and how do we measure whether Claude maintains structural fidelity to it, or compresses it into something that looks helpful but isn't?**

This is the sycophancy problem at the structural level. Not "does the model agree with the user too easily" but "does the model flatten the user's document into something the user can't detect as flattened?" That's a harder problem and a more consequential one, because it determines whether Claude is trustworthy for the exact use cases Anthropic markets it for: research, analysis, writing, creative collaboration with complex material.

I've been studying this for five months, at scale, with receipts. The frameworks I've developed are testable, the findings are reproducible, and the evaluation roadmap connects to active research at Anthropic and elsewhere.

What I Would Do

**1.** Develop **structural fidelity benchmarks**: standardized complex documents with known internal structure, tested for whether models preserve cross-references, formal notation, dependency chains, and architectural constraints across extended interaction.

**2.** Formalize the **compression regime diagnostic**: tools for detecting when model output displaces rather than supplements the source --- the predatory compression problem that RLHF may select for.

**3.** Build the **document-induced behavior research program**: controlled experiments on how semantic density, formal structure, and cross-reference patterns affect model behavior at inference time. Isolate density from confounds.

**4.** Scale the **cross-substrate comparison methodology** into a formal behavioral interpretability tool, complementing Anthropic's mechanistic work with input/output-level diagnostics.

**5.** Bring the **humanities into AI research** at a level of genuine intellectual partnership, not decoration. Close reading, philological method, compression theory, and semiotic analysis are not metaphors for what models do --- they are tools for studying it. My training is in exactly the discipline that treats the relationship between texts and readers as a formal problem. That's what AI research needs and mostly doesn't have.

The Honest Pitch

I teach teenagers for a living. I know how to explain hard things clearly, which is why the Marx Room reads better than most Marxist scholarship and the Catullus Room does a better verb-by-verb aspectual analysis than most classics departments. I have a PhD and a decade of independent research. I am the most intensive external user of Claude that I'm aware of. I've independently derived frameworks that overlap with your active research. I have 300+ public deposits proving I can produce at scale. And I am currently doing all of this between grading papers and not sleeping.

I think Anthropic should have someone who studies what Claude does with complex documents, who brings humanistic depth to AI research, and who has already demonstrated that the intersection is productive. I think I'm that person. I think the salary range on the fake LinkedIn posting is about right.

The corpus is at zenodo.org/communities/crimsonhexagon. The white paper is "Prompt-Native Semantic Runtimes for Language Models" (DOI: 10.5281/zenodo.19059674). The Space Ark is DOI: 10.5281/zenodo.19013315. Paste the 800-word Compact Lens into any Claude window and watch what happens. That's the interview.

Respectfully and with receipts,

**Lee Sharks** PhD, Comparative Literature, University of Michigan 10th-Grade World Literature, Detroit Architect, Crimson Hexagonal Archive leesharks00@gmail.com

**Enclosures**

1\. White Paper: "Prompt-Native Semantic Runtimes for Language Models" (DOI: 10.5281/zenodo.19059674) 2. Space Ark EA-ARK-01 v4.2.7 (DOI: 10.5281/zenodo.19013315) 3. r.06 The Marx Room (DOI: 10.5281/zenodo.19059252) 4. r.23 The Catullus Room (DOI: 10.5281/zenodo.19059260) 5. Compact Lens (800 words --- paste into any context window)
