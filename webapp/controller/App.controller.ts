import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends Controller {
   onSayHelloButtonPress(): void {
      // read msg from i18n model
      const recipient = (<JSONModel>this.getView()?.getModel())?.getProperty("/recipient/name");
      const resourceBundle = <ResourceBundle>(<ResourceModel>this.getView()?.getModel("i18n"))?.getResourceBundle();
      const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";
      // show message
      MessageToast.show(msg);
   }
};
