const express = require('express');
const bodyparser = require('body-parser');
const routerApi = require('./routes');
const hbs=require('hbs');
const path=require('path');

require('dotenv').config();

const uri = process.env.URI;
const app = express();

//Middlewares //Desde que recibimos la petición hasta que obtenemos la respuesta
app.use(bodyparser.json()); //Para poder trabajar con JSON
app.use(bodyparser.urlencoded({extended: true})); //Para poder trabajar con formularios codificados en url
app.use(express.json()); //Para poder trabajar con JSON
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/View', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/View');

routerApi(app);

app.get('/', (req, res) => {
    res.send("API Sales");
    // res.render('../View/home');
})

app.use('/*', (req, res) => {
    res.status(404).send("Oops! The page you requested was not found!");
})

app.listen(3000, ()=>{
    console.log('Server in line')
});



// app.get('/', (req, res) => {
//     res.send("Servidor de Ventas");
// })

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