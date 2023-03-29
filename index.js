const express = require('express');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const passport = require('passport');
const localStrategy = require('./config/passport-local-strategy');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const port = 8000;

const app = express();

app.set("view engine","ejs");
app.set('views','./views');
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./assets'));

app.use(expressLayout);

app.use(session({
    name:"Project",
    secret:"AnyKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:10000*10*60
    },
    store:mongoStore.create({
        mongoUrl:process.env.MONGO_URL||"mongodb://localhost/UrlShortner",
        autoRemove:false
    },function(err){
        console.log(err);
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes/index.js'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up on port : ",port);
})