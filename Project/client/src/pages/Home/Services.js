import React from 'react';
import { Link } from 'react-router-dom';


function Services() {
  return (
    <div >
      <h1 className="text-center">Services</h1>

      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          {/* Catering Service Card */}
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '300px', height: '400px', position: 'relative', overflow: 'hidden' }}>
                <img src="/img1.jpg" className="card-img-top" alt="Catering" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Catering</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Music Service Card */}
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '300px', height: '400px', position: 'relative', overflow: 'hidden' }}>
                <img src="/img1.jpg" className="card-img-top" alt="Music" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Music</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Decoration Service Card */}
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '300px', height: '400px', position: 'relative', overflow: 'hidden' }}>
                <img src="/img1.jpg" className="card-img-top" alt="Decoration" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Decoration</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Venue Service Card */}
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Link to="/userlogin" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '300px', height: '400px', position: 'relative', overflow: 'hidden' }}>
                <img src="/img1.jpg" className="card-img-top" alt="Venue" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
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
