import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = localStorage.getItem("user-info");
    const json = JSON.parse(data);
    setUserInfo(json);
  };
  const handleSignout = () => {
    toast.success("Signout Successfully");
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-green-500 sticky">
      <div className="flex justify-between items-center p-4  md:mx-8">
        <div className="flex justify-center items-center gap-3 text-white text-2xl font-bold">
          <img src="/Logo_Main.png" alt="Logo" className="h-8" />
          <h1 className="sm:block md:hidden  lg:block text-lg sm:text-xl font-bold">
            AgriPricePredictor
          </h1>
        </div>
        <div className="hidden md:flex gap-6 text-slate-100 text-lg font-semibold">
          <Link to="">
            <li className="list-none">Home</li>
          </Link>
          <Link to="">
            <li className="list-none">Crop Price</li>
          </Link>
          <Link to="">
            <li className="list-none">Market Price</li>
          </Link>
          <Link to="">
            <li className="list-none">About</li>
          </Link>
        </div>
        <div className="hidden md:flex gap-2">
          <div className="flex items-center">
            <img
              className="rounded-full h-6 w-6"
              src={userInfo?.image}
              alt={userInfo?.name}
            />
            <h2 className="ml-2">{userInfo?.name}</h2>
          </div>
          <button
            className="border-black px-2 bg-orange-400 text-white font-semibold rounded-lg"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-4">
            <button className="text-black" onClick={toggleSidebar}>
              ✕
            </button>
            <ul className="flex flex-col gap-2 text-slate-900 text-lg font-semibold mt-4">
              <Link to="" onClick={toggleSidebar}>
                <li>Home</li>
              </Link>
              <Link to="" onClick={toggleSidebar}>
                <li>Crop Price</li>
              </Link>
              <Link to="" onClick={toggleSidebar}>
                <li>Market Price</li>
              </Link>
              <Link to="" onClick={toggleSidebar}>
                <li>About</li>
              </Link>
            </ul>
            <div className="flex flex-col gap-2 mt-4">
              {userInfo ? (
                <div className="flex items-center">
                  <img
                    className="rounded-full h-6 w-6"
                    src={userInfo?.image}
                    alt={userInfo?.name}
                  />
                  <h2 className="ml-2">{userInfo?.name}</h2>
                  <button
                    className="border-black px-2 bg-orange-400 text-white font-semibold rounded-lg ml-4"
                    onClick={handleSignout}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <button className="border-black px-2 bg-blue-400 text-white font-semibold rounded-lg">
                    Login
                  </button>
                  <button className="border-black px-2 bg-green-400 text-white font-semibold rounded-lg">
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
