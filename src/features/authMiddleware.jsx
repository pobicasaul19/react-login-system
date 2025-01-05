/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AuthMiddleware = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  if (!isAuthenticated) {
    return <Navigate to="/account/login" replace />;
  }

  return <>{children}</>;
};

export default AuthMiddleware;