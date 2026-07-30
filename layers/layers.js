var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.609000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Area_1 = new ol.format.GeoJSON();
var features_Area_1 = format_Area_1.readFeatures(json_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_1.addFeatures(features_Area_1);
var lyr_Area_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_1, 
                style: style_Area_1,
                popuplayertitle: 'Area',
                interactive: false,
    title: 'Area<br />\
    <img src="styles/legend/Area_1_0.png" /> Mer<br />\
    <img src="styles/legend/Area_1_1.png" /> Terre<br />' });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                popuplayertitle: 'Building',
                interactive: false,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                popuplayertitle: 'Roads',
                interactive: false,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });
var format_Pompier_4 = new ol.format.GeoJSON();
var features_Pompier_4 = format_Pompier_4.readFeatures(json_Pompier_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pompier_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pompier_4.addFeatures(features_Pompier_4);
var lyr_Pompier_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pompier_4, 
                style: style_Pompier_4,
                popuplayertitle: 'Pompier',
                interactive: false,
                title: '<img src="styles/legend/Pompier_4.png" /> Pompier'
            });
var format_Offices_5 = new ol.format.GeoJSON();
var features_Offices_5 = format_Offices_5.readFeatures(json_Offices_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offices_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offices_5.addFeatures(features_Offices_5);
var lyr_Offices_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Offices_5, 
                style: style_Offices_5,
                popuplayertitle: 'Offices',
                interactive: false,
                title: '<img src="styles/legend/Offices_5.png" /> Offices'
            });
var format_YachtingVillage_6 = new ol.format.GeoJSON();
var features_YachtingVillage_6 = format_YachtingVillage_6.readFeatures(json_YachtingVillage_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YachtingVillage_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YachtingVillage_6.addFeatures(features_YachtingVillage_6);
var lyr_YachtingVillage_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YachtingVillage_6, 
                style: style_YachtingVillage_6,
                popuplayertitle: 'Yachting Village',
                interactive: false,
                title: '<img src="styles/legend/YachtingVillage_6.png" /> Yachting Village'
            });
var format_PaintCabin_7 = new ol.format.GeoJSON();
var features_PaintCabin_7 = format_PaintCabin_7.readFeatures(json_PaintCabin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaintCabin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaintCabin_7.addFeatures(features_PaintCabin_7);
var lyr_PaintCabin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaintCabin_7, 
                style: style_PaintCabin_7,
                popuplayertitle: 'Paint Cabin',
                interactive: false,
                title: '<img src="styles/legend/PaintCabin_7.png" /> Paint Cabin'
            });
var format_Nef_8 = new ol.format.GeoJSON();
var features_Nef_8 = format_Nef_8.readFeatures(json_Nef_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nef_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nef_8.addFeatures(features_Nef_8);
var lyr_Nef_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nef_8, 
                style: style_Nef_8,
                popuplayertitle: 'Nef',
                interactive: false,
                title: '<img src="styles/legend/Nef_8.png" /> Nef'
            });
var format_HardstandingArea_9 = new ol.format.GeoJSON();
var features_HardstandingArea_9 = format_HardstandingArea_9.readFeatures(json_HardstandingArea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HardstandingArea_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HardstandingArea_9.addFeatures(features_HardstandingArea_9);
var lyr_HardstandingArea_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HardstandingArea_9, 
                style: style_HardstandingArea_9,
                popuplayertitle: 'Hardstanding Area',
                interactive: false,
                title: '<img src="styles/legend/HardstandingArea_9.png" /> Hardstanding Area'
            });
var format_Drydock_10 = new ol.format.GeoJSON();
var features_Drydock_10 = format_Drydock_10.readFeatures(json_Drydock_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drydock_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drydock_10.addFeatures(features_Drydock_10);
var lyr_Drydock_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drydock_10, 
                style: style_Drydock_10,
                popuplayertitle: 'Dry dock',
                interactive: false,
                title: '<img src="styles/legend/Drydock_10.png" /> Dry dock'
            });
