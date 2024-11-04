import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomeNavbar() {

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/logout', {});
      
      if (response.status === 200) {
        navigate('/'); // Redirect to home if logout succeeds
        window.location.reload();
      } else {
        console.log("Logout failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">Wedding Managment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/">Venue</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin Login</Nav.Link>
            <Nav.Link as={Link} to="/userlogin">User Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNavbar