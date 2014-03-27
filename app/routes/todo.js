'use strict';

var todo = require('../controllers/todo');

module.exports = function(app){

	app.get('/api/todos', todo.find);
	app.post('/api/todos', todo.create);
	app.delete('/api/todos/:todo_id', todo.remove);
	app.get('/vote', todo.render);
};