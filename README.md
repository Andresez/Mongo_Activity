//LA BASE DE DATOS LA CREO DESDE EL PROPIO MONGO

//LA CREACION DE LAS LISTAS

use ('sample_sales')

//Creamos las validaciones

// db.createCollection("listingSales", {
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           title: "Sales Object Validation",
//           required: [ "dni_cliente", "nombre", "apellido",  "producto", "fecha", "total" ],
//           properties: {
//             dni_cliente: {
//                 bsonType: "int",
//                 description: "'dni_Cliente' must be a interger and is required"
//              },

//             nombre: {
//                 bsonType: "string",
//                 description: "'nombre' must be a interger and is required"
//             },

//             apellido: {
//                 bsonType: "string",
//                 description: "'apellido' must be a interger and is required"

//             },

//             producto: {
//                 bsonType: "string",
//                 description: "'producto' must be a string and is required"
//             },

//             fecha: {
//                 bsonType: "date",
//                 description: "'fecha' must be a date and is required"

//             },

//             total: {
//                 bsonType: "int",
//                 description: "'total' must be a interger and is required"
//             }
//         }
//     }
// }
// })

// Creamos otra colección con validación

// db.createCollection("collection2", {
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           title: "Sales Object Validation",
//           required: [ "metodo pago",  "detalle", "subtotal", "iva" ],
//           properties: {
//             metodo_pago: {
//                 bsonType: "string",
//                 description: "'metodo pago' must be a interger and is required"

//             },

//             detalle: {
//                 bsonType: "string",
//                 description: "'detalle' must be a string and is required"
//             },

//             subtotal: {
//                 bsonType: "int",
//                 description: "'subtotal' must be a date and is required"

//             },

//             iva: {
//                 bsonType: "int",
//                 description: "'iva' must be a interger and is required"
//             }
//         }
//     }
// }
// })

// Creamos otra colección con validación

// db.createCollection("collection3", {
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           title: "Sales Object Validation",
//           required: [ "cantidad",  "metodo compra", "opiniones", "estado" ],
//           properties: {
//             cantidad: {
//                 bsonType: "int",
//                 description: "'cantidad' must be a interger and is required"

//             },

//             metodo_compra: {
//                 bsonType: "string",
//                 description: "'metodo compra' must be a string and is required"
//             },

//             opiniones: {
//                 bsonType: "string",
//                 description: "'opiniones' must be a date and is required"

//             },

//             estado: {
//                 bsonType: "string",
//                 description: "'estado' must be a interger and is required"
//             }
//         }
//     }
// }
// })


// USO DE UNWIND PARA RECORRER EL ARRAY

use ('sample_sales')

db.listingSales.aggregate([{
    $unwind: "$detalle"
}])


// //PIPELINE LO UTILIZAMOS PARA ORDENAR ELEMENTOS SEPARADOS O ARREGLOS

// db.listingSales.aggregate([
//     {
//         $match: {total: 4}
//     },{
//         $limit: 2
//     },{
//         $sort: {"total":-1}
//     }
// ])

// db.listingSales.aggregate([
//     {
//         $match: {fecha: "2023-05-17"}
//     },{
//         $project: {"DNI_cliente": false}
//     },{
//         $sort: {"total":1}
//     }
// ])

// db.listingSales.aggregate([
//     {
//         $match: {
//           total:{
//             $gt:7
//           }
//         }
//     },{
//         $count: "contador"
//     }
// ])

// LOOKUP


// Usamos lookup para vincular 2 colecciones con id primaria "_id" y una foranea "cantidad" y agregamos un nuevo campo 
// En este caso "Opiniones"

db.listingSales.aggregate([
    {
    $lookup: {
        from: "collection3",
        localField: "'_id'",
        foreignField: "'_id'",
        as: "subtotal"
    }

//    },{
    $project: {
        "dni_cliente": true,
        "nombre": true,
        "apellido": true,
        "producto": true,
        "fecha": true,
        subtotal: true
    }
}    
])

// PASAMOS A LAS OPERACIONES CRUD

const {MongoClient} = require('mongodb'); // Llamamos las colecciones de mongodb
const {faker} = require('@faker-js/faker'); // Utilizamos faker para poder crear datos al azar
const uri = "mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority"; // Usamaos URI para conectar con el Cluster

