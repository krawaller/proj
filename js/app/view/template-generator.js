/*global require:true, define: true */

console.log("System: Loading content generator...");

define([
    //Requirement dependency
    'backbone',
    'underscore',
    'jquery',
    'text!template/main-content-home.html',
    'text!template/header-nav.html',
    'text!template/footer.html',
    'text!template/application.html',
    'text!template/about.html'
], function (Backbone, _, $, homeTemplate, headerTemplate, footerTemplate, appTemplate, aboutTemplate) {
    "use strict";
    return Backbone.View.extend({

        getHtmlId: {
            HEADER           : "#header-nav",
            MAINCONTENT      : "#main-content",
            FOOTER           : "#footer"
        },

        getTemplate: {
            MAINHOMETEMP   : homeTemplate,
            HEADERTEMP     : headerTemplate,
            APPTEMP        : appTemplate,
            ABOUTTEMP      : aboutTemplate,
            FOOTERTEMP     : footerTemplate
        },
        //Parameter = template, htmlElement
        render: function (param) {
            this.setElement(param.el);
            // Compile the template using underscore
            var template = _.template(param.template, {});
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(template);
        }
    });
});