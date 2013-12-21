//Filename: router.js
/*global require:true, define: true */

console.log("System: Loading router...");

define([
    //Requirement dependency
    'backbone',
    'view/view-generator'
], function (Backbone, viewGenerator) {
    "use strict";
    return Backbone.Router.extend({

        initialize: function () {
            this.viewGenerator = viewGenerator;
            this.viewGenerator.initialize();
        },

        routes: {
            //Defining url routes
            '': 'showHome',
            'application': 'showApp',
            'about': 'showAbout',
            '*actions': 'showHome'
        },

        showApp: function () {
            console.log("Router: App");
            this.viewGenerator.renderApplicationPage();
        },

        showAbout: function () {
            console.log("Router: About");
            this.viewGenerator.renderAboutPage();
        },

        showHome: function () {
            console.log("Router: Home");
            this.viewGenerator.renderHomePage();
        }
    });
});
