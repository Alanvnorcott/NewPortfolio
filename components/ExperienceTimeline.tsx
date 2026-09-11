'use client'

import React from 'react'
import { workExperience } from '@/data'
import { BrainCircuit, Database, Music2, Play, Server, ShieldCheck } from 'lucide-react'
import { MobileCarousel, MobileExcerpt, useLanguage } from './LanguageProvider'

const roleIcons = [Play, BrainCircuit, ShieldCheck, Music2, Database]

const ExperienceTimeline = () => {
  const { locale } = useLanguage()
  const copy = locale === 'de' ? {
    kicker: '02 / Erfahrung',
    featured: 'Fokus: Video-Plattform',
  } : {
    kicker: '02 / Experience',
    featured: 'Featured: video platform',
  }

  return (
    <section id="experience" className="border-b-2 border-stone-900 px-6 py-16 text-stone-950 dark:border-stone-100 dark:text-stone-50 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="section-kicker">{copy.kicker}</p>
        <div className="relative mt-12">
          <div className="absolute hidden md:block bottom-0 left-[15px] top-2 w-0.5 bg-stone-900 dark:bg-stone-100 md:left-1/2"></div>
          <MobileCarousel className="md:contents" label={locale === 'de' ? 'Erfahrung' : 'Experience'}>
          {workExperience.map((exp, index) => {
            const RoleIcon = roleIcons[index] ?? Server

            return (
              <div key={exp.id} className={`relative md:mb-8 md:flex md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:justify-end md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                <div className={`absolute left-0 top-7 hidden md:flex h-8 w-8 items-center justify-center border-4 border-[#f1eadc] shadow-md dark:border-[#191714] md:left-auto ${index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'} ${index === 0 ? 'bg-[#c51f2d] text-white' : 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'}`}>
                  <RoleIcon size={13} strokeWidth={2.7} fill={index === 0 ? 'currentColor' : 'none'} aria-hidden="true" />
                </div>
                <div className={`glass-panel w-full p-6 text-stone-950 transition duration-300 hover:-translate-y-1 dark:text-stone-50 ${index === 0 ? 'border-t-[12px] border-t-[#c51f2d] md:p-8' : ''}`}>
                  {index === 0 && <div className="mb-5 flex items-center justify-between gap-3"><span className="inline-flex items-center gap-1.5 border-2 border-stone-950 bg-[#f8f1e5] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-stone-950"><Play size={12} fill="currentColor"/> {copy.featured}</span><Server size={20} className="text-[#c51f2d] dark:text-[#ff5c68]"/></div>}
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#c51f2d] dark:text-[#ff5c68]">{locale === 'de' ? exp.periodDe : exp.period}</p>
                  <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50">{locale === 'de' ? exp.titleDe : exp.title}</h3>
                  <p className="mt-1 text-sm font-bold text-stone-700 dark:text-stone-300">{exp.company} · {locale === 'de' ? exp.locationDe : exp.location}</p>
                  <MobileExcerpt className="mt-5 text-[15px] leading-7 text-stone-700 dark:text-stone-300" text={locale === 'de' ? exp.descDe : exp.desc} />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((technology) => <span key={technology} className="border border-stone-500 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-stone-700 dark:border-stone-500 dark:text-stone-200">{technology}</span>)}
                  </div>
                </div>
              </div>
            )
          })}
          </MobileCarousel>
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
