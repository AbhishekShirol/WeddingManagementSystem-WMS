// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserMusic = () => {
//   const [musicList, setMusicList] = useState([]);

//   useEffect(() => {
//     fetchMusicServices();
//   }, []);

//   const fetchMusicServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/music');
//       setMusicList(response.data);
//     } catch (error) {
//       console.error('Error fetching music services:', error);
//     }
//   };

//   // const bookMusicService = async (musicId) => {
//   //   try {
//   //     // Assuming you have a booking endpoint to handle bookings
//   //     const response = await axios.post(`http://localhost:5000/api/book/music/${musicId}`);
//   //     // Handle successful booking (e.g., show a confirmation message)
//   //     alert(`Successfully booked ${response.data.name}!`);
//   //   } catch (error) {
//   //     console.error('Error booking music service:', error);
//   //     alert('Failed to book the service. Please try again.');
//   //   }
//   // };


//   const bookMusicService = async (registrationId, musicId) => {
//     try {
//         const response = await axios.post('http://localhost:5000/api/music/book', {
//             registrationId,
//             musicId
//         });
//         alert(response.data.message); // Show success message
//     } catch (error) {
//         console.error('Error booking music:', error);
//         alert('Booking failed'); // Show error message
//     }
//   };  

//   return (
//     <div className="container">
//       <h1 className="my-4">Music Services</h1>

//       {/* Music Services List */}
//       <h2>Available Music Services</h2>
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
//           {musicList.map((music) => (
//             <tr key={music.id}>
//               <td>{music.name}</td>
//               <td>${music.price}</td>
//               <td>{music.description}</td>
//               <td>
//                 <button
//                   className="btn btn-primary btn-sm"
//                   onClick={() => bookMusicService(music.id)}
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

// export default UserMusic;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserMusic = () => {
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
    } catch (error) {
      console.error('Error booking service:', error);
      alert('Booking failed'); // Show error message
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
            <tr 
              key={music.id} 
              className={music.id === musicId ? 'table-primary' : ''} // Highlight selected row
            >
              <td>{music.name}</td>
              <td>${music.price}</td>
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
  );
};

export default UserMusic;

