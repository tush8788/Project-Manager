const ShortDB = require('../models/urlShort');

//home page
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

//create new short url
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

//redirect 
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
//delete url
module.exports.deleteUrl = async(req,res) => {
    try{
        // console.log(req.params);
        await ShortDB.findByIdAndDelete(req.params.id);
        if(req.xhr){
            return res.status(200).json({
                message:"Delete Successfully",
                id:req.params.id
            });
        }
        return res.redirect('back');
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}

//update url page 
module.exports.updateUrlPage=async(req,res)=>{
    try{
        let url=await ShortDB.findById(req.params.id);
        if(!url){
            return res.redirect('back');
        }
        return res.render('updateUrlPage',{
            title:"UpdatePage",
            Url:url
        })
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}

//update url
module.exports.updateUrl=async function(req,res){
    try{
        await ShortDB.findByIdAndUpdate(req.body.urlId,{url:req.body.url});
        return res.redirect('/');
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}