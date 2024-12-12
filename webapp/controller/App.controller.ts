import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends Controller {
   onInit(): void | undefined {
      // set data model on view
      const oData = {
         recipient: {
            name: "World"
         }
      };
      const oDataModel = new JSONModel(oData);
      this.getView()?.setModel(oDataModel);

      // set i18n model on view
      const i18nModel = new ResourceModel({
         bundleName: "ui5.walkthrough.i18n.i18n"
      });
      this.getView()?.setModel(i18nModel, "i18n");
   }

   onSayHelloButtonPress(): void {
      // read msg from i18n model
      const recipient = (this.getView()?.getModel() as JSONModel).getProperty("/recipient/name");
      const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel).getResourceBundle() as ResourceBundle;
      // show message
      const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";
      MessageToast.show(msg);
   }
};
