'use client';

import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { spanish } from '@/data/es';

type Locale = 'en' | 'es';
const LanguageContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({
  locale: 'en',
  setLocale: () => {},
});

export function translate(text: string, locale: Locale): string {
  if (locale === 'en') return text;
  const key = text.replace(/\s+/g, ' ').trim();
  let result = spanish[key];
  if (!result && key.startsWith('Read about ')) result = `Conoce ${key.slice(11)}`;
  if (!result && key.startsWith('Read ') && key.endsWith(' case study'))
    result = `Leer el caso ${translate(key.slice(5, -11), locale)}`;
  if (!result && key.endsWith(' proof-of-concept demonstration'))
    result = `Demostración de prueba de concepto de ${key.replace(' proof-of-concept demonstration', '')}`;
  return result
    ? `${text.match(/^\s*/)?.[0] ?? ''}${result}${text.match(/\s*$/)?.[0] ?? ''}`
    : text;
}

// Localize React copy before rendering. Never mutate DOM text, IDs, URLs, event handlers,
// data attributes, component identity or state. Custom copy props are explicitly listed.
const copyProps = ['children', 'aria-label', 'alt', 'title', 'text', 'phrases', 'lines', 'summary'];
function localizeNode(node: ReactNode, locale: Locale): ReactNode {
  if (typeof node === 'string') return translate(node, locale);
  if (Array.isArray(node)) return Children.map(node, (child) => localizeNode(child, locale));
  if (!isValidElement<Record<string, unknown>>(node)) return node;
  const props: Record<string, unknown> = {};
  for (const name of copyProps) {
    if (name in node.props) props[name] = localizeNode(node.props[name] as ReactNode, locale);
  }
  return cloneElement(node, props);
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return {
    ...context,
    t: (text: string) => translate(text, context.locale),
    localize: (node: ReactNode) => localizeNode(node, context.locale),
  };
}

let sessionLocale: Locale | null = null;
const listeners = new Set<() => void>();
function readLocale(): Locale {
  if (sessionLocale) return sessionLocale;
  try {
    return localStorage.getItem('portfolio-language') === 'es' ? 'es' : 'en';
  } catch {
    return 'en';
  }
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function setLocale(locale: Locale) {
  sessionLocale = locale;
  try {
    localStorage.setItem('portfolio-language', locale);
  } catch {
    /* Optional persistence. */
  }
  listeners.forEach((listener) => listener());
}
export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<Locale>(subscribe, readLocale, () => 'en');
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title =
      locale === 'es'
        ? 'Santiago Vélez — Personas, ideas y posibilidades'
        : 'Santiago Vélez — People, ideas & possibility';
    // Refresh measured animation positions after translated copy has reflowed.
    const frame = requestAnimationFrame(() =>
      document.dispatchEvent(new Event('portfolio-language-change')),
    );
    return () => cancelAnimationFrame(frame);
  }, [locale]);
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
  );
}

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a className="skip-link" href="#main-content">
      {t('Skip to content')}
    </a>
  );
}

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={locale === 'es' ? 'Idioma' : 'Language'}
    >
      {(['en', 'es'] as const).map((value) => (
        <button
          key={value}
          type="button"
          lang={value}
          aria-label={value === 'en' ? 'English' : 'Español'}
          aria-pressed={locale === value}
          onClick={() => setLocale(value)}
        >
          {value.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
