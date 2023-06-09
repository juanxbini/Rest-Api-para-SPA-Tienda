// api/server.js

import express from 'express';
import Router from './routes/indexRoute.js';
import cors from 'cors'
// Crea una instancia de Express
const app = express();
// Configura el puerto
const port = 3000;

//cors 
app.use(cors())
// Configura las rutas 
// ...
app.use('/api', Router); // Usa el router de las rutas configuradas en el archivo index.js

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});



