const mysql = require('mysql2');
const Sequelize = require('sequelize');

console.log(process.env.DB_DATABASE);

const connection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql'
  }
);


module.exports = connection;
