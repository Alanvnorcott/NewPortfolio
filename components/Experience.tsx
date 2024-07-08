import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-borders'


const Experience = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            My
            <span className='text-blue-300'> work experience</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((card) => (
                <Button
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='60rem'
                    className='flex-1 dark:text-white text-black border-blue-300 dark:border-slate-800'>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start dark:text-white-200 text-black-200 mt-3 font-semibol'>
                                {card.desc}
                            </p>
                        </div>
                    </div>

                </Button>
            ))}

            </div>
        </div>
  )
}

export default Experience