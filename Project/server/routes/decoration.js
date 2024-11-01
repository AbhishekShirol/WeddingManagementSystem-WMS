const express = require('express');
const router = express.Router();
const Decoration = require('../models/Decoration');

// Create a new decoration
router.post('/', async (req, res) => {
  try {
    const decoration = await Decoration.create(req.body);
    res.status(201).json(decoration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all decorations
router.get('/', async (req, res) => {
  try {
    const decorations = await Decoration.findAll();
    res.status(200).json(decorations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a decoration by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Decoration.update(req.body, { where: { id } });
    if (updated) {
      const updatedDecoration = await Decoration.findByPk(id);
      res.status(200).json(updatedDecoration);
    } else {
      res.status(404).json({ message: 'Decoration not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a decoration by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Decoration.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Decoration not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
