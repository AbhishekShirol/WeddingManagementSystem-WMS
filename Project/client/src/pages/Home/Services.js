import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div style={{
      backgroundColor: '#ADD8E6', // Light Blue Color (Hex code)
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: '100vh', // Ensures the container takes full viewport height
      width: '100%',  // Ensure full width
    }}>
      <h1 className="text-center">Services</h1>

      <div className="container">
        <div 
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '80vh', overflowX: 'auto' }}
        >
          {/* Catering Service Card */}
          <div className="mx-3">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/img1.jpg" className="card-img-top" alt="Catering" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Catering</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Music Service Card */}
          <div className="mx-3">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/img1.jpg" className="card-img-top" alt="Music" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Music</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Decoration Service Card */}
          <div className="mx-3">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/img1.jpg" className="card-img-top" alt="Decoration" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Decoration</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Venue Service Card */}
          <div className="mx-3">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/img1.jpg" className="card-img-top" alt="Venue" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Venue</h5>
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
