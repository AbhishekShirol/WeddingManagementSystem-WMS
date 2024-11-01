const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Music = sequelize.define('Music', {
  name: {
    type: DataTypes.STRING, // e.g., DJ, Live Band
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT, // or JSON for a structured playlist
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Music;
