const { response } = require('express');
const Post = require('../models/Post');

const create = async(req,res) => {
    try{
          const post = await Post.create(req.body);
          return res.status(201).json({message: "Post cadastrado com sucesso!", post: post});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const posts = await Post.findAll();
        return res.status(200).json({posts});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const post = await Post.findByPk(id);
        return res.status(200).json({post});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Post.update(req.body, {where: {id: id}});
        if(updated) {
            const post = await Post.findByPk(id);
            return res.status(200).send(post);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Post não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Post.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Post deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Post não encontrado.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};