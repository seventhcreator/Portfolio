'use client';

import { useId, useState } from 'react';
import styles from './About.module.css';

export function ExperienceDisclosure({
  children,
  summary,
  className,
}: {
  children: React.ReactNode;
  summary: React.ReactNode;
  className: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={className} data-reveal data-expanded={open}>
      <button
        type="button"
        className={styles.roleSummary}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {summary}
      </button>
      <div
        className={styles.disclosure}
        data-open={open}
        id={id}
        aria-hidden={!open}
        inert={!open}
        onTransitionEnd={(event) => {
          if (event.target === event.currentTarget)
            event.currentTarget.dispatchEvent(
              new Event('portfolio-layout-change', { bubbles: true }),
            );
        }}
      >
        <div className={styles.disclosureClip}>{children}</div>
      </div>
    </div>
  );
}
