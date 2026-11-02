'use client';

import { useState } from 'react';
import { identity } from '@/data/portfolio';
import { Arrow } from '@/components/shared/Arrow';
import styles from './Contact.module.css';
import { useReducedMotion, toggleReducedMotion } from '@/components/shared/motion-preference';
import { RevealHeading } from '@/components/shared/RevealHeading';

export function Contact({ year }: { year: number }) {
  const [status, setStatus] = useState('');
  const reducedMotion = useReducedMotion();
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(identity.email);
      setStatus('Email copied. Let’s start a conversation.');
    } catch {
      setStatus('Copy isn’t available here. You can select the email or use the email link.');
    }
  }
  return (
    <section id="contact" className={styles.contact} tabIndex={-1} aria-labelledby="contact-title">
      <div className="section-label">
        <span>THE NEXT CONVERSATION</span>
        <span>THERE’S ROOM FOR A CONVERSATION.</span>
      </div>
      <div className={styles.heading}>
        <RevealHeading
          id="contact-title"
          lines={[
            <span key="things" data-hover-word>
              What’s on
            </span>,
            <>
              your <em data-accent>mind?</em>
            </>,
          ]}
        />
        <a
          href={`mailto:${identity.email}`}
          className={styles.bigArrow}
          aria-label="Email Santiago"
          data-magnet-zone
        >
          <span data-magnetic>
            <Arrow />
          </span>
        </a>
      </div>
      <div className={styles.details} data-reveal>
        <p>
          A shared challenge, a new possibility,
          <br />
          or just a conversation. I’m all ears.
        </p>
        <div className={styles.emailGroup}>
          <a className={styles.email} href={`mailto:${identity.email}`}>
            {identity.email}
            <Arrow />
          </a>
          <button onClick={copyEmail}>
            COPY EMAIL <span aria-hidden="true">⧉</span>
          </button>
          <span className={styles.status} role="status" aria-live="polite">
            {status}
          </span>
        </div>
      </div>
      <footer className={styles.footer}>
        <span>SANTIAGO VÉLEZ © {year}</span>
        <span>MADE WITH INTENTION. FROM MEDELLÍN, CO.</span>
        <button
          className={styles.motionButton}
          aria-pressed={reducedMotion}
          onClick={toggleReducedMotion}
        >
          MOTION: {reducedMotion ? 'REDUCED' : 'FULL'}
        </button>
        <a href="#home">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </section>
  );
}
