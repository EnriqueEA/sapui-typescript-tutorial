sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], async (XMLView) => {
	"use strict";

	const oView = await XMLView.create({
		viewName: "ui5.quickstart.App"
	})
  oView.placeAt("content");
});
