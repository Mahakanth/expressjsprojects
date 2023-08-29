const express= require('express');
const path=require('path');
const rootdir=require('../util/path')

const router= express.Router();

router.get('/contactus',(req,res,next) =>{
    
    res.sendFile(path.join(rootdir,'views','contactus.html'));
    
});

router.post('/contactus', (req, res, next) => {
    res.redirect('/success');

});




module.exports=router;
