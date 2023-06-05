const express = require('express');
const {MongoClient, ObjectId} = require('mongodb'); //Para poder trabajar con Id

const uri = 'mongodb+srv://andres:admin353@cluster0.etevk7a.mongodb.net/?retryWrites=true&w=majority';

const router = express.Router();

/**
 * CRUD , CREATE , READ , UPDTAE , DELETE
 */

// READ

// find()
router.get('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

  try {
      await client.connect();
      const listingSales = await client.db('sample_sales').collection('listingSales').find({}).toArray();  
      
      if(listingSales){
      res.status(200).send(listingSales);
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

// findOne()
router.get('/:id', async (req, res) => { 
    const id = req.params.id;
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const listingSales = await client.db('sample_sales').collection('listingSales').findOne({_id: new ObjectId(id)});  
    if (listingSales){
    res.status(200).send(listingSales);

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

// CREATE

//insertOne()
router.post('/:id', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const listingSales = await client.db('sample_sales').collection('listingSales').insertOne({body});  
    if (listingSales){
    res.status(200).json({
        message : 'Se crearon las ventas en la base de datos',
        listingSales,
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
        const listingSales = await client.db('sample_sales').collection('listingSales').insertMany([body]);  
    if (listingSales){
    res.status(200).json({
        message : 'Se crearon las ventas en la base de datos',
        listingSales,
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
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const listingSales = await client.db('sample_sales').collection('listingSales').updateOne({_id: new ObjectId(id)},
        {$set:{
            title: body, 
            year: body.year
        }
    });  
    if (listingSales){
    res.status(200).json({
        message : 'Se actualizó la venta',
        listingSales,
        // data: body
    });

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

// updateMany()
router.patch('/', async (req, res) => { 
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const listingSales = await client.db('sample_sales').collection('listingSales').updateMany({},
        {$set:{body}});  
        if (listingSales){
        res.status(200).send(`Se actualizó la colección ${listingSales}`);
    

   }else{
    res.status(404).send("No se actualizó la colección");
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
        const listingSales = await client.db('sample_sales').collection('listingSales').deleteOne({_id: new ObjectId(id)},
        {$set:{
            title:body, 
            year: body.year
        }
    });  
    if (listingSales){
    res.status(200).json({
        message : 'Se eliminó la venta',
        listingSales,
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
        const listingSales = await client.db('sample_sales').collection('listingSales').deleteMany(body);
        if(listingSales){
            res.status(200).send(`Se borró la siguiente colección ${listingSales}`);

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