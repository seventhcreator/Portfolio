import Image from 'next/image';
import { Arrow } from '@/components/shared/Arrow';
import styles from './Home.module.css';

export function Home() {
  return (
    <section id="home" className={styles.home} tabIndex={-1} aria-labelledby="home-title">
      <div className={styles.eyebrow} data-hero-reveal>
        <span>CLIENT RELATIONSHIP MANAGER</span>
        <span>
          MEDELLÍN, CO <span className={styles.plus}>↗</span>
        </span>
      </div>
      <h1 id="home-title" className={styles.title}>
        <button
          type="button"
          className={styles.nameReveal}
          aria-label="Santiago Vélez — Relationship Manager"
        >
          <span data-hero-line className={styles.nameLine}>
            <span className={styles.nameOriginal}>SANTIAGO</span>
            <span className={styles.nameRole} aria-hidden="true">
              RELATIONSHIP
            </span>
          </span>
          <span data-hero-line className={styles.nameLine}>
            <span className={styles.nameOriginal}>
              VÉLEZ<span className={styles.period}>.</span>
            </span>
            <span className={styles.nameRole} aria-hidden="true">
              MANAGER<span className={styles.period}>.</span>
            </span>
          </span>
        </button>
      </h1>
      <div className={styles.portrait} data-hero-portrait>
        <div className={styles.imageInner} data-portrait>
          <Image
            src="/images/santiago-portrait.jpg"
            alt="Santiago Vélez"
            fill
            priority
            unoptimized
            sizes="(max-width: 760px) 75vw, 40vw"
            className={styles.image}
          />
        </div>
        <div className={styles.imageLabel}>
          <span>A HUMAN CONNECTION.</span>
        </div>
        <span className={styles.cross} aria-hidden="true">
          +
        </span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.intro} data-hero-reveal>
          <p>
            I connect <em>people</em>,<br />
            ideas & possibility.
          </p>
          <span>
            Client needs. Shared direction.
            <br />
            Thoughtful solutions.
          </span>
        </div>
        <div className={styles.ctaShell} data-hero-reveal data-magnet-zone>
          <a className={styles.cta} href="#case-studies" data-magnetic>
            <span>EXPLORE MY WORK</span>
            <span className={styles.ctaIcon}>
              <Arrow diagonal={false} />
            </span>
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <span>RELATIONSHIPS AT THE CORE.</span>
        <span>
          SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
        </span>
      </div>
    </section>
  );
}
