var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AelanDigital_2 = new ol.format.GeoJSON();
var features_AelanDigital_2 = format_AelanDigital_2.readFeatures(json_AelanDigital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AelanDigital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AelanDigital_2.addFeatures(features_AelanDigital_2);
var lyr_AelanDigital_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AelanDigital_2, 
                style: style_AelanDigital_2,
                popuplayertitle: 'Aelan Digital',
                interactive: true,
                title: '<img src="styles/legend/AelanDigital_2.png" /> Aelan Digital'
            });
var format_MSelenChoisuel_3 = new ol.format.GeoJSON();
var features_MSelenChoisuel_3 = format_MSelenChoisuel_3.readFeatures(json_MSelenChoisuel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenChoisuel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenChoisuel_3.addFeatures(features_MSelenChoisuel_3);
var lyr_MSelenChoisuel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenChoisuel_3, 
                style: style_MSelenChoisuel_3,
                popuplayertitle: 'M - Selen Choisuel',
                interactive: true,
                title: '<img src="styles/legend/MSelenChoisuel_3.png" /> M - Selen Choisuel'
            });
var format_SolomonPostOfficeBranchChoisuel_4 = new ol.format.GeoJSON();
var features_SolomonPostOfficeBranchChoisuel_4 = format_SolomonPostOfficeBranchChoisuel_4.readFeatures(json_SolomonPostOfficeBranchChoisuel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolomonPostOfficeBranchChoisuel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolomonPostOfficeBranchChoisuel_4.addFeatures(features_SolomonPostOfficeBranchChoisuel_4);
var lyr_SolomonPostOfficeBranchChoisuel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolomonPostOfficeBranchChoisuel_4, 
                style: style_SolomonPostOfficeBranchChoisuel_4,
                popuplayertitle: 'Solomon Post Office Branch Choisuel',
                interactive: true,
                title: '<img src="styles/legend/SolomonPostOfficeBranchChoisuel_4.png" /> Solomon Post Office Branch Choisuel'
            });
var format_BankofSouthPacificChoisuel_5 = new ol.format.GeoJSON();
var features_BankofSouthPacificChoisuel_5 = format_BankofSouthPacificChoisuel_5.readFeatures(json_BankofSouthPacificChoisuel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificChoisuel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificChoisuel_5.addFeatures(features_BankofSouthPacificChoisuel_5);
var lyr_BankofSouthPacificChoisuel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificChoisuel_5, 
                style: style_BankofSouthPacificChoisuel_5,
                popuplayertitle: 'Bank of South Pacific Choisuel',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificChoisuel_5.png" /> Bank of South Pacific Choisuel'
            });
var format_BankofSouthPacificCentralTulagi_6 = new ol.format.GeoJSON();
var features_BankofSouthPacificCentralTulagi_6 = format_BankofSouthPacificCentralTulagi_6.readFeatures(json_BankofSouthPacificCentralTulagi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificCentralTulagi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificCentralTulagi_6.addFeatures(features_BankofSouthPacificCentralTulagi_6);
var lyr_BankofSouthPacificCentralTulagi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificCentralTulagi_6, 
                style: style_BankofSouthPacificCentralTulagi_6,
                popuplayertitle: 'Bank of South Pacific Central(Tulagi)',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificCentralTulagi_6.png" /> Bank of South Pacific Central(Tulagi)'
            });
var format_EzipeiPostCentralTulagi_7 = new ol.format.GeoJSON();
var features_EzipeiPostCentralTulagi_7 = format_EzipeiPostCentralTulagi_7.readFeatures(json_EzipeiPostCentralTulagi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EzipeiPostCentralTulagi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EzipeiPostCentralTulagi_7.addFeatures(features_EzipeiPostCentralTulagi_7);
var lyr_EzipeiPostCentralTulagi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EzipeiPostCentralTulagi_7, 
                style: style_EzipeiPostCentralTulagi_7,
                popuplayertitle: 'Ezipei Post Central(Tulagi)',
                interactive: true,
                title: '<img src="styles/legend/EzipeiPostCentralTulagi_7.png" /> Ezipei Post Central(Tulagi)'
            });
