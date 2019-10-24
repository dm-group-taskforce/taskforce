require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");

// Controllers
const {getSession, login, logout, register, deleteUser} = require('./Controllers/authController')
const {getCharacter, updateCharacter} = require('./Controllers/characterController')
const {getRank, editRank} = require('./Controllers/rankController')
const {getTasks, addTask, editTask, deleteTask} = require('./Controllers/taskController')
const {getUserData} = require('./Controllers/chartController')

const {CONNECTION_STRING, SERVER_PORT,  SESSION_SECRET} = process.env;

// Middleware
app.use(express.json());

// Database
massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Connected to Database :D");
})

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

// Authentication 
app.get('/auth/user', getSession);
app.post('/auth/login', login);
app.post('/auth/logout', logout);
app.post('/auth/register', register);
app.delete('/auth/delete', deleteUser);

// Character
app.get('/character/get', getCharacter);
app.put('/character/edit', updateCharacter);

// Task
app.get('/task/get', getTasks);
app.post('/task/create', addTask);
app.put('/task/edit/:id', editTask);
app.delete('/task/delete/:id', deleteTask);

// Rank
app.get('/rank/get', getRank);
app.put('/rank/edit', editRank);

// Chart Data
app.get('/chart/get', getUserData);
// app.put('/chart/edit', editChartData);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
});