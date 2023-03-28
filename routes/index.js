const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.home);

router.post('/create-url',homeController.Url);

router.get('/:url',homeController.verifyUrl);

router.get('/delete/:id',homeController.deleteUrl);

module.exports=router;