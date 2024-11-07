const express = require('express');
const router = express.Router();
const { db } = require('../config/db.js'); // Import your database connection



// API endpoint to fetch detailed descriptions for a specific registration ID
router.get('/:reg_id', (req, res) => {
  const regId = req.params.reg_id;

  // SQL query to join the tables (registrations, venues, caterings, music, decorations) based on the reg_id
  const query = `
    SELECT 
      r.reg_id,
      r.groom_name, r.bride_name, r.wedding_date, r.number_of_guests,
      v.id AS venue_id, v.location AS venue_location, v.description AS venue_description, v.price AS venue_price, v.imageUrl AS venue_image,
      c.id AS catering_id, c.name AS catering_name, c.description AS catering_description, c.price AS catering_price,
      m.id AS music_id, m.name AS music_name, m.description AS music_description, m.price AS music_price,
      d.id AS decoration_id, d.name AS decoration_name, d.description AS decoration_description, d.price AS decoration_price, d.imageUrl AS decoration_image
    FROM registrations r
    LEFT JOIN venues v ON r.venue_id = v.id
    LEFT JOIN caterings c ON r.catering_id = c.id
    LEFT JOIN music m ON r.music_id = m.id
    LEFT JOIN decorations d ON r.decoration_id = d.id
    WHERE r.reg_id = ?
  `;

  // Execute the query to fetch the data
  db.execute(query, [regId], (err, result) => {
    if (err) {
      console.error('Error fetching service details:', err);
      return res.status(500).json({ message: 'Error fetching service details' });
    }

    // If no result found for the given reg_id, send a 404 response
    if (result.length === 0) {
      return res.status(404).json({ message: 'No services found for this registration' });
    }

    // Return the result as a response
    res.json(result[0]); // The result will contain the details for the given registration
  });
});

module.exports = router;
