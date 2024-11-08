import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CateringService = () => {
  const [cateringList, setCateringList] = useState([]);
  const [newCatering, setNewCatering] = useState({ name: '', price: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [editCatering, setEditCatering] = useState({ name: '', price: '', description: '' });

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

  const addCateringService = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/catering', newCatering);
      setCateringList([...cateringList, response.data]);
      setNewCatering({ name: '', price: '', description: '' });
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
    } catch (error) {
      console.error('Error updating catering service:', error);
    }
  };

  const deleteCateringService = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/catering/${id}`);
      setCateringList(cateringList.filter((catering) => catering.id !== id));
    } catch (error) {
      console.error('Error deleting catering service:', error);
    }
  };

  // console.log(cateringList);

  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ backgroundColor: '#ADD8E6',height: '94vh', overflowY: 'auto' }}
    >
    <div className="container">
      <h1 className="my-4 justify-content-center d-flex">Catering Services</h1>
      {/* Catering Services List */}
      <h2>Catering List</h2>
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
                  <td>
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
                  <td>${catering.price}</td>
                  <td>{catering.description}</td>
                  <td>
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

      {/* Add New Catering Service */}
      {/* <h1 className="my-4">Add Catering Services</h1> */}

      <div className="card p-3 mb-4">
        <h2>Add New Catering Service</h2>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newCatering.name}
            onChange={(e) => setNewCatering({ ...newCatering, name: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={newCatering.price}
            onChange={(e) => setNewCatering({ ...newCatering, price: parseFloat(e.target.value) })}
          />
        </div>
        <div className="form-group mb-2">
          <textarea
            className="form-control"
            placeholder="Description"
            value={newCatering.description}
            onChange={(e) => setNewCatering({ ...newCatering, description: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={addCateringService}>Add Catering</button>
      </div>
    </div>
    </div>
  );
};

export default CateringService;
