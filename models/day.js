var Sequelize = require('sequelize');
var Hotel = require('./hotel');
var db = require('./_db');

var Day = db.define('day', {
  dayNum: Sequelize.INTEGER,
  hotel: Sequelize.INTEGER, //we want to include the hotel id
  restaurants: Sequelize.ARRAY(Sequelize.INTEGER), //array of restaurant ids
  activities: Sequelize.ARRAY(Sequelize.INTEGER) //array of activities ids
}, {});

module.exports = Day;
