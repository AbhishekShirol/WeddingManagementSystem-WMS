import React from 'react';

function Home() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-center position-relative overflow-hidden bg-dark">
      {/* Background image container */}
      <div 
        className="position-absolute w-100 h-100 opacity-50"
        style={{
          backgroundImage: 'url(/images/home.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="position-relative container px-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-1 fw-bold text-white mb-4 text-uppercase">
              Welcome
            </h1>
            <p className="lead fs-3 text-white mb-5 fw-light px-2">
              Experience the best of decoration services with our stunning designs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;