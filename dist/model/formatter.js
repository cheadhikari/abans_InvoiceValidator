sap.ui.define([
	"sap/ui/core/format/NumberFormat"
], function (NumberFormat) {
	"use strict";
	return {

		currencyFormat: function (pValue) {
			
			if (!pValue) {
				return;
			}
			
			var numberFormat = NumberFormat.getFloatInstance({
				maxFractionDigits: 2
			});
			var oText = numberFormat.format(pValue);
			return oText;
		},
		
		qtyFormat: function (pValue) {
			var numberFormat = NumberFormat.getFloatInstance({
				maxFractionDigits: 2
			});
			var oText = numberFormat.format(pValue);
			return oText;
		},

		ratingState: function (pValue) {
			if (pValue >= 8.0) {
				return "Success";
			} else if (pValue >= 7.0 && pValue < 8.0) {
				return "Warning";
			} else {
				return "Error";
			}
		}
	};
});