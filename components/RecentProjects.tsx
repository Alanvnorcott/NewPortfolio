import { projects } from '@/data'
import React from 'react'

const colors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600'];

const RecentProjects = () => {
  return (
    <section className='py-20 px-6 md:px-12' id='projects'>
      <div className="max-w-6xl mx-auto">
        <h1 className='text-3xl font-light text-center mb-12 relative lowercase'>
          a collection of {' '}
          <span className='text-blue-400'>recent projects</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
        </h1>
        <div className='relative flex flex-wrap justify-center gap-8'>
          {projects.map(({ id, title, des, iconLists, link }, index) => (
            <div
              key={id}
              className={`bg-white rounded-xl shadow-sm border p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden transform ${index % 4 === 0 ? 'rotate-2' : index % 4 === 1 ? '-rotate-1' : index % 4 === 2 ? 'rotate-3' : '-rotate-2'} ${index % 2 === 0 ? 'translate-y-4' : 'translate-y-0'} hover:rotate-0 hover:translate-y-0`}
              style={{ zIndex: projects.length - index }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30'></div>
              <div className='relative z-10'>
                <h2 className={`text-2xl font-bold mb-4 ${colors[index % colors.length]}`}>{title}</h2>
                <p className='text-gray-600 mb-6 leading-relaxed'>{des}</p>
                <div className='flex flex-wrap gap-4 mb-6 justify-center'>
                  {iconLists.map((icon, iconIndex) => (
                    <div key={iconIndex} className={`w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm transform hover:scale-110 transition-transform ${iconIndex % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}>
                      <img src={icon} alt="tech" className='w-6 h-6' />
                    </div>
                  ))}
                </div>
                <div className='text-center'>
                  <a href={link} target="_blank" rel="noopener noreferrer" className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium'>
                    View Project <span className='ml-2'>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProjects