import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DecorationService = () => {
  const [decorationList, setDecorationList] = useState([]);
  const [newDecoration, setNewDecoration] = useState({ name: '', price: '', description: '', imageUrl: '' });
  const [editingId, setEditingId] = useState(null);
  const [editDecoration, setEditDecoration] = useState({ name: '', price: '', description: '', imageUrl: '' });

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

  const addDecorationService = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/decoration', newDecoration);
      setDecorationList([...decorationList, response.data]);
      setNewDecoration({ name: '', price: '', description: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding decoration service:', error);
    }
  };

  const updateDecorationService = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/decoration/${id}`, editDecoration);
      setDecorationList(
        decorationList.map((decoration) => (decoration.id === id ? response.data : decoration))
      );
      setEditingId(null);
      setEditDecoration({ name: '', price: '', description: '', imageUrl: '' });
    } catch (error) {
      console.error('Error updating decoration service:', error);
    }
  };

  const deleteDecorationService = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/decoration/${id}`);
      setDecorationList(decorationList.filter((decoration) => decoration.id !== id));
    } catch (error) {
      console.error('Error deleting decoration service:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Decoration Services</h1>

      {/* Add New Decoration Service */}
      <div className="card p-3 mb-4">
        <h2>Add New Decoration Service</h2>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newDecoration.name}
            onChange={(e) => setNewDecoration({ ...newDecoration, name: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={newDecoration.price}
            onChange={(e) => setNewDecoration({ ...newDecoration, price: parseFloat(e.target.value) })}
          />
        </div>
        <div className="form-group mb-2">
          <textarea
            className="form-control"
            placeholder="Description"
            value={newDecoration.description}
            onChange={(e) => setNewDecoration({ ...newDecoration, description: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={newDecoration.imageUrl}
            onChange={(e) => setNewDecoration({ ...newDecoration, imageUrl: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={addDecorationService}>Add Decoration</button>
      </div>

      {/* Decoration Services List */}
      <h2>Decoration List</h2>
      <table className="table table-striped">
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
            <tr key={decoration.id}>
              {editingId === decoration.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={editDecoration.name}
                      onChange={(e) => setEditDecoration({ ...editDecoration, name: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={editDecoration.price}
                      onChange={(e) => setEditDecoration({ ...editDecoration, price: parseFloat(e.target.value) })}
                    />
                  </td>
                  <td>
                    <textarea
                      className="form-control"
                      value={editDecoration.description}
                      onChange={(e) => setEditDecoration({ ...editDecoration, description: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={editDecoration.imageUrl}
                      onChange={(e) => setEditDecoration({ ...editDecoration, imageUrl: e.target.value })}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => updateDecorationService(decoration.id)}
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
                  <td>{decoration.name}</td>
                  <td>${decoration.price}</td>
                  <td>{decoration.description}</td>
                  <td>
                    <img src={decoration.imageUrl} alt={decoration.name} style={{ width: '100px', height: 'auto' }} />
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => {
                        setEditingId(decoration.id);
                        setEditDecoration(decoration);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteDecorationService(decoration.id)}
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
  );
};

export default DecorationService;
