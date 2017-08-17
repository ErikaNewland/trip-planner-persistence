var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  dayNum: Sequelize.INTEGER,
  allowNull: false
}, {});

module.exports = Day;
