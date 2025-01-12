## Community Platform for Sharing Clothes, Books, and Toys

A full-stack web application designed to connect and support children in need by facilitating the sharing of clothes, books, and toys. The platform allows users to donate items they no longer need and request items they require, building a community-driven sharing model.  

---

## 🚀 Why This Project?  
This project is a meaningful initiative to build a community-driven platform while exploring full-stack development. Key focus areas include:  
- **Creating a seamless and simple user experience** with strong SEO and responsiveness.  
- Leveraging **server-side rendering (SSR)** to ensure content is indexed effectively and always up-to-date.  
- Learning Node.js

---

## 🛠️ Technology Stack  

### Frontend  
- **Framework**: [Next.js](https://nextjs.org/)  
  - Powerful SSR capabilities and SEO optimization.  
- **Library**: [React](https://react.dev/)  
  - Enables the creation of dynamic, reusable UI components.  
- **Language**: [TypeScript](https://www.typescriptlang.org/)  
  - Adds type safety for better maintainability and fewer runtime errors.  

### Backend  
- **Framework**: [Node.js](https://nodejs.org/)  
  - Ensures high performance and scalability.  
- **Language**: [TypeScript](https://www.typescriptlang.org/)  
  - Provides a consistent development experience across both frontend and backend.  

### Database  
- A relational or NoSQL database (e.g., PostgreSQL, MongoDB, or Firebase) to manage user data and item listings.  

---

## ✨ Key Features  
- **Donate Items**: Users can list items for donation, including clothes, books, and toys.  
- **Request Items**: Users can browse available items and request what they need.  
- **Community Focus**: Built to encourage sharing and support for those in need.

## 🧠 Learning Highlights  

### Frontend Challenges  
One of the biggest learning experiences was understanding **server-side rendering (SSR)** and how it works under the hood. I explored how to use SSR effectively to make the platform SEO-friendly and ensure content stays fresh. Another challenge was implementing caching strategies to improve performance while still showing newly added items promptly—balancing speed and data accuracy is always tricky!  

### Backend Challenges  
The backend was an excellent opportunity to dive into the power of **middleware**. I learned how to use it for handling repetitive logic, like error management, in a more generic and reusable way.  

---

## 📋 Future Plans  
- Integrate **user authentication and roles** (e.g., admin, donor, recipient).  
- Support **image upload optimization** for item listings.  

---

## ⚙️ How to Run Locally  
Follow the steps below to set up the project on your local machine.

### 🛠 Prerequisites  
Ensure the following are installed on your system:  
- **Node.js** (v16 or later): [Install Node.js](https://nodejs.org/)  
- **MongoDB Compass**: [Install MongoDB Compass]([https://www.mongodb.com/docs/manual/installation/)](https://www.mongodb.com/products/tools/compass)

---

### 📂 Project Structure  
The project consists of two main parts:  
- **Frontend**: A Next.js application (located in the `frontend/` directory).  
- **Backend**: An Express application (located in the `backend/` directory).  

### 🔧 Setting up the Backend 
1. Navigate to the backend directory: ``cd backend``
2. Run the following command to install the required dependencies: ``npm install``
3. Create a .env file in the backend/ directory with the following content:
   MONGO_URI=<your_mongodb_connection_string>

### 🔧 Setting up the Frontend 
1. Navigate to the frontend directory: ``cd frontend``
2. Run the following command to install the required dependencies: ``npm install``
3. Create a .env.local file in the frontend/ directory with the following content: NEXT_PUBLIC_LOCAL_API_BASE_URL=http://localhost:3000/api

### ✨ Start the local development:
1. From root folder: run ``npm run dev``
2. Run only backend development: cd backend --> run ``npm run dev``
3. Run only frontend development: cd frontend --> run ``npm run dev``

The frontend will be available at http://localhost:3001.
The frontend will be available at http://localhost:3000.


