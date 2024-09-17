import { useState } from 'react';
import { predictPrice } from '../../Api';
import Layout from '../Layout/Layout';

function PredictForm() {
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
    
  });
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await predictPrice(formData);
      console.log(response);
      setPredictedPrice(response);
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Layout>
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold mb-4">Crop Price Prediction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Date:
          </label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="crop_type" className="block text-sm font-medium text-gray-700">
            Crop Type:
          </label>
          <input
            type="text"
            id="crop_type"
            name="crop_type"
            value={formData.crop_type}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="season" className="block text-sm font-medium text-gray-700">
            Season:
          </label>
          <input
            type="text"
            id="season"
            name="season"
            value={formData.season}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">
            Temperature (°C):
          </label>
          <input
            type="number"
            step="any"
            id="temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="rainfall" className="block text-sm font-medium text-gray-700">
            Rainfall (mm):
          </label>
          <input
            type="number"
            step="any"
            id="rainfall"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="supply_volume" className="block text-sm font-medium text-gray-700">
            Supply Volume (tons):
          </label>
          <input
            type="number"
            step="any"
            id="supply_volume"
            name="supply_volume"
            value={formData.supply_volume}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="demand_volume" className="block text-sm font-medium text-gray-700">
            Demand Volume (tons):
          </label>
          <input
            type="number"
            step="any"
            id="demand_volume"
            name="demand_volume"
            value={formData.demand_volume}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="transport_cost" className="block text-sm font-medium text-gray-700">
            Transportation Cost (₹/ton):
          </label>
          <input
            type="number"
            step="any"
            id="transport_cost"
            name="transport_cost"
            value={formData.transport_cost}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="fertilizer_usage" className="block text-sm font-medium text-gray-700">
            Fertilizer Usage (kg/hectare):
          </label>
          <input
            type="number"
            step="any"
            id="fertilizer_usage"
            name="fertilizer_usage"
            value={formData.fertilizer_usage}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="pest_infestation" className="block text-sm font-medium text-gray-700">
            Pest Infestation (0-1):
          </label>
          <input
            type="number"
            step="any"
            id="pest_infestation"
            name="pest_infestation"
            value={formData.pest_infestation}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="market_competition" className="block text-sm font-medium text-gray-700">
            Market Competition (0-1):
          </label>
          <input
            type="number"
            step="any"
            id="market_competition"
            name="market_competition"
            value={formData.market_competition}
            onChange={handleChange}
            required
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Predict Crop Price
        </button>
      </form>
      {/* {predictedPrice !== null && <PricePredictResult predicted_price={predictedPrice} />} */}
      {predictedPrice !== null && 
      <div>
      <h2 className="text-2xl font-bold mb-2">Price Prediction Result</h2>
      <p className="text-gray-600 mb-4">The predicted price of the crop is {predictedPrice?.predicted_price}</p>
  </div>
       }
    </div>
    </Layout>
  );
}

export default PredictForm;


// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { predictPrice } from '../../Api'

// export default function PredictForm() {
//   const [formData, setFormData] = useState({
//     state: '',
//     city: '',
//     crop_type: '',
//     season: '',
//     temperature: '',
//     rainfall: '',
//     supply_volume: '',
//     demand_volume: '',
//     transport_cost: '',
//     fertilizer_usage: '',
//     pest_infestation: '',
//     market_competition: '',
//     year: '',
//     month: ''
//   })
//   const [predictedPrice, setPredictedPrice] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async(e) => {
//     e.preventDefault()
//     // Here you would typically send the data to your backend
//     try {
//             console.log(formData);
//             const response = await predictPrice(formData);
//             console.log(response);
//             setPredictedPrice(response);
//             // Handle the response as needed
//           } catch (error) {
//             console.error('Error submitting form:', error);
//           }
//     console.log(formData)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full">
//         <h1 className="text-3xl font-bold text-center mb-6 text-green-600">Crop Price Prediction</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label htmlFor="state">State</Label>
//               <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="city">City</Label>
//               <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="crop_type">Crop Type</Label>
//               <Input id="crop_type" name="crop_type" value={formData.crop_type} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="season">Season</Label>
//               <Select name="season" value={formData.season} onValueChange={(value) => setFormData(prev => ({ ...prev, season: value }))}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select season" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="spring">Spring</SelectItem>
//                   <SelectItem value="summer">Summer</SelectItem>
//                   <SelectItem value="autumn">Autumn</SelectItem>
//                   <SelectItem value="winter">Winter</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label htmlFor="temperature">Temperature (°C)</Label>
//               <Input type="number" step="any" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="rainfall">Rainfall (mm)</Label>
//               <Input type="number" step="any" id="rainfall" name="rainfall" value={formData.rainfall} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="supply_volume">Supply Volume (tons)</Label>
//               <Input type="number" step="any" id="supply_volume" name="supply_volume" value={formData.supply_volume} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="demand_volume">Demand Volume (tons)</Label>
//               <Input type="number" step="any" id="demand_volume" name="demand_volume" value={formData.demand_volume} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="transport_cost">Transportation Cost (₹/ton)</Label>
//               <Input type="number" step="any" id="transport_cost" name="transport_cost" value={formData.transport_cost} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="fertilizer_usage">Fertilizer Usage (kg/hectare)</Label>
//               <Input type="number" step="any" id="fertilizer_usage" name="fertilizer_usage" value={formData.fertilizer_usage} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="pest_infestation">Pest Infestation (0-1)</Label>
//               <Input type="number" step="0.01" min="0" max="1" id="pest_infestation" name="pest_infestation" value={formData.pest_infestation} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="market_competition">Market Competition (0-1)</Label>
//               <Input type="number" step="0.01" min="0" max="1" id="market_competition" name="market_competition" value={formData.market_competition} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="year">Year</Label>
//               <Input type="number" id="year" name="year" value={formData.year} onChange={handleChange} required />
//             </div>
//             <div>
//               <Label htmlFor="month">Month</Label>
//               <Select name="month" value={formData.month} onValueChange={(value) => setFormData(prev => ({ ...prev, month: value }))}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select month" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
//                     <SelectItem key={month} value={month.toLowerCase()}>{month}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//           <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
//             Predict Crop Price
//           </Button>
//         </form>
//       </div>
//       {predictedPrice !== null && 
//       <div>
//       <h2 className="text-2xl font-bold mb-2">Price Prediction Result</h2>
//       <p className="text-gray-600 mb-4">The predicted price of the crop is {predictedPrice?.predicted_price}</p>
//   </div>
//        }
//     </div>
//   )
// }