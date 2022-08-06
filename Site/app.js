const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3025, ()=>{
    console.log('Servidor funcionando en puerto 3025');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});