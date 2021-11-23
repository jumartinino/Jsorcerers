const { response } = require('express');
const Buying = require('../models/Buying');

const create = async(req,res) => {
    try{
          const buying = await Buying.create(req.body);
          return res.status(201).json({message: "Compra feita com sucesso!", buying: buying});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const buys = await Buying.findAll();
        return res.status(200).json({buys});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const buying = await Buying.findByPk(id);
        return res.status(200).json({buying});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Buying.update(req.body, {where: {id: id}});
        if(updated) {
            const buying = await Buying.findByPk(id);
            return res.status(200).send(buying);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Compra não encontrada");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Buying.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Compra deletada com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Compra não encontrada.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};