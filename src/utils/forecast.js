const request = require('node-fetch')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e881a3f8d55d8dbb1bc6197132099256&query='+latitude+','+longitude+'&units=f' 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast
