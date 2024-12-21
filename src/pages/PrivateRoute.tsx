import type React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const isAuthenticated = Boolean(localStorage.getItem('accessToken'));

  // Si l'utilisateur est authentifié, on autorise l'accès aux sous-routes
  // Sinon, on le redirige vers la page de login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
