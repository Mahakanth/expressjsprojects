const express=require('express')

const fs=require('fs')

const messages=require('./data')


const router= express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,messages)=>{
        if(err){
            console.log('No data exists');
            messages="No data exists";
        }
        res.send(`${messages}  <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" id="message" name="message" placeholder="Message"><br>
        <input type="hidden" id="username" name="username" placeholder="Username"><br>
        <button type="submit">Send</button></form>`)
    })
    
    
})

router.post('/', (req, res, next) => {
    const newMessage = {
        [req.body.username]: req.body.message
    };
    messages.push(newMessage);
    console.log(messages);
    fs.writeFile( "username.txt",`${req.body.username}:${req.body.message}`,{flag :'a'},(err) =>
    err? console.log(err):res.redirect('/'));
});



module.exports=router;