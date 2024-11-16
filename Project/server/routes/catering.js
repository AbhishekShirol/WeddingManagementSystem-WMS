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



// Book a catering service for a registration (using stored procedure)
router.post('/book', (req, res) => {
    const { registrationId, serviceType, serviceId } = req.body; // Include registrationId, serviceType, and serviceId

    // Define the query to call the stored procedure
    const query = 'CALL book_service(?, ?, ?)';
    const values = [registrationId, serviceType, serviceId];

    // Execute the query
    db.query(query, values, (err, results) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(400).json({ error: err.message }); // Respond with error message
        }

        // Check if the stored procedure executed successfully
        if (results && results.length > 0 && results[0].affectedRows !== undefined) {
            if (results[0].affectedRows === 0) {
                return res.status(404).json({ message: 'Registration not found or service already booked' });
            }
        }

        // Confirm successful booking
        return res.status(200).json({ message: `Catering service booked successfully` });
        
    });
});


// router.get('/count', async (req, res) => {
//     try {

//         const query = 'SELECT COUNT(*) AS total FROM caterings';
//         db.query(query, (err, results) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).json({ error: err.message });
//             }
//             return res.status(200).json(results);})
//     } catch (error) {
//       console.error('Error fetching total catering count:', error);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   });

router.get('/count', async (req, res) => {
    try {
        const query = 'SELECT COUNT(*) AS total FROM caterings';
        
        db.query(query, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json({ total: results[0].total });
        });
    } catch (error) {
        console.error('Error fetching total catering count:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});




module.exports = router;
