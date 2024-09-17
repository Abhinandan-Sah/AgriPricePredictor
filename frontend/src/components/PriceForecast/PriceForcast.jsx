
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { predictPrice } from '@/Api'

const statesAndCities = {
  'punjab': ['ludhiana', 'amritsar'],
  'uttar pradesh': ['lucknow', 'kanpur', 'varanasi'],
  'karnataka': ['bangalore', 'mysore', 'hubli', 'mangalore', 'belgaum', 'davanagere', 'shimoga', 'bellary', 'udupi'],
  'tamil nadu': ['madurai', 'chennai', 'coimbatore'],
  'west bengal': ['kolkata', 'siliguri', 'durgapur'],
  'maharashtra': ['mumbai', 'pune', 'nagpur']
}

const cropTypes = [
  'Wheat', 'Rice', 'Maize', 'Cotton', 'Sugarcane', 'Pulses', 'Millets', 'Barley', 'Groundnut', 'Soybean',
  'Jute', 'Tea', 'Coffee', 'Tobacco', 'Sunflower', 'Sesame', 'Mustard', 'Potato', 'Onion', 'Tomato'
]

export default function PriceForcast() {
  const [formData, setFormData] = useState({
    date: '',
    state: '',
    city: '',
    crop_type: '',
    season: '',
    temperature: '',
    rainfall: '',
    supply_volume: '',
    demand_volume: '',
    transport_cost: '',
    fertilizer_usage: '',
    pest_infestation: '',
    market_competition: '',
  })

  const [availableCities, setAvailableCities] = useState([])
  const [predictedPrice, setPredictedPrice] = useState(null);

  useEffect(() => {
    if (formData.state) {
      setAvailableCities(statesAndCities[formData.state])
      setFormData(prev => ({ ...prev, city: '' }))
    }
  }, [formData.state])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date: date }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formData);
      const response = await predictPrice(formData);
      console.log(response);
      setPredictedPrice(response);
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 text-green-600">Crop Price Prediction</h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="sm:col-span-2">
              <Label htmlFor="date" className="text-sm sm:text-base">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal text-sm sm:text-base ${!formData.date && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, "yyyy-MM-dd") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={handleDateChange}
                    initialFocus
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="state" className="text-sm sm:text-base">State</Label>
              <Select name="state" value={formData.state} onValueChange={(value) => handleSelectChange('state', value)}>
                <SelectTrigger className="text-sm sm:text-base">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(statesAndCities).map((state) => (
                    <SelectItem key={state} value={state} className="text-sm sm:text-base">{state.charAt(0).toUpperCase() + state.slice(1)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="city" className="text-sm sm:text-base">City</Label>
              <Select name="city" value={formData.city} onValueChange={(value) => handleSelectChange('city', value)} disabled={!formData.state}>
                <SelectTrigger className="text-sm sm:text-base">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {availableCities.map((city) => (
                    <SelectItem key={city} value={city} className="text-sm sm:text-base">{city.charAt(0).toUpperCase() + city.slice(1)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="crop_type" className="text-sm sm:text-base">Crop Type</Label>
              <Select name="crop_type" value={formData.crop_type} onValueChange={(value) => handleSelectChange('crop_type', value)}>
                <SelectTrigger className="text-sm sm:text-base">
                  <SelectValue placeholder="Select crop type" />
                </SelectTrigger>
                <SelectContent>
                  {cropTypes.map((crop) => (
                    <SelectItem key={crop} value={crop.toLowerCase()} className="text-sm sm:text-base">{crop}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="season" className="text-sm sm:text-base">Season</Label>
              <Select name="season" value={formData.season} onValueChange={(value) => handleSelectChange('season', value)}>
                <SelectTrigger className="text-sm sm:text-base">
                  <SelectValue placeholder="Select season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kharif" className="text-sm sm:text-base">kharif</SelectItem>
                  <SelectItem value="Rabi" className="text-sm sm:text-base">Rabi</SelectItem>
                  <SelectItem value="Zaid" className="text-sm sm:text-base">Zaid</SelectItem>
                  <SelectItem value="Post-Monsoon" className="text-sm sm:text-base">Post-Monsoon</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="temperature" className="text-sm sm:text-base">Temperature (°C)</Label>
              <Input type="number" step="any" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} required className="text-sm sm:text-base" />
            </div>
            <div>
              <Label htmlFor="rainfall" className="text-sm sm:text-base">Rainfall (mm)</Label>
              <Input type="number" step="any" id="rainfall" name="rainfall" value={formData.rainfall} onChange={handleChange} required className="text-sm sm:text-base" />
            </div>
            <div>
              <Label htmlFor="supply_volume" className="text-sm sm:text-base">Supply Volume (tons)</Label>
              <Input type="number" step="any" id="supply_volume" name="supply_volume" value={formData.supply_volume} onChange={handleChange} required className="text-sm sm:text-base" />
            </div>
            <div>
              <Label htmlFor="demand_volume" className="text-sm sm:text-base">Demand Volume (tons)</Label>
              <Input type="number" step="any" id="demand_volume" name="demand_volume" value={formData.demand_volume} onChange={handleChange} required className="text-sm sm:text-base" />
            </div>
            <div>
              <Label htmlFor="transport_cost" className="text-sm sm:text-base">Transportation Cost (₹/ton)</Label>
              <Input type="number" step="any" id="transport_cost" name="transport_cost" value={formData.transport_cost} onChange={handleChange} required className="text-sm sm:text-base" />
            </div>
            <div>
              <Label htmlFor="fertilizer_usage" className="text-sm sm:text-base">Fertilizer Usage (kg/hectare)</Label>
              <Input type="number" step="any" id="fertilizer_usage" name="fertilizer_usage" value={formData.fertilizer_usage} onChange={handleChange} required className="text-sm sm:text-base" />
            </div>
            <div>
              <Label htmlFor="pest_infestation" className="text-sm sm:text-base">Pest Infestation (0-1)</Label>
              <Input type="number" step="0.01" min="0" max="1" id="pest_infestation" name="pest_infestation" value={formData.pest_infestation} onChange={handleChange} required className="text-sm sm:text-base" />
            </div>
            <div>
              <Label htmlFor="market_competition" className="text-sm sm:text-base">Market Competition (0-1)</Label>
              <Input type="number" step="0.01" min="0" max="1" id="market_competition" name="market_competition" value={formData.market_competition} onChange={handleChange} required className="text-sm sm:text-base" />
            </div>
          </div>
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base py-2 sm:py-3">
            Predict Crop Price
          </Button>
        </form>
          
          {/* {predictedPrice !== null && <PricePredictResult predicted_price={predictedPrice} />} */}
      {predictedPrice !== null && 
      <div>
      <h2 className="text-2xl font-bold mb-2">Price Prediction Result</h2>
      <p className="text-gray-600 mb-4">The predicted price of the crop is {predictedPrice?.predicted_price}</p>
  </div>
       }

      </div>
    </div>
  )
}