import React, { use } from 'react';
import { Navigate, Route, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Spinner from '../pages/Spinner';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user, loading} = use(AuthContext);
    if(loading){
        return <Spinner/>
    }
    
    if(!user){
        return <Navigate to="/login" state={location.pathname} />;
    }
    return children
};

export default PrivateRoutes;