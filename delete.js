const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority";

async function eliminarVenta(nombreVenta){
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const client = await client.db('sample_sales').collection('collection3').
        deleteOne({name:nombreVenta});
        console.log(`${result.deletedCount} venta(s) fue(ron) eliminida(s)`)
      
    } catch (e) {
        console.error(e);
    }finally{
    
        await client.close();
    }
}

eliminarVenta("7");