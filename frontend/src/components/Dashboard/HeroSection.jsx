'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const carouselItems = [
  {
    image: "https://res.cloudinary.com/dl4rdt9w0/image/upload/v1726329891/AgriPricePredictor/snmrhfcs4yhpyuhh3won.png"
  },
  {
    image: "https://media.istockphoto.com/id/1557875324/photo/wheat-grain-in-a-hand-after-good-harvest-of-successful-farmer.jpg?s=1024x1024&w=is&k=20&c=YVh5klMmYkKZ50tbonKDO_HCJsQCy80o8qLzuoVa2hY="
  },
  {
    image: "https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg"
  }
]

const cards = [
  {
    title: "Price Monitoring",
    description: "Daily tracking of 22 essential food commodities"
  },
  {
    title: "Buffer Stock Management",
    description: "Strategic interventions to stabilize market prices"
  },
  {
    title: "Advanced Analytics",
    description: "ARIMA models for price forecasting and trend analysis"
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length)
  }

  const scrollToPredictionForm = () => {
    const formElement = document.getElementById('crop-price-prediction-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-blue-50 py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-8 sm:mb-12 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-green-800 whitespace-nowrap"
            animate={{ x: [0, -100, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 20,
              ease: "linear"
            }}
          >
            AgriPrice AI: Predicting the Future of Agriculture
          </motion.h1>
        </motion.div>

        <div className="relative h-[200px] sm:h-[300px] md:h-[400px] mb-8 sm:mb-12 overflow-hidden rounded-lg shadow-xl">
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </motion.div>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-full">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-green-600 text-white hover:bg-green-700 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            onClick={scrollToPredictionForm}
          >
            Explore Price Predictions
          </Button>
        </motion.div>
      </div>
    </section>
  )
}