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

userRoutes.route("/user/follow/:username/:following").get(function (req, response) {
  let db_connect = dbo.getDb();
  const data = {username: req.params.username, following: req.params.following}

  db_connect.collection("following").insertOne(data, function (err, res) {
    if (err) throw err;
    response.status(200).json(res);
  });
});

userRoutes.route("/user/addcomment/:id/:user").post(function (req, response) {
  let db_connect = dbo.getDb();
  const data = {...req.body,post_id:req.params.id,username:req.params.user}

  db_connect.collection("post_comments").insertOne(data, function (err, res) {
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

userRoutes.route("/user/comment/:id").get(async (req, res) => {
  try {
    const db = await dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    const post = await db.collection("posts").findOne(myquery);
    // console.log(post)
    res.status(200).json(post);
   
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

userRoutes.route("/user/getCount/:user").get(async (req, res) => {
  try {
    const db = await dbo.getDb();
    let likeCount =0;
    
    await db.collection("posts").find({ username: req.params.user },{ _id:0}).toArray(async (err, result)=> {
      if(err) throw err;
      for(var i=0;i<result.length;i++){
        likeCount+=parseInt(result[i].likes)    
      }  
      const followingCount = await db.collection("following").find({username:req.params.user}).count();
      const followerCount = await db.collection("following").find({following:req.params.user}).count();
      const postCount = await db.collection("posts").find({username:req.params.user}).count();
      res.status(200).json({
        postCount: postCount,
        likeCount: likeCount,
        followerCount: followerCount,
        followingCount: followingCount,
        
      });
      }); 

    // res.status(200).json(post);
   
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

userRoutes.route("/user/posts/:username").get(async (req, res) => {
  try {
    const db = await dbo.getDb();
    // const username = localStorage.getItem("username");
    // console.log(username)
    await db.collection("posts").find({ username: req.params.username },{imagePath:1, _id:0}).sort({_id:-1}).toArray(function (err, result) {
      if(err) throw err;
      // console.log(result)
      res.status(200).send(result);
      });       

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

userRoutes.route("/user/getcomments/:id").get(async (req, res) => {
  try {
    const db = await dbo.getDb();
    // const username = localStorage.getItem("username");
    // console.log(username)
    await db.collection("post_comments").find({ post_id: req.params.id },{_id:0}).sort({_id:-1}).toArray(function (err, result) {
      if(err) throw err;
      // console.log(result)
      res.status(200).send(result);
      });       

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

userRoutes.route("/user/friend/:username").get(async (req, res) => {
  try {
    const db = await dbo.getDb();
    let following = [];
    let friends = [];
    // const username = localStorage.getItem("username");
    // console.log(username)
    await db.collection("following").find({ username: req.params.username },{_id:0}).sort({_id:-1}).toArray(async (err, result)=> {
      if(err) throw err;
      for(var i=0;i<result.length;i++){
        // console.log(result[i])
        following.push(result[i])
      }  
      
      for(var i=0;i<following.length;i++){
        // console.log(following[i].following) 
          const profile = await db.collection("users").findOne({ username: following[i].following }); 
          friends.push(profile)
      }
      res.status(200).send(friends);
      // console.log(friends)     
      }); 
    
      
      // console.log(friends)      

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

userRoutes.route("/user/posts").get(async (req, res) => {
  try {
    const db = await dbo.getDb();
    // const username = localStorage.getItem("username");
    // console.log(username)
    await db.collection("posts").find({ },{imagePath:1, _id:0}).sort({_id:-1}).toArray(function (err, result) {
      if(err) throw err;
      // console.log(result)
      res.status(200).send(result);
      });       

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

userRoutes.route("/user/search/:searchString").get(async (req, res) => {
  try {
    const db = await dbo.getDb();
    // const username = localStorage.getItem("username");
    // console.log(req.params.searchString)
    let q = "^"+req.params.searchString;
    await db.collection("users").find({username: { $regex: q, $options: 'i' }}).toArray(function (err, result) {
      if(err) throw err;
      // console.log(result)
      res.status(200).send(result);
      });       

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

userRoutes.route("/user/postlike/:id/:user").get(async(req, res)=> {
  let db_connect = dbo.getDb();
  const db = await dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  const post = await db.collection("posts").findOne(myquery); 
  var x = parseInt(post.likes)
  let newvalues = {
    $set: {
      likes: ++x,
    },
  }
  db_connect
    .collection("posts")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated")
     
    })
    const data = {post_id:req.params.id,username:req.params.user}

    // const liked = await db.collection("posts").findOne({$and: [{post_id: req.params.id}, {username: req.params.user}]}); 
    // console.log(liked)
    // if(liked){
    //   console.log("already liked")
    // }else{
      db_connect.collection("user_liked").insertOne(data, function (err, res) {
        if (err) throw err;
        
      });
    // }
 
    res.status(200).send("Updated")
})

//Update user
userRoutes.route("/user/update/:username").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { username: req.params.username }
  let newvalues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
    },
  }
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated")
     
    })
    res.status(200).send("Updated")
})

//Image upload
userRoutes.route("/user/image/:username").post(upload.single('imageFile'), function (req, res) {
  let db_connect = dbo.getDb();
  const postData = { ...req.body, imagePath: "http://localhost:5000/public/images/" + req.file.filename }
  console.log(req.body)
  db_connect.collection("posts").insertOne(postData, function (err, res) {
    if (err) throw err;
  });
  res.status(200).send("Updated")
})

//User profile image
userRoutes.route("/user/userImage/:username").post(upload.single('imageFile'), function (req, res) {
  let db_connect = dbo.getDb();
  // const postData = { ...req.body, imagePath: "http://localhost:5000/public/images/" + req.file.filename }
  // console.log(req.body)
  // db_connect.collection("posts").insertOne(postData, function (err, res) {
  //   if (err) throw err;
  // });
  let myquery = { username: req.params.username }
  let newvalues = {
    $set: {
      imagePath: "http://localhost:5000/public/images/" + req.file.filename
    },
  }
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated")
      // res.json(res)
    })
    res.status(200).send("Updated")
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
              imagePath: result.imagePath,
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
