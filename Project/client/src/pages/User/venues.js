// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserVenue = () => {
//   const [venueList, setVenueList] = useState([]);

//   useEffect(() => {
//     fetchVenues();
//   }, []);

//   const fetchVenues = async () => {
//     try {
//       // const response = await axios.get('http://localhost:5000/api/venue');
//       // setVenueList(response.data);

//       const response = await axios.get('http://localhost:5000/api/venue');
//       // Filter venues to include only those that are available
//       const availableVenues = response.data.filter((venue) => venue.availability === 'Available').map(({ availability, ...rest }) => rest);
//       setVenueList(availableVenues);
//     } catch (error) {
//       console.error('Error fetching venues:', error);
//     }
//   };

//   const bookVenue = (venue) => {
//     // Here, you can implement the booking logic, e.g., redirecting to a booking page
//     alert(`Booking venue at ${venue.location}`);
//   };

//   return (
//     <div className="container">
//       <h1 className="my-4">Venue Services</h1>

//       {/* Venue Services List */}
//       <h2>Available Venue Services</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Location</th>
//             <th>Capacity</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {venueList.map((venue) => (
//             <tr key={venue.id}>
//               <td>
//                 <img src={venue.imageUrl} alt={venue.location} style={{ width: '100px', height: 'auto' }} />
//               </td>
//               <td>{venue.location}</td>
//               <td>{venue.capacity}</td>
//               <td>${venue.price}</td>
//               <td>
//                 <button
//                   className="btn btn-primary btn-sm"
//                   onClick={() => bookVenue(venue)}
//                 >
//                   Book
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserVenue;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserVenue = () => {
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
    } catch (error) {
      console.error('Error booking venue service:', error);
      alert('Booking failed');
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Venue Services</h1>

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
            <tr key={venue.id} className={venue.id === selectedVenueId ? 'table-primary' : ''}>
              <td>
                <img src={venue.imageUrl} alt={venue.location} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{venue.location}</td>
              <td>{venue.capacity}</td>
              <td>${venue.price}</td>
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
  );
};

export default UserVenue;

