import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function UserNavbar() {
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
            <Nav.Link as={Link} to="/">User Logout</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default UserNavbar