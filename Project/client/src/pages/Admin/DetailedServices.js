import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';

const DetailedServices = () => {
  const { registrationId } = useParams(); // Get registrationId from URL
  const [serviceDetails, setServiceDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch service details when the component mounts or when registrationId changes
  useEffect(() => {
    axios.get(`http://localhost:5000/api/admin/bookings/servicesdesc/${registrationId}`)
      .then((response) => {
        setServiceDetails(response.data); // Set the fetched data
        setLoading(false); // Data is loaded, set loading to false
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, [registrationId]);

  // Handle loading state
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  // Function to handle null values and display a fallback message
  const handleNull = (value) => {
    return value ? value : 'Information not available';
  };

  // Render the service details
  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ backgroundColor: '#87CEEB80',height: '93vh', overflowY: 'auto' }}
    >
    <div className="container py-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="mb-4">
            <h2 className="text-dark d-flex justify-content-center">Service Details for Registration ID: {registrationId}</h2>
          </div>

          <div className="row g-4">
            {/* Venue Details */}
            <div className="col-md-6">
              <div className="card border-primary shadow">
                <div className="card-header bg-primary text-white">Venue</div>
                <div className="card-body">
                  <img src={handleNull(serviceDetails.venue_image)} alt="Venue" className="card-img-top mb-3" />
                  <p className="card-text"><strong>Location:</strong> {handleNull(serviceDetails.venue_location)}</p>
                  <p className="card-text"><strong>Description:</strong> {handleNull(serviceDetails.venue_description)}</p>
                  <p className="card-text"><strong>Price:</strong> ₹{handleNull(serviceDetails.venue_price)}</p>
                </div>
              </div>
            </div>

            {/* Catering Details */}
            <div className="col-md-6">
              <div className="card border-primary shadow">
                <div className="card-header bg-primary text-white">Catering</div>
                <div className="card-body">
                  <p className="card-text"><strong>Name:</strong> {handleNull(serviceDetails.catering_name)}</p>
                  <p className="card-text"><strong>Description:</strong> {handleNull(serviceDetails.catering_description)}</p>
                  <p className="card-text"><strong>Price:</strong> ₹{handleNull(serviceDetails.catering_price)}</p>
                </div>
              </div>
            </div>

            {/* Music Details */}
            <div className="col-md-6">
              <div className="card border-primary shadow">
                <div className="card-header bg-primary text-white">Music</div>
                <div className="card-body">
                  <p className="card-text"><strong>Name:</strong> {handleNull(serviceDetails.music_name)}</p>
                  <p className="card-text"><strong>Description:</strong> {handleNull(serviceDetails.music_description)}</p>
                  <p className="card-text"><strong>Price:</strong> ₹{handleNull(serviceDetails.music_price)}</p>
                </div>
              </div>
            </div>

            {/* Decoration Details */}
            <div className="col-md-6">
              <div className="card border-primary shadow">
                <div className="card-header bg-primary text-white">Decoration</div>
                <div className="card-body">
                  <img src={handleNull(serviceDetails.decoration_image)} alt="Decoration" className="card-img-top mb-3" />
                  <p className="card-text"><strong>Name:</strong> {handleNull(serviceDetails.decoration_name)}</p>
                  <p className="card-text"><strong>Description:</strong> {handleNull(serviceDetails.decoration_description)}</p>
                  <p className="card-text"><strong>Price:</strong> ₹{handleNull(serviceDetails.decoration_price)}</p>
                </div>
              </div>
            </div>
          </div>
          <Link to={'/admin/bookings'} className='btn btn-primary w-100 mt-4'><strong>Back</strong></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailedServices;

