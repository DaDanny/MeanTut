'use strict';
var mongoose = require('mongoose'),
	Todo = mongoose.model('Todo');

exports.find = function(req, res){
	Todo.find(function(err,todos){
		if(err){
			res.send(err);
		}

		res.json(todos);
	});
};

exports.create= function(req,res){

	Todo.create({
		text: req.body.text,
		done: false
	}, function(err, todo){
		if(err){
			res.send(err);
		}

		Todo.find(function(err, todos){
			if(err){
				res.send(err);
			}
			res.json(todos);
		});
	});
};

exports.remove = function(req, res){
	Todo.remove({
		_id : req.params.todo_id
	}, function(err, todo){
		if(err){
			res.send(err);
		}

		Todo.find(function(err, todos){
			if(err){
				res.send(err);
			}
			res.json(todos);
		});
	});
};

exports.render = function(req, res) {
    res.sendfile('./public/vote.html');
};