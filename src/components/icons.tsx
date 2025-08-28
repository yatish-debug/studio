import type { SVGProps } from 'react';

export function EcoChampionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L9 4.91V9.22c0 3.32 2.37 6.27 5.5 7.18.5-.09 1-.22 1.5-.42" />
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 2L15 4.91V9.22c0 3.32-2.37 6.27-5.5 7.18-.5-.09-1-.22-1.5-.42" />
      <path d="M15 15.28c.83-.53 1.5-1.25 2-2.1" />
      <path d="M7 13.18c.5.85 1.17 1.57 2 2.1" />
    </svg>
  );
}
