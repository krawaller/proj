//Filename: view-generator.js
/*global require:true, define: true */

console.log("System: Loading view generator...");

define([
    'backbone',
    'view/template-generator',
    'view/app-view'
], function (Backbone, TemplateGenerator, AppView) {
    "use strict";
    return {

        initialize: function () {

            this.tg = new TemplateGenerator();
            var header = this.tg.render({el: this.tg.getHtmlId.HEADER, template: this.tg.getTemplate.HEADERTEMP}),
                footer = this.tg.render({el: this.tg.getHtmlId.FOOTER, template: this.tg.getTemplate.FOOTERTEMP});
        },
        renderHomePage: function () {
            this.content = this.tg.render({el: this.tg.getHtmlId.MAINCONTENT, template: this.tg.getTemplate.MAINHOMETEMP});
        },
        renderApplicationPage: function () {
            //this.content = this.tg.render({el: this.tg.getHtmlId.MAINCONTENT, template: this.tg.getTemplate.APPTEMP});
            this.content = new AppView({tg: this.tg});
        },
        renderAboutPage: function () {
            this.content = this.tg.render({el: this.tg.getHtmlId.MAINCONTENT, template: this.tg.getTemplate.ABOUTTEMP});
        }
    };
});
