import type { ReactNode } from 'react';

export function RevealHeading({ id, lines }: { id: string; lines: ReactNode[] }) {
  return (
    <h2 id={id} data-animated-heading>
      {lines.map((line, index) => (
        <span className="heading-mask" key={index}>
          <span data-heading-line>{line}</span>
        </span>
      ))}
    </h2>
  );
}
