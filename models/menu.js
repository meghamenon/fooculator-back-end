var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MenuSchema = new Schema({
	appetizers: [],
	main: [],
	sides: [],
	desserts: [],
	wine: [] 
});

var Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;