import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/User/authContext';

const AdminProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Outlet/> : <Navigate to="/adminlogin" />;
  
};

export default AdminProtectedRoute;


// import { useContext } from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import { AuthContext } from '../../context/User/authContext';

// const ProtectedRoute = ({ allowedRoles }) => {
//   const { currentUser } = useContext(AuthContext);

//   // If no user is logged in, redirect to login
//   if (!currentUser) {
//     return <Navigate to="/userlogin" />;
//   }

//   // If user doesn't have permission (role mismatch), redirect to the appropriate page
//   if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
//     // Redirect based on the role
//     return currentUser.role === 'admin' 
//       ? <Navigate to="/admin/dashboard" />  // If the user is an admin, redirect to admin dashboard
//       : <Navigate to="/user/dashboard" />;  // If the user is a regular user, redirect to user dashboard
//   }

//   // User has the correct role, render the child components
//   return <Outlet />;
// };

// export default ProtectedRoute;
