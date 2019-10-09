let connection = require("../config/connection")

L.mapquest.key = mqKey;

// pet info with dummy data
let petInfo = [
    {
        user_name:"Tom",
        user_email: "email@email.com",
        user_phone:"555-555-5555",
        address:"830 isabella st",
        city:"Oakland",
        state:"CA",
        zip:"94607",
        pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
        pet_name: "puddled",
        pet_color: "black",
        pet_description:"muddy"
        
    },{
        user_name:"Tom",
        user_email: "email@email.com",
        user_phone:"555-555-5555",
        address:"304 valencia st",
        city:"San francisco",
        state:"CA",
        zip:"94103",
        pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
        pet_name: "puddled",
        pet_color: "black",
        pet_description:"muddy"
    },{
        user_name:"Tom",
        user_email: "email@email.com",
        user_phone:"555-555-5555",
        address:"1995 University ave",
        city:"berkeley",
        state:"CA",
        zip:"94707",
        pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
        pet_name: "puddled",
        pet_color: "black",
        pet_description:"muddy"
        
    }
]

let pinLocations = []

for(let p = 0; p < petInfo.length; p++){
    let pet = petInfo[p]
    let petAddress = `${pet.address} ${pet.city} ${pet.state} ${pet.zip}`
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

        // Create a marker for each location
        var marker = L.marker(locationLatLng, {icon: L.mapquest.icons.marker()})
            .bindPopup('this says something'+location.adminArea5 + ', ' + location.adminArea3);
            console.log(location.adminArea5 + ', ' + location.adminArea3 + i)

        group.push(marker);
    }
    return L.featureGroup(group);
}