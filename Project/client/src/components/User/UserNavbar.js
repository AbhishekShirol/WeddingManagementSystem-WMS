// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/User/authContext.js'


// function UserNavbar() {

//   const {currentUser,logout} = useContext(AuthContext);

//   // axios.defaults.withCredentials = true;

//   const navigate = useNavigate();

//   const onLogout = async () => {
//     try {
//       // const response = await axios.post('http://localhost:5000/api/user/logout', {});
//       await logout();

//         navigate('/'); // Redirect to home if logout succeeds
//         window.location.reload();
//     }catch (error) {
//         console.error(error);
//     } 
//   };


//   return (
//     <Navbar expand="lg" className="bg-body-tertiary shadow-sm fixed-top">
//       <Container>
//       <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
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

//             <Nav.Link as={Link} to="/user"><strong>Home</strong></Nav.Link>
//             <Nav.Link as={Link} to="/user/services"><strong>Services</strong></Nav.Link>
//             <Nav.Link as={Link} to="/user/weddingregister"><strong>Wedding Register</strong></Nav.Link>
//             <Nav.Link as={Link} to="/user/servicesbooking"><strong>Bookings</strong></Nav.Link>
//             {currentUser ?
//             (<Nav.Link onClick={onLogout} className='px-3 py-1 rounded bg-primary text-white mx-1px-3 py-1 rounded bg-primary text-white mx-1 d-flex align-items-center justify-content-center' ><strong>User Logout</strong></Nav.Link>)
//             :
//             (<Nav.Link as={Link} to="/userlogin" className='px-3 py-1 rounded bg-primary text-white mx-1px-3 py-1 rounded bg-primary text-white mx-1 d-flex align-items-center justify-content-center'><strong>User Login</strong></Nav.Link>)}

//             <Nav.Link ><strong>{currentUser?.username}</strong></Nav.Link>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default UserNavbar


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/User/authContext.js';

function UserNavbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await logout();
      navigate('/'); // Redirect to home if logout succeeds
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar
      expand="lg"
      className="bg-dark text-white shadow-sm fixed-top py-2"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Transparent dark background
        fontFamily: 'Poppins, sans-serif', // Apply the font here
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
          <img
            src="/images/logo.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            style={{
              filter: 'invert(1) brightness(2)', // Apply the color inversion filter
            }}
          />
          <strong>Wedding Management</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/user" className="text-white"><strong>Home</strong></Nav.Link>
            <Nav.Link as={Link} to="/user/services" className="text-white"><strong>Services</strong></Nav.Link>
            <Nav.Link as={Link} to="/user/weddingregister" className="text-white"><strong>Wedding Register</strong></Nav.Link>
            <Nav.Link as={Link} to="/user/servicesbooking" className="text-white"><strong>Bookings</strong></Nav.Link>

            {currentUser ? (
              <Nav.Link onClick={onLogout} className="px-3 py-1 rounded bg-primary text-white mx-1 d-flex align-items-center justify-content-center">
                <strong>User Logout</strong>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/userlogin" className="px-3 py-1 rounded bg-primary text-white mx-1 d-flex align-items-center justify-content-center">
                <strong>User Login</strong>
              </Nav.Link>
            )}

            <Nav.Link className="text-white"><strong>{currentUser?.username}</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;
