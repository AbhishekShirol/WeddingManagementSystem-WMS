// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';


// function HomeNavbar() {

//   return (
//     // <Navbar expand="lg" className="bg-transparent shadow-sm fixed-top py-2 ">
//     <Navbar expand="lg" className="bg-dark text-white shadow-sm fixed-top py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>

//       <Container>
//         {/* <Navbar.Brand as={Link} to="/"><strong>Wedding Managment</strong></Navbar.Brand> */}
//         <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//           <img
//             src="/images/logo.png"
//             alt="Logo"
//             width="40" // Adjust size as needed
//             height="40" // Adjust size as needed
//             className="d-inline-block align-top me-2" // Optional: spacing to the right of image
//           />
//           <strong>Wedding Management</strong>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto gap-3">

//             <Nav.Link as={Link} to="/"><strong>Home</strong></Nav.Link>
//             <Nav.Link as={Link} to="/services"><strong>Services</strong></Nav.Link>
//             <Nav.Link as={Link} to="/adminlogin" ><strong>Admin Login</strong></Nav.Link>
//             <Nav.Link as={Link} to="/userlogin" className='px-3 py-1 rounded bg-primary text-white mx-1px-3 py-1 rounded bg-primary text-white mx-1 d-flex align-items-center justify-content-center'><strong>User Login</strong></Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default HomeNavbar


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function HomeNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-dark shadow-sm fixed-top py-2"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        fontFamily: 'Poppins, sans-serif', // Apply the font here
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
          <img
            src="/images/logo.png"
            alt="Logo"
            width="40" // Adjust size as needed
            height="40" // Adjust size as needed
            className="d-inline-block align-top me-2" // Optional: spacing to the right of image
            style={{
              filter: 'invert(1) brightness(2)', // Inverts colors and increases brightness
            }}
          />
          <strong>Wedding Management</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/" className="text-white"><strong>Home</strong></Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white"><strong>Services</strong></Nav.Link>
            <Nav.Link as={Link} to="/adminlogin" className="text-white"><strong>Admin Login</strong></Nav.Link>
            <Nav.Link as={Link} to="/userlogin" className="px-3 py-1 rounded bg-primary text-white mx-1 d-flex align-items-center justify-content-center">
              <strong>User Login</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;