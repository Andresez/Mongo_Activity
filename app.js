const express = require('express');
const bodyparser = require('body-parser');
const routerApi = require('./routes');
const bodyparser = require('body-parser');
require('dotenv').config();
// const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id
// const uri = 'mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority';
// const hostname = 'localhost';
const port = process.env.PORT || 4000;
// const port = 3000;
// const router = express.Router();
const app = express();

//Middlewares //Desde que recibimos la petición hasta que obtenemos la respuesta
app.use(bodyparser.json()); //Para poder trabajar con JSON
app.use(bodyparser.urlencoded({extended: true})); //Para poder trabajar con formularios codificados en url
app.use(express.json()); //Para poder trabajar con JSON
routerApi(app);

// const port = 3000;

app.get('/', (req, res) => {
    res.send("Servidor de Ventas");
})

app.listen(3000, () => {
    console.log(`El servidor está escuchando`);
})

// app.listen(port, hostname, () => {
//     console.log(`El servidor está escuchando http://${hostname}:${port}`);
// })



// async function showMovie(){
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         await client.db('sample_mflix').collection('movies').find({}).skip(1000).limit(5).toArray();  
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

// showMovie();