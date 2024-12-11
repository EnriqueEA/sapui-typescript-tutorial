sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
	"use strict";

	return Controller.extend("ui5.quickstart.App", {
		onGoButtonPress() {
			MessageToast.show("Hello UI5!");
			this.byId("idMainApp").to(this.byId("idIntroPage"));
		},

		onInit() {
			this.getView().setModel(new JSONModel({
					features: [
						"Enterprise-Ready Web Toolkit",
						"Powerful Development Concepts",
						"Feature-Rich UI Controls",
						"Consistent User Experience",
						"Free and Open Source",
						"Responsive Across Browsers and Devices"
					]
				})
			);
		},

		onSwitchChange(oEvent) {
			const bState = oEvent.getParameter("state");
			this.byId("idReadyHorizontalLayout").setVisible(bState);
		}
	});

});