var format_ANZCentralTulagi_8 = new ol.format.GeoJSON();
var features_ANZCentralTulagi_8 = format_ANZCentralTulagi_8.readFeatures(json_ANZCentralTulagi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZCentralTulagi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZCentralTulagi_8.addFeatures(features_ANZCentralTulagi_8);
var lyr_ANZCentralTulagi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZCentralTulagi_8, 
                style: style_ANZCentralTulagi_8,
                popuplayertitle: 'ANZ Central(Tulagi)',
                interactive: true,
                title: '<img src="styles/legend/ANZCentralTulagi_8.png" /> ANZ Central(Tulagi)'
            });
var format_BigNgella_9 = new ol.format.GeoJSON();
var features_BigNgella_9 = format_BigNgella_9.readFeatures(json_BigNgella_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BigNgella_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BigNgella_9.addFeatures(features_BigNgella_9);
var lyr_BigNgella_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BigNgella_9, 
                style: style_BigNgella_9,
                popuplayertitle: 'Big Ngella ',
                interactive: true,
                title: '<img src="styles/legend/BigNgella_9.png" /> Big Ngella '
            });
var format_MSelenCentralSmallNgella_10 = new ol.format.GeoJSON();
var features_MSelenCentralSmallNgella_10 = format_MSelenCentralSmallNgella_10.readFeatures(json_MSelenCentralSmallNgella_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralSmallNgella_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralSmallNgella_10.addFeatures(features_MSelenCentralSmallNgella_10);
var lyr_MSelenCentralSmallNgella_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralSmallNgella_10, 
                style: style_MSelenCentralSmallNgella_10,
                popuplayertitle: 'M - Selen Central(Small Ngella) ',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralSmallNgella_10.png" /> M - Selen Central(Small Ngella) '
            });
var format_EziPeiMalaita_11 = new ol.format.GeoJSON();
var features_EziPeiMalaita_11 = format_EziPeiMalaita_11.readFeatures(json_EziPeiMalaita_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiMalaita_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiMalaita_11.addFeatures(features_EziPeiMalaita_11);
var lyr_EziPeiMalaita_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiMalaita_11, 
                style: style_EziPeiMalaita_11,
                popuplayertitle: 'Ezi Pei Malaita ',
                interactive: true,
                title: '<img src="styles/legend/EziPeiMalaita_11.png" /> Ezi Pei Malaita '
            });
var format_BankofSouthPacificMalaita_12 = new ol.format.GeoJSON();
var features_BankofSouthPacificMalaita_12 = format_BankofSouthPacificMalaita_12.readFeatures(json_BankofSouthPacificMalaita_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMalaita_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMalaita_12.addFeatures(features_BankofSouthPacificMalaita_12);
var lyr_BankofSouthPacificMalaita_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMalaita_12, 
                style: style_BankofSouthPacificMalaita_12,
                popuplayertitle: 'Bank of South Pacific Malaita',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMalaita_12.png" /> Bank of South Pacific Malaita'
            });
var format_MSelenMalaita_13 = new ol.format.GeoJSON();
var features_MSelenMalaita_13 = format_MSelenMalaita_13.readFeatures(json_MSelenMalaita_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMalaita_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMalaita_13.addFeatures(features_MSelenMalaita_13);
var lyr_MSelenMalaita_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMalaita_13, 
                style: style_MSelenMalaita_13,
                popuplayertitle: 'M- Selen Malaita',
                interactive: true,
                title: '<img src="styles/legend/MSelenMalaita_13.png" /> M- Selen Malaita'
            });
