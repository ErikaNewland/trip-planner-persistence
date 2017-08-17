var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var ajaxRouter=require('./ajax')

router.use('/ api',ajaxRouter)

router.get('/', function(req, res, next) {
    res.render('index')
  })
 



module.exports = router;
