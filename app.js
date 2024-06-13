const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

// Inicialización
const app = express();

// Configuración
const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Middlewares
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/generic', (req, res) => {
    res.render('generic');
});
app.get('/elements', (req, res) => {
    res.render('elements');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Server
app.listen(port, () => {
    console.log('Escuchando servidor en http://localhost:' + port);
});