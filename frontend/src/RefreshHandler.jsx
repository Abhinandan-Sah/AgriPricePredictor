import  { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const RefreshHandler = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        const data = localStorage.getItem('user-info')
        const token = JSON.parse(data)?.token;
        if(token){
            setIsAuthenticated(true);
            if(location.pathname === '/' || location.pathname ==='/login'){
                navigate('/dashboard', {replace: false});
            }
            
        }
    }, [location, navigate, setIsAuthenticated]);

  return null
}

export default RefreshHandler



