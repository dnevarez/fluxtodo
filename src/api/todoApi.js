//This file is mocking a web API by hitting hard coded data.
var todos = require('./todoData').todos;
var _ = require('lodash');

var id = 2

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(todo) {
	return id++;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var TodoApi = {
	getTodos: function() {
		return _clone(todos);
	},

	getTodoById: function(id) {
		var todo = _.find(todos, {id: id});
		return _clone(todo);
	},

	saveTodo: function(todo) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the todo to the DB via AJAX call...');

		if (todo.id) {
			var existingTodoIndex = _.indexOf(todos, _.find(todos, {id: todo.id}));
			todos.splice(existingTodoIndex, 1, todo);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new todos in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			todo.id = _generateId(todo);
			todos.push(todo);
		}

		return _clone(todo);
	},

	deleteTodo: function(id) {
		console.log('Pretend this just deleted the todo from the DB via an AJAX call...');
		_.remove(todos, { id: id});
	}
};

module.exports = TodoApi;
