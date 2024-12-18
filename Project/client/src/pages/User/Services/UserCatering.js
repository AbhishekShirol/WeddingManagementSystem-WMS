import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';  // Import useParams for extracting registrationId from URL
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCatering = () => {
  const navigate = useNavigate();


  const { registrationId } = useParams();  // Extract registrationId from the URL
  const [cateringList, setCateringList] = useState([]);  // Stores the list of catering services
  const [cateringId, setCateringId] = useState('');  // Stores the selected cateringId

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

  // Store the selected cateringId
  const handleCateringSelection = (cateringId) => {
    setCateringId(cateringId);
    console.log('Selected cateringId:', cateringId);
  };

  const bookCateringService = async () => {
    if (!registrationId || !cateringId) {
      alert('Please select a catering service.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/catering/book', {
        registrationId,        // Use the registrationId from the URL
        serviceType: 'catering', // Include the service type
        serviceId: cateringId    // Include the catering ID
      });
      alert(response.data.message); // Show success message
      navigate('/user/servicesbooking')
    } catch (error) {
      console.error('Error booking catering service:', error);
      alert('Booking failed'); // Show error message
    }
  };

  return (
    <div 
      className="d-flex justify-content-center mt-5 min-vh-100 " 
      style={{ backgroundColor: '#E5E5E5CC', overflowY: 'auto' }}
    >
    <div className="container">
      <h1 className="my-4 d-flex justify-content-center">Catering Services</h1>

      {/* Catering Services List */}

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
          {cateringList.map((catering) => (
            <tr 
              key={catering.id} 
              className={catering.id === cateringId ? 'table-primary' : ''} // Highlight selected row
            >
              <td>{catering.name}</td>
              <td>₹{catering.price}</td>
              <td>{catering.description}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleCateringSelection(catering.id)}  // Set only the cateringId
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
        onClick={bookCateringService}
      >
        Book Selected Catering Service
      </button>

      {/* Show selected catering service */}
      {cateringId && (
        <div className="alert alert-info mt-3">
          Selected Catering ID: {cateringId}
        </div>
      )}
    </div>
    </div>
  );
};

export default UserCatering;
