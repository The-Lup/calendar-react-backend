# Calendar React Backend

This repository is the backend for the [React Calendar Application](https://github.com/The-Lup/calendar-react).

It provides a REST API built with Node.js, Express, and MongoDB (using Mongoose). Key features include:

- Secure user authentication using JWT (JSON Web Tokens).

- Full CRUD operations (Create, Read, Update, Delete) for calendar events.

- Date validation using Moment.js.

This server is designed to be simple, reliable, and fully compatible with the React frontend.

## 🚀 Features

- User authentication with JSON Web Tokens (JWT)
- Password hashing using bcryptjs
- Event CRUD operations
- Date validation using Moment.js
- Environment variable management with dotenv
- Input validation using express-validator
- CORS support
- MongoDB connection with Mongoose

---

## 📁 Project Structure

```
controllers/        # Functions that handle incoming requests
database/           # MongoDB connection setup
helpers/            # Utility helpers
middlewares/        # Custom middlewares
models/             # Mongoose models
public/             # Static test files
routes/             # Route definitions
env.template        # Example env file (copy to .env locally)
.gitignore          # Ignored files configuration
index.js            # Application entry point
package.json        # Project metadata & scripts
README.md           # Documentation
```

---

## 🛠️ Technologies Used

This API uses the following dependencies:

- **bcryptjs** – Password hashing
- **cors** – Cross-origin resource sharing
- **dotenv** – Environment variable loading
- **express** – Web server framework
- **express-validator** – Request validation
- **jsonwebtoken** – Token-based authentication
- **moment** – Date validation and formatting
- **mongoose** – ODM for MongoDB
- **nodemon** – Development server auto-reload

---

## 📦 Installation

### 📌 Requirements

- Node.js (v18 or higher recommended)
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)

1. Clone the repository:

```bash
git clone https://github.com/The-Lup/calendar-react-backend.git
```

2. Navigate into the project folder:

```bash
cd calendar-react-backend
```

3. Install dependencies:

```bash
npm install
```

4. Set up your environment variables:

- Copy `.env.template` to `.env`
- Add your MongoDB connection string and JWT secret

---

## ▶️ Running the Server

Start the server in development mode:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

---

## 📡 API Overview

### Authentication Routes

- **POST /api/auth/new** – Create new user
- **POST /api/auth** – Login
- **GET /api/auth/renew** – Validate and renew token

### Event Routes

- **GET /api/events** – Get all events
- **POST /api/events** – Create event
- **PUT /api/events/:id** – Update event
- **DELETE /api/events/:id** – Delete event

All event routes require a valid JWT.

---

## 🧩 Purpose of the Project

This backend was created to:

- Provide a secure and functional server for a calendar app
- Practice API development with Node.js
- Integrate MongoDB with Mongoose
- Implement JWT authentication
- Validate dates using Moment.js

---

## 📄 License

This project is open-source and available under the MIT License.

---

## ⭐ Support

If you like this project, consider giving it a star on GitHub!

## ✨ Author

Developed by **The-Lup** as part of building a full calendar application with a React frontend and a Node.js backend.
