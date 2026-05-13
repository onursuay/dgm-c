// Shared SVG icon library — all icons are pure vector, no emojis

const base = "fill-none stroke-current stroke-[1.4] [stroke-linecap:round] [stroke-linejoin:round]";

export const IconForest = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L7 9H10L5 16H19L14 9H17L12 2Z" />
    <line x1="12" y1="16" x2="12" y2="22" />
    <line x1="9" y1="22" x2="15" y2="22" />
  </svg>
);

export const IconCity = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="10" width="6" height="12" />
    <rect x="7" y="6" width="10" height="16" />
    <rect x="17" y="12" width="6" height="10" />
    <line x1="0" y1="22" x2="24" y2="22" />
    <line x1="9" y1="10" x2="9" y2="10.5" strokeWidth="2" />
    <line x1="13" y1="10" x2="13" y2="10.5" strokeWidth="2" />
    <line x1="9" y1="14" x2="9" y2="14.5" strokeWidth="2" />
    <line x1="13" y1="14" x2="13" y2="14.5" strokeWidth="2" />
  </svg>
);

export const IconBuilding = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="22" x2="22" y2="22" />
    <line x1="5" y1="10" x2="5" y2="22" />
    <line x1="9" y1="10" x2="9" y2="22" />
    <line x1="15" y1="10" x2="15" y2="22" />
    <line x1="19" y1="10" x2="19" y2="22" />
    <polygon points="12 2 20 8 4 8" />
  </svg>
);

export const IconFireTruck = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 8H2v10h2m14 0h2V12l-3-4H14V8Z" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M2 12h12M14 10v4" />
    <line x1="8" y1="4" x2="8" y2="8" />
    <line x1="5" y1="4" x2="11" y2="4" />
  </svg>
);

export const IconAirplane = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z" />
  </svg>
);

export const IconHospital = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="12" y1="5" x2="12" y2="8" />
    <line x1="10.5" y1="6.5" x2="13.5" y2="6.5" />
    <rect x="9" y="14" width="6" height="8" />
  </svg>
);

export const IconSchool = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v12H2V10" />
    <path d="M12 2L2 7l10 5 10-5-10-5Z" />
    <path d="M22 7v5" />
    <rect x="9" y="14" width="6" height="8" />
  </svg>
);

export const IconFactory = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22V10l5-4v4l5-4v4l5-4V22H2Z" />
    <path d="M17 8V2h5v6" />
    <line x1="2" y1="16" x2="22" y2="16" />
    <line x1="6" y1="16" x2="6" y2="22" />
    <line x1="11" y1="16" x2="11" y2="22" />
    <line x1="16" y1="16" x2="16" y2="22" />
  </svg>
);

export const IconHeritage = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3-2 5-4 6-2-1-4-3-4-6Z" />
    <line x1="12" y1="16" x2="12" y2="22" />
    <line x1="8" y1="22" x2="16" y2="22" />
    <line x1="4" y1="8" x2="8" y2="10" />
    <line x1="20" y1="8" x2="16" y2="10" />
    <line x1="12" y1="2" x2="12" y2="6" />
  </svg>
);

export const IconWater = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C12 2 4 10 4 15a8 8 0 0016 0c0-5-8-13-8-13Z" />
  </svg>
);

export const IconPaw = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <ellipse cx="8.5" cy="5" rx="2" ry="2.5" />
    <ellipse cx="15.5" cy="5" rx="2" ry="2.5" />
    <ellipse cx="5" cy="9.5" rx="1.5" ry="2" />
    <ellipse cx="19" cy="9.5" rx="1.5" ry="2" />
    <path d="M12 9c-3.5 0-6.5 2.2-6.5 5.5 0 2 1.2 3.8 3 4.5.5.2 1 .5 1.8 1 .7.4 1.1.5 1.7.5s1-.1 1.7-.5c.8-.5 1.3-.8 1.8-1 1.8-.7 3-2.5 3-4.5C18.5 11.2 15.5 9 12 9Z" />
  </svg>
);

export const IconLeaf = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0118 9c-3 0-7-2-9-7-2 4-2 10 2 14" />
    <path d="M2 21c4-2 7-6 9-9" />
  </svg>
);

export const IconSeedling = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12M12 12C12 7 8 4 3 5c0 5 3 8 9 7ZM12 12c0-5 4-8 9-7 0 5-3 8-9 7Z" />
  </svg>
);

export const IconWind = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1010 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
  </svg>
);

export const IconGlobe = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10Z" />
  </svg>
);

export const IconEmail = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8l10 7 10-7" />
  </svg>
);

export const IconPin = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconHandshake = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    <path d="M8 10l2 2 4-4" />
  </svg>
);

export const IconFlame = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-4 5-4 9a4 4 0 008 0c0-2-1-4-1-4s-1 2-2 3c-1-1-2-3-1-8Z" />
    <path d="M8 14c0 2.2 1.8 4 4 4s4-1.8 4-4" />
  </svg>
);

export const IconClock = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const IconPeople = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

export const IconShield = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
);

export const IconMicroscope = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18H4a2 2 0 01-2-2v-1h20v1a2 2 0 01-2 2h-2" />
    <path d="M6 22h12" />
    <path d="M14 14l-2-3M10 3h4M10 3l-2 9 4 2 2-9" />
    <circle cx="12" cy="5" r="2" />
  </svg>
);

export const IconBarChart = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

export const IconGear = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1Z" />
  </svg>
);

export const IconOilDrum = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <line x1="5" y1="9" x2="19" y2="9" />
    <line x1="5" y1="15" x2="19" y2="15" />
    <line x1="12" y1="3" x2="12" y2="6" />
  </svg>
);

export const IconLightning = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const IconConstruction = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="14" width="20" height="8" />
    <path d="M6 14V8M12 14V6M18 14V10" />
    <path d="M2 8h4M10 6h4M16 10h4" />
    <path d="M4 6l2-4M14 4l2 2" />
  </svg>
);

export const IconBox = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

export const IconTrain = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="14" rx="2" />
    <line x1="4" y1="11" x2="20" y2="11" />
    <line x1="12" y1="3" x2="12" y2="11" />
    <circle cx="8" cy="19" r="2" />
    <circle cx="16" cy="19" r="2" />
    <line x1="6" y1="17" x2="4" y2="21" />
    <line x1="18" y1="17" x2="20" y2="21" />
  </svg>
);

export const IconStadium = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="10" ry="5" />
    <line x1="2" y1="12" x2="2" y2="17" />
    <line x1="22" y1="12" x2="22" y2="17" />
    <path d="M2 17c0 3 4.5 5 10 5s10-2 10-5" />
    <ellipse cx="12" cy="12" rx="4" ry="2" />
  </svg>
);

export const IconBadge = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const IconCheck = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconDoc = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

export const IconSpray = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h3M3 6h3M3 18h3" />
    <rect x="6" y="8" width="6" height="12" rx="1" />
    <path d="M12 10h4l2-3h-4l-2 3ZM16 7V4h2" />
    <line x1="18" y1="14" x2="20" y2="14" />
    <line x1="18" y1="17" x2="20" y2="17" />
  </svg>
);
