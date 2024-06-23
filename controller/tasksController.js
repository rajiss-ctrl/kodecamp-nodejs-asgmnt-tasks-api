const { v4: uuidv4 } = require('uuid');

let tasks = [];

const createTasks =  (req, res)  => {
    const { title, body, description } = req.body;
    const  newTask = {
        id: uuidv4(),
        title,
        description,
        body,
        status: 'pending'
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
}


const getTasks = (req, res) => {
    res.json(tasks);
}

const getSingleTask= (req, res) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}


const updateTasks= (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        tasks[taskIndex].title = title;
        tasks[taskIndex].body = body;
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}


const changeStatusOfTask= (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.status = status;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}


const deleteTask= (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}

module.exports = {
    createTasks,
    getTasks,
    getSingleTask,
    updateTasks,
    changeStatusOfTask,
    deleteTask,    
}