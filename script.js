const path=require('path')
const express=require('express')

const bodyParser=require('body-parser')


const app=express();

const adminroutes=require ('./routers/admin');
const shoproutes=require('./routers/shop');
const contactus=require('./routers/contactus');
const success=require('./routers/success')


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))


app.use(adminroutes);
app.use(shoproutes);
app.use(contactus);
app.use(success);



app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(3700)




