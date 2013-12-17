//Filename: main.js
/*global require:true, define: true */

console.log("System: Loading main module...");

define([
    //Requirement dependency
    "backbone",
    "router"
], function (Backbone, Router) {
    "use strict";
    return {
        run: function () {
           //Pass in our Router module and call it's initialize function
            var router = new Router();
            Backbone.history.start();
        }
    };
});
