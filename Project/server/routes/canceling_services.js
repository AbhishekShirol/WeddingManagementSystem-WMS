const express = require('express');
const router = express.Router();
const { db, connectDB } = require('../config/db.js'); // Import your database connection


// API endpoint for canceling a service
router.post('/cancel-service', (req, res) => {
    const { registrationId, serviceType, serviceId } = req.body;

    // console.log('registrationId:', registrationId);
    // console.log('serviceType:', serviceType);
    // console.log('serviceId:', serviceId);
  
    // Validate input
    if (!registrationId || !serviceType || !serviceId) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
  
    // Call stored procedure to cancel the service
    const query = 'CALL cancel_service(?, ?, ?)';
  
    db.execute(query, [registrationId, serviceType, serviceId], (err, results) => {
      if (err) {
        console.error('Error executing stored procedure:', err);
        return res.status(500).json({ success: false, message: 'Error canceling service' });
      }
  
      // Respond with success
      res.status(200).json({ success: true, message: `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} canceled successfully!` });
    });
  });



// API endpoint for full registration cancellation
router.post('/cancel-registration', (req, res) => {
    const { registrationId, venueId } = req.body;
    // console.log('registrationId:', registrationId);
    // console.log('venueId:', venueId);
  
    if (!registrationId) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
  
    // Start a transaction to ensure consistency
    db.beginTransaction((err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Transaction failed to start' });
        }

        // Step 1: If venueId is provided, make the venue available
        if (venueId) {
            const venueQuery = 'UPDATE venues SET availability = "Available" WHERE id = ?';
            db.execute(venueQuery, [venueId], (err, results) => {
                if (err) {
                    return db.rollback(() => {
                        res.status(500).json({ success: false, message: 'Error updating venue availability' });
                    });
                }
                // Proceed to update service columns to NULL after venue update
                updateServices();
            });
        } else {
            // If no venueId, directly proceed to update service columns
            updateServices();
        }

        // Step 2: Set other services (music_id, catering_id, decoration_id) to NULL
        function updateServices() {
            const updateServicesQuery = `
                UPDATE registrations 
                SET music_id = NULL, catering_id = NULL, decoration_id = NULL 
                WHERE reg_id = ?`;
            db.execute(updateServicesQuery, [registrationId], (err, results) => {
                if (err) {
                    return db.rollback(() => {
                        res.status(500).json({ success: false, message: 'Error updating services to NULL' });
                    });
                }
                // Proceed to delete the registration after updating services
                deleteBookingLog();
            });
        }


        // Step 3: Delete entries from bookings_log where reg_id matches
        function deleteBookingLog() {
            const deleteLogQuery = 'DELETE FROM bookings_log WHERE reg_id = ?';
            db.execute(deleteLogQuery, [registrationId], (err, results) => {
                if (err) {
                    console.error('Error deleting from bookings_log:', err);
                    return db.rollback(() => {
                        res.status(500).json({ success: false, message: 'Error deleting from bookings_log' });
                    });
                }
                console.log('Bookings log entries deleted successfully');
                deleteRegistration();
            });
        }

        
        // Step 3: Delete the registration row
        function deleteRegistration() {
            const deleteQuery = 'DELETE FROM registrations WHERE reg_id = ?';
            db.execute(deleteQuery, [registrationId], (err, results) => {
                if (err) {
                    console.error('Error deleting registration:', err);
                    return db.rollback(() => {
                        res.status(500).json({ success: false, message: 'Error deleting registration' });
                    });
                }
                // Commit the transaction if everything is successful
                db.commit((err) => {
                    if (err) {
                        return db.rollback(() => {
                            res.status(500).json({ success: false, message: 'Transaction commit failed' });
                        });
                    }
                    res.status(200).json({ success: true, message: 'Registration and venue cancellation successful' });
                });
            });
        }
    });
});


  
  
  module.exports = router;

