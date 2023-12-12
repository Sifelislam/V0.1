var geojson = new ol.source.Vector({
    url: './data/map.geojson',
    format: new ol.format.GeoJSON()
});
var map = new ol.Map({
    target: 'js-map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
            visible: true,
            title: 'OSM'
        }),
        new ol.layer.Vector({
            source: geojson,
            visible: true,
            title:'geojson',
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    })
});
function toggleLayer(layer) {
    layer.setVisible(!layer.getVisible());
}
var layerListDiv = document.getElementById('layer-list');
map.getLayers().forEach(function(layer) {
    var layerItem = document.createElement('div');
    layerItem.className = 'layer-item';

    var input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = layer.getVisible();
    input.onchange = function() {
        toggleLayer(layer);
    };

    var label = document.createElement('label');
    label.innerHTML = layer.get('title');

    layerItem.appendChild(input);
    layerItem.appendChild(label);
    layerListDiv.appendChild(layerItem);
});












/*

window.onload=init;
function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [0 , 0],
            zoom: 2
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    });
}
*/