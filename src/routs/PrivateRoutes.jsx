import React, { use } from 'react';
import { Navigate, Route, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user} = use(AuthContext);
    if(!user){
        return <Navigate to="/login" state={location.pathname} />;
    }
    return children
};

export default PrivateRoutes;