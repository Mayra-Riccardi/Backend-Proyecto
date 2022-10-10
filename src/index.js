//IMPORTACIONES
const express = require ('express');
const appRoutes = require ('./routes/index');

//DEFINIMOS CONSTANTE PARA EL SERVIDOR EXPRESS
const app = express();

//PUERTO
const PORT = process.env.PORT || 8080;



//MIDDLEWARES - va antes de las rutas!!!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//ROUTES
app.use('/', appRoutes);



//CONECTAMOS EL SERVIDOR
const connectedServer = app.listen(PORT, () => {
    console.log(`🚀 Server's up and runing on port: ${PORT} 🚀`);
  });
  
  connectedServer.on("error", (error) => {
    res.send(`error:`, error.message);
  });