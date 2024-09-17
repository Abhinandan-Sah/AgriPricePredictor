import { useState } from 'react';
import Layout from '../Layout/Layout';
import Stats from './Stats';
import BivariateAnalysis from './BivariateAnalysis';
import CategoricalAnalysis from './CategoricalAnalysis';
import Heatmaps from './Heatmaps';
import HeroSection from './HeroSection';
import PriceForcast from '../PriceForecast/PriceForcast';

const Dashboard = () => {
  const components = {
    
    Stats: <Stats />,
    CategoricalAnalysis: <CategoricalAnalysis />,
    Heatmaps: <Heatmaps />,
    Bivaria: <BivariateAnalysis />,
  };
  
 
    const [selectedComponent, setSelectedComponent] = useState('HeroSection');
  
    const handleComponentChange = (event) => {
      setSelectedComponent(event.target.value);
    };
  
  return (
    <Layout>
      <HeroSection />
      <PriceForcast />
      {/* <PredictForm /> */}
        {/* <Stats /> */}
        <div className="mb-4">
        <label htmlFor="component-select" className="mr-2">Select Component:</label>
        <select
          id="component-select"
          value={selectedComponent}
          onChange={handleComponentChange}
          className="p-2 border border-gray-300 rounded"
        >
          {Object.keys(components).map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
      </div>
      {components[selectedComponent]}
          </Layout>
  )
}

export default Dashboard;
