import React from 'react';
import { useStrore } from '../../store/useStore';
import { Navigate } from 'react-router-dom';

const ProtectedRouted = ({children}) => {
    const {user_profile} = useStrore();
   

    if(user_profile){
        return  children
    }
    return <Navigate to="/auth/login" />
    
};

export default ProtectedRouted;