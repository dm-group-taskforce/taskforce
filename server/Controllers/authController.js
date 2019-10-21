require('dotenv').config();
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');

// Transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
});

module.exports = {
    getSession: (req, res) => {
        if(req.session.user) {
            res.status(200).json(req.session.user);
        } else {
            res.sendStatus(200);
        }
    },
    register: async (req, res) => {
        const {username, password, email, first_name, last_name} = req.body;
        const db = req.app.get('db'); 
        const existingUser = await db.authorization.getUser([username]); 
        if(existingUser[0]) {
            return res.status(409).send("Username is taken");
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const registerUser = await db.authorization.registerUser(username, password, email, first_name, last_name)
                
                let mailOptions = {
                    from: 'TaskForce <flashcurve19@gmail.com>', 
                    to: email, 
                    subject: 'Welcome to TaskForce', 
                    html:  `<b>
                    <div>
                    <h1>Welcome Private ${last_name}!</h1>
                    <h4>Thank you for setting up your account with TaskForce, you Maggot!!!!. Your account has been created so now you can now start protecting Area 51<h4>
                    </div>
                    </b>`
                }
                    transporter.sendMail(mailOptions)
                    .then(response => {
                        console.log('This email was sent!');
                    })
                    .catch(err => {
                        console.log('error', err)
                    })                
                const user = registerUser[0];  
                console.log(user);  
                req.session.user = { 
                user_id: user.id,
                username: user.username,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,  
                mailOptions
            }
             db.character.createCharacter(req.session.user.user_id);
             db.rank.createRank(req.session.user.user_id);
            res.status(200).json(req.session.user); 
        };    
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const findUser = await req.app.get('db').authorization.getUser(username);
        const user = findUser[0];
        if(!user) {
            return res.status(401).json("Username is incorrect");
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const authorized = bcrypt.compareSync(password, hash);
            if(!authorized) {
                return res.status(403).json("Password incorrect");
            } else {
                req.session.user = {
                    user_id: user.id,
                    username: user.username,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name 
                }
                
                return res.status(200).json(req.session.user);
            }   
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.status(200).json("You have logged out!")
    },
    deleteUser: (req,res) => {

    }
}