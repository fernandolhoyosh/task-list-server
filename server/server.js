const express = require('express');
const app = express();
const port = 3000;

const morgan = require('morgan');
const path = require('node:path');

const {httpMethods} = require(path.join(__dirname,'..','middlewares','httpMethods.js'));
const listViewRouter = require('../routers/list-view-router');
const listEditRouter = require('../routers/list-edit-router');


app.use(morgan('dev')); //middleware para ver las solicitudes de los clientes
app.use(httpMethods);  // middleware para controlar metodos http validos en el server
app.use(express.json());
app.use('/tasks', listViewRouter);
app.use('/tasks', listEditRouter);

app.get('/', (req, res) => {
    res.status(200).send('Welcome to To-Do Server');
});

app.listen(port, ()=> {
    console.log(`Server online on port:${port}`)
});