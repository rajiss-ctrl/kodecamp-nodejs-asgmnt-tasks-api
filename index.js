const express = require('express');
const tasksRoute = require('./route/tasksRoute');


const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;
app.use(express.json());



// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
app.use("/tasks", tasksRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
