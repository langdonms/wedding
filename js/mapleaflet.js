   var map = L.map('map',
        {
        scrollWheelZoom:false
        }
      )
        .setView([40.1764, -83.1397], 11);
        
        L.tileLayer('https://api.mapbox.com/styles/v1/langdonms/cjib1sykx84rt2rmzlfibvur9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFuZ2Rvbm1zIiwiYSI6ImNpZmQxdzE1dzRyd2RzbWx4bnp2Ym5maDcifQ.mrTKjuh7OcKwTDWc95OlZQ',

        {
            maxZoom: 18,
            minZoom: 3,
            attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
        }).addTo(map);

var hotelIcon = L.icon({
    iconUrl: 'res/building-15-nob.png',
    iconSize:     [26,26], // size of the icon
    iconAnchor:   [13, 13], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -13] // point from which the popup should open relative to the iconAnchor
});        

var heartIcon = L.icon({
    iconUrl: 'res/heart-15.png',
    iconSize:     [20,20], // size of the icon
    iconAnchor:   [10, 4], // point of the icon which will correspond to marker's location
});        

var venuemarker = L.marker([40.1766,-83.1392517,],
        {title: "Ohio Wildlife Center",
        icon: heartIcon
        }
        )
        .bindPopup('<strong>Venue</strong><br>Ohio Wildlife Center').openPopup()
        .addTo(map);        

   var hotelemb = L.marker([40.098282,-83.1273043],
        {title: "Embassy Suites",
        icon: hotelIcon,
        })
        .bindPopup('<strong>Hotels</strong>').openPopup()
        .addTo(map);


        