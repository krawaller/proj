/*global require:true, define: true */
//Filename footer.js
console.log("System: Loading footer...");

define(function (require) {

    //Requirement dependency
    var bb = require('backbone');
    var _ = require('underscore');
    var footerTemplate = require('text!template/footer.html');

    //Rendering and returning the view
    return bb.View.extend({
        el: "#footer",
        initialize: function () {
            this.render();
        },
        render: function () {
            // Compile the template using underscore
            var template = _.template(footerTemplate, {});
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(template);
        }
    });
});
