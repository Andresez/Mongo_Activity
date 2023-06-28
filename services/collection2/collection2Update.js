const {MongoClient, ObjectId} = require('mongodb');
require('dotenv').config();
const uri = process.env.URI;

class listingUpdate2{

    constructor(){}
  
    // UPDATE
    
async updateOne(id, pago, detalle, subtotal, iva){
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').updateOne({
            "_id": new ObjectId(id)
        },{
            $set:{
                metodopago: pago,
                detalle: detalle, 
                subtotal: subtotal,
                iva: iva
            }
        });  
    return collection2;

    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
  
async updateMany(cole2_iva){
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').updateMany({
        },{
            $set:{
                iva: cole2_iva
            }
        }); 
    return collection2; 
        
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
}

module.exports = listingUpdate2;