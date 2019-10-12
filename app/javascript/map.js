
let flState = "lost"
L.mapquest.key = mqKey;

let petInfo = []
// petInfo dummy data
//     {
//         user_name:"Tom",
//         user_email: "email@email.com",
//         user_phone:"555-555-5555",
//         user_address:"830 isabella st",
//         user_city:"Oakland",
//         user_state:"CA",
//         user_zip:"94607",
//         pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
//         pet_name: "puddled",
//         pet_color: "black",
//         pet_description:"muddy"
        
//     },{
//         user_name:"Tom",
//         user_email: "email@email.com",
//         user_phone:"555-555-5555",
//         user_address:"304 valencia st",
//         user_city:"San francisco",
//         user_state:"CA",
//         user_zip:"94103",
//         pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
//         pet_name: "puddled",
//         pet_color: "black",
//         pet_description:"muddy"
//     },{
//         user_name:"Tom",
//         user_email: "email@email.com",
//         user_phone:"555-555-5555",
//         user_address:"1995 University ave",
//         user_city:"berkeley",
//         user_state:"CA",
//         user_zip:"94707",
//         pet_photo: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60",
//         pet_name: "puddled",
//         pet_color: "black",
//         pet_description:"muddy"
        
//     }
// ]
fetch("/api/lost").then(function(response){
    return response.json()
}).then(function(data){
    for (let i = 0; i < data.length; i++){
        data[i].LorF = "Lost";
        console.log(data[i]);
        petInfo.push(data[i]);
    };
}).then(function(){
    fetch("/api/found").then(function(res){
        return res.json()
    }).then(function(dat){
        for(i = 0 ; i < dat.length; i++){
            dat[i].LorF = "Found";
            console.log(dat[i]);
            petInfo.push(dat[i]);
        };
    }).then(function(){
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
            let map = L.mapquest.map('map', {
            layers: L.mapquest.tileLayer('map'),
            center: [0, 0],
            zoom: 12
            });
            L.mapquest.control().addTo(map);
            L.mapquest.geocodingControl().addTo(map);

            // Generate the feature group containing markers from the geocoded locations
            let featureGroup = generateMarkersFeatureGroup(response);

            // Add markers to the map and zoom to the features
            featureGroup.addTo(map);
            map.fitBounds(featureGroup.getBounds());
        };

        function generateMarkersFeatureGroup(response) {
            let group = [];
            for (let i = 0; i < response.results.length; i++) {
                let location = response.results[i].locations[0];
                let locationLatLng = location.latLng;
                pet = petInfo[i]; 

                // Create a marker for each location
                let marker = L.marker(locationLatLng, {icon: L.mapquest.icons.marker()})
                .bindPopup(`<h2>${pet.LorF}</h2><img src="${pet.pet_photo}" alt="${pet.LorF} pet img area" width="250px"> <p>Pet info: ${pet.pet_name}, ${pet.pet_color}, ${pet.pet_description}</p> <p>Contact ${pet.user_name} at: ${pet.user_email}, ${pet.user_phone}</p> <p>${pet.LorF} near: ${pet.user_address}, ${pet.user_city}, ${pet.user_state}</p>`);
                    console.log(location.adminArea5 + ', ' + location.adminArea3 + i)

                group.push(marker);
            }
            return L.featureGroup(group);
        };
    });
});