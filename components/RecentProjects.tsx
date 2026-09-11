'use client'

import { projects } from '@/data'
import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from './LanguageProvider'
import MobileCarousel from './MobileCarousel'

const RecentProjects = () => {
  const { locale } = useLanguage()
  return (
    <section className='border-b-2 border-stone-900 px-6 py-16 text-stone-950 dark:border-stone-100 dark:text-stone-50 md:px-12 md:py-32' id='projects'>
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">{locale === 'de' ? '03 / Ausgewählte Projekte' : '03 / Selected projects'}</p>
        <MobileCarousel className='mt-10 grid gap-5 md:grid-cols-2' label={locale === 'de' ? 'Projekte' : 'Projects'}>
          {projects.map(({ id, title, des, desDe, period, periodDe, iconLists, link }, index) => {
            const cardContent = <>
              <div className={`absolute inset-y-0 left-0 w-2 ${index % 2 === 0 ? 'bg-[#c51f2d]' : 'bg-stone-900 dark:bg-stone-100'}`} />
              <div className='relative z-10 flex h-full flex-col'>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-4xl font-black text-stone-300 dark:text-stone-600">0{id}</span>
                  <div className="flex items-center gap-3">
                    {period && <span className="max-w-32 text-right font-mono text-[10px] font-bold uppercase leading-4 tracking-wider text-[#c51f2d] dark:text-[#ff5c68]">{locale === 'de' ? periodDe : period}</span>}
                    {link && <span className="border-2 border-stone-900 p-2 text-stone-900 transition group-hover:rotate-45 group-hover:bg-[#c51f2d] group-hover:text-white dark:border-stone-100 dark:text-stone-100"><ArrowUpRight size={17}/></span>}
                  </div>
                </div>
                <h3 className="mt-6 font-serif text-3xl font-bold tracking-tight">{title}</h3>
                <p className='mt-3 flex-1 leading-7 text-stone-700 dark:text-stone-300'>{locale === 'de' ? desDe : des}</p>
                <div className='mt-7 flex flex-wrap gap-2'>
                  {iconLists.map((icon, iconIndex) => (
                    <div key={iconIndex} className="flex h-9 w-9 items-center justify-center border-2 border-stone-900 bg-[#f8f1e5] dark:border-stone-100">
                      <Image src={icon} alt="" width={18} height={18} className={icon === '/git.svg' ? 'invert' : undefined} />
                    </div>
                  ))}
                </div>
              </div>
            </>
            const cardClass = "glass-panel group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1.5 md:p-9"

            return link ? (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer" className={cardClass}>
                {cardContent}
              </a>
            ) : (
              <article key={id} className={cardClass}>
                {cardContent}
              </article>
            )
          })}
        </MobileCarousel>
      </div>
    </section>
  )
}

export default RecentProjects
