'use client';

import React, { Children, createContext, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react';

export type Locale = 'en' | 'de';

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>({ locale: 'en', setLocale: () => undefined });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('portfolio-locale');
    if (savedLocale === 'en' || savedLocale === 'de') setLocale(savedLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('portfolio-locale', locale);
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function MobileCarousel({ children, className = '', label }: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  const { locale } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [mobile, setMobile] = useState(false);
  const id = useId();
  const count = Children.count(children);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const media = window.matchMedia('(max-width: 767px)');
    let frame = 0;
    const sync = () => {
      if (!media.matches) return;
      const cards = Array.from(track.children) as HTMLElement[];
      const first = cards[0];
      if (!first) return;
      let nearest = 0;
      cards.forEach((card, index) => {
        if (Math.abs(card.offsetLeft - first.offsetLeft - track.scrollLeft) < Math.abs(cards[nearest].offsetLeft - first.offsetLeft - track.scrollLeft)) nearest = index;
      });
      setActive(nearest);
      track.style.setProperty('--active-card-height', `${cards[nearest].offsetHeight}px`);
    };
    const scheduleSync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };
    const onMediaChange = () => {
      setMobile(media.matches);
      scheduleSync();
    };
    const observer = new ResizeObserver(scheduleSync);
    observer.observe(track);
    Array.from(track.children).forEach(card => observer.observe(card));
    track.addEventListener('scroll', scheduleSync, { passive: true });
    media.addEventListener('change', onMediaChange);
    onMediaChange();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener('scroll', scheduleSync);
      media.removeEventListener('change', onMediaChange);
    };
  }, [count]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement;
    const card = track.children[Math.max(0, Math.min(count - 1, index))] as HTMLElement;
    track.scrollTo({
      left: card.offsetLeft - first.offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

  return <>
    <div ref={trackRef} id={id} className={`mobile-carousel-track ${className}`} role={mobile ? 'region' : undefined} aria-roledescription={mobile ? (locale === 'de' ? 'Karussell' : 'carousel') : undefined} aria-label={mobile ? label : undefined} tabIndex={mobile ? 0 : undefined} onKeyDown={event => {
      if (!mobile || event.altKey || event.ctrlKey || event.metaKey) return;
      const destination = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: count - 1 }[event.key];
      if (destination === undefined) return;
      event.preventDefault();
      goTo(destination);
    }}>{children}</div>
    <div className="mt-4 flex items-center justify-between gap-3 md:hidden">
      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider"><MoveHorizontal size={16} aria-hidden="true" />{locale === 'de' ? 'Wischen' : 'Swipe'}</span>
      <div className="flex items-center gap-3">
        <button type="button" className="carousel-arrow" disabled={active === 0} onClick={() => goTo(active - 1)} aria-controls={id} aria-label={locale === 'de' ? `Zurück: ${label}` : `Previous: ${label}`}><ArrowLeft size={18} aria-hidden="true" /></button>
        <span className="min-w-12 text-center font-mono text-sm font-bold tabular-nums" aria-live="polite" aria-atomic="true"><span className="sr-only">{label}: </span>{String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
        <button type="button" className="carousel-arrow" disabled={active === count - 1} onClick={() => goTo(active + 1)} aria-controls={id} aria-label={locale === 'de' ? `Weiter: ${label}` : `Next: ${label}`}><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
    </div>
  </>;
}

export function MobileExcerpt({ text, className = '' }: { text: string; className?: string }) {
  const { locale } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const id = useId();

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph || expanded) return;
    const measure = () => setOverflowing(paragraph.scrollHeight > paragraph.clientHeight + 1);
    const observer = new ResizeObserver(measure);
    observer.observe(paragraph);
    measure();
    return () => observer.disconnect();
  }, [text, expanded]);

  return <>
    <p ref={paragraphRef} id={id} className={`${className} mobile-excerpt`} data-expanded={expanded}>{text}</p>
    {(overflowing || expanded) && <button type="button" className="mt-2 min-h-11 self-start text-left font-mono text-sm font-bold underline decoration-2 underline-offset-4 md:hidden" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(value => !value)}>{locale === 'de' ? (expanded ? 'Weniger anzeigen −' : 'Weiterlesen +') : (expanded ? 'Read less −' : 'Read more +')}</button>}
  </>;
}
