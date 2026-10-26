// Top-down sports car drawn as inline SVG (nose points up), so no external image is needed.
export default function Car() {
  return (
    <svg viewBox="0 0 200 440" className="h-full w-auto" role="img" aria-label="Top view of an orange sports car">
      <defs>
        <linearGradient id="body" x1="0" x2="1">
          <stop offset="0" stopColor="#e24a00" />
          <stop offset="0.5" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#e24a00" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b3340" />
          <stop offset="1" stopColor="#0f1319" />
        </linearGradient>
        <filter id="soft"><feGaussianBlur stdDeviation="9" /></filter>
      </defs>

      <ellipse cx="100" cy="228" rx="82" ry="214" fill="#000" opacity="0.45" filter="url(#soft)" />

      {/* wheels */}
      <g fill="#0b0c0e">
        <rect x="14" y="88" width="24" height="64" rx="8" />
        <rect x="162" y="88" width="24" height="64" rx="8" />
        <rect x="10" y="296" width="28" height="72" rx="9" />
        <rect x="162" y="296" width="28" height="72" rx="9" />
      </g>

      {/* mirrors */}
      <ellipse cx="22" cy="170" rx="9" ry="5" fill="#e24a00" />
      <ellipse cx="178" cy="170" rx="9" ry="5" fill="#e24a00" />

      {/* body */}
      <path
        d="M100 6C142 6 166 40 170 100L176 200C178 262 178 332 170 398C162 428 132 436 100 436C68 436 38 428 30 398C22 332 22 262 24 200L30 100C34 40 58 6 100 6Z"
        fill="url(#body)"
      />
      <path d="M100 14V150" stroke="#fff" strokeOpacity="0.18" strokeWidth="3" />

      {/* cabin */}
      <path d="M56 152Q100 132 144 152L152 204Q100 192 48 204Z" fill="url(#glass)" />
      <rect x="62" y="204" width="76" height="86" rx="18" fill="#ff9a55" />
      <path d="M58 296Q100 310 142 296L148 334Q100 346 52 334Z" fill="url(#glass)" />

      {/* lights */}
      <path d="M44 68L70 50L73 62L48 82Z" fill="#fff6d6" />
      <path d="M156 68L130 50L127 62L152 82Z" fill="#fff6d6" />
      <rect x="40" y="404" width="36" height="9" rx="4" fill="#ff2b2b" />
      <rect x="124" y="404" width="36" height="9" rx="4" fill="#ff2b2b" />
    </svg>
  )
}
