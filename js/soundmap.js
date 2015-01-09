var map;
var marker;
var geocoder;
var locations = [];
var offset = 10;
var prev;

SC.initialize({
	client_id: "64a4fa9fc8c9797be3c6dc27067c131c",
});

function initialize() {
    geocoder = new google.maps.Geocoder();
    var mapOptions = {
        center: { lat: 0, lng: 0},
        zoom: 1,
        disableDefaultUI: true, 
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
    };

    // Map styling
    var styles = [
    {
        stylers: [
            { saturation: -100 }
        ]
    },{
        featureType: "all",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    },{
        featureType: "road",
        elementType: "all",
        stylers: [
            { visibility: "off" }
        ]
    },{
        featureType: "landscape.natural.terrain",
        stylers: [
            { visibility: "off" }
        ]
    },{
        featureType: "landscape.natural.landcover",
        stylers: [
            { visibility: "off" }
        ]
    },{
        featureType: "country",
        elementType: "geometry.stroke",
        stylers: [
            { visibility: "off" }
        ]
    },{
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    // Creating map
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.setOptions({styles: styles});

    // Populating locations array
    // findLocations();
}

// Create locations array
function findLocations() {
    SC.get("/tracks", { limit: 10, offset: offset }, function(tracks){
        offset += 10;
        for (var i = 0; i < tracks.length; i++) {
            SC.get("/users/" + tracks[i].user_id, function(user){
                if (user.country && (user.country != locations[locations.length - 1])) {
                    locations.push(user.country);
                }
            });
        }
        locate();
    });
}

// Add next location to map
function locate() {
    if (locations.length > 0) {
        gcode(locations.pop());
    } else {
        findLocations();
    }
}

// Mark location onto map
function gcode(country) {
    if (country == "United States") {country = "USA";}
	geocoder.geocode( { 'address': country }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
            infowindow = new google.maps.InfoWindow({
                    content: country
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.content = country;
                infowindow.open(map, marker);
            });
            map.setZoom(1);
            map.panTo(results[0].geometry.location);
            map.setZoom(3);
        }
	});
}