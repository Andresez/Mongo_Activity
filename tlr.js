const {MongoClient} = require('mongodb');
const {faker} = require('@faker-js/faker');
const uri = "mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority";

// use ('sample_sales')

// Creamos las validaciones

// db.createCollection("listingSales", {
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           title: "Sales Object Validation",
//           required: [ "id_venta", "DNI_cliente", "tipo_comprobante", "fecha", "total" ],
//           properties: {
//              id_venta: {
//                 bsonType: "int",
//                 description: "'id_venta' must be a interger and is required"
//              },

//              DNI_cliente: {
//                 bsonType: "int",
//                 $regex: "[1-9]{10,15}(-[0-9])?",
//                 description: "'dni_cliente' must be an integer in [10,15] and is required"
//             },

//             tipo_comprobante: {
//                 bsonType: "string",
//                 description: "'tipo_comprobante' must be a string and is required"
//             },

//             fecha: {
//                 bsonType: "date",
//                 description: "'fecha' must be a date and is required"

//             },

//             total: {
//                 bsonType: "float",
//                 description: "'total' must be a interger and is required"
//             }
//         }
//     }
// }
// })

//Operaciones CRUD

//CREAT insertMany()

async function crearVenta(nuevaVenta){
    const client = new MongoClient(uri); //Instanciamos como objeto, en este caso cliente

    try {
        await client.connect();
    const result = await client.db('sample_sales').collection('listingSales').insertMany(nuevaVenta);

    console.log(`Se creo una nueva venta con el siguiente id: ${result.insertId}`);
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    } 
}

faker.seed(123); //Semilla para generar datos al azar y que permanezcan

//Creamos datos al azar con faker y por medio del for declaramos que sean de a 40 datos generados

for(let i=0; i<40; i++){

crearVenta ([
    {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
},
{

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
},
{

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
},
{

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
},
{

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}, {

    "DNI_cliente": faker.number.int({min:1, max:10}),
    "tipo_comprobante": faker.lorem.sentence(),
    "fecha": "2023-05-17",
    "total":faker.number.int({min:1, max:10})
}
])
}

// // console.log(crearVenta); 

// // // for(let i=0; <2000; i++){
// //     crearVenta({

// //     })

// // }

// // // crearPropiedad({
// // //     name: "4BR Stunnig Island in Blue Sea with Pool KALUA",
// // //     summary: "Island hosted by Harold",
// // //     bedrooms: 1,
// // //     bathrooms: 1
// // // })

// // //READ o findeOne()

// // async function encontrarPropiedad(nombrePropiedad){
// //     const client = new MongoClient(uri);

// //     try {
// //         await client.connect();
// //         const result = await client.db('sample_airbnb').collection('listingAndReviews').
// //         findOne({name: nombrePropiedad})
// //         if(result){
// //             console.log(`Se encontró una propiedad de nombre ${nombrePropiedad}`);
// //             console.log(result);
// //         }else{
// //             console.log(`No se encontró ninguna propiedad de nombre ${nombrePropiedad}`);
// //         }
  
// //     } catch (e) {
// //         console.error(e);
// //     }finally{

// //     await client.close();
// //     }
// // }

// // // encontrarPropiedad("4BR Stunnig Island in Blue Sea with Pool KALUA");

// // // UPDATE o updateOne()

// // async function actualizarPropiedad(nombrePropiedad, campoActualizar){
// //     const client = new MongoClient(uri);

// //     try {
// //         await client.connect();
// //         const result = await client.db('sample_airbnb').collection('listingAndReviews').
// //         updateOne({name: nombrePropiedad}, {$set: {summary: campoActualizar}})
// //         console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
// //         console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
  
// //     } catch (e) {
// //         console.error(e);
// //     }finally{

// //     await client.close();
// //     }
// // }

// // // actualizarPropiedad("4BR Stunnig Island in Blue Sea with Pool KALUA", "Putiadero La Isla-Palmas");

// // // DELETE o deleteOne()

// // async function eliminarPropiedad(nombrePropiedad){
// //     const client = new MongoClient(uri);

// //     try {
// //        await client.connect();
// //        const client = await client.db('sample_airbnb').collection('listingAndReviews').
// //        deleteOne({name:nombrePropiedad});
// //        console.log(`${result.deletedCount} propiedad(es) fue(ron) eliminida(s)`)
  
// //     } catch (e) {
// //         console.error(e);
// //     }finally{

// //     await client.close();
// //     }
// // }

// // // eliminarPropiedad("4BR Stunnig Island in Blue Sea with Pool KALUA");


// // //EXPORT  exportar funciones

// // module.exports = {
// //     crearPropiedad,
// //     encontrarPropiedad,
// //     actualizarPropiedad,
// //     eliminarPropiedad
// // }


// // const {faker} = require('faker-js/faker');

// // faker.seed(123); //Semilla para generar nombres al azar

// // const nombre = faker.person.firstName();
// // const apellido = faker.lastName.LastName();
// // const direccion = faker.address.borought();
// // console.log(nombre);
// // console.log(apellido);
// // console.log(direccion);

// // const url_image = faker.image.url();
// // console.log(url_image);

// // const aprendiz = {
// //     "_id": faker.string.uuid(),
// //     "fecha_nacimiento": faker.date.birthday(),
// //     "email": faker.internet.email(),
// //     "nombre": faker.person.firstName(),
// //     "apellido": faker.lastName.LastName(),
// //     "sexo": faker.person.sexType()
// // }

// // console.log(aprendiz);