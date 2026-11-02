'use client';

import { useSyncExternalStore } from 'react';

let override: boolean | undefined;
const eventName = 'portfolio-motion-preference';

function getSnapshot() {
  return override ?? window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function subscribe(callback: () => void) {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  query.addEventListener('change', callback);
  window.addEventListener(eventName, callback);
  return () => {
    query.removeEventListener('change', callback);
    window.removeEventListener(eventName, callback);
  };
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}

export function toggleReducedMotion() {
  override = !getSnapshot();
  window.dispatchEvent(new Event(eventName));
}
