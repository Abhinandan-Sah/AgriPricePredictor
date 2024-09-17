import { flaskIndex } from '../../Api';

const Predict = () => {
    const handleClick = async() => {
        // eslint-disable-next-line no-unused-vars
        const result = await flaskIndex({name: "Avi"});
        // console.log(result);
    }
    // const handleClick = async () => {
    //     const data = { key: 'value' }; // Replace with your actual data
    
    //     try {
    //       const response = await fetch('http://localhost:5000/api/index', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //       });
    
    //       const result = await response.json();
    //       console.log(result)
    //     //   setResponseMessage(result.message);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Predict</button>
    </div>
  )
}

export default Predict