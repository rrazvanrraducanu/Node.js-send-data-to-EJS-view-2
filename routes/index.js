var express = require('express');
var myController=require('../controllers/MyController');
var router = express.Router();

router.get('/', myController.FirstPage );
router.post('/ura', myController.UraPage );

module.exports = router;
