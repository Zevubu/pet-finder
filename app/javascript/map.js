L.mapquest.key = "lqUrYs8W0tHm67hKexOoiDh3WUyo33RC";
let baseLayer = L.mapquest.tileLayer('map');
let petInfo = []


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
        }
    }).then(function(){
        let addressPoints = []

        for(let p = 0; p < petInfo.length; p++){
            let pet = petInfo[p]
            let petAddress = JSON.parse(pet.pet_latlng)
            console.log(petAddress);
            addressPoints.push(petAddress);
            if (p === petInfo.length -1){
                console.log(addressPoints);
                createMap(addressPoints);
            }
        };

        // Geocode three locations, then call the createMap callback

        function createMap(response) {
            // Initialize the Map
            let map = L.mapquest.map('map', {
            layers: L.mapquest.tileLayer('map'),
            center: L.latLng(addressPoints[addressPoints.length -1].lat, addressPoints[addressPoints.length -1].lng),
            zoom: 9
            });
            let markers = L.markerClusterGroup();

            for (let i = 0; i < addressPoints.length; i++) {
                pet = petInfo[i];
                let addressPoint = addressPoints[i];
                let title =`<h2>${pet.LorF}</h2><img src="${pet.pet_photo}" alt="${pet.LorF} pet img area" width="250px"> <p>Pet info: ${pet.pet_name} is a ${pet.pet_color}, ${pet.pet_type}. Description: ${pet.pet_description}</p> <p>Contact ${pet.user_name} at: ${pet.user_email}, ${pet.user_phone}</p> <p>${pet.LorF} near: ${pet.user_address}, ${pet.user_city}, ${pet.user_state}</p>`;
                if(pet.LorF === "Found"){
                    var customIcon = L.mapquest.icons.circle({
                    primaryColor: '#00BF5E'
                    });
                }else{
                    var customIcon = L.mapquest.icons.circle({
                        primaryColor: '#E2003E'
                    });
                }
                let marker = L.marker(new L.LatLng(addressPoint.lat, addressPoint.lng), {
                title: title,
                icon: customIcon
                });

                marker.bindPopup(title);
                markers.addLayer(marker);
            }
    
            map.addLayer(markers);
            L.mapquest.control().addTo(map);
            L.mapquest.geocodingControl().addTo(map);
        };
    });
});