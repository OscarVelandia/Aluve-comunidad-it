var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/productos', (req, res) => {
    res.status(500).send('Ha ocurrido un error de servidor');
});

router.get('/producto', (req, res) => {
    res.status(500).send('Ha ocurrido un error de servidor');
});

router.get('/contacto', (req, res) => {
    res.status(404).send('404 No encontrado');
});

module.exports = router;

//Esto va en el index.js
//Rutas del navbar
app.use('/', router);
app.use('/productos', router);
app.use('/exclusivoAluve', router);
app.use('/servicios', router);
app.use('/nuestrosTrabajos', router);