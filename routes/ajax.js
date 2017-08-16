//this will handle our AJAX routes
var Promise = require('bluebird');
var ajaxRouter = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;


ajaxRouter.get('/hotels', (req, res, next)=>{
    Hotel.findAll()
        // .then(res.json)
        .then((hotels)=>{
            res.json(hotels);
        })
        .catch(next)
})

ajaxRouter.get('/restaurants', (req, res, next)=>{
    Restaurant.findAll()
        // .then(res.json)
        .then((restaurants)=>{
            res.json(restaurants);
        })
        .catch(next)
})

ajaxRouter.get('/activities', (req, res, next)=>{
    Activity.findAll()
        // .then(res.json)
        .then((activities)=>{
            res.json(activities);
        })
        .catch(next)
})






module.exports=ajaxRouter