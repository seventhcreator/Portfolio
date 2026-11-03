'use client';

import { useLanguage } from '@/components/shared/Language';

import { useRef, useState, useEffect } from 'react';
import { projects, creations, workTotals, type Project, type Creation } from '@/data/portfolio';
import { Arrow } from '@/components/shared/Arrow';
import { ProjectArt } from './ProjectArt';
import styles from './Projects.module.css';
import { RevealHeading } from '@/components/shared/RevealHeading';
import { HighlightedText } from '@/components/shared/HighlightedText';
import { CreationMedia } from './CreationMedia';
import { Workflow } from './workflow/Workflow';
import { CreationIcon } from './CreationIcon';
import { elDoradoSteps } from '@/data/en';
import { HeartText } from '@/components/shared/HeartText';

type Detail = { type: 'project'; value: Project } | { type: 'creation'; value: Creation };

export function Projects() {
  const { localize, locale } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);

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
        <span>SELECTED WORK</span>
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
          <span>IDEAS PUT INTO MOTION</span>
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
        {locale === 'es' && (
          <p data-reveal>
            A few shared challenges.
            <br />A little curiosity.
            <br />
            Some meaningful outcomes.
          </p>
        )}
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
                <p>{project.summary}</p>
                <dl className={styles.cardResults} aria-label="Project outcomes">
                  {project.outcomes.map((outcome) => (
                    <div className={styles.cardResult} key={outcome.label}>
                      <dt>
                        {locale === 'en' &&
                        project.id === 'bbq-colombia' &&
                        outcome.value === '↑ ATV'
                          ? 'Shaped the initial GTM strategy'
                          : outcome.label}
                      </dt>
                      <dd>
                        {locale === 'en' &&
                        project.id === 'bbq-colombia' &&
                        outcome.value === '↑ ATV'
                          ? 'GTM'
                          : outcome.value}
                      </dd>
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
        {locale === 'en' ? (
          <p>
            <HeartText text="BE KIND" />
          </p>
        ) : (
          <p>
            Small tools, personal experiments,
            <br />
            and things I wanted to exist.
          </p>
        )}
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
                <p className={styles.dialogIntro}>{detail.value.summary}</p>
                <div className={styles.dialogArt}>
                  <ProjectArt kind={detail.value.art} />
                </div>
                <div className={styles.story}>
                  <div>
                    <h3>
                      <span className={locale === 'es' ? 'marker' : undefined}>The challenge</span>
                    </h3>
                    <p>
                      <HighlightedText
                        text={detail.value.challenge}
                        phrases={
                          locale === 'en' && detail.value.id === 'el-dorado'
                            ? [
                                ...detail.value.highlights.challenge,
                                'attract new players and sustain their engagement.',
                              ]
                            : detail.value.highlights.challenge
                        }
                      />
                    </p>
                  </div>
                  <div>
                    <h3>
                      <span className={locale === 'es' ? 'marker' : undefined}>
                        My contribution
                      </span>
                    </h3>
                    <p>
                      <HighlightedText
                        text={detail.value.contribution}
                        phrases={detail.value.highlights.contribution}
                      />
                    </p>
                  </div>
                  <div>
                    <h3>
                      <span className={locale === 'es' ? 'marker' : undefined}>The approach</span>
                    </h3>
                    <p>
                      <HighlightedText
                        text={detail.value.approach}
                        phrases={detail.value.highlights.approach}
                      />
                    </p>
                  </div>
                  {locale === 'en' &&
                    detail.value.id === 'el-dorado' &&
                    elDoradoSteps.map((step) => (
                      <div key={step.title}>
                        <h3>{step.title}</h3>
                        <p>
                          <HighlightedText text={step.text} phrases={step.phrases} />
                        </p>
                      </div>
                    ))}
                </div>
                <div className={styles.outcomes}>
                  {detail.value.outcomes.map((outcome) => (
                    <div key={outcome.label}>
                      <strong>{outcome.value}</strong>
                      <span>{outcome.label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.learning}>
                  <h3>
                    <mark className="marker">What stays with me</mark>
                  </h3>
                  <p>{detail.value.learning}</p>
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
