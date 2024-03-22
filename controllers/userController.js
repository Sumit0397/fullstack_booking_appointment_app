const path = require('path');
const User = require("../models/userModel");

exports.getBookingPage = (req, res , next) => {
    res.sendFile(path.join(__dirname , "../" , "public" , "views" , "index.html"));
}

exports.getUsers = (req,res, next) => {
    User.findAll()
    .then((users) => {
        res.json(users);
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.addUser = (req,res,next) => {
    const userName = req.body.userName;
    const contact = req.body.contact;
    const email = req.body.email;

    User.create({
        userName : userName,
        contact : contact,
        email : email
    }).then(() => {
        console.log("user added");
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
    })
}

exports.deleteUser = (req,res, next) => {
    const id = req.params.id;
    // console.log(id);
    User.findByPk(id)
    .then((user) => {
        return user.destroy();
    })
    .then(() => {
        console.log("User Deleted");
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
    })
}


