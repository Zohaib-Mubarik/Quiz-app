const mongoose = require('mongoose');
const Quiz = require('./models/Quiz');
require('dotenv').config();

const quizzes = [
  {
    question: "Which element has the atomic number 79?",
    options: ["Platinum", "Gold", "Silver", "Mercury"],
    answer: "Gold",
  },
  {
    question: "Who is known as the father of modern computer science?",
    options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Tim Berners-Lee"],
    answer: "Alan Turing",
  },
  {
    question: "Which planet has the largest moon in our solar system?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)"],
    answer: "cos(x)",
  },
  {
    question: "Which data structure uses LIFO (Last In First Out)?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    answer: "Stack",
  },
  {
    question: "Which country hosted the first modern Olympic Games?",
    options: ["Italy", "France", "Greece", "England"],
    answer: "Greece",
  },
  {
    question: "Which gas is most abundant in the Earth’s atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Nitrogen",
  },
  {
    question: "Which programming language is known as the 'mother of all languages'?",
    options: ["C", "Assembly", "COBOL", "FORTRAN"],
    answer: "C",
  },
  {
    question: "Who developed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
    answer: "Albert Einstein",
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Congo"],
    answer: "Nile",
  },
  {
    question: "In which year was the World Wide Web invented?",
    options: ["1989", "1991", "1985", "1995"],
    answer: "1989",
  },
  {
    question: "Which country is also known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answer: "Japan",
  },
  {
    question: "Which planet rotates on its side, unlike most other planets?",
    options: ["Uranus", "Neptune", "Venus", "Mars"],
    answer: "Uranus",
  },
  {
    question: "Who painted the famous 'Starry Night'?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
    answer: "Vincent van Gogh",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Lead", "Sodium", "Lithium"],
    answer: "Mercury",
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "England", "Germany", "Spain"],
    answer: "France",
  },
  {
    question: "Which language is the most spoken in the world (native speakers)?",
    options: ["English", "Hindi", "Mandarin Chinese", "Spanish"],
    answer: "Mandarin Chinese",
  },
  {
    question: "Which scientist proposed the laws of motion and universal gravitation?",
    options: ["Kepler", "Einstein", "Newton", "Galileo"],
    answer: "Newton",
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Cheetah", "Leopard", "Horse", "Lion"],
    answer: "Cheetah",
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");
    await Quiz.deleteMany();
    await Quiz.insertMany(quizzes);
    console.log("Quizzes added successfully");
    process.exit();
  })
  .catch(err => console.log(err));
