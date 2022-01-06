const express = require("express");
const app = express();
const mongoose = require("mongoose")
const database = 'mongodb://localhost:27017/'
const cors = require("cors")
const User = require("./models/users");
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(database, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("database online")
    }
})
app.get("/database", (req, res) => {
    User.find((err, users) => {
        if (users) {
            res.send({users});
        }
    })
});
app.post("/register", (req, res) => {
    let udata = req.body;
    console.log(udata);
    let user = new User(udata)
    user.save((err, product) => {
        if (err) throw err;
        else {
            res.status(200).send(product);
        }
    });
})

app.post("/login", (req, res) => {
    let luser = req.body;
    User.findOne({ email: luser.email },(err, user) => {
        if (user) {
            res.status(200).send({user});
        }
        else if (!user) {
            res.status(401).send('User not Found!');
        }
        else {
            res.send(err);
        }
    })
})
app.listen(3000);
