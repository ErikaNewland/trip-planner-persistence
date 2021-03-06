'use strict';
/* global $ tripModule attractionsModule hotels restaurants activities */

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */

$(function () {

  // jQuery selects
  var $optionsPanel = $('#options-panel');
  var $hotelSelect = $optionsPanel.find('#hotel-choices');
  var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  var $activitySelect = $optionsPanel.find('#activity-choices');

  // ~~~~~~~~~~~~~~~~~~~~~~~
  // This looks like a great place to start AJAX work with a request for all attractions. Don't forget that these kinds of requests are async, so we won't have all of the attractions until it comes back, but once it comes back we can make the option tags
  // ~~~~~~~~~~~~~~~~~~~~~~~

  // // make all the option tags (second arg of `forEach` is a `this` binding)

  const gettingHotels = getAll('hotels');
  const gettingActivities = getAll('activities');
  const gettingRestaurants = getAll('restaurants');


  //rendering our options in our upper right panel
  Promise.all([gettingHotels, gettingActivities, gettingRestaurants])
    .then((arrayOfOptions) => {
      const hotelArray = arrayOfOptions[0];
      const activityArray = arrayOfOptions[1];
      const restaurantArray = arrayOfOptions[2];

      hotelArray.forEach(makeOption, $hotelSelect)
      activityArray.forEach(makeOption, $activitySelect)
      restaurantArray.forEach(makeOption, $restaurantSelect)

      return arrayOfOptions
    })
    .catch(console.log)



  // Once you've made AJAX calls to retrieve this information,
  // call attractions.loadEnhancedAttractions in the fashion
  // exampled below in order to integrate it.

  gettingHotels
    .then((hotels) => {
      attractionsModule.loadEnhancedAttractions('hotels', hotels);
    })

  gettingActivities
    .then((activities) => {
      attractionsModule.loadEnhancedAttractions('activities', activities);
    })

  gettingRestaurants
    .then((restaurants) => {
      attractionsModule.loadEnhancedAttractions('restaurants', restaurants);
    })


  function makeOption(databaseAttraction) {
    var $option = $('<option></option>') // makes a new option tag
      .text(databaseAttraction.name)
      .val(databaseAttraction.id);
    this.append($option); // add the option to the specific select
  }

  // what to do when the `+` button next to a `select` is clicked
  $optionsPanel.on('click', 'button[data-action="add"]', function () {
    var $select = $(this).siblings('select');
    var type = $select.data('type'); // from HTML data-type attribute
    var id = $select.find(':selected').val();
    // get associated attraction and add it to the current day in the trip
    var attraction = attractionsModule.getByTypeAndId(type, id);
    tripModule.addToCurrent(attraction)
    updateDay(tripModule.currDay().number, attraction.type, attraction.id)

  });

}); 
