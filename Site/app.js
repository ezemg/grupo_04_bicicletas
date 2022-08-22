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

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});


app.get('/detalle', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle.html');
});

app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


