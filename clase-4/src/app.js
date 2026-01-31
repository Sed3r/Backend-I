import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo con Express');
});

app.get('/bienvenida', (req, res) => {
    res.send('Bienvenido a la clase de Express');
});

app.listen(PORT, () => {
    console.log(`Server con Exporess en el puerto${PORT}`);
});
