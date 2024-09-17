
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter } from 'lucide-react'

const developers = [
  {
    name: "Abhinandan Shah",
    role: "Lead Developer",
    image: "",
    bio: "Full-stack developer with a passion for AI and agriculture.",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe"
  },
  {
    name: "John Smith",
    role: "ML Engineer",
    image: "",
    bio: "Machine learning specialist focused on predictive modeling in agriculture.",
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    twitter: "https://twitter.com/johnsmith"
  },
  {
    name: "Alice Johnson",
    role: "UI/UX Designer",
    image: "",
    bio: "Creating intuitive and beautiful interfaces for agricultural tech.",
    github: "https://github.com/alicejohnson",
    linkedin: "https://linkedin.com/in/alicejohnson",
    twitter: "https://twitter.com/alicejohnson"
  }
]

export default function DeveloperSection() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-green-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <Avatar className="w-32 h-32 mb-4">
                      <AvatarImage src={dev.image} alt={dev.name} />
                      <AvatarFallback>{dev.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-green-800 mb-1">{dev.name}</h3>
                    <p className="text-sm text-green-600 mb-3">{dev.role}</p>
                    <p className="text-center text-gray-600 mb-4">{dev.bio}</p>
                    <div className="flex space-x-4">
                      <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={dev.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}