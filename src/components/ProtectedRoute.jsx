import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthenticationContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({element}) => {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate();


  return isAuthenticated ? element : <Navigate to={'/login'}/>
}

export default ProtectedRoute