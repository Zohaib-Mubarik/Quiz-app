import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Quiz App</h1>
      <Link to="/quiz" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Start Quiz
      </Link>
    </div>
  );
};

export default Home;
