const { response } = require('express');
const User_shop = require('../models/User_shop');

const create = async(req,res) => {
    try{
          const user_shop = await User_shop.create(req.body);
          return res.status(201).json({message: "Loja cadastrado com sucesso!", user_shop: user_shop});
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

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};