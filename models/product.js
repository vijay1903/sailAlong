var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
	imagePath: {type: String, required: true},
	title: {type: String, required: true},
	boatType: {type: String, required: true},
	length: {type: String, required: true},
	year: {type: Number, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);