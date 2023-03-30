const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeController = require('../controller/home_controller');

router.get('/',homeController.home);

router.post('/create-url',passport.checkAuthentication,homeController.Url);

router.get('/:url',passport.checkAuthentication,homeController.verifyUrl);

router.get('/delete/:id',passport.checkAuthentication,homeController.deleteUrl);

router.get('/update/:id',passport.checkAuthentication,homeController.updateUrlPage);

router.post('/update',passport.checkAuthentication,homeController.updateUrl);

router.use('/users',require('./user'));

module.exports=router;