# MongoDB Authentication API

## 🚀 Project Overview
This is an authentication system using **Node.js**, **Express**, **MongoDB**, and **JWT**. It allows users to register, log in, and manage authentication using tokens stored in cookies.

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT (JSON Web Tokens)**
- **bcrypt** (for password hashing)
- **Cookie-Parser**

---

## 📌 Features
- User **registration** with hashed passwords
- User **login** with JWT authentication
- Secure **JWT storage in HTTP-only cookies**
- Protected routes requiring authentication
- Error handling middleware

---

## 📂 Folder Structure
```
.
├── src
│   ├── controllers
│   │   ├── authController.ts
│   ├── models
│   │   ├── User.ts
│   ├── routes
│   │   ├── authRoutes.ts
│   ├── middleware
│   │   ├── authMiddleware.ts
│   ├── server.ts
│
├── .env
├── package.json
└── README.md
```

---

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/auth-mongo.git
cd auth-mongo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create `.env` File
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### 4️⃣ Run the Server
```sh
npm start
```
The server will start on `http://localhost:5000`.

---

## 🔐 API Endpoints
### **1️⃣ Register User**
**Endpoint:** `POST /api/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
_Response:_
```json
{
  "message": "User registered successfully"
}
```

### **2️⃣ Login User**
**Endpoint:** `POST /api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
_Response:_
```json
{
  "message": "User logged in successfully",
  "token": "your_jwt_token"
}
```

### **3️⃣ Logout User**
**Endpoint:** `POST /api/auth/logout`
_Response:_
```json
{
  "message": "Logged out successfully"
}
```

### **4️⃣ Protected Route**
**Endpoint:** `GET /api/auth/protected`
_Header:_ `Authorization: Bearer <your_jwt_token>`
_Response:_
```json
{
  "message": "Protected route accessed"
}
```

---

## 🛠 Environment Setup
### Using MongoDB Atlas
1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new database cluster.
3. Get the connection string and add it to your `.env` file as `MONGO_URI`.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 💡 Contributing
Feel free to submit a pull request or open an issue for improvements. 🚀


