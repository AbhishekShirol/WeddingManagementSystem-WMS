import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCatering = () => {
    
  const [cateringList, setCateringList] = useState([]);

  useEffect(() => {
    fetchCateringServices();
  }, []);

  const fetchCateringServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/catering');
      setCateringList(response.data);
    } catch (error) {
      console.error('Error fetching catering services:', error);
    }
  };

  const bookCateringService = (cateringId) => {
    // Here, add the logic for booking the catering service
    // This might involve sending a request to the backend or updating the UI
    console.log(`Booked catering service with ID: ${cateringId}`);
    alert(`Catering service booked successfully!`);
  };

  return (
    <div className="container">
      <h1 className="my-4">Catering Services</h1>

      {/* Catering Services List */}
      <h2>Catering List</h2>
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
          {cateringList.map((catering) => (
            <tr key={catering.id}>
              <td>{catering.name}</td>
              <td>${catering.price}</td>
              <td>{catering.description}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => bookCateringService(catering.id)}
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

export default UserCatering;