var format_MSelenNoro_14 = new ol.format.GeoJSON();
var features_MSelenNoro_14 = format_MSelenNoro_14.readFeatures(json_MSelenNoro_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenNoro_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenNoro_14.addFeatures(features_MSelenNoro_14);
var lyr_MSelenNoro_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenNoro_14, 
                style: style_MSelenNoro_14,
                popuplayertitle: 'M- Selen Noro',
                interactive: true,
                title: '<img src="styles/legend/MSelenNoro_14.png" /> M- Selen Noro'
            });
var format_MSelenRenbel_15 = new ol.format.GeoJSON();
var features_MSelenRenbel_15 = format_MSelenRenbel_15.readFeatures(json_MSelenRenbel_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenRenbel_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenRenbel_15.addFeatures(features_MSelenRenbel_15);
var lyr_MSelenRenbel_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenRenbel_15, 
                style: style_MSelenRenbel_15,
                popuplayertitle: 'M- Selen Renbel',
                interactive: true,
                title: '<img src="styles/legend/MSelenRenbel_15.png" /> M- Selen Renbel'
            });
var format_BankofSouthPacificGizo_16 = new ol.format.GeoJSON();
var features_BankofSouthPacificGizo_16 = format_BankofSouthPacificGizo_16.readFeatures(json_BankofSouthPacificGizo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificGizo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificGizo_16.addFeatures(features_BankofSouthPacificGizo_16);
var lyr_BankofSouthPacificGizo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificGizo_16, 
                style: style_BankofSouthPacificGizo_16,
                popuplayertitle: 'Bank of South Pacific Gizo',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificGizo_16.png" /> Bank of South Pacific Gizo'
            });
var format_EziPeiGizo_17 = new ol.format.GeoJSON();
var features_EziPeiGizo_17 = format_EziPeiGizo_17.readFeatures(json_EziPeiGizo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiGizo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiGizo_17.addFeatures(features_EziPeiGizo_17);
var lyr_EziPeiGizo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiGizo_17, 
                style: style_EziPeiGizo_17,
                popuplayertitle: 'Ezi Pei Gizo ',
                interactive: true,
                title: '<img src="styles/legend/EziPeiGizo_17.png" /> Ezi Pei Gizo '
            });
var format_MSelenGizo_18 = new ol.format.GeoJSON();
var features_MSelenGizo_18 = format_MSelenGizo_18.readFeatures(json_MSelenGizo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenGizo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenGizo_18.addFeatures(features_MSelenGizo_18);
var lyr_MSelenGizo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenGizo_18, 
                style: style_MSelenGizo_18,
                popuplayertitle: 'M- Selen Gizo',
                interactive: true,
                title: '<img src="styles/legend/MSelenGizo_18.png" /> M- Selen Gizo'
            });
var format_ANZGizo_19 = new ol.format.GeoJSON();
var features_ANZGizo_19 = format_ANZGizo_19.readFeatures(json_ANZGizo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZGizo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZGizo_19.addFeatures(features_ANZGizo_19);
var lyr_ANZGizo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZGizo_19, 
                style: style_ANZGizo_19,
                popuplayertitle: 'ANZ Gizo',
                interactive: true,
                title: '<img src="styles/legend/ANZGizo_19.png" /> ANZ Gizo'
            });
var format_ANZMunda_20 = new ol.format.GeoJSON();
var features_ANZMunda_20 = format_ANZMunda_20.readFeatures(json_ANZMunda_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZMunda_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZMunda_20.addFeatures(features_ANZMunda_20);
var lyr_ANZMunda_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZMunda_20, 
                style: style_ANZMunda_20,
                popuplayertitle: 'ANZ Munda',
                interactive: true,
                title: '<img src="styles/legend/ANZMunda_20.png" /> ANZ Munda'
            });
