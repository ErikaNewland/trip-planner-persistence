var Sequelize = require('sequelize');
var Hotel = require('./hotel');
var db = require('./_db');

var Day = db.define('day', {
  dayNum: Sequelize.INTEGER,
}, {});

module.exports = Day;
