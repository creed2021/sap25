sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("sydenoa.sydenoa.controller.MainView", {
        onInit: function() {

            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONModel.loadData("../model/paises.json");
            oView.setModel(oJSONModel,"combo");


        },
        onFilter : function(event){

        const Odata = this.getView().getModel("combo").getData();
        let filters = [];
        if (Odata.ShipName !== ""){
            filters.push(new Filter("ShipName",FilterOperator.Contains,Odata.ShipName));
        }
         
        if (Odata.CountryKey !== ""){
            filters.push(new Filter("Country",FilterOperator.EQ,Odata.CountryKey));
        }

        const list = this.getView().byId("ListadoInvoices");
        const oBinding = list.getBinding("items");
        oBinding.filter(filters);

        },
        onClearFilter:function(event){
            const oView = this.getView().getModel("combo");
            oView.setProperty("/ShipName","");
            oView.setProperty("/CountryKey","");

            const list = this.getView().byId("ListadoInvoices");
            const oBinding = list.getBinding("items");
            oBinding.filter([]);
        },
        onLogin:function(event){

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteLoginView");
        }
    });
});