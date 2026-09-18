import { color } from 'framer-motion'
import React from 'react'
import Aos from 'aos'

const Skills = () => {
    const skills = [
        {name: 'React.js', precentage:90, color: '#61DAFB'},
        {name: 'Tailwind.css', precentage:98, color: '#06B6D4'},
        {name: 'Vue.js', precentage:85, color: '#4FC08D'},
        {name: 'Javascript', precentage:95, color: '#F7DF1E'},
    ]
  return (
    <div>
      <section id='skills' className='min-h-screen flex items-center
      py-20 px-4 sm:px-6 overflow-hidden relative'>
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute -top-40 -right-40 w-80 h-80 bg-red-500/50
            rounded-full blur-3xl'></div>
            <div className='absolute -bottom-40 left-40 w-80 h-80 bg-red-500/50
            rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-6xl mx-auto w-full relative z-10'>
            <div className='text-center mb-16' data-aos='fade-up'>
                <div className='inline-flex items-center gap-2
                px-4 py-1.5 rounded-full bg-red-500/10
                border border-red-500/20 mb-5'>
                    <span className='w-2 h-2 rounded-full
                    bg-red-500 animate-pulse' />
                    <span className='text-sm font-medium
                    dark:text-gray-300 text-gray-700'> Expertise</span>
                </div>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl
                font-bold dark:text-white text-gray-900'>
                    My <span className='text-red-500 dark:text-gray-300 max-w-2xl mx-auto'> Skills</span>
                </h2>
                <p className='mt-4 text-gray-600
                    dark:text-gray-300 max-w-2xl mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero explicabo ex voluptate nisi in asperiores, dignissimos voluptatum veritatis rerum, exercitationem odit nesciunt molestiae officia excepturi neque iure quidem fugit voluptatibus!
                </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8
            md:gap-12'>
                {skills.map((skill,index) => {
                    const radius = 60
                    const circumferebce = 2*Math.PI* radius
                    const offset = circumferebce - (
                        skill.precentage) * circumferebce

                    const size = 150
                    return (
                        <div 
                        key={index}
                        className='flex flex-col items-center'
                        data-aos='fade-up'
                        data-aos-delay={index*100}>
                            <div className='relative'
                            style={{width:size, height:size}}>
                                <svg 
                                className='-rotate-90'
                                width={size}
                                height={size}>
                                    <circle
                                    cx={size /2}
                                    cy={size /2}
                                    r={radius}
                                    fill='none'
                                    stroke='#e5e7eb'
                                    strokeWidth='10'
                                    className='dark:stroke-gray-700'>    
                                    </circle>

                                    <circle
                                    cx={size /2}
                                    cy={size /2}
                                    r={radius}
                                    fill='none'
                                    stroke={skill.color}
                                    strokeWidth='10'
                                    strokeDasharray={circumferebce}
                                    strokeDashoffset={offset}
                                    strokeLinecap='round'
                                    className='transition-all duration-1000 ease-out'
                                    style={{transition: 'stroke-dashoffset 1.5s ease-in-out'}}>
                                        
                                    </circle>
                                </svg>

                            </div>
                        </div>
                    )
                    
                }

                )}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
