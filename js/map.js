mapboxgl.accessToken = 'pk.eyJ1IjoibGFuZ2Rvbm1zIiwiYSI6ImNpZmQxdzE1dzRyd2RzbWx4bnp2Ym5maDcifQ.mrTKjuh7OcKwTDWc95OlZQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-83.1397, 40.1764], // starting position [lng, lat]
    zoom: 10 // starting zoom
});


map.on("load", function () {
  /* Image: An image is loaded and added to the map. */
  map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
      if (error) throw error;
      map.addImage("custom-marker", image);
      /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
      map.addLayer({
        id: "markers",
        type: "symbol",
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features:[{"type":"Feature","geometry":{"type":"Point","coordinates":
            [-83.13829779624939,40.17670102282616]}}]}
        },
        layout: {
          "icon-image": "custom-marker",
        }
      });
    });
});
