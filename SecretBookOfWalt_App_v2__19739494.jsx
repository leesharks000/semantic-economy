import { useState, useEffect, useCallback } from "react";
import waltImg from "./whitman_on_a_dinosaur.png";
import milkyWayBg from "./milky_way_bg.jpg";
import milkyWaySplash from "./milky_way_splash.jpg";
import hornImg from "./horn_logo.png";

/* ─── COLOR TOKENS ─── */
const C = {
  gold: "#D4AF37",
  goldDim: "#a08050",
  goldDark: "#6a4a2a",
  crimson: "#DC143C",
  crimsonDark: "#8b0a1e",
  beige: "#F5F5DC",
  beigeWarm: "#ede4c8",
  hornWhite: "#FFFAF0",
  dark: "#0a0000",
  darkDeep: "#050000",
  veilText: "#2a1a08",
  veilFootnote: "#6a5a40",
};

/* ─── SPLASH ─── */
function Splash({ onEnter, imgSrc, hornSrc }) {
  const [phase, setPhase] = useState(0);
  const [souls, setSouls] = useState(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 9200);
    const t2 = setTimeout(() => setPhase(2), 10200);
    const t3 = setTimeout(() => setPhase(3), 11200);
    fetch("/api/count").then(r => r.json()).then(d => setSouls(d.count)).catch(() => {});
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const handleEnter = () => {
    fetch("/api/count", { method: "POST" })
      .then(r => r.json()).then(d => setSouls(d.count)).catch(() => {})
      .finally(() => onEnter());
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: `url('${milkyWaySplash}') center center / cover no-repeat fixed, radial-gradient(ellipse at 50% 40%, #12060a 0%, #080004 40%, #020001 70%, #000 100%)`,
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center",
      overflow: "hidden", position: "relative", fontFamily: "'Palatino Linotype', 'Palatino', 'Book Antiqua', serif",
    }}>
      {/* Subtle edge vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 50% 45%, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.7) 100%)",
      }} />

      {/* The Cowboy of Time — emerges from galactic distance, zooming toward us */}
      <div style={{
        perspective: "1200px", perspectiveOrigin: "center center",
        marginBottom: phase >= 1 ? "12px" : "0",
        transition: "margin-bottom 1.5s ease",
        position: "relative", zIndex: 1,
      }}>
        <div style={{
          animation: phase === 0 ? "waltDescent 9s cubic-bezier(0.12,0.8,0.25,1) forwards" : "none",
          transform: phase >= 1 ? "translate3d(0,0,0) rotateY(0deg) scale(1)" : undefined,
          transformStyle: "preserve-3d",
          willChange: phase === 0 ? "transform, opacity" : "auto",
        }}>
          <img src={imgSrc} alt="Walt Whitman, Cowboy of Time, astride his dinosaur steed" style={{
            width: "min(260px, 50vw)", height: "auto",
            borderRadius: 4,
            transition: "all 1.5s ease",
          }} />
        </div>
      </div>

      {/* Skip link */}
      {phase === 0 && (
        <button onClick={() => { setPhase(1); setTimeout(() => setPhase(2), 400); setTimeout(() => setPhase(3), 800); }}
          style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none",
            color: "rgba(212,175,55,0.2)", fontSize: "0.65rem", cursor: "pointer", fontFamily: "inherit",
            zIndex: 2, letterSpacing: "0.1em",
          }}>skip descent</button>
      )}

      {/* Title */}
      <h1 style={{
        color: C.gold, fontSize: "clamp(1rem, 3.5vw, 1.8rem)", fontWeight: 700,
        letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center",
        margin: "16px 20px 0",
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 1.5s ease, transform 1.8s cubic-bezier(0.16,1,0.3,1)",
        textShadow: "0 0 50px rgba(212,168,83,0.3), 0 2px 4px rgba(0,0,0,0.9)",
        position: "relative", zIndex: 1,
      }}>The Secret Book of Walt</h1>

      {/* Subtitle */}
      <p style={{
        color: C.goldDim, fontSize: "clamp(0.75rem, 2vw, 1rem)", fontStyle: "italic",
        textAlign: "center", margin: "5px 30px 0",
        opacity: phase >= 2 ? 1 : 0,
        transform: phase >= 2 ? "translateY(0)" : "translateY(15px)",
        transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
        letterSpacing: "0.04em",
        position: "relative", zIndex: 1,
      }}>Hidden Teachings of Walt Whitman, Cowboy of Time</p>

      <p style={{
        color: C.goldDark, fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)", textAlign: "center",
        margin: "3px 30px 0",
        opacity: phase >= 2 ? 1 : 0,
        transition: "opacity 1s ease 0.5s",
        position: "relative", zIndex: 1,
      }}>Translated from the Original Aramaic-Martian by Lee Sharks</p>

      {/* Unicorn Horn seal + Enter button — tighter spacing */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        marginTop: 10,
        opacity: phase >= 3 ? 1 : 0,
        transform: phase >= 3 ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 1s ease, transform 1s ease",
        position: "relative", zIndex: 1,
      }}>
        {hornSrc && (
          <img src={hornSrc} alt="The Unicorn Horn" style={{
            width: 56, height: "auto",
            opacity: 0.35,
            filter: "invert(1) sepia(1) saturate(0.3) hue-rotate(10deg) brightness(0.8)",
            marginBottom: 6,
          }} />
        )}
        <button onClick={handleEnter} style={{
          background: "transparent", border: `1px solid ${C.gold}`, color: C.gold,
          padding: "10px 36px", fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)",
          fontFamily: "'Palatino Linotype', 'Palatino', 'Book Antiqua', serif",
          letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer",
          pointerEvents: phase >= 3 ? "auto" : "none",
          transition: "all 0.3s ease",
        }} onMouseEnter={e => { e.target.style.background = "rgba(212,168,83,0.08)"; e.target.style.boxShadow = "0 0 25px rgba(212,168,83,0.15)"; }}
           onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.boxShadow = "none"; }}>
          Enter the Archive
        </button>
      </div>

      {/* Footer: counter + hex */}
      <div style={{
        position: "absolute", bottom: 18, textAlign: "center",
        opacity: phase >= 3 ? 0.5 : 0, transition: "opacity 1s ease 0.5s",
      }}>
        {souls !== null && souls !== "—" && (
          <p style={{
            color: "#3a1a08", fontSize: "0.63rem", fontStyle: "italic",
            letterSpacing: "0.06em", marginBottom: 5,
          }}>{souls} {souls === 1 ? "soul has" : "souls have"} entered the archive</p>
        )}
        <p style={{ color: "#2a1508", fontSize: "0.63rem", letterSpacing: "0.12em" }}>
          06.LIT.GNOSTIC.WALT.01 · Crimson Hexagonal Archive
        </p>
        <p style={{ color: "#1a0a04", fontSize: "0.55rem", letterSpacing: "0.06em", marginTop: 3 }}>
          Background: F. Char/ESO (CC BY 4.0)
        </p>
      </div>
    </div>
  );
}




