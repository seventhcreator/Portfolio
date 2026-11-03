'use client';

import { useState, type CSSProperties } from 'react';
import styles from './HeartText.module.css';

export function HeartText({ text }: { text: string }) {
  const [active, setActive] = useState(false);
  const letters = [...text].filter((letter) => letter !== ' ');
  const scale = letters.length > 8 ? 4 / 3 : 1;
  let letterIndex = 0;
  return (
    <button
      type="button"
      className={styles.heartText}
      style={
        {
          '--phrase-width': `${text.length * 0.65 + 0.6}em`,
          '--outline-width': `${5 * scale}em`,
          '--outline-height': `${4.75 * scale}em`,
        } as CSSProperties
      }
      aria-label={text}
      aria-pressed={active}
      data-active={active}
      onClick={() => setActive(!active)}
      onPointerLeave={() => setActive(false)}
      onBlur={() => setActive(false)}
    >
      <svg className={styles.outline} viewBox="-20 -18 40 38" fill="none" aria-hidden="true">
        <path d="M0-7C-12-24-29-4 0 17C29-4 12-24 0-7Z" stroke="currentColor" strokeWidth=".65" />
      </svg>
      {[...text].map((letter, index) => {
        if (letter === ' ') return null;
        const angle = (letterIndex++ / letters.length) * Math.PI * 2;
        const x = 16 * Math.sin(angle) ** 3;
        const y = -(
          13 * Math.cos(angle) -
          5 * Math.cos(2 * angle) -
          2 * Math.cos(3 * angle) -
          Math.cos(4 * angle)
        );
        return (
          <span
            key={index}
            aria-hidden="true"
            style={
              {
                '--rest-x': `${(index - (text.length - 1) / 2) * 0.65}em`,
                '--heart-x': `${((x / 8) * scale).toFixed(3)}em`,
                '--heart-y': `${((y / 8) * scale).toFixed(3)}em`,
                '--letter-delay': `${letterIndex * 12}ms`,
              } as CSSProperties
            }
          >
            {letter}
          </span>
        );
      })}
    </button>
  );
}
