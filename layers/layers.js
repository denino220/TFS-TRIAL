ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([30.574410, -6.397188, 36.622862, -2.368253]);
var wms_layers = [];


        var lyr_TravelTimeLux_0 = new ol.layer.Tile({
            'title': 'TravelTime - Lux',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tiles.traveltime.com/lux/{z}/{x}/{y}.png?key=686bbb31&client=QGIS'
            })
        });
var format_route_final_1 = new ol.format.GeoJSON();
var features_route_final_1 = format_route_final_1.readFeatures(json_route_final_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_route_final_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_final_1.addFeatures(features_route_final_1);
var lyr_route_final_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_route_final_1, 
                style: style_route_final_1,
                popuplayertitle: "route_final",
                interactive: true,
                title: '<img src="styles/legend/route_final_1.png" /> route_final'
            });
var format_DistrictOffice_2 = new ol.format.GeoJSON();
var features_DistrictOffice_2 = format_DistrictOffice_2.readFeatures(json_DistrictOffice_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DistrictOffice_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictOffice_2.addFeatures(features_DistrictOffice_2);
var lyr_DistrictOffice_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictOffice_2, 
                style: style_DistrictOffice_2,
                popuplayertitle: "District Office",
                interactive: true,
                title: '<img src="styles/legend/DistrictOffice_2.png" /> District Office'
            });
var format_Headquarters_3 = new ol.format.GeoJSON();
var features_Headquarters_3 = format_Headquarters_3.readFeatures(json_Headquarters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Headquarters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Headquarters_3.addFeatures(features_Headquarters_3);
var lyr_Headquarters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Headquarters_3, 
                style: style_Headquarters_3,
                popuplayertitle: "Headquarters",
                interactive: true,
                title: '<img src="styles/legend/Headquarters_3.png" /> Headquarters'
            });

lyr_TravelTimeLux_0.setVisible(true);lyr_route_final_1.setVisible(true);lyr_DistrictOffice_2.setVisible(true);lyr_Headquarters_3.setVisible(true);
var layersList = [lyr_TravelTimeLux_0,lyr_route_final_1,lyr_DistrictOffice_2,lyr_Headquarters_3];
lyr_route_final_1.set('fieldAliases', {'Route_name': 'Route_name', 'Distance': 'Distance', });
lyr_DistrictOffice_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Headquarters_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_route_final_1.set('fieldImages', {'Route_name': 'TextEdit', 'Distance': 'TextEdit', });
lyr_DistrictOffice_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Headquarters_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_route_final_1.set('fieldLabels', {'Route_name': 'no label', 'Distance': 'no label', });
lyr_DistrictOffice_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Headquarters_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Headquarters_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});