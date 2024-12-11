import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

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
   }

   onSayHelloButtonPress(): void {
      const oModel = this.getView()?.getModel() as JSONModel;
      const sRecipientName = oModel.getProperty("/recipient/name");
      MessageToast.show(`Hello ${sRecipientName}`);
   }
};
