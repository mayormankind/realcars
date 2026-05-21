import React from "react";

interface TopDownCarProps {
  className?: string;
}

export default function TopDownCar({ className }: TopDownCarProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 50 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* Front road illumination (reflection on the immediate road surface) */}
      <ellipse cx="25" cy="-20" rx="45" ry="30" fill="url(#roadReflection)" opacity="0.7" />

      {/* Headlight beams (Ambient laser light glow - realistic left/right dual beams) */}
      <path
        d="M 12 11 L -80 -250 L 30 -250 Z"
        fill="url(#leftBeam)"
        className="animate-headlight"
        style={{ mixBlendMode: "screen" }}
      />
      <path
        d="M 38 11 L 20 -250 L 130 -250 Z"
        fill="url(#rightBeam)"
        className="animate-headlight"
        style={{ mixBlendMode: "screen" }}
      />

      <defs>
        {/* Linear Gradients for left and right headlights, fading to yellow/amber and then transparent */}
        <linearGradient id="leftBeam" x1="12" y1="11" x2="-34" y2="-250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="15%" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#eab308" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="rightBeam" x1="38" y1="11" x2="75" y2="-250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="15%" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#eab308" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
        </linearGradient>

        {/* Road surface reflection gradient */}
        <radialGradient id="roadReflection" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="25%" stopColor="#fef08a" stopOpacity="0.75" />
          <stop offset="60%" stopColor="#eab308" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
        </radialGradient>

        {/* Headlight bulb intense glare */}
        <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#fef08a" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#eab308" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Car Shadow */}
      <rect x="2" y="8" width="46" height="76" rx="14" fill="#000000" fillOpacity="0.65" filter="blur(4px)" />

      {/* Wheel Hubs (Stationary and clean for top-down luxury styling) */}
      {/* Front Left Wheel */}
      <g>
        <rect x="3" y="14" width="8" height="16" rx="3" fill="#18181b" stroke="#ef4444" strokeWidth="0.75" />
        <line x1="7" y1="14" x2="7" y2="30" stroke="#71717a" strokeWidth="1" />
        <line x1="3" y1="22" x2="11" y2="22" stroke="#71717a" strokeWidth="1" />
      </g>
      {/* Front Right Wheel */}
      <g>
        <rect x="39" y="14" width="8" height="16" rx="3" fill="#18181b" stroke="#ef4444" strokeWidth="0.75" />
        <line x1="43" y1="14" x2="43" y2="30" stroke="#71717a" strokeWidth="1" />
        <line x1="39" y1="22" x2="47" y2="22" stroke="#71717a" strokeWidth="1" />
      </g>
      {/* Rear Left Wheel */}
      <g>
        <rect x="3" y="60" width="8" height="16" rx="3" fill="#18181b" stroke="#ef4444" strokeWidth="0.75" />
        <line x1="7" y1="60" x2="7" y2="76" stroke="#71717a" strokeWidth="1" />
        <line x1="3" y1="68" x2="11" y2="68" stroke="#71717a" strokeWidth="1" />
      </g>
      {/* Rear Right Wheel */}
      <g>
        <rect x="39" y="60" width="8" height="16" rx="3" fill="#18181b" stroke="#ef4444" strokeWidth="0.75" />
        <line x1="43" y1="60" x2="43" y2="76" stroke="#71717a" strokeWidth="1" />
        <line x1="39" y1="68" x2="47" y2="68" stroke="#71717a" strokeWidth="1" />
      </g>

      {/* Luxury Metallic Car Chassis */}
      <rect x="6" y="10" width="38" height="70" rx="11" fill="#18181b" stroke="#dc2626" strokeWidth="2" />
      <path d="M12 10 C 12 14, 38 14, 38 10 Z" fill="#ef4444" />
      <rect x="10" y="24" width="30" height="42" rx="7" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />

      {/* Windscreens */}
      <path d="M12 36 L38 36 L34 26 L16 26 Z" fill="#1c1917" stroke="#ef4444" strokeWidth="0.5" />
      <path d="M12 56 L38 56 L35 65 L15 65 Z" fill="#1c1917" stroke="#ef4444" strokeWidth="0.5" />

      {/* Sunroof Grid */}
      <rect x="15" y="39" width="20" height="13" rx="2" fill="#27272a" stroke="#3f3f46" strokeWidth="0.5" />

      {/* LED Glowing Headlights (Brighter amber core) with intense bulb glare */}
      <circle cx="12" cy="11" r="5" fill="url(#bulbGlow)" />
      <circle cx="38" cy="11" r="5" fill="url(#bulbGlow)" />
      <ellipse cx="12" cy="11" rx="2.5" ry="1.5" fill="#ffffff" stroke="#facc15" strokeWidth="0.5" className="animate-pulse" />
      <ellipse cx="38" cy="11" rx="2.5" ry="1.5" fill="#ffffff" stroke="#facc15" strokeWidth="0.5" className="animate-pulse" />

      {/* Side Chrome Mirrors */}
      <path d="M6 21 L1 19 L1 15 L6 17 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.5" />
      <path d="M44 21 L49 19 L49 15 L44 17 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="0.5" />

      {/* Dual Rear Exhaust & Crimson Taillights */}
      <rect x="9" y="79" width="7" height="2" rx="0.5" fill="#dc2626" />
      <rect x="34" y="79" width="7" height="2" rx="0.5" fill="#dc2626" />
    </svg>
  );
}
