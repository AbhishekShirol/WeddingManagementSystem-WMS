import React, { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const UserVenue = () => {

  const navigate = useNavigate();
  
  const { registrationId } = useParams(); // Extract registrationId from the URL
  const [venueList, setVenueList] = useState([]);
  const [selectedVenueId, setSelectedVenueId] = useState('');

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/venue');
      const availableVenues = response.data.filter((venue) => venue.availability === 'Available');
      setVenueList(availableVenues);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const handleVenueSelection = (venueId) => {
    setSelectedVenueId(venueId);
    console.log('Selected venueId:', venueId);
  };

  const bookVenueService = async () => {
    if (!registrationId || !selectedVenueId) {
      alert('Please select a venue service.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/venue/book', {
        registrationId,
        serviceType: 'venue',
        serviceId: selectedVenueId,
      });
      alert(response.data.message);
      fetchVenues(); // Refresh venue list after booking
      navigate('/user/servicesbooking')
    } catch (error) {
      console.error('Error booking venue service:', error);
      alert('Booking failed');
    }
  };

  return (
    <div 
      className="d-flex justify-content-center mt-5 min-vh-100 " 
      style={{ backgroundColor: '#E5E5E5CC', overflowY: 'auto' }}
    >
    <div className="container">
      <h1 className="my-4 d-flex justify-content-center">Venue Services</h1>

      <table className="table table-striped" style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venueList.map((venue) => (
            <tr key={venue.id} className={venue.id === selectedVenueId ? 'table-primary' : ''}>
              <td>
                <img src={venue.imageUrl} alt={venue.location} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{venue.location}</td>
              <td>{venue.capacity}</td>
              <td>₹{venue.price}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleVenueSelection(venue.id)}
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-success" onClick={bookVenueService}>
        Book Selected Venue
      </button>

      {selectedVenueId && (
        <div className="alert alert-info mt-3">
          Selected Venue ID: {selectedVenueId}
        </div>
      )}
    </div>
    </div>
  );
};

export default UserVenue;



