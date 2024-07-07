import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { FaArrowPointer } from 'react-icons/fa6';
import { BackgroundBeams } from './ui/background-beams';
import { Boxes } from './ui/background-boxes';

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="pink"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            
            
            <div className="h-screen w-full dark:bg-black-100 bg-white-300 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white-200 dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] [mask-image:radial-gradient(circle at center, transparent 0%, white 50%, black 100%)]"></div>
            </div>
            <div className="flex justify-center relative my-20 z-10">
            <BackgroundBeams />
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue max-w-80">
                        SWE | FULL STACK | DEVELOPER
                    </h2>
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Designing and Engineering Exceptional User Experiences"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-black-200 dark:text-white-200">
                      Hi, I&apos;m Alan, a full stack developer based in NYC Metropolitan Area
                    </p>
                    <a href="#about">
                        <MagicButton
                          title="Show my work"
                          icon={<FaArrowPointer />}
                          position="right"
                        />
                      </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
