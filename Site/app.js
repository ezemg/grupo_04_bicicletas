const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve (__dirname, './public');
app.use ( express.static (publicPath) );


app.listen(3025, ()=>{
    console.log('Servidor funcionando en puerto 3025');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/carrito', function(req,res){
    res.sendFile(path.resolve(__dirname + '/views/carrito.html'));
});


app.get('/registro', function(req,res){
    res.sendFile(path.resolve(__dirname + '/views/registro.html'));
});

app.get('/producto', function(req,res){
    res.sendFile(path.resolve(__dirname + '/views/producto.html'));
});

app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname + '/views/login.html'));});



app.post('/#', function(req,res){
    res.sendFile(path.resolve(__dirname, '/views/home.html'))
})



app.post('/login', function(req,res){
    res.sendFile(path.resolve(__dirname, '/views/home.html'))
})

