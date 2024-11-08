import React from 'react'

function Home() {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center text-center"
      style={{
        // backgroundImage: 'url(/images/img7.jpeg)', // Path to your image
        backgroundColor: '#ADD8E6', // Light Blue Color (Hex code)
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Ensures the container takes full viewport height
        width: '100%',  // Ensure full width
      }}
    >
      <h1 className="text-white">Welcome</h1>
    </div>
  );
}

export default Home

