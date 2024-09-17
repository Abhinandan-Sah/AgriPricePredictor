import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
// import GoogleLogin from './GoogleLogin'
import Dashboard from './components/Dashboard/Dashboard'
import PageNotFound from './PageNotFound'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import RefreshHandler from './RefreshHandler'
import Login from './Login'
import GoogleLogin from './GoogleLogin'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PredictForm from './components/Dashboard/PredictForm'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GoogleAuthWrapper= ()=>{
    return(
     <div className='relative'>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}  >
      <div className='absolute top-[77%] left-[55%]'>
      <GoogleLogin  />
      </div>
      <Login />
    </GoogleOAuthProvider>
    </div>

    )
  }

  // eslint-disable-next-line react/prop-types
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <div className='h-screen'>
      <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />

        {/* Crops Prediction Route */}
        <Route path="/crops" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/predict" element={<PrivateRoute element={<PredictForm />} />} />

        {/* If user to another path other than mention above path then it will redirect to dashboard */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
