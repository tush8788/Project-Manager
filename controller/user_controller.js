module.exports.signInPage=function(req,res){
   
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('signin',{
       
        title:"SignIN"
    })
}

module.exports.createSession=function(req,res){
    return res.redirect('/');
}