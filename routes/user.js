const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController=require('../controller/user_controller');

router.get('/sign-in',userController.signInPage);

router.post('/signin',passport.authenticate('local',{failureRedirect:'/users/sign-in'}),userController.createSession);

router.get('/signout',userController.signOut);
module.exports=router;