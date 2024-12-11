import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends Controller {
   onSayHelloButtonPress(): void {
      MessageToast.show("Hello World");
   }
};
