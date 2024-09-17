import { useEffect, useState } from "react";
import { bivariate_analysis } from "../../Api";
import Shimmer from "./Shimmer"; // Adjust the import path as necessary

const BivariateAnalysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    setLoading(true);
    const result = await bivariate_analysis();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className=" w-full">
      {/* <button
        className="bg-blue-400 text-black font-semibold px-4 py-2 rounded-lg"
        onClick={handleClick}
      >
        bivariate_analysis
      </button> */}
      {loading ? (
        <Shimmer />
      ) : (
        data !== null && (
          <div className="flex gap-3 flex-wrap w-full">
          <img
            src={data?.supply_vs_price}
            alt="Supply vs Price Scatter Plot"
            style={{ width: "500px", height: "auto" }}
          />
          <img
            src={data?.demand_vs_price}
            alt="Demand vs Price Scatter Plot"
            style={{ width: "500px", height: "auto" }}
          />
          </div>
        )
      )}
    </div>
  );
};

export default BivariateAnalysis;