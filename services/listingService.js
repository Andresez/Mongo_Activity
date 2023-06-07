const {MongoClient, ObjectId} = require('mongodb');
// const uri = process.env.URI;
const uri = 'mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority';

class listingService{

    constructor(){}

    // CREATE

    // READ
    
    async find(){
    const client = new MongoClient(uri);
        
    try{
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').find({}).toArray();  
        return collection2;
    
        }catch (e) {
            console.error(e);
        }finally{
          
        await client.close();
        }
    }
    
    // UPDATE
    
    async updateOne(id, cole2_detalle, cole2_iva){
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').updateOne({
            "_id": new ObjectId(id)
        },{
            $set:{
            detalle: cole2_detalle, 
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
    // DELETE

module.exports = listingService;