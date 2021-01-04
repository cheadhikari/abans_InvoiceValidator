sap.ui.define([
	"com/abans_InvoiceValidator/controller/BaseController",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"com/abans_InvoiceValidator/model/formatter",
	"sap/ui/core/Fragment"
], function(Controller, Sorter, Filter, FilterOperator, Formatter, Fragment) {
	"use strict";

	return Controller.extend("com.abans_InvoiceValidator.controller.PoHeader", {
		formatter: Formatter,

		/* 
			Helper Methods
		*/

		_openDialog: function() {

			var oView = this.getView();
			var oInvoicesDialog = this.byId("InvoicesDialog");

			if (!this._pPono) {
				return;
			}

			if (!oInvoicesDialog) {
				Fragment.load({
					id: oView.getId(),
					name: "com.abans_InvoiceValidator.view.InvoicesDialog",
					controller: this
				}).then(function(oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				oInvoicesDialog.open();
			}

			var oTable = this.byId("tabInvoices");
			var oTemplate = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Link({
						text: "{poModel>Documentno}",
						press: [this.onOpenInvoice, this]
					}),

					new sap.m.ObjectNumber({
						number: {
							parts: [{
								path: 'poModel>Amount'
							}, {
								path: 'poModel>Currency'
							}],
							type: 'sap.ui.model.type.Currency',
							formatOptions: {
								showMeasure: true
							}
						}
					})
				]
			});

			oTable.bindItems("poModel>/poHeaderSet('" + this._pPono + "')/toPoInvoices", oTemplate);

		},

		_closeDialog: function() {
			this.byId("InvoicesDialog").close();
		},

		/* 
			Events 
		*/
		onInit: function() {

			var oView = this.getView();

			oView.bindElement({
				path: "/poHeaderSet('0')",
				model: "poModel"
			});

		},

		onSearch: function(oEvent) {

			var oView = this.getView();
			var oTable = this.byId("tabPoItems");

			this._pPono = oEvent.getSource().getValue();

			if (!this._pPono) {
				this._pPono = '0';
			}

			oView.bindElement({
				path: "/poHeaderSet('" + this._pPono + "')",
				model: "poModel"
			});

			var oTemplate = new sap.m.ColumnListItem({
				cells: [
					new sap.m.ObjectIdentifier({
						//title: "{path : 'poModel>Itemno', type: 'sap.ui.model.odata.type.String',constraints: {isDigitSequence: true,maxLength: 10}}"
						title: "{poModel>Itemno}"
					}),
					new sap.m.Text({
						text: "{poModel>Matdesc}",
						wrapping: true
					}),
					new sap.m.Text().bindText({
						path: 'poModel>Qtyordered',
						formatter: Formatter.qtyFormat,
						wrapping: true
					}),
					new sap.m.Text().bindText({
						path: 'poModel>Qtyreceived',
						formatter: Formatter.qtyFormat,
						wrapping: true
					}),
					new sap.m.Text().bindText({
						path: 'poModel>Netprice',
						formatter: Formatter.currencyFormat,
						wrapping: true
					}),
					new sap.m.Text().bindText({
						path: 'poModel>Netvalue',
						formatter: Formatter.currencyFormat,
						wrapping: true
					}),
					new sap.m.Link({
						text: "{i18n>lblView}",
						press: [this.onViewHistory, this]
					})
				]
			});

			oTable.bindItems("poModel>/poHeaderSet('" + this._pPono + "')/toPoItems", oTemplate);

		},

		onViewHistory: function(oEvent) {
			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("poModel");
			var iPono = oContext.getProperty("Pono");
			var iItemno = oContext.getProperty("Itemno");

			this._getRouter().navTo("PoHistory", {
				Pono: iPono,
				Itemno: iItemno
			});
		},

		onViewInvoices: function(oEvent) {
			this._openDialog();
		},

		onCloseDialog: function() {
			this._closeDialog();
		},

		onOpenInvoice: function(oEvent) {

			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("poModel");
			var sDocument = oContext.getProperty("Documentno");

			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
			var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
				target: {
					semanticObject: "zfb03",
					action: "display"
				},
				params: {
					"Belnr": sDocument,
					"Bukrs": "5000",
					"Gjahr": "2020"
				}
			}));
			oCrossAppNavigator.toExternal({
				target: {
					shellHash: hashUrl
				}
			});
		},
		
			onCreateInvoice: function(oEvent) {

			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
			var hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
				target: {
					semanticObject: "zfb60",
					action: "create"
				}
				// params: {
				// 	"Belnr": sDocument,
				// 	"Bukrs": "5000",
				// 	"Gjahr": "2020"
				// }
			}));
			oCrossAppNavigator.toExternal({
				target: {
					shellHash: hashUrl
				}
			});
		}

	});

});