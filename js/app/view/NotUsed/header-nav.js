/*global require:true, define: true */
//Filename header-nav.js
console.log("System: Loading header & navigation...");

define(function (require) {

    //Requirement dependency
    var bb = require('backbone');
    var _ = require('underscore');
    var headerTemplate = require('text!template/header-nav.html');


    //Rendering and returning the view
    return bb.View.extend({
        el: "#header-nav",
        initialize: function () {
            this.render();
        },
        render: function () {
            // Compile the template using underscore
            var template = _.template(headerTemplate, {});
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(template);
        }
    });
});
