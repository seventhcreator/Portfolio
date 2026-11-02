export type CreationMark = 'orbit' | 'switch' | 'asterisk' | 'diamond' | 'command';

// Draw icons rather than Unicode glyphs: iOS can substitute color emoji fonts.
export function CreationIcon({ mark }: { mark: CreationMark }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {mark === 'orbit' && (
          <circle cx="32" cy="32" r="19" strokeWidth="3" strokeDasharray="0.1 5.9" />
        )}
        {mark === 'switch' && <path d="M7 32h50M18 21 7 32l11 11m28-22 11 11-11 11" />}
        {mark === 'asterisk' && <path d="M32 7v50M7 32h50M14 14l36 36M14 50l36-36" />}
        {mark === 'diamond' && (
          <>
            <path d="m32 7 25 25-25 25L7 32Z" />
            <path d="m32 19 13 13-13 13-13-13Z" fill="currentColor" />
          </>
        )}
        {mark === 'command' && (
          <path d="M22 22h20v20H22Zm0 0h-7a7 7 0 1 1 7-7Zm20 0v-7a7 7 0 1 1 7 7Zm0 20h7a7 7 0 1 1-7 7Zm-20 0v7a7 7 0 1 1-7-7Z" />
        )}
      </g>
    </svg>
  );
}
