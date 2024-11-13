import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AdminServices from './pages/Admin/services/services';


import AdminNavbar from './components/Admin/NavbarComponent';
import HomeNavbar from './components/Home/HomeNavbar'


// Services
import Catering from './pages/Admin/services/Caterings';
import Music from './pages/Admin/services/Music';
import Decoration from './pages/Admin/services/Decoration';


// User
import UserNavbar from './components/User/UserNavbar'
import UserServices from './pages/User/Services/services'
import ProtectedRoute from './components/User/ProtectedRoute';

// UserServices
import UserCatering from './pages/User/Services/UserCatering'
import UserDecoration from './pages/User/Services/UserDecoration'
import UserMusic from './pages/User/Services/UserMusic';
import UserVenue from './pages/User/venues';

//User Booking and registration

import WeddingRegister from './pages/User/WeddingRegister';
import ServiesBooking from './pages/User/ServiceBooking'

//User login
import Userlogin from './pages/User/Auth/UserLogin'
import UserRegister from './pages/User/Auth/userRegister';


//ADMIN
import AdminVenue from './pages/Admin/services/Venue'
import Bookings from './pages/Admin/Booking'

//Admin login Register
import Adminlogin from './pages/Admin/Auth/adminlogin';
import AdminRegister from './pages/Admin/Auth/adminRegister'
import AdminProtectedRoute from './components/Admin/AdminProtectedRoute'

// Home
import Services from './pages/Home/Services';
import DetailedServices from './pages/Admin/DetailedServices';



function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>

{/* Home */}
          <Route path="/" element={<div><HomeNavbar/> <Home/></div>} />
          <Route path="/services" element={<div><HomeNavbar/> <Services/></div>} />



{/* Userlogin */}
          <Route path="/userlogin" element={<Userlogin/>} />
          <Route path="/userregister" element={<UserRegister />} />



{/* User */}
          <Route element={<ProtectedRoute />}>
            <Route path="/user" element={<div><UserNavbar /><Home /></div>} />
            
            <Route path="/user/services" element={<div><UserNavbar /><UserServices /></div>} />
            
            <Route path="/user/catering/:registrationId" element={<div><UserNavbar /><UserCatering /></div>} />
            
            <Route path="/user/decoration/:registrationId" element={<div><UserNavbar /><UserDecoration /></div>} />
            
            <Route path="/user/music/:registrationId" element={<div><UserNavbar /><UserMusic /></div>} />
            
            <Route path="/user/venues/:registrationId" element={<div><UserNavbar /><UserVenue /></div>} />

            <Route path='/user/weddingregister' element={<div><UserNavbar /><WeddingRegister /></div>} />

            <Route path= '/user/servicesbooking' element={<div><UserNavbar /><ServiesBooking/></div>}/>
          </Route>




{/* Adminlogin */}  
          <Route path="/adminlogin" element={<Adminlogin/>} />



{/* Admin */}

          <Route element={<AdminProtectedRoute />}>

          <Route path="/admin" element={<div><AdminNavbar/> <Home/></div>} />

          <Route path="/adminregister" element={<AdminRegister/>} />
          
{/* Adminservices */}
          <Route path="/admin/services" element={<div><AdminNavbar/> <AdminServices/> </div>} />

          <Route path="/admin/catering" element={<div><AdminNavbar/> <Catering/> </div>} />

          <Route path="/admin/music" element={<div><AdminNavbar/> <Music/> </div>} />

          <Route path="/admin/decoration" element={<div><AdminNavbar/> <Decoration/> </div>} />

          <Route path="/admin/venue" element={<div><AdminNavbar/> <AdminVenue/> </div>} />

          <Route path='/admin/bookings' element={<div><AdminNavbar/><Bookings/></div>} />

          <Route path='/admin/bookings/servicesdesc/:registrationId' element={<div><AdminNavbar/><DetailedServices/></div>} />

          </Route>


        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
