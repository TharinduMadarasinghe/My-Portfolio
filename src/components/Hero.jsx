import React from 'react'
import { FaFacebook, FaGit, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'
import hero from '../assets/Hero.png'
import { DownloadIcon, Mail } from 'lucide-react'

const Hero = () => {
    const socialIcons = [
        { icon: FaInstagram, alt: 'instagram', link:'#'},
        { icon: FaTiktok, alt: 'instagram', link:'#'},
        { icon: FaGithub, alt: 'instagram', link:'#'},
        { icon: FaFacebook, alt: 'instagram', link:'#'}
    ]
    
  return (
    <section id='home' className='min-h-screen flex items-center relative overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-8 lg:px-14
        py-12 lg:-mt-14 relative z-10'>
            <div className='flex flex-col lg:flex-row items-center
            justify-between gap-12 lg:gap-16'>
                <div className='ig:w-2/5 w-full flex justify-center'
                data-aos='fade-right'>
                    <div className='relative group'>
                        <div className='absolute inset-0
                        bg-linear-to-r from-red-600 to-red-800 rounded-full
                        filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity
                        duration-500' />
                            <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
                                <img src={hero} alt="hero" className='w-full h-full object-cover rounded-full
                                relative z-10 transform group-hover:scale-105 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 border-2 border-red-500 rounded-full scale-110 
                            group-hover:scale-125 transition-transform duration-500' />
                            <div className='absolute inset-0 border-2 border-red-500 rounded-full scale-120 
                            group-hover:scale-150 transition-transform duration-500' />
                            

                        </div>

                    </div>

                
        <div className='lg:w-3/5 w-full flex flex-col items-center
        lg:items-start text-center lg:text-left'
        data-aos='fade-left'
        >
            <div className='inline-flex items-center gap-2 px-4
            py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5'>
                <span className='w-2 h-2 rounded-full bg-red-500
                animate-pulse' />
                <span className='text-sm font-medium dark:text-red-300 text-gray-700'>
                    Available for Work...!
                </span>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl
            font-bold mb-3 dark:text-white text-gray-900
           '>
            Hi, I'm <span className=' dark:text-red-300 text-red-600'>Tharindu</span>
            </h1>
            <h2 className='text-xl sm:text-2xl font-mono mb-4
            dark:text-red-400 text-red-600'>
                <span className='text-gray-400 dark:text-gray-500'>&lt; </span>
                Frontend Developer
                <span className='text-gray-400 dark:text-gray-500'> /&gt;</span>
            </h2>
            <p className='mb-6 leading-relaxed max-w-md lg:max-w-lg
            dark:text-gray-300 text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus perspiciatis porro dolores eveniet optio aspernatur quo vitae assumenda error iure incidunt corrupti unde, veritatis illum! Debitis aut cumque ad!
            </p>
            <div className='flex gap-8 mb-7'>
                {[
                    {number:'2+', label:'Years Experiance'},
                    {number:'2+', label:'Projects Done'},
                    {number:'2+', label:'happy Clients'}
                ].map((stat, index) => (
                    <div key={index} className='text-center'>
                        <div className='text-2xl font-bold
                        dark:text-white text-gray-900'>
                        {stat.number}
                        </div>
                        <div className='text-xs dark:text-gray-400
                        text-gray-600'>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col sm:flex-row gap-4 w-full
            sm:w-auto'>
                <a href='#' download className='w-full sm:w-auto'>
                    <button className='w-full sm:w-auto inline-flex
                    items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-red-600 to bg-red-800
                    hover:shadow-[0_0_40px_rgba(220,38,38,0.7)]
                    transition-all duration-300 transform hover:scale-105'>
                        <DownloadIcon size={18}/>
                        Download CV
                    </button>
                </a>

                <a href='#' className='w-full sm:w-auto'>
                    <button className='w-full sm:w-auto inline-flex
                    items-center justify-center gap-2 px-8 py-3 rounded-full border-2 dark:border-red-500 border-red-600 dark:text-white text-gray-800 font-semibold
                    dark:hover:bg-red-500 hover:bg-red-600 bg-linear-to-r from-red-600 to bg-red-800
                    hover:shadow-[0_0_40px_rgba(220,38,38,0.7)]
                    transition-all duration-300 transform hover:scale-105'>
                        <Mail size={18}/>
                        Hire Me
                    </button>
                </a>

            </div>
        </div>        
                </div>

            </div>

    </section>
  )
}

export default Hero
