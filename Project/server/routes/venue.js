const express = require('express');
const router = express.Router();
const { db } = require('../config/db.js'); // Ensure this points to your database connection

// Create a new venue
router.post('/', (req, res) => {
  const sql = 'INSERT INTO venues (`location`, `description`, `capacity`, `price`, `imageUrl`, `availability`) VALUES (?)';
  const values = [
    req.body.location,
    req.body.description,
    req.body.capacity,
    req.body.price,
    req.body.imageUrl,
    req.body.availability || 'Available', // Default to 'Available' if not specified
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json({ id: data.insertId, ...req.body });
  });
});

// Get all venues
router.get('/', (req, res) => {
  const sql = 'SELECT `id`, `location`, `description`, `capacity`, `price`, `imageUrl`, `availability` FROM venues';

  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

// Update a venue by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE venues SET `location` = ?, `description` = ?, `capacity` = ?, `price` = ?, `imageUrl` = ?, `availability` = ? WHERE `id` = ?';
  const values = [
    req.body.location || '', // Keep existing values if no new input
    req.body.description || '',
    req.body.capacity || 0,
    req.body.price || 0.0,
    req.body.imageUrl || '',
    req.body.availability || 'Available',
    id,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.affectedRows === 0) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    return res.json({ message: 'Venue updated successfully' });
  });
});

// Delete a venue by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM venues WHERE `id` = ?';

  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.affectedRows === 0) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    return res.status(204).send();
  });
});




// Book a venue
router.post('/book', (req, res) => {
  const { registrationId, serviceType, serviceId } = req.body;

  const query = 'CALL book_service(?, ?, ?)';
  const values = [registrationId, serviceType, serviceId];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }

    if (results && results.length > 0 && results[0].affectedRows !== undefined) {
      if (results[0].affectedRows === 0) {
        return res.status(404).json({ message: 'Registration not found or service already booked' });
      }
    }

    return res.status(200).json({ message: 'Venue service booked successfully' });

  });
});



router.get('/count', async (req, res) => {
  try {
      const query = 'SELECT COUNT(*) AS total FROM venues where availability = "Available"';
      
      db.query(query, (err, results) => {
          if (err) {
              console.log(err);
              return res.status(500).json({ error: err.message });
          }
          return res.status(200).json({ total: results[0].total });
      });
  } catch (error) {
      console.error('Error fetching total availability count:', error);
      res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
