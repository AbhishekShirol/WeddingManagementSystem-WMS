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



// Book a service for a registration (using stored procedure)
router.post('/book', (req, res) => {
    const { registrationId, serviceType, serviceId } = req.body; // Include serviceType and serviceId

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
        // The structure of results may vary based on what your procedure does
        // If your procedure only logs and does not return an affectedRows, you should not rely on it.
        if (results && results.length > 0 && results[0].affectedRows !== undefined) {
            if (results[0].affectedRows === 0) {
                return res.status(404).json({ message: 'Registration not found or service already booked' });
            }
        }

        // If you only want to confirm the procedure was called successfully:
        return res.status(200).json({ message: `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} service booked successfully` });
    });
});



// Cancel a service for a registration
router.post('/cancel', (req, res) => {
    const { registrationId, serviceType, serviceId } = req.body;

    // Call the cancel_service procedure
    const query = 'CALL cancel_service(?, ?, ?)';
    const values = [registrationId, serviceType, serviceId];

    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }

        return res.status(200).json({ message: `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} service canceled successfully` });
    });
});

module.exports = router;