/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "com/abans_InvoiceValidator/Component-preload",
	"modules": {
		"com/abans_InvoiceValidator/view/PoHistory.view.xml": "<mvc:View xmlns:core=\"sap.ui.core\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:ui=\"sap.suite.ui.commons\"\n\tcontrollerName=\"com.abans_InvoiceValidator.controller.PoHistory\" xmlns:html=\"http://www.w3.org/1999/xhtml\">\n\t<Page title=\"{i18n>tiPoHistory}\" showNavButton=\"true\" navButtonPress=\"onNavBack\">\n\t\t<content>\n\t\t\t<Panel>\n\t\t\t\t<ui:ProcessFlow id=\"pfHistory\" scrollable=\"true\" nodePress=\"onNodePress\" nodes=\"{pfNodesModel>/nodes}\" lanes=\"{pfNodesModel>/lanes}\">\n\t\t\t\t\t<ui:nodes>\n\t\t\t\t\t\t<ui:ProcessFlowNode laneId=\"{pfNodesModel>lane}\" nodeId=\"{pfNodesModel>id}\" title=\"{pfNodesModel>title}\" titleAbbreviation=\"{pfNodesModel>titleAbbreviation}\" children=\"{pfNodesModel>children}\" state=\"{pfNodesModel>state}\"\n\t\t\t\t\t\t\tstateText=\"{pfNodesModel>stateText}\" texts=\"{pfNodesModel>texts}\" focused=\"{pfNodesModel>focused}\"/>\n\t\t\t\t\t</ui:nodes>\n\t\t\t\t\t<ui:lanes>\n\t\t\t\t\t\t<ui:ProcessFlowLaneHeader laneId=\"{pfNodesModel>id}\" iconSrc=\"sap-icon://activity-items\" text=\"{pfNodesModel>label}\" position=\"{pfNodesModel>position}\"/>\n\t\t\t\t\t</ui:lanes>\n\t\t\t\t</ui:ProcessFlow>\n\t\t\t</Panel>\n\t\t</content>\n\t</Page>\n</mvc:View>",
		"com/abans_InvoiceValidator/view/InvoicesDialog.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\n\t<Dialog id=\"InvoicesDialog\" title=\"{i18n>lblInvoices}\">\n\t\t<VBox class=\"sapUiSmallMargin\">\n\t\t\t<Table id=\"tabInvoices\" growing=\"true\" growingThreshold=\"20\" growingScrollToLoad=\"true\" sticky=\"ColumnHeaders\" width=\"20em\">\n\t\t\t\t<columns>\n\t\t\t\t\t<Column width=\"10em\">\n\t\t\t\t\t\t<Text text=\"{i18n>lblInvoiceNo}\"></Text>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column width=\"10em\" hAlign=\"End\">\n\t\t\t\t\t\t<Text text=\"{i18n>lblNetAmount}\"></Text>\n\t\t\t\t\t</Column>\n\t\t\t\t</columns>\n\t\t\t</Table>\n\t\t</VBox>\n\t\t<endButton>\n\t\t\t<Button text=\"{i18n>lblClose}\" press=\"onCloseDialog\"></Button>\n\t\t</endButton>\n\t</Dialog>\n</core:FragmentDefinition>",
		"com/abans_InvoiceValidator/view/Main.view.xml": "<mvc:View controllerName=\"com.abans_InvoiceValidator.controller.Main\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\"\n\tdisplayBlock=\"true\" xmlns=\"sap.m\">\n\t<App id=\"app\">\n\t\t<pages id=\"pages\">\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content></content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"com/abans_InvoiceValidator/view/PoHeader.view.xml": "<mvc:View xmlns:core=\"sap.ui.core\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:ui=\"sap.suite.ui.commons\"\n\tcontrollerName=\"com.abans_InvoiceValidator.controller.PoHeader\" xmlns:html=\"http://www.w3.org/1999/xhtml\">\n\t<Page title=\"{i18n>tiPoHeader}\">\n\t\t<content>\n\t\t\t<Toolbar>\n\t\t\t\t<ToolbarSpacer/>\n\t\t\t\t<Label text=\"{i18n>lblPoNo}\">\n\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t<ToolbarLayoutData shrinkable=\"false\"/>\n\t\t\t\t\t</layoutData>\n\t\t\t\t</Label>\n\t\t\t\t<SearchField placeholder=\"{i18n>lblSearch}\" width=\"11em\" search=\"onSearch\"/></Toolbar>\n\t\t\t<ObjectHeader responsive=\"true\" fullScreenOptimized=\"false\" icon=\"sap-icon://activity-items\" title=\"{i18n>lblPoNo} {poModel>Pono}\"\n\t\t\t\tnumber=\"{path:'poModel>Balance', formatter:'.formatter.currencyFormat'}\" numberUnit=\"{poModel>Currency}\" numberState=\"Success\"\n\t\t\t\tbackgroundDesign=\"Transparent\" class=\"sapUiResponsivePadding--header\">\n\t\t\t\t<ObjectAttribute title=\"{i18n>lblInvoicingParty}\" text=\"{poModel>Supplier}\"/>\n\t\t\t\t<ObjectAttribute title=\"\" text=\"{poModel>Suppliername}\"/>\n\t\t\t\t<statuses>\n\t\t\t\t\t<ObjectStatus title=\"\" text=\"{i18n>lblViewInvoices}\" icon=\"sap-icon://lead\" active=\"true\" state=\"Success\" press=\"onViewInvoices\"/>\n\t\t\t\t</statuses>\n\t\t\t</ObjectHeader>\n\t\t\t<Table id=\"tabPoItems\" growing=\"true\" growingThreshold=\"20\" growingScrollToLoad=\"true\" backgroundDesign=\"Transparent\" sticky=\"ColumnHeaders\">\n\t\t\t\t<headerToolbar>\n\t\t\t\t\t<OverflowToolbar>\n\t\t\t\t\t\t<content>\n\t\t\t\t\t\t\t<Title text=\"{i18n>lblPoItems}\" level=\"H2\"/>\n\t\t\t\t\t\t</content>\n\t\t\t\t\t</OverflowToolbar>\n\t\t\t\t</headerToolbar>\n\t\t\t\t<columns>\n\t\t\t\t\t<Column>\n\t\t\t\t\t\t<Text text=\"{i18n>lblPoItem}\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column demandPopin=\"true\" minScreenWidth=\"Tablet\">\n\t\t\t\t\t\t<Text text=\"{i18n>lblShortText}\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column demandPopin=\"true\" minScreenWidth=\"Tablet\" hAlign=\"End\">\n\t\t\t\t\t\t<Text text=\"{i18n>lblQtyOrdered}\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column demandPopin=\"true\" minScreenWidth=\"Tablet\" hAlign=\"End\">\n\t\t\t\t\t\t<Text text=\"{i18n>lblQtyReceived}\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column demandPopin=\"true\" minScreenWidth=\"Tablet\" hAlign=\"End\">\n\t\t\t\t\t\t<Text text=\"{i18n>lblNetPrice}\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column demandPopin=\"true\" minScreenWidth=\"Tablet\" hAlign=\"End\">\n\t\t\t\t\t\t<Text text=\"{i18n>lblNetValue}\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column demandPopin=\"false\" width=\"6em\" hAlign=\"Center\">\n\t\t\t\t\t\t<Text text=\"{i18n>lblPoHistory}\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t</columns>\n\t\t\t</Table>\n\t\t</content>\n\t\t<footer>\n\t\t\t<OverflowToolbar id=\"otbFooter\">\n\t\t\t\t<ToolbarSpacer/>\n\t\t\t\t<Button text=\"{i18n>lblCreateInvoice}\" type=\"Emphasized\" press=\"onCreateInvoice\"/>\n\t\t\t</OverflowToolbar>\n\t\t</footer>\n\t</Page>\n</mvc:View>",
		"com/abans_InvoiceValidator/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});",
		"com/abans_InvoiceValidator/model/formatter.js": "sap.ui.define([\r\n\t\"sap/ui/core/format/NumberFormat\"\r\n], function (NumberFormat) {\r\n\t\"use strict\";\r\n\treturn {\r\n\r\n\t\tcurrencyFormat: function (pValue) {\r\n\t\t\t\r\n\t\t\tif (!pValue) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tvar numberFormat = NumberFormat.getFloatInstance({\r\n\t\t\t\tmaxFractionDigits: 2\r\n\t\t\t});\r\n\t\t\tvar oText = numberFormat.format(pValue);\r\n\t\t\treturn oText;\r\n\t\t},\r\n\t\t\r\n\t\tqtyFormat: function (pValue) {\r\n\t\t\tvar numberFormat = NumberFormat.getFloatInstance({\r\n\t\t\t\tmaxFractionDigits: 2\r\n\t\t\t});\r\n\t\t\tvar oText = numberFormat.format(pValue);\r\n\t\t\treturn oText;\r\n\t\t},\r\n\r\n\t\tratingState: function (pValue) {\r\n\t\t\tif (pValue >= 8.0) {\r\n\t\t\t\treturn \"Success\";\r\n\t\t\t} else if (pValue >= 7.0 && pValue < 8.0) {\r\n\t\t\t\treturn \"Warning\";\r\n\t\t\t} else {\r\n\t\t\t\treturn \"Error\";\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n});",
		"com/abans_InvoiceValidator/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"com/abans_InvoiceValidator/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"com.abans_InvoiceValidator.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\t\t\t\n\t\t\t// enable routing\n\t\t\tthis.getRouter().initialize();\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"com/abans_InvoiceValidator/test/initMockServer.js": "sap.ui.define([\n\t\"../localService/mockserver\"\n], function (mockserver) {\n\t\"use strict\";\n\n\t// initialize the mock server\n\tmockserver.init();\n\n\t// initialize the embedded component on the HTML page\n\tsap.ui.require([\"sap/ui/core/ComponentSupport\"]);\n});",
		"com/abans_InvoiceValidator/controller/PoHeader.controller.js": "sap.ui.define([\r\n\t\"com/abans_InvoiceValidator/controller/BaseController\",\r\n\t\"sap/ui/model/Sorter\",\r\n\t\"sap/ui/model/Filter\",\r\n\t\"sap/ui/model/FilterOperator\",\r\n\t\"com/abans_InvoiceValidator/model/formatter\",\r\n\t\"sap/ui/core/Fragment\"\r\n], function(Controller, Sorter, Filter, FilterOperator, Formatter, Fragment) {\r\n\t\"use strict\";\r\n\r\n\treturn Controller.extend(\"com.abans_InvoiceValidator.controller.PoHeader\", {\r\n\t\tformatter: Formatter,\r\n\r\n\t\t/* \r\n\t\t\tHelper Methods\r\n\t\t*/\r\n\r\n\t\t_openDialog: function() {\r\n\r\n\t\t\tvar oView = this.getView();\r\n\t\t\tvar oInvoicesDialog = this.byId(\"InvoicesDialog\");\r\n\r\n\t\t\tif (!this._pPono) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tif (!oInvoicesDialog) {\r\n\t\t\t\tFragment.load({\r\n\t\t\t\t\tid: oView.getId(),\r\n\t\t\t\t\tname: \"com.abans_InvoiceValidator.view.InvoicesDialog\",\r\n\t\t\t\t\tcontroller: this\r\n\t\t\t\t}).then(function(oDialog) {\r\n\t\t\t\t\toView.addDependent(oDialog);\r\n\t\t\t\t\toDialog.open();\r\n\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\toInvoicesDialog.open();\r\n\t\t\t}\r\n\r\n\t\t\tvar oTable = this.byId(\"tabInvoices\");\r\n\t\t\tvar oTemplate = new sap.m.ColumnListItem({\r\n\t\t\t\tcells: [\r\n\t\t\t\t\tnew sap.m.Link({\r\n\t\t\t\t\t\ttext: \"{poModel>Documentno}\",\r\n\t\t\t\t\t\tpress: [this.onOpenInvoice, this]\r\n\t\t\t\t\t}),\r\n\r\n\t\t\t\t\tnew sap.m.ObjectNumber({\r\n\t\t\t\t\t\tnumber: {\r\n\t\t\t\t\t\t\tparts: [{\r\n\t\t\t\t\t\t\t\tpath: 'poModel>Amount'\r\n\t\t\t\t\t\t\t}, {\r\n\t\t\t\t\t\t\t\tpath: 'poModel>Currency'\r\n\t\t\t\t\t\t\t}],\r\n\t\t\t\t\t\t\ttype: 'sap.ui.model.type.Currency',\r\n\t\t\t\t\t\t\tformatOptions: {\r\n\t\t\t\t\t\t\t\tshowMeasure: true\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t})\r\n\t\t\t\t]\r\n\t\t\t});\r\n\r\n\t\t\toTable.bindItems(\"poModel>/poHeaderSet('\" + this._pPono + \"')/toPoInvoices\", oTemplate);\r\n\r\n\t\t},\r\n\r\n\t\t_closeDialog: function() {\r\n\t\t\tthis.byId(\"InvoicesDialog\").close();\r\n\t\t},\r\n\r\n\t\t/* \r\n\t\t\tEvents \r\n\t\t*/\r\n\t\tonInit: function() {\r\n\r\n\t\t\tvar oView = this.getView();\r\n\r\n\t\t\toView.bindElement({\r\n\t\t\t\tpath: \"/poHeaderSet('0')\",\r\n\t\t\t\tmodel: \"poModel\"\r\n\t\t\t});\r\n\r\n\t\t},\r\n\r\n\t\tonSearch: function(oEvent) {\r\n\r\n\t\t\tvar oView = this.getView();\r\n\t\t\tvar oTable = this.byId(\"tabPoItems\");\r\n\r\n\t\t\tthis._pPono = oEvent.getSource().getValue();\r\n\r\n\t\t\tif (!this._pPono) {\r\n\t\t\t\tthis._pPono = '0';\r\n\t\t\t}\r\n\r\n\t\t\toView.bindElement({\r\n\t\t\t\tpath: \"/poHeaderSet('\" + this._pPono + \"')\",\r\n\t\t\t\tmodel: \"poModel\"\r\n\t\t\t});\r\n\r\n\t\t\tvar oTemplate = new sap.m.ColumnListItem({\r\n\t\t\t\tcells: [\r\n\t\t\t\t\tnew sap.m.ObjectIdentifier({\r\n\t\t\t\t\t\t//title: \"{path : 'poModel>Itemno', type: 'sap.ui.model.odata.type.String',constraints: {isDigitSequence: true,maxLength: 10}}\"\r\n\t\t\t\t\t\ttitle: \"{poModel>Itemno}\"\r\n\t\t\t\t\t}),\r\n\t\t\t\t\tnew sap.m.Text({\r\n\t\t\t\t\t\ttext: \"{poModel>Matdesc}\",\r\n\t\t\t\t\t\twrapping: true\r\n\t\t\t\t\t}),\r\n\t\t\t\t\tnew sap.m.Text().bindText({\r\n\t\t\t\t\t\tpath: 'poModel>Qtyordered',\r\n\t\t\t\t\t\tformatter: Formatter.qtyFormat,\r\n\t\t\t\t\t\twrapping: true\r\n\t\t\t\t\t}),\r\n\t\t\t\t\tnew sap.m.Text().bindText({\r\n\t\t\t\t\t\tpath: 'poModel>Qtyreceived',\r\n\t\t\t\t\t\tformatter: Formatter.qtyFormat,\r\n\t\t\t\t\t\twrapping: true\r\n\t\t\t\t\t}),\r\n\t\t\t\t\tnew sap.m.Text().bindText({\r\n\t\t\t\t\t\tpath: 'poModel>Netprice',\r\n\t\t\t\t\t\tformatter: Formatter.currencyFormat,\r\n\t\t\t\t\t\twrapping: true\r\n\t\t\t\t\t}),\r\n\t\t\t\t\tnew sap.m.Text().bindText({\r\n\t\t\t\t\t\tpath: 'poModel>Netvalue',\r\n\t\t\t\t\t\tformatter: Formatter.currencyFormat,\r\n\t\t\t\t\t\twrapping: true\r\n\t\t\t\t\t}),\r\n\t\t\t\t\tnew sap.m.Link({\r\n\t\t\t\t\t\ttext: \"{i18n>lblView}\",\r\n\t\t\t\t\t\tpress: [this.onViewHistory, this]\r\n\t\t\t\t\t})\r\n\t\t\t\t]\r\n\t\t\t});\r\n\r\n\t\t\toTable.bindItems(\"poModel>/poHeaderSet('\" + this._pPono + \"')/toPoItems\", oTemplate);\r\n\r\n\t\t},\r\n\r\n\t\tonViewHistory: function(oEvent) {\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"poModel\");\r\n\t\t\tvar iPono = oContext.getProperty(\"Pono\");\r\n\t\t\tvar iItemno = oContext.getProperty(\"Itemno\");\r\n\r\n\t\t\tthis._getRouter().navTo(\"PoHistory\", {\r\n\t\t\t\tPono: iPono,\r\n\t\t\t\tItemno: iItemno\r\n\t\t\t});\r\n\t\t},\r\n\r\n\t\tonViewInvoices: function(oEvent) {\r\n\t\t\tthis._openDialog();\r\n\t\t},\r\n\r\n\t\tonCloseDialog: function() {\r\n\t\t\tthis._closeDialog();\r\n\t\t},\r\n\r\n\t\tonOpenInvoice: function(oEvent) {\r\n\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"poModel\");\r\n\t\t\tvar sDocument = oContext.getProperty(\"Documentno\");\r\n\r\n\t\t\tvar oCrossAppNavigator = sap.ushell.Container.getService(\"CrossApplicationNavigation\");\r\n\t\t\tvar hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({\r\n\t\t\t\ttarget: {\r\n\t\t\t\t\tsemanticObject: \"zfb03\",\r\n\t\t\t\t\taction: \"display\"\r\n\t\t\t\t},\r\n\t\t\t\tparams: {\r\n\t\t\t\t\t\"Belnr\": sDocument,\r\n\t\t\t\t\t\"Bukrs\": \"5000\",\r\n\t\t\t\t\t\"Gjahr\": \"2020\"\r\n\t\t\t\t}\r\n\t\t\t}));\r\n\t\t\toCrossAppNavigator.toExternal({\r\n\t\t\t\ttarget: {\r\n\t\t\t\t\tshellHash: hashUrl\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t},\r\n\t\t\r\n\t\t\tonCreateInvoice: function(oEvent) {\r\n\r\n\t\t\tvar oCrossAppNavigator = sap.ushell.Container.getService(\"CrossApplicationNavigation\");\r\n\t\t\tvar hashUrl = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({\r\n\t\t\t\ttarget: {\r\n\t\t\t\t\tsemanticObject: \"zfb60\",\r\n\t\t\t\t\taction: \"create\"\r\n\t\t\t\t}\r\n\t\t\t\t// params: {\r\n\t\t\t\t// \t\"Belnr\": sDocument,\r\n\t\t\t\t// \t\"Bukrs\": \"5000\",\r\n\t\t\t\t// \t\"Gjahr\": \"2020\"\r\n\t\t\t\t// }\r\n\t\t\t}));\r\n\t\t\toCrossAppNavigator.toExternal({\r\n\t\t\t\ttarget: {\r\n\t\t\t\t\tshellHash: hashUrl\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t});\r\n\r\n});",
		"com/abans_InvoiceValidator/controller/BaseController.js": "sap.ui.define([\r\n\t\"sap/ui/core/mvc/Controller\"\r\n], function(Controller, Device) {\r\n\t\"use strict\";\r\n\r\n\treturn Controller.extend(\"comcom.abans_InvoiceValidator.controller.BaseController\", {\r\n\r\n\t\t// Gets the router\r\n\t\t_getRouter: function() {\r\n\t\t\treturn this.getOwnerComponent().getRouter();\r\n\t\t},\r\n\r\n\t\t// Gets i18n Texts\r\n\t\t_geti18nText: function(sKey) {\r\n\t\t\treturn this.getView().getModel(\"i18n\").getResourceBundle().getText(sKey);\r\n\t\t},\r\n\r\n\t\t// Navigates back to the previous page if it is available. Else, it navigates to PoHeader\r\n\t\tonNavBack: function() {\r\n\t\t\tvar oHistory, sPreviousHash, oRouter;\r\n\t\t\toHistory = sap.ui.core.routing.History.getInstance();\r\n\t\t\tsPreviousHash = oHistory.getPreviousHash();\r\n\r\n\t\t\tif (sPreviousHash !== undefined) {\r\n\t\t\t\twindow.history.go(-1);\r\n\t\t\t} else {\r\n\t\t\t\toRouter = this._getRouter();\r\n\t\t\t\toRouter.navTo(\"PoHeader\");\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n});",
		"com/abans_InvoiceValidator/controller/Main.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function(Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"com.abans_InvoiceValidator.controller.Main\", {\n\n\t});\n});",
		"com/abans_InvoiceValidator/controller/PoHistory.controller.js": "sap.ui.define([\r\n\t\"com/abans_InvoiceValidator/controller/BaseController\",\r\n\t\"sap/suite/ui/commons/ProcessFlowZoomLevel\",\r\n\t\"sap/ui/model/json/JSONModel\",\r\n\t\"com/abans_InvoiceValidator/model/formatter\"\r\n], function(Controller, ProcessFlowZoomLevel, JSONModel, Formatter) {\r\n\t\"use strict\";\r\n\r\n\treturn Controller.extend(\"com.abans_InvoiceValidator.controller.PoHistory\", {\r\n\r\n\t\t/*\r\n\t\t\tHelper Methods\r\n\t\t*/\r\n\r\n\t\t_onitemMatched: function(oEvent) {\r\n\r\n\t\t\tvar oArgs = oEvent.getParameter(\"arguments\");\r\n\t\t\tthis._pPono = oArgs.Pono;\r\n\t\t\tthis._pItemno = oArgs.Itemno;\r\n\t\t\tvar oView = this.getView();\r\n\r\n\t\t\toView.bindElement({\r\n\t\t\t\tpath: \"/poItemsSet(Pono='\" + this._pPono + \"',Itemno='\" + this._pItemno + \"')\",\r\n\t\t\t\tmodel: \"poModel\"\r\n\t\t\t});\r\n\r\n\t\t\tthis._assignPFNodes();\r\n\t\t},\r\n\r\n\t\t_assignPFNodes: function() {\r\n\r\n\t\t\tvar oView = this.getView();\r\n\t\t\tvar oPoModel = oView.getModel(\"poModel\");\r\n\r\n\t\t\tvar sCreated = this._geti18nText(\"lblCreated\");\r\n\t\t\tvar sPosted = this._geti18nText(\"lblPosted\");\r\n\t\t\tvar sPoItem = this._geti18nText(\"lblPoItem\");\r\n\t\t\tvar sGR = this._geti18nText(\"lbl_GR\");\r\n\t\t\tvar sNetAmount = this._geti18nText(\"lblNetAmount\");\r\n\t\t\tvar sQuantity = this._geti18nText(\"lblQuantity\");\r\n\r\n\t\t\tvar oPoHeader = oPoModel.getProperty(\"/poHeaderSet('\" + this._pPono + \"')\");\r\n\r\n\t\t\tvar oPoItem = oPoModel.getProperty(\"/poItemsSet(Pono='\" + this._pPono + \"',Itemno='\" + this._pItemno + \"')\");\r\n\r\n\t\t\tvar arNodes = [];\r\n\r\n\t\t\tvar oNode = {\r\n\t\t\t\tid: 0,\r\n\t\t\t\tlane: 0,\r\n\t\t\t\ttitle: oPoItem.Pono + \"/\" + oPoItem.Itemno,\r\n\t\t\t\ttitleAbbreviation: \"\",\r\n\t\t\t\tchildren: [],\r\n\t\t\t\tstate: \"Positive\",\r\n\t\t\t\tstateText: sCreated,\r\n\t\t\t\tfocused: true,\r\n\t\t\t\ttexts: [\r\n\t\t\t\t\tsNetAmount + \" : \\n\" + Formatter.currencyFormat(oPoItem.Netvalue) + \" \" + oPoHeader.Currency,\r\n\t\t\t\t\tsQuantity + \" : \\n\" + Formatter.qtyFormat(oPoItem.Qtyordered) + \" \" + oPoItem.Uom\r\n\t\t\t\t]\r\n\t\t\t};\r\n\r\n\t\t\tarNodes.push(oNode);\r\n\r\n\t\t\tvar arLanes = [];\r\n\r\n\t\t\tvar oLane = {\r\n\t\t\t\tid: \"0\",\r\n\t\t\t\ticon: \"sap-icon://order-status\",\r\n\t\t\t\tlabel: sPoItem,\r\n\t\t\t\tposition: 0\r\n\t\t\t};\r\n\r\n\t\t\tarLanes.push(oLane);\r\n\r\n\t\t\tvar that = this;\r\n\t\t\tvar oPoHistory = this._readPoHistory(oPoModel);\r\n\r\n\t\t\toPoHistory.then(function(oResult) {\r\n\t\t\t\tvar arPoHistory = oResult.results;\r\n\r\n\t\t\t\tif (arPoHistory.length > 0) {\r\n\t\t\t\t\tarNodes[0].children = [1];\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfor (var i = 0; i < arPoHistory.length; i++) {\r\n\r\n\t\t\t\t\tvar arChildren = [];\r\n\t\t\t\t\tvar iChild = 0;\r\n\t\t\t\t\tif (i + 2 <= arPoHistory.length) {\r\n\t\t\t\t\t\tiChild = i + 2;\r\n\t\t\t\t\t\tarChildren.push(iChild);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\toNode = {\r\n\t\t\t\t\t\tid: i + 1,\r\n\t\t\t\t\t\tlane: i + 1,\r\n\t\t\t\t\t\ttitle: arPoHistory[i].Matdoc + \"/\" + arPoHistory[i].Matyear,\r\n\t\t\t\t\t\ttitleAbbreviation: \"\",\r\n\t\t\t\t\t\tchildren: arChildren,\r\n\t\t\t\t\t\tstate: \"Positive\",\r\n\t\t\t\t\t\tstateText: sPosted,\r\n\t\t\t\t\t\tfocused: false,\r\n\t\t\t\t\t\ttexts: [\r\n\t\t\t\t\t\t\tsNetAmount + \" : \\n\" + Formatter.currencyFormat(oPoItem.Netprice * arPoHistory[i].Grnqty) + \" \" + oPoHeader.Currency,\r\n\t\t\t\t\t\t\tsQuantity + \" : \\n\" + Formatter.qtyFormat(arPoHistory[i].Grnqty) + \" \" + arPoHistory[i].Uom\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\tarNodes.push(oNode);\r\n\r\n\t\t\t\t\toLane = {\r\n\t\t\t\t\t\tid: i + 1,\r\n\t\t\t\t\t\ticon: \"sap-icon://order-status\",\r\n\t\t\t\t\t\tlabel: sGR,\r\n\t\t\t\t\t\tposition: i + 1\r\n\t\t\t\t\t};\r\n\r\n\t\t\t\t\tarLanes.push(oLane);\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\tvar oPfData = {\r\n\t\t\t\t\tnodes: arNodes,\r\n\t\t\t\t\tlanes: arLanes\r\n\t\t\t\t};\r\n\r\n\t\t\t\tvar oPfNodesModel = new JSONModel(oPfData);\r\n\t\t\t\toView.setModel(oPfNodesModel, \"pfNodesModel\");\r\n\r\n\t\t\t\tvar oPfHistory = that.byId(\"pfHistory\");\r\n\t\t\t\toPfHistory.setZoomLevel(ProcessFlowZoomLevel.One);\r\n\t\t\t\toPfHistory.updateModel();\r\n\r\n\t\t\t});\r\n\r\n\t\t},\r\n\r\n\t\t_readPoHistory: function(oPoModel) {\r\n\r\n\t\t\tvar that = this;\r\n\t\t\treturn new Promise(function(resolve, reject) {\r\n\t\t\t\toPoModel.read(\"/poItemsSet(Pono='\" + that._pPono + \"',Itemno='\" + that._pItemno + \"')/toPoHistory\", {\r\n\t\t\t\t\tsuccess: function(oResult) {\r\n\t\t\t\t\t\tresolve(oResult);\r\n\t\t\t\t\t},\r\n\t\t\t\t\terror: function(oError) {\r\n\t\t\t\t\t\treject(oError);\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t},\r\n\r\n\t\t/*\r\n\t\t\tEvents\r\n\t\t*/\r\n\r\n\t\tonInit: function() {\r\n\r\n\t\t\tvar oRouter = this._getRouter();\r\n\t\t\toRouter.getRoute(\"PoHistory\").attachMatched(this._onitemMatched, this);\r\n\r\n\t\t}\r\n\t});\r\n\r\n});",
		"com/abans_InvoiceValidator/localService/mockserver.js": "sap.ui.define([\n\t\"sap/ui/core/util/MockServer\",\n\t\"sap/base/util/UriParameters\"\n], function (MockServer, UriParameters) {\n\t\"use strict\";\n\n\treturn {\n\t\tinit: function () {\n\t\t\t// create\n\t\t\tvar oMockServer = new MockServer({\n\t\t\t\trootUri: \"/sap/opu/odata/sap/ZMM_INVOICEVALIDATOR_SRV/\"\n\t\t\t});\n\n\t\t\tvar oUriParameters = UriParameters.fromQuery(window.location.search);\n\n\t\t\t// configure mock server with a delay\n\t\t\tMockServer.config({\n\t\t\t\tautoRespond: true,\n\t\t\t\tautoRespondAfter: oUriParameters.get(\"serverDelay\") || 500\n\t\t\t});\n\n\t\t\t// simulate\n\t\t\tvar sPath = \"../localService/\";\n\t\t\toMockServer.simulate(sPath + \"/metadata.xml\", sPath + \"/mockdata\");\n\n\t\t\t// start\n\t\t\toMockServer.start();\n\t\t}\n\t};\n\n});"
	}
});