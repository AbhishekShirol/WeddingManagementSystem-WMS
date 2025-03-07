import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CateringService = () => {
  const [cateringList, setCateringList] = useState([]);
  const [newCatering, setNewCatering] = useState({ name: '', price: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [editCatering, setEditCatering] = useState({ name: '', price: '', description: '' });
  const [totalCateringCount, setTotalCateringCount] = useState(0); // State for total count

  useEffect(() => {
    fetchCateringServices();
    fetchCateringCount();
  }, []);

  const fetchCateringServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/catering');
      setCateringList(response.data);
    } catch (error) {
      console.error('Error fetching catering services:', error);
    }
  };

  const fetchCateringCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/catering/count');
      setTotalCateringCount(response.data.total);
    } catch (error) {
      console.error('Error fetching total catering count:', error);
    }
  };

  const addCateringService = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/catering', newCatering);
      setCateringList([...cateringList, response.data]);
      setNewCatering({ name: '', price: '', description: '' });
      fetchCateringCount();
    } catch (error) {
      console.error('Error adding catering service:', error);
    }
  };

  const updateCateringService = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/catering/${id}`, editCatering);
      setCateringList(
        cateringList.map((catering) => (catering.id === id ? response.data : catering))
      );
      setEditingId(null);
      setEditCatering({ name: '', price: '', description: '' });
      fetchCateringCount();
    } catch (error) {
      console.error('Error updating catering service:', error);
    }
  };

  const deleteCateringService = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/catering/${id}`);
      setCateringList(cateringList.filter((catering) => catering.id !== id));
      fetchCateringCount();
    } catch (error) {
      console.error('Error deleting catering service:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#E5E5E5CC', minHeight: '100vh' }}>
      <div className="container py-5">
        <h1 className="text-center my-4">Catering Services</h1>
        <div className="row">
          
          {/* Catering List Section */}
          <div className="col-md-8 mb-4">
            <div className="card shadow-sm p-4">
              <h2 className="mb-4">Catering List</h2>
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
                  {cateringList.map((catering) => (
                    <tr key={catering.id}>
                      {editingId === catering.id ? (
                        <>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={editCatering.name}
                              onChange={(e) => setEditCatering({ ...editCatering, name: e.target.value })}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={editCatering.price}
                              onChange={(e) => setEditCatering({ ...editCatering, price: parseFloat(e.target.value) })}
                            />
                          </td>
                          <td>
                            <textarea
                              className="form-control"
                              value={editCatering.description}
                              onChange={(e) => setEditCatering({ ...editCatering, description: e.target.value })}
                            />
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={() => updateCateringService(catering.id)}
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
                          <td>{catering.name}</td>
                          <td>₹{catering.price}</td>
                          <td>{catering.description}</td>
                          <td className="text-center">
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => {
                                setEditingId(catering.id);
                                setEditCatering(catering);
                              }}
                            >
                              Update
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteCateringService(catering.id)}
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
          
          {/* Summary and Add New Catering Section */}
          <div className="col-md-4">
            {/* Summary Section */}
            <div className="card shadow-sm p-4 mb-4">
              <h2 className="mb-3">Summary</h2>
              <div className="text-center">
                <p className="lead"><strong>Total Caterings Available:</strong> {totalCateringCount}</p>
              </div>
            </div>
            
            {/* Add New Catering Service */}
            <div className="card shadow-sm p-4">
              <h2 className="mb-3">Add New Catering Service</h2>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={newCatering.name}
                  onChange={(e) => setNewCatering({ ...newCatering, name: e.target.value })}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={newCatering.price}
                  onChange={(e) => setNewCatering({ ...newCatering, price: parseFloat(e.target.value) })}
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  value={newCatering.description}
                  onChange={(e) => setNewCatering({ ...newCatering, description: e.target.value })}
                />
              </div>
              <button className="btn btn-primary w-100" onClick={addCateringService}>Add Catering</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CateringService;
