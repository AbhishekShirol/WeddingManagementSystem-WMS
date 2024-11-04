const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Catering = sequelize.define('Catering', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Catering;
