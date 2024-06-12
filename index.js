const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send('Hello World ok');
})



// app.get('/api/products', async (req, res) => {
//     try{
//         const Pro = await Product.find({});
//         res.status(200).json(Pro);
//     } catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/product/:id', async (req, res) =>{
//     try{
//         const { id } = req.params;
//         const Prod = await Product.findById(id);
//         res.status(200).json(Prod);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.post('/api/products', async (req, res) => {
//     try{
//         const Pr = await Product.create(req.body);
//         res.status(200).json(Pr);
//     } catch (error){
//         res.status(500).json({message: error.message});
//     }
// });

// //update a product

// app.put('/api/products/:id', async (req, res) => {
//     try{
//         const {id} = req.params;
//         const Produp = await Product.findByIdAndUpdate(id, req.body);

//         if(!Produp){
//             return res.status(404).json({message: "product not found"});
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// //delete a product

// app.delete('/api/products/:id', async (req, res) => {
//     try{
//         const {id} = req.params;
//         const Proddelete = await Product.findByIdAndDelete(id);

//         if(!Proddelete){
//             return res.status(404).json({message: "product not found"});
//         }
//         res.status(200).json({message: "prduct deleted successfulyy"});
//     } catch (error){
//         res.status(500).json({message: error.message});
//     }
// });


app.listen(3000, () => {

    console.log('Server is running on port 3000 ');

    }
);

mongoose.connect("mongodb+srv://sanasharma:Conang%4012@backend.1e8pd6d.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
.then(() => {
    console.log("Connected to database");
})
.catch((err) => {
    console.log(err);
})