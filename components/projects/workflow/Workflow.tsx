'use client';

import { useLanguage } from '@/components/shared/Language';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/components/shared/motion-preference';
import { WorkflowSignal } from './WorkflowSignal';
import { sampleFlow } from './flow-engine';
import styles from './Workflow.module.css';

const routes = [
  {
    client: 'Acme Corp.',
    request: 'Feature request',
    team: 'Product & backlog',
    action: 'Brief, brainstorm & prioritize',
  },
  {
    client: 'Dunder Mifflin',
    request: 'Onboarding support',
    team: 'Client support',
    action: 'Align, allocate & guide',
  },
  {
    client: 'Monsters, Inc.',
    request: 'Bug escalation',
    team: 'Development',
    action: 'Investigate, test & deploy',
  },
  {
    client: 'Pizza Planet',
    request: 'Growth strategies',
    team: 'Commercial',
    action: 'Explore, measure & strategize',
  },
];
const phases = {
  inbound: 'Listening to the request',
  ripple: 'Aligning people & priorities',
  outbound: 'Connecting the right team',
  pause: 'A shared direction',
};

export function Workflow() {
  const { localize, locale } = useLanguage();
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [state, setState] = useState(sampleFlow(0));
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const root = stage.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(root);
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  return localize(
    <figure className={styles.workflow} aria-labelledby="workflow-title" data-reveal>
      <div className={styles.heading}>
        <div>
          <span className="micro">HOW I CONNECT THE DOTS</span>
          <h3 id="workflow-title">
            {locale === 'en' ? (
              <>
                Every conversation has an intent,
                <br />
                one I like to listen.
              </>
            ) : (
              <>
                Cada conversación tiene una intención,
                <br />y yo la sé escuchar
              </>
            )}
          </h3>
        </div>
        {locale === 'en' && (
          <p>Listen, translate the need, and bring the right people together to move it forward.</p>
        )}
      </div>
      <div className={styles.stage} ref={stage} data-phase={reduced ? 'static' : state.phase}>
        <WorkflowSignal
          stage={stage}
          running={visible && pageVisible && !paused}
          reduced={reduced}
          onPhase={setState}
        />
        <div className={styles.clients}>
          <span className={styles.columnLabel}>FROM CLIENTS</span>
          {routes.map((route, index) => (
            <div
              key={route.client}
              className={styles.client}
              data-workflow-node
              data-workflow-client={index}
              data-active={!reduced && state.route === index && state.phase === 'inbound'}
            >
              <strong>{route.client}</strong>
              <span>{route.request}</span>
            </div>
          ))}
        </div>
        <div
          className={styles.profile}
          data-workflow-node
          data-workflow-profile
          data-active={!reduced && state.phase === 'ripple'}
        >
          <span className={styles.profileKicker}>THE CONNECTING POINT</span>
          <div className={styles.portrait}>
            <Image
              src="/images/santiago-portrait.jpg"
              alt="Santiago Vélez"
              fill
              sizes="100px"
              unoptimized
            />
          </div>
          <strong>Santiago Vélez</strong>
          <span className={styles.role}>Relationship Manager</span>
          <div className={styles.phase} aria-hidden="true">
            <span className={styles.statusDot} />
            {reduced ? 'Listen. Align. Connect.' : phases[state.phase]}
          </div>
        </div>
        <div className={styles.teams}>
          <span className={styles.columnLabel}>TO THE RIGHT TEAM</span>
          {routes.map((route, index) => (
            <div
              key={route.team}
              className={styles.team}
              data-workflow-node
              data-workflow-team={index}
              data-active={
                !reduced &&
                state.route === index &&
                (state.phase === 'outbound' || state.phase === 'pause')
              }
            >
              <strong>{route.team}</strong>
              <span>{route.action}</span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className={styles.caption}>
        <span>Illustrative requests and fictional clients — a glimpse of how I work.</span>
        {!reduced && (
          <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>
            {paused ? 'PLAY ANIMATION' : 'PAUSE ANIMATION'}
            <span aria-hidden="true">{paused ? '↗︎' : 'Ⅱ'}</span>
          </button>
        )}
      </figcaption>
    </figure>,
  );
}
