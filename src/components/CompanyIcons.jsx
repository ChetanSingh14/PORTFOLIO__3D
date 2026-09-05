import React from "react";

// Insanger Technologies Logo (Purple / Cyan Cyber Tech Shield)
export const InsangerLogo = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="url(#insanger_grad)" />
    <path d="M30 25H44V75H30V25Z" fill="white" />
    <path d="M44 25L70 60V25H82V75H68L44 40V75H44V25Z" fill="white" fillOpacity="0.9" />
    <circle cx="76" cy="30" r="6" fill="#00CEA8" />
    <defs>
      <linearGradient id="insanger_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1" />
        <stop offset="1" stopColor="#915EFF" />
      </linearGradient>
    </defs>
  </svg>
);

// Times Internet Logo (Red / White Media Tech Emblem)
export const TimesInternetLogo = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="url(#times_grad)" />
    <path d="M22 28H78V40H56V76H44V40H22V28Z" fill="white" />
    <path d="M72 70L78 76H66L72 70Z" fill="#F43F5E" />
    <defs>
      <linearGradient id="times_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E11D48" />
        <stop offset="1" stopColor="#BE123C" />
      </linearGradient>
    </defs>
  </svg>
);

// FnMafia Technologies Logo (Dark Neon Stealth Hacker/Dev Badge)
export const FnMafiaLogo = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="url(#fn_grad)" />
    <path d="M25 30H75V40H40V48H70V58H40V75H25V30Z" fill="#00CEA8" />
    <path d="M50 48L75 75H60L45 60V48H50Z" fill="white" />
    <defs>
      <linearGradient id="fn_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0F172A" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
    </defs>
  </svg>
);

// AY Tech Logo (Cyan & Blue Tech Triangle Emblem)
export const AYTechLogo = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="url(#ay_grad)" />
    <path d="M50 22L78 75H64L50 48L36 75H22L50 22Z" fill="white" />
    <path d="M50 56L62 75H38L50 56Z" fill="#38BDF8" />
    <defs>
      <linearGradient id="ay_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
  </svg>
);

// Summer of Bitcoin & Open Source Logo (Bitcoin Gold Badge)
export const OpenSourceLogo = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="url(#btc_grad)" />
    <path d="M57.5 45.83C59.98 44.53 61.27 42.48 60.55 39.46C59.66 35.73 55.43 34.69 49.61 35.53L47.78 28H42.75L44.47 35.16C43.25 35.34 42.02 35.54 40.81 35.76L39.09 28.6L34.06 28.6L35.78 35.76C34.52 35.97 33.27 36.19 32.05 36.42L25 36.42L26.33 41.77C27.56 41.77 28.52 41.83 29.07 42.12C29.77 42.5 30.01 43.19 29.81 44.02L25.99 59.34C25.68 60.1 25.13 60.59 24.36 60.75C23.77 60.87 22.84 60.87 21.6 60.87L20 67.28L26.71 67.28C28.02 67.28 29.35 67.09 30.68 66.86L32.44 74.24L37.47 74.24L35.72 66.95C36.96 66.71 38.22 66.46 39.46 66.21L41.21 73.55L46.24 73.55L48.01 66.16C56.63 65.41 62.43 63.38 63.66 56.45C64.67 50.78 61.41 47.38 57.5 45.83ZM42.86 42.51C46.36 41.98 52.42 41.98 52.92 45.83C53.37 49.33 47.96 50.64 44.51 51.15L42.86 42.51ZM41.01 59.98C44.89 59.39 52.28 58.74 52.83 62.91C53.33 66.75 46.96 68 43 68.58L41.01 59.98Z" fill="white" />
    <defs>
      <linearGradient id="btc_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);
