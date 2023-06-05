const {MongoClient} = require('mongodb');
const {faker} = require('@faker-js/faker');
const uri = "mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority";

//Operaciones CRUD

//CREAT insertMany()

async function crearVenta(nuevaVenta){
    const client = new MongoClient(uri); //Instanciamos como objeto, en este caso cliente

    try {
        await client.connect();
    const result = await client.db('sample_sales').collection('collection3').insertMany(nuevaVenta);

    console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    } 
}

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
//     const result = await client.db('sample_sales').collection('collection3').insertMany(nuevaVenta);

//     console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     } 
// }

// // Agregar Array Con Nuevos Atributos A La Colección listingSales

// crearVenta([
//     {
//     "producto":faker.commerce.product(),
//     "precio":faker.commerce.price(),
//     "detalle":["PC", "TV", "Video Games", 895000, 652000, 115000]
// }])


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


// // //Encontrar un registro de venta


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



// // //Encontrar por un límite definido

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


// // //Categorizar por atributo, en este caso "DNI_cliente" de forma descendente (1)

// async function encontrarVenta(nombreVenta){
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('listingSales').
//         find({}).sort({DNI_cliente: 1});

//         const result2= await result.toArray();
//         console.log(result2);
  
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

// encontrarVenta();


// // Actualizar un elemento


// async function actualizarVenta(tipoVenta, campoActualizar){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('collection3').
//         updateOne({DNI_cliente: tipoVenta}, {$set: {fecha: campoActualizar}})
//         console.log(`${result.matchedCount} venta(s) cumple con el citerio de búsqueda`);
//         console.log(`${result.modifiedCount} venta(s) fue(ron) actualizada(s)`);
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }
    
// actualizarVenta(6, "2024-08-20");


// // Upsert agregamos un documento en caso de que no exista


// async function actualizarVenta(tipoVenta, campoActualizar){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('collection3').
//         updateOne({DNI_cliente: tipoVenta}, {$set: {fecha: campoActualizar}}, {upsert:true} )
//         console.log(`${result.matchedCount} venta(s) cumple con el citerio de búsqueda`);
//         console.log(`${result.modifiedCount} venta(s) fue(ron) actualizada(s)`);
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }
    
// actualizarVenta(6, "2024-08-20");


// // Eliminamos muchos elementos


// async function eliminarVenta(nombreVenta){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('sample_sales').collection('collection3').
//         deleteMany({DNI_cliente:nombreVenta});
//         console.log(`${result.deletedCount} venta(s) fue(ron) eliminida(s)`)
      
//     } catch (e) {
//         console.error(e);
//     }finally{
    
//         await client.close();
//     }
// }

// eliminarVenta(6);