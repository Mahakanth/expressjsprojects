const express=require('express')

const bodyParser=require('body-parser')


const app=express();

const adminroutes=require ('./routers/admin');
const shoproutes=require('./routers/shop');



app.use(adminroutes);
app.use(shoproutes);

app.use(bodyParser.urlencoded({extended: false}))

app.use((req,res,next) =>{
    res.status(404).send('<h1>Pge Not Found</h1>')
})


app.listen(3700)




