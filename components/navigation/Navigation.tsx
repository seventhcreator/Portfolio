'use client';

import { useEffect, useRef, useState } from 'react';
import { Arrow } from '@/components/shared/Arrow';
import styles from './Navigation.module.css';

const links = [
  ['home', 'Home'],
  ['about', 'About me'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
] as const;

export function Navigation() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const sections = links
        .map(([id]) => document.getElementById(id))
        .filter((s): s is HTMLElement => !!s);
      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= window.innerHeight * 0.4)
        .at(-1);
      if (current) setActive(current.id);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    document.addEventListener('keydown', close);
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('keydown', close);
      window.removeEventListener('resize', resize);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <a className={styles.wordmark} href="#home" aria-label="Santiago Vélez, home">
        SV<span>.</span>
      </a>
      <nav className={styles.desktop} aria-label="Main navigation">
        {links.map(([id, name]) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>
            {name}
          </a>
        ))}
        <a href="https://soliloquium.bearblog.dev/" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </nav>
      <a className={styles.hello} href="mailto:santiagovl96@gmail.com">
        Let’s talk <Arrow />
      </a>
      <button
        className={styles.trigger}
        ref={trigger}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Menu'}
        <span>{open ? '−' : '+'}</span>
      </button>
      <div id="mobile-navigation" className={styles.mobile} ref={menu} hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([id, name]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setOpen(false);
                document.getElementById(id)?.focus({ preventScroll: true });
              }}
              aria-current={active === id ? 'location' : undefined}
            >
              {name}
              <Arrow />
            </a>
          ))}
          <a
            href="https://soliloquium.bearblog.dev/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Blog <Arrow />
          </a>
        </nav>
        <p>Medellín, Colombia · Connecting people & possibility.</p>
      </div>
    </header>
  );
}
