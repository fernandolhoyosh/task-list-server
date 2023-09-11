const express = require('express');
const listViewRouter = require('../routers/list-view-router');
const listEditRouter = require('../routers/list-edit-router');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/tasks', listViewRouter);
app.use('/tasks', listEditRouter);

app.get('/', (req, res) => {
    res.status(200).send('Welcome to To-Do Server');
});

app.listen(port, ()=> {
    console.log(`Server online on port:${port}`)
});