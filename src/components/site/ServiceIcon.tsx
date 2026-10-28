import type { ReactNode } from "react";
import type { ServiceCategory } from "./services";

const paths: Record<ServiceCategory["icon"], ReactNode> = {
  eye: (
    <>
      <path d="M2 12s3.5-5.5 10-5.5S22 12 22 12s-3.5 5.5-10 5.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.4" />
    </>
  ),
  pen: (
    <>
      <path d="M3 21l1-4.5L16.2 4.3a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L7.5 20 3 21Z" />
      <path d="M14.5 6 18 9.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 15-13 15-1.1 0-2-.4-3-1Z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3c3.5 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2.5-6 6-10Z" />
      <path d="M9.5 14.5a2.6 2.6 0 0 0 2.5 2.5" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 4c2.2 2.2 3 4.4 3 6.6 0 2-1.2 4-3 5.4-1.8-1.4-3-3.4-3-5.4C9 8.4 9.8 6.2 12 4Z" />
      <path d="M12 16c-3 2.6-6.5 2.6-9 1 1-3 3.4-5 6-5.4M12 16c3 2.6 6.5 2.6 9 1-1-3-3.4-5-6-5.4" />
    </>
  ),
  laser: (
    <>
      <path d="M12 2v5M5 6l2.5 3M19 6l-2.5 3" />
      <path d="M8 11h8l-1.5 9h-5L8 11Z" />
    </>
  ),
  hair: (
    <>
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </>
  ),
  hand: (
    <>
      <path d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11m0-1V4.5a1.5 1.5 0 0 1 3 0V11m0-.5V6.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7 6 6 0 0 1-6-6v-3.2a1.6 1.6 0 0 1 3.2 0" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: ServiceCategory["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
