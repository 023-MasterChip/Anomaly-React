const express = require("express");
const config = require('config');
const jwt = require('jsonwebtoken');
const userRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const multer = require('multer')
var path = require('path')
const upload = multer({ dest: './public/images' })


userRoutes.route("/user/signup").post(function (req, response) {
  let db_connect = dbo.getDb();

  db_connect.collection("users").insertOne(req.body, function (err, res) {
    if (err) throw err;
    response.status(200).json(res);
  });
});

//get data
userRoutes.route("/user/profile/:username").get(async (req, res) => {
  try {
    const db = await dbo.getDb();
    // const username = localStorage.getItem("username");
    // console.log(username)
    const profile = await db.collection("users").findOne({ username: req.params.username });

    res.status(200).json(profile);
    // console.log(profile);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

//Update user
userRoutes.route("/user/update/:username").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { username: req.params.username }
  let newvalues = {
    $set: {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
    },
  }
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated")
      res.json(res)
    })
})

//Image upload
userRoutes.route("/user/image/:username").post(upload.single('imageFile'), function (req, res) {
  let db_connect = dbo.getDb();
  const postData = { ...req.body, imagePath: "http://localhost:5000/public/images/" + req.file.filename }
  console.log(req.body)
  db_connect.collection("posts").insertOne(postData, function (err, res) {
    if (err) throw err;
  });
})




userRoutes.route("/user/login").post(function (req, res) {
  let db_connect = dbo.getDb();
  const { username, password } = req.body
  let myquery = { username: username }
  db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      if (result.password === password) {
        jwt.sign({
          name: result.username
        },
          config.get('jwtSecret'),
          { expiresIn: 60 * 60 },
          (err, token) => {
            if (err) {
              return res.status(400).json({ msg: "Login Failed.", err })
            }
            return res.status(200).json({
              name: result.username,
              token,
              msg: 'Login Successful.'
            });
          });
      } else {
        res.status(400).send("login failed")
      }
    });
});

module.exports = userRoutes;
