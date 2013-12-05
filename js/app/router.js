//Filename: router.js
/*global require:true, define: true */

console.log("System: Loading router...");

define(function (require) {

    //Requirement dependency
    var a_backBone = require('backbone');
    var a_viewGenerator = require('view/view-generator');


    var initialize = function () {
        var appRouter = a_backBone.Router.extend({
            routes: {
                //Defining url routes
                '': 'showHome',
                'Application': 'showApp',
                'About': 'showAbout',
                '*actions': 'defaultAction'
            }
        });

        var app_router = new appRouter();


        app_router.on('route:showHome', function () {
            console.log("Router: Home");
            var viewGenerator = new a_viewGenerator();
            viewGenerator.renderHomePage();
        });
        app_router.on('route:showApp', function () {
            console.log("Router: App");
            var viewGenerator = new a_viewGenerator();
            viewGenerator.renderApplicationPage();
        });
        app_router.on('route:defaultAction', function (actions) {
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });

        a_backBone.history.start();
    };

    return {
        initialize: initialize
    };

});