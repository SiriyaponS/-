var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'จุดความร้อน',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> จุดความร้อน'
            });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'BRIGHT_TI4': 'BRIGHT_TI4', 'SCAN': 'SCAN', 'TRACK': 'TRACK', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', 'SATELLITE': 'SATELLITE', 'CONFIDENCE': 'CONFIDENCE', 'VERSION': 'VERSION', 'BRIGHT_TI5': 'BRIGHT_TI5', 'FRP': 'FRP', 'DAYNIGHT': 'DAYNIGHT', });
lyr__0.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'BRIGHT_TI4': 'TextEdit', 'SCAN': 'TextEdit', 'TRACK': 'TextEdit', 'ACQ_DATE': 'DateTime', 'ACQ_TIME': 'TextEdit', 'SATELLITE': 'TextEdit', 'CONFIDENCE': 'TextEdit', 'VERSION': 'TextEdit', 'BRIGHT_TI5': 'TextEdit', 'FRP': 'TextEdit', 'DAYNIGHT': 'TextEdit', });
lyr__0.set('fieldLabels', {'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'BRIGHT_TI4': 'no label', 'SCAN': 'no label', 'TRACK': 'no label', 'ACQ_DATE': 'no label', 'ACQ_TIME': 'no label', 'SATELLITE': 'no label', 'CONFIDENCE': 'no label', 'VERSION': 'no label', 'BRIGHT_TI5': 'no label', 'FRP': 'no label', 'DAYNIGHT': 'no label', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});