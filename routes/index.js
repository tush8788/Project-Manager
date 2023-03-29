const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controller/home_controller');

router.get('/',passport.checkAuthentication,homeController.home);

router.post('/create-url',homeController.Url);

router.get('/:url',homeController.verifyUrl);

router.get('/delete/:id',homeController.deleteUrl);

router.get('/update/:id',homeController.updateUrlPage);

router.post('/update',homeController.updateUrl);

router.use('/users',require('./user'));

module.exports=router;