const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.home);

router.post('/create-url',homeController.Url);

router.get('/:url',homeController.verifyUrl);

router.get('/delete/:id',homeController.deleteUrl);

router.get('/update/:id',homeController.updateUrlPage);

router.post('/update',homeController.updateUrl);

module.exports=router;