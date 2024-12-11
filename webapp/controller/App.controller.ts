import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class App extends Controller {
   onSayHelloButtonPress(): void {
      // show a native JavaScript alert
      alert("Hello World");
   }
};
