'use client'

import React from 'react'
import { professionalSummary, professionalSummaryDe } from '@/data'
import { Boxes, Radio, Workflow } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

const Grid = () => {
  const { locale } = useLanguage()
  const copy = locale === 'de' ? {
    kicker: '01 / Profil',
    cards: [
      { icon: Radio, label: 'Videosysteme', detail: 'HLS · DASH · DRM' },
      { icon: Workflow, label: 'Release-Systeme', detail: 'CI/CD · Nexus · S3' },
      { icon: Boxes, label: 'Platform DX', detail: 'TypeScript · Monorepos' },
    ],
  } : {
    kicker: '01 / About',
    cards: [
      { icon: Radio, label: 'Video systems', detail: 'HLS · DASH · DRM' },
      { icon: Workflow, label: 'Delivery systems', detail: 'CI/CD · Nexus · S3' },
      { icon: Boxes, label: 'Platform DX', detail: 'TypeScript · Monorepos' },
    ],
  }

  return (
    <section id="about" className="border-b-2 border-stone-900 px-6 py-24 text-stone-950 dark:border-stone-100 dark:text-stone-50 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">{copy.kicker}</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <div className="glass-panel rounded-3xl p-7 md:p-10">
            <p className="font-serif text-xl leading-9 text-stone-800 dark:text-stone-100 md:text-2xl md:leading-10">
              {locale === 'de' ? professionalSummaryDe : professionalSummary}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {copy.cards.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="glass-panel flex items-center gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#c51f2d] hover:text-white dark:hover:bg-[#c51f2d] dark:hover:text-white">
                <div className="border-2 border-current bg-[#c51f2d] p-3 text-white"><Icon size={21}/></div>
                <div><p className="font-serif text-lg font-bold">{label}</p><p className="mt-0.5 font-mono text-xs uppercase opacity-70">{detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid
