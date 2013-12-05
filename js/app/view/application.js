/*global require:true, define: true */
//Filename main-content.js
console.log("System: Loading maincontent...");

define(function (require) {

    //Requirement dependency
    var bb = require('backbone');
    var _ = require('underscore');
    var appTemplate = require('text!template/application.html');

    //Rendering and returning the view
    return bb.View.extend({
        el: "#main-content",
        initialize: function () {
            this.render();
        },
        render: function () {
            // Compile the template using underscore
            var template = _.template(appTemplate, {});
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(template);
        }
    });
});
