import  { useEffect, useState } from 'react';
import { stats } from '../../Api';

const Stats = () => {
  const [statsData, setStatsData] = useState({});

  const fetchStatsData = async () => {
    try {
      const response = await stats();
      setStatsData(response);
    } catch (error) {
      console.error('Error fetching stats data:', error);
    }
  };

  useEffect(() => {
    fetchStatsData();
  }, []);

  return (
    <div>
    <h1>Statistics</h1>
    <button
      className="bg-blue-400 text-black font-semibold px-4 py-2 rounded-lg"
      onClick={fetchStatsData}
    >
      Refresh Stats
    </button>
    <h1>Summary Statistics</h1>
    <div
      className="mt-4 border border-black"
      dangerouslySetInnerHTML={{ __html: statsData }} // Set the inner HTML
    />
  </div>
  );
};

export default Stats;