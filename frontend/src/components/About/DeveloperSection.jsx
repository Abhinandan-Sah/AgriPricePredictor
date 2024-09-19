import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const developers = [
  {
    name: "Abhinandan Sah",
    role: "Lead Developer",
    image: "/placeholder.svg?height=128&width=128",
    bio: "Full-stack developer with a passion for AI and agriculture field.",
    github: "https://github.com/abhinandanshah",
    linkedin: "https://linkedin.com/in/abhinandanshah",
    twitter: "https://twitter.com/abhinandanshah"
  },
  {
    name: "Gaurav Pathak",
    role: "ML Developer",
    image: "/placeholder.svg?height=128&width=128",
    bio: "Machine learning specialist focused on predictive modeling in agriculture.",
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    twitter: "https://twitter.com/johnsmith"
  },
  {
    name: "Gourav Chaudhary",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=128&width=128",
    bio: "Creating intuitive and beautiful interfaces for agricultural tech.",
    github: "https://github.com/alicejohnson",
    linkedin: "https://linkedin.com/in/alicejohnson",
    twitter: "https://twitter.com/alicejohnson"
  },
  {
    name: "Harshvardhan Chandrakar",
    role: "Backend Developer",
    image: "/placeholder.svg?height=128&width=128",
    bio: "Specializing in scalable backend solutions for agri-tech applications.",
    github: "https://github.com/emmadavis",
    linkedin: "https://linkedin.com/in/emmadavis",
    twitter: "https://twitter.com/emmadavis"
  },
  {
    name: "Avinash Kumar Singh",
    role: "Data Scientist",
    image: "/placeholder.svg?height=128&width=128",
    bio: "Analyzing agricultural data to derive meaningful insights and predictions.",
    github: "https://github.com/michaelchen",
    linkedin: "https://linkedin.com/in/michaelchen",
    twitter: "https://twitter.com/michaelchen"
  },
  {
    name: "Kritika Roy",
    role: "IoT Specialist",
    image: "/placeholder.svg?height=128&width=128",
    bio: "Integrating IoT devices with our platform for real-time agricultural monitoring.",
    github: "https://github.com/sarahbrown",
    linkedin: "https://linkedin.com/in/sarahbrown",
    twitter: "https://twitter.com/sarahbrown"
  }
]

export default function DeveloperSection() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.offsetWidth : scrollRef.current.offsetWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current) {
        e.preventDefault()
        scrollRef.current.scrollLeft += e.deltaY
      }
    }

    const currentRef = scrollRef.current
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet the Developers
        </motion.h2>
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {developers.map((dev, index) => (
              <motion.div
                key={dev.name}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4 snap-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-green-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4">
                        <AvatarImage src={dev.image} alt={dev.name} />
                        <AvatarFallback>{dev.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-1">{dev.name}</h3>
                      <p className="text-xs md:text-sm text-green-600 mb-3">{dev.role}</p>
                      <p className="text-center text-gray-600 mb-4 text-sm md:text-base">{dev.bio}</p>
                      <div className="flex space-x-4">
                        <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                          <Github className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                        <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href={dev.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                          <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}