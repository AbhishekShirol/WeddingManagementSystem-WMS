import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/Admin/authContext';

const ProtectedRoute = ({ children }) => {
  const { currentAdmin } = useContext(AuthContext);

  return currentAdmin ? <Outlet/> : <Navigate to="/adminlogin" />;
  
};

export default ProtectedRoute;