import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();
  
    useEffect(()=>{
      fetchData();
    },[])
  
    const fetchData = async()=>{
      const data = localStorage.getItem('user-info');
      const json = JSON.parse(data);
      setUserInfo(json);
    }
    const handleSignout = (()=>{
      localStorage.removeItem('user-info');
      navigate("/login")
    })
  return (
    <div className="bg-green-500 w-full">
        <div className="py-4 flex justify-around items-center">
        <div className="flex gap-2">
            <img className="w-8 h-8" src="/Logo_Main.png" alt="Logo" />
            <h1 className="text-xl font-bold">AgriPricePredictor</h1>
        </div>
        <div>
            <ul className="flex gap-2 text-slate-100 text-lg font-semibold">
                <Link to=""><li>Home</li></Link>
                <Link to=""><li>Crop Price</li></Link>
                <Link to=""><li>Market Price</li></Link>
                <Link to=""><li>About</li></Link>
            </ul>
        </div>

        <div className="flex gap-2">
            <div className="flex">
            <img className=" rounded-full h-6 w-6" src={userInfo?.image} alt={userInfo?.name} />
            <h2>{userInfo?.name}</h2>
            </div>
            <button className="border-black px-2 bg-orange-400 text-white font-semibold rounded-lg" onClick={handleSignout}>Sign Out</button> 
        </div>
            
        </div>
    </div>
  )
}

export default Navbar