var format_BankofSouthPacificMunda_21 = new ol.format.GeoJSON();
var features_BankofSouthPacificMunda_21 = format_BankofSouthPacificMunda_21.readFeatures(json_BankofSouthPacificMunda_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMunda_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMunda_21.addFeatures(features_BankofSouthPacificMunda_21);
var lyr_BankofSouthPacificMunda_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMunda_21, 
                style: style_BankofSouthPacificMunda_21,
                popuplayertitle: 'Bank of South Pacific Munda',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMunda_21.png" /> Bank of South Pacific Munda'
            });
var format_MSelenMunda_22 = new ol.format.GeoJSON();
var features_MSelenMunda_22 = format_MSelenMunda_22.readFeatures(json_MSelenMunda_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMunda_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMunda_22.addFeatures(features_MSelenMunda_22);
var lyr_MSelenMunda_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMunda_22, 
                style: style_MSelenMunda_22,
                popuplayertitle: 'M-Selen Munda',
                interactive: true,
                title: '<img src="styles/legend/MSelenMunda_22.png" /> M-Selen Munda'
            });
var format_BankofSouthPacificHoniara_23 = new ol.format.GeoJSON();
var features_BankofSouthPacificHoniara_23 = format_BankofSouthPacificHoniara_23.readFeatures(json_BankofSouthPacificHoniara_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificHoniara_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificHoniara_23.addFeatures(features_BankofSouthPacificHoniara_23);
var lyr_BankofSouthPacificHoniara_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificHoniara_23, 
                style: style_BankofSouthPacificHoniara_23,
                popuplayertitle: 'Bank of South Pacific Honiara',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificHoniara_23.png" /> Bank of South Pacific Honiara'
            });
var format_ANZHoniara_24 = new ol.format.GeoJSON();
var features_ANZHoniara_24 = format_ANZHoniara_24.readFeatures(json_ANZHoniara_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZHoniara_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZHoniara_24.addFeatures(features_ANZHoniara_24);
var lyr_ANZHoniara_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZHoniara_24, 
                style: style_ANZHoniara_24,
                popuplayertitle: 'ANZ Honiara',
                interactive: true,
                title: '<img src="styles/legend/ANZHoniara_24.png" /> ANZ Honiara'
            });
var format_BredBankHoniara_25 = new ol.format.GeoJSON();
var features_BredBankHoniara_25 = format_BredBankHoniara_25.readFeatures(json_BredBankHoniara_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BredBankHoniara_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BredBankHoniara_25.addFeatures(features_BredBankHoniara_25);
var lyr_BredBankHoniara_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BredBankHoniara_25, 
                style: style_BredBankHoniara_25,
                popuplayertitle: 'BredBank Honiara ',
                interactive: true,
                title: '<img src="styles/legend/BredBankHoniara_25.png" /> BredBank Honiara '
            });
var format_MSelenHoniara_26 = new ol.format.GeoJSON();
var features_MSelenHoniara_26 = format_MSelenHoniara_26.readFeatures(json_MSelenHoniara_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenHoniara_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenHoniara_26.addFeatures(features_MSelenHoniara_26);
var lyr_MSelenHoniara_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenHoniara_26, 
                style: style_MSelenHoniara_26,
                popuplayertitle: 'M-Selen Honiara ',
                interactive: true,
                title: '<img src="styles/legend/MSelenHoniara_26.png" /> M-Selen Honiara '
            });
var format_BankofSouthPacificMakiraUlawa_27 = new ol.format.GeoJSON();
var features_BankofSouthPacificMakiraUlawa_27 = format_BankofSouthPacificMakiraUlawa_27.readFeatures(json_BankofSouthPacificMakiraUlawa_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMakiraUlawa_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMakiraUlawa_27.addFeatures(features_BankofSouthPacificMakiraUlawa_27);
var lyr_BankofSouthPacificMakiraUlawa_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMakiraUlawa_27, 
                style: style_BankofSouthPacificMakiraUlawa_27,
                popuplayertitle: 'Bank of South Pacific - Makira Ulawa',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMakiraUlawa_27.png" /> Bank of South Pacific - Makira Ulawa'
            });
