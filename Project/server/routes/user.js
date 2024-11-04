const express = require('express');
const router = express.Router();
const { db, connectDB } = require('../config/db.js'); // Make sure to import your database connection
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// router.get('/',(req,res)=>{
//   if(req.session.username){
//     return res.json({valid:true, username:req.session.username})
//   }else{
//     return res.json({valid:false})
//   }
// })


const authenticateToken = (req, res, next) => {
  // Get the token from the headers or cookies (depending on how you're sending it)
  const token = req.cookies.access_token || req.headers['authorization']?.split(' ')[1]; // Check for token in cookies or Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    req.user = user; // Attach user information to the request
    next(); // Proceed to the next middleware or route handler
  });
};


router.get('/user', authenticateToken, (req, res) => {
  // This will only be reached if the user is authenticated
  res.json({ message: 'This is a protected route!', user: req.user });
});



// Register a new user

router.post('/userregister', async (req, res) => {
  try {
    //Check if user already exists
    const query = 'SELECT * FROM users WHERE email = ? OR password = ?';
  
    db.query(query, [req.body.email,req.body.password], (err, results) => {
      
      if(err) return res.json({message:"Error inside server"});
      if (results.length) {
        return res.status(409).json({message: "User already exists!"});
      }
      
      //Hash the password 
      
      const salt =  bcrypt.genSaltSync(10);
      const hashedPassword =  bcrypt.hashSync(req.body.password, salt);

      // Insert the new user if they do not exist yet

      const query = 'INSERT INTO users (username, name, email, password, mobile) VALUES (?, ?, ?, ?, ?)';

      const values = [
        req.body.username,
        req.body.name,
        req.body.email,
        hashedPassword,
        // req.body.password,
        req.body.mobile,
      ];
      
      db.query(query, values, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(400).json({ message: 'Error inserting user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      });
      
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});




// Login a user
router.post('/userlogin', (req, res) => {
  //Check if user exists
  
  const query = 'SELECT * FROM users WHERE email = ?'

  db.query(query, [req.body.email], (err,result) => {
    if(err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({message:"User not found"});


    //Check if password is correct                               
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, result[0].password);
    // const isPasswordCorrect = req.body.password === result[0].password;


    if (!isPasswordCorrect) return res.status(401).json({message:"Invalid password"});
    // req.session.username = result[0].username;

    const token  = jwt.sign({id:result[0].id},'secretsecret')
    const {password, ...other} = result[0];
    
    res.cookie('access_token', token, 
      {httpOnly:true}).status(200).json(other);
  })
});
  

// Logout a user

router.post('/userlogout', (req, res) => {
  res.clearCookie("access_token",{
    sameSite:'None',
    secure:true 
  }).status(200).json("User hasbeen logged out.");
});


module.exports = router;


