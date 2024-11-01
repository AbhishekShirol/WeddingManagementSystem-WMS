import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import UserLogin from './pages/User/userLogin';
import UserRegister from './pages/User/userRegister';
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

// UserServices
import UserCatering from './pages/User/Services/UserCatering'
import UserDecoration from './pages/User/Services/UserDecoration'
import UserMusic from './pages/User/Services/UserMusic';
import UserVenue from './pages/User/venues';


//ADMIN
import AdminVenue from './pages/Admin/services/Venue'



// Home
import Services from './pages/Home/Services';


function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
{/* Home */}
          <Route path="/" element=<div><HomeNavbar/> <Home/></div> />
          <Route path="/services" element=<div><HomeNavbar/> <Services/></div> />
{/* Admin */}
          <Route path="/admin" element=<div><AdminNavbar/> <Home/></div> />
{/* User */}
          <Route path="/user" element=<div><UserNavbar/> <Home/></div> />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/user/services" element=<div><UserNavbar/> <UserServices/> </div> />

          <Route path="/user/catering" element=<div><UserNavbar/> <UserCatering/> </div> />
          <Route path="/user/decoration" element=<div><UserNavbar/> <UserDecoration/> </div> />
          <Route path="/user/music" element=<div><UserNavbar/> <UserMusic/> </div> />

          <Route path="/user/venues" element=<div><UserNavbar/> <UserVenue/> </div> />
{/* Adminservices */}
          <Route path="/admin/services" element=<div><AdminNavbar/> <AdminServices/> </div> />
          <Route path="/admin/catering" element=<div><AdminNavbar/> <Catering/> </div> />
          <Route path="/admin/music" element=<div><AdminNavbar/> <Music/> </div> />
          <Route path="/admin/decoration" element=<div><AdminNavbar/> <Decoration/> </div> />
          <Route path="/admin/venue" element=<div><AdminNavbar/> <AdminVenue/> </div> />

        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
