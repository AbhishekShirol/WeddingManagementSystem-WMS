const express = require('express');
const router = express.Router();
const Catering = require('../models/Catering');

// Create a new catering service
router.post('/', async (req, res) => {
  try {
    const catering = await Catering.create(req.body);
    res.status(201).json(catering);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all catering services
router.get('/', async (req, res) => {
  try {
    const caterings = await Catering.findAll();
    res.status(200).json(caterings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a catering service by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Catering.update(req.body, { where: { id } });
    if (updated) {
      const updatedCatering = await Catering.findByPk(id);
      res.status(200).json(updatedCatering);
    } else {
      res.status(404).json({ message: 'Catering service not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a catering service by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Catering.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Catering service not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
