import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserVenue = () => {
  const [venueList, setVenueList] = useState([]);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/venue');
      setVenueList(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const bookVenue = (venue) => {
    // Here, you can implement the booking logic, e.g., redirecting to a booking page
    alert(`Booking venue at ${venue.location}`);
  };

  return (
    <div className="container">
      <h1 className="my-4">Venue Services</h1>

      {/* Venue Services List */}
      <h2>Available Venue Services</h2>
      <table className="table table-striped">
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
            <tr key={venue.id}>
              <td>
                <img src={venue.imageUrl} alt={venue.location} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{venue.location}</td>
              <td>{venue.capacity}</td>
              <td>${venue.price}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => bookVenue(venue)}
                >
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserVenue;
