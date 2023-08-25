const express=require('express')

const bodyParser=require('body-parser')


const app=express();

const loginform=require ('./login');
const messageform=require('./grouppage');





app.use(bodyParser.urlencoded({extended: false}))

app.use(loginform);
app.use(messageform);

app.use((req,res,next) =>{
    res.status(404).send('<h1>Pge Not Found</h1>')
})


app.listen(3900)




