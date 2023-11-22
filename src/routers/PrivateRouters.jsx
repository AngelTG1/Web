import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRouters({ element, allowedRoles }) {
    const { user } = useAuth();

    // Verifica si el usuario está autenticado y si su rol coincide con los roles permitidos
    if (user && allowedRoles.includes(user.rol)) {
      return element;
    }
  
    // Redirige a la página de inicio de sesión si no cumple con los requisitos
    return <Navigate to="/" replace />;
}
