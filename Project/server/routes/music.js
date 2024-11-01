const express = require('express');
const router = express.Router();
const Music = require('../models/Music');

// Create a new music service
router.post('/', async (req, res) => {
  try {
    const music = await Music.create(req.body);
    res.status(201).json(music);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all music services
router.get('/', async (req, res) => {
  try {
    const musicServices = await Music.findAll();
    res.status(200).json(musicServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a music service by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Music.update(req.body, { where: { id } });
    if (updated) {
      const updatedMusic = await Music.findByPk(id);
      res.status(200).json(updatedMusic);
    } else {
      res.status(404).json({ message: 'Music service not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a music service by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Music.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Music service not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
