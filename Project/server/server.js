require('dotenv').config();
const express = require('express');
const { db,connectDB} = require('./config/db.js');
const bodyParser = require('body-parser');
const session = require('express-session');


const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true // Allow credentials if needed
}));


app.use(cookieParser());


app.use(bodyParser.json());
// app.use(
//   session({
//     secret: 'your_secret_key', // Change this to a secure random key
//     resave: false,
//     saveUninitialized: false,
//     cookie:{
//       secure:false,
//       maxAge:1000 * 60 * 60 * 24
//     }
//   })
// );


connectDB();



app.use('/api/user', require('./routes/user.js'));
app.use('/api/catering', require('./routes/catering.js'));
app.use('/api/venue', require('./routes/venue.js'));
app.use('/api/music', require('./routes/music.js'));
app.use('/api/decoration', require('./routes/decoration.js'));
app.use('/api/wedding/register' ,require('./routes/weddingregister.js'))
app.use('/api/', require('./routes/canceling_services.js'));
app.use('/api/admin/bookings/servicesdesc', require('./routes/DetailedServices.js'));
// app.use('/api/services/', require('./routes/bookingServices.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
