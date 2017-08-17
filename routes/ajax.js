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

ajaxRouter.get('/days', (req, res, next)=>{ 
    days.findAll({
        include: [Hotel, Restaurant, Activity],
        ORDER: 'numb ASC'
    })
    .then((days)=>{
        res.json(days)
    })
    .catch(next)
})

ajaxRouter.post('/day', (req, res, next) => {
  Day.create({
        dayNum: req.body.dayNumber
  })
  .then((day)=>res.status(201).send(day))
  .catch(next);
});

ajaxRouter.param('dayId', (req, res, next, theDayId)=>{
    Day.findById(theDayId)
        .then((foundDay)=>{
            req.day=foundDay;
            next()
        })
})
//now req.day= the day found by the id

ajaxRouter.delete('/day:id', (req, res, next)=>{
    Day.findById(req.params.id)
      .then((day)=>{
          return day.destory()
      })
     .then(()=>{
         res.sendStatus(204)
     })
     .catch(next)
})


 ajaxRouter.put('/days:/dayId/hotel',(req, res, next)=>{
   //could also find by the req depending on how you send in the data
    req.day.setHotel(rq.body.hotelId)  
        .then((day)=>{
            res.sendStatus(204)
        })
        .catch(next)
 })

 ajaxRouter.delete('/days/:dayId/restaurants', (req, res, next)=>{
     req.day.setHotel(null)
        .then(()=>{
            res.sendStatus(201)
        }) 
        .catch(next)
 })

 ajaxRouter.put('/day/:dayId/restaurants', (req, body, next)=>{
     req.day.addRestaurant(req.body.restaurantId)
        .then(()=>{
            res.sendStatus(204)
        })
 })

 ajaxRouter.delete('/day/LdayId/restaruants/:restaurantId', (req, res, next)=>{
      req.day.removeRestaurant(req.params.restaurantId)
        .then(()=>{
            res.sendStatus(204)
        })
        .catch(next)
 })

 //activities very similar to restaurants 


module.exports=ajaxRouter
