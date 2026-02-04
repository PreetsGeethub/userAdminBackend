# Backend Internship Assignment – Auth & Task API

This project is a scalable REST API built with Node.js, Express, and PostgreSQL, implementing JWT authentication, role-based access, and CRUD operations for tasks.
A minimal frontend (optional) can be used to interact with the APIs.

##Features
### Authentication & Authorization

User registration with password hashing (bcrypt)

User login with JWT authentication

Secure JWT verification middleware

Role-based access (user, admin)

Ownership-based authorization for tasks

### Task Management

Create tasks (authenticated users)

Read tasks (users see their own, admins see all)

Update tasks (owner or admin only)

Delete tasks (owner or admin only)

###Backend Best Practices

Modular project structure

Centralized error handling

Input validation & proper HTTP status codes

Secure environment variable usage

PostgreSQL relational schema with foreign keys

### Tech Stack

Backend: Node.js, Express.js

Database: PostgreSQL

Authentication: JWT, bcrypt

Tools: Postman, dotenv

📁 Project Structure
src/
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── errorHandler.js
├── utils/
│   └── AppError.js
├── db/
│   └── db.js
├── index.js

🗄 Database Schema
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

🚀 Getting Started
1️. Clone the repository
git clone <your-repo-url>
cd <project-folder>

2️.Install dependencies
npm install

3️. Setup environment variables

Create a .env file in the root:

DB_HOST=localhost
DB_USER=postgres
DB_NAME=task_db
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_jwt_secret

4️. Run the server
node src/app.js


Server runs on:

http://localhost:3000

 ## API Endpoints
Auth Routes
POST /api/v1/auth/register
POST /api/v1/auth/login

Task Routes (JWT Required)
GET    /api/v1/tasks
POST   /api/v1/tasks
PUT    /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

##API Testing

APIs tested using Postman

JWT token passed via:

Authorization: Bearer <token>


A Postman collection can be included for easier testing.

##Security Considerations

Passwords are securely hashed using bcrypt

JWT-based stateless authentication

Protected routes using middleware

SQL injection prevention using parameterized queries

Role and ownership checks for sensitive operations

##Scalability Notes

This backend is designed to be easily scalable:

Modular structure allows adding new modules without refactoring

JWT enables stateless authentication (easy horizontal scaling)

Redis can be added for caching

Can be extended into microservices

Load balancers can be introduced for high traffic

##Assignment Coverage

✔ Authentication & JWT
✔ Role-based access
✔ CRUD APIs
✔ Database schema
✔ Error handling & validation
✔ Scalable backend structure

👤 Author

Pritam Kumar
Backend Developer Intern Candidate

