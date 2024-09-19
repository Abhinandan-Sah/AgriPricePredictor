import  { useState } from 'react';
import Layout from '../Layout/Layout';

const RecommendationSystem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [state, setState] = useState('Maharashtra');
  const [city, setCity] = useState('Pune');
  const [cropType, setCropType] = useState('Rice');

  const states = ['Maharashtra', 'Gujarat', 'Rajasthan', 'Punjab'];
  const cities = ['Pune', 'Mumbai', 'Nagpur', 'Aurangabad'];
  const cropTypes = ['Rice', 'Wheat', 'Sugarcane', 'Cotton'];

  const sendRecommendationRequest =  () => {
    // setLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch('recommendation', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ state, city, cropType }),
    //   });
    //   const data = await response.json();
    //   setRecommendation(data);
    // } catch (err) {
    //   console.error('Error:', err);
    //   setError('An error occurred while fetching the recommendation.');
    // } finally {
    //   setLoading(false);
    // }
    setRecommendation(20)
  };

  return (
    <Layout>
      <div className="container mx-auto p-4 pt-6 md:pt-12">
        <h1 className="text-2xl font-bold mb-4">Crop Price Recommendations</h1>
        <form>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="cropType"
              >
                Crop Type
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                id="cropType"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
              >
                {cropTypes.map((cropType) => (
                  <option key={cropType} value={cropType}>
                    {cropType}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={sendRecommendationRequest}
          >
            Get Recommendation
          </button>
        </form>
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {recommendation && (
          <p className="text-gray-600">
            Sell your crop at the predicted price of ₹255 per kg higher than historical average of 230.20
          </p>
        )}
      </div>
    </Layout>
  );
};

export default RecommendationSystem;