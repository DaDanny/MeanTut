'use strict';

//Module Dependencies:

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


//Todo Schema

var TodoSchema = new Schema({
	text: {
		type : String
	},
	done: {
		type : Boolean
	}
});

mongoose.model('Todo', TodoSchema);