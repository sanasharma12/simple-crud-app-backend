const Product = require('../models/product.model');

const getProducts = async (req, res) => {
        try{
            const Pro = await Product.find({});
            res.status(200).json(Pro);
        } catch(error){
            res.status(500).json({message: error.message});
        }
    
}

const getProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const Prod = await Product.findById(id);
        res.status(200).json(Prod);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createProduct = async (req, res) => {
    try{
        const Pr = await Product.create(req.body);
        res.status(200).json(Pr);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

const updatedProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const Produp = await Product.findByIdAndUpdate(id, req.body);

        if(!Produp){
            return res.status(404).json({message: "product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const Proddelete = await Product.findByIdAndDelete(id);

        if(!Proddelete){
            return res.status(404).json({message: "product not found"});
        }
        res.status(200).json({message: "prduct deleted successfulyy"});
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updatedProduct,
    deleteProduct
}
