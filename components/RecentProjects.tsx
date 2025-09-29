import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            Full-Stack Development Projects & {' '}
            <span className='text-blue-400'>Software Engineering Portfolio</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-24 mt-10'>
            {projects.map(({ id, title, des, img, iconLists, link })=> (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]
                flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center 
                        sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl dark:bg-[#13162d] bg-white-200'>
                                <img src="/bg.png" alt={`${title} project background - Full-stack development showcase`} />
                            </div>
                            <img
                                src={img}
                                alt={`${title} - ${des} - Full-stack software development project`}
                                className='z-10 absolute bottom-0'
                            />
                        </div>
                        <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h2>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full 
                                    dark:bg-black bg-white-300 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                    style={{transform: `translateX(-${5 * index * 2})`}}>
                                    <img src={icon} alt={`${icon.split('/').pop()?.split('.')[0]} technology icon - Full-stack development stack`}
                                    className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm dark:text-blue-400'></p>
                                <FaLocationArrow className='ms-3'
                                color='#93c5fd' />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}

        </div>
    </div>
  )
}

export default RecentProjects