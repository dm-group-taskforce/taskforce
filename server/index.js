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
app.get('/auth/user', getSession);
app.post('/auth/login', login);
app.post('/auth/logout', logout);
app.post('/auth/register', register);
app.delete('/auth/delete', deleteUser);

// Character
app.get('/character/get', getCharacter);

// Rank
app.get('/rank/get', getRank);


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
});