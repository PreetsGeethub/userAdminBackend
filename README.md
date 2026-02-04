# Backend Internship Assignment – Auth & Task API

This project is a scalable full-stack application consisting of a Node.js + Express backend and a minimal React frontend, implementing JWT authentication, role-based access, and CRUD operations for task management.

The frontend is included to demonstrate real API integration and protected routes.

# Features
## Authentication & Authorization

User registration with password hashing (bcrypt)

User login with JWT authentication

Secure JWT verification middleware

Role-based access (user / admin)

Ownership-based authorization for tasks

## Task Management

Create tasks (authenticated users)

Read tasks (users see their own, admins see all)

Update tasks (owner or admin only)

Delete tasks (owner or admin only)

## Backend Best Practices

Modular project structure

Centralized error handling

Input validation with proper HTTP status codes

Secure environment variable usage

PostgreSQL relational schema with foreign keys

## Tech Stack
Backend

Node.js

Express.js

PostgreSQL

JWT, bcrypt

Frontend

React (Vite)

Tailwind CSS

Tools

Postman

dotenv

Git / GitHub

📁 Project Structure
repo/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── db/
│   │   └── app.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
│
├── docs/
│   └── postman_collection.json
│
└── README.md

## Database Schema
users

id (PK)

name

email (unique)

password (hashed)

role (user / admin)

tasks

id (PK)

title

description

user_id (FK → users.id, ON DELETE CASCADE)

## Getting Started
1️ Clone the repository
git clone <your-repo-url>
cd <project-folder>

2️. Backend setup
cd backend
npm install


Create a .env file inside backend/:

DB_HOST=localhost
DB_USER=postgres
DB_NAME=task_db
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_jwt_secret


Run backend:

node src/app.js


Backend runs on:

http://localhost:3000

3. Frontend setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

## API Endpoints
Auth Routes
POST /api/v1/auth/register
POST /api/v1/auth/login

Task Routes (JWT Required)
GET    /api/v1/tasks
POST   /api/v1/tasks
PUT    /api/v1/tasks/:id
DELETE /api/v1/tasks/:id


JWT must be passed as:

Authorization: Bearer <token>

## API Documentation

All APIs are documented using Postman.

Postman collection file:

docs/postman_collection.json


Import this file into Postman to test all authentication and task APIs.

## Role-Based Access (Admin vs User)

Users and admins authenticate using the same login endpoint

Role information is embedded inside the JWT

Admin users can view and manage all tasks

Regular users can manage only their own tasks

Authorization is enforced entirely on the backend

## Security Considerations

Passwords are hashed using bcrypt

JWT-based stateless authentication

Protected routes via middleware

SQL injection prevention using parameterized queries

Ownership and role checks for sensitive operations

CORS configured for frontend–backend communication

## Scalability Notes

This project is designed to scale easily:

Modular structure allows adding new modules without refactoring

Stateless JWT authentication supports horizontal scaling

Redis can be added for caching

Can be extended into microservices

Load balancers can be introduced for high traffic

## Assignment Coverage

Authentication & JWT
Role-based access (user/admin)
CRUD APIs
Database schema & management
Security practices
React frontend integration
Scalability considerations
API documentation (Postman)

Author

Pritam Kumar
Backend Developer Intern Candidate