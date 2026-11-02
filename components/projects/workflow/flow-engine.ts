// Ported from the owner's Framer HomeSignal.tsx. Original timing and easing preserved.
export const SLOT = 5200;
export const CYCLE = SLOT * 4;
const inboundEnd = 1850;
const rippleEnd = 2700;
const outboundEnd = 4550;

export type FlowState = {
  route: number;
  phase: 'inbound' | 'ripple' | 'outbound' | 'pause';
  progress: number;
};

export function sampleFlow(time: number): FlowState {
  const timeInCycle = ((time % CYCLE) + CYCLE) % CYCLE;
  const route = Math.floor(timeInCycle / SLOT);
  const offset = timeInCycle % SLOT;
  if (offset < inboundEnd) return { route, phase: 'inbound', progress: offset / inboundEnd };
  if (offset < rippleEnd)
    return { route, phase: 'ripple', progress: (offset - inboundEnd) / (rippleEnd - inboundEnd) };
  if (offset < outboundEnd)
    return { route, phase: 'outbound', progress: (offset - rippleEnd) / (outboundEnd - rippleEnd) };
  return { route, phase: 'pause', progress: 0 };
}

export function cubic(a: number, b: number, c: number, d: number, t: number) {
  const u = 1 - t;
  return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
}
export function ease(t: number) {
  return t * t * (3 - 2 * t);
}
export function sampleRipple(progress: number) {
  return [0, 0.23, 0.46].map((delay) => {
    const t = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
    return {
      radius: 205 + ease(t) * 78,
      opacity: progress <= delay ? 0 : Math.sin(Math.PI * t) * 0.36,
    };
  });
}

export type Point = { x: number; y: number };
export type Curve = [Point, Point, Point, Point];
export type Route = { inbound: Curve; outbound: Curve };

// Same cubic paths as the original, with handles proportional to the available gap.
export function connect(start: Point, end: Point, vertical: boolean): Curve {
  const gap = vertical ? end.y - start.y : end.x - start.x;
  return vertical
    ? [start, { x: start.x, y: start.y + gap * 0.44 }, { x: end.x, y: end.y - gap * 0.37 }, end]
    : [start, { x: start.x + gap * 0.44, y: start.y }, { x: end.x - gap * 0.37, y: end.y }, end];
}
export function curvePath(curve: Curve) {
  const [a, b, c, d] = curve;
  return `M ${a.x} ${a.y} C ${b.x} ${b.y}, ${c.x} ${c.y}, ${d.x} ${d.y}`;
}
export function pointOn(curve: Curve, progress: number): Point {
  const t = ease(Math.max(0, Math.min(1, progress)));
  return {
    x: cubic(...(curve.map((p) => p.x) as [number, number, number, number]), t),
    y: cubic(...(curve.map((p) => p.y) as [number, number, number, number]), t),
  };
}
