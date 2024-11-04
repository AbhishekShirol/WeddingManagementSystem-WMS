// const express = require('express');
// const router = express.Router();
// const Catering = require('../models/Catering');

// //Create a new ccatering service


// // Create a new catering service
// router.post('/', async (req, res) => {
//   try {
//     const catering = await Catering.create(req.body);
//     res.status(201).json(catering);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Get all catering services
// router.get('/', async (req, res) => {
//   try {
//     const caterings = await Catering.findAll();
//     res.status(200).json(caterings);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a catering service by ID
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const [updated] = await Catering.update(req.body, { where: { id } });
//     if (updated) {
//       const updatedCatering = await Catering.findByPk(id);
//       res.status(200).json(updatedCatering);
//     } else {
//       res.status(404).json({ message: 'Catering service not found' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Delete a catering service by ID
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleted = await Catering.destroy({ where: { id } });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'Catering service not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;




const express = require('express');
const router = express.Router();
const { db, connectDB } = require('../config/db.js'); // Import your database connection

// Create a new catering service
router.post('/', (req, res) => {
    const query = 'INSERT INTO caterings (name, price, description) VALUES (?, ?, ?)';
    const values = [
        req.body.name,
        req.body.price,
        req.body.description
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }
        return res.status(201).json({ id: result.insertId, name: req.body.name, price: req.body.price, description: req.body.description });
    });
});

// Get all catering services
router.get('/', (req, res) => {
    const query = 'SELECT * FROM caterings';

    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(results);
    });
});

// Update a catering service by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE caterings SET name = ?, price = ?, description = ? WHERE id = ?';
    const values = [
        req.body.name,
        req.body.price,
        req.body.description,
        id
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Catering service not found' });
        }
        return res.status(200).json({ id, name: req.body.name, price: req.body.price, description: req.body.description });
    });
});

// Delete a catering service by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM caterings WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Catering service not found' });
        }
        return res.status(204).send();
    });
});

module.exports = router;
