// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const MusicService = () => {
//   const [musicList, setMusicList] = useState([]);
//   const [newMusic, setNewMusic] = useState({ name: '', price: '', description: '' });
//   const [editingId, setEditingId] = useState(null);
//   const [editMusic, setEditMusic] = useState({ name: '', price: '', description: '' });

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

//   const addMusicService = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/music', newMusic);
//       setMusicList([...musicList, response.data]);
//       setNewMusic({ name: '', price: '', description: '' });
//     } catch (error) {
//       console.error('Error adding music service:', error);
//     }
//   };

//   const updateMusicService = async (id) => {
//     try {
//       const response = await axios.put(`http://localhost:5000/api/music/${id}`, editMusic);
//       setMusicList(
//         musicList.map((music) => (music.id === id ? response.data : music))
//       );
//       setEditingId(null);
//       setEditMusic({ name: '', price: '', description: '' });
//     } catch (error) {
//       console.error('Error updating music service:', error);
//     }
//   };

//   const deleteMusicService = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/music/${id}`);
//       setMusicList(musicList.filter((music) => music.id !== id));
//     } catch (error) {
//       console.error('Error deleting music service:', error);
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center mt-5"
//       style={{ backgroundColor: '#87CEEB80',height: '94vh', overflowY: 'auto' }}
//     >
//     <div className="container">
//       <h1 className="my-4 d-flex justify-content-center">Music Services</h1>

      
//       {/* Music Services List */}
//       <h2>Music Services List</h2>
//       <table className="table table-striped" style={{ borderRadius: '10px', overflow: 'hidden' }}>
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
//               {editingId === music.id ? (
//                 <>
//                   <td>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={editMusic.name}
//                       onChange={(e) => setEditMusic({ ...editMusic, name: e.target.value })}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="number"
//                       className="form-control"
//                       value={editMusic.price}
//                       onChange={(e) => setEditMusic({ ...editMusic, price: parseFloat(e.target.value) })}
//                     />
//                   </td>
//                   <td>
//                     <textarea
//                       className="form-control"
//                       value={editMusic.description}
//                       onChange={(e) => setEditMusic({ ...editMusic, description: e.target.value })}
//                     />
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-success btn-sm me-2"
//                       onClick={() => updateMusicService(music.id)}
//                     >
//                       Save
//                     </button>
//                     <button
//                       className="btn btn-secondary btn-sm"
//                       onClick={() => setEditingId(null)}
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </>
//               ) : (
//                 <>
//                   <td>{music.name}</td>
//                   <td>₹{music.price}</td>
//                   <td>{music.description}</td>
//                   <td>
//                     <button
//                       className="btn btn-warning btn-sm me-2"
//                       onClick={() => {
//                         setEditingId(music.id);
//                         setEditMusic(music);
//                       }}
//                     >
//                       Update
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => deleteMusicService(music.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Add New Music Service */}
//       <div className="card p-3 mb-4">
//         <h2>Add New Music Service</h2>
//         <div className="form-group mb-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             value={newMusic.name}
//             onChange={(e) => setNewMusic({ ...newMusic, name: e.target.value })}
//           />
//         </div>
//         <div className="form-group mb-2">
//           <input
//             type="number"
//             className="form-control"
//             placeholder="Price"
//             value={newMusic.price}
//             onChange={(e) => setNewMusic({ ...newMusic, price: parseFloat(e.target.value) })}
//           />
//         </div>
//         <div className="form-group mb-2">
//           <textarea
//             className="form-control"
//             placeholder="Description"
//             value={newMusic.description}
//             onChange={(e) => setNewMusic({ ...newMusic, description: e.target.value })}
//           />
//         </div>
//         <button className="btn btn-primary" onClick={addMusicService}>Add Music Service</button>
//       </div>

//     </div>
//     </div>
//   );
// };

// export default MusicService;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicService = () => {
  const [musicList, setMusicList] = useState([]);
  const [newMusic, setNewMusic] = useState({ name: '', price: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [editMusic, setEditMusic] = useState({ name: '', price: '', description: '' });
  const [totalMusicCount, setTotalMusicCount] = useState(0);

  useEffect(() => {
    fetchMusicServices();
    fetchMusicCount();
  }, []);

  const fetchMusicServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/music');
      setMusicList(response.data);
    } catch (error) {
      console.error('Error fetching music services:', error);
    }
  };

  const fetchMusicCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/music/count');
      setTotalMusicCount(response.data.total);
    } catch (error) {
      console.error('Error fetching total music count:', error);
    }
  };

  const addMusicService = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/music', newMusic);
      setMusicList([...musicList, response.data]);
      setNewMusic({ name: '', price: '', description: '' });
      fetchMusicCount();
    } catch (error) {
      console.error('Error adding music service:', error);
    }
  };

  const updateMusicService = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/music/${id}`, editMusic);
      setMusicList(
        musicList.map((music) => (music.id === id ? response.data : music))
      );
      setEditingId(null);
      setEditMusic({ name: '', price: '', description: '' });
      fetchMusicCount();
    } catch (error) {
      console.error('Error updating music service:', error);
    }
  };

  const deleteMusicService = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/music/${id}`);
      setMusicList(musicList.filter((music) => music.id !== id));
      fetchMusicCount();
    } catch (error) {
      console.error('Error deleting music service:', error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ backgroundColor: '#87CEEB80', height: '94vh', overflowY: 'auto' }}
    >
      <div className="container">
        <h1 className="text-center my-4">Music Services</h1>
        <div className="row">

          {/* Music List Section */}
          <div className="col-md-8 mb-4">
            <div className="card shadow-sm p-4">
              <h2 className="mb-4">Music List</h2>
              <table className="table table-hover table-bordered" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <thead className="table-light">
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
                      {editingId === music.id ? (
                        <>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={editMusic.name}
                              onChange={(e) => setEditMusic({ ...editMusic, name: e.target.value })}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={editMusic.price}
                              onChange={(e) => setEditMusic({ ...editMusic, price: parseFloat(e.target.value) })}
                            />
                          </td>
                          <td>
                            <textarea
                              className="form-control"
                              value={editMusic.description}
                              onChange={(e) => setEditMusic({ ...editMusic, description: e.target.value })}
                            />
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={() => updateMusicService(music.id)}
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
                          <td>{music.name}</td>
                          <td>₹{music.price}</td>
                          <td>{music.description}</td>
                          <td className="text-center">
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => {
                                setEditingId(music.id);
                                setEditMusic(music);
                              }}
                            >
                              Update
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteMusicService(music.id)}
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

          {/* Summary and Add New Music Section */}
          <div className="col-md-4">
            {/* Summary Section */}
            <div className="card shadow-sm p-4 mb-4">
              <h2 className="mb-3">Summary</h2>
              <div className="text-center">
                <p className="lead"><strong>Total Music Available:</strong> {totalMusicCount}</p>
              </div>
            </div>

            {/* Add New Music Service Section */}
            <div className="card shadow-sm p-4">
              <h2 className="mb-3">Add New Music Service</h2>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={newMusic.name}
                  onChange={(e) => setNewMusic({ ...newMusic, name: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={newMusic.price}
                  onChange={(e) => setNewMusic({ ...newMusic, price: parseFloat(e.target.value) })}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  value={newMusic.description}
                  onChange={(e) => setNewMusic({ ...newMusic, description: e.target.value })}
                />
              </div>
              <button className="btn btn-primary w-100" onClick={addMusicService}>Add Music</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MusicService;
