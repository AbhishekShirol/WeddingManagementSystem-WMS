const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Decoration = sequelize.define('Decoration', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT, // Detailed description of the decorations
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Decoration;
