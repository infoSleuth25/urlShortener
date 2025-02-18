const shortid =  require('shortid');
const url = require('../models/url');

async function generateNewShortURL(req,res){
    const body = req.body;
    if(!body){
        return res.status(400).json({
            msg : "URL is required !"
        })
    } 
    const shortId = shortid();
    await url.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : []    
    })
    return res.render('home',{
        id : shortId
    })
}

async function getOriginalURL(req,res){
    const shortId = req.params.shortId;
    const entry = await url.findOneAndUpdate({shortId},{$push : {visitHistory : {timeStamp : Date.now()}}});
    res.redirect(entry.redirectUrl);
}

async function getAnalyticsById(req,res){
    const shortId = req.params.shortId;
    const result = await url.findOne({shortId});
    if(!result){
        return res.status(400).json({
            msg : "Pass valid shorten id"
        })
    }
    return res.json({ 
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory
    })
}

module.exports = {generateNewShortURL,getOriginalURL,getAnalyticsById};