var format_gantry_crane_11 = new ol.format.GeoJSON();
var features_gantry_crane_11 = format_gantry_crane_11.readFeatures(json_gantry_crane_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gantry_crane_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gantry_crane_11.addFeatures(features_gantry_crane_11);
var lyr_gantry_crane_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gantry_crane_11, 
                style: style_gantry_crane_11,
                popuplayertitle: 'gantry_crane',
                interactive: false,
                title: '<img src="styles/legend/gantry_crane_11.png" /> gantry_crane'
            });
var format_Shipchandler_12 = new ol.format.GeoJSON();
var features_Shipchandler_12 = format_Shipchandler_12.readFeatures(json_Shipchandler_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shipchandler_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shipchandler_12.addFeatures(features_Shipchandler_12);
var lyr_Shipchandler_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shipchandler_12, 
                style: style_Shipchandler_12,
                popuplayertitle: 'Shipchandler',
                interactive: true,
                title: '<img src="styles/legend/Shipchandler_12.png" /> Shipchandler'
            });
var format_CustomsFreight_13 = new ol.format.GeoJSON();
var features_CustomsFreight_13 = format_CustomsFreight_13.readFeatures(json_CustomsFreight_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CustomsFreight_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CustomsFreight_13.addFeatures(features_CustomsFreight_13);
var lyr_CustomsFreight_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CustomsFreight_13, 
                style: style_CustomsFreight_13,
                popuplayertitle: 'Customs & Freight',
                interactive: true,
                title: '<img src="styles/legend/CustomsFreight_13.png" /> Customs & Freight'
            });
var format_RiskManagement_14 = new ol.format.GeoJSON();
var features_RiskManagement_14 = format_RiskManagement_14.readFeatures(json_RiskManagement_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiskManagement_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiskManagement_14.addFeatures(features_RiskManagement_14);
var lyr_RiskManagement_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiskManagement_14, 
                style: style_RiskManagement_14,
                popuplayertitle: 'Risk Management',
                interactive: true,
                title: '<img src="styles/legend/RiskManagement_14.png" /> Risk Management'
            });
var format_UnderwaterWorks_15 = new ol.format.GeoJSON();
var features_UnderwaterWorks_15 = format_UnderwaterWorks_15.readFeatures(json_UnderwaterWorks_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnderwaterWorks_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnderwaterWorks_15.addFeatures(features_UnderwaterWorks_15);
var lyr_UnderwaterWorks_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnderwaterWorks_15, 
                style: style_UnderwaterWorks_15,
                popuplayertitle: 'Underwater Works',
                interactive: true,
                title: '<img src="styles/legend/UnderwaterWorks_15.png" /> Underwater Works'
            });
var format_ScaffoldingTenting_16 = new ol.format.GeoJSON();
var features_ScaffoldingTenting_16 = format_ScaffoldingTenting_16.readFeatures(json_ScaffoldingTenting_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ScaffoldingTenting_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScaffoldingTenting_16.addFeatures(features_ScaffoldingTenting_16);
var lyr_ScaffoldingTenting_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScaffoldingTenting_16, 
                style: style_ScaffoldingTenting_16,
                popuplayertitle: 'Scaffolding & Tenting',
                interactive: true,
                title: '<img src="styles/legend/ScaffoldingTenting_16.png" /> Scaffolding & Tenting'
            });
var format_TemporaryProtection_17 = new ol.format.GeoJSON();
var features_TemporaryProtection_17 = format_TemporaryProtection_17.readFeatures(json_TemporaryProtection_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemporaryProtection_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemporaryProtection_17.addFeatures(features_TemporaryProtection_17);
var lyr_TemporaryProtection_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemporaryProtection_17, 
                style: style_TemporaryProtection_17,
                popuplayertitle: 'Temporary Protection',
                interactive: true,
                title: '<img src="styles/legend/TemporaryProtection_17.png" /> Temporary Protection'
            });
