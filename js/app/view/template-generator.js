/*global require:true, define: true */

console.log("System: Loading content generator...");

define([
    //Requirement dependency
    'backbone',
    'underscore',
    'jquery'
], function (Backbone, _, $) {
    "use strict";
    //Parameter = template
    return Backbone.View.extend({
        initialize: function (param) {
            this.render(param.template);
        },
        render: function (temp) {
            // Compile the template using underscore
            var template = _.template(temp, {});
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(template);
        }
    });
});