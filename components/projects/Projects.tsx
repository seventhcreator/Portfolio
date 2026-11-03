'use client';

import { useLanguage } from '@/components/shared/Language';

import { useRef, useState, useEffect } from 'react';
import { projects, creations, workTotals, type Project, type Creation } from '@/data/portfolio';
import { Arrow } from '@/components/shared/Arrow';
import { CaseStudyStep } from './CaseStudyStep';
import { ProjectArt } from './ProjectArt';
import styles from './Projects.module.css';
import { RevealHeading } from '@/components/shared/RevealHeading';
import { HighlightedText } from '@/components/shared/HighlightedText';
import { CreationMedia } from './CreationMedia';
import { Workflow } from './workflow/Workflow';
import { CreationIcon } from './CreationIcon';
import { bbqLaunch, bbqOutcomes, elDoradoSteps } from '@/data/en';
import { HeartText } from '@/components/shared/HeartText';

type Detail = { type: 'project'; value: Project } | { type: 'creation'; value: Creation };

export function Projects() {
  const { localize, locale, t } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);
  const isEnglishDorado =
    locale === 'en' && detail?.type === 'project' && detail.value.id === 'el-dorado';
  const isBbq = detail?.type === 'project' && detail.value.id === 'bbq-colombia';

  useEffect(() => {
    const el = dialog.current;
    if (!detail || !el) return;
    el.showModal();
    el.scrollTop = 0;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      if (el.open) el.close();
    };
  }, [detail]);

  function open(value: Detail, target: HTMLElement) {
    opener.current = target;
    setDetail(value);
  }
  function close() {
    dialog.current?.close();
    setDetail(null);
    opener.current?.focus({ preventScroll: true });
  }

  return localize(
    <section
      id="projects"
      className={styles.projects}
      tabIndex={-1}
      aria-labelledby="projects-title"
    >
      <div className="section-label">
        {locale === 'es' ? (
          <a
            href="/images/medellin-night.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-image-link"
          >
            MEDELLIN, COL
          </a>
        ) : (
          <span>SELECTED WORK</span>
        )}
        {locale === 'en' ? (
          <a
            href="/images/sharp-eye.webp"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-image-link"
          >
            KEEP A SHARP EYE.
          </a>
        ) : (
          <a
            href="/images/sharp-eye.webp"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-image-link"
          >
            CURADURÍA VISUAL
          </a>
        )}
      </div>
      <div className={styles.heading}>
        <RevealHeading
          id="projects-title"
          lines={[
            <span key="connections" data-hover-word>
              Connections.
            </span>,
            <span key="tangible" data-muted data-hover-word>
              Made tangible.
            </span>,
          ]}
        />
      </div>
      <Workflow />
      <div
        className={styles.workTotals}
        data-reveal
        aria-label="Work in numbers, across my experience"
      >
        {workTotals.map((total) => (
          <div key={total.label}>
            <strong aria-label={total.value}>
              <span data-count-to={parseInt(total.value, 10)} aria-hidden="true">
                {parseInt(total.value, 10)}
              </span>
              <span className={styles.metricPlus} aria-hidden="true">
                +
              </span>
            </strong>
            <span>{total.label}</span>
          </div>
        ))}
      </div>
      <div
        id="case-studies"
        className={styles.projectList}
        tabIndex={-1}
        role="region"
        aria-label="Selected case studies"
      >
        {projects.map((project) => (
          <article className={styles.project} key={project.id} data-reveal>
            <button
              className={styles.artButton}
              data-cursor
              aria-label={`Read ${project.title} case study`}
              onClick={(event) => open({ type: 'project', value: project }, event.currentTarget)}
            >
              <ProjectArt kind={project.art} />
              <span className={styles.artAction}>
                EXPLORE CASE STUDY <Arrow />
              </span>
            </button>
            <div className={styles.projectInfo}>
              <span className={styles.number}>({project.number})</span>
              <div>
                <span className="micro">{project.client}</span>
                <h3>
                  <button
                    onClick={(event) =>
                      open({ type: 'project', value: project }, event.currentTarget)
                    }
                  >
                    {project.title}
                    <Arrow />
                  </button>
                </h3>
                <p>
                  {project.id === 'bbq-colombia'
                    ? 'Building the local supply chain for bb.q Chicken’s South American debut.'
                    : project.summary}
                </p>
                <dl className={styles.cardResults} aria-label="Project outcomes">
                  {(project.id === 'bbq-colombia'
                    ? [
                        { value: '70+', label: 'Key supplies sourced and integrated into the SC' },
                        { value: '15+', label: 'Local collaborators streamlined efficiently' },
                        { value: 'GTM', label: 'Initial market research developed' },
                      ]
                    : project.outcomes
                  ).map((outcome) => (
                    <div className={styles.cardResult} key={outcome.label}>
                      <dt>{outcome.label}</dt>
                      <dd>{outcome.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <span className={styles.category}>{project.category}</span>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.creationsHeading} data-reveal>
        <div>
          <span className="micro">PERSONAL CREATIONS.</span>
          <h3>Built on the side.</h3>
        </div>
        <p>
          <HeartText text={locale === 'en' ? 'BE KIND' : 'SE AMABLE'} />
        </p>
      </div>
      <div className={styles.creations}>
        {creations.map((creation) => (
          <button
            key={creation.name}
            className={styles.creation}
            aria-label={`Read about ${creation.name}`}
            onClick={(event) => open({ type: 'creation', value: creation }, event.currentTarget)}
            data-reveal
          >
            <span className={styles.creationIndex}>{creation.category}</span>
            <span className={styles.creationMark} data-mark={creation.name} aria-hidden="true">
              <CreationIcon mark={creation.mark} />
            </span>
            <span className={styles.creationBottom}>
              <span>
                <strong>{creation.name}</strong>
                <small>{creation.description}</small>
              </span>
              <Arrow />
            </span>
          </button>
        ))}
      </div>
      <dialog
        className={styles.dialog}
        ref={dialog}
        aria-labelledby="project-detail-title"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {detail && (
          <div className={styles.dialogContent}>
            <div className={styles.dialogBar} data-dialog-bar>
              <span className="micro">
                {detail.type === 'project'
                  ? 'A CLOSER LOOK / SELECTED WORK'
                  : 'A PERSONAL CREATION'}
              </span>
              <button
                onClick={close}
                className={styles.close}
                autoFocus
                aria-label="Close project details"
              >
                CLOSE{' '}
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            <span className={styles.dialogCategory}>
              {detail.type === 'project' ? detail.value.client : detail.value.category}
            </span>
            <h2 id="project-detail-title">
              {detail.type === 'project' ? detail.value.title : detail.value.name}
            </h2>
            {detail.type === 'project' ? (
              <>
                <p className={styles.dialogIntro}>
                  {isBbq ? (
                    <HighlightedText
                      text={t(detail.value.summary)}
                      phrases={[
                        'South American debut',
                        'build the local supply chain, shape the go-to-market strategy',
                      ].map(t)}
                    />
                  ) : (
                    detail.value.summary
                  )}
                </p>
                <div className={styles.dialogArt}>
                  <ProjectArt kind={detail.value.art} />
                </div>
                <div className={styles.story}>
                  <CaseStudyStep title={isBbq ? 'The opportunity' : 'The challenge'}>
                    <p>
                      <HighlightedText
                        text={
                          isBbq || isEnglishDorado
                            ? t(detail.value.challenge)
                            : detail.value.challenge
                        }
                        phrases={
                          isBbq
                            ? [
                                'signature flavors',
                                'supply chain that could operate locally',
                                'meet the Korean franchise’s standards',
                              ].map(t)
                            : isEnglishDorado
                              ? [
                                  'attract new players and sustain their engagement',
                                  'leaving within two months',
                                  'give them a reason to return beyond their first weeks and stay involved over time',
                                ]
                              : detail.value.highlights.challenge
                        }
                      />
                    </p>
                  </CaseStudyStep>
                  <CaseStudyStep title="My contribution">
                    <p>
                      <HighlightedText
                        text={
                          isBbq || isEnglishDorado
                            ? t(detail.value.contribution)
                            : detail.value.contribution
                        }
                        phrases={
                          isBbq
                            ? [
                                'mapped the Colombian supplier market, identified key providers, and negotiated pricing and volumes',
                                'cutting, injection, marination, and delivery',
                                'prepared the go-to-market analysis',
                                'a location that fit both the brand and the people it wanted to reach',
                              ].map(t)
                            : isEnglishDorado
                              ? [
                                  'turned the account owner’s concern into a brief, brought marketing and commercial teams together',
                                  'managed the request pipeline and presented our joint proposal to Doradobet',
                                  'coordinating the product-backlog developments',
                                ]
                              : detail.value.highlights.contribution
                        }
                      />
                    </p>
                  </CaseStudyStep>
                  <CaseStudyStep title="The approach">
                    <p>
                      <HighlightedText
                        text={
                          isBbq || isEnglishDorado
                            ? t(detail.value.approach)
                            : detail.value.approach
                        }
                        phrases={
                          isBbq
                            ? [
                                'organized stakeholder visits',
                                'benchmarked local competitors’ products',
                                'preserve the original recipes and preparation standards',
                              ].map(t)
                            : isEnglishDorado
                              ? [
                                  'eight-month leaderboard tournament built around a thematic journey through Ecuador',
                                  'a new chapter with rewards',
                                  'coordinated backlog follow-through',
                                ]
                              : detail.value.highlights.approach
                        }
                      />
                    </p>
                  </CaseStudyStep>
                  {locale === 'en' &&
                    detail.value.id === 'el-dorado' &&
                    elDoradoSteps.map((step) => (
                      <CaseStudyStep key={step.title} title={step.title}>
                        <p>
                          <HighlightedText text={step.text} phrases={step.phrases} />
                        </p>
                      </CaseStudyStep>
                    ))}
                  {isBbq && (
                    <CaseStudyStep title="The launch">
                      <p>
                        <HighlightedText
                          text={t(bbqLaunch)}
                          phrases={[
                            'Provenza',
                            'three-story restaurant',
                            'local supply chain built around the franchise’s recipes, competitive pricing, and viable margins',
                          ].map(t)}
                        />
                      </p>
                    </CaseStudyStep>
                  )}
                </div>
                <div className={styles.outcomes}>
                  {(isBbq ? bbqOutcomes : detail.value.outcomes).map((outcome) => (
                    <div key={outcome.label}>
                      <strong>{outcome.value}</strong>
                      <span>{outcome.label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.learning}>
                  <CaseStudyStep title="What stays with me">
                    <p>
                      {isBbq ? (
                        <HighlightedText
                          text={t(detail.value.learning)}
                          phrases={[
                            'how much I love to build',
                            'bringing people together to make things happen',
                          ].map(t)}
                        />
                      ) : isEnglishDorado ? (
                        <HighlightedText
                          text={t(detail.value.learning)}
                          phrases={[
                            'bringing the right teams together',
                            'giving the client a proposal they could act on, tailored to their needs',
                          ]}
                        />
                      ) : (
                        detail.value.learning
                      )}
                    </p>
                  </CaseStudyStep>
                </div>
              </>
            ) : (
              <>
                <p className={styles.dialogIntro}>
                  {detail.value.name === 'JobHub' ? detail.value.description : detail.value.detail}
                </p>
                <CreationMedia key={detail.value.name} creation={detail.value} />
                {detail.value.name === 'JobHub' && (
                  <p className={styles.creationDetailText}>{detail.value.detail}</p>
                )}
                {detail.value.href && (
                  <a
                    className="action-link"
                    href={detail.value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {detail.value.name === 'JobHub'
                      ? 'Explore the repository'
                      : detail.value.name === 'Maelström'
                        ? 'View on Chrome Web Store'
                        : 'View on Nexus Mods'}{' '}
                    <Arrow />
                  </a>
                )}
              </>
            )}
            <button className={styles.dialogBack} onClick={close}>
              BACK TO THE WORK <Arrow diagonal={false} />
            </button>
          </div>
        )}
      </dialog>
    </section>,
  );
}
