const mysql = require('mysql2');
require('dotenv').config();


// Create a MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Function to connect to the database
const connectDB = () => {
  db.connect((error) => {
    if (error) {
      console.error('Unable to connect to the database:', error);
      process.exit(1); // Exit process if connection fails
    }
    console.log('MySQL Database connected successfully.');
  });
};

// Export the connection and the connect function
module.exports = { db, connectDB };
