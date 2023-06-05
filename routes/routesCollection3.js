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
      const collection3 = await client.db('sample_sales').collection('collection3').find({}).toArray();  
      
      if(collection3){
      res.status(200).send(collection3);
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
      const collection3 = await client.db('sample_sales').collection('collection3').findOne({_id: new ObjectId(id)});  
    if (collection3){
    res.status(200).send(collection3);

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

// insertOne()
// router.post('/:id', async (req, res) => { 
//     const body = req.body;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//         const collection3 = await client.db('sample_sales').collection('collection3').insertOne({body});  
//     if (collection3){
//     res.status(200).json({
//         message : 'Se crearon las ventas en la base de datos',
//         collection3,
//         //data: body
//     });
//    }else{
//     res.status(404).send("No se crearon las ventas");
//    }
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }

// }
// )

// insertMany()
router.post('/', async (req, res) => { 
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection3 = await client.db('sample_sales').collection('collection3').insertMany([body]);  
    if (collection3){
    res.status(200).json({
        message : 'Se crearon las ventas en la base de datos',
        collection3,
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
        const collection3 = await client.db('sample_sales').collection('collection3').updateOne({_id: new ObjectId(id)},
        {$set:{
            title: body, 
            year: body.year
        }
    });  
    if (collection3){
    res.status(200).json({
        message : 'Se actualizó la venta',
        collection3,
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
        const collection3 = await client.db('sample_sales').collection('collection3').updateMany({},
        {$set:{body}});  
        if (collection3){
        res.status(200).send(`Se actualizó la colección ${collection3}`);
    

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
        const collection3 = await client.db('sample_sales').collection('collection3').deleteOne({_id: new ObjectId(id)},
        {$set:{
            title:body, 
            year: body.year
        }
    });  
    if (collection3){
    res.status(200).json({
        message : 'Se eliminó la venta',
        collection3,
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

// DELETE Many
router.delete('/', async (req, res) => { 
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection3 = await client.db('sample_sales').collection('collection3').deleteMany(body);
        if(collection3){
            res.status(200).send(`Se borró la siguiente colección ${collection3}`);

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