var models = require('../models')
var Menu = models.Menu;

function index(req, res){
	Menu.find({}, function(err, menu){
		if(err) res.send(err)
		else res.json(menu)
	});
}

function show(req, res){
	Menu.findById(req.params.menu_id, function(err, menu){
		if(err){
			res.send(err)
		}
		else{
			res.json(menu)
		}
	})

}

function create(req, res){
	console.log(11111 , req.body)
	Menu.create(req.body, function(err, menuItems){
		if(err) {
			console.log(err);
			res.send(err);
		}
		else {
			console.log(123, menuItems)
				res.json(menuItems)
			}
	})
}

function update(req, res){
	Menu.findByIdAndUpdate(req.params.menu_id, {$set:req.body}, function(err, menu){
		if(err) res.send(err);
		else res.json(menu)
	})
}

function destroy(req, res){
	Menu.findByIdAndRemove(req.params.menu_id, function(err, menu){
		if(err) res.send(err);
		else res.json("Success! Deleted")
	})
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
