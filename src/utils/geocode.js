const request = require('node-fetch')

/*const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibmF2a2ltIiwiYSI6ImNrOWE5dGZ0NTAxaDYza21namYxd3RybXgifQ.LUDoboiUt-h0V8RSVj_86A&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}*/

const geocode = (address, callback) => {

	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoibmF2a2ltIiwiYSI6ImNrOWE5dGZ0NTAxaDYza21namYxd3RybXgifQ.LUDoboiUt-h0V8RSVj_86A&limit=1'

	request(url)
    	.then(res => res.json())
    	.then(json => { 		
		console.log(json)
		callback(undefined, {
			latitude: body.features[0].center[1],
                	longitude: body.features[0].center[0],
                	location: body.features[0].place_name
		})
			
	})
	//console.log('lat: '+latitude+ ' long:'+longitude+ ' location:'+location)
}

module.exports = geocode
