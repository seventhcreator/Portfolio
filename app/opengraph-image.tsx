import { ImageResponse } from 'next/og';

export const alt = 'Santiago Vélez — Connecting people, ideas and possibility';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#f1f0eb',
        color: '#101010',
        width: '100%',
        height: '100%',
        padding: '55px 65px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18 }}>
        <span>CLIENT RELATIONSHIP MANAGER</span>
        <span>MEDELLÍN, CO ↗</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 145,
          fontWeight: 900,
          letterSpacing: -10,
          lineHeight: 0.9,
        }}
      >
        <span>SANTIAGO</span>
        <span style={{ display: 'flex' }}>
          VÉLEZ<span style={{ color: '#7441e8' }}>.</span>
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid #101010',
          paddingTop: 22,
          fontSize: 20,
        }}
      >
        <span>Connecting people, ideas & possibility.</span>
        <span>SV.</span>
      </div>
    </div>,
    size,
  );
}
