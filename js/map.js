function initialize() {
    geocoder = new google.maps.Geocoder();
    var mapOptions = {
        center: { lat: 48.5, lng: -122.8},
        zoom: 7,
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
            //{ saturation: -100 }
        ]
    },{
        featureType: "all",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    },{
        featureType: "city",
        elementType: "labels",
        stylers: [
            { visibility: "on" }
        ]
    },{
        featureType: "landscape.natural.terrain",
        stylers: [
            { visibility: "off" }
        ]
    },{
        featureType: "country",
        elementType: "geometry.stroke",
        stylers: [
            { visibility: "off" }
        ]
    }
    ];

    // Creating map
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.setOptions({styles: styles});

    // Arrows
    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    };

    var seattleLine = [
        new google.maps.LatLng(47.355127, -122.333503),
        new google.maps.LatLng(47.605127, -122.333503)
    ];

    var line = new google.maps.Polyline({
        path: seattleLine,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }],
        map: map
    });

    var vanLine = [
        new google.maps.LatLng(49.001620, -123.123389),
        new google.maps.LatLng(49.281620, -123.123389)
    ];

    var line = new google.maps.Polyline({
        path: vanLine,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }],
        map: map
    });
}