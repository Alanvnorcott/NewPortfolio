'use client';

import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import SocialIcons from './SocialIcons';
import { useLanguage } from './LanguageProvider';

const Footer = () => {
  const { locale } = useLanguage();
  return (
      <footer className="px-6 pb-10 pt-14 text-stone-950 dark:text-stone-50 md:px-12" id="contact">
        <div className="mx-auto max-w-3xl border-t-4 border-[#c51f2d] py-10 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#c51f2d] dark:text-[#ff5c68]">{locale === 'de' ? 'Kontakt' : 'Contact me'}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="mailto:Alanvnorcott@gmail.com" className="inline-flex items-center gap-2 border-2 border-stone-950 bg-stone-950 px-5 py-2.5 font-mono text-xs font-bold uppercase text-[#f8f1e5] transition hover:-translate-y-1 dark:border-stone-50 dark:bg-stone-50 dark:text-stone-950"><Mail size={15}/> {locale === 'de' ? 'E-Mail' : 'Email me'}</a>
            <a href="https://www.linkedin.com/in/alan-norcott-31161523b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-stone-950 px-5 py-2.5 font-mono text-xs font-bold uppercase transition hover:-translate-y-1 hover:bg-[#c51f2d] hover:text-white dark:border-stone-50">LinkedIn <ArrowUpRight size={15}/></a>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-5 font-mono text-xs uppercase text-stone-600 sm:flex-row dark:text-stone-400">
          <p>© {new Date().getFullYear()} Alan Norcott</p>
          <SocialIcons />
        </div>
      </footer>
  );
};

export default Footer;
