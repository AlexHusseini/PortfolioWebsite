'use client';

const SECTIONS = [
  ['home', 'Home'],
  ['experience', 'Experience'],
  ['project', 'Project'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

const BLOSSOM = (
  <svg viewBox="-16 -16 32 32" aria-hidden="true">
    <circle className="bud" cx="0" cy="0" r="4.5" />
    <ellipse className="pet" cx="0" cy="-7.5" rx="5" ry="6.4" />
    <ellipse className="pet" cx="7.1" cy="-2.3" rx="5" ry="6.4" transform="rotate(72)" />
    <ellipse className="pet" cx="4.4" cy="6.1" rx="5" ry="6.4" transform="rotate(144)" />
    <ellipse className="pet" cx="-4.4" cy="6.1" rx="5" ry="6.4" transform="rotate(216)" />
    <ellipse className="pet" cx="-7.1" cy="-2.3" rx="5" ry="6.4" transform="rotate(288)" />
    <circle className="core" cx="0" cy="0" r="2.4" />
  </svg>
);

export default function Rail() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <nav className="rail" aria-label="Sections">
      <svg viewBox="0 0 60 800" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <clipPath id="railClip">
            <rect id="railRect" x="0" y="0" width="60" height="0" />
          </clipPath>
          <path
            id="railBranch"
            d="M26 -10 C 33 70, 21 138, 27 210 C 33 284, 20 350, 26 424
               C 32 500, 19 566, 27 640 C 33 706, 24 758, 30 812
               L 38 812 C 32 756, 41 704, 35 638 C 27 564, 40 498, 34 422
               C 28 348, 41 282, 35 208 C 29 136, 41 68, 34 -10 Z"
          />
          <path
            id="railTwigs"
            fill="none"
            strokeLinecap="round"
            d="M25 170 C 16 156, 10 148, 4 143  M32 262 C 42 248, 48 241, 55 236
               M25 408 C 15 394, 9 386, 3 381  M33 520 C 43 506, 49 499, 56 494
               M26 660 C 17 647, 11 640, 5 635"
          />
        </defs>
        <g className="rail-pale">
          <use href="#railBranch" />
          <use href="#railTwigs" strokeWidth="2" />
        </g>
        <g className="rail-ink" clipPath="url(#railClip)">
          <use href="#railBranch" />
          <use href="#railTwigs" strokeWidth="2" />
        </g>
      </svg>
      <div className="rail-nav" id="railNav">
        {SECTIONS.map(([id, label], i) => (
          <button
            key={id}
            className="node"
            style={{ top: `${10 + i * 19.5}%` }}
            aria-label={`Go to ${label}`}
            onClick={() => goTo(id)}
          >
            {BLOSSOM}
            <label>{label}</label>
          </button>
        ))}
      </div>
    </nav>
  );
}
