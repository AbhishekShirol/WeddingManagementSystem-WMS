import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  // Fetch registrations with total price
  const fetchRegistrations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/wedding/register/withTotalPrice');
      setRegistrations(response.data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    }
  };

  // Delete registration
  const deleteRegistration = async (registrationId, venueId) => {
    try {
      await axios.post('http://localhost:5000/api/cancel-registration', {
        registrationId,
        venueId: venueId || null,
      });
      // Refresh the list after deletion
      fetchRegistrations();
    } catch (error) {
      console.error("Error deleting registration:", error);
    }
  };

  return (
    <div className="container pt-5">
      <h1>Registered Weddings</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Registration ID</th>
            <th>User ID</th>
            <th>Groom Name</th>
            <th>Bride Name</th>
            <th>Wedding Date</th>
            <th>Guests</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg.reg_id}>
              <td>{reg.reg_id}</td>
              <td>{reg.user_id}</td>
              <td>{reg.groom_name}</td>
              <td>{reg.bride_name}</td>
              <td>{new Date(reg.wedding_date).toLocaleDateString()}</td>
              <td>{reg.number_of_guests}</td>
              <td>${reg.total_price.toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => window.location.href = `/admin/bookings/servicesdesc/${reg.reg_id}`}
                >
                  View Details
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteRegistration(reg.reg_id, reg.venue_id)}
                >
                  Reject Registration
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationList;
