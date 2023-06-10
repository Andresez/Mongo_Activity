const {MongoClient} = require('mongodb');
const {faker} = require('@faker-js/faker');
const uri = "mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority";

//Operaciones CRUD

//Insertar una venta

// async function crearVenta(nuevaVenta){
//     const client = new MongoClient(uri); //Instanciamos como objeto, en este caso cliente

//     try {
//         await client.connect();
//     const result = await client.db('sample_sales').collection('listingSales').insertOne(nuevaVenta);

//     console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     } 
// }

// crearVenta({
//     "dni_cliente": faker.number.int({min: 0, max: 10}),
//     "nombre": faker.person.firstName(),
//     "apellido": faker.person.lastName(),
//     "producto": faker.commerce.product(),
//     "fecha": faker.date.recent(),
//     "total": faker.number.int({min: 0, max: 10})
// });

//CREAT insertMany()

async function crearVenta(nuevaVenta){
    const client = new MongoClient(uri); //Instanciamos como objeto, en este caso cliente

    try {
        await client.connect();
    const result = await client.db('sample_sales').collection('collection2').insertMany(nuevaVenta);

    console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    } 
}

faker.seed(123); //Semilla para generar datos al azar y que permanezcan

//Creamos datos al azar con faker y por medio del for declaramos que sean de a 40 datos generados

for(let i=0; i<50; i++){

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

"metodo pago": faker.commerce.department(),
"detalle": faker.company.name(),
"subtotal": faker.number.int({min: 0, max: 10}),
"iva": faker.number.int({min: 0, max: 10}),
       
// }, { 

// "metodo pago": faker.commerce.department(),
// "detalle": faker.company.name(),
// "subtotal": faker.number.int({min: 0, max: 10}),
// "iva": faker.number.int({min: 0, max: 10}),
           
// }, { 
    
// "metodo pago": faker.commerce.department(),
// "detalle": faker.company.name(),
// "subtotal": faker.number.int({min: 0, max: 10}),
// "iva": faker.number.int({min: 0, max: 10}),
       
// }, { 

// "metodo pago": faker.commerce.department(),
// "detalle": faker.company.name(),
// "subtotal": faker.number.int({min: 0, max: 10}),
// "iva": faker.number.int({min: 0, max: 10}),
       
// }, { 

// "metodo pago": faker.commerce.department(),
// "detalle": faker.company.name(),
// "subtotal": faker.number.int({min: 0, max: 10}),
// "iva": faker.number.int({min: 0, max: 10}),
       
// }, { 

// "cantidad": faker.number.int({min:1, max:10}),
// "metodo compra": faker.company.name(),
// "opiniones": faker.lorem.text(),
// "estado": "activo",

// }, {

// "cantidad": faker.number.int({min:1, max:10}),
// "metodo compra": faker.company.name(),
// "opiniones": faker.lorem.text(),
// "estado": "activo",

// },{

// "cantidad": faker.number.int({min:1, max:10}),
// "metodo compra": faker.company.name(),
// "opiniones": faker.lorem.text(),
// "estado": "activo",

// },{ 

// "cantidad": faker.number.int({min:1, max:10}),
// "metodo compra": faker.company.name(),
// "opiniones": faker.lorem.text(),
// "estado": "activo",

}
])
}







// // Agregar Array Con Nuevos Atributos A La Colección listingSales

// crearVenta([
//     {
//     "producto":faker.commerce.product(),
//     "precio":faker.commerce.price(),
//     "detalle":["PC", "TV", "Video Games", 895000, 652000, 115000]
// }])