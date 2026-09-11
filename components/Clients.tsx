'use client'

import React from 'react'
import { testimonials } from '@/data'
import { useLanguage } from './LanguageProvider'
import MobileCarousel from './MobileCarousel'
import MobileExcerpt from './MobileExcerpt'

const Clients = () => {
  const { locale } = useLanguage()
  return (
    <section className='border-b-2 border-stone-900 px-6 py-16 text-stone-950 dark:border-stone-100 dark:text-stone-50 md:px-12 md:py-32' id='testimonials'>
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">{locale === 'de' ? '04 / Referenzen' : '04 / References'}</p>
        <div className='mt-10'>
          <MobileCarousel className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3' label={locale === 'de' ? 'Referenzen' : 'References'}>
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className={`glass-panel relative flex flex-col p-7 text-stone-950 dark:text-stone-50 ${index === 0 ? 'border-t-[12px] border-t-[#c51f2d] md:col-span-2 lg:col-span-2 lg:p-9' : ''}`}>
                <div className="mb-5 font-serif text-7xl font-black leading-none text-[#c51f2d] dark:text-[#ff5c68]">&ldquo;</div>
                <MobileExcerpt className={`flex-1 text-stone-700 dark:text-stone-300 ${index === 0 ? 'text-lg leading-8 md:text-xl md:leading-9' : 'leading-7'}`} text={locale === 'de' ? testimonial.quoteDe : testimonial.quote} />
                <footer className="mt-7 border-t-2 border-stone-900 pt-5 dark:border-stone-100">
                  <p className='font-serif text-lg font-bold'>{testimonial.name}</p>
                  <p className='mt-1 font-mono text-xs uppercase leading-5 opacity-70'>{locale === 'de' ? testimonial.titleDe : testimonial.title}</p>
                </footer>
              </blockquote>
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  )
}

export default Clients
