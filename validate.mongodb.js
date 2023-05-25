use ('sample_sales')

//Creamos las validaciones

db.createCollection("listingSales", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Sales Object Validation",
          required: [ "id_venta", "DNI_cliente", "tipo_comprobante", "fecha", "total" ],
          properties: {
             id_venta: {
                bsonType: "int",
                description: "'id_venta' must be a interger and is required"
             },

             DNI_cliente: {
                bsonType: "int",
                $regex: "[1-9]{10,15}(-[0-9])?",
                description: "'dni_cliente' must be an integer in [10,15] and is required"
            },

            tipo_comprobante: {
                bsonType: "string",
                description: "'tipo_comprobante' must be a string and is required"
            },

            fecha: {
                bsonType: "date",
                description: "'fecha' must be a date and is required"

            },

            total: {
                bsonType: "float",
                description: "'total' must be a interger and is required"
            }
        }
    }
}
})

// Uso del Unwind Para Recorrer El Array

use ('sample_sales')

db.listingSales.aggregate([{
    $unwind: "$detalle"
}])


//Pipeline lo utilizamos para ordenar elementos separados o arreglos

db.listingSales.aggregate([
    {
        $match: {total: 4}
    },{
        $limit: 2
    },{
        $sort: {"total":-1}
    }
])

db.listingSales.aggregate([
    {
        $match: {fecha: "2023-05-17"}
    },{
        $project: {"DNI_cliente": false}
    },{
        $sort: {"total":1}
    }
])

db.listingSales.aggregate([
    {
        $match: {
          total:{
            $gt:7
          }
        }
    },{
        $count: "contador"
    }
])
