// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserCatering = () => {
    
//   const [cateringList, setCateringList] = useState([]);

//   useEffect(() => {
//     fetchCateringServices();
//   }, []);

//   const fetchCateringServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/catering');
//       setCateringList(response.data);
//     } catch (error) {
//       console.error('Error fetching catering services:', error);
//     }
//   };

//   const bookCateringService = (cateringId) => {
//     // Here, add the logic for booking the catering service
//     // This might involve sending a request to the backend or updating the UI
//     console.log(`Booked catering service with ID: ${cateringId}`);
//     alert(`Catering service booked successfully!`);
//   };

//   return (
//     <div className="container">
//       <h1 className="my-4">Catering Services</h1>

//       {/* Catering Services List */}
//       <h2>Catering List</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cateringList.map((catering) => (
//             <tr key={catering.id}>
//               <td>{catering.name}</td>
//               <td>${catering.price}</td>
//               <td>{catering.description}</td>
//               <td>
//                 <button
//                   className="btn btn-primary btn-sm"
//                   onClick={() => bookCateringService(catering.id)}
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

// export default UserCatering;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams for extracting registrationId from URL
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCatering = () => {
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
    } catch (error) {
      console.error('Error booking catering service:', error);
      alert('Booking failed'); // Show error message
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Catering Services</h1>

      {/* Catering Services List */}
      <h2>Available Catering Services</h2>
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
            <tr 
              key={catering.id} 
              className={catering.id === cateringId ? 'table-primary' : ''} // Highlight selected row
            >
              <td>{catering.name}</td>
              <td>${catering.price}</td>
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
  );
};

export default UserCatering;