var format_MSelenMakiraUlawa_28 = new ol.format.GeoJSON();
var features_MSelenMakiraUlawa_28 = format_MSelenMakiraUlawa_28.readFeatures(json_MSelenMakiraUlawa_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMakiraUlawa_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMakiraUlawa_28.addFeatures(features_MSelenMakiraUlawa_28);
var lyr_MSelenMakiraUlawa_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMakiraUlawa_28, 
                style: style_MSelenMakiraUlawa_28,
                popuplayertitle: 'M- Selen - Makira Ulawa',
                interactive: true,
                title: '<img src="styles/legend/MSelenMakiraUlawa_28.png" /> M- Selen - Makira Ulawa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_AelanDigital_2.setVisible(true);lyr_MSelenChoisuel_3.setVisible(true);lyr_SolomonPostOfficeBranchChoisuel_4.setVisible(true);lyr_BankofSouthPacificChoisuel_5.setVisible(true);lyr_BankofSouthPacificCentralTulagi_6.setVisible(true);lyr_EzipeiPostCentralTulagi_7.setVisible(true);lyr_ANZCentralTulagi_8.setVisible(true);lyr_BigNgella_9.setVisible(true);lyr_MSelenCentralSmallNgella_10.setVisible(true);lyr_EziPeiMalaita_11.setVisible(true);lyr_BankofSouthPacificMalaita_12.setVisible(true);lyr_MSelenMalaita_13.setVisible(true);lyr_MSelenNoro_14.setVisible(true);lyr_MSelenRenbel_15.setVisible(true);lyr_BankofSouthPacificGizo_16.setVisible(true);lyr_EziPeiGizo_17.setVisible(true);lyr_MSelenGizo_18.setVisible(true);lyr_ANZGizo_19.setVisible(true);lyr_ANZMunda_20.setVisible(true);lyr_BankofSouthPacificMunda_21.setVisible(true);lyr_MSelenMunda_22.setVisible(true);lyr_BankofSouthPacificHoniara_23.setVisible(true);lyr_ANZHoniara_24.setVisible(true);lyr_BredBankHoniara_25.setVisible(true);lyr_MSelenHoniara_26.setVisible(true);lyr_BankofSouthPacificMakiraUlawa_27.setVisible(true);lyr_MSelenMakiraUlawa_28.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_AelanDigital_2,lyr_MSelenChoisuel_3,lyr_SolomonPostOfficeBranchChoisuel_4,lyr_BankofSouthPacificChoisuel_5,lyr_BankofSouthPacificCentralTulagi_6,lyr_EzipeiPostCentralTulagi_7,lyr_ANZCentralTulagi_8,lyr_BigNgella_9,lyr_MSelenCentralSmallNgella_10,lyr_EziPeiMalaita_11,lyr_BankofSouthPacificMalaita_12,lyr_MSelenMalaita_13,lyr_MSelenNoro_14,lyr_MSelenRenbel_15,lyr_BankofSouthPacificGizo_16,lyr_EziPeiGizo_17,lyr_MSelenGizo_18,lyr_ANZGizo_19,lyr_ANZMunda_20,lyr_BankofSouthPacificMunda_21,lyr_MSelenMunda_22,lyr_BankofSouthPacificHoniara_23,lyr_ANZHoniara_24,lyr_BredBankHoniara_25,lyr_MSelenHoniara_26,lyr_BankofSouthPacificMakiraUlawa_27,lyr_MSelenMakiraUlawa_28];
lyr_AelanDigital_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Status': 'Status', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenChoisuel_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SolomonPostOfficeBranchChoisuel_4.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificChoisuel_5.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificCentralTulagi_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EzipeiPostCentralTulagi_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZCentralTulagi_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BigNgella_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralSmallNgella_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiMalaita_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMalaita_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMalaita_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenNoro_14.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenRenbel_15.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificGizo_16.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiGizo_17.set('fieldAliases', {'fid': 'fid', 'Agent Name': 'Agent Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenGizo_18.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZGizo_19.set('fieldAliases', {'fid': 'fid', 'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZMunda_20.set('fieldAliases', {'fid': 'fid', 'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMunda_21.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'field_3': 'field_3', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMunda_22.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificHoniara_23.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_ANZHoniara_24.set('fieldAliases', {'fid': 'fid', 'ANZ   BRANCHES': 'ANZ   BRANCHES', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BredBankHoniara_25.set('fieldAliases', {'fid': 'fid', 'PROVINCES': 'PROVINCES', 'Bred    BRANCHES': 'Bred    BRANCHES', 'Type of Branche': 'Type of Branche', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MSelenHoniara_26.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Busi': 'Agent Busi', 'Physical A': 'Physical A', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMakiraUlawa_27.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMakiraUlawa_28.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_AelanDigital_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Status': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenChoisuel_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SolomonPostOfficeBranchChoisuel_4.set('fieldImages', {'fid': '', 'NAME': '', 'Access type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_BankofSouthPacificChoisuel_5.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificCentralTulagi_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EzipeiPostCentralTulagi_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZCentralTulagi_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BigNgella_9.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenCentralSmallNgella_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiMalaita_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificMalaita_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMalaita_13.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenNoro_14.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenRenbel_15.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificGizo_16.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiGizo_17.set('fieldImages', {'fid': 'TextEdit', 'Agent Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenGizo_18.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZGizo_19.set('fieldImages', {'fid': 'TextEdit', 'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZMunda_20.set('fieldImages', {'fid': 'TextEdit', 'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificMunda_21.set('fieldImages', {'fid': 'TextEdit', 'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'field_3': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMunda_22.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificHoniara_23.set('fieldImages', {'fid': '', 'BSP BRANCHES': '', 'STREET ADDRESS & CITY': '', 'TYPE OF BRANCHE': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_ANZHoniara_24.set('fieldImages', {'fid': 'TextEdit', 'ANZ   BRANCHES': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BredBankHoniara_25.set('fieldImages', {'fid': 'TextEdit', 'PROVINCES': 'TextEdit', 'Bred    BRANCHES': 'TextEdit', 'Type of Branche': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_MSelenHoniara_26.set('fieldImages', {'fid': 'TextEdit', 'Agent Type': 'TextEdit', 'Agent Busi': 'TextEdit', 'Physical A': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificMakiraUlawa_27.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenMakiraUlawa_28.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_AelanDigital_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenChoisuel_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_SolomonPostOfficeBranchChoisuel_4.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificChoisuel_5.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificCentralTulagi_6.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EzipeiPostCentralTulagi_7.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZCentralTulagi_8.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BigNgella_9.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralSmallNgella_10.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiMalaita_11.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificMalaita_12.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMalaita_13.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenNoro_14.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenRenbel_15.set('fieldLabels', {'fid': 'inline label - always visible', 'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificGizo_16.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiGizo_17.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenGizo_18.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZGizo_19.set('fieldLabels', {'fid': 'inline label - always visible', 'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZMunda_20.set('fieldLabels', {'fid': 'inline label - always visible', 'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificMunda_21.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'field_3': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMunda_22.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificHoniara_23.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_ANZHoniara_24.set('fieldLabels', {'fid': 'inline label - always visible', 'ANZ   BRANCHES': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BredBankHoniara_25.set('fieldLabels', {'fid': 'inline label - always visible', 'PROVINCES': 'inline label - always visible', 'Bred    BRANCHES': 'inline label - always visible', 'Type of Branche': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_MSelenHoniara_26.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Busi': 'inline label - always visible', 'Physical A': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificMakiraUlawa_27.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMakiraUlawa_28.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMakiraUlawa_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});