'use client';

import { useLanguage } from '@/components/shared/Language';

import { experience, skillGroups } from '@/data/portfolio';
import styles from './About.module.css';
import { RevealHeading } from '@/components/shared/RevealHeading';
import { ExperienceDisclosure } from './ExperienceDisclosure';
import { HighlightedText } from '@/components/shared/HighlightedText';
import { SkillDisclosure } from './SkillDisclosure';

export function About() {
  const { localize, locale } = useLanguage();
  return localize(
    <section id="about" className={styles.about} tabIndex={-1} aria-labelledby="about-title">
      <div className="section-label">
        <span>A LITTLE ABOUT ME</span>
        <span>THE PERSON BEHIND THE WORK</span>
      </div>
      <div className={styles.intro}>
        <RevealHeading
          id="about-title"
          lines={
            locale === 'es'
              ? [
                  'Las buenas relaciones',
                  'empiezan',
                  <>
                    con <em data-accent>personas</em>
                  </>,
                ]
              : [
                  <span key="work" data-hover-word>
                    Good work starts
                  </span>,
                  <>
                    with <em data-accent>people.</em>
                  </>,
                ]
          }
        />
        <div className={styles.bio} data-reveal>
          <p>
            <HighlightedText
              text="I’m Santi. A relationship gardener, a curious mind, and a builder at heart."
              phrases={['gardener', 'curious', 'builder']}
            />
          </p>
          <p>
            <HighlightedText
              text="Over five years across SaaS and marketing, I’ve helped connect what clients need with what teams can make possible. I listen closely, bring the right people together, and turn shared challenges into a clear way forward."
              phrases={
                locale === 'en'
                  ? [
                      'growing and gardening accounts',
                      'efficient resource allocation',
                      'tailored, creative and human first solutions',
                    ]
                  : ['connect what clients need with what teams can make possible.']
              }
            />
          </p>
          <p>
            Outside of the office, I love animals, writing, tech, videogames, films and overall
            learning new stuff
          </p>
        </div>
      </div>
      <div className={styles.facts} data-reveal>
        <div>
          <strong>
            5<span> years</span>
          </strong>
          <small>OF EXPERIENCE</small>
        </div>
        <div>
          <strong>SaaS × Brand × Business Development</strong>
          <small>BACKGROUND - B2B & B2C</small>
        </div>
        <div>
          <strong>Human, first.</strong>
          <small>HOW I APPROACH</small>
        </div>
      </div>
      <div className={styles.experienceHeading}>
        <h3>Where I’ve made a difference</h3>
        <span className="micro">SELECTED EXPERIENCE</span>
      </div>
      <div className={styles.experience}>
        {experience.map((item) => (
          <ExperienceDisclosure
            className={styles.role}
            key={item.number}
            summary={
              <>
                <span className={styles.roleNumber} aria-hidden="true">
                  ↗︎
                </span>
                <span className={styles.roleIdentity}>
                  <span className={styles.company}>
                    {item.company}
                    <small>{item.category}</small>
                  </span>
                  <span className={styles.roleName}>{item.role}</span>
                </span>
                <span className={styles.roleMetrics} data-count={item.metrics.length}>
                  {item.metrics.map((metric) => (
                    <span key={metric.label}>
                      <strong>{metric.value}</strong>
                      <small>{metric.label}</small>
                    </span>
                  ))}
                </span>
                <span className={styles.toggle} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 10h14M10 3v14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </>
            }
          >
            <div className={styles.roleDetail} data-experience-content>
              <h4>
                {locale === 'en' && item.number === '02' ? (
                  <>
                    Helping a global brand find its local
                    <br />
                    footing.
                  </>
                ) : (
                  item.summary
                )}
              </h4>
              <p>{item.detail}</p>
            </div>
          </ExperienceDisclosure>
        ))}
      </div>
      <div className={styles.toolkit} data-reveal>
        <div>
          <span className="micro">SKILLS</span>
          <h3>
            Action.
            <br />
            With a toolkit.
          </h3>
          <p className={styles.toolkitIntro}>
            Practical tools.
            <br />A people-first approach.
          </p>
        </div>
        <div className={styles.skills}>
          {skillGroups.map((group) => (
            <SkillDisclosure key={group.title} title={group.title}>
              {group.skills.split(' / ').map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </SkillDisclosure>
          ))}
          <SkillDisclosure title="Across languages">
            <li>
              Spanish <strong>Native</strong>
            </li>
            <li>
              English <strong>C1</strong>
            </li>
            <li>
              Portuguese <strong>B2</strong>
            </li>
          </SkillDisclosure>
        </div>
      </div>
    </section>,
  );
}
