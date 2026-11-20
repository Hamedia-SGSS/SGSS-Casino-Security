import React from "react";

export type ShieldBadgeType =
  | "disputes"
  | "alcohol"
  | "restricted"
  | "parking"
  | "cash"
  | "escort"
  | "suspicious"
  | "theft"
  | "crowd"
  | "emergency"
  | "casino"
  | "cards"
  | "hotel"
  | "parking-lot"
  | "dining"
  | "venue"
  | "events";

/**
 * Reference Design 1: Gold outline shield with a crisp white checkmark inside.
 * Used on dark-background feature/benefit items.
 */
export function ShieldCheckIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2.5L4.5 5.8V11.4C4.5 16.35 7.7 20.85 12 22C16.3 20.85 19.5 16.35 19.5 11.4V5.8L12 2.5Z"
        stroke="#fecf31"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.2L11 14.2L15.2 10"
        stroke="#ffffff"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Reference Design 2: Solid dark-navy shield with a gold border and a white
 * topic icon centered inside.
 */
export function ShieldBadgeIcon({
  type,
  size = 44,
}: {
  type: ShieldBadgeType;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Navy Shield with Gold Border */}
      <path
        d="M20 3.5L7.5 8.8V18.4C7.5 26.8 12.8 34.4 20 36.5C27.2 34.4 32.5 26.8 32.5 18.4V8.8L20 3.5Z"
        fill="#1d2c48"
        stroke="#fecf31"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />

      {/* Crisp White Inner Icon */}
      <g
        stroke="#ffffff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {renderInnerIcon(type)}
      </g>
    </svg>
  );
}

