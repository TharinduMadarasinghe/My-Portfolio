import React, { useState} from 'react'
import {
    FaHome,
    FaUser,
    FaCode,
    FaCertificate,
    FaProjectDiagram,
    FaEnvelope,
} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {Sun} from 'lucide-react'
import {Moon} from 'lucide-react'


const Navbar = ({darkMode, toggleDarkMode}) => {
    const [activeTab, setActiveTab] = useState('Home')
    const navItems = 
       [ {name: 'Home', Link: '#home', icon: FaHome},
        {name: 'About', Link: '#about', icon: FaUser},
        {name: 'Skills', Link: '#skills', icon: FaCode},
        {name: 'Certificates', Link: '#certificates', icon: FaCertificate},
        {name: 'Project', Link: '#projects', icon: FaProjectDiagram},
        {name: 'Contact', Link: '#home', icon: FaEnvelope},
    ]
    
  return (
    <div className='fixed z-50 bottom-0 left-0 right-0 flex justify-center'>
      <motion.nav
       initial = {{ y: 100}}
        animate = {{ y: 0}}
        transition = {{duration: 0.5, ease:'easeOut'}}
        className = 'relative w-[95%] max-w-4xl mb-4'
        >
        
        <div className='fixed bottom-4 left-1/2 -translate-x-1/2 w-[75%]
        bg-linear-to-r from-red-600 to-red-800 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 px-3 py-2'>
          <div className='absolute -top-5 right-3'>
            <motion.button
              whileHover={{scale: 1.1}}
              whileTap={{ scale: 0.9}}
              onClick={toggleDarkMode}
              className='p-2 rounded-full bg-gray-900 dark:bg-gray-100 transition-colors
              backdrop-blur-sm'            
            >
              {darkMode ? (
                <Sun className='w-5 h-5 text-black'/>
              ) : (
                <Moon className ='w-5 h-5 text-white' />
              )}
            </motion.button>

          </div>
          <div className='flex items-center justify-around gap-1'>
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name
              return (
                <motion.a
                  key = {item.name}
                  href = {item.Link}
                  onClick= {() => setActiveTab(item.name)}
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className='flex flex-col items-center gap-0.5
                  py-1.5 px-2 relative group flex-1'>
                    {isActive && (
                      <motion.div
                      layoutId='activeTab'
                      className='absolute -top-2 left-1/2
                      -translate-x-1/2 w-6 h-1 bg-white rounded-full'
                      transition={{duration: 0.3}}></motion.div>
                    )}
                    <Icon
                    className={`w-5 h-5 transition-all
                    duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 group-hover:text-white'
                    }`} />

                    <span className={`text-[10px] font-medium transaction-all
                      duration-300 ${
                        isActive
                        ? 'text-white'
                        : 'text-white/60 group-hover:text-white'
                      }`}>
                        {item.name}
                    </span>
                </motion.a>
              )
            })}

          </div>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar
