const express = require('express');

const { createTasks,
    getTasks,
    getSingleTask,
    updateTasks,
    changeStatusOfTask,
    deleteTask,
         } = require('../controller/tasksController');

const tasksRoute = express.Router()
// Post endpoint to add a new task
tasksRoute.post('/', createTasks);

// Get endpoint to get a list of all tasks
tasksRoute.get('/',getTasks);

// Get endpoint to get a task by its ID
tasksRoute.get('/:id', getSingleTask);

// Put endpoint to change the title and body of a task
tasksRoute.put('/:id',updateTasks);

// Patch endpoint to change the status of a task
tasksRoute.patch('/:id', changeStatusOfTask);

// Delete endpoint to remove a task from the array of tasks
tasksRoute.delete('/:id',deleteTask);



module.exports = tasksRoute
