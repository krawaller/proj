/*global require:true, define: true */

console.log("System: Loading content generator...");

define([
    //Requirement dependency
    'backbone',
    'underscore',
    'localstorage',
    'model/todo-model'
], function (Backbone, _, LocalStore, TodoModel) {
    "use strict";
    return Backbone.Collection.extend({

        model: TodoModel,
        localStorage: new LocalStore("todos")

    });
});