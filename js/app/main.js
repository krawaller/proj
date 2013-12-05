//Filename: main.js
/*global require:true, define: true */

console.log("System: Loading main module...");

define(function (require) {

    //Requirement dependency
    var router = require('router');

    var initialize = function () {
        //Pass in our Router module and call it's initialize function
        router.initialize();
    };

    return {
        initialize: initialize
    };
});