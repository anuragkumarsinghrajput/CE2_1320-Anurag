const express = require('express');
const router = express.Router();
const Score = require('../models/Score');


router.post('/', async (req, res) => {
  const { player, score } = req.body;

  if (!player || score == null) {
    return res.status(400).json({ error: 'Player and score are required' });
  }

  try {
    const newScore = new Score({ player, score });
    await newScore.save();
    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save score' });
  }
});


router.get('/', async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch scores' });
  }
});

module.exports = router;
