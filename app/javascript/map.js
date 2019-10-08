window.onload = function() {

  MQ.geocode().search([
          'portland or',
          'flagstaff az',
          'denver co' ])
      .on('success', function(e) {
          var results = e.result,
              html = '',
              group = [],
              features,
              marker,
              result,
              latlng,
              prop,
              best,
              val,
              map,
              r,
              i;

          map = L.map('map', {
              layers: MQ.mapLayer()
          });

          for (i = 0; i < results.length; i++) {
              result = results[i].best;
              latlng = result.latlng;

              html += '<div style="width:300px; float:left;">';
      html += '<p><strong>Geocoded Location #' + (i + 1) + '</strong></p>';

      for (prop in result) {
      r = result[prop];

      if (prop === 'displayLatLng') {
      val = r.lat + ', ' + r.lng;

      } else if (prop === 'mapUrl') {
      val = '<br/><img src="' + r + '"/>';

      } else {
      val = r;
      }

      html += prop + ' : ' + val + '<br/>';
      }

      html += '</div>';

      // create POI markers for each location
          marker = L.marker([ latlng.lat, latlng.lng ])
                      .bindPopup(result.adminArea5 + ', ' + result.adminArea3);

              group.push(marker);
          }

          // add POI markers to the map and zoom to the features
          features = L.featureGroup(group).addTo(map);
          map.fitBounds(features.getBounds());

          // show location information
          L.DomUtil.get('info').innerHTML = html;
      });
  }