const express = require('express');
const router = express.Router();
const { db, connectDB } = require('../config/db.js'); // Make sure to import your database connection
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const authenticateToken = (req, res, next) => {
  // Get the token from the headers or cookies (depending on how you're sending it)
  const token = req.cookies.access_token || req.headers['authorization']?.split(' ')[1]; // Check for token in cookies or Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, 'your_secret_key', (err, admin) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    req.admin = admin; // Attach admin information to the request
    next(); // Proceed to the next middleware or route handler
  });
};


router.get('/admin', authenticateToken, (req, res) => {
  // This will only be reached if the admin is authenticated
  res.json({ message: 'This is a protected route!', admin: req.admin });
});




// Register a new admin
router.post('/adminregister', async (req, res) => {
  try {
    //Check if admin already exists
    const query = 'SELECT * FROM admins WHERE email = ? OR adminname = ?';
  
    db.query(query, [req.body.email,req.body.adminname], (err, results) => {
      
      if(err) return res.json({message:"Error inside server"});
      if (results.length) {
        return res.status(409).json({message: "admin already exists!"});
      }
      
      //Hash the password
      // console.log(req.body.password);
      if(!req.body.password) return res.status(400).json({message:"Password is required"});

      const salt =  bcrypt.genSaltSync(10);
      const hashedPassword =  bcrypt.hashSync(req.body.password, salt);

      // Insert the new admin if they do not exist yet

      const query = 'INSERT INTO admins (adminname, name, email, password, mobile) VALUES (?, ?, ?, ?, ?)';

      const values = [
        req.body.adminname,
        req.body.name,
        req.body.email,
        hashedPassword,
        // req.body.password,
        req.body.mobile,
      ];
      
      db.query(query, values, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(400).json({ message: 'Error inserting admin' });
        }
        res.status(201).json({ message: 'admin registered successfully' });
      });
      
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});



// Login a admin

router.post('/adminlogin', (req, res) => {
  //Check if admin exists
  
  const query = 'SELECT * FROM admins WHERE email = ?'

  db.query(query, [req.body.email], (err,result) => {
    if(err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({message:"admin not found"});


    //Check if password is correct                               
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, result[0].password);
    // const isPasswordCorrect = req.body.password === result[0].password;

    if (!isPasswordCorrect) return res.status(401).json({message:"Invalid password"});
    // req.session.adminname = result[0].adminname;

    const token  = jwt.sign({id:result[0].id},'secretsecret')
    const {password, ...other} = result[0];
    
    res.cookie('access_token', token, 
      {httpOnly:true}).status(200).json(other);
  })
});


// Logout a admin
router.post('/adminlogout', (req, res) => {
  res.clearCookie("access_token",{
    sameSite:'None',
    secure:true 
  }).status(200).json("admin hasbeen logged out.");
});


module.exports = router;


