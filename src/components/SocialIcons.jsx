import React from 'react';

export function GithubIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function CodeChefIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm3-2h-2v-4h2v4zm3-3h-2v-2h2v2z" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .271 3.529 5.385 5.385 0 0 0 1.258 1.838l4.478 4.295c.579.555 1.343.864 2.146.864.802 0 1.567-.309 2.146-.864l5.352-5.137a1.382 1.382 0 0 0 0-1.956 1.382 1.382 0 0 0-1.955 0l-5.353 5.138a.297.297 0 0 1-.418 0l-4.478-4.296a2.627 2.627 0 0 1-.614-.897 2.76 2.76 0 0 1-.136-1.722 2.632 2.632 0 0 1 .59-1.028l3.853-4.126 5.406-5.787a1.382 1.382 0 0 0-.97-2.361z" fill="#FFA116" />
      <path d="M9.833 13.916a1.382 1.382 0 0 0 1.955 0l5.808-5.576a1.382 1.382 0 0 0 0-1.956 1.382 1.382 0 0 0-1.956 0l-5.807 5.576a1.382 1.382 0 0 0 0 1.956z" fill="#000000" />
      <path d="M8.5 12h8a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2z" fill="#B3B1B0" />
    </svg>
  );
}
