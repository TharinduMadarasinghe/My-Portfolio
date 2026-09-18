import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Award, Calendar, ExternalLink } from 'lucide-react'

const Certificates = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    })
  }, [])

  const certificates = [
    {
      id: 1,
      title: 'Frontend Development',
      issuer: 'Meta',
      date: '2025',
      credentialUrl: '#'
    },
    {
      id: 2,
      title: 'Frontend Development',
      issuer: 'Meta',
      date: '2024',
      credentialUrl: '#'
    },
    {
      id: 3,
      title: 'Frontend Development',
      issuer: 'Meta',
      date: '2023',
      credentialUrl: '#'
    },
    {
      id: 4,
      title: 'Frontend Development',
      issuer: 'Meta',
      date: '2020',
      credentialUrl: '#'
    }
  ]

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center
      relative overflow-hidden py-20"
    >

      <div className="container mx-auto px-4 sm:px-8 lg:px-14">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-12">

          {/* Badge */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-1.5
            rounded-full bg-red-500/10
            border border-red-500/20 mb-4"
          >

            <span
              className="w-2 h-2 rounded-full
              bg-red-500 animate-pulse"
            ></span>

            <span
              className="text-xs sm:text-sm font-semibold
              tracking-wider dark:text-red-300 text-red-600"
            >
              Certificates
            </span>

          </div>


          {/* Heading */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl lg:text-5xl
            font-bold dark:text-gray-300"
          >
            My{' '}
            <span className="text-red-500 dark:text-red-400">
              Certificates
            </span>
          </h2>

        </div>


        {/* ================= CERTIFICATE LIST ================= */}

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-3xl mx-auto
          border-t border-b
          border-gray-200/50
          dark:border-zinc-800/50"
        >

          {certificates.map((cert, index) => (

            <div
              key={cert.id}

              data-aos="fade-up"
              data-aos-delay={300 + index * 100}

              className={`
                px-4 sm:px-6
                py-5
                flex items-center
                justify-between
                gap-4
                group
                transition-colors
                duration-300
                hover:bg-red-500/5
                dark:hover:bg-red-500/10

                ${
                  index < certificates.length - 1
                    ? 'border-b border-gray-200/50 dark:border-zinc-800/50'
                    : ''
                }
              `}
            >

              {/* ================= LEFT SIDE ================= */}

              <div className="flex items-center gap-4 min-w-0">

                {/* Award icon */}
                <div
                  className="p-2 rounded-xl
                  bg-red-500/10
                  text-red-600
                  dark:text-red-400
                  group-hover:scale-110
                  transition-transform
                  duration-300
                  shrink-0"
                >
                  <Award size={20} />
                </div>


                {/* Certificate information */}
                <div className="min-w-0">

                  <h3
                    className="font-bold text-base
                    text-gray-900
                    dark:text-white
                    group-hover:text-red-600
                    dark:group-hover:text-red-400
                    transition-colors"
                  >
                    {cert.title}
                  </h3>

                  <span
                    className="text-sm font-medium
                    text-gray-600
                    dark:text-zinc-400
                    block mt-0.5"
                  >
                    {cert.issuer}
                  </span>

                </div>

              </div>


              {/* ================= RIGHT SIDE ================= */}

              <div
                className="flex flex-col
                items-end
                gap-1.5
                shrink-0"
              >

                {/* Date */}
                <div
                  className="flex items-center
                  gap-1.5
                  text-xs
                  text-gray-500
                  dark:text-zinc-400"
                >
                  <Calendar size={13} />

                  <span>
                    {cert.date}
                  </span>
                </div>


                {/* Verify */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="inline-flex
                  items-center
                  gap-1
                  text-xs
                  font-semibold
                  text-green-600
                  dark:text-green-400
                  hover:underline"
                >
                  Verify

                  <ExternalLink size={11} />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certificates