'use client';

import { useId, useState } from 'react';
import styles from './About.module.css';

export function SkillDisclosure({ title, children }: { title: string; children: React.ReactNode }) {
  const id = useId();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hovered || focused || pinned;
  return (
    <div
      className={styles.skillDisclosure}
      data-open={open}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setPinned(false);
          setHovered(false);
          setFocused(false);
        }
      }}
    >
      <h4>
        <button
          type="button"
          className={styles.skillTrigger}
          aria-expanded={open}
          aria-controls={id}
          onFocus={(event) => {
            if (event.currentTarget.matches(':focus-visible')) setFocused(true);
          }}
          onClick={() => {
            setPinned(!pinned);
            setHovered(false);
            setFocused(false);
          }}
        >
          <span>{title}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 9h12M9 3v12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </h4>
      <div
        className={styles.skillPanel}
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
        <div className={styles.skillPanelClip}>
          <ul className={styles.skillChips} aria-label={title}>
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}