function renderInnerIcon(type: ShieldBadgeType) {
  switch (type) {
    case "disputes":
      // Two speech/dialogue figures representing conflict de-escalation
      return (
        <>
          <circle cx="16" cy="15.5" r="2.2" fill="#ffffff" stroke="none" />
          <path d="M12.5 22.5C12.5 20.4 14 19 16 19C18 19 19.5 20.4 19.5 22.5" />
          <circle cx="24" cy="15.5" r="2.2" fill="#ffffff" stroke="none" />
          <path d="M20.5 22.5C20.5 20.4 22 19 24 19C26 19 27.5 20.4 27.5 22.5" />
        </>
      );

    case "alcohol":
      // Cocktail / beverage glass with alert indicator
      return (
        <>
          <path d="M14.5 13.5H25.5L20 20V25.5" />
          <path d="M17 25.5H23" />
          <path d="M16.5 15.8H23.5" strokeWidth="1.3" />
        </>
      );

    case "restricted":
      // Padlock for restricted access control
      return (
        <>
          <rect x="14.5" y="18" width="11" height="8" rx="1.8" fill="#ffffff" stroke="none" />
          <path d="M16.8 18V15.5C16.8 13.7 18.2 12.3 20 12.3C21.8 12.3 23.2 13.7 23.2 15.5V18" />
          <circle cx="20" cy="22" r="1.2" fill="#1d2c48" stroke="none" />
        </>
      );

    case "parking":
      // Vehicle / patrol car front silhouette
      return (
        <>
          <path d="M14.2 18.2L15.6 14.3C15.9 13.6 16.5 13.2 17.2 13.2H22.8C23.5 13.2 24.1 13.6 24.4 14.3L25.8 18.2" />
          <rect x="13" y="18.2" width="14" height="5.2" rx="1.4" fill="#ffffff" stroke="none" />
          <circle cx="15.7" cy="20.8" r="1.1" fill="#1d2c48" stroke="none" />
          <circle cx="24.3" cy="20.8" r="1.1" fill="#1d2c48" stroke="none" />
          <path d="M14.5 23.5V25.2M25.5 23.5V25.2" />
        </>
      );

    case "cash":
      // Dollar / currency badge
      return (
        <>
          <circle cx="20" cy="19.5" r="6.2" />
          <path d="M20 15.5V23.5" />
          <path d="M22 17.1C21.6 16.5 20.8 16.2 20 16.2C18.8 16.2 18 16.8 18 17.7C18 18.7 18.9 19.1 20 19.4C21.1 19.7 22 20.1 22 21.2C22 22.1 21.1 22.7 20 22.7C19 22.7 18.2 22.3 17.8 21.7" />
        </>
      );

    case "escort":
      // ID badge / personnel escort (matches Reference 2 first icon)
      return (
        <>
          <rect x="13" y="14.5" width="14" height="10" rx="1.6" />
          <circle cx="17" cy="18.6" r="1.5" fill="#ffffff" stroke="none" />
          <path d="M14.8 22.3C15 21.1 15.9 20.5 17 20.5C18.1 20.5 19 21.1 19.2 22.3" />
          <path d="M21.2 17.8H24.6M21.2 20.8H24.6" />
        </>
      );

    case "suspicious":
      // Eye / observation & surveillance
      return (
        <>
          <path d="M12.5 19.5C14.3 16.3 17 14.8 20 14.8C23 14.8 25.7 16.3 27.5 19.5C25.7 22.7 23 24.2 20 24.2C17 24.2 14.3 22.7 12.5 19.5Z" />
          <circle cx="20" cy="19.5" r="2.2" fill="#ffffff" stroke="none" />
        </>
      );

    case "theft":
      // Alert triangle / deterrence warning
      return (
        <>
          <path d="M20 13.2L26.8 24.8H13.2L20 13.2Z" />
          <path d="M20 17.5V20.8" />
          <circle cx="20" cy="22.9" r="0.9" fill="#ffffff" stroke="none" />
        </>
      );

    case "crowd":
      // High-traffic crowd (matches Reference 2 second icon)
      return (
        <>
          <circle cx="17.8" cy="16.2" r="2.1" fill="#ffffff" stroke="none" />
          <path d="M13.8 24C13.8 21.5 15.5 19.8 17.8 19.8C20.1 19.8 21.8 21.5 21.8 24" fill="#ffffff" stroke="none" />
          <circle cx="23.5" cy="17.2" r="1.6" fill="#ffffff" stroke="none" />
          <path d="M21.5 24C21.6 22.1 22.6 20.6 24.2 20.6C25.6 20.6 26.6 21.9 26.6 24" fill="#ffffff" stroke="none" />
        </>
      );

    case "emergency":
      // Medical / emergency cross
      return (
        <>
          <path
            d="M18.2 13.5H21.8V17.7H26V21.3H21.8V25.5H18.2V21.3H14V17.7H18.2V13.5Z"
            fill="#ffffff"
            stroke="none"
          />
        </>
      );

    case "casino":
      // Diamond / gaming chip emblem
      return (
        <>
          <circle cx="20" cy="19.5" r="6.2" />
          <path d="M20 15.8L23.2 19.5L20 23.2L16.8 19.5L20 15.8Z" fill="#ffffff" stroke="none" />
        </>
      );

    case "cards":
      // Playing cards
      return (
        <>
          <rect x="14" y="14" width="8.5" height="11" rx="1.3" fill="#1d2c48" />
          <rect x="17.5" y="15.5" width="8.5" height="11" rx="1.3" fill="#ffffff" stroke="none" />
          <path d="M21.75 18.8L23.4 21L21.75 23.2L20.1 21L21.75 18.8Z" fill="#1d2c48" stroke="none" />
        </>
      );

    case "hotel":
      // Hotel / resort building
      return (
        <>
          <rect x="14.5" y="13.2" width="11" height="12.5" rx="1" />
          <path d="M17.5 16.2H18.5M21.5 16.2H22.5M17.5 19.2H18.5M21.5 19.2H22.5" />
          <path d="M18.5 25.7V22.5H21.5V25.7" />
        </>
      );

    case "parking-lot":
      // Parking 'P' sign
      return (
        <>
          <rect x="14" y="13.5" width="12" height="12" rx="2" />
          <path d="M18.2 22.8V16.4H20.8C22 16.4 22.8 17.2 22.8 18.3C22.8 19.4 22 20.2 20.8 20.2H18.2" />
        </>
      );

    case "dining":
      // Fork & knife for restaurants & lounges
      return (
        <>
          <path d="M16.2 13.5V17.8C16.2 18.8 17 19.5 18 19.5M18 13.5V25.5" />
          <path d="M19.8 13.5V17.8C19.8 18.8 19 19.5 18 19.5" />
          <path d="M23.6 13.5V25.5" />
          <path d="M23.6 13.5C24.8 14.5 25.2 16.5 25.2 19.5H23.6" />
        </>
      );

    case "venue":
      // Entertainment ticket
      return (
        <>
          <path d="M13.5 16.2H26.5V18.5C25.5 18.5 24.8 19.2 24.8 20C24.8 20.8 25.5 21.5 26.5 21.5V23.8H13.5V21.5C14.5 21.5 15.2 20.8 15.2 20C15.2 19.2 14.5 18.5 13.5 18.5V16.2Z" />
          <path d="M18.5 16.5V23.5" strokeDasharray="1.8 1.8" />
        </>
      );

    case "events":
      // Star / connected event areas
      return (
        <>
          <path
            d="M20 13.2L21.9 17.2L26.3 17.8L23.1 20.9L23.9 25.3L20 23.2L16.1 25.3L16.9 20.9L13.7 17.8L18.1 17.2L20 13.2Z"
            fill="#ffffff"
            stroke="none"
          />
        </>
      );
  }
}
