define(["dojo/_base/declare",
	"dojo/_base/array",
	"esri/layers/FeatureLayer"],
	function(declare, arrayUtils, FeatureLayer) {
	return declare(null, {

		featureArray = [streams_olary, streams_teetulpa, raods, railways, surveyareas, area4, track_area4],
		streams_olary: null,
		streams_teetulpa: null,
		roads: null,
		railways: null,
		surveyareas: null,
		area4: null,
		track_area4: null,

		constructor: function(options){
			this.streams_olary = new esri.layers.FeatureLayer("http://arcgis-olary-789983489.ap-southeast-2.elb.amazonaws.com/arcgis/rest/services/Olary/MapServer/10", {
				mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
				outFields:["*"]
			});

			this.streams_teetulpa = new esri.layers.FeatureLayer("http://arcgis-olary-789983489.ap-southeast-2.elb.amazonaws.com/arcgis/rest/services/Olary/MapServer/5"
				, {
					mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
					outFields: ["*"]
				});

			this.roads = new esri.layers.FeatureLayer("http://arcgis-olary-789983489.ap-southeast-2.elb.amazonaws.com/arcgis/rest/services/Olary/MapServer/4"
				, {
					mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
					outFields: ["*"]
				});

			this.railways = new esri.layers.FeatureLayer("http://arcgis-olary-789983489.ap-southeast-2.elb.amazonaws.com/arcgis/rest/services/Olary/MapServer/3"
				, {
					mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
					outFields: ["*"]
				});

			this.surveyareas = new esri.layers.FeatureLayer("http://arcgis-olary-789983489.ap-southeast-2.elb.amazonaws.com/arcgis/rest/services/Olary/MapServer/17"
				, {
					mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
					outFields: ["*"]
				});

			this.area4 = new esri.layers.FeatureLayer("http://arcgis-olary-789983489.ap-southeast-2.elb.amazonaws.com/arcgis/rest/services/Olary/MapServer/11"
				, {
					mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
					outFields: ["*"]
				});

			this.track_area4 = new esri.layers.FeatureLayer("http://arcgis-olary-789983489.ap-southeast-2.elb.amazonaws.com/arcgis/rest/services/OlaryFeatures/Olary/MapServer/1"
				, {
					mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
					outFields: ["*"]
				});
		},

	});
});
