// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VenueService = () => {
//   const [venueList, setVenueList] = useState([]);
//   const [newVenue, setNewVenue] = useState({
//     location: '',
//     description: '',
//     capacity: '',
//     price: '',
//     imageUrl: '',
//     availability: 'Available',
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [editVenue, setEditVenue] = useState({
//     location: '',
//     description: '',
//     capacity: '',
//     price: '',
//     imageUrl: '',
//     availability: 'Available',
//   });

//   useEffect(() => {
//     fetchVenueServices();
//   }, []);

//   const fetchVenueServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/venue');
//       setVenueList(response.data);
//     } catch (error) {
//       console.error('Error fetching venues:', error);
//     }
//   };

//   const addVenueService = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/venue', newVenue);
//       setVenueList([...venueList, response.data]);
//       setNewVenue({
//         location: '',
//         description: '',
//         capacity: '',
//         price: '',
//         imageUrl: '',
//         availability: 'Available',
//       });
//     } catch (error) {
//       console.error('Error adding venue service:', error);
//     }
//   };

//   const updateVenueService = async (id) => {
//     try {
//       const response = await axios.put(`http://localhost:5000/api/venue/${id}`, editVenue);
  
//       setVenueList((prevVenueList) =>
//         prevVenueList.map((venue) => (venue.id === id ? response.data : venue))
//       );
  
//       setEditingId(null);
//       setEditVenue({
//         location: '',
//         description: '',
//         capacity: '',
//         price: '',
//         imageUrl: '',
//         availability: 'Available',
//       });
//     } catch (error) {
//       console.error('Error updating venue service:', error);
//     }
//   };

//   const deleteVenueService = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/venue/${id}`);
//       setVenueList(venueList.filter((venue) => venue.id !== id));
//     } catch (error) {
//       console.error('Error deleting venue service:', error);
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center mt-5"
//       style={{ backgroundColor: '#87CEEB80', height: '94vh', overflowY: 'auto' }}
//     >
//       <div className="container">
//         <h1 className="my-4 d-flex justify-content-center">Venue Services</h1>

//         {/* Venue Services List */}
//         <h2>Venue Services List</h2>
//         <table className="table table-striped" style={{ borderRadius: '10px', overflow: 'hidden' }}>
//           <thead>
//             <tr>
//               <th>Location</th>
//               <th>Description</th>
//               <th>Capacity</th>
//               <th>Price</th>
//               <th>Image</th>
//               <th>Availability</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {venueList.map((venue) => (
//               <tr key={venue.id}>
//                 {editingId === venue.id ? (
//                   <>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={editVenue.location}
//                         onChange={(e) => setEditVenue({ ...editVenue, location: e.target.value })}
//                       />
//                     </td>
//                     <td>
//                       <textarea
//                         className="form-control"
//                         value={editVenue.description}
//                         onChange={(e) => setEditVenue({ ...editVenue, description: e.target.value })}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={editVenue.capacity}
//                         onChange={(e) => setEditVenue({ ...editVenue, capacity: parseInt(e.target.value) })}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={editVenue.price}
//                         onChange={(e) => setEditVenue({ ...editVenue, price: parseFloat(e.target.value) })}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={editVenue.imageUrl}
//                         onChange={(e) => setEditVenue({ ...editVenue, imageUrl: e.target.value })}
//                       />
//                     </td>
//                     <td>
//                       <select
//                         className="form-control"
//                         value={editVenue.availability}
//                         onChange={(e) => setEditVenue({ ...editVenue, availability: e.target.value })}
//                       >
//                         <option value="Available">Available</option>
//                         <option value="Unavailable">Unavailable</option>
//                       </select>
//                     </td>
//                     <td>
//                       <button className="btn btn-success btn-sm me-2" onClick={() => updateVenueService(venue.id)}>
//                         Save
//                       </button>
//                       <button className="btn btn-secondary btn-sm" onClick={() => setEditingId(null)}>
//                         Cancel
//                       </button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td>{venue.location}</td>
//                     <td>{venue.description}</td>
//                     <td>{venue.capacity}</td>
//                     <td>₹{venue.price}</td>
//                     <td>
//                       <img
//                         src={venue.imageUrl}
//                         alt={venue.location}
//                         style={{ width: '100px', height: 'auto' }}
//                       />
//                     </td>
//                     <td>{venue.availability}</td>
//                     <td>
//                       <button
//                         className="btn btn-warning btn-sm me-2"
//                         onClick={() => {
//                           setEditingId(venue.id);
//                           setEditVenue(venue);
//                         }}
//                       >
//                         Update
//                       </button>
//                       <button className="btn btn-danger btn-sm" onClick={() => deleteVenueService(venue.id)}>
//                         Delete
//                       </button>
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Add New Venue Service */}
//         <div className="card p-3 mb-4">
//           <h2>Add New Venue Service</h2>
//           <div className="mb-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Location"
//               value={newVenue.location}
//               onChange={(e) => setNewVenue({ ...newVenue, location: e.target.value })}
//             />
//           </div>
//           <div className="mb-2">
//             <textarea
//               className="form-control"
//               placeholder="Description"
//               value={newVenue.description}
//               onChange={(e) => setNewVenue({ ...newVenue, description: e.target.value })}
//             />
//           </div>
//           <div className="mb-2">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Capacity"
//               value={newVenue.capacity}
//               onChange={(e) => setNewVenue({ ...newVenue, capacity: parseInt(e.target.value) })}
//             />
//           </div>
//           <div className="mb-2">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Price"
//               value={newVenue.price}
//               onChange={(e) => setNewVenue({ ...newVenue, price: parseFloat(e.target.value) })}
//             />
//           </div>
//           <div className="mb-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Image URL"
//               value={newVenue.imageUrl}
//               onChange={(e) => setNewVenue({ ...newVenue, imageUrl: e.target.value })}
//             />
//           </div>
//           <div className="mb-2">
//             <select
//               className="form-control"
//               value={newVenue.availability}
//               onChange={(e) => setNewVenue({ ...newVenue, availability: e.target.value })}
//             >
//               <option value="Available">Available</option>
//               <option value="Unavailable">Unavailable</option>
//             </select>
//           </div>
//           <button className="btn btn-primary" onClick={addVenueService}>
//             Add Venue Service
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VenueService;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VenueService = () => {
  const [venueList, setVenueList] = useState([]);
  const [newVenue, setNewVenue] = useState({
    location: '',
    description: '',
    capacity: '',
    price: '',
    imageUrl: '',
    availability: 'Available',
  });
  const [editingId, setEditingId] = useState(null);
  const [editVenue, setEditVenue] = useState({
    location: '',
    description: '',
    capacity: '',
    price: '',
    imageUrl: '',
    availability: 'Available',
  });
  const [totalVenueCount, setTotalVenueCount] = useState(0);

  useEffect(() => {
    fetchVenueServices();
    fetchVenueCount();
  }, []);

  const fetchVenueServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/venue');
      setVenueList(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const fetchVenueCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/venue/count');
      setTotalVenueCount(response.data.total);
    } catch (error) {
      console.error('Error fetching venue count:', error);
    }
  };

  const addVenueService = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/venue', newVenue);
      setVenueList([...venueList, response.data]);
      setNewVenue({
        location: '',
        description: '',
        capacity: '',
        price: '',
        imageUrl: '',
        availability: 'Available',
      });
      fetchVenueCount();
    } catch (error) {
      console.error('Error adding venue service:', error);
    }
  };

  const updateVenueService = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/venue/${id}`, editVenue);
      setVenueList((prevVenueList) =>
        prevVenueList.map((venue) => (venue.id === id ? response.data : venue))
      );
      setEditingId(null);
      setEditVenue({
        location: '',
        description: '',
        capacity: '',
        price: '',
        imageUrl: '',
        availability: 'Available',
      });
      fetchVenueCount();
    } catch (error) {
      console.error('Error updating venue service:', error);
    }
  };

  const deleteVenueService = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/venue/${id}`);
      setVenueList(venueList.filter((venue) => venue.id !== id));
      fetchVenueCount();
    } catch (error) {
      console.error('Error deleting venue service:', error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ backgroundColor: '#87CEEB80', height: '100vh', overflowY: 'auto' }}
    >
      <div className="container">
        <h1 className="text-center my-4">Venue Services</h1>
        <div className="row">
          
          {/* Venue List Section */}
          <div className="col-md-8 mb-4">
            <div className="card shadow-sm p-4">
              <h2 className="mb-4">Venue List</h2>
              <table className="table table-hover table-bordered" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <thead className="table-light">
                  <tr>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Capacity</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Availability</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {venueList.map((venue) => (
                    <tr key={venue.id}>
                      {editingId === venue.id ? (
                        <>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={editVenue.location}
                              onChange={(e) => setEditVenue({ ...editVenue, location: e.target.value })}
                            />
                          </td>
                          <td>
                            <textarea
                              className="form-control"
                              value={editVenue.description}
                              onChange={(e) => setEditVenue({ ...editVenue, description: e.target.value })}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={editVenue.capacity}
                              onChange={(e) => setEditVenue({ ...editVenue, capacity: parseInt(e.target.value) })}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={editVenue.price}
                              onChange={(e) => setEditVenue({ ...editVenue, price: parseFloat(e.target.value) })}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={editVenue.imageUrl}
                              onChange={(e) => setEditVenue({ ...editVenue, imageUrl: e.target.value })}
                            />
                          </td>
                          <td>
                            <select
                              className="form-control"
                              value={editVenue.availability}
                              onChange={(e) => setEditVenue({ ...editVenue, availability: e.target.value })}
                            >
                              <option value="Available">Available</option>
                              <option value="Unavailable">Unavailable</option>
                            </select>
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={() => updateVenueService(venue.id)}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => setEditingId(null)}
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{venue.location}</td>
                          <td>{venue.description}</td>
                          <td>{venue.capacity}</td>
                          <td>₹{venue.price}</td>
                          <td>
                            <img
                              src={venue.imageUrl}
                              alt={venue.location}
                              style={{ width: '100px', height: 'auto' }}
                            />
                          </td>
                          <td>{venue.availability}</td>
                          <td className="text-center">
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => {
                                setEditingId(venue.id);
                                setEditVenue(venue);
                              }}
                            >
                              Update
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteVenueService(venue.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Summary and Add New Venue Section */}
          <div className="col-md-4">
            {/* Summary Section */}
            <div className="card shadow-sm p-4 mb-4">
              <h2 className="mb-3">Summary</h2>
              <div className="text-center">
                <p className="lead">
                  <strong>Total Venues Available:</strong> {totalVenueCount}
                </p>
              </div>
            </div>
            
            {/* Add New Venue Form */}
            <div className="card shadow-sm p-4">
              <h2 className="mb-3">Add New Venue</h2>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  value={newVenue.location}
                  onChange={(e) => setNewVenue({ ...newVenue, location: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  value={newVenue.description}
                  onChange={(e) => setNewVenue({ ...newVenue, description: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Capacity"
                  value={newVenue.capacity}
                  onChange={(e) => setNewVenue({ ...newVenue, capacity: parseInt(e.target.value) })}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={newVenue.price}
                  onChange={(e) => setNewVenue({ ...newVenue, price: parseFloat(e.target.value) })}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Image URL"
                  value={newVenue.imageUrl}
                  onChange={(e) => setNewVenue({ ...newVenue, imageUrl: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <select
                  className="form-control"
                  value={newVenue.availability}
                  onChange={(e) => setNewVenue({ ...newVenue, availability: e.target.value })}
                >
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>
              <button className="btn btn-primary w-100" onClick={addVenueService}>
                Add Venue
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VenueService;