var format_PaintCoating_18 = new ol.format.GeoJSON();
var features_PaintCoating_18 = format_PaintCoating_18.readFeatures(json_PaintCoating_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaintCoating_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaintCoating_18.addFeatures(features_PaintCoating_18);
var lyr_PaintCoating_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaintCoating_18, 
                style: style_PaintCoating_18,
                popuplayertitle: 'Paint & Coating',
                interactive: true,
                title: '<img src="styles/legend/PaintCoating_18.png" /> Paint & Coating'
            });
var format_Ulphostery_19 = new ol.format.GeoJSON();
var features_Ulphostery_19 = format_Ulphostery_19.readFeatures(json_Ulphostery_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ulphostery_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ulphostery_19.addFeatures(features_Ulphostery_19);
var lyr_Ulphostery_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ulphostery_19, 
                style: style_Ulphostery_19,
                popuplayertitle: 'Ulphostery',
                interactive: true,
                title: '<img src="styles/legend/Ulphostery_19.png" /> Ulphostery'
            });
var format_Rigging_20 = new ol.format.GeoJSON();
var features_Rigging_20 = format_Rigging_20.readFeatures(json_Rigging_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rigging_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rigging_20.addFeatures(features_Rigging_20);
var lyr_Rigging_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rigging_20, 
                style: style_Rigging_20,
                popuplayertitle: 'Rigging',
                interactive: true,
                title: '<img src="styles/legend/Rigging_20.png" /> Rigging'
            });
var format_WoodenWorks_21 = new ol.format.GeoJSON();
var features_WoodenWorks_21 = format_WoodenWorks_21.readFeatures(json_WoodenWorks_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WoodenWorks_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WoodenWorks_21.addFeatures(features_WoodenWorks_21);
var lyr_WoodenWorks_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WoodenWorks_21, 
                style: style_WoodenWorks_21,
                popuplayertitle: 'Wooden Works',
                interactive: true,
                title: '<img src="styles/legend/WoodenWorks_21.png" /> Wooden Works'
            });
var format_MetalWorksHardware_22 = new ol.format.GeoJSON();
var features_MetalWorksHardware_22 = format_MetalWorksHardware_22.readFeatures(json_MetalWorksHardware_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetalWorksHardware_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetalWorksHardware_22.addFeatures(features_MetalWorksHardware_22);
var lyr_MetalWorksHardware_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetalWorksHardware_22, 
                style: style_MetalWorksHardware_22,
                popuplayertitle: 'Metal Works & Hardware',
                interactive: true,
                title: '<img src="styles/legend/MetalWorksHardware_22.png" /> Metal Works & Hardware'
            });
var format_HVAC_23 = new ol.format.GeoJSON();
var features_HVAC_23 = format_HVAC_23.readFeatures(json_HVAC_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HVAC_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HVAC_23.addFeatures(features_HVAC_23);
var lyr_HVAC_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HVAC_23, 
                style: style_HVAC_23,
                popuplayertitle: 'HVAC',
                interactive: true,
                title: '<img src="styles/legend/HVAC_23.png" /> HVAC'
            });
var format_Stabilizer_24 = new ol.format.GeoJSON();
var features_Stabilizer_24 = format_Stabilizer_24.readFeatures(json_Stabilizer_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stabilizer_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stabilizer_24.addFeatures(features_Stabilizer_24);
var lyr_Stabilizer_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stabilizer_24, 
                style: style_Stabilizer_24,
                popuplayertitle: 'Stabilizer',
                interactive: true,
                title: '<img src="styles/legend/Stabilizer_24.png" /> Stabilizer'
            });
var format_Hydraulic_25 = new ol.format.GeoJSON();
var features_Hydraulic_25 = format_Hydraulic_25.readFeatures(json_Hydraulic_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydraulic_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydraulic_25.addFeatures(features_Hydraulic_25);
var lyr_Hydraulic_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydraulic_25, 
                style: style_Hydraulic_25,
                popuplayertitle: 'Hydraulic',
                interactive: true,
                title: '<img src="styles/legend/Hydraulic_25.png" /> Hydraulic'
            });
