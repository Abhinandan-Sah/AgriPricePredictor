const HeroSection = () => {
  return (
    // <div className="relative w-full h-64">
      
      <div className="relative w-full p-6 bg-white bg-opacity-75 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Welcome to the Price Prediction Platform</h1>
        <p className="text-gray-600 mb-4">Get the latest updates on commodity prices, market interventions, and more.</p>
        <div className="relative w-full h-64">
        <img 
        src="https://res.cloudinary.com/dl4rdt9w0/image/upload/v1726329891/AgriPricePredictor/snmrhfcs4yhpyuhh3won.png" 
        alt="Image of wheat field" 
        className="absolute inset-0 w-full h-full object-cover"
      />
        </div>
      </div>
    // </div>
  )
}

export default HeroSection