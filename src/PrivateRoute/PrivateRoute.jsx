import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(user){
        return children
    }
    if(loading){
       return  <span className="loading loading-ring loading-xs"></span>
        
       
    }
    const location = useLocation()
    
   return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;