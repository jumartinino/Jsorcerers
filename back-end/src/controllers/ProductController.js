const { response } = require('express');
const Product = require('../models/Product');
const {validationResult} = require('express-validator');

const create = async(req,res) => {
    try{
          const product = await Product.create(req.body);
          return res.status(201).json({message: "Produto cadastrado com sucesso!", product: product});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json({products});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByPk(id);
        return res.status(200).json({product});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Product.update(req.body, {where: {id: id}});
        if(updated) {
            const product = await Product.findByPk(id);
            return res.status(200).send(product);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Produto não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Product.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Produto deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Produto não encontrado.");
    }
};

const addProductPhoto = async(req, res) => {
	try {
		const {id} = req.params;
		const product = await Product.findByPk(id, {include:{model: Photo}});
		if(req.file){
			const path = process.env.APP_URL + "/uploads/" + req.file.filename;
			console.log("path");

			const photo = await Photo.create({
				path: path,
			});
			await product.addPhoto(photo);
		}
		await product.reload();
		return res.status(200).json(product);
	} catch (e) {
		return res.status(500).json(e + "!");
	}
}
const removeProductPhoto = async(req, res) => {
	try {
		const {id} = req.params;
		const photo  = await Photo.findByPk(id);
		const pathDb = photo.path.split("/").slice(-1)[0];
		await fsPromise.unlink(path.join(__dirname, "..", "..", "uploads", pathDb));
		await photo.destroy();
		return res.status(200).json("Foto deletada com sucesso");
	} catch (e) {
		return res.status(500).json(e + "!");
	}
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addProductPhoto,
    removeProductPhoto
};