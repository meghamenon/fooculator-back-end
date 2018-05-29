var express = require('express');
var router = express.Router();
var menuController = require('../controllers/menuController');
const bodyParser = require('body-parser');


router.get('/api/menu', menuController.index);
router.post('/api/menu', menuController.create);
router.get('/api/menu/:menu_id', menuController.show);
router.put('/api/menu/:menu_id', menuController.update);
router.delete('/api/menu/:menu_id', menuController.destroy);
module.exports = router;