const express = require('express');
const router = express.Router();
const { db } = require('../config/db.js'); // Import your database connection


// Fetch all wedding registrations
router.get('/', async (req, res) => {
  try {
    const user_id = req.query.user_id;  // Access user_id from query params

    // If no user_id is provided, fetch all registrations (for admin)
    let query = 'SELECT * FROM registrations';
    let queryParams = [];

    // If a user_id is provided, filter by user_id
    if (user_id) {
      query += ' WHERE user_id = ?';
      queryParams = [user_id];
    }

    // Execute the query with appropriate params
    db.query(query, queryParams, (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Server error during fetching registrations" });
      }
      res.json(results);
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});



// Wedding registration route
router.post('/', async (req, res) => {
  try {
    // Check if the wedding registration already exists
    const query = 'SELECT * FROM registrations WHERE wedding_date = ? AND groom_name = ? AND bride_name = ?';
    
    db.query(query, [req.body.wedding_date, req.body.groom_name, req.body.bride_name], (err, results) => {
      if (err) return res.status(500).json({ message: "Server error during wedding lookup" });
      
      if (results.length) {
        return res.status(409).json({ message: "Wedding registration already exists!" });
      }

      // Insert the new wedding registration
      const insertQuery = `
        INSERT INTO registrations (user_id, groom_name, bride_name, wedding_date, number_of_guests)
        VALUES (?, ?, ?, ?, ?)
      `;

      const values = [
        req.body.user_id,
        req.body.groom_name,
        req.body.bride_name,
        req.body.wedding_date,
        req.body.number_of_guests
      ];

      db.query(insertQuery, values, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(400).json({ message: 'Error inserting wedding registration' });
        }
        res.status(201).json({ message: 'Wedding registered successfully' });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});



router.get('/withTotalPrice', async (req, res) => {
  const query = `
    SELECT 
    r.reg_id,
    r.user_id,
    r.groom_name,
    r.bride_name,
    r.wedding_date,
    r.number_of_guests,
    COALESCE((
      SELECT SUM(service_price) 
      FROM (
        SELECT COALESCE(v.price, 0) AS service_price FROM venues v WHERE v.id = r.venue_id
        UNION ALL
        SELECT COALESCE(m.price, 0) FROM music m WHERE m.id = r.music_id
        UNION ALL
        SELECT COALESCE(c.price, 0) FROM caterings c WHERE c.id = r.catering_id
        UNION ALL
        SELECT COALESCE(d.price, 0) FROM decorations d WHERE d.id = r.decoration_id
      ) AS service_prices
    ), 0) AS total_price
    FROM registrations r;
  `;

  try {
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error fetching registrations with total price", error: err });
      }
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
