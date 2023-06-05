const routerlistingSales = require('./routeslistingSales');
const routerCollection2 = require('./routesCollection2');
const routerCollection3 = require('./routesCollection3');

function routerApi(app){
    app.use('/listingSales', routerlistingSales);//La app que creamos con appexpress va a asociar "movies" con el controlador routesMovies
    app.use('/collection2', routerCollection2);
    app.use('/collection3', routerCollection3);
}

module.exports = routerApi;