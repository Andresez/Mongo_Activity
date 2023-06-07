<!-- LA BASE DE DATOS LA CREO DESDE EL PROPIO MONGO -->

<!-- LA CREACION DE LAS LISTAS -->

use ('sample_sales')

<!-- CREAMOS LAS VALIDACIONES -->

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

<!-- CREAMOS OTRA COLECCIÓN CON VALIDACIÓN -->

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

 <!-- CREAMOS OTRA COLECCIÓN CON VALIDACIÓN -->

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


 <!-- USO DE UNWIND PARA RECORRER EL ARRAY -->

use ('sample_sales')

db.listingSales.aggregate([{
    $unwind: "$detalle"
}])


<!-- PIPELINE LO UTILIZAMOS PARA ORDENAR ELEMENTOS SEPARADOS O ARREGLOS -->

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

 <!-- LOOKUP -->


<!-- USAMOS LOOKUP PARA VINCULAR 2 COLECCIONES CON ID PRIMARIA "_id" Y UNA FORANEA "_id" Y AGREGAMOS UN NUEVO CAMPO
 EN ESTE CASO "subtotal" -->

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

 <!-- PASAMOS A LAS OPERACIONES CRUD -->

const {MongoClient} = require('mongodb'); // Llamamos las colecciones de mongodb
const {faker} = require('@faker-js/faker'); // Utilizamos faker para poder crear datos al azar
const uri = "mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority"; // Usamaos URI para conectar con el Cluster

<!-- OPERACIONES CRUD -->


<!-- insertOne() -->

<!-- UTILIZAMOS INSERT ONE PARA INSERTAR UNA VENTA -->

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

<!-- insertMany() -->

<!-- UTILIZAMOS INSERT MANY PARA INSERTAR MUCHOS DATOS -->

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

<!-- CREAR NUEVAS COLECCIONES -->

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
//     const result = await client.db('sample_sales').collection('collection3').insertMany(nuevaVenta);

//     console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

 <!-- CREAMOS DATOS AL AZAR CON FAKER -->

<!-- SEMILLA PARA GENERAR DATOS AL AZAR Y QUE PERMANEZCAN -->

faker.seed(123); 

<!-- CREAMOS DATOS AL AZAR CON FAKER Y POR MEDIO DEL FOR DECLARAMOS QUE SEAN POR 100 DATOS DECLARADOS -->

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

<!-- FIND -->

<!-- UTILIZAMOS FIND PARA ENCONTRAR TODOS LOS ARCHIVOS REGISTRADOS -->

<!-- ENCONTRAR TODOS LOS ARCHIVOS DE VENTA -->

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


<!-- ENCONTRAR UN REGISTRO DE VENTA -->

// async function encontrarVenta(nombreVenta){
//         const client = new MongoClient(uri);
    
//         try {
//             await client.connect();
//             const result = await client.db('sample_sales').collection('listingSales').
//             findOne({dni_cliente: nombreVenta})
//             if(result){
//                 console.log(`Se encontró una venta de nombre ${nombreVenta}`);
//                 console.log(result);
//             }else{
//                 console.log(`No se encontró venta de nombre ${nombreVenta}`);
//             }
      
//         } catch (e) {
//             console.error(e);
//         }finally{
    
//         await client.close();
//         }
//     }
    
//     encontrarVenta(9);


<!-- ENCONTRAR ARCHIVOS POR UN LÍMITE DEFINIDO -->

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


<!-- CATEGORIZAR POR ATRIBUTO, EN ESTE CASO "dni_cliente" DE FORMA DESCENDENTE (1) -->

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


 <!-- UPDATE -->

<!-- ACTUALIZAR UN ELEMENTO -->

async function actualizarVenta(tipoVenta, campoActualizar){
    const client = new MongoClient(uri);
    
//    try {
        await client.connect();
        const result = await client.db('sample_sales').collection('listingSales').
        updateOne({dni_cliente: tipoVenta}, {$set: {producto: campoActualizar}})
        console.log(`${result.matchedCount} venta(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} venta(s) fue(ron) actualizada(s)`);
      
//    } catch (e) {
        console.error(e);
    }finally{
    
//        await client.close();
    }
}

actualizarVenta(9, "Mercedes Benz");


<!-- ACTUALIZAR MUCHOS ELEMENTOS -->

async function actualizarVenta(campoActualizar){
    const client = new MongoClient(uri);
    
//    try {
        await client.connect();
        const result = await client.db('sample_sales').collection('collection3').
        updateMany({}, {$set: {_id_colection: campoActualizar}})
        console.log(`${result.matchedCount} venta(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} venta(s) fue(ron) actualizada(s)`);
      
//    } catch (e) {
        console.error(e);
    }finally{
    
//        await client.close();
    }   
}
    
actualizarVenta(faker.number.int({min: 1, max: 100}));


<!-- DELETE -->

<!-- ELIMINAMOS UN ELEMENTO -->

// async function eliminarVenta(nombreVenta){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('listingSales').
//         deleteOne({dni_cliente: nombreVenta});
//         console.log(`${result.deletedCount} venta(s) fue(ron) eliminida(s)`)
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }

// eliminarVenta(9);


<!-- ELIMINAR MUCHOS ELEMENTOS -->

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


<!-- DROP -->

<!-- ELIMINAR LA COLECCIÓN -->

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


 <!-- UPSERT -->

 <!-- AGREGAMOS UN DOCUEMNTO EN CASO DE QUE NO EXISTA -->

async function actualizarVenta(campoActualizar){
    const client = new MongoClient(uri);
    
//    try {
        await client.connect();
        const result = await client.db('sample_sales').collection('collection3').
        updateMany({}, {$set: {_id_colection: campoActualizar}}, {upsert:true} )
        console.log(`${result.matchedCount} venta(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} venta(s) fue(ron) actualizada(s)`);
      
//    } catch (e) {
        console.error(e);
    }finally{
    
//    await client.close();
    }
}
    
actualizarVenta(faker.number.int({min: 1, max: 100}));