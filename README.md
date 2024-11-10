Work in progress...
## Community Platform for Sharing Clothes, Books, and Toys

A full-stack web application designed to connect and support children in need of clothes, books, and toys. The platform allows users to donate items and request what they need, fostering a community-based sharing model.

Built with:

Frontend: Next.js, React, TypeScript, TailwindCSS
Backend: Node.js, Express, MongoDB
Testing: Jest
Features
- Donate clothes, books, and toys.
- Request items based on needs.
- View available donations and requests.
- User authentication (login/register).
- Admin interface for managing donations and requests.

Getting Started
Follow the steps below to set up the project on your local machine.

Prerequisites
Ensure the following are installed on your system:

Node.js (v16 or later) - Install Node.js
MongoDB - Install MongoDB

Project Structure
The project consists of two main parts:

Frontend: A Next.js application (located in the frontend/ directory).
Backend: An Express application (located in the backend/ directory).

Setting up the Backend:
1. Navigate to the backend directory: ``cd backend``
2. Run the following command to install the required dependencies: ``npm install``
3. Create a .env file in the backend/ directory with the following content:
   MONGO_URI=<your_mongodb_connection_string>
  JWT_SECRET=<your_jwt_secret_key>
4. Start the backend server: ``npm run dev``

Setting up the Frontend
1. Navigate to the frontend directory: ``cd frontend``
2. Run the following command to install the required dependencies: ``npm install``
3. Create a .env.local file in the frontend/ directory with the following content: LOCAL_API_BASE_URL=http://127.0.0.1:3003/api
4. Start the frontend development server: npm run dev

The frontend will be available at http://localhost:3000.



