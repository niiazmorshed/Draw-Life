const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;



// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());




// MongoDB Connection


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pyoefad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    // Creating The User in Database
    const paintCollection = client.db('PaintDB').collection('Paint');
    const SubcategoryCollection = client.db('PaintDB').collection('Subcategory')
    const userCollection = client.db('PaintDB').collection('User')


    app.get('/category', async(req,res)=>{
      const cursor = SubcategoryCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })



    app.get('/whole/:itemName',async(req,res)=>{
      const name = req.params.itemName;
      console.log(name)

    })


    // Creating/Posting Data for the client
    app.post('/paints', async(req,res)=>{
        const newPaints = req.body;
        const result = await paintCollection.insertOne(newPaints);
        res.send(result);
    })

    // Getting data for the client
    app.get('/paints', async(req,res)=>{
      const cursor = paintCollection.find();
      const result = await cursor.toArray();
      res.send(result); 
    })


    
    // Getting Personal Data for specific user
    app.get('/paints/:email', async(req,res)=>{
      const result = await paintCollection.find({email : req.params.email}).toArray();
      res.send(result);
    })

    app.get('/paints/:customization', async(req,res)=>{
      const result = await paintCollection.find({customization : req.params.customization}).toArray();
      res.send(result)
    })


    // Updating data in Database
    app.get('/paint/:id', async(req, res) => {
      const id = req.params.id;
      console.log('66',id)
      const query = {_id: new ObjectId(id)}
      const result = await paintCollection.findOne(query);
      res.send(result);
    })

    // Deleting info from database
    app.delete('/paints/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await paintCollection.deleteOne(query);
      res.send(result)
    })
    

    app.put('/paint/:id', async(req,res)=>{
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)};
      const updatePaint = req.body;
      const paint = {
        $set : {
          name : updatePaint.name,
          email : updatePaint.email,
          itemName : updatePaint.itemName,
          subcategory : updatePaint.subcategory,
          price : updatePaint.price,
          rating : updatePaint.rating,
          customization : updatePaint.customization,
          stockStatus : updatePaint.stockStatus,
          image : updatePaint.image,
          description : updatePaint.description,
        }
      }
      const result = await paintCollection.updateOne(filter,paint);
      res.send(result)
    });









    // =================================
    // User Related APIs
    app.post('/user', async(req,res)=>{
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })
    
    app.get('/user', async(req,res)=>{
      const cursor = userCollection.find();
      console.log(cursor)
      const user = await cursor.toArray();
      res.send(user)
    })


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 }); ================
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send('Assignment 10 server is running')
})
app.listen(port,()=>{
    console.log(`Assignment 10 is running on server :- ${port}`)
})