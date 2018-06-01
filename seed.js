var models = require('./models');


var menuData = [
	{
		appetizers: ['Crostini' , 'Olives'],
		main: ['Chicken' , 'Fish'],
		sides: ['Soup', 'Salad'],
		desserts: ['Cake', 'IceCream'],
		wine: ['Red'],
		numberOfGuests: 3
	}
	
]

models.Menu.remove({}, function(err, res){
	if(err){
		console.log('Error', err);
		return;
	}
	console.log('Removed Menu');

	models.Menu.create(menuData, function(err, menu){
		if(err){
			console.log('Error', err)
			return;
		}
		console.log('Created', menu.length, menu);
	});
});