import { useEffect, useState } from "react";
import { categorical_analysis } from "../../Api";

const CategoricalAnalysis = () => {
  const [plotUrls, setPlotUrls] = useState([]);

  const handleClick = async () => {
    try {
      const result = await categorical_analysis();
      setPlotUrls(result.plot_urls);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      {/* <button
        className="bg-blue-400 text-black font-semibold px-4 py-2 rounded-lg"
        onClick={handleClick}
      >
        Categorical Analysis
      </button> */}
      <div>
        {plotUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Plot ${index}`}
            style={{ width: "800px", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoricalAnalysis;