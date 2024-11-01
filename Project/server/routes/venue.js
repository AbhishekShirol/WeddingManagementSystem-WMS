const express = require('express');
const router = express.Router();
const Venue = require('../models/Venue');

// Create a new venue
router.post('/', async (req, res) => {
  try {
    const venue = await Venue.create(req.body);
    res.status(201).json(venue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all venues
router.get('/', async (req, res) => {
  try {
    const venues = await Venue.findAll();
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a venue by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Venue.update(req.body, { where: { id } });
    if (updated) {
      const updatedVenue = await Venue.findByPk(id);
      res.status(200).json(updatedVenue);
    } else {
      res.status(404).json({ message: 'Venue not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a venue by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Venue.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Venue not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
