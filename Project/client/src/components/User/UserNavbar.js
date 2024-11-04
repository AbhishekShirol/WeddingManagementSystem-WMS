import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import { AuthContext } from '../../context/User/authContext.js'


function UserNavbar() {

  const {currentUser,logout} = useContext(AuthContext);

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      // const response = await axios.post('http://localhost:5000/api/user/logout', {});
      await logout();

        navigate('/'); // Redirect to home if logout succeeds
        window.location.reload();
    }catch (error) {
        console.error(error);
    } 
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">Wedding Managment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/user">Home</Nav.Link>
            <Nav.Link as={Link} to="/user/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/user/venues">Venue</Nav.Link>
            <Nav.Link as={Link} to="/user/bookings">Bookings</Nav.Link>
            {currentUser ?
            (<Nav.Link onClick={onLogout} >User Logout</Nav.Link>)
            :
            (<Nav.Link as={Link} to="/userlogin">User Login</Nav.Link>)}

            <Nav.Link >{currentUser?.username}</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default UserNavbar