import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mongo(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

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
            alert("Both title and description are required!");
            return;
          }
        try {
          await axios.post('http://localhost:5000/tasks', newTask);
          setNewTask({ title: '', description: '' });
          fetchTasks(); // Refresh task list
        } catch (error) {
          console.error('Error adding task:', error);
        }
      };

      const deleteTask = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/tasks/${id}`);
          fetchTasks(); // Refresh task list
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      };
    
    return(
        <div>
            <h1>Hello mongo</h1>
            <h1>Tasks</h1>
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
            <button onClick={addTask}>Add Task</button>
            

            <ul>
                {tasks.map(task => (
                <li key={task._id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <button onClick={() => deleteTask(task._id)}>Delete Task</button>
                </li>
                ))}
            </ul>

        </div>
    );
}

export default Mongo;