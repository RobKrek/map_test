var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_yearsandarchitectsnationalromantism_1 = new ol.format.GeoJSON();
var features_yearsandarchitectsnationalromantism_1 = format_yearsandarchitectsnationalromantism_1.readFeatures(json_yearsandarchitectsnationalromantism_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yearsandarchitectsnationalromantism_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yearsandarchitectsnationalromantism_1.addFeatures(features_yearsandarchitectsnationalromantism_1);
var lyr_yearsandarchitectsnationalromantism_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yearsandarchitectsnationalromantism_1, 
                style: style_yearsandarchitectsnationalromantism_1,
                interactive: true,
                title: '<img src="styles/legend/yearsandarchitectsnationalromantism_1.png" /> years and architects national romantism'
            });
var format_yearsandarchitectsothers_2 = new ol.format.GeoJSON();
var features_yearsandarchitectsothers_2 = format_yearsandarchitectsothers_2.readFeatures(json_yearsandarchitectsothers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yearsandarchitectsothers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yearsandarchitectsothers_2.addFeatures(features_yearsandarchitectsothers_2);
var lyr_yearsandarchitectsothers_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yearsandarchitectsothers_2, 
                style: style_yearsandarchitectsothers_2,
                interactive: true,
                title: '<img src="styles/legend/yearsandarchitectsothers_2.png" /> years and architects others'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_yearsandarchitectsnationalromantism_1.setVisible(true);lyr_yearsandarchitectsothers_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_yearsandarchitectsnationalromantism_1,lyr_yearsandarchitectsothers_2];
lyr_yearsandarchitectsnationalromantism_1.set('fieldAliases', {'Lat': 'Lat', 'Lon': 'Lon', 'Construction year': 'Construction year', 'Architect (eng)': 'Architect (eng)', 'National Romanticism': 'National Romanticism', });
lyr_yearsandarchitectsothers_2.set('fieldAliases', {'Lat': 'Lat', 'Lon': 'Lon', 'Construction year': 'Construction year', 'Architect (eng)': 'Architect (eng)', 'National Romanticism': 'National Romanticism', });
lyr_yearsandarchitectsnationalromantism_1.set('fieldImages', {'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Construction year': 'Range', 'Architect (eng)': 'TextEdit', 'National Romanticism': 'TextEdit', });
lyr_yearsandarchitectsothers_2.set('fieldImages', {'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Construction year': 'Range', 'Architect (eng)': 'TextEdit', 'National Romanticism': 'TextEdit', });
lyr_yearsandarchitectsnationalromantism_1.set('fieldLabels', {'Lat': 'no label', 'Lon': 'no label', 'Construction year': 'no label', 'Architect (eng)': 'no label', 'National Romanticism': 'no label', });
lyr_yearsandarchitectsothers_2.set('fieldLabels', {'Lat': 'no label', 'Lon': 'no label', 'Construction year': 'no label', 'Architect (eng)': 'no label', 'National Romanticism': 'no label', });
lyr_yearsandarchitectsothers_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});