//this will handle our AJAX routes
var Promise = require('bluebird');
var ajaxRouter = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day


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

ajaxRouter.post('/day', (req, res, next) => {
  Day.create({
        dayNum: req.body.dayNumber
  })
  .then((day)=>res.json(day))
  .catch(next);
});

ajaxRouter.put('/day', (req, res, next)=>{
    Day.update({
      restaurantId: req.body.attractionId
    }, {
      where: {
        dayID: req.body.dayNumber
      }
    });
});




module.exports=ajaxRouter
