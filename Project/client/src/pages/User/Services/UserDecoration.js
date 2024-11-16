// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserDecoration = () => {
//   const [decorationList, setDecorationList] = useState([]);

//   useEffect(() => {
//     fetchDecorationServices();
//   }, []);

//   const fetchDecorationServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/decoration');
//       setDecorationList(response.data);
//     } catch (error) {
//       console.error('Error fetching decoration services:', error);
//     }
//   };

//   const bookDecorationService = async (decoration) => {
//     // Handle booking logic here
//     // This could involve calling an API to create a booking or navigating to a booking page
//     alert(`Booking for ${decoration.name} has been confirmed!`);
//   };

//   return (
//     <div className="container">
//       <h1 className="my-4">Available Decoration Services</h1>

//       {/* Decoration Services List */}
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Description</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {decorationList.map((decoration) => (
//             <tr key={decoration.id}>
//               <td>{decoration.name}</td>
//               <td>${decoration.price}</td>
//               <td>{decoration.description}</td>
//               <td>
//                 <img src={decoration.imageUrl} alt={decoration.name} style={{ width: '100px', height: 'auto' }} />
//               </td>
//               <td>
//                 <button
//                   className="btn btn-primary btn-sm"
//                   onClick={() => bookDecorationService(decoration)}
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

// export default UserDecoration;



import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';  // Import useParams
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDecoration = () => {

  const navigate = useNavigate();

  const { registrationId } = useParams();  // Extract registrationId from the URL
  const [decorationList, setDecorationList] = useState([]);  // Stores the list of decoration services
  const [decorationId, setDecorationId] = useState('');  // Stores the selected decorationId

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

  // Store the selected decorationId
  const handleDecorationSelection = (decorationId) => {
    setDecorationId(decorationId);
    // console.log('Selected decorationId:', decorationId);
  };

  const bookDecorationService = async () => {
    if (!registrationId || !decorationId) {
      alert('Please select a decoration service.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/decoration/book', {
        registrationId,         // Use the registrationId from the URL
        serviceType: 'decoration', // Include the service type
        serviceId: decorationId  // Include the decoration ID
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
      style={{ backgroundColor: '#87CEEB80', overflowY: 'auto' }}
    >
    <div className="container">
      <h1 className="my-4 d-flex justify-content-center">Decoration Services</h1>

      {/* Decoration Services List */}

      <table className="table table-striped" style={{ borderRadius: '10px', overflow: 'hidden' }}>
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
            <tr 
              key={decoration.id} 
              className={decoration.id === decorationId ? 'table-primary' : ''} // Highlight selected row
            >
              <td>{decoration.name}</td>
              <td>₹{decoration.price}</td>
              <td>{decoration.description}</td>
              <td>
                <img 
                  src={decoration.imageUrl} 
                  alt={decoration.name} 
                  style={{ width: '100px', height: 'auto' }} 
                />
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleDecorationSelection(decoration.id)} // Set only the decorationId
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
        onClick={bookDecorationService}
      >
        Book Selected Decoration Service
      </button>

      {/* Show selected decoration service */}
      {decorationId && (
        <div className="alert alert-info mt-3">
          Selected Decoration ID: {decorationId}
        </div>
      )}
    </div>
    </div>
  );
};

export default UserDecoration;
