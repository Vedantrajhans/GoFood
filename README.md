# 🍔 GoFood – MERN Stack Food Ordering App

GoFood is a **MERN stack food ordering web application** built using **React, Node.js, Express, and MongoDB**.  
This project focuses on core food-ordering functionality such as user authentication, browsing food items, cart management, and order history.

---

## 🚀 Tech Stack

### Frontend

- React.js (Create React App)
- React Router DOM
- Bootstrap & React-Bootstrap
- Context API for state management

### Backend

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt.js for password hashing

---

## 📂 Project Structure

vedantrajhans-gofood/
├── backend/
│ ├── index.js
│ ├── package.json
│ ├── middleware/
│ │ └── fetchdetails.js
│ ├── models/
│ │ ├── User.js
│ │ └── Orders.js
│ └── Routes/
│ ├── Auth.js
│ ├── CreatUser.js
│ └── DisplayData.js
│
├── public/
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
│
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── Footer.js
│ │ ├── Card.js
│ │ ├── Carousal.js
│ │ └── ContextReducer.js
│ ├── screens/
│ │ ├── Home.js
│ │ ├── Login.js
│ │ ├── Signup.js
│ │ ├── Cart.js
│ │ └── MyOrder.js
│ ├── App.js
│ ├── index.js
│ └── App.css
│
├── package.json
└── README.md

yaml
Copy code

---

## ✨ Features Implemented

- User Signup & Login (JWT based authentication)
- Food item listing from database
- Add to cart functionality
- Order placement
- Order history page
- Reusable UI components
- Context API for global cart state
- Backend REST APIs using Express

---

## 🛠️ How to Run the Project Locally

```bash
1️⃣ Clone the Repository

git clone https://github.com/Vedantrajhans/vedantrajhans-gofood.git
cd vedantrajhans-gofood

2️⃣ Install Frontend Dependencies
npm install

3️⃣ Install Backend Dependencies
cd backend
npm install

4️⃣ Start the Backend Server
nodemon index.js

Backend will run on:
http://localhost:5000

5️⃣ Start the Frontend (New Terminal)

cd ..
npm start
Frontend will run on:

http://localhost:3000

🔐 Environment Setup
Make sure MongoDB is running locally or update your MongoDB connection string in the backend database config file.

Example:

mongodb://127.0.0.1:27017/gofood

🌱 Future Improvements
Payment gateway integration

Admin dashboard

Better UI/UX

Order status tracking

Deployment on cloud platforms

Better validation & security

👨‍💻 Author
Vedant Rajhans
B.Tech CSE | Full-Stack Developer

GitHub: https://github.com/Vedantrajhans

LinkedIn: https://www.linkedin.com/in/vedant-rajhans-0218682b8/

Email: vedant.rajhans23@gmail.com


⚠️  This project was developed as a learning project. The main goal was to understand full-stack integration using the MERN stack.
⭐ If you find this project helpful, consider giving it a star!
```
