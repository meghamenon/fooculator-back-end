var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MenuSchema = new Schema({
	appetizers: [],
	mains: [],
	sides: [],
	desserts: [],
	wine: [],
	numberOfGuests: Number,
	quantity: Number
});

var Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;