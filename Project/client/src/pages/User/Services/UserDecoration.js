import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDecoration = () => {
  const [decorationList, setDecorationList] = useState([]);

  useEffect(() => {
    fetchDecorationServices();
  }, []);

  const fetchDecorationServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/decoration');
      setDecorationList(response.data);
    } catch (error) {
      console.error('Error fetching decoration services:', error);
    }
  };

  const bookDecorationService = async (decoration) => {
    // Handle booking logic here
    // This could involve calling an API to create a booking or navigating to a booking page
    alert(`Booking for ${decoration.name} has been confirmed!`);
  };

  return (
    <div className="container">
      <h1 className="my-4">Available Decoration Services</h1>

      {/* Decoration Services List */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {decorationList.map((decoration) => (
            <tr key={decoration.id}>
              <td>{decoration.name}</td>
              <td>${decoration.price}</td>
              <td>{decoration.description}</td>
              <td>
                <img src={decoration.imageUrl} alt={decoration.name} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => bookDecorationService(decoration)}
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

export default UserDecoration;
