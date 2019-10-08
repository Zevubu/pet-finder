var latitude = 39.106667;
var longitude = -94.676392;
var boundingBox = `${latitude + .1084}%2c${longitude - .1084}%2c${latitude - .1084}%2c${longitude + .1084}`;

var locate = function locate() {
    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(`Location Set: Lat: ${latitude}, Long: ${longitude}`);
        boundingBox = `${latitude + .1084}%2c${longitude - .1084}%2c${latitude - .1084}%2c${longitude + .1084}`;
        // setTimeout(
            function mapInit() {
            L.mapquest.key = mqKey;
    
            var map = L.mapquest.map('map', {
              center: [latitude, longitude],
              layers: L.mapquest.tileLayer('map'),
              zoom: 11
            });
            map.addControl(L.mapquest.control());
          }
          mapInit();
        //   , 5000)
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