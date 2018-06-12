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

        
   
   var barnmarker = L.marker([40.1764, -83.1397],
   
        {title: "Ohio Wildlife Center"})
        .bindPopup('<strong>Venue</strong><br>Ohio Wildlife Center').openPopup()
        .addTo(map);
        
   var hotelemb = L.marker([40.098346, -83.128843,],
        {title: "Embassy Suites"})
        .bindPopup('<strong>Embassy Suites</strong>').openPopup()
        .addTo(map);
        
   var hotelhome2= L.marker([40.098464, -83.125232,],
        {title: "Ohio Wildlife Center"})
        .bindPopup('<strong>Home2 Suites').openPopup()
        .addTo(map)
        