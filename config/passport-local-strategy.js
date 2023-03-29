const passport=require('passport');
const localStretegy=require('passport-local').Strategy;
const UserDB=require('../models/user');

passport.use(new localStretegy({
    usernameField:'email'
},async function(email,password,done){
    try{
        let user=await UserDB.findOne({email:email});

        if(!user || user.password != password){
            console.log("Invaid email or password..");
            return done(null,false);
        }

        return done(null,user);
    }
    catch(err){
        console.log(err);
        return done(err);
    }
}));

passport.serializeUser(function(user,cb){
    return cb(null,user.id);
})
passport.deserializeUser(async function(id,cb){
    try{
        let user = await UserDB.findById(id);
        if(user){
           return cb(null,user);     
        }
        return cb(null,false);
    }
    catch(err){
        console.log(err);
        return cb(err);
    }
})