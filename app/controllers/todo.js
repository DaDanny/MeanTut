'use strict';
var mongoose = require('mongoose'),
	todo = require('./models/todo')

exports.find = function(req, res){
	todo.find(function(err,todos){
		if(err){
			res.send(err);
		}

		res.json(todos);
	});
};

exports.create= function(req,res){

	todo.create({
		text: req.body.text,
		done: false
	}, function(err, todo){
		if(err){
			res.send(err);
		}

		todo.find(function(err, todos){
			if(err){
				res.send(err);
			}
			res.json(todos);
		});
	});
};

exports.remove = function(req, res){
	todo.remove({
		_id : req.params.todo_id
	}, function(err, todo){
		if(err){
			res.send(err);
		}

		todo.find(function(err, todos){
			if(err){
				res.send(err);
			}
			res.json(todos);
		});
	});
};

exports.render = function(req, res) {
    res.sendfile('./app/views/vote.html');
};