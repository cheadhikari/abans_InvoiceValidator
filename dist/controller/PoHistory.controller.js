sap.ui.define([
	"com/abans_InvoiceValidator/controller/BaseController",
	"sap/suite/ui/commons/ProcessFlowZoomLevel",
	"sap/ui/model/json/JSONModel",
	"com/abans_InvoiceValidator/model/formatter"
], function(Controller, ProcessFlowZoomLevel, JSONModel, Formatter) {
	"use strict";

	return Controller.extend("com.abans_InvoiceValidator.controller.PoHistory", {

		/*
			Helper Methods
		*/

		_onitemMatched: function(oEvent) {

			var oArgs = oEvent.getParameter("arguments");
			this._pPono = oArgs.Pono;
			this._pItemno = oArgs.Itemno;
			var oView = this.getView();

			oView.bindElement({
				path: "/poItemsSet(Pono='" + this._pPono + "',Itemno='" + this._pItemno + "')",
				model: "poModel"
			});

			this._assignPFNodes();
		},

		_assignPFNodes: function() {

			var oView = this.getView();
			var oPoModel = oView.getModel("poModel");

			var sCreated = this._geti18nText("lblCreated");
			var sPosted = this._geti18nText("lblPosted");
			var sPoItem = this._geti18nText("lblPoItem");
			var sGR = this._geti18nText("lbl_GR");
			var sNetAmount = this._geti18nText("lblNetAmount");
			var sQuantity = this._geti18nText("lblQuantity");

			var oPoHeader = oPoModel.getProperty("/poHeaderSet('" + this._pPono + "')");

			var oPoItem = oPoModel.getProperty("/poItemsSet(Pono='" + this._pPono + "',Itemno='" + this._pItemno + "')");

			var arNodes = [];

			var oNode = {
				id: 0,
				lane: 0,
				title: oPoItem.Pono + "/" + oPoItem.Itemno,
				titleAbbreviation: "",
				children: [],
				state: "Positive",
				stateText: sCreated,
				focused: true,
				texts: [
					sNetAmount + " : \n" + Formatter.currencyFormat(oPoItem.Netvalue) + " " + oPoHeader.Currency,
					sQuantity + " : \n" + Formatter.qtyFormat(oPoItem.Qtyordered) + " " + oPoItem.Uom
				]
			};

			arNodes.push(oNode);

			var arLanes = [];

			var oLane = {
				id: "0",
				icon: "sap-icon://order-status",
				label: sPoItem,
				position: 0
			};

			arLanes.push(oLane);

			var that = this;
			var oPoHistory = this._readPoHistory(oPoModel);

			oPoHistory.then(function(oResult) {
				var arPoHistory = oResult.results;

				if (arPoHistory.length > 0) {
					arNodes[0].children = [1];
				}

				for (var i = 0; i < arPoHistory.length; i++) {

					var arChildren = [];
					var iChild = 0;
					if (i + 2 <= arPoHistory.length) {
						iChild = i + 2;
						arChildren.push(iChild);
					}

					oNode = {
						id: i + 1,
						lane: i + 1,
						title: arPoHistory[i].Matdoc + "/" + arPoHistory[i].Matyear,
						titleAbbreviation: "",
						children: arChildren,
						state: "Positive",
						stateText: sPosted,
						focused: false,
						texts: [
							sNetAmount + " : \n" + Formatter.currencyFormat(oPoItem.Netprice * arPoHistory[i].Grnqty) + " " + oPoHeader.Currency,
							sQuantity + " : \n" + Formatter.qtyFormat(arPoHistory[i].Grnqty) + " " + arPoHistory[i].Uom
						]
					};

					arNodes.push(oNode);

					oLane = {
						id: i + 1,
						icon: "sap-icon://order-status",
						label: sGR,
						position: i + 1
					};

					arLanes.push(oLane);

				}

				var oPfData = {
					nodes: arNodes,
					lanes: arLanes
				};

				var oPfNodesModel = new JSONModel(oPfData);
				oView.setModel(oPfNodesModel, "pfNodesModel");

				var oPfHistory = that.byId("pfHistory");
				oPfHistory.setZoomLevel(ProcessFlowZoomLevel.One);
				oPfHistory.updateModel();

			});

		},

		_readPoHistory: function(oPoModel) {

			var that = this;
			return new Promise(function(resolve, reject) {
				oPoModel.read("/poItemsSet(Pono='" + that._pPono + "',Itemno='" + that._pItemno + "')/toPoHistory", {
					success: function(oResult) {
						resolve(oResult);
					},
					error: function(oError) {
						reject(oError);
					}
				});
			});
		},

		/*
			Events
		*/

		onInit: function() {

			var oRouter = this._getRouter();
			oRouter.getRoute("PoHistory").attachMatched(this._onitemMatched, this);

		}
	});

});