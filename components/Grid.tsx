import React from 'react'
import { professionalSummary } from '@/data'

const Grid = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 relative lowercase">
          about me
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
          {professionalSummary}
        </p>
      </div>
    </section>
  )
}

export default Grid