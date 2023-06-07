const express = require('express');
const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id
const bodyparser = require ('body-parser');
require ('dotenv').config();
// const uri = process.env.URI;
const listingService = require('../services/listingService');

const uri = 'mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority';
const router = express.Router();

const service = new listingService();

/**
 * CRUD , CREATE , READ , UPDTAE , DELETE
 */

// READ

// find()
router.get('/', async (req, res) => { 

    const collection2 = await service.find();
    if(collection2.length>0){
        res.status(200).send(collection2);
    }else{
        res.status(404).send("Not found");
    }
})

// findOne()
router.get('/:id', async (req, res) => { 
    const id = req.params.id;
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const collection2 = await client.db('sample_sales').collection('collection2').findOne({_id: new ObjectId(id)});  
    if (collection2){
    res.status(200).send(collection2);

   }else{
    res.status(404).send("No se encontró información");
   }
    } catch (e) {
      console.error(e);
    }finally{

    await client.close();
    }

}
)

//CREATE

//insertOne()
router.post('/:id', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').insertOne({body});  
    if (collection2){
    res.status(200).json({
        message : 'Se crearon las ventas en la base de datos',
        collection2,
        //data: body
    });
   }else{
    res.status(404).send("No se crearon las ventas");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)

// insertMany()
router.post('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').insertMany([body]);  
    if (collection2){
    res.status(200).json({
        message : 'Se crearon las ventas en la base de datos',
        collection2,
        //data: body
    });

   }else{
    res.status(404).send("No se crearon la ventas");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)

// UPDATE

// updateOne()
router.patch('/:id', async (req, res) => { 
    const id = req.params.id;
    const cole2_detalle = req.body.detalle;
    const cole2_iva = req.body.iva;
    const collection2 = await service.updateOne(id, cole2_detalle, cole2_iva);
    if (collection2){
        res.status(200).json({
        "message" : 'Se actualizó la venta',
    });

   }else{
        res.status(404).send("No se actualizó la venta");
   }
})

// updateMany()
router.patch('/', async (req, res) => { 
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').updateMany({},
        {$set:{body}});  
        if (collection2){
        res.status(200).send(`Se actualizó la colección ${collection2}`);
    

   }else{
    res.status(404).send("No se actualizó la venta");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)

// DELETE

// Eliminar un solo campo
router.delete('/:id', async (req, res) => { 
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').deleteOne({_id: new ObjectId(id)},
        {$set:{
            title:body, 
            year: body.year
        }
    });  
    if (collection2){
    res.status(200).json({
        message : 'Se eliminó la venta',
        collection2,
        data: body
    });

   }else{
    res.status(404).send("No se eliminó la venta");
   }
    } catch (e) {
        console.error(e);
    }finally{

    await client.close();
    }

}
)

module.exports = router;

// DELETE Many
router.delete('/', async (req, res) => { 
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection2 = await client.db('sample_sales').collection('collection2').deleteMany(body);
        if(collection2){
            res.status(200).send(`Se borró la siguiente colección ${collection2}`);

        }else{
        res.status(404).send("No se encontró información");
        }
        } catch (e) {
        console.error(e);
        }finally{

        await client.close();
        }

}
)

module.exports = router;