// // const express = require('express');
// // const router = express.Router();
// // const Venue = require('../models/Venue');

// // // Create a new venue
// // router.post('/', async (req, res) => {
// //   try {
// //     const venue = await Venue.create(req.body);
// //     res.status(201).json(venue);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // });

// // // Get all venues
// // router.get('/', async (req, res) => {
// //   try {
// //     const venues = await Venue.findAll();
// //     res.status(200).json(venues);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // // Update a venue by ID
// // router.put('/:id', async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const [updated] = await Venue.update(req.body, { where: { id } });
// //     if (updated) {
// //       const updatedVenue = await Venue.findByPk(id);
// //       res.status(200).json(updatedVenue);
// //     } else {
// //       res.status(404).json({ message: 'Venue not found' });
// //     }
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // });

// // // Delete a venue by ID
// // router.delete('/:id', async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const deleted = await Venue.destroy({ where: { id } });
// //     if (deleted) {
// //       res.status(204).send();
// //     } else {
// //       res.status(404).json({ message: 'Venue not found' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { db, connectDB } = require('../config/db.js'); // Ensure this points to your database connection


// // Create a new venue
// router.post('/', (req, res) => {
//   const sql = 'INSERT INTO venues (`location`, `description`, `capacity`, `price`, `imageUrl`) VALUES (?)';
//   const values = [
//     req.body.location,
//     req.body.description,
//     req.body.capacity,
//     req.body.price,
//     req.body.imageUrl,
//   ];

//   db.query(sql, [values], (err, data) => {
//     if (err) {
//       return res.json(err);
//     }
//     return res.json({ id: data.insertId, ...req.body }); // Return the new venue data with its ID
//   });
// });

// // Get all venues
// router.get('/', (req, res) => {
//   const sql = 'SELECT `id`, `location`, `description`, `capacity`, `price`, `imageUrl` FROM venues';

//   db.query(sql, (err, data) => {
//     if (err) {
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// });

// // Update a venue by ID
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const sql = 'UPDATE venues SET `location` = ?, `description` = ?, `capacity` = ?, `price` = ?, `imageUrl` = ? WHERE `id` = ?';
//   const values = [
//     req.body.location,
//     req.body.description,
//     req.body.capacity,
//     req.body.price,
//     req.body.imageUrl,
//     id,
//   ];

//   db.query(sql, values, (err, data) => {
//     if (err) {
//       return res.json(err);
//     }
//     if (data.affectedRows === 0) {
//       return res.status(404).json({ message: 'Venue not found' });
//     }
//     return res.json({ message: 'Venue updated successfully' });
//   });
// });

// // Delete a venue by ID
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   const sql = 'DELETE FROM venues WHERE `id` = ?';

//   db.query(sql, [id], (err, data) => {
//     if (err) {
//       return res.json(err);
//     }
//     if (data.affectedRows === 0) {
//       return res.status(404).json({ message: 'Venue not found' });
//     }
//     return res.status(204).send();
//   });
// });

// module.exports = router;


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

module.exports = router;
