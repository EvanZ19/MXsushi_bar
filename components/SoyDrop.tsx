// A small dish of soy sauce with a chopstick resting across it and a
// quiet, looping drip — the sushi-counter equivalent of a slow ritual,
// kept as this page's one signature animated element.
export default function SoyDrop() {
  return (
    <svg viewBox="0 0 160 140" className="w-28 md:w-36 h-auto" aria-hidden="true">
      {/* dish */}
      <ellipse cx="80" cy="100" rx="52" ry="18" fill="none" stroke="#28456B" strokeWidth="1.5" opacity="0.55" />
      {/* soy sauce pool */}
      <ellipse cx="80" cy="100" rx="30" ry="10" fill="#16283F" opacity="0.85" />

      {/* ripple rings on the pool */}
      <ellipse className="ripple" cx="80" cy="100" rx="14" ry="5" fill="none" stroke="#DB6A4C" strokeWidth="1" />
      <ellipse className="ripple ripple-2" cx="80" cy="100" rx="14" ry="5" fill="none" stroke="#DB6A4C" strokeWidth="1" />

      {/* chopsticks resting across the dish rim */}
      <rect x="38" y="60" width="86" height="3" rx="1.5" fill="#28456B" opacity="0.5" transform="rotate(-8 80 61)" />
      <rect x="40" y="66" width="86" height="3" rx="1.5" fill="#28456B" opacity="0.5" transform="rotate(-8 80 67)" />

      {/* falling drop */}
      <circle className="soy-drip" cx="80" cy="55" r="2.6" fill="#DB6A4C" />
    </svg>
  );
}
