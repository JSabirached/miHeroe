// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

const rutaMain = require ('./routes/main.js')
const rutaHeroes = require ('./routes/heroes.js')

app.use('/', rutaMain)
app.use('/heroes', rutaHeroes)

// Ruta Créditos

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});