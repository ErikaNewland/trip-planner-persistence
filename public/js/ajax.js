$(document).ready(() => {

    //only add day if there is no day 1
    $.ajax({
        method: 'POST',
        url: `/api/day`,
        data: {
            dayNumber: 1
        }
    })

    // getAll('hotels')  //promise of an array of hotels with all the hotel data on the database
    //     .then((hotels) => {
    //         console.log("hotels", hotels)
    //     })
    //     .catch(console.error.bind(console))
    //
    //
    // getAll('restaurants')  //promise of an array of hotels with all the hotel data on the database
    //     .then((restaurants) => {
    //         console.log("restaurants", restaurants)
    //     })
    //     .catch(console.error.bind(console))
    //
    // getAll('activities')  //promise of an array of hotels with all the hotel data on the database
    //     .then((activities) => {
    //         console.log("activities", activities)
    //     })
    //     .catch(console.error.bind(console))



})

function createDay(dayNumber) {
    return $.ajax({
        method: 'POST',
        url: `/api/day`,
        data: {
            dayNumber: dayNumber
        }
    })
}

function updateDay(dayNumber, attractionType, attractionId) {
    return $.ajax({
        method: 'PUT',
        url: `/api/day`,
        data: {
            dayNumber: dayNumber,
            attractionId: attractionId,
            attractionType: attractionType
        }

    })
}

function getAll(event) {
    return $.ajax({
        method: 'GET',
        // url: '../routes/ajax/api/hotels'
        url: `/api/${event}`
    })
}
