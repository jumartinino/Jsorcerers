const { response } = require('express');
const User_shop = require('../models/User_Shop');
const User = require('../models/User');
const Auth = require("../config/auth");
const {validationResult} = require('express-validator');

const create = async(req,res) => {
    try{
        
        validationResult(req).throw();
        const token = Auth.getToken(req);
        console.log(token);
        const payload = Auth.decodeJwt(token);
        const user = await User.findByPk(payload.sub);

          const newShopData = {

            name: req.body.name,
            UserId: user.id
            

          }
          const user_shop = await User_shop.create(newShopData);
          return res.status(201).json({message: "Loja cadastrado com sucesso!", user_shop: payload.sub});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const user_shops = await User_shop.findAll();
        return res.status(200).json({user_shops});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user_shop = await User_shop.findByPk(id);
        return res.status(200).json({user_shop});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User_shop.update(req.body, {where: {id: id}});
        if(updated) {
            const user_shop = await User_shop.findByPk(id);
            return res.status(200).send(user_shop);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Loja não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User_shop.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Loja deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Loja não encontrado.");
    }
};

const addUserShopPhoto = async(req, res) => {
	try {
		const {id} = req.params;
		const user_shop = await User_Shop.findByPk(id, {include:{model: Photo}});
		if(req.file){
			const path = process.env.APP_URL + "/uploads/" + req.file.filename;
			console.log("path");

			const photo = await Photo.create({
				path: path,
			});
			await user_shop.addPhoto(photo);
		}
		await user_shop.reload();
		return res.status(200).json(user_shop);
	} catch (e) {
		return res.status(500).json(e + "!");
	}
}
const removeUserShopPhoto = async(req, res) => {
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
    addUserShopPhoto,
    removeUserShopPhoto
};