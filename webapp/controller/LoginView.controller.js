sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sydenoa.sydenoa.controller.LoginView", {
        onInit: function() {

            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONModel.loadData("../model/paises.json");
            oView.setModel(oJSONModel,"combo");

        },
        onlogin: function(event){

            const Oroute = sap.ui.core.UIComponent.getRouterFor(this);
            Oroute.navTo("RouteMainView");

        }
    });
});