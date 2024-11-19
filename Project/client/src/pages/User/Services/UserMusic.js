import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useParams
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserMusic = () => {

  const navigate = useNavigate();  // Initialize navigate for redirection

  const { registrationId } = useParams();  // Extract registrationId from the URL
  const [musicList, setMusicList] = useState([]);  // Stores the list of music services
  const [musicId, setMusicId] = useState('');  // Stores the selected musicId

  useEffect(() => {
    fetchMusicServices();
  }, []);

  const fetchMusicServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/music');
      setMusicList(response.data);
    } catch (error) {
      console.error('Error fetching music services:', error);
    }
  };

  // Store the selected musicId
  const handleMusicSelection = (musicId) => {
    setMusicId(musicId);
    console.log('Selected musicId:', musicId);
  };

  const bookMusicService = async () => {
    if (!registrationId || !musicId) {
      alert('Please select a music service.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/music/book', {
        registrationId,         // Use the registrationId from the URL
        serviceType: 'music',   // Include the service type
        serviceId: musicId      // Include the music ID
      });
      alert(response.data.message); // Show success message
      navigate('/user/servicesbooking')
    } catch (error) {
      console.error('Error booking service:', error);
      alert('Booking failed'); // Show error message
    }
  };

  return (
    <div 
      className="d-flex justify-content-center mt-5 min-vh-100 " 
      style={{ backgroundColor: '#E5E5E5CC', overflowY: 'auto' }}
    >
    <div className="container">
      <h1 className="my-4 d-flex justify-content-center">Music Services</h1>

      {/* Music Services List */}

      <table className="table table-striped" style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {musicList.map((music) => (
            <tr 
              key={music.id} 
              className={music.id === musicId ? 'table-primary' : ''} // Highlight selected row
            >
              <td>{music.name}</td>
              <td>₹{music.price}</td>
              <td>{music.description}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleMusicSelection(music.id)}  // Set only the musicId
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Book Button */}
      <button
        className="btn btn-success"
        onClick={bookMusicService}
      >
        Book Selected Music Service
      </button>

      {/* Show selected music service */}
      {musicId && (
        <div className="alert alert-info mt-3">
          Selected Music ID: {musicId}
        </div>
      )}
    </div>
    </div>
  );
};

export default UserMusic;

