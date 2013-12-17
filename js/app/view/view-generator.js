//Filename: view-generator.js
/*global require:true, define: true */

console.log("System: Loading view generator...");

define([
    'backbone',
    'view/template-generator',
    'view/todo-view'
], function (Backbone, TemplateGenerator, TodoView) {
    "use strict";
    return Backbone.View.extend({

        initialize: function () {

            this.tg = new TemplateGenerator();
            var header = this.tg.render({el: this.tg.getHtmlId.HEADER, template: this.tg.getTemplate.HEADERTEMP}),
                footer = this.tg.render({el: this.tg.getHtmlId.FOOTER, template: this.tg.getTemplate.FOOTERTEMP}),
                content;
        },
        renderHomePage: function () {
            this.content = this.tg.render({el: this.tg.getHtmlId.MAINCONTENT, template: this.tg.getTemplate.MAINHOMETEMP});
        },
        renderApplicationPage: function () {
            this.content = this.tg.render({el: this.tg.getHtmlId.MAINCONTENT, template: this.tg.getTemplate.APPTEMP});
            this.content = new TodoView();
        },
        renderAboutPage: function () {
            this.content = this.tg.render({el: this.tg.getHtmlId.MAINCONTENT, template: this.tg.getTemplate.ABOUTTEMP});
        }
    });
});