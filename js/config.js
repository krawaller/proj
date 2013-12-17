//Filename: config.js
/*global require:true, define: true */

console.log("System: RequireJS is being configurated...");

//Configurating requireJS
require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        collection: "app/collection",
        model: "app/model",
        view: "app/view",
        template: "../template",
        router: "app/router",
        jquery: "lib/jquery",
        underscore: "lib/underscore",               //AMD-version
        backbone: "lib/backbone",                   //AMD-version
        localstorage: "lib/backbone-localstorage",
        text: "lib/require-text"                    //AMD-version
    },
    shim: {
        'backbone' : {
            deps: ['underscore', 'jquery']
        }
    }
});

//Running main moudle
require(['app/main'], function (Main) {
    "use strict";
    Main.run();
});

