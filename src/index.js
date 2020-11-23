console.log('Hello World from your main file!');

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibmVkYnJubm4iLCJhIjoiY2todXNjZTE0MGE5ZDJ6bW43cWFmOWQ5dyJ9.-dzWjtE6NdHjllJbpmQZgQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

let marker = document.createElement('div')
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map);