//OPERACIONES CRUD


//insertOne

//Insertar una venta

async function crearVenta(nuevaVenta){
    const client = new MongoClient(uri); //Instanciamos como objeto, en este caso cliente

//    try {
        await client.connect();
    const result = await client.db('sample_sales').collection('collection3').insertOne(nuevaVenta);

//    console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
    } catch (e) {
        console.error(e);
    }finally{

//    await client.close();
    } 
}

crearVenta({
    "dni_cliente": faker.number.int({min: 0, max: 10}),
    "nombre": faker.person.firstName(),
    "apellido": faker.person.lastName(),
    "producto": faker.commerce.product(),
    "fecha": faker.date.recent(),
    "total": faker.number.int({min: 0, max: 10})
});

//CREAT insertMany()

//Utilizamos InsertMany para crear muchos datos

async function crearVenta(nuevaVenta){
    const client = new MongoClient(uri); //Instanciamos como objeto, en este caso cliente

//    try {
        await client.connect();
    const result = await client.db('sample_sales').collection('collection3').insertMany(nuevaVenta);

 //   console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
    } catch (e) {
        console.error(e);
    }finally{

 //   await client.close();
    } 
}

// Crear nuevas colecciones 

// async function crearVenta(nuevaVenta){
//     const client = new MongoClient(uri); //Instanciamos como objeto, en este caso cliente

//     try {
//         await client.connect();
//     const result = await client.db('sample_sales').collection('collection2').insertMany(nuevaVenta);

//     console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     } 
// }

// async function crearVenta(nuevaVenta){
//     const client = new MongoClient(uri); //Instanciamos como objeto, en este caso cliente

//     try {
//         await client.connect();
//     const result = await client.db('sample_sales').collection('listingSales').insertMany(nuevaVenta);

//     console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     } 
// }

// CREAMOS DATOS AL AZAR CON FAKER

faker.seed(123); //Semilla para generar datos al azar y que permanezcan

//Creamos datos al azar con faker y por medio del for declaramos que sean de a 40 datos generados

for(let i=0; i<100; i++){

crearVenta ([
    {
        
// "dni_cliente": faker.number.int({min: 0, max: 10}),
// "nombre": faker.person.firstName(),
// "apellido": faker.person.lastName(),
// "producto": faker.commerce.product(),
// "fecha": faker.date.recent(),
// "total": faker.number.int({min: 0, max: 10})

// }, {

// "dni_cliente": faker.number.int({min: 0, max: 10}),
// "nombre": faker.person.firstName(),
// "apellido": faker.person.lastName(),
// "producto": faker.commerce.product(),
// "fecha": faker.date.recent(),
// "total": faker.number.int({min: 0, max: 10})

// }, {

// "dni_cliente": faker.number.int({min: 0, max: 10}),
// "nombre": faker.person.firstName(),
// "apellido": faker.person.lastName(),
// "producto": faker.commerce.product(),
// "fecha": faker.date.recent(),
// "total": faker.number.int({min: 0, max: 10})

// }, {

// "metodo pago": faker.commerce.department(),
// "detalle": faker.company.name(),
// "subtotal": faker.number.int({min: 0, max: 10}),
// "iva": faker.number.int({min: 0, max: 10}),
       
// "cantidad": faker.number.int({min:1, max:10}),
// "metodo compra": faker.company.name(),
// "opiniones": faker.lorem.text(),
// "estado": "activo",
       
// }, { 

"cantidad": faker.number.int({min:1, max:10}),
"metodo compra": faker.company.name(),
"opiniones": faker.lorem.text(),
"estado": "activo",

}, {

"cantidad": faker.number.int({min:1, max:10}),
"metodo compra": faker.company.name(),
"opiniones": faker.lorem.text(),
"estado": "activo",

},{

"cantidad": faker.number.int({min:1, max:10}),
"metodo compra": faker.company.name(),
"opiniones": faker.lorem.text(),
"estado": "activo",

},{ 

"cantidad": faker.number.int({min:1, max:10}),
"metodo compra": faker.company.name(),
"opiniones": faker.lorem.text(),
"estado": "activo",

}
])
}


//FIND

// Utilizamos find para encontrar todos los archivos registrados


// //Encontrar todos los registros de venta

// async function encontrarVenta(nombreVenta){
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('listingSales').
//         find({}).toArray()

