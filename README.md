# MERN Blog App

A full-stack blog application built with the **MERN** stack (MongoDB, Express.js, React, Node.js).  
This app allows users to create, edit, and delete blog posts.

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios, JWT 

---

## 🚀 Features

- User Authentication 
- Create, Edit, Delete Blog Posts
- View all posts
- Responsive UI
- Dark and Light Theme

---

---

## 📦 Installation and Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the Repository


git clone https://github.com/bharatjivv/mern-blog.git
cd mern-blog

### 2. Setting up the Backend

cd api
npm install

Create a .env file inside the server/ folder and add the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

### 3. Start the backend server
npm run dev

### 4. Setting up the Frontend
cd client
npm install
npm start
