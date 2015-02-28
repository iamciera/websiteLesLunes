
    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(37.784283,237.671126),
            zoom: 11,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [ { "featureType": "landscape", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },{ "stylers": [ { "hue": "#00aaff" }, { "saturation": -100 }, { "gamma": 2.15 }, { "lightness": 12 } ] },{ "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "lightness": 24 } ] },{ "featureType": "road", "elementType": "geometry", "stylers": [ { "lightness": 57 } ] } ],
        }
        var mapElement = document.getElementById('LesLunesWine');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
            ['Arlequin Wine Merchant', 'undefined', 'undefined', 'undefined', 'http://www.arlequinwinemerchant.com/', 37.7771693, -122.42261559999997, 'https://mapbuildr.com/assets/img/markers/default.png'],['Terroir', 'undefined', 'undefined', 'undefined', 'http://terroirsf.com/', 37.7765661, -122.40849029999998, 'https://mapbuildr.com/assets/img/markers/default.png'],['Bay Grape', 'undefined', 'undefined', 'undefined', 'http://www.baygrapewine.com/', 37.809181, -122.25487699999996, 'https://mapbuildr.com/assets/img/markers/default.png'],['Ordinaire Wine Shop', 'undefined', 'undefined', 'undefined', 'http://ordinairewine.com/', 37.8135386, -122.2463563, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
if (web.substring(0, 7) != "http://") {
link = "http://" + web;
} else {
link = web;
}
     }

}