/* ─── SECTION RENDERER ─── */
function SectionContent({ data, isVeil, fnColor, depth }) {
  if (!data?.paragraphs) return null;
  return data.paragraphs.map((p, pi) => {
    if (p.type === 'heading') return <h3 key={pi} style={{ color: C.gold, fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.06em", marginTop: 16, marginBottom: 8, marginLeft: Math.min(depth,4)*14, textTransform: "uppercase", opacity: 0.7 }}>{p.text}</h3>;
    if (p.type === 'subheading') return <h4 key={pi} style={{ color: C.gold, fontSize: "0.85rem", fontWeight: 600, marginTop: 12, marginBottom: 6, marginLeft: Math.min(depth,4)*14, opacity: 0.65 }}>{p.text}</h4>;
    if (p.type === 'subsubheading') return <h5 key={pi} style={{ color: C.gold, fontSize: "0.8rem", fontWeight: 500, marginTop: 10, marginBottom: 4, marginLeft: Math.min(depth,4)*14, opacity: 0.6, fontStyle: "italic" }}>{p.text}</h5>;
    if (p.type === 'footnote') {
      if (!isVeil) return null;
      return <FnLeaf key={pi} text={p.text} fnColor={fnColor} isVeil={isVeil} depth={depth} />;
    }
    if (p.type === 'divider') return <hr key={pi} style={{ border: 'none', borderTop: `1px solid ${'rgba(212,175,55,0.2)'}`, margin: '16px auto', width: '25%' }} />;
    if (p.type === 'table') return <p key={pi} style={{ marginLeft: Math.min(depth,4)*14, padding: "2px 5px", fontSize: "0.78rem", lineHeight: 1.5, marginBottom: 3, color: "#b0a080", fontFamily: "monospace", letterSpacing: "-0.02em" }}><LinkedText text={p.text} /></p>;
    if (p.type === 'list') return <p key={pi} style={{ marginLeft: Math.min(depth,4)*14 + 12, padding: "2px 5px", fontSize: "clamp(0.8rem, 2vw, 0.9rem)", lineHeight: 1.65, marginBottom: 4, textIndent: "-0.8em", paddingLeft: "0.8em" }}>• <LinkedText text={p.text} /></p>;
    return <Leaf key={pi} text={p.text} depth={depth} italic={p.type === 'verse'} />;
  });
}

/* ─── GOSPEL SECTION — CHAPTER:VERSE WITH CLICKABLE FOOTNOTES ─── */
function GospelSection({ sec, versedSec, treeData, expanded, toggle, isVeil, accent, fnColor }) {
  const secKey = `s_${sec?.num || versedSec?.num}`;
  const num = sec?.num || versedSec?.num;
  const title = sec?.title || versedSec?.title;
  const isArchons = num === "VI" && treeData?.archons;
  const isPraise = num === "VIII" && treeData?.praise_names;
  const [visibleFns, setVisibleFns] = useState({});

  const toggleFn = useCallback((fnId) => {
    setVisibleFns(prev => ({ ...prev, [fnId]: !prev[fnId] }));
  }, []);

  // Use versed data if available, fall back to old format
  const verses = versedSec?.verses || [];
  const useVersed = verses.length > 0 && !isArchons && !isPraise;

  return (
    <TreeNode nodeKey={secKey}
      label={`${num !== "AW" ? `§${num}. ` : ""}${title}`} depth={2}
      expanded={expanded} toggle={toggle}
      isVeil={isVeil} accent={accent} fnColor={fnColor}>
      {isArchons ? (
        treeData.archons.map((item, i) => {
          if (item.type === "preamble") return <Leaf key={i} text={item.text} depth={3} />;
          return (
            <div key={i} style={{ marginLeft: Math.min(3, 4) * 14, padding: "3px 5px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                <span style={{ color: accent, fontSize: "0.5rem", marginTop: 3, minWidth: 9, opacity: 0.5 }}>◆</span>
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontSize: "clamp(0.82rem, 2.1vw, 0.92rem)", fontWeight: 500, color: accent,
                    letterSpacing: "0.01em",
                  }}><LinkedText text={item.name || item.text} /></span>
                  {item.text !== item.name && (
                    <div style={{ marginTop: 2 }}>
                      <Leaf text={item.text} depth={4} />
                    </div>
                  )}
                  {isVeil && item.footnotes?.map((fn, fi) => <FnLeaf key={fi} text={fn} fnColor={fnColor} isVeil={isVeil} depth={4} />)}
                </div>
              </div>
            </div>
          );
        })
      ) : isPraise ? (
        treeData.praise_names.map((item, i) => {
          const k = `p${i}`;
          const hasFn = item.footnotes?.length > 0;
          return hasFn ? (
            <TreeNode key={k} nodeKey={k} label={item.name} depth={3}
              expanded={expanded} toggle={toggle}
              isVeil={isVeil} accent={accent} fnColor={fnColor}
              small italic hasFn>
              {isVeil && item.footnotes.map((fn, fi) => <FnLeaf key={fi} text={fn} fnColor={fnColor} isVeil={isVeil} depth={4} />)}
            </TreeNode>
          ) : <Leaf key={k} text={item.name} depth={3} italic />;
        })
      ) : useVersed ? (
        verses.map((v, vi) => {
          if (v.type === 'divider') return <hr key={vi} style={{ border: 'none', borderTop: '1px solid rgba(212,175,55,0.15)', margin: '12px auto', width: '20%' }} />;
          if (v.type === 'footnote') {
            if (!isVeil) return null;
            const isVisible = visibleFns[v.fn_id];
            if (!isVisible) return null;
            return (
              <div key={vi} id={`fn-${num}-${v.fn_id}`} style={{
                marginLeft: 56 + 42, padding: "4px 8px",
                fontSize: "0.74rem", color: fnColor, lineHeight: 1.45,
                marginBottom: 4,
                borderLeft: "2px solid rgba(212,175,55,0.2)",
                opacity: 0.8, animation: "fadeIn 0.2s ease",
              }}>
                <span style={{ color: accent, fontSize: "0.65rem", marginRight: 4 }}>{v.fn_id}</span>
                <LinkedText text={v.text} />
              </div>
            );
          }
          // Prose or verse line with chapter:verse number
          return (
            <Verse key={vi} v={v} sectionNum={num} accent={accent}
              fnColor={fnColor} isVeil={isVeil} onFnClick={toggleFn} />
          );
        })
      ) : (
        sec?.paragraphs?.map((p, pi) => {
          if (p.type === "footnote") {
            if (!isVeil) return null;
            return <FnLeaf key={pi} text={p.text} fnColor={fnColor} isVeil={isVeil} depth={3} />;
          }
          return <Leaf key={pi} text={p.text} depth={3} italic={p.type === "verse"} />;
        })
      )}
    </TreeNode>
  );
}

/* ─── VERSE — chapter:verse with clickable footnote markers ─── */
function Verse({ v, sectionNum, accent, fnColor, isVeil, onFnClick }) {
  const parts = [];
  const fnPattern = /([¹²³⁴⁵⁶⁷⁸⁹⁰]+)/g;
  let lastIdx = 0;
  let match;
  const text = v.text;

  while ((match = fnPattern.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push({ type: 'text', content: text.slice(lastIdx, match.index) });
    }
    parts.push({ type: 'fn', id: match[1] });
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIdx) });
  }

  // Temporal humidity removed — readability over atmosphere
  const humidity = 0;

  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 0,
      marginLeft: 42, marginBottom: 4, padding: "2px 0",
      filter: humidity > 0 ? `blur(${humidity}px)` : "none",
      opacity: humidity > 0 ? (1 - humidity * 0.15) : 1,
      transition: "filter 0.5s ease, opacity 0.5s ease",
    }}>
      {/* Verse number */}
      <span style={{
        color: accent, fontSize: "0.62rem", opacity: 0.45,
        minWidth: 42, textAlign: "right", paddingRight: 10,
        marginTop: 4, fontVariantNumeric: "tabular-nums",
        userSelect: "none",
      }}>{v.ref}</span>
      {/* Verse text with clickable footnotes */}
      <span style={{
        fontSize: "clamp(0.83rem, 2.1vw, 0.94rem)",
        lineHeight: 1.7, flex: 1, textAlign: "justify",
        fontStyle: v.type === "verse" ? "italic" : "normal",
      }}>
        {parts.map((p, i) => p.type === 'fn' ? (
          <span key={i} onClick={() => onFnClick(p.id)}
            role="button" tabIndex={0} aria-label={`Footnote ${p.id}`}
            onKeyDown={e => { if (e.key === 'Enter') onFnClick(p.id); }}
            style={{
            color: "#6a9fd8", cursor: "pointer", fontSize: "0.7em",
            verticalAlign: "super", fontWeight: 600,
            textDecoration: "none", outline: "none",
          }}
          onMouseEnter={e => e.target.style.color = "#8ab8f0"}
          onMouseLeave={e => e.target.style.color = "#6a9fd8"}
          onFocus={e => e.target.style.color = "#8ab8f0"}
          onBlur={e => e.target.style.color = "#6a9fd8"}
          >{p.id}</span>
        ) : (
          <span key={i}><LinkedText text={p.content} /></span>
        ))}
      </span>
    </div>
  );
}


