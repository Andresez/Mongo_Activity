const {MongoClient, ObjectId} = require('mongodb');
require('dotenv').config();
const uri = process.env.URI;

class listingInsert3{

    constructor(){}

    // INSERT

async insertMany(body){
    const client = new MongoClient(uri); 

    try {
        await client.connect();
        const collection3 = await client.db('sample_sales').collection('collection3').insertMany([body]);  
    return collection3;


    } catch (e) {
        console.error(e);
    }finally{

        await client.close();
    }
}

async regist(cantidad, compra, opiniones, estado){
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const collection3 = await client.db('sample_sales').collection('collection3').insertMany([
            {
                "cantidad": cantidad,
                "metodocompra": compra,
                "opiniones": opiniones,
                "estado": estado
        }
    
        ])    
        return collection3;
            
        }catch (e) {
            console.error(e);
        }finally{
          
        await client.close();
        }
    }
        
}   

module.exports = listingInsert3;