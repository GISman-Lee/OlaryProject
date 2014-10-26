define(["dojo/_base/declare", "esri/request", "esri/layers/FeatureLayer"], function(declare, esriRequest, FeatureLayer) {
return declare(null, {

streams_olary: null,
streams_teetulpa: null,
roads: null,
railways: null,
surveyareas: null,
area4: null,

constructor: function(options){
this.streams_olary = new esri.layers.FeatureLayer("http://arcgis-olary-789983489.ap-southeast-2.elb.amazonaws.com/arcgis/rest/services/Olary/MapServer/10", {
mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
outFields:["*"]
});
}
});
});

