import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api.js';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchTasks();
      setTasks(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const newTask = await createTask({ title, description });
      setTasks([newTask, ...tasks]);
      setTitle('');
      setDescription('');
    } catch (e) {
      alert(e.message);
    }
  };

  const toggleStatus = async (task) => {
    const next = task.status === 'done' ? 'pending' : 'done';
    try {
      const updated = await updateTask(task.id, { status: next });
      setTasks(tasks.map(t => t.id === task.id ? updated : t));
    } catch (e) {
      alert(e.message);
    }
  };

  const onDelete = async (id) => {
    if (!confirm('Delete this task?')) return;
    try {
      await deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'system-ui, Arial' }}>
      <h1>Task Manager</h1>

      <form onSubmit={onAdd} style={{ display: 'grid', gap: 8, marginBottom: 20 }}>
        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: 10, borderRadius: 8, border: '1px solid #ccc' }}
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          style={{ padding: 10, borderRadius: 8, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 14px', borderRadius: 8, border: 0, cursor: 'pointer' }}>
          Add Task
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 10 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <strong style={{ textDecoration: task.status === 'done' ? 'line-through' : 'none' }}>
                  {task.title}
                </strong>
                <div style={{ color: '#555', marginTop: 4 }}>{task.description}</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 6 }}>
                  Status: {task.status} • Created: {new Date(task.created_at).toLocaleString()}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => toggleStatus(task)} style={{ padding: '8px 10px', borderRadius: 8, border: 0, cursor: 'pointer' }}>
                  {task.status === 'done' ? 'Mark Pending' : 'Mark Done'}
                </button>
                <button onClick={() => onDelete(task.id)} style={{ padding: '8px 10px', borderRadius: 8, border: 0, cursor: 'pointer' }}>
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
