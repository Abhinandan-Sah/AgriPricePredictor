import  { useEffect, useState } from 'react';
import { heatmaps } from '../../Api';

const Heatmaps = () => {
  const [heatmapData, setHeatmapData] = useState({
    heatmap_price: '',
    heatmap_transport_cost: ''
  });

  const fetchHeatmapData = async () => {
    try {
      const response = await heatmaps();
      setHeatmapData(response);
    } catch (error) {
      console.error('Error fetching heatmap data:', error);
    }
  };

  useEffect(() => {
    fetchHeatmapData();
  }, []);

  return (
    <div>
        {/* <button
        className="bg-blue-400 text-black font-semibold px-4 py-2 rounded-lg"
        onClick={fetchHeatmapData}
      >
        Categorical Analysis
      </button> */}
      <div>
        {heatmapData.heatmap_price && (
          <img
            src={heatmapData.heatmap_price}
            alt="Price Heatmap"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
      <div>
        {heatmapData.heatmap_transport_cost && (
          <img
            src={heatmapData.heatmap_transport_cost}
            alt="Transportation Cost Heatmap"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
    </div>
  );
};

export default Heatmaps;