import React from 'react'
import { workExperience } from '@/data'

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 relative lowercase">
          work experience
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"></span>
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          {workExperience.map((exp, index) => (
            <div key={exp.id} className="relative pl-12 pb-8">
              <div className="absolute left-0 w-8 h-8 bg-black rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 mb-2">{exp.company} | {exp.location} | {exp.period}</p>
                <p className="text-gray-700 mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {/* Add technologies if available, or TODO */}
                  <span className="px-2 py-1 bg-gray-100 text-sm rounded">React</span>
                  <span className="px-2 py-1 bg-gray-100 text-sm rounded">TypeScript</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
