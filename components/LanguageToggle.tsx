'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex border-2 border-stone-900 bg-[#f8f1e5] p-1 font-mono text-xs font-black shadow-[4px_4px_0_#c51f2d] dark:border-stone-100 dark:bg-[#24211d]" aria-label="Language">
      {(['en', 'de'] as const).map((value, index) => (
        <span key={value} className="flex items-center">
          {index > 0 && <span className="px-1 text-stone-400" aria-hidden="true">|</span>}
          <button
            type="button"
            onClick={() => setLocale(value)}
            aria-pressed={locale === value}
            className={`px-2 py-1 uppercase transition ${locale === value ? 'bg-[#c51f2d] text-white' : 'text-stone-800 hover:text-[#c51f2d] dark:text-stone-100 dark:hover:text-[#ff5c68]'}`}
          >
            {value}
          </button>
        </span>
      ))}
    </div>
  );
}