//         if(result){
//             console.log(`Se encontró una venta de nombre ${nombreVenta}`);
//             console.log(result);
//         }else{
//             console.log(`No se encontró una venta de nombre ${nombreVenta}`);
//         }
  
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

// encontrarVenta();


// Encontrar un archivo registrado


// async function encontrarVenta(nombreVenta){
//         const client = new MongoClient(uri);
    
//         try {
//             await client.connect();
//             const result = await client.db('sample_sales').collection('collection3').
//             findOne({DNI_cliente: nombreVenta})
//             if(result){
//                 console.log(`Se encontró una venta de nombre ${nombreVenta}`);
//                 console.log(result);
//             }else{
//                 console.log(`No se encontró venta propiedad de nombre ${nombreVenta}`);
//             }
      
//         } catch (e) {
//             console.error(e);
//         }finally{
    
//         await client.close();
//         }
//     }
    
//     encontrarVenta(6);



// Encontrar archivos por un limite definido

// async function encontrarVenta(nombreVenta){
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('listingSales').
//         find({}).limit(5);

//         const result2= await result.toArray();
//         console.log(result2);
  
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

// encontrarVenta();


// Categorizar por atributo, en este caso "dni_cliente" de forma descendente (1)

// async function encontrarVenta(nombreVenta){
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('listingSales').
//         find({}).sort({dni_cliente: 1});

//         const result2= await result.toArray();
//         console.log(result2);
  
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

// encontrarVenta();


// UPDATE

// Actualizar un elemento


// async function actualizarVenta(tipoVenta, campoActualizar){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('listingSales').
//         updateOne({dni_cliente: tipoVenta}, {$set: {fecha: campoActualizar}})
//         console.log(`${result.matchedCount} venta(s) cumple con el citerio de búsqueda`);
//         console.log(`${result.modifiedCount} venta(s) fue(ron) actualizada(s)`);
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }
    
// actualizarVenta(6, "2023-06-06");


// Actualizar muchos elementos

async function actualizarVenta(campoActualizar){
    const client = new MongoClient(uri);
    
//    try {
        await client.connect();
        const result = await client.db('sample_sales').collection('collection3').
        updateMany({}, {$set: {fecha: campoActualizar}})
        console.log(`${result.matchedCount} venta(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} venta(s) fue(ron) actualizada(s)`);
      
//    } catch (e) {
        console.error(e);
    }finally{
    
//        await client.close();
    }
}
    
actualizarVenta("2023-08-20");



DELETE 

// Eliminamos muchos elementos


// async function eliminarVenta(nombreVenta){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('listingSales').
//         deleteMany({dni_cliente: nombreVenta});
//         console.log(`${result.deletedCount} venta(s) fue(ron) eliminida(s)`)
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }

// eliminarVenta(6);

// DELETE

// Eliminar muchos elementos 

// async function eliminarVenta(nombreVenta){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('collection3').
//         deleteMany({dni_cliente: nombreVenta});
//         console.log(`${result.deletedCount} venta(s) fue(ron) eliminida(s)`)
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }

// Eliminar un elemento

// async function eliminarVenta(nombreVenta){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('collection3').
//         deleteOne({dni_cliente: nombreVenta});
//         console.log(`${result.deletedCount} venta(s) fue(ron) eliminida(s)`)
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }

// eliminarVenta(6);

//DROP

//Elimina la lista

async function eliminarVenta(){
    const client = new MongoClient(uri);
    
//    try {
        await client.connect();
        const result = await client.db('sample_sales').collection('listasolasola').
        drop({});
        console.log(`${result.deletedCount} lista(s) fue(ron) eliminida(s)`)
      
//    } catch (e) {
        console.error(e);
    }finally{
    
//        await client.close();
    }
}

eliminarVenta();


// UPSERT

// Upsert agregamos un documento en caso de que no exista


// async function actualizarVenta(tipoVenta, campoActualizar){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('listingSales').
//         updateOne({DNI_cliente: tipoVenta}, {$set: {fecha: campoActualizar}}, {upsert:true} )
//         console.log(`${result.matchedCount} venta(s) cumple con el citerio de búsqueda`);
//         console.log(`${result.modifiedCount} venta(s) fue(ron) actualizada(s)`);
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }
    
// actualizarVenta(6, "2023-08-20");