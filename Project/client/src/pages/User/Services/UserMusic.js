import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserMusic = () => {
  const [musicList, setMusicList] = useState([]);

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

  const bookMusicService = async (musicId) => {
    try {
      // Assuming you have a booking endpoint to handle bookings
      const response = await axios.post(`http://localhost:5000/api/book/music/${musicId}`);
      // Handle successful booking (e.g., show a confirmation message)
      alert(`Successfully booked ${response.data.name}!`);
    } catch (error) {
      console.error('Error booking music service:', error);
      alert('Failed to book the service. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Music Services</h1>

      {/* Music Services List */}
      <h2>Available Music Services</h2>
      <table className="table table-striped">
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
            <tr key={music.id}>
              <td>{music.name}</td>
              <td>${music.price}</td>
              <td>{music.description}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => bookMusicService(music.id)}
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

export default UserMusic;
