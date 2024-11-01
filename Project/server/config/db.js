const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance with MySQL connection details
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false, // Set to true if you want to see SQL queries logged to the console
  }
);

// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Tests the connection
    console.log('MySQL Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = { sequelize, connectDB };
