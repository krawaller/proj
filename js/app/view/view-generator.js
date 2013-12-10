//Filename: view-generator.js
/*global require:true, define: true */

console.log("System: Loading view generator...");

define([
    'backbone',
    'view/template-generator',
    'text!template/main-content-home.html',
    'text!template/header-nav.html',
    'text!template/footer.html',
    'text!template/application.html',
    'text!template/about.html'
], function (Backbone, TemplateGenerator, homeTemplate, headerTemplate, footerTemplate, appTemplate, aboutTemplate) {
    "use strict";
    return Backbone.View.extend({

        //Html references
        htmlId: {
            HEADERNAV   : "#header-nav",
            MAINCONTENT : "#main-content",
            FOOTER      : "#footer"
        },

        initialize: function () {
            var header = new TemplateGenerator({el: this.htmlId.HEADERNAV, template: headerTemplate}),
                footer = new TemplateGenerator({el: this.htmlId.FOOTER, template: footerTemplate});
        },
        renderHomePage: function () {
            var home = new TemplateGenerator({el: this.htmlId.MAINCONTENT, template: homeTemplate});
        },
        renderApplicationPage: function () {
            var app = new TemplateGenerator({el: this.htmlId.MAINCONTENT, template: appTemplate});
        },
        renderAboutPage: function () {
            var app = new TemplateGenerator({el: this.htmlId.MAINCONTENT, template: aboutTemplate});
        }
    });
});