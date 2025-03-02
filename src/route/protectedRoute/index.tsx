import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  };

  if (!isAuthenticated()) {
    return <Navigate to={'/login'} replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;