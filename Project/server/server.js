require('dotenv').config();
const express = require('express');
const { connectDB, sequelize } = require('./config/db.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport); // Import Passport configuration

const cors = require('cors');



const app = express();


app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from this origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
//   credentials: true // Allow credentials if needed
// }));

app.use(bodyParser.json());
app.use(
  session({
    secret: 'your_secret_key', // Change this to a secure random key
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

connectDB();

// Sync all models
sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
});

app.use('/api/user', require('./routes/user.js'));
app.use('/api/catering', require('./routes/catering.js'));
app.use('/api/venue', require('./routes/venue.js'));
app.use('/api/music', require('./routes/music.js'));
app.use('/api/decoration', require('./routes/decoration.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
