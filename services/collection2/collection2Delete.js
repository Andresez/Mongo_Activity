const {MongoClient, ObjectId} = require('mongodb');
require('dotenv').config();
const uri = process.env.URI;

class listingDelete2{

    constructor(){}

    // DELETE

async deleteOne(id){
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').deleteOne({
            "_id": new ObjectId(id)
        });  
    return collection2;

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
        const collection2 = await client.db('sample_sales').collection('collection2').deleteMany(body);
    return collection2;

    } catch (e) {
    console.error(e);
    }finally{

    await client.close();
    }

}
}

module.exports = listingDelete2;