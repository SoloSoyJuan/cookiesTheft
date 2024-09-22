const express = require('express');
const app = express();

app.use(express.json());

app.post('/cookies', (req, res) => {
    const cookies = req.body.cookies;
    console.log('Cookies recibidas:', cookies);

    res.send('Cookies recibidas');
});

app.listen(3000, '0.0.0.0',() => {
    console.log('Servidor escuchando en todas las interfaces en el puerto 3000');
});
