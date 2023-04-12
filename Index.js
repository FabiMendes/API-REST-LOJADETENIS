
const express = require('express');
const routesCliente = require('./route/rotaCliente')
const routesTenis = require('./route/rotaTenis')


// const app = express();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', routesCliente);
app.use('/', routesTenis);

// Cria um webserver para receber as requisições em HTTP
app.listen(3000, ()=>{
    console.log('SERVIDOR - http://localhost:3000');
});