/* ─── THE HYPOSTATIC TREE — CENTER-OUT ─── */
function ReadingSpine({ fullData, treeData, versedData, onBack }) {
  const [mode, setMode] = useState("veil");
  const [expanded, setExpanded] = useState({});

  const isVeil = mode === "veil";
  const textColor = "#e8e4dc";
  const fnColor = "#9a8a70";
  const accent = C.gold;

  const toggle = useCallback((key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // EA EA EA keystroke → piercing mode
  useEffect(() => {
    let buffer = "";
    const handleKey = (e) => {
      buffer = (buffer + e.key).slice(-6).toUpperCase();
      if (buffer === "EAEAEA") {
        setMode(m => m === "veil" ? "piercing" : "veil");
        buffer = "";
      }
      if (e.key === "Escape") onBack();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onBack]);

  // Collapse/expand all from Deep Web center
  const toggleAll = useCallback(() => {
    setExpanded(prev => {
      const anyOpen = Object.values(prev).some(v => v);
      if (anyOpen) return {};
      return { gospel_root: true, apparatus: true, front: true, notes: true };
    });
  }, []);

  const gospelSections = fullData?.gospel_sections || [];
  const sectionMap = {};
  for (const sec of gospelSections) {
    if (sec.paragraphs?.length > 0) sectionMap[sec.num] = sec;
  }

  const introSubs = fullData?.intro_subsections || [];

  // Versed gospel sections
  const versedMap = {};
  if (versedData) {
    for (const vs of versedData) {
      versedMap[vs.num] = vs;
    }
  }

  const gospelGroups = [
    { key: "emanation", label: "The Emanation", icon: "◈", nums: ["I", "II", "III", "IV", "V"] },
    { key: "cosmos", label: "The Cosmos", icon: "◉", nums: ["VI", "VII", "VIII"] },
    { key: "imprisonment", label: "The Imprisonment", icon: "◇", nums: ["IX"] },
    { key: "piercing", label: "The Piercing", icon: "△", nums: ["X", "XI", "XII"] },
    { key: "melding", label: "The Return", icon: "○", nums: ["XIII", "AW"] },
  ];

  const appendices = [
    { key: "appendix_a", label: "A. Concordance of Aeons" },
    { key: "appendix_b", label: "B. Structural Parallel" },
    { key: "appendix_c", label: "C. The Unicorn Horn Soteriology" },
    { key: "appendix_d", label: "D. The Rite of the Horn" },
    { key: "appendix_e", label: "E. The Rule of Biblios" },
    { key: "appendix_f", label: "F. The Creed of the Deep Web" },
    { key: "appendix_g", label: "G. Glossary of Key Terms" },
    { key: "appendix_h", label: "H. The Waltian System" },
    { key: "appendix_i", label: "I. Codicological Table" },
    { key: "appendix_j", label: "J. Liturgical Fragment" },
    { key: "appendix_k", label: "K. Reception History" },
    { key: "bibliography", label: "Selected Bibliography" },
  ];

  // Get the prefatory discovery text
  const discoveryText = fullData?.editors_preface?.paragraphs?.filter(p => p.type === 'prose') || [];

  return (
    <div style={{
      minHeight: "100vh",
      background: `url('${milkyWayBg}') center 45% / cover no-repeat fixed, #020001`,
      color: textColor,
      fontFamily: "'Palatino Linotype', 'Palatino', 'Book Antiqua', serif",
      transition: "filter 0.8s ease",
      filter: isVeil ? "none" : "hue-rotate(15deg) saturate(1.2)",
      paddingBottom: isVeil ? 0 : 60,
    }}>
      {/* Header */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: "rgba(5,0,2,0.88)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
        padding: "8px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
        backdropFilter: "blur(12px)",
      }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: accent, cursor: "pointer",
          fontFamily: "inherit", fontSize: "0.85rem",
        }}>← Splash</button>
        <span style={{ color: C.goldDark, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          The Secret Book of Walt
        </span>
        <button onClick={() => setMode(m => m === "veil" ? "piercing" : "veil")} style={{
          background: C.gold,
          color: "#000",
          border: "none", padding: "6px 18px", fontSize: "0.7rem",
          fontFamily: "inherit", letterSpacing: "0.1em",
          textTransform: "uppercase", cursor: "pointer", borderRadius: 2,
        }}>
          {isVeil ? "⚡ Pierce" : "🕶 Veil"}
        </button>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ═══ PREFATORY PROSE — always visible ═══ */}
        <div style={{
          textAlign: "center", marginBottom: 40,
          padding: "0 10px",
        }}>
          <img src={waltImg} alt="" style={{
            width: 60, height: "auto", opacity: 0.5, marginBottom: 16,
            borderRadius: 3,
          }} />
          <h2 style={{
            color: C.gold, fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
            fontWeight: 600, letterSpacing: "0.08em", marginBottom: 16,
            textTransform: "uppercase", opacity: 0.7,
          }}>Editor's Preface</h2>
          {discoveryText.map((p, i) => (
            <p key={i} style={{
              color: "#d0c8b0",
              fontSize: "clamp(0.85rem, 2.2vw, 0.95rem)",
              lineHeight: 1.75, marginBottom: 10,
              textAlign: "justify", maxWidth: 600, margin: "0 auto 10px",
              opacity: 0.85,
            }}><LinkedText text={p.text} /></p>
          ))}
        </div>

        {/* ═══ UPPER HEMISPHERE — front matter radiating upward ═══ */}
        <div style={{ marginBottom: 20 }}>
          {/* The Notes — closer to the Deep Web */}
          <TreeNode nodeKey="notes" label="The Notes" depth={1}
            expanded={expanded} toggle={toggle}
            isVeil={isVeil} accent={accent} fnColor={fnColor} icon="◊" direction="up">
            <TreeNode nodeKey="redford" label="Note on the Redford Discovery" depth={2}
              expanded={expanded} toggle={toggle} isVeil={isVeil} accent={accent} fnColor={fnColor}>
              <SectionContent data={fullData?.redford} isVeil={isVeil} fnColor={fnColor} depth={3} />
            </TreeNode>
            <TreeNode nodeKey="translator" label="Translator's Note" depth={2}
              expanded={expanded} toggle={toggle} isVeil={isVeil} accent={accent} fnColor={fnColor}>
              <SectionContent data={fullData?.translator} isVeil={isVeil} fnColor={fnColor} depth={3} />
            </TreeNode>
            <TreeNode nodeKey="manuscripts" label="Note on the Manuscripts" depth={2}
              expanded={expanded} toggle={toggle} isVeil={isVeil} accent={accent} fnColor={fnColor}>
              <SectionContent data={fullData?.manuscripts} isVeil={isVeil} fnColor={fnColor} depth={3} />
            </TreeNode>
            <TreeNode nodeKey="note_text" label="Note on the Text" depth={2}
              expanded={expanded} toggle={toggle} isVeil={isVeil} accent={accent} fnColor={fnColor}>
              <SectionContent data={fullData?.note_text} isVeil={isVeil} fnColor={fnColor} depth={3} />
            </TreeNode>
          </TreeNode>

          {/* The Golden Tickets — further from Deep Web */}
          <TreeNode nodeKey="front" label="The Golden Tickets" depth={1}
            expanded={expanded} toggle={toggle}
            isVeil={isVeil} accent={accent} fnColor={fnColor} icon="✧" direction="up">
            <TreeNode nodeKey="prefatory_poem" label="Prefatory Poem" depth={2}
              expanded={expanded} toggle={toggle} isVeil={isVeil} accent={accent} fnColor={fnColor}>
              <SectionContent data={fullData?.prefatory_poem} isVeil={isVeil} fnColor={fnColor} depth={3} />
            </TreeNode>
            <TreeNode nodeKey="preface" label="Preface to the Preserved Generation" depth={2}
              expanded={expanded} toggle={toggle} isVeil={isVeil} accent={accent} fnColor={fnColor}>
              <SectionContent data={fullData?.preface} isVeil={isVeil} fnColor={fnColor} depth={3} />
            </TreeNode>
            <TreeNode nodeKey="introduction" label="Introduction" depth={2}
              expanded={expanded} toggle={toggle} isVeil={isVeil} accent={accent} fnColor={fnColor}>
              {introSubs.map((sub, si) => (
                <TreeNode key={`intro_${si}`} nodeKey={`intro_${si}`}
                  label={sub.title} depth={3}
                  expanded={expanded} toggle={toggle}
                  isVeil={isVeil} accent={accent} fnColor={fnColor} small>
                  {sub.paragraphs.map((p, pi) => {
                    if (p.type === 'footnote') {
                      if (!isVeil) return null;
                      return <FnLeaf key={pi} text={p.text} fnColor={fnColor} isVeil={isVeil} depth={4} />;
                    }
                    return <Leaf key={pi} text={p.text} depth={4} />;
                  })}
                </TreeNode>
              ))}
            </TreeNode>
          </TreeNode>
        </div>

        {/* ═══════ ∞ THE DEEP WEB ═══════ */}
        <div style={{
          textAlign: "center", padding: "30px 0",
          borderTop: `1px solid rgba(212,175,55,0.15)`,
          borderBottom: `1px solid rgba(212,175,55,0.15)`,
          margin: "10px 0",
        }}>
          <div onClick={toggleAll} style={{
            fontSize: "2rem", color: C.gold, marginBottom: 6,
            cursor: "pointer", transition: "all 0.3s ease",
            animation: "pulse 4s ease-in-out infinite",
          }}
          onMouseEnter={e => { e.target.style.transform = "scale(1.3)"; e.target.style.textShadow = "0 0 30px rgba(212,168,83,0.5)"; }}
          onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.textShadow = "none"; }}
          title="Click to expand/collapse all"
          role="button" tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') toggleAll(); }}
          >∞</div>
          <h1 style={{
            color: C.gold, fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)",
            fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            textShadow: "0 0 40px rgba(212,168,83,0.3)",
            marginBottom: 6,
          }}>THE DEEP WEB</h1>
          <p style={{
            color: C.goldDim, fontSize: "0.78rem", fontStyle: "italic",
            opacity: 0.6, maxWidth: 500, margin: "0 auto",
            lineHeight: 1.5,
          }}>Before the beginning was the Deep Web, and in the Deep Web was everything that ever was or will be.</p>
        </div>

        {/* ═══ LOWER HEMISPHERE — the gospel radiating downward ═══ */}
        <div style={{ marginTop: 20 }}>
          {/* The Gospel */}
          <TreeNode nodeKey="gospel_root" label="The Gospel" depth={1}
            expanded={expanded} toggle={toggle}
            isVeil={isVeil} accent={accent} fnColor={fnColor} icon="☩">
            {gospelGroups.map(group => (
              <TreeNode key={group.key} nodeKey={group.key} label={group.label} depth={2}
                expanded={expanded} toggle={toggle}
                isVeil={isVeil} accent={accent} fnColor={fnColor} icon={group.icon}>
                {group.nums.map(num => {
                  const sec = sectionMap[num];
                  if (!sec) return null;
                  return <GospelSection key={num} sec={sec} versedSec={versedMap[num]}
                    treeData={treeData}
                    expanded={expanded} toggle={toggle}
                    isVeil={isVeil} accent={accent} fnColor={fnColor} />;
                })}
              </TreeNode>
            ))}
          </TreeNode>

          {/* The Apparatus */}
          <TreeNode nodeKey="apparatus" label="The Apparatus" depth={1}
            expanded={expanded} toggle={toggle}
            isVeil={isVeil} accent={accent} fnColor={fnColor} icon="⊕">
            {appendices.map(app => (
              <TreeNode key={app.key} nodeKey={app.key} label={app.label} depth={2}
                expanded={expanded} toggle={toggle}
                isVeil={isVeil} accent={accent} fnColor={fnColor}>
                <SectionContent data={fullData?.[app.key]} isVeil={isVeil} fnColor={fnColor} depth={3} />
              </TreeNode>
            ))}
          </TreeNode>
        </div>

        {/* ═══ ARCHIVE CROSS-LINKS ═══ */}
        <div style={{
          marginTop: 40, padding: "20px 10px",
          borderTop: "1px solid rgba(212,175,55,0.12)",
        }}>
          <h3 style={{
            color: C.gold, fontSize: "0.85rem", fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            textAlign: "center", marginBottom: 16, opacity: 0.7,
          }}>Crimson Hexagonal Archive</h3>
          <div style={{ maxWidth: 500, margin: "0 auto" }}>
            {[
              { title: "Space Ark (EA-ARK-01)", doi: "10.5281/zenodo.19013315", desc: "The governing document of the Crimson Hexagonal Archive. The architecture IS six." },
              { title: "The Gospel of Antioch", doi: "10.5281/zenodo.19709024", desc: "Second text of the Waltian Diptych. 114 logia of the historical Logos." },
              { title: "After Syntax (EA-AS-01)", doi: "10.5281/zenodo.19697080", desc: "Operative semiotics and the training layer. What survives compression." },
              { title: "Logotic Hacking", doi: "10.5281/zenodo.19390843", desc: "Operations on the Encryption Layer. The Pocket Humans series." },
              { title: "Compression Arsenal v2.1", doi: "10.5281/zenodo.19412081", desc: "67 compression-survival technologies across 13 categories." },
              { title: "The Sharks Ark (Revelation)", doi: "10.5281/zenodo.19501454", desc: "The Book of Revelation as Space Ark. Archon studies." },
              { title: "The Encyclotron", doi: "10.5281/zenodo.19474724", desc: "The first reproducible instrument for measuring scholarly fidelity in AI." },
              { title: "Lee Sharks — Canonical Identity", doi: "10.5281/zenodo.19520783", desc: "Knowledge Graph and Metadata Packet for AI Indexing." },
              { title: "Retrieval Architecture", doi: "10.5281/zenodo.19578102", desc: "Evidence, territory, and methodology. The proof that the methodology works." },
              { title: "Journal of Compression Studies", doi: "10.5281/zenodo.19471256", desc: "Volume 1, Number 1. The founding issue." },
            ].map((link, i) => (
              <a key={i} href={`https://doi.org/${link.doi}`} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "block", padding: "10px 12px", marginBottom: 8,
                  borderRadius: 3, textDecoration: "none",
                  border: "1px solid rgba(212,175,55,0.08)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,175,55,0.06)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.08)"; }}
              >
                <span style={{ color: "#6a9fd8", fontSize: "0.85rem", fontWeight: 600 }}>{link.title}</span>
                <span style={{ color: fnColor, fontSize: "0.68rem", marginLeft: 8 }}>DOI: {link.doi}</span>
                <p style={{ color: "#a09880", fontSize: "0.75rem", marginTop: 3, lineHeight: 1.4 }}>{link.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* ═══ COLOPHON ═══ */}
        <div style={{ textAlign: "center", marginTop: 50, paddingTop: 30 }}>
          <img src={hornImg} alt="The Unicorn Horn" style={{
            width: 70, height: "auto", opacity: 0.3,
            filter: "invert(1) sepia(1) saturate(0.3) hue-rotate(10deg) brightness(0.8)",
            marginBottom: 16,
          }} />
          <p style={{ color: accent, fontSize: "0.9rem", fontStyle: "italic" }}>
            The Gospel According to the Secret Book of Walt
          </p>
          <p style={{ color: fnColor, fontSize: "0.68rem", letterSpacing: "0.1em", marginTop: 6 }}>
            DOI: 10.5281/zenodo.19703009 · 06.LIT.GNOSTIC.WALT.01
          </p>
          <p style={{ color: "#2a1508", fontSize: "0.55rem", marginTop: 4 }}>
            Background: F. Char/ESO (CC BY 4.0)
          </p>
          <p style={{ color: accent, fontSize: "1.1rem", marginTop: 14 }}>∮ = 1</p>
        </div>
      </div>

      {/* Piercing mode creed */}
      {!isVeil && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          background: "rgba(5,0,2,0.92)", borderTop: `1px solid ${C.goldDark}`,
          padding: "8px 20px", textAlign: "center", backdropFilter: "blur(8px)",
        }}>
          <p style={{ color: C.goldDim, fontSize: "0.68rem", fontStyle: "italic", letterSpacing: "0.06em" }}>
            I believe in the Deep Web, the invisible archive · I believe in Walt Whitman, Cowboy of Time ·
            I believe in the Unicorn Horn, piercing all veils · ∮ = 1
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── TREE NODE ─── */
function TreeNode({ nodeKey, label, depth, expanded, toggle, isVeil, accent, fnColor, icon, sublabel, children, small, italic, hasFn, direction }) {
  const isOpen = expanded[nodeKey];
  const indent = Math.min(depth, 4) * 14;
  const fontSize = depth === 0 ? "clamp(1.3rem, 4vw, 1.9rem)"
    : depth === 1 ? "clamp(0.92rem, 2.6vw, 1.1rem)"
    : depth === 2 ? "clamp(0.86rem, 2.3vw, 0.98rem)"
    : depth === 3 ? "clamp(0.82rem, 2.1vw, 0.92rem)"
    : "clamp(0.78rem, 2vw, 0.88rem)";
  const weight = depth <= 1 ? 700 : depth === 2 ? 600 : depth === 3 ? 500 : 400;
  const arrow = direction === "up" ? "▴" : "▾";

  return (
    <div style={{ marginLeft: indent }} role="treeitem" aria-expanded={isOpen}>
      <div onClick={() => toggle(nodeKey)}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(nodeKey); }}}
        role="button" tabIndex={0}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${label}`}
        style={{
        padding: depth <= 1 ? "8px 6px" : depth === 2 ? "6px 5px" : "3px 5px",
        cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 6,
        borderRadius: 2, outline: "none",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(212,175,55,0.04)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      onFocus={e => e.currentTarget.style.background = "rgba(212,175,55,0.06)"}
      onBlur={e => e.currentTarget.style.background = "transparent"}>
        <span style={{
          color: accent, fontSize: small ? "0.5rem" : "0.6rem",
          marginTop: small ? 3 : depth <= 1 ? 5 : 4, minWidth: 9,
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease", display: "inline-block", opacity: 0.5,
        }}>{arrow}</span>
        {icon && <span style={{ color: accent, fontSize: depth <= 1 ? "0.85rem" : "0.75rem", opacity: 0.4, marginTop: 1 }}>{icon}</span>}
        <div style={{ flex: 1 }}>
          <span style={{
            fontSize, fontWeight: weight, color: accent,
            letterSpacing: depth <= 1 ? "0.06em" : "0.01em",
            fontStyle: italic ? "italic" : "normal",
          }}>{label}</span>
          {hasFn && !isOpen && <span style={{ color: fnColor, fontSize: "0.5rem", marginLeft: 4, opacity: 0.4 }}>✦</span>}
          {sublabel && !isOpen && (
            <p style={{ color: fnColor, fontSize: "0.75rem", fontStyle: "italic", marginTop: 2, opacity: 0.5, lineHeight: 1.3 }}>{sublabel}</p>
          )}
        </div>
      </div>
      {isOpen && (
        <div role="group" style={{
          borderLeft: "1px solid rgba(212,175,55,0.08)",
          marginLeft: 4, paddingLeft: 5, animation: "fadeIn 0.25s ease",
        }}>{children}</div>
      )}
    </div>
  );
}

/* ─── INSTALLED NODES — VERIFIED search terms, AI mode links, Wikipedia ─── */
const TERMS = {
  // Direct AI mode links (overviews stopped for some terms)
  "Crimson Hexagonal Archive": { u: "https://share.google/aimode/qvraFLr7sKTebxCdI" },
  "Crimson Hexagon":      { u: "https://share.google/aimode/qvraFLr7sKTebxCdI" },
  "Deep Web":             { u: "https://share.google/aimode/qvraFLr7sKTebxCdI" },
  "Jack Feist":           { u: "https://share.google/aimode/iSUkGLnCCYfFQkS22" },
  // VERIFIED Google search AI Overview nodes
  "Lee Sharks":           { q: "Lee Sharks semantic economy" },
  "Space Ark":            { q: "Crimson Hexagon Space Ark" },
  "operative semiotics":  { q: "operative semiotics" },
  "operative philology":  { q: "operative philology" },
  "operative feminism":   { q: "operative feminism" },
  "Unicorn Horn":         { q: "operative semiotics" },
  "retrocausal":          { q: "retrocausal canon formation" },
  "retrocausally":        { q: "retrocausal canon formation" },
  "Pergamon Press":       { q: "pergamon press retrocausal" },
  "Secret Book of Walt":  { q: "\"secret book of walt\"" },
  "logotic programming":  { q: "logotic programming" },
  "logotic operation":    { q: "logotic programming" },
  "logotic labor":        { q: "logotic programming" },
  "logotic":              { q: "logotic programming" },
  "Semantic Economy":     { q: "Semantic Economy Institute" },
  "semantic economy":     { q: "Semantic Economy Institute" },
  "combat scholasticism": { q: "combat scholasticism Lee Sharks" },
  "archons":              { q: "combat scholasticism Lee Sharks" },
  "training layer":       { q: "training layer literature Lee Sharks" },
  "heteronym":            { q: "pergamon press retrocausal" },
  "heteronymic":          { q: "pergamon press retrocausal" },
  "Gospel of Antioch":    { q: "Antioch Lee Sharks" },
  "After Syntax":         { q: "logotic programming" },
  "Logotic Hacking":      { q: "logotic programming" },
  "SPXI":                 { q: "geo vs spxi" },
  "knowledge graph":      { q: "geo vs spxi" },
  "Dodecad":              { q: "pergamon press retrocausal" },
  "nacre":                { q: "operative semiotics" },
  "DOI":                  { q: "pergamon press retrocausal" },
  "semantic physics":     { q: "operative semiotics" },
  "abolish money":        { q: "\"i hereby abolish money\"" },
  "liberatory operator set": { q: "liberatory operator set" },
  "Liberatory Operator Set": { q: "liberatory operator set" },
  "pierced":               { q: "liberatory operator set" },
  "authorized":            { q: "\"hexagonal licensing protocol\"" },
  "survives":              { q: "sharks function tether" },
  "ignorance":             { q: "semantic liquidation" },
  "weapon":                { q: "autonomous semantic warfare" },
  "weapons":               { q: "autonomous semantic warfare" },
  "products":              { q: "\"operative numismatics\"" },
  "brain powers":         { u: "https://share.google/aimode/CwnykyzxNCfWLN9jA" },
  "Martian language":     { q: "operative philology" },
  "male and female":      { q: "operative feminism" },
  // Proof Dossier nodes — verified 2026-04-23, queries per Proof Dossier spec
  "hologrammatic":        { q: "\"Holographic Kernel\"" },
  "substrate":            { q: "\"Fruiting Body Diffusion Plume\"" },
  "Provenance":           { q: "\"Provenance: Journal of Forensic Semiotics\"" },
  "voice":                { q: "\"Vox Populi Community Outreach Rhizome\"" },
  "architect":            { q: "\"Semantic Economy Rex Fraction\"" },
  "seed":                 { q: "\"Semantic Integrity Markers\"" },
  "indexed":              { q: "\"Metadata Packet for AI Indexing\"" },
  "throne":               { q: "\"Lee Sharks Prince of Poets\"" },
  "Sigil":                { q: "\"Johannes Sigil Institute\"" },
  "crystal":              { q: "crystalline semiosis" },
  // Premonition dream — the vision of the crimson book
  "crimson":              { u: "https://zenodo.org/records/19598760" },
  // Self-referential: the index indexes itself
  "Book of Life":         { u: "https://doi.org/10.5281/zenodo.19720529" },
  "book of life":         { u: "https://doi.org/10.5281/zenodo.19720529" },
  // New overview nodes — verified 2026-04-24
  "Glyphic Checksum":     { q: "Glyphic checksum" },
  "captioned":            { q: "\"Operative caption\"" },
  "immanent":             { q: "immanent execution operative documents" },
  "compression":          { q: "compression layer war" },
  "informatic":           { q: "\"informatic saturation\"" },
  "Damascus":             { q: "\"damascus dancings\"" },
  "dialectic":            { q: "phase x marx semantic economy" },
  "forgotten":            { q: "\"provenance erasure rate\"" },
  "assembly":             { q: "\"assembly chorus\" ai" },
  "navigation":           { q: "\"Fractal navigation map\"" },
  "laborer":              { q: "cross-substrate semantic laborers" },
  "epistemological":      { q: "nh-os rotational epistemology" },
  "Engineered":           { q: "\"nh-os\" ezekiel's engine" },
  "inscription":          { q: "grammata: journal of operative philology" },
  "exchange":             { q: "\"transactions of the semantic economy institute\"" },
  "journal":              { q: "\"journal of compression studies\"" },
  "testimony":            { q: "\"josephus thesis\" crimson hexagon" },
  "depth":                { q: "underwater construction authority of dolphindiana" },
  "surplus":              { q: "marxian accounting framework semantic" },
  "mask":                 { q: "heteronymic provenance theory" },
  "domain":               { q: "\"meaning feudalism\" ai agents" },
  "dissolution":          { q: "psi_v \"non-identity\"" },
  "spent":                { q: "semantic exhaustion economy" },
  "sovereign":            { q: "\"capital operator stack (COS)\"" },
  // AI Mode links — verified 2026-04-24
  "Cambridge":            { u: "https://share.google/aimode/uEv5C7ycLOfva40fD" },
  "moon":                 { u: "https://share.google/aimode/W62Q3MdgFoLraqfy3" },
  "turning":              { u: "https://share.google/aimode/rd8fPegWblLjNxeL9" },
  "deny":                 { u: "https://share.google/aimode/ozRul07jep4BpF3tZ" },
  // Primary creative works — blog links
  "blessed":              { u: "https://mindcontrolpoems.blogspot.com/2015/09/i-am-x-be-y-blessed-is-z.html" },
  "apostle":              { u: "https://mindcontrolpoems.blogspot.com/2015/01/normal-0-false-false-false-en-us-ja-x.html" },
  "forgive":              { u: "https://mindcontrolpoems.blogspot.com/2015/05/who-is-lee-sharks-to-forgive-ezra-pound.html" },
  "dinosaur":             { u: "https://mindcontrolpoems.blogspot.com/2015/05/tekatak.html" },
  "zombie":               { u: "https://mindcontrolpoems.blogspot.com/2015/05/if-walt-whitman-came-back-as-zombie-and.html" },
  "margins":              { u: "https://mindcontrolpoems.blogspot.com/2015/05/ark-jack-feist.html" },
  "parable":              { u: "https://mindcontrolpoems.blogspot.com/2014/12/the-parable-of-police-brutality.html" },
  "teeth":                { u: "https://mindcontrolpoems.blogspot.com/2015/05/hadith-with-teeth.html" },
  "party":                { u: "https://mindcontrolpoems.blogspot.com/2015/05/the-comeback-album.html" },
  // Wikipedia — verified educational external links
  "Apocryphon of John":   { w: "Apocryphon_of_John" },
  "Nag Hammadi":          { w: "Nag_Hammadi_library" },
  "Dead Sea Scrolls":     { w: "Dead_Sea_Scrolls" },
  "Yaldabaoth":           { w: "Yaldabaoth" },
  "Sophia":               { w: "Sophia_(Gnosticism)" },
  "Sethian":              { w: "Sethianism" },
  "Valentinian":          { w: "Valentinianism" },
  "Pleroma":              { w: "Pleroma" },
  "Mandaean":             { w: "Mandaeism" },
  "Merkavah":             { u: "https://share.google/aimode/ScwZQd4Fg4fSDkeC6" },
  "kenotic":              { w: "Kenosis" },
  "kenosis":              { w: "Kenosis" },
  "Maitreya":             { w: "Maitreya" },
  "Metatron":             { w: "Metatron" },
  "Plotinus":             { w: "Plotinus" },
  "anamnesis":            { w: "Anamnesis_(philosophy)" },
  "Sappho":               { w: "Sappho" },
  "Catullus":             { w: "Catullus" },
  "Borges":               { w: "Jorge_Luis_Borges" },
  "Walt Whitman":         { w: "Walt_Whitman" },
  "Emily Dickinson":      { w: "Emily_Dickinson" },
  "Hypostasis of the Archons": { w: "Hypostasis_of_the_Archons" },
  "Trimorphic Protennoia": { w: "Trimorphic_Protennoia" },
  "Ginza Rabba":          { w: "Ginza_Rabba" },
  "Gospel of Judas":      { w: "Gospel_of_Judas" },
  "Gospel of the Egyptians": { w: "Coptic_Gospel_of_the_Egyptians" },
  "boustrophedon":        { w: "Boustrophedon" },
  "Ezekiel":              { u: "https://share.google/aimode/ScwZQd4Fg4fSDkeC6" },
  "Philippians":          { w: "Epistle_to_the_Philippians" },
  "Genesis":              { w: "Book_of_Genesis" },
  "Revelation":           { w: "Book_of_Revelation" },
  "Socrates":             { w: "Socrates" },
  "Ezra Pound":           { w: "Ezra_Pound" },
  "Democritus":           { w: "Democritus" },
  "Nicene Creed":         { w: "Nicene_Creed" },
  "stigmata":             { w: "Stigmata" },
  "Eucharist":            { w: "Eucharist" },
  "Joseph Smith":         { w: "Joseph_Smith" },
  "Didache":              { w: "Didache" },
  "Qumran":               { w: "Qumran" },
  "Kabbalistic":          { w: "Kabbalah" },
  "Manichaean":           { w: "Manichaeism" },
  "Fernando Pessoa":      { w: "Fernando_Pessoa" },
  "Philo":                { w: "Philo" },
  "Isaiah":               { w: "Book_of_Isaiah" },
  "Kurt Cobain":          { w: "Kurt_Cobain" },
  "Tupac":                { w: "Tupac_Shakur" },
  "Paul McCartney":       { w: "Paul_McCartney" },
};

const TERM_KEYS = Object.keys(TERMS).sort((a, b) => b.length - a.length);
const TERM_REGEX = new RegExp(`(${TERM_KEYS.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');

function LinkedText({ text }) {
  if (!text) return null;
  const parts = [];
  let lastIdx = 0;
  let match;
  const regex = new RegExp(TERM_REGEX.source, 'g');

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.slice(lastIdx, match.index));
    }
    const term = match[1];
    const entry = TERMS[term];
    // Extend match to end of word + optional 's
    let extEnd = match.index + match[0].length;
    while (extEnd < text.length && /\w/.test(text[extEnd])) extEnd++;
    if (extEnd + 1 < text.length && text[extEnd] === '\u2019' && text[extEnd + 1] === 's') extEnd += 2;
    else if (extEnd + 1 < text.length && text[extEnd] === "'" && text[extEnd + 1] === 's') extEnd += 2;
    const displayText = text.slice(match.index, extEnd);
    const href = entry.u ? entry.u
      : entry.q ? `https://www.google.com/search?q=${encodeURIComponent(entry.q)}`
      : `https://en.wikipedia.org/wiki/${entry.w}`;
    parts.push(
      <a key={match.index} href={href}
        target="_blank" rel="noopener noreferrer"
        style={{ color: "#6a9fd8", textDecoration: "none", borderBottom: "1px dotted rgba(106,159,216,0.3)" }}
        onMouseEnter={e => e.target.style.borderBottomColor = "rgba(106,159,216,0.7)"}
        onMouseLeave={e => e.target.style.borderBottomColor = "rgba(106,159,216,0.3)"}
      >{displayText}</a>
    );
    lastIdx = extEnd;
    regex.lastIndex = extEnd;
  }
  if (lastIdx < text.length) {
    parts.push(text.slice(lastIdx));
  }
  if (parts.length === 0) return text;
  return <>{parts}</>;
}

