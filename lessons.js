const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');

router.post('/', async (req, res) => {
  const { title, url, code } = req.body;
  const lesson = new Lesson({ title, url, code });
  await lesson.save();
  res.status(200).send('Lesson saved');
});

router.get('/:code', async (req, res) => {
  const lesson = await Lesson.findOne({ code: req.params.code });
  if (!lesson) return res.status(404).send({});
  res.json(lesson);
});

module.exports = router;
