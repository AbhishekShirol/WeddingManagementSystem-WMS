// import React from 'react';
// import { Link } from 'react-router-dom';

// function Services() {
//   return (
//     <div style={{
//       backgroundImage: 'url("/images/home.jpg")',  // Add your image URL here
//       backgroundSize: 'cover',  // Ensures the image covers the full container
//       backgroundPosition: 'center center',  // Centers the image in the container
//       backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
//       height: '100vh',  // Ensures the container takes the full viewport height
//       width: '100%',  // Ensures full width
//       paddingTop: '80px',  // Adjust this based on the height of your navbar
//       color: '#fff',  // Ensure text remains visible on top of the background image
//       fontFamily: "'Poppins', sans-serif"  // Apply the Poppins font
//     }}>
//       <h1 className="text-center" style={{ fontWeight: 600 }}>Services</h1>

//       <div className="container">
//         <div 
//           className="d-flex justify-content-center align-items-center"
//           style={{ minHeight: '80vh', overflowX: 'auto' }}
//         >
//           {/* Catering Service Card */}
//           <div className="mx-3">
//             <Link to="/userlogin" className="text-decoration-none text-dark">
//               <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
//                 <img src="/images/catering.jpg" className="card-img-top" alt="Catering" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
//                 <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
//                   <h5 className="card-title" style={{ fontWeight: 600 }}>Catering</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Music Service Card */}
//           <div className="mx-3">
//             <Link to="/userlogin" className="text-decoration-none text-dark">
//               <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
//                 <img src="/images/music.jpg" className="card-img-top" alt="Music" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
//                 <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
//                   <h5 className="card-title" style={{ fontWeight: 600 }}>Music</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Decoration Service Card */}
//           <div className="mx-3">
//             <Link to="/userlogin" className="text-decoration-none text-dark">
//               <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
//                 <img src="/images/decoration.jpg" className="card-img-top" alt="Decoration" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
//                 <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
//                   <h5 className="card-title" style={{ fontWeight: 600 }}>Decoration</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Venue Service Card */}
//           <div className="mx-3">
//             <Link to="/userlogin" className="text-decoration-none text-dark">
//               <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
//                 <img src="/images/venue.jpg" className="card-img-top" alt="Venue" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
//                 <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
//                   <h5 className="card-title" style={{ fontWeight: 600 }}>Venue</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;




import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-center position-relative overflow-hidden bg-dark">
      {/* Background image container */}
      <div 
        className="position-absolute w-100 h-100 opacity-50"
        style={{
          backgroundImage: 'url(/images/home.jpg)', // Add the services background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="position-relative container px-4">
        {/* Header */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold text-white mb-4 text-uppercase">
              Our Services
            </h1>
          </div>
        </div>

        {/* Service Cards */}
        <div 
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '60vh', overflowX: 'auto' }}
        >
          {/* Catering Service Card */}
          <div className="mx-3">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/catering.jpg" className="card-img-top" alt="Catering" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title" style={{ fontWeight: 600 }}>Catering</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Music Service Card */}
          <div className="mx-3">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/music.jpg" className="card-img-top" alt="Music" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title" style={{ fontWeight: 600 }}>Music</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Decoration Service Card */}
          <div className="mx-3">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/decoration.jpg" className="card-img-top" alt="Decoration" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title" style={{ fontWeight: 600 }}>Decoration</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Venue Service Card */}
          <div className="mx-3">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/venue.jpg" className="card-img-top" alt="Venue" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title" style={{ fontWeight: 600 }}>Venue</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
