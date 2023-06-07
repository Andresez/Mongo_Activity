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


// Uso del Unwind Para Recorrer El Array

// use ('sample_sales')

// db.listingSales.aggregate([{
//     $unwind: "$detalle"
// }])


// //Pipeline lo utilizamos para ordenar elementos separados o arreglos

// db.listingSales.aggregate([
//     {
//         $match: {total: 4}
//     },{
//         $limit: 2
//     },{
//         $sort: {"total":-1}
//     }
// ])

db.listingSales.aggregate([
    {
        $match: {producto: "Bacon"}
    },{
        $project: {"dni_cliente": true}
    },{
        $sort: {"total":1}
    }
])

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


// db.listingSales.aggregate([
//     {
//     $lookup: {
//         from: "collection3",
//         localField: "'_id'",
//         foreignField: "'_id'",
//         as: "subtotal"
//     }

//     },{
//     $project: {
//         "dni_cliente": true,
//         "nombre": true,
//         "apellido": true,
//         "producto": true,
//         "fecha": true,
//         subtotal: true
//     }
// }    
// ])