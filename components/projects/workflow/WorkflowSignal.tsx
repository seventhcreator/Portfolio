'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import {
  connect,
  curvePath,
  pointOn,
  sampleFlow,
  sampleRipple,
  type FlowState,
  type Route,
} from './flow-engine';
import styles from './Workflow.module.css';

type Geometry = {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  radius: number;
  routes: Route[];
};

export function WorkflowSignal({
  stage,
  running,
  reduced,
  onPhase,
}: {
  stage: RefObject<HTMLDivElement | null>;
  running: boolean;
  reduced: boolean;
  onPhase: (state: FlowState) => void;
}) {
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const clock = useRef(0);
  useEffect(() => {
    const root = stage.current;
    if (!root) return;
    const measure = () => {
      const box = root.getBoundingClientRect();
      const card = root.querySelector('[data-workflow-profile]')?.getBoundingClientRect();
      if (!card || !box.width) return;
      const vertical = window.matchMedia('(max-width: 700px)').matches;
      const routes = Array.from(root.querySelectorAll('[data-workflow-client]')).map(
        (source, index) => {
          const from = source.getBoundingClientRect();
          const to = root.querySelector(`[data-workflow-team="${index}"]`)!.getBoundingClientRect();
          return {
            inbound: connect(
              vertical
                ? { x: (from.left + from.right) / 2 - box.left, y: from.bottom - box.top }
                : { x: from.right - box.left, y: (from.top + from.bottom) / 2 - box.top },
              vertical
                ? { x: (card.left + card.right) / 2 - box.left, y: card.top - box.top }
                : { x: card.left - box.left, y: (card.top + card.bottom) / 2 - box.top },
              vertical,
            ),
            outbound: connect(
              vertical
                ? { x: (card.left + card.right) / 2 - box.left, y: card.bottom - box.top }
                : { x: card.right - box.left, y: (card.top + card.bottom) / 2 - box.top },
              vertical
                ? { x: (to.left + to.right) / 2 - box.left, y: to.top - box.top }
                : { x: to.left - box.left, y: (to.top + to.bottom) / 2 - box.top },
              vertical,
            ),
          };
        },
      );
      setGeometry({
        width: box.width,
        height: box.height,
        centerX: (card.left + card.right) / 2 - box.left,
        centerY: (card.top + card.bottom) / 2 - box.top,
        radius: Math.min(card.width, card.height) * 0.52,
        routes,
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    root.querySelectorAll('[data-workflow-node]').forEach((node) => observer.observe(node));
    let disposed = false;
    document.fonts.ready.then(() => {
      if (!disposed) measure();
    });
    measure();
    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, [stage]);

  useEffect(() => {
    if (!running || reduced) return;
    let frame = 0;
    const start = performance.now() - clock.current;
    const tick = (now: number) => {
      clock.current = now - start;
      setElapsed(clock.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, reduced]);
  const state = sampleFlow(elapsed);
  const { route, phase } = state;
  useEffect(() => {
    onPhase({ route, phase, progress: 0 });
  }, [onPhase, route, phase]);
  if (!geometry) return null;
  const active = geometry.routes[route];
  const moving = phase === 'inbound' || phase === 'outbound';
  return (
    <svg
      className={styles.signal}
      viewBox={`0 0 ${geometry.width} ${geometry.height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      data-workflow-signal
      data-route={route}
      data-phase={reduced ? 'static' : phase}
    >
      {geometry.routes.map((path, index) => (
        <g key={index}>
          <path d={curvePath(path.inbound)} className={styles.connection} />
          <path d={curvePath(path.outbound)} className={styles.connection} />
        </g>
      ))}
      {!reduced &&
        phase === 'ripple' &&
        sampleRipple(state.progress).map((ring, index) => (
          <circle
            key={index}
            cx={geometry.centerX}
            cy={geometry.centerY}
            r={(ring.radius / 205) * geometry.radius}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={index === 0 ? 1.5 : 1}
            opacity={ring.opacity}
          />
        ))}
      {!reduced && moving && active && (
        <g>
          {[0.12, 0.08, 0.04, 0].map((delay, index) => {
            const point = pointOn(
              phase === 'inbound' ? active.inbound : active.outbound,
              state.progress - delay,
            );
            return (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r={index === 3 ? 4 : 5 + (3 - index)}
                fill="var(--accent)"
                opacity={index === 3 ? 1 : 0.07 + index * 0.045}
              />
            );
          })}
        </g>
      )}
    </svg>
  );
}
