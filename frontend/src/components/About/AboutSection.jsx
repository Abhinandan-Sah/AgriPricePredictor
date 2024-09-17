import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart2, Brain, LineChart, Zap } from 'lucide-react'

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800"
          {...fadeInUp}
        >
          About AgriPrice AI
        </motion.h2>

        <Tabs defaultValue="problem" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
            <TabsTrigger value="problem" className="bg-green-100 data-[state=active]:bg-green-600 data-[state=active]:text-white">Problem</TabsTrigger>
            <TabsTrigger value="solution" className="bg-green-100 data-[state=active]:bg-green-600 data-[state=active]:text-white">Solution</TabsTrigger>
            <TabsTrigger value="working" className="bg-green-100 data-[state=active]:bg-green-600 data-[state=active]:text-white">How It Works</TabsTrigger>
            <TabsTrigger value="outcome" className="bg-green-100 data-[state=active]:bg-green-600 data-[state=active]:text-white">Outcomes</TabsTrigger>
          </TabsList>
          <TabsContent value="problem">
            <Card className="border-green-200 bg-white">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-green-800">The Challenge in Agricultural Pricing</CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-gray-700 mb-4">
                  Agriculture, a cornerstone of many economies, faces a significant challenge: the unpredictability of commodity prices. This volatility affects farmers' incomes and consumers' purchasing power, creating a ripple effect throughout the agricultural sector and beyond.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Fluctuating prices of essential commodities like pulses and vegetables</li>
                  <li>Lack of effective price prediction systems</li>
                  <li>Vulnerability to losses for farmers and stakeholders</li>
                  <li>Difficulty in making data-driven decisions about pricing and stock management</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="solution">
            <Card className="border-green-200 bg-white">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-green-800">Our Innovative Solution</CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-gray-700 mb-4">
                  AgriPrice AI introduces an advanced AI-ML-based price prediction model for agri-horticultural commodities. Our solution leverages cutting-edge technology to address the challenges in agricultural pricing.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Accurate forecasting of future prices for essential commodities</li>
                  <li>Integration of real-time market data and historical prices</li>
                  <li>Decision support system for strategic planning</li>
                  <li>Stabilization of markets and reduction of price volatility</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="working">
            <Card className="border-green-200 bg-white">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-green-800">How AgriPrice AI Works</CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <BarChart2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-green-700">Data Collection & Preprocessing</h4>
                      <p className="text-sm text-gray-700">Gathering and cleaning historical price data, weather conditions, and market information.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Brain className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-green-700">Feature Engineering & Model Training</h4>
                      <p className="text-sm text-gray-700">Extracting key factors and training Hybrid ML Models i.e Integration of Multiple Independent Models.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <LineChart className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-green-700">Price Prediction</h4>
                      <p className="text-sm text-gray-700">Generating accurate forecasts based on historical trends and current market conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-green-700">Visualization & Decision Support</h4>
                      <p className="text-sm text-gray-700">Presenting insights through interactive graphs and actionable recommendations.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="outcome">
            <Card className="border-green-200 bg-white">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-green-800">Impactful Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <ul className="space-y-3">
                  {[
                    "Accurate and reliable price predictions for essential commodities",
                    "Improved market stability and reduced price volatility",
                    "Empowered decision-making for farmers and government agencies",
                    "Optimized supply chain management",
                    "Adaptive system with real-time data integration capabilities"
                  ].map((outcome, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

