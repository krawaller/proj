//Filename: main.js
/*global require:true, define: true */

console.log("System: Loading main module...");

define([
    //Requirement dependency
    'router'
], function (Router) {
    "use strict";
    var initialize = function () {
        //Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