var format_Engineering_26 = new ol.format.GeoJSON();
var features_Engineering_26 = format_Engineering_26.readFeatures(json_Engineering_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Engineering_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Engineering_26.addFeatures(features_Engineering_26);
var lyr_Engineering_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Engineering_26, 
                style: style_Engineering_26,
                popuplayertitle: 'Engineering',
                interactive: true,
                title: '<img src="styles/legend/Engineering_26.png" /> Engineering'
            });
var format_ElectricalElectronicsAVIT_27 = new ol.format.GeoJSON();
var features_ElectricalElectronicsAVIT_27 = format_ElectricalElectronicsAVIT_27.readFeatures(json_ElectricalElectronicsAVIT_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricalElectronicsAVIT_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricalElectronicsAVIT_27.addFeatures(features_ElectricalElectronicsAVIT_27);
var lyr_ElectricalElectronicsAVIT_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElectricalElectronicsAVIT_27, 
                style: style_ElectricalElectronicsAVIT_27,
                popuplayertitle: 'Electrical, Electronics & AV/IT',
                interactive: true,
                title: '<img src="styles/legend/ElectricalElectronicsAVIT_27.png" /> Electrical, Electronics & AV/IT'
            });
var format_DesignNavalArchitecture_28 = new ol.format.GeoJSON();
var features_DesignNavalArchitecture_28 = format_DesignNavalArchitecture_28.readFeatures(json_DesignNavalArchitecture_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesignNavalArchitecture_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesignNavalArchitecture_28.addFeatures(features_DesignNavalArchitecture_28);
var lyr_DesignNavalArchitecture_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesignNavalArchitecture_28, 
                style: style_DesignNavalArchitecture_28,
                popuplayertitle: 'Design & Naval Architecture',
                interactive: true,
                title: '<img src="styles/legend/DesignNavalArchitecture_28.png" /> Design & Naval Architecture'
            });
var group_Contractors = new ol.layer.Group({
                                layers: [lyr_Shipchandler_12,lyr_CustomsFreight_13,lyr_RiskManagement_14,lyr_UnderwaterWorks_15,lyr_ScaffoldingTenting_16,lyr_TemporaryProtection_17,lyr_PaintCoating_18,lyr_Ulphostery_19,lyr_Rigging_20,lyr_WoodenWorks_21,lyr_MetalWorksHardware_22,lyr_HVAC_23,lyr_Stabilizer_24,lyr_Hydraulic_25,lyr_Engineering_26,lyr_ElectricalElectronicsAVIT_27,lyr_DesignNavalArchitecture_28,],
                                fold: 'open',
                                title: 'Contractors'});
var group_Gantrycrane = new ol.layer.Group({
                                layers: [lyr_gantry_crane_11,],
                                fold: 'open',
                                title: ''});
var group_LCSFacilities = new ol.layer.Group({
                                layers: [lyr_Pompier_4,lyr_Offices_5,lyr_YachtingVillage_6,lyr_PaintCabin_7,lyr_Nef_8,lyr_HardstandingArea_9,lyr_Drydock_10,],
                                fold: 'open',
                                title: ''});
var group_0Fonddecarte = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Area_1,lyr_Building_2,lyr_Roads_3,],
                                fold: 'open',
                                title: ''});

