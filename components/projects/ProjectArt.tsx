import styles from './Projects.module.css';

export function ProjectArt({ kind }: { kind: 'dorado' | 'seoul' }) {
  if (kind === 'dorado')
    return (
      <div className={`${styles.art} ${styles.dorado}`} aria-hidden="true" data-parallax-art>
        <div className={styles.artMeta}>
          <span>DORADOBET / VIRTUALSOFT</span>
          <span>ENGAGEMENT & RETENTION</span>
        </div>
        <svg viewBox="0 0 700 450" className={styles.orbits} data-art-depth>
          <g fill="none" stroke="currentColor" strokeWidth=".7">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ellipse
                key={i}
                cx="350"
                cy="230"
                rx={75 + i * 30}
                ry={105 + i * 14}
                transform={`rotate(${-40 + i * 8} 350 230)`}
              />
            ))}
          </g>
          <path
            d="M180 300 Q250 120 350 230 T545 130"
            fill="none"
            stroke="#7441e8"
            strokeWidth="3"
          />
          <g fill="#7441e8">
            <circle cx="180" cy="300" r="6" />
            <circle cx="350" cy="230" r="6" />
            <circle cx="545" cy="130" r="6" />
          </g>
        </svg>
        <div className={styles.doradoType}>
          <span>PATH TO</span>
          <strong>
            EL DORADO<span>↗︎</span>
          </strong>
        </div>
        <div className={styles.artFoot}>
          <span>8 MONTHS. ONE SHARED DIRECTION.</span>
          <span>ECUADOR →</span>
        </div>
      </div>
    );
  return (
    <div className={`${styles.art} ${styles.seoul}`} aria-hidden="true" data-parallax-art>
      <div className={styles.artMeta}>
        <span>BB.Q CHICKEN / COLOMBIA</span>
        <span>MARKET ENTRY</span>
      </div>
      <svg viewBox="0 0 700 450" className={styles.globe} data-art-depth>
        <g fill="none" stroke="currentColor" strokeWidth=".75">
          <circle cx="350" cy="230" r="175" />
          <ellipse cx="350" cy="230" rx="110" ry="175" />
          <ellipse cx="350" cy="230" rx="40" ry="175" />
          <ellipse cx="350" cy="230" rx="175" ry="65" />
          <ellipse cx="350" cy="230" rx="175" ry="125" />
          <path d="M175 230h350M350 55v350" />
        </g>
        <path
          d="M240 165Q350 35 475 270"
          fill="none"
          stroke="#7441e8"
          strokeWidth="3"
          strokeDasharray="6 7"
        />
        <circle cx="240" cy="165" r="7" fill="#7441e8" />
        <circle cx="475" cy="270" r="7" fill="#7441e8" />
      </svg>
      <div className={styles.seoulType}>
        <span>SEOUL</span>
        <span className={styles.routeArrow}>
          <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" focusable="false">
            <path d="M12 12 52 52M24 52h28V24" stroke="currentColor" strokeWidth="7" />
          </svg>
        </span>
        <span>MEDELLÍN</span>
      </div>
      <div className={styles.artFoot}>
        <span>GLOBAL AMBITION. LOCAL CONNECTION.</span>
        <span>06°14′ N / 75°35′ W</span>
      </div>
    </div>
  );
}
