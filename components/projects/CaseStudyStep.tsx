import { useId, useState, type ReactNode } from 'react';
import styles from './Projects.module.css';

export function CaseStudyStep({ title, children }: { title: string; children: ReactNode }) {
  const id = useId();
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hovered || pinned;

  return (
    <div
      className={styles.caseStep}
      data-open={open}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <h3>
        <button
          type="button"
          className={styles.caseTrigger}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => {
            setPinned(!pinned);
            setHovered(false);
          }}
        >
          <span>{title}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </h3>
      <div className={styles.casePanel} id={id} aria-hidden={!open} inert={!open}>
        <div className={styles.caseClip}>{children}</div>
      </div>
    </div>
  );
}
