MERN Quiz App
A fully functional MERN stack quiz application built with MongoDB, Express, React, Node.js, and Tailwind CSS.
Users can take quizzes, receive instant feedback (green for correct, red for wrong), and see their score.

Features
✅ Interactive quiz with 20 challenging questions.

✅ Real-time feedback on correct and incorrect answers (green/red).

✅ Score tracking (Score: X / Total).

✅ Fully responsive design (2 cards per row on large screens).

✅ Backend API using Express & MongoDB Atlas.

✅ Frontend built with React + Vite + Tailwind CSS.

✅ Production-ready single deployment (React served by Express).

Tech Stack
Frontend: React, Vite, Tailwind CSS, Axios
Backend: Node.js, Express.js, MongoDB (Mongoose)
Deployment: Render (Backend + Frontend) and MongoDB Atlas

  Installation
1. Clone the repository:
git clone https://github.com/<your-username>/quiz-app.git
cd quiz-app

2. Backend Setup:
cd backend
npm install

3.Create a .env file in backend/ and add:
MONGO_URI=your-mongodb-atlas-uri
PORT=5000

4.(Optional) Seed quiz data:
node seed.js

5.Frontend Setup:
cd ../frontend
npm install
npm run dev

6.Start Server:
cd ../backend
npm start

