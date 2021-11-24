const { response } = require('express');
const Favorite = require('../models/Favorites');

const create = async(req,res) => {
    try{
          const favorite = await Favorite.create(req.body);
          return res.status(201).json({message: "Favorito cadastrado com sucesso!", favorite: favorite});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const favorites_list = await Favorite.findAll();
        return res.status(200).json({favorites_list});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const favorite = await Favorite.findByPk(id);
        return res.status(200).json({favorite});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Favorite.update(req.body, {where: {id: id}});
        if(updated) {
            const favorite = await Favorite.findByPk(id);
            return res.status(200).send(favorite);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Favorito não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Favorite.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Favorito deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Favorito não encontrado.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};