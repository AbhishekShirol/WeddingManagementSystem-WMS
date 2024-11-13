import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/User/authContext';

const AdminProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Outlet/> : <Navigate to="/adminlogin" />;
  
};

export default AdminProtectedRoute;