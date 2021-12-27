/* DB Init Module */
'use strict';
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config  = require('../config/db-config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password,config);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Table module init
db.User = require('./user')(sequelize, Sequelize);
db.Project = require('./project')(sequelize, Sequelize);
db.Routes = require('./routes')(sequelize, Sequelize);
// db.Place = require('./place')(sequelize, Sequelize);

module.exports = db;
