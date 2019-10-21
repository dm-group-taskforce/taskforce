require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");

// Controllers
const {getSession, login, logout, register, deleteUser} = require('./Controllers/authController')
const {getCharacter} = require('./Controllers/characterController')
const {getRank} = require('./Controllers/rankController')

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


/////////////// Endpoints ////////////////

// Authentication 
app.get('/auth/user', authController.getSession);
app.post('/auth/login', authController.login);
app.post('/auth/logout', authController.logout);
app.post('/auth/register', authController.register);
app.delete('/auth/delete', authController.deleteUser);

// Character
app.get('/character/get', getCharacter);
app.post('/character/create', createCharacter);
app.put('/character/update', updateCharacter);

// Task
app.get('/task/get');
app.post('/task/create');


// Rank
app.get('/rank/get', getRank);


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
});