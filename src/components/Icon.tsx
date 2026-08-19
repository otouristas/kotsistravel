type Props = { name: IconName; className?: string };

export type IconName =
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "chevron"
  | "arrow"
  | "menu"
  | "close"
  | "ferry"
  | "plane"
  | "bed"
  | "ship"
  | "route"
  | "bus"
  | "rings"
  | "compass"
  | "briefcase"
  | "check"
  | "star"
  | "shield"
  | "fax"
  | "facebook"
  | "twitter"
  | "external";

/**
 * Single-path-family icon set drawn on a 24-grid at 1.6 stroke so the
 * weight matches Manrope's semibold at UI sizes.
 */
const paths: Record<IconName, JSX.Element> = {
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  mail: (
    <>
      <rect x="2.75" y="5" width="18.5" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  chevron: <path d="m6 9.5 6 6 6-6" />,
  arrow: <path d="M4.5 12h15m-6-6.5 6.5 6.5-6.5 6.5" />,
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  ferry: (
    <>
      <path d="M3 19c1.7 0 1.7 1.4 3.4 1.4S8.1 19 9.8 19s1.7 1.4 3.4 1.4S14.9 19 16.6 19s1.7 1.4 3.4 1.4" />
      <path d="M4.6 15.4 6 10.2h12l1.4 5.2" />
      <path d="M8.5 10.2V6.6h7v3.6M12 3.2v3.4" />
    </>
  ),
  plane: <path d="M10.5 20.5 12 15l7.4-2.2a2 2 0 0 0 .6-3.6l-2-1.3-4.6 1.7-4.2-4.4-2.1.6 2.4 5.1-3.6 1.3-2-1.4-1.4.5 2.1 3.3-.5 2.3 2-.9 3.9 4.9Z" />,
  bed: (
    <>
      <path d="M3 18V7m0 6h18v5" />
      <path d="M6.5 10.5h4a2 2 0 0 1 2 2V13h-8v-.5a2 2 0 0 1 2-2ZM21 13v-2.2a2.8 2.8 0 0 0-2.8-2.8H14" />
    </>
  ),
  ship: (
    <>
      <path d="M3.5 13.5 12 10l8.5 3.5-1.6 5.2a2 2 0 0 1-1.9 1.4H7a2 2 0 0 1-1.9-1.4Z" />
      <path d="M6.5 12.4V7.4h11v5M12 7.4V3.6" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <path d="M6 8.6v4a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v-.2" />
    </>
  ),
  bus: (
    <>
      <rect x="3.5" y="4" width="17" height="13" rx="2.5" />
      <path d="M3.5 11.5h17M8 4v7.5M16 4v7.5" />
      <path d="M7 17v2.2M17 17v2.2" />
    </>
  ),
  rings: (
    <>
      <circle cx="9" cy="14.5" r="5.2" />
      <circle cx="15" cy="14.5" r="5.2" />
      <path d="m12 3.4 2.2 2.6h-4.4L12 3.4Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2.4" />
      <path d="M8.6 7.5V6a2 2 0 0 1 2-2h2.8a2 2 0 0 1 2 2v1.5M3 12.6h18" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  star: <path d="m12 3.6 2.6 5.5 6 .8-4.4 4.2 1.1 6L12 17.2 6.7 20.1l1.1-6L3.4 9.9l6-.8L12 3.6Z" />,
  shield: (
    <>
      <path d="M12 3.2 5 6v5.4c0 4.3 2.9 7.9 7 9.4 4.1-1.5 7-5.1 7-9.4V6l-7-2.8Z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </>
  ),
  fax: (
    <>
      <rect x="3" y="9.5" width="18" height="8.5" rx="2" />
      <path d="M6.8 9.5V4.4h10.4v5.1M7.5 18v2.1h9V18" />
    </>
  ),
  facebook: (
    <path
      d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.13-2.45-.13-2.42 0-4.08 1.48-4.08 4.2V9.9H7.45V13h2.72v8h3.33Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  twitter: (
    <path
      d="M3 3h4.9l4.4 6 5-6H21l-6.9 8.2L21.4 21h-4.9l-4.7-6.4L6.3 21H3.6l7.3-8.7L3 3Zm3 1.6 11.1 14.8h1.8L7.8 4.6H6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  external: <path d="M14 4.5h5.5V10M19.5 4.5 11 13M17 14.5v3.8a1.7 1.7 0 0 1-1.7 1.7H5.7A1.7 1.7 0 0 1 4 18.3V8.7A1.7 1.7 0 0 1 5.7 7h3.8" />,
};

export function Icon({ name, className = "h-5 w-5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
