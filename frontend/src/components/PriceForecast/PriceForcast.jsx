import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { predictPrice } from "@/Api";
import Layout from "../Layout/Layout";
import GraphPrediction from "./GraphPrediction";


const statesAndCities = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Punjab: ["Ludhiana", "Amritsar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
  Karnataka: ["Bangalore", "Mysore"],
  "Tamil Nadu": ["Chennai", "Madurai"],
  "West Bengal": ["Kolkata", "Siliguri"],
};

const states = Object.keys(statesAndCities);
const cropTypes = [
  "Wheat",
  "Rice",
  "Maize",
  "Cotton",
  "Sugarcane",
  "Tomato",
  "Onion",
  "Potato",
  "Coffee",
  "Jute",
  "Mustard",
  "Sesame",
  "Sunflower",
  "Tobacco",
  "Soybean",
];
const seasons = ["Kharif", "Rabi", "Zaid", "Post-Monsoon"];

export default function PriceForcast() {
  const [formData, setFormData] = useState({
    date: format(new Date(), "yyyy-mm-dd"),
    state: "",
    city: "",
    crop_type: "",
    season: "",
    temperature: "",
    rainfall: "",
    supply_volume: "",
    demand_volume: "",
    transport_cost: "",
    fertilizer_usage: "",
    pest_infestation: "",
    market_competition: "",
  });
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    if (name === "state") {
      setFormData((prev) => ({ ...prev, [name]: value, city: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      temperature: parseFloat(formData.temperature),
      rainfall: parseFloat(formData.rainfall),
      supply_volume: parseFloat(formData.supply_volume),
      demand_volume: parseFloat(formData.demand_volume),
      transport_cost: parseFloat(formData.transport_cost),
      fertilizer_usage: parseFloat(formData.fertilizer_usage),
      pest_infestation: parseFloat(formData.pest_infestation),
      market_competition: parseFloat(formData.market_competition),
    };
    console.log(formattedData);
    try {
      console.log(formattedData);
      const response = await predictPrice(formattedData);
      setPredictedPrice(response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-2 text-green-600">
          Price Forecasting Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-full">
              <Label htmlFor="date">Date</Label>
              <div className="relative">
                <Input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10"
                  required
                />
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Select
                name="state"
                value={formData.state}
                onValueChange={(value) => handleSelectChange("state", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Select
                name="city"
                value={formData.city}
                onValueChange={(value) => handleSelectChange("city", value)}
                disabled={!formData.state}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {formData.state &&
                    statesAndCities[formData.state].map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="crop_type">Crop Type</Label>
              <Select
                name="crop_type"
                value={formData.crop_type}
                onValueChange={(value) =>
                  handleSelectChange("crop_type", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select crop type" />
                </SelectTrigger>
                <SelectContent>
                  {cropTypes.map((crop) => (
                    <SelectItem key={crop} value={crop}>
                      {crop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="season">Season</Label>
              <Select
                name="season"
                value={formData.season}
                onValueChange={(value) => handleSelectChange("season", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select season" />
                </SelectTrigger>
                <SelectContent>
                  {seasons.map((season) => (
                    <SelectItem key={season} value={season}>
                      {season}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="temperature">Temperature (°C)</Label>
              <Input
                type="text"
                step="0.1"
                id="temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="rainfall">Rainfall (mm)</Label>
              <Input
                type="text"
                step="0.1"
                id="rainfall"
                name="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="supply_volume">Supply Volume</Label>
              <Input
                type="text"
                step="0.01"
                id="supply_volume"
                name="supply_volume"
                value={formData.supply_volume}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="demand_volume">Demand Volume</Label>
              <Input
                type="text"
                step="0.01"
                id="demand_volume"
                name="demand_volume"
                value={formData.demand_volume}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="transport_cost">Transport Cost</Label>
              <Input
                type="text"
                step="0.01"
                id="transport_cost"
                name="transport_cost"
                value={formData.transport_cost}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="fertilizer_usage">Fertilizer Usage</Label>
              <Input
                type="text"
                step="0.01"
                id="fertilizer_usage"
                name="fertilizer_usage"
                value={formData.fertilizer_usage}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="pest_infestation">Pest Infestation (0-1)</Label>
              <Input
                type="text"
                step="0.01"
                min="0"
                max="1"
                id="pest_infestation"
                name="pest_infestation"
                value={formData.pest_infestation}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="market_competition">
                Market Competition (0-1)
              </Label>
              <Input
                type="text"
                step="0.01"
                min="0"
                max="1"
                id="market_competition"
                name="market_competition"
                value={formData.market_competition}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            Submit Data
          </Button>
        </form>
        {predictedPrice !== null && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Price Prediction Result</h2>
            <p className="text-gray-600 mb-4">
              The predicted price of the crop is{" "}
              Rs{" "}{predictedPrice?.predicted_price}{" "}per{" "}kg
            </p>
            <p>{predictedPrice?.fig}</p>
            <GraphPrediction predictedPrice={predictedPrice?.predicted_price} />
            <img src={`data:image/png;base64,${predictedPrice?.graph}`} alt="Predicted Price Over Time" />
          </div>
          
        )}
      </div>
    </div>
    </Layout>
  
  );
}