// api/server.js

import express from 'express';
import Router from './routes/indexRoute.js';

// Crea una instancia de Express
const app = express();
// Configura el puerto
const port = 3000;

// Configura las rutas 
// ...
app.use('/api', Router); // Usa el router de las rutas configuradas en el archivo index.js

//cors 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:80");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});



