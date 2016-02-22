var map;
var markers = [];


function loadMap() {

  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 22.64668, lng: 120.28357},
      zoom: 15,
      styles: [{
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]  // Turn off points of interest.
      }, {
        featureType: 'transit.station',
        stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
      }],
      disableDoubleClickZoom: true
    });

   addMarker(new google.maps.LatLng(22.64668, 120.28357));



}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    label: "you",
    title: 'Hello World!'
  });

  google.maps.event.addListener(marker,'click',function() {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
  });
  markers.push(marker);
}

function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
