// const express = require('express');
// const router = express.Router();
// const Music = require('../models/Music');

// // Create a new music service
// router.post('/', async (req, res) => {
//   try {
//     const music = await Music.create(req.body);
//     res.status(201).json(music);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get all music services
// router.get('/', async (req, res) => {
//   try {
//     const musicServices = await Music.findAll();
//     res.status(200).json(musicServices);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a music service by ID
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const [updated] = await Music.update(req.body, { where: { id } });
//     if (updated) {
//       const updatedMusic = await Music.findByPk(id);
//       res.status(200).json(updatedMusic);
//     } else {
//       res.status(404).json({ message: 'Music service not found' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Delete a music service by ID
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await Music.destroy({ where: { id } });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'Music service not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const { db, connectDB } = require('../config/db.js'); // Ensure this points to your database connection

// Create a new music service
router.post('/', (req, res) => {
    const query = 'INSERT INTO music (name, description, price) VALUES (?, ?, ?)';
    const values = [
        req.body.name,
        req.body.description,
        req.body.price
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }
        return res.status(201).json({ id: result.insertId, name: req.body.name, description: req.body.description, price: req.body.price });
    });
});

// Get all music services
router.get('/', (req, res) => {
    const query = 'SELECT * FROM music';

    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(results);
    });
});

// Update a music service by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE music SET name = ?, description = ?, price = ? WHERE id = ?';
    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        id
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Music service not found' });
        }
        return res.status(200).json({ id, name: req.body.name, description: req.body.description, price: req.body.price });
    });
});

// Delete a music service by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM music WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Music service not found' });
        }
        return res.status(204).send();
    });
});

module.exports = router;
