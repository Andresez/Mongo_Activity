const {MongoClient, ObjectId} = require('mongodb');
require('dotenv').config();
const uri = process.env.URI;

class listingDelete{

    constructor(){}

    // DELETE

async deleteOne(id){
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const listingSales = await client.db('sample_sales').collection('listingSales').deleteOne({
            "_id": new ObjectId(id)
        });  
    return listingSales;

    } catch (e) {
    console.error(e);
    }finally{

    await client.close();
    }

}

async deleteMany(body){
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const listingSales = await client.db('sample_sales').collection('listingSales').deleteMany(body);
    return listingSales;

    } catch (e) {
    console.error(e);
    }finally{

    await client.close();
    }

}
}

module.exports = listingDelete;