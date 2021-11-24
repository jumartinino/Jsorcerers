const { response } = require('express');
const User = require("../models/User");
const Auth = require("../config/auth");

const create = async(req,res) => {
	try {
		const { password } = req.body;
		const hashAndSalt = Auth.generatePassword(password);
		const salt = hashAndSalt.salt;
		const hash = hashAndSalt.hash;
		const newUserData = {
            profile_pic: req.body.profile_pic,
			name: req.body.name,
            email: req.body.email,
			hash: hash,
			salt: salt,
			endereco: req.body.endereco,
			data_nasc: req.body.data_nasc,
            is_mod: req.body.is_mod
			
		}
		const user = await User.create(newUserData);
		return res.status(201).json({user: user});
	} catch (e) {
		return res.status(500).json({err: e});
	}
}


const index = async(req,res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({users});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};

const addUserPhoto = async(req, res) => {
	try {
		const {id} = req.params;
		const user = await User.findByPk(id, {include:{model: Photo}});
		if(req.file){
			const path = process.env.APP_URL + "/uploads/" + req.file.filename;
			console.log("path");

			const photo = await Photo.create({
				path: path,
			});
			await user.addPhoto(photo);
		}
		await user.reload();
		return res.status(200).json(user);
	} catch (e) {
		return res.status(500).json(e + "!");
	}
}
const removeUserPhoto = async(req, res) => {
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
    addUserPhoto,
    removeUserPhoto
};