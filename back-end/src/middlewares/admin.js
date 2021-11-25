const User = require('../models/User');


const admin = async(req, res, next) =>{
    const {id} = req.params
    try{
        const user = await User.findByPk(id);
        if (user.is_mod == true)return next();
        else return res.status(401).json({'error': 'Sem autorização'});
    } catch(err) {
        return res.status(500).json({'error': 'Internal Server Error'});
    };
}

module.exports = admin;
