const express =require('express');
const router =express.Router();
const heroesController = require ('../controllers/heroesController')

router.get('/',heroesController.mostrarJSON)
router.get('/detalle/:id', heroesController.detalle)
router.get('/bio/:id/ok?', heroesController.bio) //agregue esta ruta

module.exports= router
