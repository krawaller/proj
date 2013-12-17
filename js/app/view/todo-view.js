console.log("System: Loading view generator...");

define([
    'jquery',
    'backbone',
    'collection/todo-collection'
], function ($, Backbone, Todos) {
    "use strict";
    return Backbone.View.extend({

        el: ".input-group-btn", //$('#button').parent(),

        events: {
            "click #saveButton": "addTodo"
        },

        initialize: function () {
            this.todos = new Todos();
            //console.log(this.el);
            this.todos.fetch();
            this.render();
        },

        render: function () {
            $("#todoList").empty();
            this.todos.each(function (model) {
                console.log(model.get('content'));
                $("#todoList").prepend("<p>" + model.get('content') + "</p>");
            });
        },

        addTodo: function () {
            if ($(".form-control").val() !== "") {
                this.todos.create({content: $(".form-control").val()});
                $(".form-control").val('');
            }

            this.render();
        }
    });
});