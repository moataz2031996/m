const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).send('Phone required');
  const user = new User({ phone });
  await user.save();
  res.status(200).send('Registered');
});

module.exports = router;
