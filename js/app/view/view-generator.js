//Filename: view-generator.js
/*global require:true, define: true */

console.log("System: Loading view generator...");

define(function (require) {

    //Requirement dependency
    var backBone = require('backbone');
    var headerNavView = require('view/header-nav');
    var homeContentView = require('view/main-content');
    var applicationView = require('view/application');
    var footerView = require('view/footer');
    var templateGenerator = require('view/template-generator');


    return backBone.View.extend({

        initialize: function () {
            templateGenerator.initialize("#header-nav");
            templateGenerator.initialize("#footer");
        },
        renderHomePage: function () {
            templateGenerator.initialize("#main-content, home");
        },
        renderApplicationPage: function () {
            templateGenerator.initialize("#main-content, app");
        },
        renderAboutPage: function () {

        }

    });

});