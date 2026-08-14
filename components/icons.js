// Small hand-drawn-style line icons used in the recipe meta row (servings / time).

export function ForkKnifeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 2v8a2 2 0 0 0 4 0V2" />
      <path d="M8 2v20" />
      <path d="M8 10V2" />
      <path d="M17 2c-1.5 1.5-2 3.5-2 6s.5 4.5 2 6" />
      <path d="M17 2v20" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function DateIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v5" />
      <path d="M16 2v5" />
      <path d="M3 10h18" />
    </svg>
  );
}
