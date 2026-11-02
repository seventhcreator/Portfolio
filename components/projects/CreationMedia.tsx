'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useReducedMotion } from '@/components/shared/motion-preference';
import { Arrow } from '@/components/shared/Arrow';
import type { Creation } from '@/data/portfolio';
import styles from './Projects.module.css';
import { CreationIcon } from './CreationIcon';

export function CreationMedia({ creation }: { creation: Creation }) {
  const root = useRef<HTMLDivElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reduced = useReducedMotion();
  useGSAP(
    () => {
      if (!playing) return;
      gsap.fromTo(
        '[data-demo-player]',
        { opacity: 0, y: reduced ? 0 : 24 },
        {
          opacity: 1,
          y: 0,
          duration: reduced ? 0 : 0.85,
          ease: 'power3.out',
        },
      );
      gsap.to('[data-demo-cover]', {
        opacity: 0,
        y: reduced ? 0 : -18,
        duration: reduced ? 0 : 0.55,
        ease: 'power2.inOut',
      });
      const dialog = root.current?.closest('dialog');
      if (dialog && root.current) {
        const barHeight =
          dialog.querySelector('[data-dialog-bar]')?.getBoundingClientRect().height ?? 68;
        const top =
          dialog.scrollTop +
          root.current.getBoundingClientRect().top -
          dialog.getBoundingClientRect().top -
          barHeight -
          16;
        gsap.to(dialog, {
          scrollTop: Math.max(0, top),
          duration: reduced ? 0 : 0.9,
          ease: 'power3.inOut',
        });
      }
      player.current?.focus({ preventScroll: true });
    },
    { scope: root, dependencies: [playing, reduced], revertOnUpdate: true },
  );
  if (!creation.image)
    return (
      <div className={styles.creationDetailMark} aria-hidden="true">
        <CreationIcon mark={creation.mark} />
      </div>
    );
  return (
    <div ref={root} className={styles.creationMedia}>
      <div
        className={styles.mediaStage}
        data-playing={playing}
        style={{ background: creation.image.background }}
      >
        <div className={styles.mediaCover} data-demo-cover aria-hidden={playing}>
          <Image
            src={creation.image.src}
            alt={creation.image.alt}
            fill
            sizes="(max-width: 760px) 90vw, 1000px"
            unoptimized
            className={styles.mediaImage}
            style={{
              objectFit: creation.image.fit ?? 'cover',
              objectPosition: creation.image.position ?? 'center',
            }}
          />
        </div>
        {playing && creation.video && (
          <div className={styles.demoPlayer} data-demo-player>
            <video
              ref={player}
              src={creation.video}
              poster={creation.image.src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              tabIndex={0}
              aria-label={`${creation.name} proof-of-concept demonstration`}
            />
          </div>
        )}
      </div>
      {creation.video && (
        <div className={styles.mediaActions}>
          <button
            type="button"
            className={styles.demoButton}
            aria-expanded={playing}
            onClick={() => {
              player.current?.pause();
              setPlaying(!playing);
            }}
          >
            {playing ? 'BACK TO PREVIEW' : 'SEE IN ACTION'} <Arrow diagonal={false} />
          </button>
          <span className="micro">
            {playing ? 'PROOF OF CONCEPT · ORIGINAL RECORDING' : 'A WORKING PROTOTYPE.'}
          </span>
        </div>
      )}
    </div>
  );
}
