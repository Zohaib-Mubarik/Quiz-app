import { useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quizzes")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAnswer = (qIndex, option) => {
    if (selectedAnswers[qIndex]) return; // Prevent re-selection
    const correct = quizzes[qIndex].answer === option;
    if (correct) setScore((prev) => prev + 1);

    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const getOptionClass = (qIndex, option) => {
    const selected = selectedAnswers[qIndex];
    if (!selected) return "bg-blue-100 hover:bg-blue-300";

    if (option === quizzes[qIndex].answer) return "bg-green-500 text-white";
    if (option === selected) return "bg-red-500 text-white";
    return "bg-gray-200";
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 drop-shadow-sm">
        Quiz App
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {quizzes.map((q, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {i + 1}. {q.question}
            </h3>
            <div className="space-y-2">
              {q.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 rounded-lg font-medium transition-colors duration-200 ${getOptionClass(
                    i,
                    option
                  )}`}
                  onClick={() => handleAnswer(i, option)}
                  disabled={!!selectedAnswers[i]}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Score Display */}
      <div className="mt-8 text-center">
        <p className="text-2xl font-bold text-gray-700">
          Score:{" "}
          <span className="text-blue-600">
            {score} / {quizzes.length}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Quiz;
