const express = require('express');
const Quiz = require('../models/Quiz');
const router = express.Router();

// Fetch all quizzes
router.get('/', async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// Add new quiz
router.post('/', async (req, res) => {
  const newQuiz = new Quiz(req.body);
  await newQuiz.save();
  res.json(newQuiz);
});

module.exports = router;
