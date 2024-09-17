'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Wheat, Menu, X, Home, TrendingUp, ShoppingCart, Info } from "lucide-react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const [userInfo, setUserInfo] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = localStorage.getItem("user-info")
    const json = JSON.parse(data)
    setUserInfo(json)
  }

  const handleSignout = () => {
    toast.success("Signout Successfully")
    localStorage.removeItem("user-info")
    navigate("/login")
  }

  return (
    <nav className="bg-green-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Wheat className="h-8 w-8 text-white mr-2" />
              <span className="text-white text-lg font-bold hidden sm:block">AgriPricePredictor</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/dashboard" icon={<Home className="w-4 h-4 mr-1" />}>Home</NavLink>
              <NavLink href="/predict" icon={<TrendingUp className="w-4 h-4 mr-1" />}>Price Forecast</NavLink>
              <NavLink href="/visualization" icon={<ShoppingCart className="w-4 h-4 mr-1" />}>Visualization</NavLink>
              <NavLink href="/about" icon={<Info className="w-4 h-4 mr-1" />}>About</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            {userInfo ? (
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={userInfo.image} alt={userInfo.name} />
                  <AvatarFallback>{userInfo.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-white mr-4">{userInfo.name}</span>
                <Button variant="destructive" onClick={handleSignout}>Sign Out</Button>
              </div>
            ) : (
              <div className="space-x-2">
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-white">
                  {/* <Menu className="h-6 w-6" /> */} <div className="h-5 w-5">☰</div>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link href="/dashboard" className="flex items-center">
                    <Wheat className="h-6 w-6 mr-2" />
                    <span className="text-lg font-bold">AgriPricePredictor</span>
                  </Link>
                  <Link href="/dashboard" className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Link>
                  <Link href="/predict" className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Price Forecast
                  </Link>
                  <Link href="/visualization" className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Visualization
                  </Link>
                  <Link href="/about" className="flex items-center px-2 py-1 rounded-md hover:bg-gray-100">
                    <Info className="w-4 h-4 mr-2" />
                    About
                  </Link>
                  {userInfo ? (
                    <div className="mt-4">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={userInfo.image} alt={userInfo.name} />
                          <AvatarFallback>{userInfo.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{userInfo.name}</span>
                      </div>
                      <Button variant="destructive" onClick={handleSignout} className="w-full">Sign Out</Button>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-2">
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild className="w-full">
                        <Link href="/register">Sign Up</Link>
                      </Button>
                    </div>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

// eslint-disable-next-line react/prop-types
function NavLink({ href, children, icon }) {
  return (
    <Link to={href} className="text-gray-100 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
      {icon}
      {children}
    </Link>
  )
}