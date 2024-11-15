const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Získať všetky úlohy
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//vyber v databázy pomocou regexu
router.get('/search', async (req, res) => {
    const searchTerm = req.query.term; 
  
    try {
      const tasks = await Task.find({
        title: { $regex: `^${searchTerm}`, $options: 'i' }, // '^' znamená začiatok reťazca, 'i' znamená, že je to case-insensitive
      });
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
  
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      task.title = req.body.title || task.title;
      task.description = req.body.description || task.description;
  
      const updatedTask = await task.save();
      res.json(updatedTask); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });



// Pridať novú úlohu
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Odstrániť úlohu
router.delete('/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }

      await Task.findByIdAndDelete(req.params.id); 
      res.json({ message: 'Task deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;