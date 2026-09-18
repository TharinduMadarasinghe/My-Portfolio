import { useRef, useEffect } from 'react'
import certificate from '../assets/certificate.jpg'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projectsData = [
  {
    id: 1,
    image: certificate,
    title: 'title 001',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequuntur officia. Nam laborum atque deserunt alias debitis sequi nesciunt dolores quos, placeat, delectus eveniet, nostrum inventore ad officia accusantium illum.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    image: certificate,
    title: 'title 002',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequuntur officia. Nam laborum atque deserunt alias debitis sequi nesciunt dolores quos, placeat, delectus eveniet, nostrum inventore ad officia accusantium illum.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 3,
    image: certificate,
    title: 'title 003',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequuntur officia. Nam laborum atque deserunt alias debitis sequi nesciunt dolores quos, placeat, delectus eveniet, nostrum inventore ad officia accusantium illum.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 4,
    image: certificate,
    title: 'title 004',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequuntur officia. Nam laborum atque deserunt alias debitis sequi nesciunt dolores quos, placeat, delectus eveniet, nostrum inventore ad officia accusantium illum.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 5,
    image: certificate,
    title: 'title 005',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequuntur officia. Nam laborum atque deserunt alias debitis sequi nesciunt dolores quos, placeat, delectus eveniet, nostrum inventore ad officia accusantium illum.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
  },
]

// three copies so the list can loop
const infiniteProjects = [...projectsData, ...projectsData, ...projectsData]

// width of one full set of cards (distance from card 0 to the first card of set 2)
const getSetWidth = (el) =>
  el.children[projectsData.length].offsetLeft - el.children[0].offsetLeft

// distance from one card to the next (card width + gap)
const getCardStep = (el) =>
  el.children[1].offsetLeft - el.children[0].offsetLeft

const Projects = () => {
  const scrollRef = useRef(null)

  // start in the middle set so you can scroll both directions
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollLeft = getSetWidth(el)
  }, [])

  const handleScroll = (direction) => {
    const el = scrollRef.current
    if (!el) return

    const step = getCardStep(el)
    const targetScroll =
      direction === 'left' ? el.scrollLeft - step : el.scrollLeft + step

    el.scrollTo({ left: targetScroll, behavior: 'smooth' })

    // after the smooth scroll finishes, jump back into the middle set
    setTimeout(() => {
      const current = scrollRef.current
      if (!current) return
      const setWidth = getSetWidth(current)
      if (current.scrollLeft >= setWidth * 2 - 2) current.scrollLeft -= setWidth
      else if (current.scrollLeft < setWidth - 2) current.scrollLeft += setWidth
    }, 600)
  }

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="flex items-center justify-between px-4 sm:px-6 mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-gray-300">
          My <span className="text-red-500 dark:text-red-400">Projects</span>
        </h2>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleScroll('left')}
            className="p-3 rounded-full border-2
            transition-all duration-300 dark:text-white text-gray-800
            hover:border-red-500 dark:hover:border-red-500
            hover:bg-red-500/10 dark:hover:bg-red-500/10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-3 rounded-full border-2
            transition-all duration-300 dark:text-white text-gray-800
            hover:border-red-500 dark:hover:border-red-500
            hover:bg-red-500/10 dark:hover:bg-red-500/10"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-hidden w-full px-4">
        {infiniteProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="w-full md:w-[calc(50%-12px)]
            lg:w-[calc(33.333%-16px)] shrink-0 group
            rounded-3xl overflow-hidden border-2 transition-all
            duration-300 dark:border-zinc-800/60 border-gray-100
            dark:bg-zinc-900/40 bg-white
            hover:border-red-500/50 dark:hover:border-red-500/50
            hover:shadow-[0_20px_40px_rgba(220,38,0,0.15)]
            flex flex-col"
          >
            <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform
                duration-500 group-hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t
                from-black/20 to-transparent opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="p-6 flex flex-col justify-between grow min-h-50">
              <div>
                <h3
                  className="text-lg font-bold mb-2
                  dark:text-white text-gray-900
                  group-hover:text-red-500 dark:group-hover:text-red-400
                  transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4
                  dark:text-gray-400 text-gray-600 line-clamp-2"
                >
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium px-2.5
                    py-0.5 rounded-full font-mono
                    dark:bg-red-500/10 bg-red-500/5
                    dark:text-red-300 text-red-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-4
                pt-2 border-t dark:border-zinc-800/80 border-gray-100"
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5
                  text-xs font-medium transition-colors
                  duration-300 dark:text-gray-400
                  text-gray-600 dark:hover:text-white
                  hover:text-black"
                >
                  <FaGithub size={14} /> Code
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5
                  text-xs font-medium transition-colors
                  duration-300 dark:text-gray-400
                  text-gray-600 dark:hover:text-white
                  hover:text-black"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects