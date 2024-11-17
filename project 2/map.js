// Initialize the map
var map = L.map('map').setView([40.7128, -74.0060], 12);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define custom icon
var popsIcon = L.icon({
    iconUrl: 'pops-pin.webp', // Correct icon file
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
});

// Load GeoJSON data
fetch('pops.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: popsIcon });
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error loading the GeoJSON data:', error));