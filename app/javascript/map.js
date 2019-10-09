
let flState = "lost"

L.mapquest.key = mqKey;

getRequest('/api/lost')
.then(function(data){
 console.log(`api lost data: ${data}`)
})

function getRequest(url, data) {
    return fetch(url, {
      credentials: 'same-origin', // 'include', default: 'omit'
      method: 'GET', // 'GET', 'PUT', 'DELETE', etc.
      body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(function(response){
        
        console.log("json response " + JSON.stringify(response));
        console.log("pulled resonse " + response)


        
    });

};
// searchLost

// pet info with dummy data
let petInfo = [
    {
        user_name:"Tom",
        user_email: "email@email.com",
        user_phone:"555-555-5555",
        user_address:"830 isabella st",
        user_city:"Oakland",
        user_state:"CA",
        user_zip:"94607",
        pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
        pet_name: "puddled",
        pet_color: "black",
        pet_description:"muddy"
        
    },{
        user_name:"Tom",
        user_email: "email@email.com",
        user_phone:"555-555-5555",
        user_address:"304 valencia st",
        user_city:"San francisco",
        user_state:"CA",
        user_zip:"94103",
        pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
        pet_name: "puddled",
        pet_color: "black",
        pet_description:"muddy"
    },{
        user_name:"Tom",
        user_email: "email@email.com",
        user_phone:"555-555-5555",
        user_address:"1995 University ave",
        user_city:"berkeley",
        user_state:"CA",
        user_zip:"94707",
        pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
        pet_name: "puddled",
        pet_color: "black",
        pet_description:"muddy"
        
    }
]

let pinLocations = []

for(let p = 0; p < petInfo.length; p++){
    let pet = petInfo[p]
    let petAddress = `${pet.user_address} ${pet.user_city} ${pet.user_state} ${pet.user_zip}`
    console.log(petAddress);
    pinLocations.push(petAddress);
};



// Geocode three locations, then call the createMap callback
L.mapquest.geocoding().geocode(pinLocations, createMap);

function createMap(error, response) {
    if(error){
        console.log(error);
    };
    // Initialize the Map
    var map = L.mapquest.map('map', {
    layers: L.mapquest.tileLayer('map'),
    center: [0, 0],
    zoom: 12
    });

    // Generate the feature group containing markers from the geocoded locations
    var featureGroup = generateMarkersFeatureGroup(response);

    // Add markers to the map and zoom to the features
    featureGroup.addTo(map);
    map.fitBounds(featureGroup.getBounds());
}

function generateMarkersFeatureGroup(response) {
    var group = [];
    for (var i = 0; i < response.results.length; i++) {
        var location = response.results[i].locations[0];
        var locationLatLng = location.latLng;
        pet = petInfo[i]; 

        // Create a marker for each location
        var marker = L.marker(locationLatLng, {icon: L.mapquest.icons.marker()})
            .bindPopup(`<img src="${pet.pet_photo}" alt="lost pet" width="40px"> ${pet.pet_name} , ${pet.pet_color} , ${pet.pet_description}`);
            console.log(location.adminArea5 + ', ' + location.adminArea3 + i)

        group.push(marker);
    }
    return L.featureGroup(group);
}