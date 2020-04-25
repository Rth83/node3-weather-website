const request=require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3064f65e030667ed4c8a3608e3b2c775&query=' + latitude + ',' + longitude

    request ({url, json: true} , (error, {body}) =>{
        if (error) {
            callback('Unable to connect to the location services', undefined)
        } else if (body.error) {
            callback('Unable to find Location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+" Het is momenteel "+body.current.temperature+" graden. Het voelt als "+body.current.feelslike+ " graden.")
        }

    })
}




module.exports = forecast