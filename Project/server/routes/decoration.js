// const express = require('express');
// const router = express.Router();
// const Decoration = require('../models/Decoration');

// // Create a new decoration
// router.post('/', async (req, res) => {
//   try {
//     const decoration = await Decoration.create(req.body);
//     res.status(201).json(decoration);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get all decorations
// router.get('/', async (req, res) => {
//   try {
//     const decorations = await Decoration.findAll();
//     res.status(200).json(decorations);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a decoration by ID
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const [updated] = await Decoration.update(req.body, { where: { id } });
//     if (updated) {
//       const updatedDecoration = await Decoration.findByPk(id);
//       res.status(200).json(updatedDecoration);
//     } else {
//       res.status(404).json({ message: 'Decoration not found' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Delete a decoration by ID
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await Decoration.destroy({ where: { id } });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'Decoration not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { db, connectDB } = require('../config/db.js'); // Import your database connection

// Create a new decoration
router.post('/', (req, res) => {
    const query = 'INSERT INTO decorations (name, price, description, imageUrl) VALUES (?, ?, ?, ?)';
    const values = [
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.imageUrl
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }
        return res.status(201).json({ id: result.insertId, name: req.body.name, price: req.body.price, description: req.body.description, imageUrl: req.body.imageUrl });
    });
});

// Get all decorations
router.get('/', (req, res) => {
    const query = 'SELECT * FROM decorations';

    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(results);
    });
});

// Update a decoration by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE decorations SET name = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?';
    const values = [
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.imageUrl,
        id
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Decoration not found' });
        }
        return res.status(200).json({ id, name: req.body.name, price: req.body.price, description: req.body.description, imageUrl: req.body.imageUrl });
    });
});

// Delete a decoration by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM decorations WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Decoration not found' });
        }
        return res.status(204).send();
    });
});

module.exports = router;
