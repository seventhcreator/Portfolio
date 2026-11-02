'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useReducedMotion } from './motion-preference';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Motion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  useGSAP(
    () => {
      const counters = gsap.utils.toArray<HTMLElement>('[data-count-to]');
      const restoreCounts = () =>
        counters.forEach((element) => {
          element.textContent = element.dataset.countTo ?? '';
        });
      if (reducedMotion) {
        restoreCounts();
        return;
      }
      const media = gsap.matchMedia();
      media.add('(min-width: 0px)', () => {
        counters.forEach((element, index) => {
          const value = { count: 0 };
          element.textContent = '0';
          gsap.to(value, {
            count: Number(element.dataset.countTo),
            duration: 1.8,
            delay: index * 0.1,
            ease: 'power2.out',
            onUpdate: () => {
              element.textContent = String(Math.round(value.count));
            },
            scrollTrigger: {
              trigger: element.closest('[data-reveal]'),
              start: 'top 85%',
              once: true,
            },
          });
        });
        const opening = gsap.timeline({ defaults: { ease: 'power3.out' } });
        opening.from(
          '[data-hero-line]',
          {
            yPercent: 105,
            rotation: 3,
            opacity: 0,
            duration: 1.1,
            stagger: 0.14,
            transformOrigin: '0% 100%',
            clearProps: 'all',
          },
          0,
        );
        opening.from(
          '[data-hero-portrait]',
          {
            yPercent: -38,
            rotation: -4,
            scale: 1.08,
            opacity: 0,
            duration: 1.35,
            ease: 'expo.out',
            clearProps: 'all',
          },
          0.18,
        );
        opening.from(
          '[data-hero-reveal]',
          {
            y: 24,
            opacity: 0,
            duration: 0.65,
            stagger: 0.09,
            clearProps: 'all',
          },
          0.45,
        );

        gsap.utils.toArray<HTMLElement>('[data-animated-heading]').forEach((heading) => {
          gsap.from(heading.querySelectorAll('[data-heading-line]'), {
            yPercent: 112,
            rotation: 2,
            duration: 1.05,
            stagger: 0.13,
            ease: 'power4.out',
            transformOrigin: '0% 100%',
            scrollTrigger: {
              trigger: heading,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          });
        });

        gsap.utils.toArray<HTMLElement>('.section-label').forEach((label) => {
          gsap.from(label, {
            '--rule-scale': 0,
            opacity: 0.3,
            duration: 1.1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: label,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          });
        });

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            y: 48,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          });
        });

        gsap.fromTo(
          progress.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
          },
        );
      });
      media.add('(min-width: 761px) and (hover: hover)', () => {
        gsap.to('[data-portrait]', {
          yPercent: 7,
          ease: 'none',
          scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 1.2 },
        });

        gsap.to('[data-hero-portrait]', {
          '--portrait-drift': '-70px',
          ease: 'none',
          scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 1.2 },
        });

        gsap.utils.toArray<HTMLElement>('[data-parallax-art]').forEach((art) => {
          gsap.fromTo(
            art.querySelector('[data-art-depth]'),
            {
              yPercent: -12,
              rotation: -9,
              scale: 1.08,
            },
            {
              yPercent: 12,
              rotation: 9,
              scale: 1.08,
              ease: 'none',
              scrollTrigger: { trigger: art, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
            },
          );
        });
      });
      media.add('(min-width: 761px) and (hover: hover) and (pointer: fine)', () => {
        const el = cursor.current;
        if (!el) return;
        const x = gsap.quickTo(el, 'x', { duration: 0.25, ease: 'power3.out' });
        const y = gsap.quickTo(el, 'y', { duration: 0.25, ease: 'power3.out' });
        const move = (event: PointerEvent) => {
          const target =
            event.target instanceof Element ? event.target.closest('[data-cursor]') : null;
          x(event.clientX);
          y(event.clientY);
          el.dataset.visible = target && !document.querySelector('dialog[open]') ? 'true' : 'false';
        };
        const hide = () => {
          el.dataset.visible = 'false';
        };
        window.addEventListener('pointermove', move, { passive: true });
        document.documentElement.addEventListener('pointerleave', hide);
        window.addEventListener('blur', hide);

        const magnets = gsap.utils.toArray<HTMLElement>('[data-magnet-zone]').map((zone) => {
          const mover = zone.querySelector<HTMLElement>('[data-magnetic]');
          if (!mover) return () => {};
          const moveX = gsap.quickTo(mover, 'x', { duration: 0.45, ease: 'power3.out' });
          const moveY = gsap.quickTo(mover, 'y', { duration: 0.45, ease: 'power3.out' });
          const attract = (event: PointerEvent) => {
            if (event.pointerType === 'touch') return;
            const bounds = zone.getBoundingClientRect();
            moveX(
              gsap.utils.clamp(-16, 16, (event.clientX - bounds.left - bounds.width / 2) * 0.22),
            );
            moveY(
              gsap.utils.clamp(-16, 16, (event.clientY - bounds.top - bounds.height / 2) * 0.22),
            );
            zone.dataset.magnetActive = 'true';
          };
          const release = () => {
            moveX(0);
            moveY(0);
            delete zone.dataset.magnetActive;
          };
          zone.addEventListener('pointermove', attract, { passive: true });
          zone.addEventListener('pointerleave', release);
          zone.addEventListener('focusout', release);
          window.addEventListener('blur', release);
          return () => {
            zone.removeEventListener('pointermove', attract);
            zone.removeEventListener('pointerleave', release);
            zone.removeEventListener('focusout', release);
            window.removeEventListener('blur', release);
            delete zone.dataset.magnetActive;
          };
        });
        return () => {
          magnets.forEach((cleanup) => cleanup());
          window.removeEventListener('pointermove', move);
          document.documentElement.removeEventListener('pointerleave', hide);
          window.removeEventListener('blur', hide);
          el.dataset.visible = 'false';
        };
      });
      let disposed = false;
      const refresh = () => ScrollTrigger.refresh();
      const element = root.current;
      element?.addEventListener('toggle', refresh, true);
      element?.addEventListener('portfolio-layout-change', refresh);
      element?.addEventListener('load', refresh, true);
      document.fonts.ready.then(() => {
        if (!disposed) refresh();
      });
      return () => {
        disposed = true;
        element?.removeEventListener('toggle', refresh, true);
        element?.removeEventListener('portfolio-layout-change', refresh);
        element?.removeEventListener('load', refresh, true);
        media.revert();
        restoreCounts();
      };
    },
    { scope: root, dependencies: [reducedMotion], revertOnUpdate: true },
  );

  return (
    <div ref={root} data-reduced-motion={reducedMotion}>
      <div className="scroll-progress" ref={progress} aria-hidden="true" />
      {children}
      <div className="project-cursor" ref={cursor} aria-hidden="true">
        VIEW
        <br />↗︎
      </div>
    </div>
  );
}
