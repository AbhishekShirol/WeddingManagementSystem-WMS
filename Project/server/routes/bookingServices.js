// const express = require('express');
// const router = express.Router();
// const { db, connectDB } = require('../config/db.js'); // Ensure this points to your database connection


// // Create a new booking service

// // Booking Music
// app.post('/music', (req, res) => {
//     const { registrationId } = req.body;
  
//     const checkRegSql = 'SELECT * FROM registrations WHERE reg_id = ?';
//     pool.query(checkRegSql, [registrationId], (err, regResults) => {
//       if (err) {
//         console.error('Error checking registration:', err);
//         return res.status(500).json({ error: 'Failed to check registration' });
//       }
//       if (regResults.length === 0) {
//         return res.status(404).json({ error: 'Registration not found' });
//       }
  
//       const checkServiceSql = 'SELECT * FROM services WHERE registration_id = ? AND service_type = "Music"';
//       pool.query(checkServiceSql, [registrationId], (err, serviceResults) => {
//         if (err) {
//           console.error('Error checking music service:', err);
//           return res.status(500).json({ error: 'Failed to check music booking' });
//         }
//         if (serviceResults.length > 0) {
//           return res.status(400).json({ error: 'Music already booked for this registration' });
//         }
  
//         const bookMusicSql = 'INSERT INTO services (registration_id, service_type, status) VALUES (?, "Music", "booked")';
//         pool.query(bookMusicSql, [registrationId], (err, results) => {
//           if (err) {
//             console.error('Error booking music:', err);
//             return res.status(500).json({ error: 'Failed to book music' });
//           }
//           res.status(201).json({ message: 'Music booked successfully' });
//         });
//       });
//     });
//   });
  
//   // Booking Catering
//   app.post('/api/service/book/catering', (req, res) => {
//     const { registrationId } = req.body;
  
//     const checkRegSql = 'SELECT * FROM registrations WHERE reg_id = ?';
//     pool.query(checkRegSql, [registrationId], (err, regResults) => {
//       if (err) {
//         console.error('Error checking registration:', err);
//         return res.status(500).json({ error: 'Failed to check registration' });
//       }
//       if (regResults.length === 0) {
//         return res.status(404).json({ error: 'Registration not found' });
//       }
  
//       const checkServiceSql = 'SELECT * FROM services WHERE registration_id = ? AND service_type = "Catering"';
//       pool.query(checkServiceSql, [registrationId], (err, serviceResults) => {
//         if (err) {
//           console.error('Error checking catering service:', err);
//           return res.status(500).json({ error: 'Failed to check catering booking' });
//         }
//         if (serviceResults.length > 0) {
//           return res.status(400).json({ error: 'Catering already booked for this registration' });
//         }
  
//         const bookCateringSql = 'INSERT INTO services (registration_id, service_type, status) VALUES (?, "Catering", "booked")';
//         pool.query(bookCateringSql, [registrationId], (err, results) => {
//           if (err) {
//             console.error('Error booking catering:', err);
//             return res.status(500).json({ error: 'Failed to book catering' });
//           }
//           res.status(201).json({ message: 'Catering booked successfully' });
//         });
//       });
//     });
//   });
  