const ShortDB = require('../models/urlShort');

module.exports.home = async(req,res) => {
    try{
        let urls = await ShortDB.find({});
        // console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
        urls.serverUrl=`${req.protocol}://${req.get('host')}${req.originalUrl}`
        // console.log(urls);
        return res.render('home',{
            title:"Home",
            urls:urls
        })
    }
    catch(err){
        console.log(err);
        res.redirect('back');
    }
    
}

module.exports.Url = async(req,res)=>{
    try{
        let url = await ShortDB.findOne({url:req.body.url});

        if(!url){
            url = await ShortDB.create(req.body);
        }

        return res.redirect('back');

    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}

module.exports.verifyUrl = async(req,res) => {
    try{
        
        let url = await ShortDB.findOne({short:req.params.url});
        // console.log(url)
        if(url){
            return res.redirect(url.url);
        }
        else{
            return res.redirect('back');
        }
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}