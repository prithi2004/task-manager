# Task Manager - Server (Node.js + Express + MySQL)

## Quick start
1) Copy `.env.example` to `.env` and adjust values.
2) Import `schema.sql` into your MySQL server.
3) Install dependencies and start:
   ```bash
   npm install
   npm run dev # or: npm start
   ```

### API
- `GET /api/health`
- `GET /api/tasks`
- `POST /api/tasks` JSON: `{ title, description }`
- `PUT /api/tasks/:id` JSON: `{ title?, description?, status? }`
- `DELETE /api/tasks/:id`
