const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'auth_session',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '1147890h',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = { sequelize };
