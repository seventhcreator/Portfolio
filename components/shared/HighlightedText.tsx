export function HighlightedText({
  text,
  phrases,
  variant = 'marker',
}: {
  text: string;
  phrases: string[];
  variant?: 'marker' | 'scribble';
}) {
  if (!phrases.length) return <>{text}</>;
  const escaped = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return (
    <>
      {text.split(new RegExp(`(${escaped.join('|')})`, 'g')).map((part, index) =>
        phrases.includes(part) ? (
          <mark
            className={variant === 'scribble' ? 'marker marker-scribble' : 'marker'}
            key={index}
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
