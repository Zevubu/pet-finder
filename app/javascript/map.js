window.onload = function(){
    L.mapquest.key = mqKey;
  
    var latitude = 39.106667;
    var longitude = -94.676392;
    var boundingBox;

    var locate = function locate() {
        function success(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            console.log(`Location Set: Lat: ${latitude}, Long: ${longitude}`);
            boundingBox = `${latitude + .1084}%2c${longitude - .1084}%2c${latitude - .1084}%2c${longitude + .1084}`;
            // setTimeout(
                

            function mapInit() {
                
                var map = L.mapquest.map('map', {
                center: [latitude, longitude],
                layers: L.mapquest.tileLayer('map'),
                zoom: 11
                });
                map.addControl(L.mapquest.control());
                var featureGroup = generateMarkersFeatureGroup(response);
            

            // Add markers to the map and zoom to the features
            featureGroup.addTo(map);
            map.fitBounds(featureGroup.getBounds());
            }
            L.mapquest.geocoding().geocode(['Portland, OR', 'Flagstaff, AZ', 'Denver, CO'], mapInit);
            function generateMarkersFeatureGroup(response) {
                var group = [];
                for (var i = 0; i < response.results.length; i++) {
                    var location = response.results[i].locations[0];
                    var locationLatLng = location.latLng;

                    // Create a marker for each location
                    var marker = L.marker(locationLatLng, {icon: L.mapquest.icons.marker()})
                    .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

                    group.push(marker);
                }
                return L.featureGroup(group);
            }
        
            
            }
        }

        function error() {
            alert('Unable to access your location');
            function mapInit() {
                L.mapquest.key = mqKey;
        
                var map = L.mapquest.map('map', {
                center: [latitude, longitude],
                layers: L.mapquest.tileLayer('map'),
                zoom: 5
                });
                map.addControl(L.mapquest.control());
            }
            mapInit();
        }


        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };
    locate();
};