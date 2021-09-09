define(["dojo/_base/declare",
	"esri/symbols/TextSymbol",
	"esri/renderers/SimpleRenderer",
	"esri/layers/LabelLayer",
	"esri/Color",],
	function(declare, TextSymbol, SimpleRenderer, LabelLayer, Color) {
	return declare(null, {
		LabelRenderer: null,

		constructor: function(){
			var LabelColor = new Color("#666");
			var LabelText = new TextSymbol().setColor(LabelColor);
			LabelText.font.setFamily("arial");
			this.LabelRenderer = new SimpleRenderer(LabelText);
		},

		createLabel: function(params){
			var labels = new LabelLayer({id : params.labelid});
			labels.addFeatureLayer(params.featurelayer, this.LabelRenderer, "{" + params.labelfield + "}");
			return labels;
		}

	});
})
