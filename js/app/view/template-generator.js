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
    'text!template/about.html',
    'text!template/todo-item.html'
], function (Backbone, _, $, homeTemplate, headerTemplate, footerTemplate, appTemplate, aboutTemplate, itemTemplate) {
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
            FOOTERTEMP     : footerTemplate,
            ITEMTEMP       : itemTemplate
        },
        //Parameter = template, htmlElement
        render: function (param) {
            this.setElement(param.el);
            // Compile the template using underscore
            var template = _.template(param.template, {});
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(template);
        },

        prependTodoItem: function (param) {
            var template = _.template(itemTemplate, {});


            $("#todo-list").prepend(template);
            $("#todo-list").find("#data").html(param.data);
            $("#todo-list").find("#date").html("Expires: " + param.expire);
            //console.log(new Date().getDate());
            //console.log(new Date().getMonth());
            //console.log(new Date().getUTCFullYear());

            //console.log(myDate.getDay() + "/" + myDate.getMonth() + "/" + myDate.getYear());

            //if (param.expire) {
            //    $(this).css('color', 'red');
            //)}

            $("#delete-button").attr("id", param.id);
        }
    });
});