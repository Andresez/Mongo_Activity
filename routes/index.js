const routerlistingSales = require('./routesListingSales');
const routerCollection2 = require('./routesCollection2');
const routerCollection3 = require('./routesCollection3');

function routerApi(app){
    app.use('/ventas', routerlistingSales);//La app que creamos con appexpress va a asociar "movies" con el controlador routesMovies
    app.use('/detalles', routerCollection2);
    app.use('/estado', routerCollection3);
}

module.exports = routerApi;