const request=require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoicnRoODMiLCJhIjoiY2s5MDR4NDMyMDIyZDNkcWR0bjVyNHJtYyJ9.i3Ujf2ZszCIU2heHadB10w&limit=1'  

    request({ url, json: true }, (error,{body}) => {
        if(error) {
            callback('Unable to connect to the location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find Location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            } )
        }
    })
}

module.exports = geocode