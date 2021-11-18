const { response } = require('express');
const Cart = require('../models/Cart');

const create = async(req,res) => {
    try{
          const cart = await Cart.create(req.body);
          return res.status(201).json({message: "Carrinho cadastrado com sucesso!", cart: cart});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const carts = await Cart.findAll();
        return res.status(200).json({carts});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const cart = await Cart.findByPk(id);
        return res.status(200).json({cart});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Cart.update(req.body, {where: {id: id}});
        if(updated) {
            const cart = await Cart.findByPk(id);
            return res.status(200).send(cart);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Carrinho não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Cart.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Carrinho deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Carrinho não encontrado.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};