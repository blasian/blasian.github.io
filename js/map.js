$(function () {
    var mapOptions = {
        center: { lat: 47.636557, lng: -122.319416},
        zoom: 13,
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
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
            { visibility: "off" }
        ]
    },{
        featureType: "administrative.province",
        elementType: "labels.text",
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
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.setOptions({styles: styles});
});