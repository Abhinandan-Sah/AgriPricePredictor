// import { useEffect, useState } from "react";
// import { categorical_analysis } from "../../Api";
// import Shimmer from "./Shimmer";

// const CategoricalAnalysis = () => {
//   const [plotUrls, setPlotUrls] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleClick = async () => {
//     try {
//       setLoading(true);
//       const result = await categorical_analysis();
//       plotUrls(result);
//       setLoading(false);

//       setPlotUrls(result.plot_urls);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     handleClick();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <Shimmer />
//       ) : (
//         plotUrls !== null && (
//           {plotUrls.map((url, index) => (
//             <img
//               key={index}
//               src={url}
//               alt={`Plot ${index}`}
//               style={{ width: "800px", height: "auto" }}
//             />
//           ))}
//       <div>

//       </div>
//     </div>
//   );
// };

// export default CategoricalAnalysis;

import { useEffect, useState } from "react";
import { categorical_analysis } from "../../Api";
import Shimmer from "./Shimmer";

const CategoricalAnalysis = () => {
  const [plotUrls, setPlotUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    try {
      setLoading(true);
      const result = await categorical_analysis();
      setPlotUrls(result.plot_urls);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="w-[80%] flex justify-center items-center flex-col">
      {loading ? (
        <Shimmer  />
      ) : (
        plotUrls !== null &&
        plotUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Plot ${index}`}
            style={{ width: "800px", height: "auto" }}
          />
        ))
      )}
    </div>
  );
};

export default CategoricalAnalysis;
