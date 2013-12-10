//Filename: router.js
/*global require:true, define: true */

console.log("System: Loading router...");

define([
    //Requirement dependency
    'backbone',
    'view/view-generator'
], function (Backbone, ViewGenerator) {
    "use strict";
    var initialize = function () {
        var AppRouter = Backbone.Router.extend({
            routes: {
                //Defining url routes
                '': 'showHome',
                'Application': 'showApp',
                'About': 'showAbout',
                '*actions': 'defaultAction'
            }
        }),
            app_router = new AppRouter();

        app_router.on('route:showHome', function () {
            console.log("Router: Home");
            var viewGenerator = new ViewGenerator();
            viewGenerator.renderHomePage();
        });
        app_router.on('route:showApp', function () {
            console.log("Router: App");
            var viewGenerator = new ViewGenerator();
            viewGenerator.renderApplicationPage();
        });
        app_router.on('route:showAbout', function () {
            console.log("Router: App");
            var viewGenerator = new ViewGenerator();
            viewGenerator.renderAboutPage();
        });
        app_router.on('route:defaultAction', function (actions) {
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };

});