/*global require:true, define: true */

console.log("System: Loading content generator...");

define([
    //Requirement dependency
    'backbone',
    'underscore'
], function (Backbone, _) {
    "use strict";
    return Backbone.Model.extend({

        defaults: {
            content: "empty",
            expire: "empty",
            complete: false
        },

        clear: function () {
            this.destroy();
        }

    });
});