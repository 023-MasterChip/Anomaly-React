const express = require("express");
const config = require('config');
const jwt = require('jsonwebtoken');
const userRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

userRoutes.route("/user/signup").post(function (req, response) {
  let db_connect = dbo.getDb();

  db_connect.collection("users").insertOne(req.body, function (err, res) {
    if (err) throw err;
    response.status(200).json(res);
  });
});

userRoutes.route("/user/login").post(function (req, res) {
  let db_connect = dbo.getDb();
  const {username,password} = req.body;
  let myquery = { username: username };
  db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      if(result.password===password){
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
              name:result.username,
              token,
              msg: 'Login Successful.'
            });
          });
      }else{
        res.status(400).send("login failed")
      }
    });
});

module.exports = userRoutes;
