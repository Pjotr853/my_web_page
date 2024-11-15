import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mongo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState(null); 

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!newTask.title || !newTask.description) {
      alert('Both title and description are required!');
      return;
    }
    try {
      await axios.post('http://localhost:5000/tasks', newTask);
      setNewTask({ title: '', description: '' });
      fetchTasks(); 
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks(); 
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
    setNewTask({
      title: task.title,
      description: task.description,
    });
  };

  const updateTask = async () => {
    if (!newTask.title || !newTask.description) {
      alert('Both title and description are required!');
      return;
    }
    try {
      await axios.put(`http://localhost:5000/tasks/${editingTask._id}`, newTask);
      setEditingTask(null); 
      setNewTask({ title: '', description: '' });
      fetchTasks(); 
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const searchTasks = async () => {
    if (searchTerm.trim() === '') {
      fetchTasks(); 
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/tasks/search?term=${searchTerm}`);
      setTasks(response.data); 
    } catch (error) {
      console.error('Error searching tasks:', error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <h2>{editingTask ? 'Edit Task' : 'Add Task'}</h2>

      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchTasks}>Search Tasks</button>

      <br />
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />

      
      <button onClick={editingTask ? updateTask : addTask}>
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>

      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mongo;