lyr_OSMStandard_0.setVisible(true);lyr_Area_1.setVisible(true);lyr_Building_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_Pompier_4.setVisible(true);lyr_Offices_5.setVisible(true);lyr_YachtingVillage_6.setVisible(true);lyr_PaintCabin_7.setVisible(true);lyr_Nef_8.setVisible(true);lyr_HardstandingArea_9.setVisible(true);lyr_Drydock_10.setVisible(true);lyr_gantry_crane_11.setVisible(true);lyr_Shipchandler_12.setVisible(false);lyr_CustomsFreight_13.setVisible(false);lyr_RiskManagement_14.setVisible(false);lyr_UnderwaterWorks_15.setVisible(false);lyr_ScaffoldingTenting_16.setVisible(false);lyr_TemporaryProtection_17.setVisible(false);lyr_PaintCoating_18.setVisible(false);lyr_Ulphostery_19.setVisible(false);lyr_Rigging_20.setVisible(false);lyr_WoodenWorks_21.setVisible(false);lyr_MetalWorksHardware_22.setVisible(false);lyr_HVAC_23.setVisible(false);lyr_Stabilizer_24.setVisible(false);lyr_Hydraulic_25.setVisible(false);lyr_Engineering_26.setVisible(false);lyr_ElectricalElectronicsAVIT_27.setVisible(false);lyr_DesignNavalArchitecture_28.setVisible(false);
var layersList = [group_0Fonddecarte,group_LCSFacilities,group_Gantrycrane,group_Contractors];
lyr_Area_1.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Building_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Roads_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Pompier_4.set('fieldAliases', {'Text': 'Text', 'Url': 'Url', });
lyr_Offices_5.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_YachtingVillage_6.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_PaintCabin_7.set('fieldAliases', {'Zone': 'Zone', });
lyr_Nef_8.set('fieldAliases', {'Zone': 'Zone', });
lyr_HardstandingArea_9.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_Drydock_10.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_gantry_crane_11.set('fieldAliases', {'id': 'id', });
lyr_Shipchandler_12.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_CustomsFreight_13.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_RiskManagement_14.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_UnderwaterWorks_15.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_ScaffoldingTenting_16.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_TemporaryProtection_17.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_PaintCoating_18.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_Ulphostery_19.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_Rigging_20.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_WoodenWorks_21.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_MetalWorksHardware_22.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_HVAC_23.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_Stabilizer_24.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_Hydraulic_25.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_Engineering_26.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_ElectricalElectronicsAVIT_27.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_DesignNavalArchitecture_28.set('fieldAliases', {'Entreprise': 'Entreprise', 'Site': 'Site', 'Logo': 'Logo', });
lyr_Area_1.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Building_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Pompier_4.set('fieldImages', {'Text': 'TextEdit', 'Url': 'TextEdit', });
lyr_Offices_5.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_YachtingVillage_6.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_PaintCabin_7.set('fieldImages', {'Zone': 'TextEdit', });
lyr_Nef_8.set('fieldImages', {'Zone': 'TextEdit', });
lyr_HardstandingArea_9.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_Drydock_10.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_gantry_crane_11.set('fieldImages', {'id': 'TextEdit', });
lyr_Shipchandler_12.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_CustomsFreight_13.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_RiskManagement_14.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_UnderwaterWorks_15.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_ScaffoldingTenting_16.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_TemporaryProtection_17.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_PaintCoating_18.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Ulphostery_19.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Rigging_20.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_WoodenWorks_21.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_MetalWorksHardware_22.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_HVAC_23.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Stabilizer_24.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Hydraulic_25.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Engineering_26.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_ElectricalElectronicsAVIT_27.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_DesignNavalArchitecture_28.set('fieldImages', {'Entreprise': 'TextEdit', 'Site': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_Area_1.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Building_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Roads_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Pompier_4.set('fieldLabels', {'Text': 'no label', 'Url': 'no label', });
lyr_Offices_5.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_YachtingVillage_6.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_PaintCabin_7.set('fieldLabels', {'Zone': 'no label', });
lyr_Nef_8.set('fieldLabels', {'Zone': 'no label', });
lyr_HardstandingArea_9.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_Drydock_10.set('fieldLabels', {'Zone': 'inline label - visible with data', 'Url': 'no label', });
lyr_gantry_crane_11.set('fieldLabels', {'id': 'no label', });
lyr_Shipchandler_12.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_CustomsFreight_13.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_RiskManagement_14.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_UnderwaterWorks_15.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_ScaffoldingTenting_16.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_TemporaryProtection_17.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_PaintCoating_18.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_Ulphostery_19.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_Rigging_20.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_WoodenWorks_21.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_MetalWorksHardware_22.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_HVAC_23.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_Stabilizer_24.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_Hydraulic_25.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_Engineering_26.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'inline label - visible with data', });
lyr_ElectricalElectronicsAVIT_27.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_DesignNavalArchitecture_28.set('fieldLabels', {'Entreprise': 'no label', 'Site': 'no label', 'Logo': 'no label', });
lyr_DesignNavalArchitecture_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});