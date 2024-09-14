import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Dashboard = () => {
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
      toast.success("Signout Successfully");
      localStorage.removeItem('user-info');
      navigate("/login")
    })
  return (
    <div >
      <Navbar userInfo={userInfo} handleSignout={handleSignout} />

    </div>
  )
}

export default Dashboard