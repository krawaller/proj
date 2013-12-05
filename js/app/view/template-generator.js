/*global require:true, define: true */

console.log("System: Loading content generator...");

define(function (require) {

    //Requirement dependency
    var bb = require('backbone');
    var _ = require('underscore');
    //Required templates
    var mainContentTemplate = require('text!template/main-content.html');
    var headerTemplate = require('text!template/header-nav.html');
    var footerTemplate = require('text!template/footer.html');
    var appTemplate = require('text!template/application.html');

    var initialize = function (a_id) {

        var htmlId;
        var templateId;

        switch (a_id)
         {
            case "#header-nav": 
                htmlId = "#header-nav";
                templateId = headerTemplate;
                break;
            case "#main-content, home":
                htmlId = "#main-content";
                templateId = mainContentTemplate;
                break;
            case "#main-content, app":
                htmlId = "#main-content";
                templateId = appTemplate;
                break;
            case "#main-content, about":
                htmlId = "#main-content";
                templateId = appTemplate;
                break;
            case "#footer":
                htmlId = "#footer";
                templateId = footerTemplate;
                break;
            default:
                break;
         }

        var view = bb.View.extend({
            el: htmlId,
            initialize: function () {
                this.render();
            },
            render: function () {
                // Compile the template using underscore
                var template = _.template(templateId, {});
                // Load the compiled HTML into the Backbone "el"
                this.$el.html(template);
            }
        });

        new view();
    };

    return {
        initialize: initialize
    };
});