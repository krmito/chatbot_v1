'use strict'
let express = require("express")
const app = express()
 var bodyParser  = require("body-parser")

app.get('/',(req,res)=>{
    res.send('hola carlos mina')
});

app.listen(process.env.PORT || 17899,()=>{
    console.log('servidor node arriba');
    
});