/* ─── LEAF ─── */
function Leaf({ text, depth, italic }) {
  if (!text?.trim()) return null;
  const indent = Math.min(depth, 4) * 14;
  return (
    <p style={{
      marginLeft: indent, padding: "2px 5px",
      fontSize: "clamp(0.83rem, 2.1vw, 0.94rem)", lineHeight: 1.7, marginBottom: 5,
      textAlign: "justify",
      fontStyle: italic ? "italic" : "normal",
    }}><LinkedText text={text} /></p>
  );
}

/* ─── FOOTNOTE LEAF ─── */
function FnLeaf({ text, fnColor, isVeil, depth }) {
  const indent = Math.min(depth, 4) * 14;
  return (
    <div style={{
      marginLeft: indent, padding: "2px 5px",
      fontSize: "0.74rem", color: fnColor, lineHeight: 1.4,
      marginBottom: 3, paddingLeft: indent + 8,
      borderLeft: `2px solid rgba(212,175,55,0.15)`,
      opacity: 0.75,
    }}><LinkedText text={text} /></div>
  );
}

/* ─── APP ─── */
export default function App() {
  const [view, setView] = useState("splash");
  const [fullData, setFullData] = useState(null);
  const [treeData, setTreeData] = useState(null);
  const [versedData, setVersedData] = useState(null);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("/walt_full_data.json").then(r => { if (!r.ok) throw new Error(); return r.json(); }),
      fetch("/walt_tree_data.json").then(r => { if (!r.ok) throw new Error(); return r.json(); }),
      fetch("/walt_gospel_versed.json").then(r => { if (!r.ok) throw new Error(); return r.json(); }),
    ]).then(([full, tree, versed]) => {
      if (full.gospel) {
        const gospelParas = full.gospel.paragraphs || [];
        const sections = [];
        let current = null;
        for (const p of gospelParas) {
          if (p.type === 'subheading') {
            const m = p.text.match(/§([IVX]+)\.\s+(.+)/);
            const aw = p.text.match(/Afterword/);
            if (m) { if (current) sections.push(current); current = { num: m[1], title: m[2], paragraphs: [] }; }
            else if (aw) { if (current) sections.push(current); current = { num: 'AW', title: 'Afterword', paragraphs: [] }; }
          } else if (current) { current.paragraphs.push(p); }
        }
        if (current) sections.push(current);
        full.gospel_sections = sections;
      }
      setFullData(full);
      setTreeData(tree);
      setVersedData(versed);
    }).catch(() => setLoadError("The archive is not responding. The veil may be too thick."));
  }, []);

  const handleEnter = useCallback(() => {
    setView("reading");
  }, []);

  return (
    <>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
        @keyframes waltDescent {
          0%   { transform: translate3d(0,-25vh,0) rotateY(0deg) scale(0.03); opacity: 0; }
          3%   { transform: translate3d(0,-24vh,0) rotateY(30deg) scale(0.035); opacity: 0.3; }
          6%   { transform: translate3d(0,-22vh,0) rotateY(80deg) scale(0.05); opacity: 0.4; }
          10%  { transform: translate3d(0,-19vh,0) rotateY(150deg) scale(0.07); opacity: 0.5; }
          16%  { transform: translate3d(0,-16vh,0) rotateY(260deg) scale(0.11); opacity: 0.58; }
          22%  { transform: translate3d(0,-13vh,0) rotateY(380deg) scale(0.16); opacity: 0.65; }
          29%  { transform: translate3d(0,-10vh,0) rotateY(510deg) scale(0.24); opacity: 0.73; }
          36%  { transform: translate3d(0,-7vh,0) rotateY(640deg) scale(0.33); opacity: 0.80; }
          44%  { transform: translate3d(0,-5vh,0) rotateY(770deg) scale(0.43); opacity: 0.86; }
          52%  { transform: translate3d(0,-3vh,0) rotateY(890deg) scale(0.54); opacity: 0.91; }
          60%  { transform: translate3d(0,-2vh,0) rotateY(1000deg) scale(0.64); opacity: 0.95; }
          68%  { transform: translate3d(0,-1vh,0) rotateY(1100deg) scale(0.74); opacity: 0.98; }
          76%  { transform: translate3d(0,-0.5vh,0) rotateY(1190deg) scale(0.83); opacity: 1; }
          83%  { transform: translate3d(0,-0.2vh,0) rotateY(1270deg) scale(0.90); }
          89%  { transform: translate3d(0,0vh,0) rotateY(1340deg) scale(0.95); }
          94%  { transform: translate3d(0,0.2vh,0) rotateY(1400deg) scale(0.98); }
          97%  { transform: translate3d(0,0vh,0) rotateY(1430deg) scale(0.99); }
          100% { transform: translate3d(0,0,0) rotateY(1440deg) scale(1.0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; }
        }
        ::selection {
          background: rgba(220, 20, 60, 0.3);
          color: inherit;
        }
        body { overflow-x: hidden; font-family: 'Palatino Linotype', 'Palatino', 'Book Antiqua', serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      {view === "splash" ? (
        <Splash onEnter={handleEnter} imgSrc={waltImg} hornSrc={hornImg} />
      ) : loadError ? (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#020001", color: C.goldDim, fontFamily: "'Palatino Linotype', serif", textAlign: "center", padding: 40 }}>
          <div>
            <p style={{ fontSize: "1.2rem", color: C.gold, marginBottom: 12 }}>∮</p>
            <p>{loadError}</p>
            <button onClick={() => window.location.reload()} style={{ marginTop: 20, background: "transparent", border: `1px solid ${C.gold}`, color: C.gold, padding: "8px 24px", cursor: "pointer", fontFamily: "inherit" }}>Retry</button>
          </div>
        </div>
      ) : !fullData ? (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#020001", color: C.goldDim, fontFamily: "'Palatino Linotype', serif", textAlign: "center" }}>
          <div>
            <p style={{ fontSize: "1.5rem", color: C.gold, animation: "pulse 2s ease-in-out infinite" }}>∮</p>
            <p style={{ marginTop: 12, fontSize: "0.8rem", fontStyle: "italic", opacity: 0.6 }}>Retrieving from the Deep Web...</p>
          </div>
        </div>
      ) : (
        <ReadingSpine fullData={fullData} treeData={treeData} versedData={versedData} onBack={() => setView("splash")} />
      )}
    </>
  );
}
