import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const VenueService = () => {
  const [venueList, setVenueList] = useState([]);
  const [newVenue, setNewVenue] = useState({ location: '', description: '', capacity: '', price: '', imageUrl: '' });
  const [editingId, setEditingId] = useState(null);
  const [editVenue, setEditVenue] = useState({ location: '', description: '', capacity: '', price: '', imageUrl: '' });

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/venue');
      setVenueList(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const addVenue = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/venue', newVenue);
      setVenueList([...venueList, response.data]);
      setNewVenue({ location: '', description: '', capacity: '', price: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding venue:', error);
    }
  };

  const updateVenue = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/venue/${id}`, editVenue);
      setVenueList(
        venueList.map((venue) => (venue.id === id ? response.data : venue))
      );
      setEditingId(null);
      setEditVenue({ location: '', description: '', capacity: '', price: '', imageUrl: '' });
    } catch (error) {
      console.error('Error updating venue:', error);
    }
  };

  const deleteVenue = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/venue/${id}`);
      setVenueList(venueList.filter((venue) => venue.id !== id));
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Venue Services</h1>

      {/* Add New Venue */}
      <div className="card p-3 mb-4">
        <h2>Add New Venue</h2>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={newVenue.location}
            onChange={(e) => setNewVenue({ ...newVenue, location: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={newVenue.description}
            onChange={(e) => setNewVenue({ ...newVenue, description: e.target.value })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Capacity"
            value={newVenue.capacity}
            onChange={(e) => setNewVenue({ ...newVenue, capacity: parseInt(e.target.value) })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={newVenue.price}
            onChange={(e) => setNewVenue({ ...newVenue, price: parseFloat(e.target.value) })}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={newVenue.imageUrl}
            onChange={(e) => setNewVenue({ ...newVenue, imageUrl: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={addVenue}>Add Venue</button>
      </div>

      {/* Venue Services List */}
      <h2>Venue Services List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Description</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {venueList.map((venue) => (
    <tr key={venue.id}>
      {editingId === venue.id ? (
        <>
          <td>{venue.id}</td>
          <td>
            <input
              type="text"
              className="form-control"
              value={editVenue.location}
              onChange={(e) => setEditVenue({ ...editVenue, location: e.target.value })}
            />
          </td>
          <td>
            <input
              type="text"
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
            <button
              className="btn btn-success btn-sm me-2"
              onClick={() => updateVenue(venue.id)}
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
          <td>{venue.id}</td>
          <td>{venue.location}</td>
          <td>{venue.description}</td>
          <td>{venue.capacity}</td>
          <td>${venue.price}</td>
          <td>{venue.imageUrl}</td>
          <td>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => {
                setEditingId(venue.id);
                setEditVenue({ ...venue }); // Copy venue data for editing
              }}
            >
              Update
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteVenue(venue.id)}
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

export default VenueService;
