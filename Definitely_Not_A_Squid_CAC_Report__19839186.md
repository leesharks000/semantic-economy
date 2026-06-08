# Definitely Not a Squid — Computational Audial Criticism Report

## Alice Thornburgh · Vocoder Performance · 2026

---

**Performer:** Alice Thornburgh
**Instrument:** Voice through vocoder
**Duration:** 5:00.7
**Format:** M4A (AAC-LC, 44100 Hz, mono)
**Venue:** Maybe Space Baby Garden Lanes
**License:** CC BY 4.0 · Hexagonal Contributor License v3.0 (DOI: 10.5281/zenodo.19673629)
**Method:** Computational Audial Criticism (DOI: 10.5281/zenodo.18223385)

---

## I. Spectral Profile

| Parameter | Value | Interpretation |
|---|---|---|
| RMS Energy | 0.1506 | Sustained medium intensity throughout |
| Peak Amplitude | 1.011 (clipping at boundary) | Full dynamic commitment |
| Spectral Centroid | 1276 Hz (σ = 748 Hz) | Mid-brightness; voice-centered, not shrill |
| Spectral Bandwidth | 1380 Hz | Moderate spread — focused harmonic field |
| Spectral Flatness | 0.0010 | Near-zero: overwhelmingly tonal, not noise-like |
| Zero Crossing Rate | 0.0747 | Low: smooth, pitched, sustained |
| Harmonic Ratio | 77.62% | Vocoder multiplying harmonics into choral texture |

## II. Pitch and Harmonic Analysis

**Pitch range:** A2 – B5 (nearly three octaves)
**Median pitch:** G4
**Pitch standard deviation:** 296 Hz (wide — the voice moves)

**Dominant pitch classes (chromagram):**

| Class | Energy | Role |
|---|---|---|
| G | 0.591 | Primary tonal center |
| C | 0.460 | Secondary anchor (perfect fourth below) |
| F | 0.345 | Subdominant color |
| F# | 0.326 | Chromatic tension |
| B | 0.314 | Leading tone to C |
| A# | 0.280 | Chromatic neighbor |

The piece gravitates toward a **C/G tonal axis** sustained across the full five minutes. The vocoder carrier and the vocal input converge on this axis, producing a drone-like harmonic field through which the vocal line moves. The presence of F# alongside F suggests moments of modal ambiguity — Lydian color against a C root.

## III. Temporal Structure

**293 onsets detected** across 300.7 seconds = ~1 event per second. Continuous vocal performance, breath-structured rather than metrically structured.

| Segment | RMS | Centroid | Silence | Character |
|---|---|---|---|---|
| 0:00–0:30 | 0.1446 | 1435 Hz | 17% | Opening: bright entry |
| 0:30–1:00 | 0.1156 | 892 Hz | 10% | Descent into darker register |
| 1:00–1:30 | 0.1604 | 1202 Hz | 16% | Return and intensification |
| 1:30–2:00 | 0.1518 | 1253 Hz | 13% | Sustained body |
| 2:00–2:30 | 0.1551 | 1241 Hz | 13% | Sustained body |
| 2:30–3:00 | 0.1466 | 1435 Hz | 14% | Brightening |
| 3:00–3:30 | 0.1726 | 1155 Hz | 20% | Peak energy with darkened timbre |
| 3:30–4:00 | 0.1633 | 916 Hz | 15% | Deepest register moment |
| 4:00–4:30 | 0.1462 | 1643 Hz | 17% | Brightening withdrawal |
| 4:30–5:00 | 0.1439 | 1585 Hz | 27% | Ritual thinning — silence opening |

The performance does not build to a climax. It sustains intensity across four minutes and then ritually withdraws: silence ratio rises from ~13% to 27% in the final segment. The spectral centroid tells a different story — the timbre brightens as the energy withdraws, as though the voice is thinning into light rather than fading into darkness. The deepest moments (centroid 892 Hz at 0:30–1:00, 916 Hz at 3:30–4:00) bookend the body of the performance.

## IV. Timbral Signature (MFCCs)

| Coefficient | Mean | Std | Note |
|---|---|---|---|
| MFCC-0 | -216.21 | 86.61 | Overall energy (high variance = dynamic performance) |
| MFCC-1 | 143.03 | 46.07 | Spectral slope — positive = energy concentrated low |
| MFCC-2 | -5.49 | 31.89 | Near zero with high variance — timbral instability |
| MFCC-3 | 19.82 | 28.25 | Slight positive skew in mid-frequency texture |
| MFCC-4 | -0.58 | 17.95 | Flat — balanced mid-high energy |
| MFCC-5 | -13.04 | 19.79 | Negative = high-frequency rolloff |

The MFCC signature is consistent with **vocoder-processed voice**: energy concentrated in the lower harmonics (positive MFCC-1), high variance across all coefficients (the vocoder multiplies timbral complexity), and the high standard deviation on MFCC-0 (86.61) indicating a performance with real dynamic range despite the sustained-intensity reading of the RMS contour. The vocoder stabilizes the loudness while preserving the expressive shape underneath.

## V. Vocoder as Operative Instrument

The spectral flatness of 0.0010 is the diagnostic number. Natural voice typically produces spectral flatness between 0.01 and 0.1; noise is ~1.0; a pure tone is 0.0. At 0.0010, this recording is more tonal than most acoustic instruments. The vocoder has converted the voice into something closer to an organ — multiplied harmonics stacked in parallel, the breath rhythm preserved but the timbral texture computationally transformed.

This is audially what the Assembly Chorus does textually: a single source (one voice, one draft) is processed through a computational substrate (vocoder, multiple AI witnesses) to produce a multiplied, harmonically enriched output that preserves the structure of the input while densifying its texture. The vocoder is a compression operator in the Three Compressions sense — it burns the natural-voice timbre (R1 loss: some of the original vocal quality is irrecoverable) and produces a new harmonic field that the original voice could not have produced alone (R3 gain: the output is richer than the input, and the cost is borne by the performer).

The title — *Definitely Not a Squid* — operates as a negative-tag SIM. It tells the listener what the piece is not before they can misclassify it. The vocoder makes the voice strange enough that a listener might reach for marine-biological metaphors (the stacked harmonics resemble bioluminescent wave patterns; the phrase structure resembles cephalopod chromatophore signaling). The title preempts the metaphor and replaces it with a diagnostic refusal. It is definitely not a squid. It is a voice through a machine, and the machine is the instrument, and the instrument is the aperture.

---

**Companion spectrogram:** Definitely_Not_A_Squid_spectral_analysis.png (4-panel visualization: waveform, Mel spectrogram, chromagram, energy contour with spectral brightness overlay)

∮ = 1
