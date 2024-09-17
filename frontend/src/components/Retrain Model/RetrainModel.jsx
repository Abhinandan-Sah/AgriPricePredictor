import { retrain_model } from "@/Api";
import { useEffect, useState } from "react";

const RetrainModel = ()=>{

  const [retrainData, setRetrainData] = useState([]);

  const dataa = [{
    "date":"2023-06-01",
    "State":"Maharashtra",
    "City": "Pune",
    "Crop Type":"Wheat",
    "Season": "Kharif",
    "Temperature (°C)":30,
    "Rainfall (mm)":100,
    "Supply Volume (tons)":3500.9,
    "Demand Volume (tons)":1300.6,
    "Transportation Cost (₹/ton)":500,
    "Fertilizer Usage (kg/hectare)":50,
    "Pest Infestation (0-1)": 0.2,
    "Market Competition (0-1)":0.5,
    "Price (₹/ton)":16
},{
        "date":"2023-07-01",
        "State":"Maharashtra",
        "City": "Mumbai",
        "Crop Type":"Rice",
        "Season": "Rabi",
        "Temperature (°C)":28,
        "Rainfall (mm)":120,
        "Supply Volume (tons)":3000.5,
        "Demand Volume (tons)":1500.3,
        "Transportation Cost (₹/ton)":520,
        "Fertilizer Usage (kg/hectare)":45,
        "Pest Infestation (0-1)": 0.3,
        "Market Competition (0-1)":0.6,
        "Price (₹/ton)":18
    }]

  const fetchRetrainData = async () => {
    try {
      const response = await retrain_model(dataa);
      setRetrainData(response);
    } catch (error) {
      console.error('Error fetching stats data:', error);
    }
  };

  useEffect(() => {
    fetchRetrainData();
  }, []);

  

  return (
    <div>
      <button
        className="bg-blue-400 text-black font-semibold px-4 py-2 rounded-lg"
        onClick={fetchRetrainData}
      >
        Categorical Analysis
      </button>
      <h1 className="text-2xl mt-3">{retrainData}</h1>
    </div>
  )
}

export default RetrainModel;
