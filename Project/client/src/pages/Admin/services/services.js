import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', backgroundColor:'#ADD8E6'}}>

      <div className="container">
      <h1 className="text-center py-4">Services</h1>
        <div className="row justify-content-center align-items-center" style={{ height: '100%', overflow: 'hidden' }}>
          {/* Catering Service Card */}
          <div className="col-3 mb-4 d-flex justify-content-center">
            <Link to="/admin/catering" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/catering.jpg" className="card-img-top" alt="Catering" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Catering</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Music Service Card */}
          <div className="col-3 mb-4 d-flex justify-content-center">
            <Link to="/admin/music" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/music.jpg" className="card-img-top" alt="Music" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Music</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Decoration Service Card */}
          <div className="col-3 mb-4 d-flex justify-content-center">
            <Link to="/admin/decoration" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/decoration.jpg" className="card-img-top" alt="Decoration" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
                <div className="card-body text-center" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                  <h5 className="card-title">Decoration</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Venue Service Card */}
          <div className="col-3 mb-4 d-flex justify-content-center">
            <Link to="/admin/venue" className="text-decoration-none text-dark">
              <div className="card" style={{ width: '250px', height: '350px', position: 'relative', overflow: 'hidden' }}>
                <img src="/images/venue.jpg" className="card-img-top" alt="Venue" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} />
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
