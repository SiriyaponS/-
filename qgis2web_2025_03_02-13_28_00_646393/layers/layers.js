var wms_layers = [];

var format_tha_admbnda_adm1_rtsd_20190221shp_0 = new ol.format.GeoJSON();
var features_tha_admbnda_adm1_rtsd_20190221shp_0 = format_tha_admbnda_adm1_rtsd_20190221shp_0.readFeatures(json_tha_admbnda_adm1_rtsd_20190221shp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tha_admbnda_adm1_rtsd_20190221shp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tha_admbnda_adm1_rtsd_20190221shp_0.addFeatures(features_tha_admbnda_adm1_rtsd_20190221shp_0);
var lyr_tha_admbnda_adm1_rtsd_20190221shp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tha_admbnda_adm1_rtsd_20190221shp_0, 
                style: style_tha_admbnda_adm1_rtsd_20190221shp_0,
                popuplayertitle: 'tha_admbnda_adm1_rtsd_20190221.shp',
                interactive: true,
                title: '<img src="styles/legend/tha_admbnda_adm1_rtsd_20190221shp_0.png" /> tha_admbnda_adm1_rtsd_20190221.shp'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'จุดความร้อน',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> จุดความร้อน'
            });

lyr_tha_admbnda_adm1_rtsd_20190221shp_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_tha_admbnda_adm1_rtsd_20190221shp_0,lyr__1];
lyr_tha_admbnda_adm1_rtsd_20190221shp_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr__1.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'BRIGHT_TI4': 'BRIGHT_TI4', 'SCAN': 'SCAN', 'TRACK': 'TRACK', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', 'SATELLITE': 'SATELLITE', 'CONFIDENCE': 'CONFIDENCE', 'VERSION': 'VERSION', 'BRIGHT_TI5': 'BRIGHT_TI5', 'FRP': 'FRP', 'DAYNIGHT': 'DAYNIGHT', });
lyr_tha_admbnda_adm1_rtsd_20190221shp_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr__1.set('fieldImages', {'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'BRIGHT_TI4': 'TextEdit', 'SCAN': 'TextEdit', 'TRACK': 'TextEdit', 'ACQ_DATE': 'DateTime', 'ACQ_TIME': 'TextEdit', 'SATELLITE': 'TextEdit', 'CONFIDENCE': 'TextEdit', 'VERSION': 'TextEdit', 'BRIGHT_TI5': 'TextEdit', 'FRP': 'TextEdit', 'DAYNIGHT': 'TextEdit', });
lyr_tha_admbnda_adm1_rtsd_20190221shp_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr__1.set('fieldLabels', {'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'BRIGHT_TI4': 'no label', 'SCAN': 'no label', 'TRACK': 'no label', 'ACQ_DATE': 'no label', 'ACQ_TIME': 'no label', 'SATELLITE': 'no label', 'CONFIDENCE': 'no label', 'VERSION': 'no label', 'BRIGHT_TI5': 'no label', 'FRP': 'no label', 'DAYNIGHT': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});