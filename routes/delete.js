const {MongoClient, ObjectId} = require('mongodb');
const uri = "mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority";

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

// eliminarVenta(6);

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

// Elimina la lista de colección

async function eliminarVenta(){
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const result = await client.db('sample_sales').collection('listasolasola').
        drop({});
        console.log(`${result.deletedCount} lista(s) fue(ron) eliminida(s)`)
      
    } catch (e) {
        console.error(e);
    }finally{
    
        await client.close();
    }
}

eliminarVenta();