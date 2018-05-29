var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/fooculator_db")
	.then(() => console.log("Mongodb connected..."))
	.catch(err => console.log(err))

module.exports.User = require("./user");
module.exports.Menu = require("./menu");
