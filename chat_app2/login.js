const express=require('express')

const router= express.Router();

router.get('/login',(req,res,next)=>{
    
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)"  action ="/product" method ="POST" > <input type="text" id="username" name="title"><br><br> <button type="submit">Login</button> </form>')
})

router.post('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/')
})


module.exports=router;