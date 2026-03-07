import React from 'react'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <section className='py-20 px-6 md:px-12' id='testimonials'>
      <div className="max-w-6xl mx-auto">
        <h1 className='text-3xl font-light text-center mb-16 relative lowercase'>
          kind words from
          <span className='text-blue-400'> my references</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-gradient-to-r from-red-400 to-orange-400"></span>
        </h1>
        <div className='relative'>
          {/* Connecting lines for abstract feel */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'} relative`}>
                {/* Abstract quote mark */}
                <div className='absolute top-4 left-4 text-4xl text-gray-200 font-serif'>"</div>
                <p className='text-gray-700 mb-4 leading-relaxed pl-6'>{testimonial.quote}</p>
                <div className='border-t pt-4'>
                  <p className='font-semibold text-gray-900'>{testimonial.name}</p>
                  <p className='text-gray-600 text-sm'>{testimonial.title}</p>
                </div>
                {/* Floating accent */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${index % 3 === 0 ? 'bg-blue-400' : index % 3 === 1 ? 'bg-green-400' : 'bg-purple-400'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients