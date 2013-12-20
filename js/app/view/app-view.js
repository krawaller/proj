console.log("System: Loading view generator...");

define([
    'jquery',
    'backbone',
    'collection/todo-collection',
    'datepicker'
], function ($, Backbone, Todos) {
    "use strict";
    return Backbone.View.extend({

        el: "#main-content", //$('#button').parent(),

        events: {
            "click #save-button": "addTodo",
            "click .btn-danger": "removeTodo",
            "keypress .form-control": "checkKey"
        },

        checkKey: function (e) {
            if (e.which === 13) {
                this.addTodo();
            }
        },

        initialize: function (param) {
            this.Todos = new Todos();
            this.Todos.fetch();
            this.TempGen = param.tg;
            this.render();
        },

        render: function () {
            //Rendering the application template via TemplateGenerator
            this.TempGen.render({el: this.TempGen.getHtmlId.MAINCONTENT, template: this.TempGen.getTemplate.APPTEMP});
            //Using bootstrap-datepicker for my date input

            $("#todo-list").empty();
            $(".dropdown-menu").remove();
            $(".date-picker").datepicker();



            //Rendering all todos within the Collection
            var that = this;
            this.Todos.each(function (model) {

                that.TempGen.prependTodoItem({data: model.get('content'), id: model.get('id'), expire: model.get('expire')});

                var expireDate = that.generateExpireDate(model.get('expire').toString()),
                    today = new Date();

                if (expireDate < today) {
                    $("#date").css('color', 'red');
                }

            });
        },

        addTodo: function () {
            console.log($(".form-control").val().indexOf("<"));
            if ($(".form-control").val() !== "" && $(".form-control").val().indexOf("<") === -1) {
                this.Todos.create({content: $(".form-control").val(), expire: $(".date-picker").val()});
                $(".form-control").val('');
                this.render();
            }
        },

        removeTodo: function (o) {
            this.Todos.get(o.currentTarget.id).destroy();
            this.render();
        },

        generateExpireDate: function (calenderString) {
            var splitDate =  calenderString.split("/"),
                expireDate = new Date();
            return expireDate.setFullYear(parseInt(splitDate[2]),parseInt(splitDate[0]) - 1, parseInt(splitDate[1]));
        }
    });
});

