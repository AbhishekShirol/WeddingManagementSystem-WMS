// const express = require('express');
// const router = express.Router();
// const { db, connectDB } = require('../config/db.js'); // Import your database connection

// // Wedding registration route
// router.post('/', async (req, res) => {
//   try {
//     // Check if the wedding registration already exists
//     const query = 'SELECT * FROM registrations WHERE wedding_date = ?';
    
//     db.query(query, [req.body.wedding_date], (err, results) => {
//       if (err) return res.status(500).json({ message: "Server error during wedding lookup" });
      
//       if (results.length) {
//         return res.status(409).json({ message: "Wedding registration already exists!" });
//       }

//       // Insert the new wedding registration
//       const insertQuery = `
//         INSERT INTO registrations (user_id,groom_name, bride_name, wedding_date, number_of_guests)
//         VALUES (?,?, ?, ?, ?)
//       `;

//       const values = [
//         req.body.user_id,
//         req.body.groom_name,
//         req.body.bride_name,
//         req.body.wedding_date,
//         req.body.number_of_guests
//       ];

//       db.query(insertQuery, values, (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.status(400).json({ message: 'Error inserting wedding registration' });
//         }
//         res.status(201).json({ message: 'Wedding registered successfully' });
//       });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: error.message });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const { db } = require('../config/db.js'); // Import your database connection


// Fetch all wedding registrations
router.get('/', async (req, res) => {

  try {
    const user_id = req.query.user_id;  // Access user_id from query params
    
    // console.log("user id from the backend jkjalkfalkf",user_id);
  
    if (!user_id) {
      return res.status(400).json({ message: "user_id is required" });
    }

    const query = 'SELECT * FROM registrations WHERE user_id = ?';
    db.query(query,[user_id],(err, results) => {
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

module.exports = router;
