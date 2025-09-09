# 📝 Task Management System

A full-stack **Task Management System** built with:

- ⚛️ React (Frontend)
- 🚀 Node.js + Express (Backend)
- 🛢️ MySQL (Database)

This project helps users create, update, delete, and manage tasks with status tracking.

---
## ✨ Features
 ➕ Add new tasks  
 ✏️ Update existing tasks  
 ❌ Delete tasks  
 📊 Track status (`pending`, `in_progress`, `done`)  
 🌐 Full-stack app (React + Node + MySQL)  

---

## 📂 Project Structure
task-manager/
│── client/ # React frontend
│── server/ # Node.js + Express backend
│── schema.sql # Database schema
│── README.md # Project documentation

---

## 🚀 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/YOUR-USERNAME/task-manager.git
cd task-manager
2. Backend Setup (Node.js + Express)
bash
Copy code
cd server
npm install
Create a .env file inside server/ and add:

ini
Copy code
DB_HOST=your-db-host
DB_PORT=your-db-port
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
PORT=4000
Start backend:

bash
Copy code
npm start
3. Frontend Setup (React + Vite)
bash
Copy code
cd ../client
npm install
Create a .env file inside client/ and add:

ini
Copy code
VITE_API_URL=http://localhost:4000
Start frontend:

bash
Copy code
npm run dev
🌍 Deployment
Frontend → Vercel

Backend → Railway or Render

Database → Railway MySQL

🛠️ Database Setup
Run this in your MySQL instance:

sql
Copy code
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending','in_progress','done') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
Insert sample task:
sql
Copy code
INSERT INTO tasks (title, description, status)
VALUES ('First Task','This is your first task','pending');
👨‍💻 Author
Built with ❤️ using React, Node.js, and MySQL.

yaml
Copy code
---

👉 Save this as **`README.md`** in your project root, then commit & push:  

```bash
git add README.md
git commit -m "Added project README"
git push origin main
